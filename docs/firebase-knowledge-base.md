# PixCrab Firebase Knowledge Base

This document serves as a reference for Firebase implementation in the PixCrab application. It includes lessons learned, best practices, and troubleshooting guidance.

## 1. Firebase Configuration

### Current Implementation

The Firebase configuration is centralized in a single file:
- **Location**: `/src/firebase/firebase-config.js`
- **Content**: Firebase API keys and project configuration
- **Usage**: Imported directly by the Firebase service module

```javascript
// src/firebase/firebase-config.js
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

export default firebaseConfig;
```

### Firebase Initialization

Firebase is initialized once in `/src/services/firebase.js`:

```javascript
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase/firebase-config.js';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;
```

### Lessons Learned

1. **Configuration Placement**:
   - ✅ Keep config inside the `/src` directory for build tools to find it
   - ❌ Avoid placing configuration at the root level, as it may not be included in builds
   - ✅ Use relative imports that work in both development and production

2. **Initialization Strategy**:
   - ✅ Initialize Firebase only once and export shared instances
   - ❌ Avoid multiple initializations in different components
   - ✅ Check `firebase.apps.length` before initializing to prevent duplicates

3. **Import Strategy**:
   - ✅ Use Firebase Compat API for consistent syntax
   - ✅ Import only the services you need (auth, database, storage)
   - ❌ Avoid importing Firebase directly in multiple components

## 2. Authentication

### Current Implementation

Authentication is managed through Firebase Authentication:
- **Methods**: Anonymous, Google Sign-In, Email/Password
- **Flow**: Auth → Session Setup → Camera
- **State Management**: App.jsx monitors auth state and controls screen flow

```javascript
// From App.jsx - Auth state monitoring
useEffect(() => {
  if (!initialized) return;
  
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);
    if (user) {
      setCurrentScreen('session');
    } else {
      setCurrentScreen('auth');
    }
  });
  
  return () => unsubscribe();
}, [initialized]);
```

### Authentication Methods

Anonymous authentication is the primary method for quick access:

```javascript
// From AuthScreen.jsx
const handleAnonymousAuth = async () => {
  try {
    const userCredential = await firebase.auth().signInAnonymously();
    console.log("Anonymous authentication successful", userCredential);
    
    // Wait a moment for auth to fully propagate
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get current user - added safety check
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      throw new Error('Authentication succeeded but user is not available.');
    }
  } catch (error) {
    console.error('Anonymous auth error:', error);
    setError(error.message || 'Guest sign-in failed. Please try again.');
  }
};
```

### Lessons Learned

1. **Authentication Timing**:
   - ✅ Add a delay after authentication before performing database operations
   - ❌ Don't assume `currentUser` is immediately available after sign-in
   - ✅ Always check `currentUser` before accessing properties like `uid`

2. **Authentication Flow**:
   - ✅ Separate authentication from session creation
   - ❌ Avoid automatic session creation during authentication
   - ✅ Let the auth state change listener handle navigation

3. **Error Handling**:
   - ✅ Implement specific error handling for authentication
   - ✅ Provide user-friendly error messages
   - ✅ Log detailed error information to console

## 3. Database Structure & Rules

### Current Database Structure

The main entities in the database are:
- **Sessions**: Contains session metadata and participant information
- **Users**: Contains user-specific data
- **Photos**: Stored within sessions, organized by user ID

```
/sessions/{sessionId}/
  - id: string
  - owner: userId
  - created: timestamp
  - status: "active"
  
  /members/{userId}: boolean
  /photos/{userId}/
    - dataUrl: string (base64)
    - timestamp: number
  
  /capture/
    - captureTime: number
    - initiatedBy: userId
    - initiated: timestamp
```

### Security Rules

