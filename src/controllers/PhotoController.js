import BaseController from './BaseController.js';
import AppUtils from '../utils/AppUtils.js';

class PhotoController extends BaseController {
    constructor(photoModel, photoPresenter, firebaseService) {
        super(photoModel, photoPresenter);
        this.photoModel = photoModel;
        this.photoPresenter = photoPresenter;
        this.firebaseService = firebaseService;
        this._handleVisibilityChange = this._handleVisibilityChange.bind(this);
    }

    async initialize() {
        AppUtils.debugLog('Initializing PhotoController');
        
        // Initialize the presenter with the current model state
        this.presenter.update(this.photoModel);
        
        // Set up event handlers
        this._setupEventHandlers();
        
        // Set up visibility change handler
        document.addEventListener('visibilitychange', this._handleVisibilityChange);
        
        return true;
    }

    async _setupEventHandlers() {
        // Delegate events to handler method
        this.presenter.setEventCallback(this.handleEvent.bind(this));
    }

    async handleEvent(event, data) {
        switch (event) {
            case 'initCamera':
                await this._handleInitCamera();
                break;
                
            case 'stopCamera':
                this._handleStopCamera();
                break;
                
            case 'switchCamera':
                await this._handleSwitchCamera();
                break;
                
            case 'capturePhoto':
                await this._handleCapturePhoto(data);
                break;
                
            case 'combinePhotos':
                await this._handleCombinePhotos(data);
                break;
                
            case 'downloadPhoto':
                await this._handleDownloadPhoto(data);
                break;
                
            case 'sharePhoto':
                await this._handleSharePhoto(data);
                break;
                
            default:
                AppUtils.debugLog(`Unknown event: ${event}`);
                break;
        }
    }
    
    async _handleInitCamera() {
        try {
            const stream = await this.photoModel.initializeCamera();
            this.presenter.updateCameraStream(stream);
            this.presenter.toggleCameraSwitchButton(this.photoModel.hasMultipleCameras);
            return true;
        } catch (error) {
            AppUtils.debugLog(`Camera initialization failed: ${error.message}`);
            AppUtils.showToast('Could not access camera. Please allow camera permissions.');
            return false;
        }
    }
    
    _handleStopCamera() {
        this.photoModel.stopCamera();
    }
    
    async _handleSwitchCamera() {
        try {
            const stream = await this.photoModel.switchCamera();
            this.presenter.updateCameraStream(stream);
            return true;
        } catch (error) {
            AppUtils.debugLog(`Camera switch failed: ${error.message}`);
            AppUtils.showToast('Could not switch camera.');
            return false;
        }
    }

