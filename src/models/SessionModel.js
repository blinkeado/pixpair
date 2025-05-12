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
        try {
            this.sessionId = sessionId;
            this.isOwner = false;
            
            const user = this.firebaseService.auth.currentUser;
            if (!user) {
                throw new Error('User not signed in');
            }
            
            // Join the session in Firebase
            await this.firebaseService.joinSession(sessionId, user.uid);
            
            // Listen for updates
            this._subscribeToSessionUpdates();
            
            AppUtils.debugLog(`Joined session: ${this.sessionId}`);
            this.status = 'connected';
            this.notifyListeners();
            
            return true;
        } catch (error) {
            AppUtils.debugLog(`Error joining session: ${error.message}`);
            this.reset();
            this.notifyListeners();
            throw error;
        }
    }

    async leaveSession() {
        try {
            if (!this.sessionId) {
                return;
            }
            
            const user = this.firebaseService.auth.currentUser;
            if (user) {
                // Remove the participant from the session
                await this.firebaseService.database
                    .ref(`sessions/${this.sessionId}/participants/${user.uid}`)
                    .remove();
                
                // If owner, remove the entire session
                if (this.isOwner) {
                    await this.firebaseService.database
                        .ref(`sessions/${this.sessionId}`)
                        .remove();
                }
            }
            
            // Unsubscribe from all listeners
            this._unsubscribeAll();
            
            // Reset the model
            this.reset();
            this.notifyListeners();
            
            AppUtils.debugLog('Left session');
        } catch (error) {
            AppUtils.debugLog(`Error leaving session: ${error.message}`);
            throw error;
        }
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