Current security rules:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "sessions": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "users": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid === $uid"
      }
    },
    "test": {
      ".read": true,
      ".write": true
    }
  }
}
```

### Lessons Learned

1. **Database Structure**:
   - ✅ Use shallow hierarchies for better performance
   - ❌ Avoid deeply nested structures that complicate security rules
   - ✅ Organize by logical entity (sessions, users, etc.)

2. **Security Rules**:
   - ✅ Start with permissive rules during development, then restrict
   - ❌ Avoid overly complex rules that are hard to maintain
   - ✅ Ensure all paths require authentication for both read and write
   - ✅ Test rules thoroughly before deployment

3. **Data Access Patterns**:
   - ✅ Use `.ref()` with exact paths for specific data
   - ✅ Listen to value changes with `.on('value', snapshot => {...})`
   - ✅ Properly unsubscribe with `.off()` in cleanup functions

## 4. Real-time Synchronization

### Current Implementation

The app uses Firebase Realtime Database for synchronizing:
- **Session State**: Members joining/leaving
- **Capture Timing**: Synchronized countdown
- **Photos**: Viewing photos from all participants

```javascript
// Listen for capture time updates
const captureRef = database.ref(`sessions/${sessionId}/capture`);
captureRef.on('value', (snapshot) => {
  const captureData = snapshot.val();
  if (captureData && captureData.captureTime) {
    startCountdown(captureData.captureTime);
  }
});
```

### Photo Synchronization 

Photos are captured and saved to Firebase:

```javascript
// Save photo to Firebase
const photosRef = database.ref(`sessions/${sessionId}/photos/${firebase.auth().currentUser.uid}`);
await photosRef.set({
  dataUrl: canvas.toDataURL('image/jpeg', 0.8),
  timestamp: firebase.database.ServerValue.TIMESTAMP
});
```

### Lessons Learned

1. **Synchronization Strategy**:
   - ✅ Use Firebase real-time listeners for immediate updates
   - ❌ Avoid polling or manual refresh mechanisms
   - ✅ Structure data for efficient synchronization

2. **Data Consistency**:
   - ✅ Use server timestamps for consistent timing across devices
   - ✅ Consider network latency in time-sensitive operations
   - ✅ Implement countdown synchronization with buffer time

3. **Performance Considerations**:
   - ✅ Be mindful of data size, especially with image data
   - ✅ Consider using Firebase Storage for larger files
   - ❌ Avoid storing excessive data in the Realtime Database

## 5. Image Handling Best Practices

### Current Implementation

The app handles images in two different formats:
- **Thumbnails**: Lower resolution for faster loading in galleries
- **Full-size images**: Original resolution for detailed viewing

```javascript
// In CombinedPhotoGallery.jsx - Gallery items setup
const galleryItems = combinedPhotos.map(photo => ({
  src: photo.dataUrl, // Full-size image for modal
  thumbnail: photo.thumbnailDataUrl || photo.dataUrl, // Use thumbnail if available, fallback to full image
  width: photo.width || 500,
  height: photo.height || 375,
  caption: `Photo ${photo.id}`,
  thumbnailWidth: 250,
  thumbnailHeight: 188,
}));
```

### Image Modal Implementation

When a user clicks on a thumbnail, the full-size image is displayed in a modal:

```jsx
// In CombinedPhotoGallery.jsx - Modal component
const PhotoModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="photo-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
      onClick={onClose}
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="modal-content bg-white p-2 rounded-lg shadow-xl max-w-full max-h-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt="Full resolution" 
          className="max-w-full max-h-[90vh] object-contain"
        />
        <button 
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
```

### CSS Configuration for Gallery Clickability

A key issue with React Grid Gallery is ensuring thumbnails remain clickable when overlapping elements exist. The following CSS fixes were applied:

```css
/* Fix for ReactGridGallery clickability issues */
.ReactGridGallery_tile {
  z-index: 10 !important; /* Ensure tiles are above other elements */
  pointer-events: auto !important; /* Force pointer events */
  cursor: pointer !important; /* Ensure cursor indicates clickability */
  position: relative !important; /* Ensure stacking context */
}

.ReactGridGallery_tile-viewport {
  pointer-events: auto !important;
  cursor: pointer !important;
}

