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
            
            // Save the photo to Firebase
            await this.photoModel.save();
            AppUtils.debugLog("Photo saved to Firebase");
            
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
                        // Get photo data from both entries
                        const photoEntries = Object.values(photos);
                        const photo1 = photoEntries[0].photoData;
                        const photo2 = photoEntries[1].photoData;
                        
                        // Combine the photos
                        const combinedPhoto = await this.photoModel.combinePhotos(photo2);
                        AppUtils.debugLog("Photos combined successfully");
                        
                        // Add the combined photo to the UI
                        this.photoPresenter.addPhotoSlide(combinedPhoto.getPhotoUrl());
                        AppUtils.debugLog("Combined photo added to UI");
                        
                        // Save combined photo to the session
                        await this.firebaseService.database
                            .ref(`sessions/${data.sessionId}/combinedPhotos/combined_${Date.now()}`)
                            .set({
                                photoData: combinedPhoto.photoData,
                                timestamp: Date.now(),
                                status: 'combined'
                            });
                    }
                }
            } catch (combinationError) {
                AppUtils.debugLog(`Error during photo combination: ${combinationError.message}`);
            }
            
            // Update UI
            this.photoPresenter.update(this.photoModel);
            
        } catch (error) {
            AppUtils.debugLog(`Error handling photo capture: ${error.message}`);
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