import BaseModel from './BaseModel.js';
import AppUtils from '../utils/AppUtils.js';

class SessionModel extends BaseModel {
    constructor(firebaseService) {
        super();
        this.firebaseService = firebaseService;
        this.reset();
    }

    reset() {
        this.sessionId = null;
        this.isOwner = false;
        this.participants = {};
        this.participantCount = 0;
        this.status = 'disconnected';
        this.captureTime = 0;
        this._unsubscribers = [];
    }

    async createSession() {
        try {
            // Generate a session ID
            this.sessionId = await AppUtils.generateSafeSessionId();
            this.isOwner = true;
            
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not signed in');
            }
            
            // Create the session in Firebase
            await this.firebaseService.createSession(this.sessionId, user.uid);
            
            // Listen for updates
            this._subscribeToSessionUpdates();
            
            AppUtils.debugLog(`Session created: ${this.sessionId}`);
            this.status = 'connected';
            this.notifyListeners();
            
            return this.sessionId;
        } catch (error) {
            AppUtils.debugLog(`Error creating session: ${error.message}`);
            throw error;
        }
    }

    async joinSession(sessionId) {
        console.log(`🔄 [SessionModel] joinSession called with sessionId: ${sessionId}`);
        try {
            this.sessionId = sessionId;
            this.isOwner = false;
            
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                const errorMsg = 'User not signed in when trying to join session';
                console.error(`❌ [SessionModel] ${errorMsg}`);
                throw new Error(errorMsg);
            }
            
            console.log(`👤 [SessionModel] Current user: ${user.uid}, isAnonymous: ${user.isAnonymous}, displayName: ${user.displayName || 'none'}`);
            
            // Join the session in Firebase
            console.log(`🔗 [SessionModel] Calling firebaseService.joinSession for session: ${sessionId}`);
            await this.firebaseService.joinSession(
                sessionId, 
                user.uid,
                user.displayName || 'Guest',
                user.photoURL
            );
            console.log('✅ [SessionModel] Successfully joined session in Firebase');
            
            // Listen for updates
            console.log('👂 [SessionModel] Setting up session update listeners');
            this._subscribeToSessionUpdates();
            
            console.log(`✅ [SessionModel] Successfully joined session: ${this.sessionId}`);
            this.status = 'connected';
            this.notifyListeners();
            
            return true;
        } catch (error) {
            console.error(`❌ [SessionModel] Error in joinSession:`, error);
            AppUtils.debugLog(`❌ [SessionModel] Error joining session: ${error.message}`, error);
            this.reset();
            this.notifyListeners();
            throw error;
        }
    }

    async exitSession() {
        try {
            if (!this.sessionId) {
                throw new Error('No active session');
            }
            
            // Get the current user
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            // Remove the user from the participants list
            await this.firebaseService.database
                .ref(`sessions/${this.sessionId}/participants/${user.uid}`)
                .remove();
            
            // Reset session state
            this.sessionId = null;
            this.participants = {};
            this.captureTime = null;
            
            // Notify listeners
            this.notifyListeners();
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Exit session failed: ${error.message}`);
            throw error;
        }
    }

    // Alias for exitSession to ensure compatibility
    async leaveSession() {
        return this.exitSession();
    }

    async initiateCapture() {
        try {
            if (!this.sessionId) {
                throw new Error('No active session');
            }
            
            // Set capture time 4 seconds in the future
            const captureTime = Date.now() + 4000;
            this.captureTime = captureTime;
            
            // Update Firebase
            await this.firebaseService.database
                .ref(`sessions/${this.sessionId}/capture`)
                .set({ captureTime });
                
            AppUtils.debugLog(`Initiated capture for time: ${new Date(captureTime).toISOString()}`);
            this.notifyListeners();
            
            return captureTime;
        } catch (error) {
            AppUtils.debugLog(`Error initiating capture: ${error.message}`);
            throw error;
        }
    }

    _subscribeToSessionUpdates() {
        const user = this.firebaseService.auth.currentUser;
        if (!user || !this.sessionId) return;

        // Session data updates
        const sessionUnsubscriber = this.firebaseService.onSessionUpdate(
            this.sessionId,
            snapshot => {
                if (!snapshot.exists()) {
                    // Session was deleted
                    if (!this.isOwner) {
                        AppUtils.debugLog('Session ended by owner');
                        this.reset();
                        this.notifyListeners();
                    }
                    return;
                }
                
                const sessionData = snapshot.val();
                this.status = 'connected';
                
                // Check for capture updates
                if (sessionData.capture && sessionData.capture.captureTime !== this.captureTime) {
                    this.captureTime = sessionData.capture.captureTime;
                    AppUtils.debugLog(`Received capture time: ${new Date(this.captureTime).toISOString()}`);
                    this.notifyListeners();
                }
            }
        );
        
        // Participants updates
        const participantsUnsubscriber = this.firebaseService.onParticipantsUpdate(
            this.sessionId,
            snapshot => {
                if (snapshot.exists()) {
                    this.participants = snapshot.val();
                    this.participantCount = Object.keys(this.participants).length;
                } else {
                    this.participants = {};
                    this.participantCount = 0;
                }
                
                AppUtils.debugLog(`Participant count updated: ${this.participantCount}`);
                this.notifyListeners();
            }
        );
        
        this._unsubscribers.push(sessionUnsubscriber, participantsUnsubscriber);
    }

    _unsubscribeAll() {
        this._unsubscribers.forEach(unsubscribe => {
            if (typeof unsubscribe === 'function') {
                unsubscribe();
            }
        });
        this._unsubscribers = [];
    }

    async save() {
        // Nothing to implement for sessions as they are saved in real-time
        return true;
    }

    async load(sessionId) {
        return this.joinSession(sessionId);
    }
}

export default SessionModel; 