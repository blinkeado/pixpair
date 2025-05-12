import BaseModel from './BaseModel.js';
import AppUtils from '../utils/AppUtils.js';

class UserModel extends BaseModel {
    constructor(firebaseService) {
        super();
        this.firebaseService = firebaseService;
        this.reset();
        this._setupAuthListener();
    }

    reset() {
        this.uid = null;
        this.email = null;
        this.displayName = null;
        this.photoURL = null;
        this.isAnonymous = false;
        this.isAuthenticated = false;
        this.authProvider = null;
        this.lastLogin = null;
        this.photoCount = 0;
    }

    _setupAuthListener() {
        this.firebaseService.onAuthStateChanged(user => {
            if (user) {
                this.uid = user.uid;
                this.email = user.email;
                this.displayName = user.displayName || (user.isAnonymous ? 'Guest User' : this.email);
                this.photoURL = user.photoURL;
                this.isAnonymous = user.isAnonymous;
                this.isAuthenticated = true;
                this.authProvider = this._determineAuthProvider(user);
                this.lastLogin = Date.now();
                
                // Load user's photo count
                this._loadPhotoCount();
                
                AppUtils.debugLog(`User authenticated: ${this.displayName} (${this.isAnonymous ? 'Guest' : 'Registered'})`);
            } else {
                this.reset();
                AppUtils.debugLog('User signed out');
            }
            
            this.notifyListeners();
        });
    }

    _determineAuthProvider(user) {
        if (user.isAnonymous) {
            return 'anonymous';
        }
        
        if (user.providerData && user.providerData.length > 0) {
            return user.providerData[0].providerId;
        }
        
        return 'unknown';
    }

    async signInWithGoogle() {
        try {
            AppUtils.debugLog('Attempting Google sign-in');
            await this.firebaseService.signInWithGoogle();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Google sign-in error: ${error.message}`);
            throw error;
        }
    }

    async signInWithApple() {
        try {
            AppUtils.debugLog('Attempting Apple sign-in');
            await this.firebaseService.signInWithApple();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Apple sign-in error: ${error.message}`);
            throw error;
        }
    }

    async signInAnonymously() {
        try {
            AppUtils.debugLog('Attempting anonymous sign-in');
            await this.firebaseService.signInAnonymously();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Anonymous sign-in error: ${error.message}`);
            throw error;
        }
    }

    async signOut() {
        try {
            AppUtils.debugLog('Attempting sign out');
            await this.firebaseService.signOut();
            this.reset();
            this.notifyListeners();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Sign-out error: ${error.message}`);
            throw error;
        }
    }

    isSignedIn() {
        return this.isAuthenticated;
    }

    isGuestUser() {
        return this.isAnonymous;
    }

    async updateProfile(profile) {
        try {
            if (!this.isAuthenticated) {
                throw new Error('User not authenticated');
            }
            
            const currentUser = this.firebaseService.auth.currentUser;
            if (!currentUser) {
                throw new Error('Current user not found');
            }
            
            await currentUser.updateProfile({
                displayName: profile.displayName || this.displayName,
                photoURL: profile.photoURL || this.photoURL
            });
            
            this.displayName = profile.displayName || this.displayName;
            this.photoURL = profile.photoURL || this.photoURL;
            
            this.notifyListeners();
            return true;
        } catch (error) {
            AppUtils.debugLog(`Profile update error: ${error.message}`);
            throw error;
        }
    }

    async _loadPhotoCount() {
        try {
            if (!this.uid) return;
            
            const snapshot = await this.firebaseService.database
                .ref(`users/${this.uid}/photos`)
                .once('value');
                
            this.photoCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
            this.notifyListeners();
        } catch (error) {
            AppUtils.debugLog(`Error loading photo count: ${error.message}`);
        }
    }

    async save() {
        // Nothing to save for user model
        return true;
    }

    async load() {
        // Auth state is handled by Firebase
        return this.isAuthenticated;
    }
}

export default UserModel; 