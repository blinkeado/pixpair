import BasePresenter from './BasePresenter.js';
import AppUtils from '../utils/AppUtils.js';

class AuthPresenter extends BasePresenter {
    constructor() {
        super();
        this.eventCallback = null;
        this._findElements();
        this._bindEventHandlers();
    }

    _findElements() {
        // Auth section elements
        this.authSection = document.getElementById('authSection');
        this.googleSignInBtn = document.getElementById('googleSignIn');
        this.appleSignInBtn = document.getElementById('appleSignIn');
        this.guestSignInBtn = document.getElementById('guestSignIn');
        
        // Session setup elements
        this.sessionSetup = document.getElementById('sessionSetup');
        this.signOutBtn = document.getElementById('signOutBtn');
        
        // Camera section elements
        this.cameraSection = document.getElementById('cameraSection');
        this.cameraSignOutBtn = document.getElementById('cameraSignOutBtn');
        
        // Profile elements
        this.profileBtn = document.getElementById('profileBtn');
        this.userProfilePage = document.getElementById('userProfilePage');
        this.profileUsername = document.getElementById('profileUsername');
        this.profileDisplayName = document.getElementById('profileDisplayName');
        this.profilePhotoCount = document.getElementById('profilePhotoCount');
        this.userProfilePic = document.getElementById('userProfilePic');
    }

    _bindEventHandlers() {
        // Bind click events for auth buttons
        if (this.googleSignInBtn) {
            this.googleSignInBtn.addEventListener('click', () => {
                this._triggerEvent('googleSignIn');
            });
        }
        
        if (this.appleSignInBtn) {
            this.appleSignInBtn.addEventListener('click', () => {
                this._triggerEvent('appleSignIn');
            });
        }
        
        if (this.guestSignInBtn) {
            this.guestSignInBtn.addEventListener('click', () => {
                this._triggerEvent('guestSignIn');
            });
        }
        
        // Bind sign out buttons
        if (this.signOutBtn) {
            this.signOutBtn.addEventListener('click', () => {
                this._triggerEvent('signOut');
            });
        }
        
        if (this.cameraSignOutBtn) {
            this.cameraSignOutBtn.addEventListener('click', () => {
                this._triggerEvent('signOut');
            });
        }
    }

    setEventCallback(callback) {
        this.eventCallback = callback;
    }

    _triggerEvent(event, data = null) {
        if (this.eventCallback) {
            this.eventCallback(event, data);
        }
    }

    update(userModel) {
        this.render(userModel);
    }

    render(userModel) {
        AppUtils.debugLog('Rendering auth UI');
        
        // Show/hide sections based on auth state
        if (userModel.isAuthenticated) {
            // Hide auth section, show session setup
            if (this.authSection) this.authSection.classList.add('hidden');
            if (this.sessionSetup) this.sessionSetup.classList.remove('hidden');
            
            // Update profile button visibility (show for registered users, hide for guests)
            this._updateProfileButton(userModel);
            
            // Update profile page if visible
            this._updateProfilePage(userModel);
        } else {
            // Show auth section, hide other sections
            if (this.authSection) this.authSection.classList.remove('hidden');
            if (this.sessionSetup) this.sessionSetup.classList.add('hidden');
            if (this.cameraSection) this.cameraSection.classList.add('hidden');
            if (this.userProfilePage) this.userProfilePage.classList.add('hidden');
        }
    }

    _updateProfileButton(userModel) {
        if (!this.profileBtn) return;
        
        if (userModel.isAnonymous) {
            this.profileBtn.classList.add('hidden');
        } else {
            this.profileBtn.classList.remove('hidden');
            
            // Ensure profile button click handler is set
            this.profileBtn.onclick = () => this._showUserProfile(userModel);
        }
    }

    _updateProfilePage(userModel) {
        if (!this.userProfilePage) return;
        
        // Update profile information
        if (this.profileUsername) this.profileUsername.textContent = userModel.displayName || '';
        if (this.profileDisplayName) this.profileDisplayName.textContent = userModel.displayName || '';
        if (this.profilePhotoCount) this.profilePhotoCount.textContent = userModel.photoCount || 0;
        
        // Update profile picture
        if (this.userProfilePic) {
            if (userModel.photoURL) {
                this.userProfilePic.innerHTML = `<img src="${userModel.photoURL}" alt="Profile" class="w-full h-full object-cover">`;
            } else {
                // Use initials if no photo
                const initials = (userModel.displayName || '')
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase();
                this.userProfilePic.textContent = initials;
            }
        }
    }

    _showUserProfile(userModel) {
        if (!this.userProfilePage || userModel.isAnonymous) return;
        
        // Update profile information
        this._updateProfilePage(userModel);
        
        // Show profile page
        this.userProfilePage.classList.remove('hidden');
        
        // Hide gallery if open
        const galleryFullScreen = document.getElementById('galleryFullScreen');
        if (galleryFullScreen) {
            galleryFullScreen.classList.add('hidden');
        }
    }
}

export default AuthPresenter; 