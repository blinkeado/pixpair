import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// Initialize Firebase with the config from window.firebaseConfig
export const initializeFirebase = () => {
  // Check if Firebase is already initialized
  if (firebase.apps.length > 0) {
    return firebase.apps[0];
  }
  
  // Get config from window
  const firebaseConfig = window.firebaseConfig;
  if (!firebaseConfig) {
    console.error('Firebase configuration not found on window.firebaseConfig');
    return null;
  }
  
  try {
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
    
    // Enable CORS for Storage
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
    
    return app;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

// Export auth methods for convenience
export const auth = {
  // Sign in with Google
  signInWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  
  // Sign in with email/password
  signInWithEmail: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  
  // Create account with email/password
  createUserWithEmail: async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
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

// Export database methods
export const database = {
  // Get a database reference
  getRef: (path) => {
    return firebase.database().ref(path);
  },
  
  // Set data at a location
  set: async (path, data) => {
    return firebase.database().ref(path).set(data);
  },
  
  // Push new data to a list
  push: async (path, data) => {
    return firebase.database().ref(path).push(data);
  },
  
  // Get data once
  get: async (path) => {
    const snapshot = await firebase.database().ref(path).once('value');
    return snapshot.val();
  }
};

// Export storage methods
export const storage = {
  // Get a storage reference
  getRef: (path) => {
    return firebase.storage().ref(path);
  },
  
  // Upload a file
  upload: async (path, file, metadata) => {
    return firebase.storage().ref(path).put(file, metadata);
  },
  
  // Get a download URL
  getDownloadURL: async (path) => {
    return firebase.storage().ref(path).getDownloadURL();
  }
};

export default {
  initializeFirebase,
  auth,
  database,
  storage
};