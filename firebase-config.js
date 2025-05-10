// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzKwHZ5Qa4NfxeBUn5-KoymCUI1Z0EyXE",
    authDomain: "pixpair.firebaseapp.com",
    databaseURL: "https://pixpair-default-rtdb.firebaseio.com",
    projectId: "pixpair",
    storageBucket: "pixpair.appspot.com",
    messagingSenderId: "743134014753",
    appId: "1:743134014753:web:da56b2391f4eb69a63a260",
    measurementId: "G-08ST8X93R2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();

// Make services available globally
window.auth = auth;
window.storage = storage;
window.database = database;

// Session management
class SessionManager {
    constructor() {
        this.currentSession = null;
        this.sessionRef = null;
    }

    // Create a new session
    async createSession() {
        const sessionId = this.generateSessionId();
        const userId = auth.currentUser ? auth.currentUser.uid : 'guest_' + this.generateSessionId();
        
        this.sessionRef = database.ref(`sessions/${sessionId}`);
        await this.sessionRef.set({
            createdBy: userId,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            members: {
                [userId]: {
                    joinedAt: firebase.database.ServerValue.TIMESTAMP,
                    isGuest: !auth.currentUser
                }
            }
        });

        this.currentSession = sessionId;
        return sessionId;
    }

    // Join an existing session
    async joinSession(sessionId) {
        const userId = auth.currentUser ? auth.currentUser.uid : 'guest_' + this.generateSessionId();
        
        this.sessionRef = database.ref(`sessions/${sessionId}`);
        await this.sessionRef.child(`members/${userId}`).set({
            joinedAt: firebase.database.ServerValue.TIMESTAMP,
            isGuest: !auth.currentUser
        });

        this.currentSession = sessionId;
        return sessionId;
    }

    // Check if user is in session
    async isInSession(sessionId) {
        if (!auth.currentUser) return false;
        
        const sessionRef = database.ref(`sessions/${sessionId}`);
        const snapshot = await sessionRef.child('members').once('value');
        return snapshot.hasChild(auth.currentUser.uid);
    }

    // Generate a random session ID
    generateSessionId() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
}

// Picture upload management
class PictureManager {
    constructor(sessionManager) {
        this.sessionManager = sessionManager;
    }

    // Upload a picture
    async uploadPicture(file) {
        if (!this.sessionManager.currentSession) {
            throw new Error('No active session');
        }

        const userId = auth.currentUser ? auth.currentUser.uid : 'guest_' + this.sessionManager.generateSessionId();
        const timestamp = Date.now();
        const pictureId = `${timestamp}_${Math.random().toString(36).substring(2, 8)}`;
        
        // Create storage reference
        const storageRef = storage.ref(`pictures/${userId}/${pictureId}`);
        
        // Add metadata
        const metadata = {
            sessionId: this.sessionManager.currentSession,
            userId: userId,
            timestamp: timestamp,
            isGuest: !auth.currentUser
        };

        // Upload file with metadata
        const snapshot = await storageRef.put(file, { metadata });
        
        // Get download URL
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        // Save picture reference in database
        await database.ref(`sessions/${this.sessionManager.currentSession}/pictures`).push({
            pictureId,
            userId,
            downloadURL,
            timestamp,
            isGuest: !auth.currentUser
        });

        return downloadURL;
    }

    // Get pictures for current session
    async getSessionPictures() {
        if (!this.sessionManager.currentSession) {
            throw new Error('No active session');
        }

        const snapshot = await database.ref(`sessions/${this.sessionManager.currentSession}/pictures`).once('value');
        return snapshot.val() || {};
    }
}

// Initialize managers
const sessionManager = new SessionManager();
const pictureManager = new PictureManager(sessionManager);

// Export for use in other files
window.sessionManager = sessionManager;
window.pictureManager = pictureManager; 