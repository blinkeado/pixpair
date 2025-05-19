import React, { useState, useEffect, useRef, useCallback } from 'react';
import { participantsRef, photosRef } from '../../utils/firebaseRefs';
import sessionModel from '../../models/SessionModel';

// Add debugLog function at the top of the file (outside the component)
const debugLog = (...args) => {
  const timestamp = new Date().toISOString();
  const message = args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');
  console.log(`[${timestamp}] DEBUG:`, message);
};

import firebase, { database } from '../../services/firebase';
import useEmblaCarousel from '../../utils/embla-shim';
import Logo from '../../components/Logo';
import CombinedPhotoGallery from './CombinedPhotoGallery';
import PhotoModal from './PhotoModal';
import AppUtils from '../../utils/AppUtils';

// Add Embla carousel styles
const emblaStyles = {
  carousel: "overflow-hidden",
  container: "flex",
  slide: "flex-shrink-0 min-w-0 mx-1 rounded"
};

const CameraScreen = ({ sessionId, onExitSession, onSignOut }) => {
  // Stable callback for participant updates
  const onParticipants = useCallback((snapshot) => {
    const participantData = snapshot.val() || {};
    console.log('📊 DEBUG: Participants updated:', JSON.stringify(participantData));
    setParticipants(participantData);
    setParticipantCount(Object.keys(participantData).length);
  }, []);
  
  // State declarations
  const [error, setError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photosTaken, setPhotosTaken] = useState([]);
  const [combinedPhotos, setCombinedPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [participants, setParticipants] = useState({});
  const [participantCount, setParticipantCount] = useState(0);
  const [copySuccess, setCopySuccess] = useState('');
  const [showGallery, setShowGallery] = useState(false);
  const [sessionThumbnails, setSessionThumbnails] = useState([]);
  const [selectedFullImageUrl, setSelectedFullImageUrl] = useState(null);
  
  // Refs
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const countdownRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  console.log(`💾 DEBUG: Current thumbnails in carousel: ${sessionThumbnails.length}`);
  
  // Listen for new combined photos and update state
  useEffect(() => {
    if (!sessionId) return;
    
    console.log('[PixCrab] Setting up photos listener for session:', sessionId);
    
    let isMounted = true;
    const ref = database.ref(`sessions/${sessionId}/photos`);
    
    const handleNewPhoto = (snapshot) => {
      if (!isMounted) return;
      
      try {
        const photo = snapshot.val();
        if (photo && photo.dataUrl) {
          console.log('[PixCrab] New photo received, length:', photo.dataUrl.length);
          
          // Check if this photo already exists in the state to prevent duplicates
          setCombinedPhotos(prev => {
            // Only add if not already in the array
            if (!prev.some(p => p === photo.dataUrl)) {
              return [...prev, photo.dataUrl];
            }
            return prev;
          });
        }
      } catch (error) {
        console.error('[PixCrab] Error processing new photo:', error);
      }
    };
    
    // Set up the listener
    const query = ref.orderByChild('createdAt').startAt(Date.now());
    query.on('child_added', handleNewPhoto);
    
    // Cleanup function
    return () => {
      isMounted = false;
      console.log('[PixCrab] Cleaning up photos listener');
      
      try {
        // Clean up the specific query listener
        if (query) {
          query.off('child_added', handleNewPhoto);
        }
        
        console.log('[PixCrab] Photos listener cleanup completed');
      } catch (error) {
        console.error('Error during photo listener cleanup:', error);
      }
    };
  }, [sessionId]);
  
  // Redirect if no sessionId
  useEffect(() => {
    if (!sessionId) {
      console.log('No session ID provided, exiting session');
      stopCamera(); // Make sure to stop camera if no session ID
      if (typeof onExitSession === 'function') {
        onExitSession();
      }
      return;
    }
  }, [sessionId, onExitSession]);
  
  // Viewport height polyfill for iOS
  useEffect(() => {
    function updateViewportHeight() {
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      document.documentElement.style.setProperty(
        '--viewport-height',
        `${vh}px`
      );
      console.log('📏 Updated viewport height:', vh);
    }
    
    // Update on mount
    updateViewportHeight();
    
    // Update on resize and orientation change
    window.visualViewport?.addEventListener('resize', updateViewportHeight);
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);
  
  // Enhanced debug logging
  useEffect(() => {
    console.log('🔍 BUTTON RENDER CONDITIONS:', {
      cameraReady,
      uploading,
      countdown,
      participantCount,
      disabled: !cameraReady || uploading || countdown !== null || participantCount < 2,
      videoRef: videoRef.current ? 'exists' : 'null',
      videoSrcObject: videoRef.current?.srcObject ? 'stream active' : 'no stream'
    });
  }, [cameraReady, uploading, countdown, participantCount]);
  
  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      console.log('🎥 CameraScreen unmounting - stopping camera');
      stopCamera();
      
      // Remove any legacy slide containers on unmount
      const slideContainer = document.getElementById('slideContainer');
      if (slideContainer) {
        console.log('🧹 DEBUG: Removing legacy slideContainer on unmount');
        slideContainer.remove();
      }
      
      const hintText = document.getElementById('hintText');
      if (hintText) {
        console.log('🧹 DEBUG: Removing legacy hintText on unmount');
        hintText.remove();
      }
      
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);
  
  // Debug camera readiness
  useEffect(() => {
    console.log('🎥 CAMERA READY STATE CHANGED:', cameraReady);
    
    // Additional debugging to monitor camera readiness state changes
    console.log('🎥 DEBUG: Camera state details:', {
      ready: cameraReady,
      videoRef: videoRef.current ? 'exists' : 'null',
      videoSrcObject: videoRef.current?.srcObject ? 'stream active' : 'no stream',
      videoWidth: videoRef.current?.videoWidth || 'unknown',
      videoHeight: videoRef.current?.videoHeight || 'unknown',
      tracks: videoRef.current?.srcObject?.getTracks().length || 0
    });
  }, [cameraReady]);
  
  // Set up Firebase listeners and initialize camera when component mounts or sessionId changes
  useEffect(() => {
    if (!sessionId) {
      return;
    }

    console.log('📊 DEBUG: Setting up Firebase listeners for session:', sessionId);
    
    // Define all Firebase references at the top level to avoid duplicate declarations
    const sessionRef = database.ref(`sessions/${sessionId}`);
    const participantsRef = database.ref(`sessions/${sessionId}/participants`);
    const photosRef = database.ref(`sessions/${sessionId}/photos`);
    const combinedPhotosRef = database.ref(`sessions/${sessionId}/combinedPhotos`);
    const captureRef = database.ref(`sessions/${sessionId}/capture`);
    const connectedRef = database.ref('.info/connected');
    
    // Initialize camera with retry logic
    const initCameraWithRetry = async (attempt = 1, maxAttempts = 3) => {
      try {
        console.log(`🎥 Attempting to initialize camera (attempt ${attempt}/${maxAttempts})`);
        await stopCamera();
        await initializeCamera();
        console.log('🎥 Camera initialized successfully');
      } catch (error) {
        console.error(`🎥 Camera initialization attempt ${attempt} failed:`, error);
        
        if (attempt < maxAttempts) {
          // Exponential backoff before retry
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          console.log(`🎥 Retrying camera initialization in ${delay}ms...`);
          
          return new Promise(resolve => {
            setTimeout(() => {
              initCameraWithRetry(attempt + 1, maxAttempts).then(resolve);
            }, delay);
          });
        } else {
          console.error('🎥 Max camera initialization attempts reached');
          setError('Failed to initialize camera. Please refresh the page and try again.');
        }
      }
    };
    
    // Start camera initialization
    let isMounted = true;
    
    const setupSession = async () => {
      try {
        // Add current user to participants with authentication info
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          const userId = currentUser.uid;
          const isAnonymous = currentUser.isAnonymous;
          const displayName = currentUser.displayName || (isAnonymous ? 'Guest User' : currentUser.email || 'Unknown');
          
          console.log(`📊 DEBUG: Adding current user to participants: ${userId}, isAnonymous: ${isAnonymous}`);
          
          // Add participant with auth info to participants node
          await database.ref(`sessions/${sessionId}/participants/${userId}`).set({
            connected: true,
            lastSeen: firebase.database.ServerValue.TIMESTAMP,
            displayName: displayName,
            photoURL: currentUser.photoURL || null,
            isAnonymous: isAnonymous
          });
          
          // Also update the members node with authentication status
          await database.ref(`sessions/${sessionId}/members/${userId}`).set({
            isAnonymous: isAnonymous,
            joinTime: firebase.database.ServerValue.TIMESTAMP
          });
          
          console.log('📊 DEBUG: User added to session participants');
        }
        
        // Initialize camera after setting up user data
        if (isMounted) {
          await initCameraWithRetry();
        }
      } catch (error) {
        console.error('Error in session setup:', error);
        if (isMounted) {
          setError('Error setting up session. Please try again.');
        }
      }
    };
    
    // Start the session setup
    setupSession();
    
    // Cleanup function
    return () => {
      isMounted = false;
      console.log('🧹 CLEANING UP CAMERA SCREEN - START');
      
      // Stop camera and clean up resources
      stopCamera().catch(error => {
        console.error('Error during camera cleanup:', error);
      });
      
      // Clean up Firebase listeners
      if (sessionId) {
        console.log(`🧹 Removing Firebase listeners for session: ${sessionId}`);
        
        // Get references to all Firebase paths we're listening to
        const sessionRef = database.ref(`sessions/${sessionId}`);
        // Using the participantsRef defined at the top level
        const combinedPhotosRef = database.ref(`sessions/${sessionId}/combinedPhotos`);
        // Using captureRef defined at the top level
        
        // Remove all listeners
        sessionRef.off('value');
        participantsRef.off('value', onParticipants);
        combinedPhotosRef.off('child_added');
        captureRef.off('value');
        
        // Update user's connection status
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          console.log(`🧹 Updating connection status for user: ${currentUser.uid}`);
          const userSessionRef = database.ref(`sessions/${sessionId}/participants/${currentUser.uid}`);
          userSessionRef.update({ 
            connected: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP 
          }).catch(error => {
            console.error('Error updating user connection status:', error);
          });
          
          // Remove user-specific listeners
          console.log(`🧹 Removing user listeners for: ${currentUser.uid}`);
          const userRef = database.ref(`users/${currentUser.uid}`);
          userRef.off('value');
        }
      }
      
      console.log('🧹 CLEANUP COMPLETE');
    };
    
    // Set up initial session data check
    sessionRef.once('value', (snapshot) => {
      console.log('📊 DEBUG: Initial session data check:', JSON.stringify(snapshot.val()));
      const sessionData = snapshot.val();
      if (sessionData) {
        const fields = Object.keys(sessionData);
        console.log('📊 DEBUG: Session exists with fields:', fields);
      } else {
        console.log('📊 DEBUG: Session does not exist');
      }
    });
    
    // Set up all Firebase listeners
    console.log('📊 DEBUG: Setting up all Firebase listeners for path:', `sessions/${sessionId}`);
    
    // Listen for participants in this session
    console.log('📊 DEBUG: Setting up participants listener');
    // Using the participantsRef defined at the top level
    participantsRef.on('value', onParticipants);
    
    // Listen for capture time updates
    console.log('📊 DEBUG: Setting up capture time listener');
    captureRef.on('value', (snapshot) => {
      const captureData = snapshot.val();
      console.log('📊 DEBUG: Capture data update:', JSON.stringify(captureData));
      if (captureData && captureData.captureTime) {
        console.log('📊 DEBUG: Valid capture time received, starting countdown');
        startCountdown(captureData.captureTime);
      } else {
        console.log('📊 DEBUG: No valid capture time in the data');
      }
    });
    
    // Load photos based on user authentication status
    const loadPhotosBasedOnAuthentication = () => {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        console.log('📊 DEBUG: No authenticated user, only loading session photos');
        loadSessionPhotos();
      } else if (currentUser.isAnonymous) {
        console.log('📊 DEBUG: Guest user, only loading session photos');
        loadSessionPhotos();
      } else {
        console.log('📊 DEBUG: Authenticated user, loading all user photos');
        loadUserPhotos(currentUser.uid);
      }
    };
    
    // Load session photos (only for the current session)
    const loadSessionPhotos = () => {
      combinedPhotosRef.on('child_added', (snapshot) => {
        const photo = { id: snapshot.key, ...snapshot.val() };
        console.log('📊 DEBUG: New combined photo in session:', snapshot.key);
        setCombinedPhotos((prevPhotos) => {
          // Avoid duplicates by checking if photo with same ID already exists
          if (prevPhotos.some(p => p.id === photo.id)) {
            return prevPhotos;
          }
          return [...prevPhotos, photo];
        });
      });
    };
    
    // Load all user photos (persistent across sessions)
    const loadUserPhotos = useCallback(async (userId) => {
      if (!userId) {
        debugLog('No userId provided to loadUserPhotos');
        return;
      }
      
      debugLog(`Gallery loader starting for user: ${userId}`);
      console.log(`🔄 DEBUG: Loading photos for user: ${userId}`);
      
      try {
        setLoading(true);
        setError(null);
        
        // First, check if we have the UserProfile component
        if (typeof UserProfile !== 'undefined') {
          debugLog('Using UserProfile component to load photos');
          // If we have the UserProfile component, use it to load photos
          const userPhotos = await UserProfile.loadUserPhotos(userId);
          debugLog(`Loaded ${userPhotos.length} photos from UserProfile`);
          setUserPhotos(userPhotos);
        } else {
          debugLog('UserProfile not available, falling back to direct Firebase query');
          // Fallback to direct Firebase query if UserProfile is not available
          const userRef = database.ref(`users/${userId}/combinedPhotos`);
          
          debugLog('Setting up Firebase value listener for user photos');
          userRef.on('value', (snapshot) => {
            const photosData = snapshot.val() || {};
            debugLog(`Received ${Object.keys(photosData).length} photos from Firebase`);
            
            const photosList = Object.entries(photosData).map(([id, data]) => ({
              id,
              ...data
            }));
            
            debugLog(`Processed ${photosList.length} photos for gallery`);
            setUserPhotos(photosList);
          });
          
          return () => {
            debugLog('Cleaning up Firebase listener for user photos');
            userRef.off('value');
          };
        }
      } catch (err) {
        const errorMsg = `Error loading user photos: ${err.message}`;
        console.error('❌ ERROR:', errorMsg, err);
        debugLog('Error in loadUserPhotos:', { error: err.message, stack: err.stack });
        setError('Failed to load your photos');
      } finally {
        debugLog('Finished loading user photos');
        setLoading(false);
      }
    }, []);
    
    // Initialize photo loading based on authentication
    loadPhotosBasedOnAuthentication();
    
    // Listen for auth state changes to reload photos accordingly
    firebase.auth().onAuthStateChanged((user) => {
      console.log('📊 DEBUG: Auth state changed, reloading photos');
      loadPhotosBasedOnAuthentication();
    });
    
    // Set up child_added listener for photos
    console.log('📊 DEBUG: Setting up child_added listener for photos');
    photosRef.on('child_added', (snapshot) => {
      const photo = { id: snapshot.key, ...snapshot.val() };
      console.log('📊 DEBUG: New photo detected in Firebase -', snapshot.key, 'with timestamp:', photo.timestamp);
      setPhotosTaken((prevPhotos) => {
        console.log('📊 DEBUG: Updating photosTaken state, current count:', prevPhotos.length);
        return [...prevPhotos, photo];
      });
    }, (error) => {
      console.error('📊 DEBUG: Error in child_added listener:', error);
    });
    
    // Test database write permission to verify connection
    console.log('📊 DEBUG: Testing Firebase write permission...');
    sessionRef.child('test').set({
      test: 'write-test',
      timestamp: Date.now()
    }).then(() => {
      console.log('📊 DEBUG: Firebase test write successful');
      
      // Read it back to verify read permission
      return sessionRef.child('test').once('value');
    }).then((snapshot) => {
      console.log('📊 DEBUG: Firebase test read successful:', snapshot.val());
    }).catch((error) => {
      console.error('📊 DEBUG: Firebase permission error:', error.message);
    });
    
    // Check connection status
    connectedRef.on('value', (snap) => {
      if (snap.val() === true) {
        console.log('📊 DEBUG: Connected to Firebase');
      } else {
        console.log('📊 DEBUG: Disconnected from Firebase');
      }
    });
    

    
    // Set up value listener for combined photos
    console.log('📊 DEBUG: Setting up value listener for combined photos');
    combinedPhotosRef.on('value', (snapshot) => {
      try {
        const combinedPhotos = snapshot.val() || {};
        AppUtils.info(`combinedPhotos state changed: ${Object.keys(combinedPhotos).length} photos`);
        
        // Format and sort data for easier consumption
        const photosList = Object.entries(combinedPhotos)
          .map(([id, photo]) => ({ id, ...photo }))
          .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        
        const combinedCount = photosList.filter(p => p.isCombined).length;
        const individualCount = photosList.length - combinedCount;
        AppUtils.info(`Photo breakdown - ${combinedCount} combined, ${individualCount} individual`);
        
        if (photosList.length > 0) {
          AppUtils.info(`First photo: id=${photosList[0].id}, combined=${photosList[0].isCombined}`);
          
          // Extract thumbnail URLs for the carousel
          const thumbnails = photosList
            .filter(photo => photo.isCombined)
            .map(photo => photo.thumbnailUrl || photo.url || '')
            .filter(url => url && url.length > 0);
            
          console.log(`🔄 DEBUG: Found ${thumbnails.length} combined photo thumbnails for carousel`);
          
          // Update carousel thumbnails, avoiding duplicates
          if (thumbnails.length > 0) {
            setSessionThumbnails(prevThumbnails => {
              // Deep copy to avoid potential reference issues
              const updatedThumbnails = [...prevThumbnails];
              let changed = false;
              
              // Add any new thumbnails that aren't already in the array
              thumbnails.forEach(thumbnail => {
                if (!updatedThumbnails.includes(thumbnail)) {
                  console.log(`🔄 DEBUG: Adding combined photo thumbnail to carousel`);
                  updatedThumbnails.push(thumbnail);
                  changed = true;
                }
              });
              
              console.log(`🔄 DEBUG: Carousel now has ${updatedThumbnails.length} thumbnails after update`);
              return changed ? updatedThumbnails : prevThumbnails;
            });
          }
        }
        
        setCombinedPhotos(photosList);
      } catch (error) {
        console.error('Error in combined photos listener:', error);
      }
    });
    
    // Set up value listener for individual photos (to show in gallery)
    photosRef.on('value', (snapshot) => {
      console.log('📊 DEBUG: Photos value event triggered');
      const photosData = snapshot.val() || {};
      console.log('📊 DEBUG: Photos participants count:', Object.keys(photosData).length);
      
      // Transform the data into an array of photos with user info - for processing only
      const photoList = [];
      
      Object.entries(photosData).forEach(([userId, userPhotos]) => {
        console.log(`📊 DEBUG: Processing photos for user ${userId}`);
        
        // If userPhotos is an object with multiple photo entries
        if (typeof userPhotos === 'object') {
          // Check if it's the old format (direct dataUrl + timestamp) or new format (nested photo objects)
        if (userPhotos.dataUrl) {
            // Legacy format - single photo directly under user ID
            console.log(`📊 DEBUG: Found legacy format photo for user ${userId}`);
          photoList.push({
            userId,
            dataUrl: userPhotos.dataUrl,
            timestamp: userPhotos.timestamp
          });
          } else {
            // New format - multiple photos with unique IDs
            console.log(`📊 DEBUG: Found ${Object.keys(userPhotos).length} photos for user ${userId}`);
          Object.entries(userPhotos).forEach(([photoId, photoData]) => {
              if (photoData && photoData.dataUrl) {
                console.log(`📊 DEBUG: Processing photo ${photoId} for user ${userId}`);
            photoList.push({
              userId,
              photoId,
              ...photoData
            });
              }
            });
          }
        }
      });
      
      // Sort by timestamp, newest first
      photoList.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      
      console.log(`📊 DEBUG: Processed ${photoList.length} individual photos from ${Object.keys(photosData).length} participants`);
      
      // We no longer add individual photos to the gallery - they are only used for combining
      // The combinedPhotos state should only contain actual combined photos
      // This listener is just for debugging and ensuring we have the data
    }, (error) => {
      console.error('📊 DEBUG: Error in value listener:', error);
    });
    
    // Listen for participants in this session
    console.log('📊 DEBUG: Setting up participants listener');
    // Using the participantsRef defined at the top level
    participantsRef.on('value', onParticipants);
    
    // Listen for capture time updates
    console.log('📊 DEBUG: Setting up capture time listener');
    captureRef.on('value', (snapshot) => {
      const captureData = snapshot.val();
      console.log('📊 DEBUG: Capture data update:', JSON.stringify(captureData));
      if (captureData && captureData.captureTime) {
        console.log('📊 DEBUG: Valid capture time received, starting countdown');
        startCountdown(captureData.captureTime);
      } else {
        console.log('📊 DEBUG: No valid capture time in the data');
      }
    });
    
    return () => {
      // Clean up
      console.log('🧹 DEBUG: Cleaning up Firebase listeners and camera');
      stopCamera();
      
      // Cancel all listeners
      sessionRef.off();
      photosRef.off();
      combinedPhotosRef.off();
      connectedRef.off();
      participantsRef.off('value', onParticipants);
      captureRef.off();
      
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
      
      console.log('🧹 DEBUG: All listeners removed');
    };
  }, [sessionId]);
  
  const stopCamera = useCallback(() => {
    console.log('🎥 STOPPING CAMERA - Current state:', {
      hasVideoRef: !!videoRef.current,
      hasSrcObject: videoRef.current?.srcObject ? true : false,
      cameraReadyState: cameraReady
    });
    
    // Clear any pending timeouts or intervals
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
      setCountdown(null);
    }
    
    // Stop all media tracks
    if (videoRef.current && videoRef.current.srcObject) {
      try {
        const tracks = videoRef.current.srcObject.getTracks();
        console.log(`🎥 Found ${tracks.length} tracks to stop`);
        
        tracks.forEach(track => {
          try {
            console.log(`🎥 Stopping track:`, {
              kind: track.kind,
              id: track.id,
              enabled: track.enabled,
              readyState: track.readyState,
              muted: track.muted
            });
            track.stop();
          } catch (trackError) {
            console.error('🎥 Error stopping track:', trackError);
          }
        });
        
        videoRef.current.srcObject = null;
        console.log('🎥 Successfully stopped all tracks and cleared srcObject');
      } catch (error) {
        console.error('🎥 Error during camera stop:', error);
      }
    } else {
      console.log('🎥 No active camera stream to stop');
    }
    
    // Reset camera state
    setCameraReady(false);
    
    // Force a small delay before allowing camera to be reinitialized
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('🎥 Camera cleanup complete');
        resolve();
      }, 300);
    });
  }, [cameraReady]);
  
  // Enhanced exit session to ensure camera is stopped
  const handleExitSession = () => {
    console.log('🎥 Exit session - stopping camera');
    stopCamera();
    
    // Remove any existing slideContainer or overlay elements from legacy code
    const slideContainer = document.getElementById('slideContainer');
    if (slideContainer) {
      console.log('🧹 DEBUG: Removing legacy slideContainer');
      slideContainer.remove();
    }
    
    const hintText = document.getElementById('hintText');
    if (hintText) {
      console.log('🧹 DEBUG: Removing legacy hintText');
      hintText.remove();
    }
    
    // Clear session thumbnails
    setSessionThumbnails([]);
    
    if (typeof onExitSession === 'function') {
      onExitSession();
    }
  };

  // Navigate to user profile page for authenticated users
  const navigateToProfile = () => {
    const currentUser = firebase.auth().currentUser;
    
    if (currentUser && !currentUser.isAnonymous) {
      // Only allow authenticated users to access profile
      console.log('👥 DEBUG: Authenticated user accessing profile');
      
      // Stop camera before navigating
      stopCamera();
      
      // Use window.location to navigate to profile page
      window.location.href = '/profile';
    } else {
      // Guests can't access profile page
      console.log('👥 DEBUG: Guest user attempted to access profile');
      setError("Sign in to view your permanent photo gallery");
      setTimeout(() => setError(null), 3000);
    }
  };

  // Function to copy session ID to clipboard
  const copySessionIdToClipboard = () => {
    if (sessionId) {
      navigator.clipboard.writeText(sessionId)
        .then(() => {
          setCopySuccess('Copied!');
          setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          setCopySuccess('Failed to copy');
        });
    }
  };
  
  // Function to initiate synchronized capture with network latency calculation
  const initiateCapture = async () => {
    console.log('📸 DEBUG: initiateCapture function called');
    try {
      // Measure approximate network latency
      console.log('📸 DEBUG: Measuring network latency...');
      const startTime = Date.now();
      await database.ref('.info/serverTimeOffset').once('value');
      const endTime = Date.now();
      const approximateLatency = endTime - startTime;
      console.log(`📸 DEBUG: Network latency measured: ${approximateLatency}ms`);
      
      // Calculate a buffer (minimum 1 second + network latency + safety margin)
      const buffer = Math.max(1000, approximateLatency * 2);
      console.log(`📸 DEBUG: Calculated buffer time: ${buffer}ms`);
      
      // Set capture time in the future with buffer
      const captureTime = Date.now() + 3000 + buffer;
      console.log(`📸 DEBUG: Set capture time to: ${new Date(captureTime).toISOString()}`);
      
      // Save to Firebase
      console.log('📸 DEBUG: Saving capture data to Firebase...');
      await database.ref(`sessions/${sessionId}/capture`).set({
        captureTime,
        initiatedBy: firebase.auth().currentUser?.uid || 'anonymous',
        initiated: firebase.database.ServerValue.TIMESTAMP,
        approximateLatency
      });
      
      console.log(`📸 DEBUG: Capture data saved successfully! Starting countdown for time: ${new Date(captureTime).toISOString()} (buffer: ${buffer}ms)`);
      
      // Start the countdown
      startCountdown(captureTime);
      
    } catch (error) {
      console.error('❌ ERROR in initiateCapture:', error);
      setError('Failed to initiate synchronized capture.');
    }
  };
  
  // Improved countdown with better timing and error handling
  const startCountdown = (captureTime) => {
    console.log('📸 DEBUG: startCountdown function called with captureTime:', captureTime);
    
    try {
      // Clear any existing countdown
      if (countdownRef.current) {
        console.log('📸 DEBUG: Clearing existing countdown interval');
        clearInterval(countdownRef.current);
      }
      
      const now = Date.now();
      const timeUntilCapture = captureTime - now;
      console.log(`📸 DEBUG: Time until capture: ${timeUntilCapture}ms`);
      
      if (timeUntilCapture <= 0) {
        console.log("📸 DEBUG: Capture time already passed, aborting countdown");
        return;
      }
      
      console.log(`📸 DEBUG: Starting countdown for capture at ${new Date(captureTime).toISOString()}`);
      
      // Calculate initial count (round up to nearest second)
      const initialCount = Math.ceil(timeUntilCapture / 1000);
      console.log(`📸 DEBUG: Initial countdown value: ${initialCount}`);
      setCountdown(initialCount);
      
      // Set interval for countdown display updates
      console.log('📸 DEBUG: Setting up countdown interval');
      countdownRef.current = setInterval(() => {
        try {
          const remainingTime = captureTime - Date.now();
          const secondsRemaining = Math.ceil(remainingTime / 1000);
          console.log(`📸 DEBUG: Countdown tick - ${secondsRemaining}s remaining`);
          
          // When we reach 2 seconds left, make sure camera is initialized
          if (secondsRemaining === 2 && !cameraReady) {
            console.log('📸 DEBUG: 2 seconds left, ensuring camera is ready');
            // Check if we need to force camera ready
            if (videoRef.current && videoRef.current.srcObject) {
              console.log('📸 DEBUG: Video element appears ready but cameraReady is false, forcing ready');
              setCameraReady(true);
            } else {
              console.log('📸 DEBUG: Attempting to re-initialize camera');
              initializeCamera();
            }
          }
          
          setCountdown((prevCount) => {
            try {
              if (secondsRemaining <= 0 || prevCount <= 1) {
                console.log('📸 DEBUG: Countdown reached zero, clearing interval and taking photo');
                clearInterval(countdownRef.current);
                
                // Double-check camera ready state before taking photo
                if (!cameraReady && videoRef.current && videoRef.current.srcObject) {
                  console.log('📸 DEBUG: Forcing camera ready before photo capture');
                  setCameraReady(true);
                  // Give a moment for state update then take photo
                  setTimeout(() => takePhoto(), 100);
                } else {
                  takePhoto();
                }
                return null;
              }
              return secondsRemaining;
            } catch (innerError) {
              console.error('❌ ERROR in countdown state update:', innerError);
              clearInterval(countdownRef.current);
              return null;
            }
          });
        } catch (intervalError) {
          console.error('❌ ERROR in countdown interval:', intervalError);
          clearInterval(countdownRef.current);
        }
      }, 100); // Update more frequently for better precision
      
      // Safety timeout to ensure the photo is taken
      console.log('📸 DEBUG: Setting safety timeout for', timeUntilCapture + 500, 'ms');
      setTimeout(() => {
        try {
          if (countdownRef.current) {
            console.log('📸 DEBUG: Safety timeout triggered - clearing countdown');
            clearInterval(countdownRef.current);
            setCountdown(null);
          }
        } catch (timeoutError) {
          console.error('❌ ERROR in safety timeout:', timeoutError);
        }
      }, timeUntilCapture + 500);
    } catch (error) {
      console.error('❌ ERROR in startCountdown:', error);
      setError('Failed to start countdown timer.');
    }
  }; // End of startCountdown function
  
  // Modified initializeCamera function with better debugging and a fix to ensure camera stays ready
  const initializeCamera = useCallback(async () => {
    console.log('🎥 STARTING CAMERA INITIALIZATION - Current state:', {
      cameraReady,
      hasVideoRef: !!videoRef.current,
      hasSrcObject: videoRef.current?.srcObject ? true : false
    });
    
    // Don't initialize if already ready
    if (cameraReady) {
      console.log('🎥 DEBUG: Camera is already ready, no need to initialize again');
      return;
    }
    
    try {
      // Ensure any existing camera is properly stopped first
      await stopCamera();
      
      console.log('🎥 REQUESTING CAMERA PERMISSIONS...');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      }).catch(err => {
        console.error('🎥 ERROR GETTING USER MEDIA:', err);
        throw err;
      });
      
      if (!stream) {
        throw new Error('Failed to get media stream - no stream returned');
      }
      
      const videoTracks = stream.getVideoTracks();
      console.log(`🎥 CAMERA STREAM OBTAINED: ${videoTracks.length} video track(s)`);
      
      if (videoTracks.length === 0) {
        throw new Error('No video tracks available in the stream');
      }
      
      if (!videoRef.current) {
        console.error('🎥 VIDEO REF IS NULL - cannot assign stream');
        stream.getTracks().forEach(track => track.stop());
        throw new Error('Video element not available');
      }
      
      // Store the current stream to clean up later
      const currentVideoElement = videoRef.current;
      
      // Set up event handlers before assigning srcObject
      const onLoadedMetadata = () => {
        console.log('🎥 VIDEO METADATA LOADED', {
          videoWidth: currentVideoElement.videoWidth,
          videoHeight: currentVideoElement.videoHeight,
          readyState: currentVideoElement.readyState
        });
        
        // Only set camera ready if we have valid dimensions
        if (currentVideoElement.videoWidth > 0 && currentVideoElement.videoHeight > 0) {
          console.log('🎥 CAMERA READY - Valid video dimensions detected');
          setCameraReady(true);
        } else {
          console.warn('🎥 WARNING: Video dimensions are zero, camera not ready');
          // Try to recover by forcing a play
          currentVideoElement.play().catch(err => {
            console.error('🎥 Error playing video after metadata load:', err);
          });
        }
      };
      
      const onCanPlay = () => {
        console.log('🎥 VIDEO CAN PLAY EVENT');
        if (currentVideoElement.videoWidth > 0 && currentVideoElement.videoHeight > 0) {
          console.log('🎥 CAMERA READY - Video can play with valid dimensions');
          setCameraReady(true);
        }
      };
      
      const onError = (e) => {
        console.error('🎥 VIDEO ELEMENT ERROR:', e);
        setError('Error initializing camera. Please refresh the page and try again.');
        setCameraReady(false);
      };
      
      // Add event listeners
      currentVideoElement.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
      currentVideoElement.addEventListener('canplay', onCanPlay, { once: true });
      currentVideoElement.addEventListener('error', onError);
      
      // Assign the stream
      console.log('🎥 ASSIGNING STREAM TO VIDEO ELEMENT');
      currentVideoElement.srcObject = stream;
      
      // Try to play the video
      currentVideoElement.play().catch(err => {
        console.error('🎥 Error playing video:', err);
        setError('Could not start camera. Please ensure camera permissions are granted.');
      });
      
      // Cleanup function to remove event listeners
      return () => {
        currentVideoElement.removeEventListener('loadedmetadata', onLoadedMetadata);
        currentVideoElement.removeEventListener('canplay', onCanPlay);
        currentVideoElement.removeEventListener('error', onError);
      };
      
    } catch (err) {
      console.error('🎥 ERROR ACCESSING CAMERA:', err);
      setError('Could not access camera. Please check permissions and try again.');
      setCameraReady(false);
    }
  }, [cameraReady, stopCamera]);
  
  // Modified takePhoto function with a retry mechanism
  const takePhoto = async () => {
    console.log('📸 DEBUG: takePhoto function called');
    
    if (!cameraReady || uploading) {
      console.log(`📸 DEBUG: Cannot take photo - cameraReady: ${cameraReady}, uploading: ${uploading}`);
      
      // Attempt to recover if the camera should be ready but isn't
      if (!cameraReady && videoRef.current && videoRef.current.srcObject) {
        console.log('📸 DEBUG: Attempting to recover camera ready state...');
        
        // Check if video tracks are active
        const videoTracks = videoRef.current.srcObject.getVideoTracks();
        console.log('📸 DEBUG: Video tracks status:', videoTracks.map(track => ({
          kind: track.kind,
          enabled: track.enabled,
          readyState: track.readyState
        })));
        
        if (videoTracks.length > 0 && videoTracks[0].readyState === 'live' && videoRef.current.videoWidth > 0) {
          console.log('📸 DEBUG: Video appears ready but cameraReady state is false, forcing ready state');
          setCameraReady(true);
          
          // Give a moment for the state to update and try again
          setTimeout(() => {
            console.log('📸 DEBUG: Retrying takePhoto after recovery attempt');
            takePhotoImplementation();
          }, 500);
          return;
        }
      }
      
      console.log('📸 DEBUG: Cannot recover camera state, aborting photo capture');
      return;
    }
    
    await takePhotoImplementation();
  };
  
  // Add this debug function to directly check Firebase structure after saving a photo
  const debugCheckFirebasePhotos = (sessionId, userId) => {
    console.log('🔍 DEBUG: Performing direct check of Firebase photos structure');
    
    // Check the photos node for the current session
    database.ref(`sessions/${sessionId}/photos`).once('value')
      .then(snapshot => {
        const data = snapshot.val();
        console.log('🔍 DEBUG: Direct Firebase check - Session photos data:', "[data omitted]");
        
        if (!data) {
          console.log('🔍 DEBUG: No photos found in this session');
        } else {
          // Check if the user's photo exists
          if (data[userId]) {
            console.log(`🔍 DEBUG: Found photo for user ${userId}: [data omitted]`);
          } else {
            console.log(`🔍 DEBUG: No photo found for user ${userId} in the session`);
          }
          
          // Count participants with photos
          const participantsWithPhotos = Object.keys(data);
          console.log(`🔍 DEBUG: Participants with photos: ${participantsWithPhotos.length}`);
          console.log('🔍 DEBUG: Participant IDs with photos:', participantsWithPhotos);
        }
      })
      .catch(error => {
        console.error('🔍 DEBUG: Error checking Firebase photos:', error);
      });
  };
  
  // Modified takePhotoImplementation function
  const takePhotoImplementation = async () => {
    console.log('📸 DEBUG: Starting actual photo capture implementation');
    try {
      console.log('📸 DEBUG: Starting photo capture process');
      setUploading(true);
      setError(null);
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (!video || !canvas) {
        console.error('📸 DEBUG: Video or canvas reference is null');
        throw new Error('Video or canvas reference is missing');
      }
      
      // Check if video has valid dimensions
      if (!video.videoWidth || !video.videoHeight) {
        console.error('📸 DEBUG: Video dimensions are invalid:', video.videoWidth, video.videoHeight);
        throw new Error('Video not ready for capture');
      }
      
      console.log(`📸 DEBUG: Video dimensions: ${video.videoWidth}x${video.videoHeight}`);
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw the video frame to the canvas
      console.log('📸 DEBUG: Drawing video frame to canvas');
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      // Convert canvas to data URL - this avoids CORS issues
      console.log('📸 DEBUG: Converting canvas to data URL');
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      console.log(`📸 DEBUG: Data URL generated, length: ${dataUrl.length} characters [dataUrl omitted]`);
      
      // Get current user
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        console.error('❌ ERROR: No authenticated user found when trying to save photo');
        throw new Error('You must be signed in to take photos');
      }
      
      const userId = currentUser.uid;
      console.log(`📸 DEBUG: Current user ID: ${userId}`);
      
      // Save data URL directly to the database
      console.log('📸 DEBUG: Saving photo to Firebase...');
      console.log('📸 DEBUG: Session ID:', sessionId);
      console.log('📸 DEBUG: Building reference path:', `sessions/${sessionId}/photos/${userId}`);
      
      // Modified: Use push() to create a unique ID for each photo rather than overwriting
      const userPhotosRef = database.ref(`sessions/${sessionId}/photos/${userId}`);
      const newPhotoRef = userPhotosRef.push();
      await newPhotoRef.set({
        dataUrl: dataUrl,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Add a short delay then check Firebase structure and attempt to create combined photo
      setTimeout(() => {
        debugCheckFirebasePhotos(sessionId, userId);
        console.log('📸 DEBUG: Attempting to call checkAndCreateCombinedPhoto.');
        checkAndCreateCombinedPhoto(sessionId); // Call unconditionally
      }, 1500); // Increased delay to allow Firebase to settle further
      
    } catch (err) {
      console.error('❌ ERROR in takePhoto:', err);
      setError('Failed to take photo. Please try again.');
    } finally {
      setUploading(false);
      console.log('📸 DEBUG: Photo capture process completed');
    }
  };
  
  // Modified checkAndCreateCombinedPhoto function with improved authentication logic
  const checkAndCreateCombinedPhoto = (sessionId) => {
    console.log('🔄 DEBUG: checkAndCreateCombinedPhoto called');
    console.log(`🔄 DEBUG: Current session ID for check: ${sessionId}`);
    
    if (!sessionId) {
      console.log('🔄 DEBUG: No session ID provided, skipping combined photo check');
      return;
    }
    
    if (!canvasRef.current) {
      console.error('🔄 ERROR: Canvas reference is not available for creating combined photo');
      return;
    }
    
    console.log(`🔄 DEBUG: Canvas dimensions: ${canvasRef.current.width}x${canvasRef.current.height}`);
    
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      console.error('🔄 ERROR: No authenticated user for combined photo check.');
      return;
    }
    
    const currentUserId = currentUser.uid;
    const isCurrentUserAnonymous = currentUser.isAnonymous;
    console.log(`🔄 DEBUG: Current user: ID=${currentUserId}, isAnonymous=${isCurrentUserAnonymous}`);

    const startTime = Date.now();
    
    // Fetch participants data to check authentication status
    // Using the participantsRef defined at the top level
    console.log(`🔄 DEBUG: Fetching participants data from Firebase path: ${participantsRef.toString()}`);
    
    participantsRef.once('value')
      .then(participantsSnapshot => {
        const participantsData = participantsSnapshot.val() || {};
        const participantIds = Object.keys(participantsData);
        console.log(`🔄 DEBUG: Found ${participantIds.length} participants in the session:`, participantIds);
        
        // Fetch all participant authentication details
        const participantDetailsPromises = participantIds.map(participantId => {
          return database.ref(`sessions/${sessionId}/participants/${participantId}`).once('value');
        });
        
        Promise.all(participantDetailsPromises)
          .then(participantSnapshots => {
            const participantDetails = {};
            
            // Build a map of participant details
            participantSnapshots.forEach(snapshot => {
              if (snapshot.exists()) {
                const userId = snapshot.key;
                const data = snapshot.val();
                participantDetails[userId] = data;
              }
            });
            
            console.log('🔄 DEBUG: Participant details:', JSON.stringify(participantDetails));
            
            // Fetch photos data
        const photosRef = database.ref(`sessions/${sessionId}/photos`);
        console.log(`🔄 DEBUG: Checking photos at Firebase path: ${photosRef.toString()}`);
        
        photosRef.once('value')
              .then(async snapshot => {
            console.log(`🔄 DEBUG: Successfully retrieved photos data from Firebase (${Date.now() - startTime}ms)`);
            
            const photos = snapshot.val() || {};
            const participantIds = Object.keys(photos);
            
            console.log(`🔄 DEBUG: Found photos from ${participantIds.length} participants:`, participantIds);
                
                // Get the most recent photo from each participant
                const latestPhotos = {};
                
                for (const userId of participantIds) {
                  const userPhotos = photos[userId];
                  
                  // Handle both old and new format
                  if (userPhotos.dataUrl) {
                    // Legacy format - single photo directly under user ID
                    console.log(`🔄 DEBUG: Using legacy format photo for user ${userId}`);
                    latestPhotos[userId] = userPhotos;
                  } else {
                    // New format - multiple photos with unique IDs
                    // Find the photo with the latest timestamp
                    const photoEntries = Object.entries(userPhotos);
                    if (photoEntries.length === 0) continue;
                    
                    // Sort by timestamp descending
                    photoEntries.sort((a, b) => (b[1].timestamp || 0) - (a[1].timestamp || 0));
                    
                    // Use the most recent photo
                    const [latestPhotoId, latestPhotoData] = photoEntries[0];
                    console.log(`🔄 DEBUG: Using latest photo ${latestPhotoId} for user ${userId} from ${photoEntries.length} photos`);
                    latestPhotos[userId] = latestPhotoData;
                  }
                }
                
                console.log('🔄 DEBUG: Latest photos data structure:', JSON.stringify(Object.keys(latestPhotos).map(id => ({
                  id,
                  hasDataUrl: !!latestPhotos[id].dataUrl,
                  dataUrlLength: latestPhotos[id].dataUrl ? latestPhotos[id].dataUrl.length : 0,
                  timestamp: latestPhotos[id].timestamp
            }))));
            
            // Check all photos have dataUrl property
                const validPhotos = Object.entries(latestPhotos).every(([id, photo]) => photo && photo.dataUrl);
            console.log(`🔄 DEBUG: All photos valid and contain dataUrl: ${validPhotos}`);
            
            if (!validPhotos) {
              console.error('🔄 ERROR: Some photos are missing dataUrl property');
              return;
            }
            
            // Only proceed if we have multiple photos to combine
            if (participantIds.length < 2) {
              console.log('🔄 DEBUG: Not enough photos to create a combined photo yet');
              return;
            }
            
            // Check if a combined photo already exists with these participants
            console.log('🔄 DEBUG: Checking for existing combined photos with these participants');
            const combinedPhotosRef = database.ref(`sessions/${sessionId}/combinedPhotos`);
            console.log(`🔄 DEBUG: Checking combined photos at Firebase path: ${combinedPhotosRef.toString()}`);
            
                // Get authentication state for each participant who took a photo
                const participantAuthState = {};
                
                // Try to determine auth state for each participant based on user data in the session
                for (const pid of participantIds) {
                  // Default to unknown
                  participantAuthState[pid] = {
                    uid: pid,
                    isAnonymous: true // Default to anonymous if not known
                  };
                  
                  // Check if we have details for this participant
                  if (participantDetails[pid]) {
                    // Use isAnonymous field if it exists
                    if (participantDetails[pid].isAnonymous !== undefined) {
                      participantAuthState[pid].isAnonymous = participantDetails[pid].isAnonymous;
                    }
                    // Use displayName to infer guest status as fallback
                    else if (participantDetails[pid].displayName === 'Guest') {
                      participantAuthState[pid].isAnonymous = true;
                    }
                  }
                  
                  // Current user's auth state is known directly
                  if (pid === currentUserId) {
                    participantAuthState[pid].isAnonymous = isCurrentUserAnonymous;
                  }
                }
                
                console.log('🔄 DEBUG: Participant authentication state:', JSON.stringify(participantAuthState));
                
                // Determine which device should create the combined photo
                // Logic:
                // 1. If one user is authenticated and others are guests, the authenticated user should save
                // 2. If multiple users are authenticated, use lexicographically lowest UID
                // 3. If all are guests, use lexicographically lowest UID
                
                const authenticatedParticipants = participantIds.filter(id => 
                  participantAuthState[id] && !participantAuthState[id].isAnonymous
                );

      // Add to beginning of array (newest first)
      const updatedSessions = [newSessionEntry, ...existingSessions];
      
      // Save back to localStorage
      localStorage.setItem('combinedSessions', JSON.stringify(updatedSessions));
      
      // Display success message
      setError(null);
      setCopySuccess(`Saved ${newSessionEntry.photos.length} combined photos to ${savePath}`);
      setTimeout(() => setCopySuccess(''), 2000);
      
      AppUtils.info(`Successfully saved ${newSessionEntry.photos.length} combined photos to ${savePath}`);
      
    } catch (err) {
      console.error('Error saving combined photos:', err);
      setError('Failed to save photos to album');
    }
  }, [combinedPhotos, sessionId, participants, setError, setCopySuccess]);
  
  const handleCombinedPhoto = useCallback(async (dataUrl) => {
    try {
      setUploading(true);
      setError(null);
      
      // Upload to Firebase for real-time sync with other participants
      if (sessionId) {
        console.log('[PixCrab] Uploading photo to Firebase for sync');
        try {
          await sessionModel.uploadPhoto(sessionId, dataUrl);
          console.log('[PixCrab] Photo uploaded to Firebase for sync');
          // The photo will be added to the local state via the Firebase listener
        } catch (uploadError) {
          console.error('[PixCrab] Error uploading photo to Firebase:', uploadError);
          // If Firebase upload fails, add to local state directly
          setCombinedPhotos(prev => [...prev, dataUrl]);
        }
      } else {
        // If no session ID, just add to local state
        setCombinedPhotos(prev => [...prev, dataUrl]);
      }
      
      // Save to local storage for offline access (if needed)
      if (typeof saveCombinedPhotosToAlbum === 'function') {
        await saveCombinedPhotosToAlbum();
      }
      
      setUploading(false);
      return dataUrl;
      
    } catch (error) {
      console.error('Error handling combined photo:', error);
      setError('Failed to save combined photo');
      setUploading(false);
      throw error;
    }
  }, [saveCombinedPhotosToAlbum, sessionId]);
  
  // Auto-save combined photos when they are created
  useEffect(() => {
    // Check if there are combined photos to save
    if (combinedPhotos.length > 0) {
      // Get the current user
      const currentUser = firebase.auth().currentUser;
      
      if (!currentUser) {
        AppUtils.info('Auto-save skipped - no authenticated user');
        return;
      }
      
      const isCurrentUserAnonymous = currentUser.isAnonymous;
      
      // Check if we have authenticated and anonymous participants
      const authParticipants = [];
      const guestParticipants = [];
      
      // Sort participants into authenticated and guest groups
      Object.entries(participants).forEach(([userId, participantData]) => {
        if (participantData.isAnonymous === false) {
          authParticipants.push(userId);
        } else {
          guestParticipants.push(userId);
        }
      });
      
      AppUtils.info(`Auto-save check: Auth users: ${authParticipants.length}, Guest users: ${guestParticipants.length}`);
      
      let shouldAutoSave = false;
      let saveReason = '';
      
      // Decision logic for auto-saving
      if (authParticipants.length > 0) {
        // There's at least one authenticated user
        if (!isCurrentUserAnonymous) {
          // Current user is authenticated
          if (authParticipants.length === 1) {
            // Only one authenticated user (current user), should save
            shouldAutoSave = true;
            saveReason = 'Only authenticated user in session';
          } else {
            // Multiple authenticated users, use lowest UID
            const lowestAuthId = authParticipants.sort()[0];
            shouldAutoSave = (currentUser.uid === lowestAuthId);
            saveReason = `Authenticated user with lowest UID (${lowestAuthId})`;
          }
        } else {
          // Current user is guest but authenticated users exist, should NOT save
          shouldAutoSave = false;
          saveReason = 'Guest user with authenticated participants present';
        }
      } else {
        // All participants are guests, use lowest UID among all participants
        const participantIds = Object.keys(participants);
        const lowestId = participantIds.sort()[0];
        shouldAutoSave = (currentUser.uid === lowestId);
        saveReason = `All guests, using lowest UID (${lowestId})`;
      }
      
      AppUtils.info(`Auto-save decision: ${shouldAutoSave ? 'YES' : 'NO'}, Reason: ${saveReason}`);
      
      if (shouldAutoSave) {
        // Auto-save to album
        saveCombinedPhotosToAlbum();
        AppUtils.info('Combined photos automatically saved to album');
      } else {
        AppUtils.info(`Auto-save skipped - ${saveReason}`);
      }
    }
  }, [combinedPhotos, saveCombinedPhotosToAlbum, participants]);
  
  // Debug for combined photos state changes
  useEffect(() => {
    AppUtils.info(`combinedPhotos state changed: ${combinedPhotos.length} photos`);
    
    // Track what type of photos we have
    const combined = combinedPhotos.filter(p => p.isCombined || p.participantIds).length;
    const individual = combinedPhotos.length - combined;
    AppUtils.info(`Photo breakdown - ${combined} combined, ${individual} individual`);
    
    if (combinedPhotos.length > 0) {
      const firstPhoto = combinedPhotos[0];
      AppUtils.info(`First photo: id=${firstPhoto.id}, combined=${!!firstPhoto.isCombined}`);
    }
  }, [combinedPhotos]);
  
  // Reset session thumbnails when session changes
  useEffect(() => {
    // Clear session thumbnails when sessionId changes
    setSessionThumbnails([]);
  }, [sessionId]);
  
  return (
    <div className="camera-screen">
      {/* Camera container with video feed */}
      <div className="camera-container">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          className="h-full w-auto object-cover mx-auto"
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        
        {countdown !== null && (
          <div className="countdown-overlay">
            <div className="countdown-number">{countdown}</div>
          </div>
        )}
      </div>
      
      {/* Empty state message if no photos */}
      {combinedPhotos.length === 0 && (
        <div className="combined-photo-empty text-center p-4">
          <p>No combined photos captured yet. Combined photos will appear in the carousel below.</p>
        </div>
      )}

      
      {/* Content layer respecting safe areas */}
      <div className="camera-screen-content">
        {/* Header area with session info */}
        <div className="header-area">
          {error && <div className="error">{error}</div>}
          
          <div className="session-header">
            {/* Toggle Gallery Button - Fit content with padding */}
            <button 
              className="btn btn-primary rainbow-button gallery-btn"
              onClick={(e) => {
                e.preventDefault(); // Prevent any default behavior
                e.stopPropagation(); // Stop event propagation
                console.log('🖱️ DEBUG: Gallery button click event triggered');
                toggleGallery();
              }}
              title={"View Gallery"}
            >
              Gallery
            </button>
            
            {/* Exit button (X icon) - Perfect circle */}
            <button 
              className="btn-icon exit-btn" 
              onClick={handleGalleryClick}
              title="Exit Session"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Combined session ID and copy button */}
            <button 
              className="session-id-btn" 
              onClick={copySessionIdToClipboard}
              title="Copy Session ID"
            >
              {sessionId}
              <svg className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              {copySuccess && <span className="copy-status">{copySuccess}</span>}
            </button>
          </div>
        </div>
        
        {/* Viewfinder area - only visible when not in gallery view */}
        {!showGallery && (
          <div className="viewfinder-area">
            {/* Empty space for camera view, which is positioned behind in the camera-container */}
          </div>
        )}
        
        {/* Session Thumbnails Carousel - mobile-optimized styling */}
        {sessionThumbnails.length > 0 && (
          <div className="fixed bottom-20 left-0 right-0 z-50 p-2 w-full touch-auto">
            <div 
              className={`${emblaStyles.carousel} bg-black bg-opacity-50 p-2 rounded-lg w-full touch-auto`} 
              ref={emblaRef}
              style={{ touchAction: 'pan-y', pointerEvents: 'auto' }}
            >
              <div className={emblaStyles.container} style={{ pointerEvents: 'auto' }}>
                {sessionThumbnails.map((url, idx) => (
                  <div 
                    key={idx} 
                    className="w-24 h-40 mx-1 rounded overflow-hidden flex items-center justify-center bg-black bg-opacity-20 cursor-pointer shadow-md"
                    onClick={(e) => {
                      e.stopPropagation(); // Ensure click doesn't propagate to parent elements
                      console.log(`🖱️ DEBUG: Thumbnail clicked, setting modal image URL: ${url}`);
                      setSelectedFullImageUrl(url);
                    }}
                  >
                    <img 
                      src={url} 
                      alt={`Session photo ${idx + 1}`} 
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        console.error(`Failed to load image: ${url}`);
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYWFhIj5JbWFnZSBFcnJvcjwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Controls area with buttons */}
        <div className="controls-area">
            {/* Centered shutter button - positioned relative to the controls area */}
            <div className="shutter-button-container">
              {cameraReady && (
                <button
                  className="
                    btn-circle btn-circle-rainbow
                    w-16 h-16 bg-white shadow-lg
                    border-4 border-gray-200 z-50
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                  onClick={initiateCapture}
                  disabled={!cameraReady || uploading || countdown !== null || participantCount < 2}
                >
                  <span className="block w-8 h-8 bg-gray-200 rounded-full m-auto" />
                </button>
              )}
            </div>
            
            {/* Participants count relocated to bottom right */}
            <div className="participants-count">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              {participantCount}/2
            </div>
          </div>

      </div>
      
      {/* Gallery view */}
      {showGallery && (
        <div className="gallery-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#000', zIndex: 900 }}>
          <div className="p-4 text-white">
            <h2 className="text-xl font-bold mb-4">Your Photo Gallery</h2>
            <p className="debug-info">
              🔍 DEBUG: Gallery component mounted. User is authenticated.
            </p>
            {/* This would normally render CombinedPhotoGallery component */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {combinedPhotos.length > 0 ? (
                combinedPhotos.map((url, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded">
                    <img src={url} alt={`Gallery photo ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))
              ) : (
                <p className="col-span-2 text-center py-8">No photos in your gallery yet</p>
              )}
            </div>
            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
              onClick={() => {
                console.log('🔘 DEBUG: Close gallery button clicked');
                setShowGallery(false);
              }}
            >
              Close Gallery
            </button>
          </div>
        </div>
      )}
      
      {/* Individual photos grid */}
      <div className="photos-grid">
        {photosTaken.map(renderPhotoItem)}
      </div>
      
      {/* Modal for full-size image when clicking on a carousel thumbnail */}
      {selectedFullImageUrl && (
        <PhotoModal 
          imageUrl={selectedFullImageUrl} 
          onClose={() => {
            console.log('🖱️ DEBUG: Closing photo modal');
            setSelectedFullImageUrl(null);
          }} 
        />
      )}
    </div>
  );
};

export default CameraScreen;