import BaseModel from './BaseModel.js';
import AppUtils from '../utils/AppUtils.js';

class PhotoModel extends BaseModel {
    constructor(firebaseService) {
        super();
        this.firebaseService = firebaseService;
        this.reset();
    }

    reset() {
        this.photoId = null;
        this.photoData = null;
        this.sessionId = null;
        this.timestamp = null;
        this.url = null;
        this.thumbnailUrl = null;
        this.storageUrl = null;
        this.status = 'pending';
        this.metadata = {};
        this.photoSize = 0;
        
        // Camera-related state
        this.stream = null;
        this.usingFrontCamera = true;
        this.videoDevices = [];
        this.hasMultipleCameras = false;
    }

    async capturePhoto(videoElement, sessionId) {
        try {
            if (!videoElement) {
                throw new Error('Video element is required for photo capture');
            }
            
            this.sessionId = sessionId;
            this.timestamp = Date.now();
            this.photoId = `photo_${this.timestamp}`;
            
            // Capture photo from video stream
            this.photoData = await AppUtils.capturePhoto(videoElement);
            this.status = 'captured';
            this.notifyListeners();
            
            // Convert data URL to blob for size calculation
            const blob = await fetch(this.photoData).then(res => res.blob());
            this.photoSize = blob.size;
            
            AppUtils.debugLog(`Photo captured: ${this.photoId} (${Math.round(this.photoSize/1024)} KB)`);
            
            return this.photoData;
        } catch (error) {
            AppUtils.debugLog(`Error capturing photo: ${error.message}`);
            throw error;
        }
    }

    async initializeCamera() {
        try {
            AppUtils.debugLog("Initializing camera...");
            
            if (this.stream) {
                this.stopCamera();
            }
            
            const constraints = {
                video: { 
                    facingMode: this.usingFrontCamera ? 'user' : { exact: 'environment' },
                    width: { ideal: 2560 },
                    height: { ideal: 1440 },
                    aspectRatio: 0.75
                },
                audio: false
            };
            
            this.stream = await navigator.mediaDevices.getUserMedia(constraints);
            
            // Check for available video devices for camera switching
            const devices = await navigator.mediaDevices.enumerateDevices();
            this.videoDevices = devices.filter(device => device.kind === 'videoinput');
            this.hasMultipleCameras = this.videoDevices.length > 1;
            
            AppUtils.debugLog("Camera initialized successfully");
            AppUtils.debugLog(`Available cameras: ${this.videoDevices.length}`);
            
            this.notifyListeners();
            return this.stream;
        } catch (err) {
            AppUtils.debugLog(`Camera initialization error: ${err.message}`);
            throw err;
        }
    }

    stopCamera() {
        if (this.stream) {
            AppUtils.debugLog("Stopping camera...");
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
            this.notifyListeners();
        }
    }

    async switchCamera() {
        AppUtils.debugLog(`Switching to ${this.usingFrontCamera ? 'rear' : 'front'} camera`);
        this.usingFrontCamera = !this.usingFrontCamera;
        return this.initializeCamera();
    }

