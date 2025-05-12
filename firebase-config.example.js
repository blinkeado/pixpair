// Firebase configuration
// Rename this file to firebase-config.js and add your Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
  databaseURL: "https://your-project-id-default-rtdb.firebaseio.com"
};

// Make the configuration available to the window object
window.firebaseConfig = firebaseConfig; 