    async _handleCapturePhoto(data) {
        try {
            AppUtils.debugLog("Handling photo capture");
            
            if (!data || !data.videoElement || !data.sessionId) {
                throw new Error('Missing required data for photo capture');
            }
            
            // Capture photo from video element
            const photoData = await this.photoModel.capturePhoto(data.videoElement, data.sessionId);
            AppUtils.debugLog("Photo captured successfully");
            
            // Get the current user
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            // Save the photo directly to Realtime Database for immediate access
            // This is faster than going through Storage for session functionality
            await this.firebaseService.database
                .ref(`sessions/${data.sessionId}/photos/${user.uid}`)
                .set({
                    photoData: photoData,
                    timestamp: Date.now(),
                    userId: user.uid
                });
            
            AppUtils.debugLog("Photo saved to Realtime Database");
            
            // Check if we have both photos for combination
            try {
                const sessionRef = this.firebaseService.database.ref(`sessions/${data.sessionId}/photos`);
                const snapshot = await sessionRef.once('value');
                const photos = snapshot.val();
                
                if (photos) {
                    const photoCount = Object.keys(photos).length;
                    AppUtils.debugLog(`Found ${photoCount} photos in session`);
                    
                    if (photoCount >= 2) {
                        AppUtils.debugLog("Both photos available, starting combination");
                        
                        // Get all photo data entries
                        const photoEntries = Object.values(photos);
                        
                        // Combine the photos
                        const combinedPhotoData = await this._combineTwoPhotos(
                            photoEntries[0].photoData,
                            photoEntries[1].photoData
                        );
                        
                        AppUtils.debugLog("Photos combined successfully");
                        
                        // Save combined photo to the session
                        const combinedPhotoId = `combined_${Date.now()}`;
                        await this.firebaseService.database
                            .ref(`sessions/${data.sessionId}/combinedPhotos/${combinedPhotoId}`)
                            .set({
                                photoData: combinedPhotoData,
                                timestamp: Date.now(),
                                participantIds: Object.keys(photos)
                            });
                        
                        // Add the combined photo to the UI
                        this.photoPresenter.addPhotoSlide(combinedPhotoData);
                        AppUtils.debugLog("Combined photo added to UI");
                        
                        // Also save to Storage for long-term gallery view (async, don't wait)
                        this._savePhotoToStorage(combinedPhotoData, data.sessionId, combinedPhotoId)
                            .then(() => AppUtils.debugLog("Combined photo saved to Storage"))
                            .catch(err => AppUtils.debugLog(`Error saving to Storage: ${err.message}`));
                    }
                }
            } catch (combinationError) {
                AppUtils.debugLog(`Error during photo combination: ${combinationError.message}`);
            }
            
            // Update UI with the captured photo
            this.photoModel.photoData = photoData;
            this.photoPresenter.update(this.photoModel);
            
            // Also save to Storage for gallery view (async, don't wait)
            const photoId = `photo_${Date.now()}`;
            this._savePhotoToStorage(photoData, data.sessionId, photoId)
                .then(() => AppUtils.debugLog("Photo saved to Storage"))
                .catch(err => AppUtils.debugLog(`Error saving to Storage: ${err.message}`));
            
        } catch (error) {
            AppUtils.debugLog(`Error handling photo capture: ${error.message}`);
            throw error;
        }
    }
    
    // Function to combine two photos
    async _combineTwoPhotos(photo1Data, photo2Data) {
        return new Promise((resolve, reject) => {
            try {
                AppUtils.debugLog("Starting photo combination process");
                const img1 = new Image();
                const img2 = new Image();
                let loadedImages = 0;
                
                const checkBothLoaded = () => {
                    loadedImages++;
                    if (loadedImages === 2) {
                        // Create canvas for combined image
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // Set canvas size to stack photos vertically
                        const width = Math.max(img1.width, img2.width);
                        const height = img1.height + img2.height;
                        canvas.width = width;
                        canvas.height = height;
                        
                        // Fill with black background
                        ctx.fillStyle = "#000000";
                        ctx.fillRect(0, 0, width, height);
                        
                        // Center images horizontally if needed
                        const img1X = (width - img1.width) / 2;
                        const img2X = (width - img2.width) / 2;
                        
                        // Draw images stacked vertically
                        ctx.drawImage(img1, img1X, 0);
                        ctx.drawImage(img2, img2X, img1.height);
                        
                        // Add watermark
                        ctx.font = 'bold 24px Arial';
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                        ctx.textAlign = 'right';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText('PixCrab', width - 20, height - 20);
                        
                        // Get combined image data
                        const combinedData = canvas.toDataURL('image/jpeg', 0.9);
                        AppUtils.debugLog("Image combination complete");
                        resolve(combinedData);
                    }
                };
                
                img1.onload = checkBothLoaded;
                img2.onload = checkBothLoaded;
                
                img1.onerror = (e) => {
                    AppUtils.debugLog(`Error loading first image: ${e}`);
                    reject(new Error('Failed to load first image'));
                };
                img2.onerror = (e) => {
                    AppUtils.debugLog(`Error loading second image: ${e}`); 
                    reject(new Error('Failed to load second image'));
                };
                
                img1.src = photo1Data;
                img2.src = photo2Data;
            } catch (error) {
                AppUtils.debugLog(`Photo combination error: ${error.message}`);
                reject(error);
            }
        });
    }
    