    async save() {
        try {
            if (!this.photoData) {
                throw new Error('No photo data to save');
            }
            
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not signed in');
            }
            
            this.status = 'saving';
            this.notifyListeners();
            
            // First, save directly to Realtime Database for immediate access
            await this.firebaseService.database
                .ref(`sessions/${this.sessionId}/photos/${user.uid}`)
                .set({
                    photoData: this.photoData,
                    timestamp: this.timestamp,
                    userId: user.uid,
                    photoId: this.photoId,
                    status: 'pending_storage'
                });
                
            // Save metadata
            await this._savePhotoMetadata();
            
            // Upload to Storage in background
            try {
                const blob = await fetch(this.photoData).then(res => res.blob());
                
                const photoPath = `sessions/${this.sessionId}/photos/${user.uid}_${this.photoId}.jpg`;
                this.storageUrl = await this.firebaseService.uploadPhoto(blob, photoPath);
                
                // Update database record with Storage URL
                await this.firebaseService.database
                    .ref(`sessions/${this.sessionId}/photos/${user.uid}`)
                    .update({
                        url: this.storageUrl,
                        status: 'stored'
                    });
                    
                // If not a guest user, also save to user's photos collection
                if (!user.isAnonymous) {
                    await this.firebaseService.database
                        .ref(`users/${user.uid}/photos/${this.photoId}`)
                        .set({
                            url: this.storageUrl,
                            sessionId: this.sessionId,
                            timestamp: this.timestamp,
                            photoId: this.photoId
                        });
                }
                
                this.status = 'saved';
            } catch (error) {
                AppUtils.debugLog(`Error in Storage upload: ${error.message}`);
                AppUtils.debugLog("This won't affect photo combination which uses direct database storage");
                this.status = 'saved_partial';
            }
            
            this.notifyListeners();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Error saving photo: ${error.message}`);
            this.status = 'error';
            this.notifyListeners();
            throw error;
        }
    }

    async load(photoId) {
        try {
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not signed in');
            }
            
            this.reset();
            this.photoId = photoId;
            this.status = 'loading';
            this.notifyListeners();
            
            const snapshot = await this.firebaseService.database
                .ref(`users/${user.uid}/photos/${photoId}`)
                .once('value');
                
            if (!snapshot.exists()) {
                throw new Error('Photo not found');
            }
            
            const photoData = snapshot.val();
            this.url = photoData.url;
            this.sessionId = photoData.sessionId;
            this.timestamp = photoData.timestamp;
            this.thumbnailUrl = photoData.thumbnailUrl;
            this.status = 'loaded';
            
            this.notifyListeners();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Error loading photo: ${error.message}`);
            this.status = 'error';
            this.notifyListeners();
            throw error;
        }
    }

    async combinePhotos(otherPhotoData) {
        try {
            if (!this.photoData || !otherPhotoData) {
                throw new Error('Both photos are required for combination');
            }
            
            AppUtils.debugLog("Starting photo combination...");
            
            // Call the utility function to combine photos
            const combinedPhotoData = await this._combineTwoPhotos(this.photoData, otherPhotoData);
            
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not signed in');
            }
            
            // Create a new model for the combined photo
            const combinedPhoto = new PhotoModel(this.firebaseService);
            combinedPhoto.photoData = combinedPhotoData;
            combinedPhoto.sessionId = this.sessionId;
            combinedPhoto.timestamp = Date.now();
            combinedPhoto.photoId = `combined_${combinedPhoto.timestamp}`;
            
            // Save combined photo to Firebase
            await this.firebaseService.database
                .ref(`sessions/${this.sessionId}/combined_photos/${combinedPhoto.photoId}`)
                .set({
                    photoData: combinedPhotoData,
                    timestamp: combinedPhoto.timestamp,
                    userId: user.uid,
                    photoId: combinedPhoto.photoId,
                    status: 'combined'
                });
            
            AppUtils.debugLog(`Photos combined successfully: ${combinedPhoto.photoId}`);
            return combinedPhoto;
        } catch (error) {
            AppUtils.debugLog(`Error combining photos: ${error.message}`);
            throw error;
        }
    }

    async _savePhotoMetadata() {
        try {
            const user = this.firebaseService.auth.currentUser;
            if (!user) return;
            
            // Collect device and browser information
            this.metadata = {
                timestamp: this.timestamp,
                sessionId: this.sessionId,
                photoId: this.photoId,
                size: this.photoSize,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                languages: navigator.languages,
                screen: {
                    width: screen.width,
                    height: screen.height,
                    pixelRatio: window.devicePixelRatio
                },
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                hardware: {
                    cores: navigator.hardwareConcurrency,
                    touchPoints: navigator.maxTouchPoints
                },
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                localTime: new Date().toLocaleString(),
                context: {
                    isMobile: /Mobi|Android/i.test(navigator.userAgent),
                    isGuest: user.isAnonymous
                }
            };
            
            // Save metadata to Firebase
            await this.firebaseService.database
                .ref(`users/${user.uid}/photos/${this.photoId}/metadata`)
                .set(this.metadata);
                
            return true;
        } catch (error) {
            AppUtils.debugLog(`Error saving metadata: ${error.message}`);
            return false;
        }
    }

    async _combineTwoPhotos(photo1Data, photo2Data) {
        return new Promise((resolve, reject) => {
            try {
                const img1 = new Image();
                const img2 = new Image();
                let loadedImages = 0;
                
                const checkBothLoaded = () => {
                    loadedImages++;
                    if (loadedImages === 2) {
                        // Create canvas for combined image
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // Set canvas size to accommodate both images side by side
                        canvas.width = img1.width + img2.width;
                        canvas.height = Math.max(img1.height, img2.height);
                        
                        // Fill with black background
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        
                        // Draw first image
                        ctx.drawImage(img1, 0, 0);
                        
                        // Draw second image
                        ctx.drawImage(img2, img1.width, 0);
                        
                        // Add watermark
                        ctx.font = 'bold 48px Arial';
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                        ctx.textAlign = 'right';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText('PixCrab', canvas.width - 40, canvas.height - 40);
                        
                        // Get combined image data
                        const combinedData = canvas.toDataURL('image/jpeg', 0.9);
                        resolve(combinedData);
                    }
                };
                
                img1.onload = checkBothLoaded;
                img2.onload = checkBothLoaded;
                
                img1.onerror = () => reject(new Error('Failed to load first image'));
                img2.onerror = () => reject(new Error('Failed to load second image'));
                
                img1.src = photo1Data;
                img2.src = photo2Data;
            } catch (error) {
                reject(error);
            }
        });
    }

    getPhotoUrl() {
        return this.storageUrl || this.url || this.photoData;
    }

    getThumbnailUrl() {
        return this.thumbnailUrl || this.storageUrl || this.url || this.photoData;
    }
}

export default PhotoModel; 