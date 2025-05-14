import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey:      'YOUR_API_KEY',
  authDomain:  'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId:   'YOUR_PROJECT_ID',
  storageBucket:'YOUR_STORAGE_BUCKET',
  messagingSenderId:'YOUR_SENDER_ID',
  appId:       'YOUR_APP_ID'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth     = firebase.auth();
export const database = firebase.database();
export default firebase;

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
    
    // Configure CORS for Firebase Storage
    configureCorsForStorage();
    
    return app;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

// Configure CORS for Firebase Storage
const configureCorsForStorage = () => {
  // Make sure Firebase is initialized
  if (!firebase.apps.length) return;
  
  // Get Firebase storage reference
  const storage = firebase.storage();
  
  try {
    // Add CORS metadata to all uploads
    const storageRef = storage.ref();
    const originalPut = storageRef.constructor.prototype.put;
    
    storageRef.constructor.prototype.put = function(data, metadata = {}) {
      // Create metadata with CORS headers if it doesn't exist
      const corsMetadata = { ...metadata };
      
      if (!corsMetadata.customMetadata) {
        corsMetadata.customMetadata = {};
      }
      
      // Set CORS headers
      corsMetadata.customMetadata['Access-Control-Allow-Origin'] = '*';
      corsMetadata.customMetadata['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
      corsMetadata.customMetadata['Access-Control-Allow-Headers'] = 'Content-Type, Accept, X-Requested-With, Authorization';
      
      // Call the original put method with the updated metadata
      return originalPut.call(this, data, corsMetadata);
    };
    
    console.log('CORS configuration for Firebase Storage completed');
  } catch (error) {
    console.error('Error configuring CORS for Firebase Storage:', error);
  }
};

// Export auth methods for convenience
export const authMethods = {
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
  },

  // Listen to auth state changes
  onAuthStateChanged: (callback) => {
    return firebase.auth().onAuthStateChanged(callback);
  }
};

// Export database methods
export const databaseMethods = {
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
  },

  // Get server timestamp
  getServerTimestamp: () => {
    return firebase.database.ServerValue.TIMESTAMP;
  },

  // Get current user
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  }
};

// Export storage methods
export const storageMethods = {
  // Get a storage reference
  getRef: (path) => {
    return firebase.storage().ref(path);
  },
  
  // Upload a file with CORS headers
  upload: async (path, file, metadata = {}) => {
    // Add CORS headers to metadata
    const corsMetadata = { ...metadata };
    
    if (!corsMetadata.customMetadata) {
      corsMetadata.customMetadata = {};
    }
    
    // Set CORS headers
    corsMetadata.customMetadata['Access-Control-Allow-Origin'] = '*';
    corsMetadata.customMetadata['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
    corsMetadata.customMetadata['Access-Control-Allow-Headers'] = 'Content-Type, Accept, X-Requested-With, Authorization';
    
    return firebase.storage().ref(path).put(file, corsMetadata);
  },
  
  // Get a download URL
  getDownloadURL: async (path) => {
    return firebase.storage().ref(path).getDownloadURL();
  }
};