    // Helper function to save photos to Storage
    async _savePhotoToStorage(photoData, sessionId, photoId) {
        try {
            const user = this.firebaseService.auth.currentUser;
            if (!user) return;
            
            // Convert data URL to blob
            const response = await fetch(photoData);
            const blob = await response.blob();
            
            // Save to Storage
            const photoPath = `sessions/${sessionId}/photos/${photoId}.jpg`;
            const photoRef = this.firebaseService.storage.ref(photoPath);
            
            // Upload with proper metadata
            const metadata = {
                contentType: 'image/jpeg',
                customMetadata: {
                    sessionId: sessionId,
                    userId: user.uid,
                    timestamp: Date.now().toString(),
                    photoId: photoId
                }
            };
            
            // Upload blob with metadata
            await photoRef.put(blob, metadata);
            
            // Get download URL
            const downloadURL = await photoRef.getDownloadURL();
            
            // Update database reference with storage URL
            await this.firebaseService.database
                .ref(`sessions/${sessionId}/photoRefs/${photoId}`)
                .set({
                    url: downloadURL,
                    path: photoPath,
                    timestamp: Date.now(),
                    userId: user.uid
                });
                
            return downloadURL;
        } catch (error) {
            AppUtils.debugLog(`Error saving to Storage: ${error.message}`);
            throw error;
        }
    }

    async _handleCombinePhotos(data) {
        try {
            const { otherPhotoData } = data || {};
            
            if (!otherPhotoData) {
                throw new Error('Second photo is required for combination');
            }
            
            // Combine photos
            const combinedPhoto = await this.photoModel.combinePhotos(otherPhotoData);
            
            AppUtils.showToast('Photos combined successfully');
            
            return combinedPhoto;
        } catch (error) {
            AppUtils.debugLog(`Photo combination failed: ${error.message}`);
            AppUtils.showToast('Failed to combine photos');
        }
    }

    async _handleDownloadPhoto(data) {
        try {
            const { photoUrl } = data || {};
            
            if (!photoUrl) {
                throw new Error('Photo URL is required for download');
            }
            
            // Create download link
            const link = document.createElement('a');
            link.href = photoUrl;
            link.download = `pixcrab_${new Date().toISOString().slice(0,10)}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            AppUtils.debugLog('Photo download initiated');
        } catch (error) {
            AppUtils.debugLog(`Photo download failed: ${error.message}`);
            AppUtils.showToast('Failed to download photo');
        }
    }

    async _handleSharePhoto(data) {
        try {
            const { photoUrl } = data || {};
            
            if (!photoUrl) {
                throw new Error('Photo URL is required for sharing');
            }
            
            if (navigator.share) {
                // Convert data URL to blob for sharing
                const blob = await fetch(photoUrl).then(res => res.blob());
                const file = new File([blob], 'pixcrab_photo.jpg', { type: 'image/jpeg' });
                
                await navigator.share({
                    title: 'Check out our PixCrab photo!',
                    text: 'We captured this moment together with PixCrab',
                    files: [file]
                });
                
                AppUtils.debugLog('Photo share successful');
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText("Check out our PixCrab photo! Download it here: " + photoUrl);
                AppUtils.showToast('Photo link copied to clipboard');
            }
        } catch (error) {
            AppUtils.debugLog(`Photo share failed: ${error.message}`);
            AppUtils.showToast('Failed to share photo');
        }
    }
    
    _handleVisibilityChange() {
        if (document.hidden) {
            AppUtils.debugLog("Page hidden, pausing camera");
            this._handleStopCamera();
        } else {
            AppUtils.debugLog("Page visible again, resuming camera");
            // We will start the camera again only if we are in a session
            if (document.getElementById('cameraSection')?.classList.contains('hidden') === false) {
                this._handleInitCamera();
            }
        }
    }
    
    cleanup() {
        // Remove event listeners
        document.removeEventListener('visibilitychange', this._handleVisibilityChange);
        
        // Stop the camera
        this._handleStopCamera();
    }
}

export default PhotoController; 