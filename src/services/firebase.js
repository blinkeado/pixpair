import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// Initialize Firebase using the global config
export function initializeFirebase() {
  // Check if Firebase is already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(window.firebaseConfig);
  }
  
  // Enable CORS for Firebase Storage
  const storageRef = firebase.storage().ref();
  const originalPut = storageRef.constructor.prototype.put;
  storageRef.constructor.prototype.put = function(data, metadata) {
    const corsMetadata = metadata || {};
    if (!corsMetadata.customMetadata) {
      corsMetadata.customMetadata = {};
    }
    corsMetadata.customMetadata['Access-Control-Allow-Origin'] = '*';
    return originalPut.call(this, data, corsMetadata);
  };
  
  return firebase;
}

// Authentication functions
export const auth = {
  // Sign in with Google
  signInWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  
  // Sign in anonymously
  signInAnonymously: async () => {
    return firebase.auth().signInAnonymously();
  },
  
  // Sign out
  signOut: async () => {
    return firebase.auth().signOut();
  },
  
  // Get current user
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  }
};

// Session functions
export const sessions = {
  // Create a new session
  createSession: async () => {
    const sessionId = generateSessionId();
    const user = firebase.auth().currentUser;
    if (!user) throw new Error('User not signed in');
    
    await firebase.database().ref(`sessions/${sessionId}`).set({
      createdBy: user.uid,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      participants: {
        [user.uid]: {
          joinedAt: firebase.database.ServerValue.TIMESTAMP,
          isAnonymous: user.isAnonymous
        }
      }
    });
    
    return sessionId;
  },
  
  // Join an existing session
  joinSession: async (sessionId) => {
    const user = firebase.auth().currentUser;
    if (!user) throw new Error('User not signed in');
    
    await firebase.database().ref(`sessions/${sessionId}/participants/${user.uid}`).set({
      joinedAt: firebase.database.ServerValue.TIMESTAMP,
      isAnonymous: user.isAnonymous
    });
    
    return sessionId;
  },
  
  // Leave a session
  leaveSession: async (sessionId) => {
    const user = firebase.auth().currentUser;
    if (!user) return;
    
    await firebase.database().ref(`sessions/${sessionId}/participants/${user.uid}`).remove();
  },
  
  // Get session details
  getSession: async (sessionId) => {
    const snapshot = await firebase.database().ref(`sessions/${sessionId}`).once('value');
    return snapshot.val();
  },
  
  // Listen for session updates
  onSessionUpdate: (sessionId, callback) => {
    const ref = firebase.database().ref(`sessions/${sessionId}`);
    ref.on('value', callback);
    return () => ref.off('value', callback);
  },
  
  // Listen for participants updates
  onParticipantsUpdate: (sessionId, callback) => {
    const ref = firebase.database().ref(`sessions/${sessionId}/participants`);
    ref.on('value', callback);
    return () => ref.off('value', callback);
  }
};

// Photo functions
export const photos = {
  // Save a photo to Realtime Database
  savePhotoToDatabase: async (sessionId, photoData) => {
    const user = firebase.auth().currentUser;
    if (!user) throw new Error('User not signed in');
    
    await firebase.database().ref(`sessions/${sessionId}/photos/${user.uid}`).set({
      photoData: photoData,
      timestamp: Date.now(),
      userId: user.uid
    });
  },
  
  // Save a photo to Storage
  savePhotoToStorage: async (sessionId, photoData, photoId) => {
    const user = firebase.auth().currentUser;
    if (!user) throw new Error('User not signed in');
    
    // Convert data URL to blob
    const response = await fetch(photoData);
    const blob = await response.blob();
    
    // Save to Storage
    const photoPath = `sessions/${sessionId}/photos/${photoId}.jpg`;
    const photoRef = firebase.storage().ref(photoPath);
    
    // Upload with metadata
    const metadata = {
      contentType: 'image/jpeg',
      customMetadata: {
        sessionId: sessionId,
        userId: user.uid,
        timestamp: Date.now().toString(),
        photoId: photoId
      }
    };
    
    await photoRef.put(blob, metadata);
    const downloadURL = await photoRef.getDownloadURL();
    
    // Update database reference
    await firebase.database().ref(`sessions/${sessionId}/photoRefs/${photoId}`).set({
      url: downloadURL,
      path: photoPath,
      timestamp: Date.now(),
      userId: user.uid
    });
    
    return downloadURL;
  },
  
  // Combine two photos
  combineTwoPhotos: async (photo1Data, photo2Data) => {
    return new Promise((resolve, reject) => {
      try {
        console.log("Starting photo combination process");
        const img1 = new Image();
        const img2 = new Image();
        let loadedImages = 0;
        
        const checkBothLoaded = () => {
          loadedImages++;
          if (loadedImages === 2) {
            // Create canvas for combined image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size to stack photos vertically
            const width = Math.max(img1.width, img2.width);
            const height = img1.height + img2.height;
            canvas.width = width;
            canvas.height = height;
            
            // Fill with black background
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);
            
            // Center images horizontally if needed
            const img1X = (width - img1.width) / 2;
            const img2X = (width - img2.width) / 2;
            
            // Draw images stacked vertically
            ctx.drawImage(img1, img1X, 0);
            ctx.drawImage(img2, img2X, img1.height);
            
            // Add watermark
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'bottom';
            ctx.fillText('PixCrab', width - 20, height - 20);
            
            // Get combined image data
            const combinedData = canvas.toDataURL('image/jpeg', 0.9);
            console.log("Image combination complete");
            resolve(combinedData);
          }
        };
        
        img1.onload = checkBothLoaded;
        img2.onload = checkBothLoaded;
        
        img1.onerror = (e) => {
          console.error(`Error loading first image: ${e}`);
          reject(new Error('Failed to load first image'));
        };
        img2.onerror = (e) => {
          console.error(`Error loading second image: ${e}`); 
          reject(new Error('Failed to load second image'));
        };
        
        img1.src = photo1Data;
        img2.src = photo2Data;
      } catch (error) {
        console.error(`Photo combination error: ${error.message}`);
        reject(error);
      }
    });
  },
  
  // Listen for photos in a session
  onPhotosUpdate: (sessionId, callback) => {
    const ref = firebase.database().ref(`sessions/${sessionId}/photos`);
    ref.on('value', callback);
    return () => ref.off('value', callback);
  },
  
  // Listen for combined photos in a session
  onCombinedPhotosUpdate: (sessionId, callback) => {
    const ref = firebase.database().ref(`sessions/${sessionId}/combinedPhotos`);
    ref.on('value', callback);
    return () => ref.off('value', callback);
  }
};

// Helper functions
function generateSessionId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
} 