.ReactGridGallery_tile-viewport img {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* Ensure camera-screen-content doesn't block gallery clicks */
.camera-screen-content {
  pointer-events: none; /* Let clicks pass through except for its buttons */
}

/* Make sure specific buttons still receive clicks */
.camera-screen-content button,
.session-header,
.gallery-save-controls button {
  pointer-events: auto; 
}
```

### Thumbnail Generation

When saving photos, we generate both a full-size image and a thumbnail:

```javascript
// In CameraScreen.jsx - Photo processing
const processAndSavePhoto = async (capturedImage) => {
  // Create full-size image
  const fullImage = capturedImage.toDataURL('image/jpeg', 0.85);
  
  // Create thumbnail (lower quality, smaller size)
  const thumbnailCanvas = document.createElement('canvas');
  thumbnailCanvas.width = Math.round(capturedImage.width * 0.5);
  thumbnailCanvas.height = Math.round(capturedImage.height * 0.5);
  const thumbnailCtx = thumbnailCanvas.getContext('2d');
  thumbnailCtx.drawImage(capturedImage, 0, 0, thumbnailCanvas.width, thumbnailCanvas.height);
  const thumbnailDataUrl = thumbnailCanvas.toDataURL('image/jpeg', 0.6);
  
  // Save both to Firebase
  const photoRef = database.ref(`sessions/${sessionId}/photos/${userId}`);
  await photoRef.set({
    dataUrl: fullImage,
    thumbnailDataUrl: thumbnailDataUrl,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    width: capturedImage.width,
    height: capturedImage.height,
  });
};
```

### Lessons Learned

1. **Thumbnail Strategy**:
   - ✅ Generate and store separate thumbnails for gallery displays
   - ❌ Avoid using full-size images as thumbnails (performance issues)
   - ✅ Use appropriate quality settings for both images

2. **Gallery Component Behavior**:
   - ✅ Handle z-index and pointer-events carefully when using gallery libraries
   - ❌ Avoid overlapping div elements that can intercept clicks 
   - ✅ Implement proper modal closing through backdrop clicks

3. **Performance Considerations**:
   - ✅ Use image compression options to reduce file sizes
   - ✅ Implement lazy loading for gallery images
   - ✅ Implement responsive image sizing based on device capabilities

## 6. Troubleshooting Guide

### Common Issues and Solutions

1. **Firebase Initialization Failures**
   - **Symptoms**: "Firebase app already exists" errors, undefined Firebase methods
   - **Cause**: Multiple initialization or missing configuration
   - **Solution**: Check that firebase-config.js exists in the correct location, Firebase is initialized only once

2. **Authentication Problems**
   - **Symptoms**: "User is null" errors, unauthorized access
   - **Cause**: Trying to access user properties before auth is complete
   - **Solution**: Add delay after authentication, check for null user, implement proper error handling

3. **Permission Denied Errors**
   - **Symptoms**: "permission_denied" errors in console
   - **Cause**: Security rules not allowing the operation
   - **Solution**: Check security rules, verify user is authenticated, ensure proper paths

4. **Data Not Appearing/Syncing**
   - **Symptoms**: Updates not showing in UI, synchronization issues
   - **Cause**: Incorrect path, missing listeners, improper cleanup
   - **Solution**: Verify database paths, check listener setup, ensure listeners are removed on component unmount

5. **Build/Deploy Issues**
   - **Symptoms**: Works locally but fails on deployment
   - **Cause**: Path resolution differences, missing files in build
   - **Solution**: Use relative paths within src directory, verify files are included in build

## 7. Best Practices for Future Development

1. **Code Organization**
   - Keep Firebase service methods in dedicated service files
   - Abstract database operations into helper functions
   - Maintain consistent path structure throughout the codebase

2. **Error Handling**
   - Implement comprehensive error boundaries
   - Handle Firebase-specific errors separately
   - Provide user feedback for all error states

3. **Testing**
   - Test authentication flows in different scenarios
   - Verify database operations with different user contexts
   - Simulate network issues to test resilience

4. **Security**
   - Regularly review and update security rules
   - Implement proper data validation on both client and server
   - Consider using Firebase Authentication custom claims for additional security

5. **Optimization**
   - Implement proper data indexing for frequent queries
   - Consider using Cloud Functions for server-side operations
   - Optimize image sizes before storage

## 8. Changes Tracking

### Significant Changes Made

1. **Firebase Configuration Centralization**
   - Moved from window.firebaseConfig to dedicated module
   - Relocated from root to src/firebase directory
   - Updated all import references

2. **Security Rules Evolution**
   - Initial permissive rules for development
   - Refined to user-specific access control
   - Simplified for maintainability

3. **Authentication Flow Improvements**
   - Added delay after authentication
   - Separated authentication from session creation
   - Improved error handling and user feedback

4. **Database Structure Optimization**
   - Flattened structure for better performance
   - Simplified member representation
   - Improved photo storage approach

5. **Component Interaction Patterns**
   - Removed direct imports of Firebase in UI components
   - Implemented service-based architecture
   - Added proper cleanup for Firebase listeners

---

**Document Version**: 1.0
**Last Updated**: [Current Date]
**Author**: PixCrab Development Team 