import BaseController from './BaseController.js';
import AppUtils from '../utils/AppUtils.js';

class AuthController extends BaseController {
    constructor(userModel, authPresenter) {
        super(userModel, authPresenter);
        this.userModel = userModel; // For clarity
    }

    async initialize() {
        AppUtils.debugLog('Initializing AuthController');
        
        // Initialize the presenter with the current model state
        this.presenter.update(this.userModel);
        
        // Set up event handlers
        this._setupEventHandlers();
        
        return true;
    }

    async _setupEventHandlers() {
        // Delegate click events to handler method
        this.presenter.setEventCallback(this.handleEvent.bind(this));
    }

    async handleEvent(event, data) {
        switch (event) {
            case 'googleSignIn':
                await this._handleGoogleSignIn();
                break;
                
            case 'appleSignIn':
                await this._handleAppleSignIn();
                break;
                
            case 'guestSignIn':
                await this._handleGuestSignIn();
                break;
                
            case 'signOut':
                await this._handleSignOut();
                break;
                
            default:
                AppUtils.debugLog(`Unknown event: ${event}`);
                break;
        }
    }

    async _handleGoogleSignIn() {
        try {
            AppUtils.showToast('Signing in with Google...');
            await this.userModel.signInWithGoogle();
            AppUtils.showToast('Signed in successfully');
        } catch (error) {
            AppUtils.debugLog(`Google sign-in failed: ${error.message}`);
            AppUtils.showToast('Failed to sign in with Google');
        }
    }

    async _handleAppleSignIn() {
        try {
            AppUtils.showToast('Signing in with Apple...');
            await this.userModel.signInWithApple();
            AppUtils.showToast('Signed in successfully');
        } catch (error) {
            AppUtils.debugLog(`Apple sign-in failed: ${error.message}`);
            AppUtils.showToast('Failed to sign in with Apple');
        }
    }

    async _handleGuestSignIn() {
        try {
            AppUtils.showToast('Signing in as guest...');
            await this.userModel.signInAnonymously();
            AppUtils.showToast('Guest session started');
        } catch (error) {
            AppUtils.debugLog(`Guest sign-in failed: ${error.message}`);
            AppUtils.showToast('Failed to sign in as guest');
        }
    }

    async _handleSignOut() {
        try {
            AppUtils.showToast('Signing out...');
            await this.userModel.signOut();
            AppUtils.showToast('Signed out successfully');
        } catch (error) {
            AppUtils.debugLog(`Sign-out failed: ${error.message}`);
            AppUtils.showToast('Failed to sign out');
        }
    }
}

export default AuthController; 