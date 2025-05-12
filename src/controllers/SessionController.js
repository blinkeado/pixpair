import BaseController from './BaseController.js';
import AppUtils from '../utils/AppUtils.js';

class SessionController extends BaseController {
    constructor(sessionModel, sessionPresenter, firebaseService, photoController) {
        super(sessionModel, sessionPresenter);
        this.sessionModel = sessionModel; // For clarity
        this.firebaseService = firebaseService;
        this.photoController = photoController;
    }

    async initialize() {
        AppUtils.debugLog('Initializing SessionController');
        
        // Initialize the presenter with the current model state
        this.presenter.update(this.sessionModel);
        
        // Set up event handlers
        this._setupEventHandlers();
        
        return true;
    }

    async _setupEventHandlers() {
        // Delegate events to handler method
        this.presenter.setEventCallback(this.handleEvent.bind(this));
    }

    async handleEvent(event, data) {
        switch (event) {
            case 'createSession':
                await this._handleCreateSession();
                break;
                
            case 'joinSession':
                await this._handleJoinSession(data);
                break;
                
            case 'exitSession':
                await this._handleExitSession();
                break;
                
            case 'setupCamera':
                await this._handleSetupCamera();
                break;
                
            default:
                AppUtils.debugLog(`Unknown event: ${event}`);
                break;
        }
    }

    async _handleCreateSession() {
        try {
            // Create a new session
            await this.sessionModel.createSession();
            
            // Update presenter
            this.presenter.update(this.sessionModel);
            
            // Initialize camera
            await this._handleSetupCamera();
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Create session failed: ${error.message}`);
            return false;
        }
    }

    async _handleJoinSession(data) {
        try {
            const { sessionId } = data || {};
            
            if (!sessionId) {
                throw new Error('Session ID is required');
            }
            
            // Join the session
            await this.sessionModel.joinSession(sessionId);
            
            // Update presenter
            this.presenter.update(this.sessionModel);
            
            // Initialize camera
            await this._handleSetupCamera();
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Join session failed: ${error.message}`);
            AppUtils.showToast('Failed to join session. Please check the session ID.');
            return false;
        }
    }

    async _handleExitSession() {
        try {
            // Leave the current session
            await this.sessionModel.exitSession();
            
            // Update presenter
            this.presenter.update(this.sessionModel);
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Exit session failed: ${error.message}`);
            return false;
        }
    }

    async _handleSetupCamera() {
        try {
            // Call the photo controller to handle camera setup
            if (this.photoController) {
                await this.photoController.handleEvent('initCamera');
            } else {
                throw new Error('Photo controller not available');
            }
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Camera setup failed: ${error.message}`);
            return false;
        }
    }

    async onSessionUpdate(model) {
        // Handle session model updates here
        AppUtils.debugLog(`Participant count updated: ${model.participants.length}`);
        
        // Update presenter
        this.presenter.update(model);
        
        // If this is a new session with 2 participants, schedule a photo capture
        if (model.participants.length === 2) {
            this._scheduleCaptureEvent();
        }
    }

    async _scheduleCaptureEvent() {
        try {
            // Calculate capture time (3 seconds from now)
            const captureTime = Date.now() + 3000; 
            
            // Update the session with the capture time
            await this.sessionModel.updateCaptureTime(captureTime);
            
            // Update the presenter for countdown
            if (this.photoController) {
                AppUtils.debugLog(`Received capture time: ${new Date(captureTime).toISOString()}`);
                this.photoController.presenter.startCountdown(captureTime);
            }
            
            // Update session presenter
            this.presenter.update(this.sessionModel);
        } catch (error) {
            AppUtils.debugLog(`Schedule capture failed: ${error.message}`);
        }
    }
}

export default SessionController; 