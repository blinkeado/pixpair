import BaseController from './BaseController.js';
import AppUtils from '../utils/AppUtils.js';
import firebase, { database } from '../services/firebase';

class PhotoController extends BaseController {
    constructor(photoModel, photoPresenter, firebaseService) {
        super(photoModel, photoPresenter);
        this.photoModel = photoModel;
        this.photoPresenter = photoPresenter;
        this.firebaseService = firebaseService;
        this.sessionId = null;
        this._handleVisibilityChange = this._handleVisibilityChange.bind(this);
        this._listenForPhotos();
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
            await this.firebaseService.database
                .ref(`sessions/${data.sessionId}/photos/${user.uid}`)
                .set({
                    photoData: photoData,
                    timestamp: Date.now(),
                    userId: user.uid
                });
            
            AppUtils.debugLog("Photo saved to Realtime Database");
            
            // Update UI with the captured photo
            this.photoModel.photoData = photoData;
            this.photoPresenter.update(this.photoModel);
            
        } catch (error) {
            AppUtils.debugLog(`Error handling photo capture: ${error.message}`);
            throw error;
        }
    }

    _listenForPhotos() {
        const sessionRef = firebase.database().ref(`sessions/${this.sessionId}`);
        sessionRef.child('photos').on('value', async snapshot => {
            const photos = snapshot.val() || {};
            const keys = Object.keys(photos);
            if (keys.length < 2) return;

            console.log('Both photos received, combining...');
            const [k1, k2] = keys;
            const p1 = photos[k1].dataUrl || photos[k1].photoData;
            const p2 = photos[k2].dataUrl || photos[k2].photoData;

            try {
                const combined = await this.combineTwoPhotos(p1, p2);
                const id = firebase.database().ref().push().key;
                await sessionRef.child(`combinedPhotos/${id}`).set({
                    dataUrl: combined,
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                });
                console.log('Photos combined successfully');
                this.photoPresenter.addPhotoSlide(combined);
                await sessionRef.child('photos').remove();
            } catch (e) {
                console.error('Error combining photos:', e);
            }
        });
    }

    async combineTwoPhotos(url1, url2) {
        return new Promise((resolve, reject) => {
            const img1 = new Image();
            const img2 = new Image();
            let loaded = 0;
            
            function done() {
                if (++loaded < 2) return;
                const W = 2160, H = 1920;
                const c = document.createElement('canvas');
                c.width = W;
                c.height = H * 2;
                const ctx = c.getContext('2d');
                ctx.drawImage(img1, 0, 0, W, H);
                ctx.drawImage(img2, 0, H, W, H);
                ctx.font = 'bold 48px Arial';
                ctx.fillStyle = 'rgba(255,255,255,0.7)';
                ctx.textAlign = 'right';
                ctx.fillText('PixCrab', W - 40, H * 2 - 40);
                c.toBlob(blob => {
                    if (!blob) return reject(new Error('Canvas toBlob failed'));
                    const r = new FileReader();
                    r.onload = () => resolve(r.result);
                    r.readAsDataURL(blob);
                }, 'image/jpeg', 0.95);
            }
            
            img1.crossOrigin = img2.crossOrigin = 'anonymous';
            img1.onload = img2.onload = done;
            img1.onerror = img2.onerror = reject;
            img1.src = url1;
            img2.src = url2;
        });
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

    _listenForPhotos() {
        const sessionRef = firebase.database().ref(`sessions/${this.sessionId}`);
        sessionRef.child('photos').on('value', async snapshot => {
            const photos = snapshot.val() || {};
            const keys = Object.keys(photos);
            if (keys.length < 2) return;

            console.log('Both photos received, combining...');
            const [k1, k2] = keys;
            const p1 = photos[k1].dataUrl || photos[k1].photoData;
            const p2 = photos[k2].dataUrl || photos[k2].photoData;

            try {
                const combined = await this.combineTwoPhotos(p1, p2);
                const id = firebase.database().ref().push().key;
                await sessionRef.child(`combinedPhotos/${id}`).set({
                    dataUrl: combined,
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                });
                console.log('Photos combined successfully');
                this.photoPresenter.addPhotoSlide(combined);
                await sessionRef.child('photos').remove();
            } catch (e) {
                console.error('Error combining photos:', e);
            }
        });
    }

    async combineTwoPhotos(url1, url2) {
        return new Promise((resolve, reject) => {
            const img1 = new Image();
            const img2 = new Image();
            let loaded = 0;
            
            function done() {
                if (++loaded < 2) return;
                const W = 2160, H = 1920;
                const c = document.createElement('canvas');
                c.width = W;
                c.height = H * 2;
                const ctx = c.getContext('2d');
                ctx.drawImage(img1, 0, 0, W, H);
                ctx.drawImage(img2, 0, H, W, H);
                ctx.font = 'bold 48px Arial';
                ctx.fillStyle = 'rgba(255,255,255,0.7)';
                ctx.textAlign = 'right';
                ctx.fillText('PixCrab', W - 40, H * 2 - 40);
                c.toBlob(blob => {
                    if (!blob) return reject(new Error('Canvas toBlob failed'));
                    const r = new FileReader();
                    r.onload = () => resolve(r.result);
                    r.readAsDataURL(blob);
                }, 'image/jpeg', 0.95);
            }
            
            img1.crossOrigin = img2.crossOrigin = 'anonymous';
            img1.onload = img2.onload = done;
            img1.onerror = img2.onerror = reject;
            img1.src = url1;
            img2.src = url2;
        });
    }
}

export default PhotoController; 