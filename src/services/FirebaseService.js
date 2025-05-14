import firebase from "./firebase"; // Ensure firebase is imported if not already

class FirebaseService {
    constructor(firebaseConfig) {
        // Firebase should already be initialized in the firebase.js module
        // We just need to verify it and set up our services
        if (!firebase.apps.length) {
            console.error('Firebase not initialized properly');
        }
        
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.storage = firebase.storage();
        this._authListeners = new Set();
        this.auth.onAuthStateChanged(user => this._notifyAuthListeners(user));
    }

    // Auth methods
    async signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.auth.signInWithPopup(provider);
    }

    async signInWithApple() {
        const provider = new firebase.auth.OAuthProvider('apple.com');
        return this.auth.signInWithPopup(provider);
    }

    async signInAnonymously() {
        return this.auth.signInAnonymously();
    }

    async signOut() {
        return this.auth.signOut();
    }
    
    // Auth state change notification
    onAuthStateChanged(listener) {
        this._authListeners.add(listener);
        
        // Immediately notify with current state if we have a user
        if (this.auth.currentUser) {
            listener(this.auth.currentUser);
        }
        
        // Return unsubscribe function
        return () => {
            this._authListeners.delete(listener);
        };
    }
    
    _notifyAuthListeners(user) {
        this._authListeners.forEach(listener => {
            try {
                listener(user);
            } catch (error) {
                console.error('Error in auth listener:', error);
            }
        });
    }

    // Database methods
    async createSession(sessionId, userId) {
        return this.database.ref(`sessions/${sessionId}`).set({
            owner: userId,
            created: firebase.database.ServerValue.TIMESTAMP,
            active: true
        });
    }

    async joinSession(sessionId, userId, displayName, photoURL) {
        const participantRef = this.database.ref(`sessions/${sessionId}/participants/${userId}`);
        await participantRef.set({
            connected: true,
            lastSeen: firebase.database.ServerValue.TIMESTAMP,
            displayName: displayName || 'Guest',
            photoURL: photoURL || null
        });
        
        // Set up disconnect handling
        participantRef.onDisconnect().update({
            connected: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });
        
        return participantRef;
    }

    listenForSessionUpdates(sessionId, callback) {
        const sessionRef = this.database.ref(`sessions/${sessionId}`);
        sessionRef.on('value', snapshot => {
            callback(snapshot.val());
        });
        
        // Return unsubscribe function
        return () => sessionRef.off('value');
    }

    onSessionUpdate(sessionId, callback) {
        const sessionRef = this.database.ref(`sessions/${sessionId}`);
        sessionRef.on('value', callback);
        
        // Return unsubscribe function
        return () => sessionRef.off('value');
    }

    onParticipantsUpdate(sessionId, callback) {
        const participantsRef = this.database.ref(`sessions/${sessionId}/participants`);
        participantsRef.on('value', callback);
        
        // Return unsubscribe function
        return () => participantsRef.off('value');
    }

    async saveCaptureTiming(sessionId, captureTime) {
        return this.database.ref(`sessions/${sessionId}/captureTime`).set(captureTime);
    }

    // Storage methods
    async uploadPhoto(blob, path) {
        const storageRef = this.storage.ref();
        const photoRef = storageRef.child(path);
        
        // Upload the blob
        const snapshot = await photoRef.put(blob);
        
        // Get the download URL
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        return downloadURL;
    }
    
    async generateThumbnail(blob, path) {
        // In a real implementation, we might resize the image
        // For now, we'll just upload the original as thumbnail
        return this.uploadPhoto(blob, `thumbnails/${path}`);
    }
    
    // Helper methods
    generateUniqueId(length = 6) {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    async checkSessionExists(sessionId) {
        const snapshot = await this.database.ref(`sessions/${sessionId}`).once('value');
        return snapshot.exists();
    }
    
    getServerTimestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
}

export default FirebaseService; 