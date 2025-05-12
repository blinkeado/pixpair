import BaseController from './BaseController.js';
import AppUtils from '../utils/AppUtils.js';

class SessionController extends BaseController {
    constructor(sessionModel, sessionPresenter, photoController) {
        super(sessionModel, sessionPresenter);
        this.sessionModel = sessionModel; // For clarity
        this.photoController = photoController; // Need to coordinate camera operations
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
                await this._handleJoinSession(data?.sessionId);
                break;
                
            case 'leaveSession':
                await this._handleLeaveSession();
                break;
                
            case 'initiateCapture':
                await this._handleInitiateCapture();
                break;
                
            case 'receiveCapture':
                await this._handleReceiveCapture(data?.captureTime);
                break;
                
            default:
                AppUtils.debugLog(`Unknown event: ${event}`);
                break;
        }
    }

    async _handleCreateSession() {
        try {
            AppUtils.showToast('Creating session...');
            const sessionId = await this.sessionModel.createSession();
            
            // When a session is created, initialize the camera
            await this.photoController.handleEvent('initCamera');
            
            AppUtils.showToast('Session created');
        } catch (error) {
            AppUtils.debugLog(`Create session failed: ${error.message}`);
            AppUtils.showToast('Failed to create session');
        }
    }

    async _handleJoinSession(sessionId) {
        try {
            if (!sessionId) {
                throw new Error('Session ID is required');
            }
            
            AppUtils.showToast('Joining session...');
            await this.sessionModel.joinSession(sessionId);
            
            // When joining a session, initialize the camera
            await this.photoController.handleEvent('initCamera');
            
            AppUtils.showToast('Joined session');
        } catch (error) {
            AppUtils.debugLog(`Join session failed: ${error.message}`);
            AppUtils.showToast('Failed to join session');
        }
    }

    async _handleLeaveSession() {
        try {
            AppUtils.showToast('Leaving session...');
            await this.sessionModel.leaveSession();
            
            // When leaving a session, stop the camera
            this.photoController.handleEvent('stopCamera');
            
            AppUtils.showToast('Session ended');
        } catch (error) {
            AppUtils.debugLog(`Leave session failed: ${error.message}`);
            AppUtils.showToast('Failed to leave session');
        }
    }
    
    async _handleInitiateCapture() {
        try {
            const now = Date.now();
            
            // Prevent frequent captures (minimum 5-second interval)
            if (this.sessionModel.captureTime && now - this.sessionModel.captureTime < 5000) {
                AppUtils.showToast('Please wait before capturing again');
                return;
            }
            
            // Set capture time and broadcast to all participants
            const captureTime = await this.sessionModel.initiateCapture();
            
            // Start countdown on presenter
            this.presenter.startCountdown(captureTime);
        } catch (error) {
            AppUtils.debugLog(`Initiate capture failed: ${error.message}`);
            AppUtils.showToast('Failed to initiate capture');
        }
    }
    
    async _handleReceiveCapture(captureTime) {
        try {
            if (!captureTime) {
                return;
            }
            
            // Start countdown on presenter
            this.presenter.startCountdown(captureTime);
        } catch (error) {
            AppUtils.debugLog(`Receive capture failed: ${error.message}`);
        }
    }
    
    // Method to notify from model when session updates occur
    onSessionUpdate(sessionModel) {
        // If capture time has been updated, handle it
        if (sessionModel.captureTime && sessionModel.captureTime !== this._lastCaptureTime) {
            this._lastCaptureTime = sessionModel.captureTime;
            this._handleReceiveCapture(sessionModel.captureTime);
        }
        
        // Update the presenter with the current model state
        this.presenter.update(sessionModel);
    }
}

export default SessionController; 