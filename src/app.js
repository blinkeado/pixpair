import FirebaseService from './services/FirebaseService.js';
import UserModel from './models/UserModel.js';
import SessionModel from './models/SessionModel.js';
import PhotoModel from './models/PhotoModel.js';
import AuthController from './controllers/AuthController.js';
import SessionController from './controllers/SessionController.js';
import PhotoController from './controllers/PhotoController.js';
import AuthPresenter from './presenters/AuthPresenter.js';
import SessionPresenter from './presenters/SessionPresenter.js';
import PhotoPresenter from './presenters/PhotoPresenter.js';
import AppUtils from './utils/AppUtils.js';

class PixCrabApp {
    constructor() {
        AppUtils.debugLog('Initializing PixCrab application');
        
        // Initialize services
        this.firebaseService = new FirebaseService(window.firebaseConfig);
        
        // Initialize MVC components
        this._initializeModels();
        this._initializePresenters();
        this._initializeControllers();
        
        // Check URL for session ID on load
        this._checkUrlForSessionId();
        
        // Show welcome message for first-time users
        this._showWelcomeMessageIfNeeded();
        
        AppUtils.debugLog('PixCrab application initialized');
    }
    
    _initializeModels() {
        AppUtils.debugLog('Initializing models');
        
        // Initialize models
        this.userModel = new UserModel(this.firebaseService);
        this.sessionModel = new SessionModel(this.firebaseService);
        this.photoModel = new PhotoModel(this.firebaseService);
        
        // Set up model listeners
        this.sessionModel.addListener(this._handleSessionModelUpdate.bind(this));
    }
    
    _initializePresenters() {
        AppUtils.debugLog('Initializing presenters');
        
        // Initialize presenters
        this.authPresenter = new AuthPresenter();
        this.sessionPresenter = new SessionPresenter();
        this.photoPresenter = new PhotoPresenter();
    }
    
    _initializeControllers() {
        AppUtils.debugLog('Initializing controllers');
        
        // Initialize controllers
        const authController = new AuthController(this.userModel, this.authPresenter, this.firebaseService);
        const photoController = new PhotoController(this.photoModel, this.photoPresenter, this.firebaseService);
        const sessionController = new SessionController(this.sessionModel, this.sessionPresenter, this.firebaseService);
        
        // Initialize controllers
        authController.initialize();
        photoController.initialize();
        sessionController.initialize();
    }
    
    _handleSessionModelUpdate(model) {
        // Forward session model updates to the controller
        if (this.sessionController) {
            this.sessionController.onSessionUpdate(model);
        }
    }
    
    _checkUrlForSessionId() {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get('sessionId');
        
        if (sessionId) {
            AppUtils.debugLog(`Found session ID in URL: ${sessionId}`);
            
            // Check if user is authenticated before joining the session
            const checkAuth = () => {
                if (this.userModel.isAuthenticated) {
                    // If authenticated, join the session
                    this.sessionController.handleEvent('joinSession', { sessionId });
                } else {
                    // Check again later
                    setTimeout(checkAuth, 1000);
                }
            };
            
            // Start checking authentication status
            checkAuth();
        }
    }
    
    _showWelcomeMessageIfNeeded() {
        if (!localStorage.getItem('pixcrab_visited')) {
            AppUtils.showToast('Share the session ID or QR code with a friend to sync photos!');
            localStorage.setItem('pixcrab_visited', 'true');
        }
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PixCrabApp();
});

export default PixCrabApp; 