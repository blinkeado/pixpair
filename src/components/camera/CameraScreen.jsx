import React, { useState, useEffect, useRef } from 'react';
import firebase, { database } from '../../services/firebase';
import Logo from '../../components/Logo';
import CombinedPhotoGallery from './CombinedPhotoGallery';

const CameraScreen = ({ sessionId, onExitSession, onSignOut }) => {
  const [error, setError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photosTaken, setPhotosTaken] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [participants, setParticipants] = useState({});
  const [participantCount, setParticipantCount] = useState(0);
  const [copySuccess, setCopySuccess] = useState('');
  const [combinedPhotos, setCombinedPhotos] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const countdownRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
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
  
  // Set up Firebase listeners when component mounts
  useEffect(() => {
    if (!sessionId) return;

    console.log('📊 DEBUG: Setting up Firebase listeners for session:', sessionId);
    
    // Stop any existing camera stream first
    stopCamera();
    
    // Then initialize the camera
    initializeCamera();
    
    // Set up initial session data check
    const sessionRef = database.ref(`sessions/${sessionId}`);
    sessionRef.once('value', (snapshot) => {
      console.log('📊 DEBUG: Initial session data check:', JSON.stringify(snapshot.val()));
      
      if (snapshot.exists()) {
        const fields = Object.keys(snapshot.val());
        console.log('📊 DEBUG: Session exists with fields:', fields);
      } else {
        console.log('📊 DEBUG: Session does not exist');
      }
    });
    
    // Set up all Firebase listeners
    console.log('📊 DEBUG: Setting up all Firebase listeners for path:', `sessions/${sessionId}`);
    
    // Firebase realtime status check
    const connectedRef = database.ref('.info/connected');
    
    // Reference to session photos
    const photosRef = database.ref(`sessions/${sessionId}/photos`);
    
    // Reference to combined photos
    const combinedPhotosRef = database.ref(`sessions/${sessionId}/combinedPhotos`);
    
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
      console.log('📊 DEBUG: Combined photos value event triggered');
      const combinedPhotosData = snapshot.val() || {};
      console.log('📊 DEBUG: Combined photos data structure:', JSON.stringify(combinedPhotosData));
      
      // Transform combinedPhotos data into an array of photos
      const combinedPhotosList = Object.entries(combinedPhotosData).map(([photoId, photoData]) => {
        console.log(`📊 DEBUG: Processing combined photo ${photoId}`);
        return {
          id: photoId,
          isCombined: true, // Add explicit combined flag
          ...photoData
        };
      });
      
      if (combinedPhotosList.length > 0) {
        console.log(`📊 DEBUG: Found ${combinedPhotosList.length} combined photos`);
        console.log('📊 DEBUG: Combined photo list:', JSON.stringify(combinedPhotosList.map(p => ({ 
          id: p.id, 
          hasDataUrl: !!p.dataUrl, 
          dataUrlLength: p.dataUrl ? p.dataUrl.length : 0,
          timestamp: p.timestamp,
          participantIds: p.participantIds
        }))));
        
        // Update state with combined photos - replace the entire array
        setCombinedPhotos(combinedPhotosList);
      }
    });
    
    // Set up value listener for individual photos (to show in gallery)
    photosRef.on('value', (snapshot) => {
      console.log('📊 DEBUG: Photos value event triggered');
      const photosData = snapshot.val() || {};
      console.log('📊 DEBUG: Photos data structure:', JSON.stringify(photosData));
      
      // Transform the data into an array of photos with user info
      const photoList = [];
      
      Object.entries(photosData).forEach(([userId, userPhotos]) => {
        console.log(`📊 DEBUG: Processing photos for user ${userId}:`, JSON.stringify(userPhotos));
        // If userPhotos is directly a photo object (dataUrl + timestamp)
        if (userPhotos.dataUrl) {
          console.log(`📊 DEBUG: Found direct photo object for user ${userId}`);
          photoList.push({
            userId,
            dataUrl: userPhotos.dataUrl,
            timestamp: userPhotos.timestamp
          });
        } 
        // If userPhotos is a collection of photos from this user
        else if (typeof userPhotos === 'object') {
          console.log(`📊 DEBUG: Found collection of photos for user ${userId}`);
          Object.entries(userPhotos).forEach(([photoId, photoData]) => {
            console.log(`📊 DEBUG: Adding photo ${photoId} to combined list`);
            photoList.push({
              userId,
              photoId,
              ...photoData
            });
          });
        }
      });
      
      // Sort by timestamp
      photoList.sort((a, b) => b.timestamp - a.timestamp); // Newest first
      
      console.log(`📊 DEBUG: Combined photos state update: ${photoList.length} photos from ${Object.keys(photosData).length} participants`);
      console.log('📊 DEBUG: Full photo list:', JSON.stringify(photoList));
      
      // Update with individual photos only if we don't have any combined photos yet
      // This ensures the user sees something while waiting for the combined photo to be created
      if (combinedPhotos.length === 0) {
        setCombinedPhotos(photoList);
      }
    }, (error) => {
      console.error('📊 DEBUG: Error in value listener:', error);
    });
    
    // Listen for participants in this session
    console.log('📊 DEBUG: Setting up participants listener');
    const participantsRef = database.ref(`sessions/${sessionId}/members`);
    participantsRef.on('value', (snapshot) => {
      const members = snapshot.val() || {};
      console.log('📊 DEBUG: Participants updated:', JSON.stringify(members));
      setParticipants(members);
      setParticipantCount(Object.keys(members).length);
    });
    
    // Listen for capture time updates
    console.log('📊 DEBUG: Setting up capture time listener');
    const captureRef = database.ref(`sessions/${sessionId}/capture`);
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
      participantsRef.off();
      captureRef.off();
      
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
      
      console.log('🧹 DEBUG: All listeners removed');
    };
  }, [sessionId]);
  
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      console.log('🎥 STOPPING CAMERA');
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => {
        console.log(`🎥 Stopping track: ${track.kind}, enabled: ${track.enabled}`);
        track.stop();
      });
      videoRef.current.srcObject = null;
      setCameraReady(false);
      console.log('🎥 CAMERA STOPPED');
    } else {
      console.log('🎥 No camera stream to stop');
    }
  };
  
  // Enhanced exit session to ensure camera is stopped
  const handleExitSession = () => {
    console.log('🎥 Exit session - stopping camera');
    stopCamera();
    if (typeof onExitSession === 'function') {
      onExitSession();
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
      
      console.log(`📸 DEBUG: Capture data saved successfully! Initiated capture for time: ${new Date(captureTime).toISOString()} (buffer: ${buffer}ms)`);
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
  };
  
  // Modified initializeCamera function with better debugging and a fix to ensure camera stays ready
  const initializeCamera = async () => {
    console.log('🎥 STARTING CAMERA INITIALIZATION');
    try {
      // Ensure we're not already initialized
      if (cameraReady) {
        console.log('🎥 DEBUG: Camera is already ready, no need to initialize again');
        return;
      }
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      });
      
      console.log('🎥 CAMERA STREAM OBTAINED:', stream ? 'success' : 'failed', 'tracks:', stream.getTracks().length);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log('🎥 ASSIGNED STREAM TO VIDEO ELEMENT');
        
        // Add event listeners for camera status changes
        const videoTracks = stream.getVideoTracks();
        console.log('🎥 DEBUG: Video tracks:', videoTracks.length);
        
        videoTracks.forEach(track => {
          console.log('🎥 DEBUG: Track details:', {
            kind: track.kind,
            id: track.id,
            enabled: track.enabled,
            readyState: track.readyState,
            muted: track.muted
          });
          
          track.addEventListener('ended', () => {
            console.log('🎥 DEBUG: Video track ended');
            setCameraReady(false);
          });
        });
        
        videoRef.current.onloadedmetadata = () => {
          console.log('🎥 VIDEO METADATA LOADED, SETTING CAMERA READY');
          console.log('🎥 DEBUG: Video dimensions after metadata loaded:', {
            width: videoRef.current.videoWidth,
            height: videoRef.current.videoHeight
          });
          setCameraReady(true);
        };
      } else {
        console.error('🎥 VIDEO REF IS NULL');
        // Make sure to clean up the stream even if we can't assign it
        stream.getTracks().forEach(track => track.stop());
      }
    } catch (err) {
      console.error('🎥 ERROR ACCESSING CAMERA:', err);
      setError('Could not access camera. Please check permissions.');
    }
  };
  
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
        console.log('🔍 DEBUG: Direct Firebase check - Session photos data:', JSON.stringify(data));
        
        if (!data) {
          console.log('🔍 DEBUG: No photos found in this session');
        } else {
          // Check if the user's photo exists
          if (data[userId]) {
            console.log(`🔍 DEBUG: Found photo for user ${userId}:`, JSON.stringify(data[userId]));
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
  
  // Modified takePhotoImplementation function to include the debug check
  const takePhotoImplementation = async () => {
    console.log('📸 DEBUG: Starting actual photo capture implementation');
    try {
      console.log('📸 DEBUG: Starting photo capture process');
      setUploading(true);
      setError(null);
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (!video || !canvas) {
        throw new Error('Video or canvas reference is missing');
      }
      
      // Extra check for video readiness
      if (video.videoWidth <= 0 || video.videoHeight <= 0) {
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
      console.log(`📸 DEBUG: Data URL generated, length: ${dataUrl.length} characters`);
      
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
      
      const photosRef = database.ref(`sessions/${sessionId}/photos/${userId}`);
      await photosRef.set({
        dataUrl: dataUrl,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      
      console.log('📸 DEBUG: Photo saved successfully to Firebase');
      
      // Add a short delay then check Firebase structure and create combined photo if needed
      setTimeout(() => {
        debugCheckFirebasePhotos(sessionId, userId);
        checkAndCreateCombinedPhoto(sessionId);
      }, 1000);
      
    } catch (err) {
      console.error('❌ ERROR in takePhoto:', err);
      setError('Failed to take photo. Please try again.');
    } finally {
      setUploading(false);
      console.log('📸 DEBUG: Photo capture process completed');
    }
  };
  
  // Add a function to check for photos from all participants and create a combined photo
  const checkAndCreateCombinedPhoto = (sessionId) => {
    console.log('🔄 DEBUG: Checking if a combined photo needs to be created');
    console.log(`🔄 DEBUG: Current session ID: ${sessionId}`);
    
    if (!sessionId) {
      console.log('🔄 DEBUG: No session ID provided, skipping combined photo check');
      return;
    }
    
    if (!canvasRef.current) {
      console.error('🔄 ERROR: Canvas reference is not available for creating combined photo');
      return;
    }
    
    console.log(`🔄 DEBUG: Canvas dimensions: ${canvasRef.current.width}x${canvasRef.current.height}`);
    
    // Track execution time
    const startTime = Date.now();
    
    // Get photos for all participants
    const photosRef = database.ref(`sessions/${sessionId}/photos`);
    console.log(`🔄 DEBUG: Checking photos at Firebase path: ${photosRef.toString()}`);
    
    photosRef.once('value')
      .then(snapshot => {
        console.log(`🔄 DEBUG: Successfully retrieved photos data from Firebase (${Date.now() - startTime}ms)`);
        
        const photos = snapshot.val() || {};
        const participantIds = Object.keys(photos);
        
        console.log(`🔄 DEBUG: Found photos from ${participantIds.length} participants:`, participantIds);
        console.log('🔄 DEBUG: Photos data structure:', JSON.stringify(Object.keys(photos).map(id => ({
          id,
          hasDataUrl: !!photos[id].dataUrl,
          dataUrlLength: photos[id].dataUrl ? photos[id].dataUrl.length : 0,
          timestamp: photos[id].timestamp
        }))));
        
        // Check all photos have dataUrl property
        const validPhotos = Object.entries(photos).every(([id, photo]) => photo && photo.dataUrl);
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
        
        combinedPhotosRef.once('value')
          .then(combinedSnapshot => {
            console.log(`🔄 DEBUG: Successfully retrieved combined photos data from Firebase (${Date.now() - startTime}ms)`);
            
            const combinedPhotos = combinedSnapshot.val() || {};
            console.log(`🔄 DEBUG: Found ${Object.keys(combinedPhotos).length} existing combined photos`);
            
            if (Object.keys(combinedPhotos).length > 0) {
              console.log('🔄 DEBUG: Existing combined photos:', JSON.stringify(Object.keys(combinedPhotos).map(id => ({
                id,
                hasDataUrl: !!combinedPhotos[id].dataUrl,
                hasParticipantIds: !!combinedPhotos[id].participantIds,
                participantCount: combinedPhotos[id].participantIds ? combinedPhotos[id].participantIds.length : 0
              }))));
            }
            
            // Check if we already have a combined photo with these exact participants
            const alreadyExists = Object.values(combinedPhotos).some(photo => {
              if (!photo.participantIds) {
                console.log('🔄 DEBUG: Found a combined photo without participantIds field');
                return false;
              }
              
              // Check if the participantIds arrays have the same content (order doesn't matter)
              const sameLength = photo.participantIds.length === participantIds.length;
              const sameMembers = participantIds.every(id => photo.participantIds.includes(id));
              
              if (sameLength && sameMembers) {
                console.log('🔄 DEBUG: Found existing combined photo with same participants:', JSON.stringify({
                  participantIds: photo.participantIds,
                  timestamp: photo.timestamp
                }));
              }
              
              return sameLength && sameMembers;
            });
            
            if (alreadyExists) {
              console.log('🔄 DEBUG: A combined photo with these participants already exists, skipping creation');
              return;
            }
            
            console.log('🔄 DEBUG: No existing combined photo found with these participants, creating new one');
            console.log('🔄 DEBUG: Creating combined photo from participant photos');
            
            createCombinedPhoto(sessionId, photos, participantIds)
              .then(photoId => {
                const totalTime = Date.now() - startTime;
                if (photoId) {
                  console.log(`🔄 DEBUG: Successfully created combined photo with ID: ${photoId} (total time: ${totalTime}ms)`);
                } else {
                  console.log(`🔄 DEBUG: Failed to create combined photo (total time: ${totalTime}ms)`);
                }
              })
              .catch(error => {
                console.error('🔄 ERROR in createCombinedPhoto promise:', error);
              });
          })
          .catch(error => {
            console.error('🔄 ERROR checking existing combined photos:', error);
          });
      })
      .catch(error => {
        console.error('🔄 ERROR checking for photos:', error);
      });
  };
  
  // Create a combined photo from multiple participant photos
  const createCombinedPhoto = async (sessionId, photos, participantIds) => {
    try {
      console.log('🔄 DEBUG: Starting combined photo creation');
      console.log(`🔄 DEBUG: Creating combined photo for ${participantIds.length} participants`);
      console.log('🔄 DEBUG: Participant IDs:', JSON.stringify(participantIds));
      
      // Extract the dataUrls from the participant photos
      const photoDataUrls = participantIds.map(id => {
        console.log(`🔄 DEBUG: Processing photo from participant ${id}`);
        const photo = photos[id];
        console.log(`🔄 DEBUG: Photo data structure:`, JSON.stringify({
          hasDataUrl: !!photo.dataUrl,
          dataUrlLength: photo.dataUrl ? photo.dataUrl.length : 0,
          timestamp: photo.timestamp
        }));
        return photos[id].dataUrl;
      });
      
      console.log('🔄 DEBUG: Extracted data URLs for all participants');
      
      // Create a canvas to combine the photos
      const canvas = canvasRef.current;
      if (!canvas) {
        throw new Error('Canvas reference is not available');
      }
      console.log(`🔄 DEBUG: Canvas dimensions before setup: ${canvas.width}x${canvas.height}`);
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not get canvas 2D context');
      }
      console.log('🔄 DEBUG: Canvas 2D context obtained successfully');
      
      // Load all images
      console.log('🔄 DEBUG: Loading images from data URLs');
      const imagePromises = photoDataUrls.map((url, index) => {
        return new Promise((resolve, reject) => {
          console.log(`🔄 DEBUG: Creating image object for URL ${index+1}`);
          const img = new Image();
          
          img.onload = () => {
            console.log(`🔄 DEBUG: Image ${index+1} loaded successfully: ${img.width}x${img.height}`);
            resolve(img);
          };
          
          img.onerror = (err) => {
            console.error(`🔄 ERROR: Failed to load image ${index+1}:`, err);
            reject(new Error(`Failed to load image ${index+1}`));
          };
          
          console.log(`🔄 DEBUG: Setting source for image ${index+1}`);
          img.src = url;
        });
      });
      
      console.log(`🔄 DEBUG: Waiting for all ${imagePromises.length} images to load`);
      const images = await Promise.all(imagePromises);
      console.log(`🔄 DEBUG: All ${images.length} images loaded successfully`);
      
      // Log dimensions of all loaded images
      images.forEach((img, i) => {
        console.log(`🔄 DEBUG: Image ${i+1} dimensions: ${img.width}x${img.height}`);
      });
      
      // Choose layout based on number of images
      if (images.length === 2) {
        // For side-by-side layout (the most common case with 2 participants)
        console.log('🔄 DEBUG: Using side-by-side layout for 2 images');
        
        // Get the max dimensions to maintain aspect ratio
        const W = Math.max(images[0].width, images[1].width);
        const H = Math.max(images[0].height, images[1].height);
        
        console.log(`🔄 DEBUG: Maximum image dimensions: ${W}x${H}`);
        console.log(`🔄 DEBUG: Setting canvas dimensions to: ${W*2}x${H}`);
        
        // Set canvas dimensions for side-by-side layout
        canvas.width = W * 2; // Two images side by side
        canvas.height = H;
        
        // Clear canvas with black background
        console.log('🔄 DEBUG: Clearing canvas with black background');
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw images side by side, centered in their half
        images.forEach((img, index) => {
          // Calculate scaling to fit while maintaining aspect ratio
          const scale = Math.min(W / img.width, H / img.height);
          const scaledWidth = img.width * scale;
          const scaledHeight = img.height * scale;
          
          // Center in the allocated space
          const x = (index * W) + (W - scaledWidth) / 2;
          const y = (H - scaledHeight) / 2;
          
          console.log(`🔄 DEBUG: Drawing image ${index+1} at (${x},${y}) with size ${scaledWidth}x${scaledHeight}`);
          
          try {
            ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
            console.log(`🔄 DEBUG: Successfully drew image ${index+1}`);
          } catch (drawError) {
            console.error(`🔄 ERROR: Failed to draw image ${index+1}:`, drawError);
            throw drawError;
          }
        });
      } else {
        // For grid layout (3 or more participants)
        console.log(`🔄 DEBUG: Using grid layout for ${images.length} images`);
        
        const columns = Math.ceil(Math.sqrt(images.length));
        const rows = Math.ceil(images.length / columns);
        console.log(`🔄 DEBUG: Grid layout: ${columns} columns x ${rows} rows`);
        
        // Find the maximum dimensions
        let maxWidth = 0;
        let maxHeight = 0;
        images.forEach(img => {
          maxWidth = Math.max(maxWidth, img.width);
          maxHeight = Math.max(maxHeight, img.height);
        });
        
        console.log(`🔄 DEBUG: Maximum image dimensions: ${maxWidth}x${maxHeight}`);
        console.log(`🔄 DEBUG: Setting canvas dimensions to: ${maxWidth * columns}x${maxHeight * rows}`);
        
        canvas.width = maxWidth * columns;
        canvas.height = maxHeight * rows;
        
        // Clear canvas
        console.log('🔄 DEBUG: Clearing canvas with black background');
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw images in a grid
        images.forEach((img, i) => {
          const col = i % columns;
          const row = Math.floor(i / columns);
          
          // Calculate position
          const x = col * maxWidth;
          const y = row * maxHeight;
          
          console.log(`🔄 DEBUG: Drawing image ${i+1} at grid position (${col},${row}) coordinates (${x},${y})`);
          
          try {
            ctx.drawImage(img, x, y);
            console.log(`🔄 DEBUG: Successfully drew image ${i+1}`);
          } catch (drawError) {
            console.error(`🔄 ERROR: Failed to draw image ${i+1}:`, drawError);
            throw drawError;
          }
        });
      }
      
      // Add watermark
      console.log('🔄 DEBUG: Adding watermark');
      try {
        ctx.font = 'bold 48px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.fillText('PixCrab', canvas.width - 40, canvas.height - 40);
        console.log('🔄 DEBUG: Successfully added watermark');
      } catch (watermarkError) {
        console.error('🔄 ERROR: Failed to add watermark:', watermarkError);
        // Continue even if watermark fails
      }
      
      // Convert to data URL
      console.log('🔄 DEBUG: Converting canvas to data URL');
      let combinedDataUrl;
      try {
        combinedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        console.log(`🔄 DEBUG: Combined photo created, data URL length: ${combinedDataUrl.length}`);
      } catch (dataUrlError) {
        console.error('🔄 ERROR: Failed to convert canvas to data URL:', dataUrlError);
        throw dataUrlError;
      }
      
      // Save to Firebase under combinedPhotos
      console.log('🔄 DEBUG: Saving combined photo to Firebase');
      try {
        const combinedPhotoId = firebase.database().ref().push().key;
        console.log(`🔄 DEBUG: Generated Firebase key: ${combinedPhotoId}`);
        
        const combinedPhotoRef = database.ref(`sessions/${sessionId}/combinedPhotos/${combinedPhotoId}`);
        console.log(`🔄 DEBUG: Created Firebase reference at: sessions/${sessionId}/combinedPhotos/${combinedPhotoId}`);
        
        await combinedPhotoRef.set({
          dataUrl: combinedDataUrl,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          participantIds: participantIds
        });
        
        console.log(`🔄 DEBUG: Combined photo saved to Firebase with ID: ${combinedPhotoId}`);
        return combinedPhotoId;
      } catch (firebaseError) {
        console.error('🔄 ERROR: Failed to save combined photo to Firebase:', firebaseError);
        throw firebaseError;
      }
    } catch (error) {
      console.error('🔄 ERROR creating combined photo:', error);
      return null;
    }
  };
  
  // Render a photo item based on whether it's a URL or data URL
  const renderPhotoItem = (photo) => {
    // First try to use the dataUrl if available (direct base64 data)
    const photoSrc = photo.dataUrl || photo.downloadURL;
    
    if (!photoSrc) {
      return (
        <div key={photo.id} className="photo-item error">
          <p>Photo unavailable</p>
        </div>
      );
    }
    
    return (
      <div key={photo.id} className="photo-item">
        <img src={photoSrc} alt="Captured" />
        <p>Taken at: {new Date(photo.timestamp).toLocaleTimeString()}</p>
      </div>
    );
  };
  
  const savePhotoToAlbum = (photoUrl) => {
    const savedPhotos = JSON.parse(localStorage.getItem('albumPhotos') || '[]');
    const newPhoto = {
      url: photoUrl,
      width: 1920, // Default width, adjust as needed
      height: 1080, // Default height, adjust as needed
      timestamp: new Date().toISOString()
    };
    savedPhotos.push(newPhoto);
    localStorage.setItem('albumPhotos', JSON.stringify(savedPhotos));
  };

  const handlePhotoTaken = (photoUrl) => {
    setPhotosTaken(prev => [...prev, photoUrl]);
    savePhotoToAlbum(photoUrl);
  };
  
  // Handle gallery view with callbacks instead of direct navigation
  const handleGalleryClick = () => {
    // Stop camera before exiting
    stopCamera();
    // Then call the exit session function
    if (typeof onExitSession === 'function') {
      onExitSession();
    }
  };
  
  // Toggle gallery view
  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };
  
  // Save combined photos to localStorage
  const saveCombinedPhotosToAlbum = () => {
    if (combinedPhotos.length === 0) {
      setError('No photos to save');
      return;
    }
    
    try {
      // Get existing combined sessions from localStorage
      const existingSessionsJSON = localStorage.getItem('combinedSessions');
      const existingSessions = existingSessionsJSON ? JSON.parse(existingSessionsJSON) : [];
      
      // Create a new session entry
      const newSessionEntry = {
        id: sessionId,
        timestamp: Date.now(),
        photos: combinedPhotos,
        participants: Object.keys(participants).length
      };
      
      // Add to beginning of array (newest first)
      const updatedSessions = [newSessionEntry, ...existingSessions];
      
      // Save back to localStorage
      localStorage.setItem('combinedSessions', JSON.stringify(updatedSessions));
      
      setError(null);
      setCopySuccess('Saved to album!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Error saving combined photos:', err);
      setError('Failed to save photos to album');
    }
  };
  
  // Debug for combined photos state changes
  useEffect(() => {
    console.log('🖼️ DEBUG: combinedPhotos state changed:', combinedPhotos.length, 'photos now in state');
    
    // Track what type of photos we have
    const combined = combinedPhotos.filter(p => p.isCombined || p.participantIds).length;
    const individual = combinedPhotos.length - combined;
    console.log(`🖼️ DEBUG: Photo breakdown - ${combined} combined photos, ${individual} individual photos`);
    
    if (combinedPhotos.length > 0) {
      const firstPhoto = combinedPhotos[0];
      console.log('🖼️ DEBUG: First photo in combined photos:', JSON.stringify({
        id: firstPhoto.id,
        userId: firstPhoto.userId,
        timestamp: firstPhoto.timestamp,
        hasDataUrl: !!firstPhoto.dataUrl,
        dataUrlLength: firstPhoto.dataUrl ? firstPhoto.dataUrl.length : 0,
        isCombined: !!firstPhoto.isCombined,
        hasParticipantIds: !!firstPhoto.participantIds,
        participantIds: firstPhoto.participantIds
      }));
      
      // Check dimensions of photo when rendered
      setTimeout(() => {
        const galleryImages = document.querySelectorAll('.participant-photo img');
        if (galleryImages.length > 0) {
          console.log(`🖼️ DEBUG: Found ${galleryImages.length} rendered gallery images`);
          Array.from(galleryImages).forEach((img, index) => {
            console.log(`🖼️ DEBUG: Rendered image ${index+1} dimensions: ${img.naturalWidth}x${img.naturalHeight}, displayed: ${img.offsetWidth}x${img.offsetHeight}`);
          });
        }
      }, 500); // Give time for rendering
    }
  }, [combinedPhotos]);
  
  return (
    <div className="camera-screen">
      {/* Camera container with video feed */}
      <div className={`camera-container ${showGallery ? 'hidden' : ''}`}>
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
      
      {/* Combined Photos Gallery */}
      {showGallery && (
        <div className="combined-gallery-container">
          <CombinedPhotoGallery 
            photos={combinedPhotos} 
            participantInfo={participants}
          />
          
          {/* Save to Album button */}
          <div className="gallery-save-controls">
            <button 
              className="btn btn-primary save-btn"
              onClick={saveCombinedPhotosToAlbum}
              disabled={combinedPhotos.length === 0}
            >
              Save to Album
            </button>
          </div>
        </div>
      )}
      
      {/* Content layer respecting safe areas */}
      <div className="camera-screen-content">
        {/* Header area with session info */}
        <div className="header-area">
          <div className="participants-count">
            Participants: {participantCount}/2
          </div>
          
          {error && <div className="error">{error}</div>}
          
          <div className="session-header">
            {/* Toggle Gallery Button */}
            <button 
              className="btn btn-primary rainbow-button"
              onClick={toggleGallery}
              title={showGallery ? "Return to Camera" : "View Combined Photos"}
            >
              {showGallery ? "Camera" : "Gallery"}
            </button>
            
            {/* Exit button (X icon) */}
            <button 
              className="btn-icon exit-btn" 
              onClick={handleExitSession}
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
        
        {/* Controls area with buttons - only visible when not in gallery view */}
        {!showGallery && (
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
          </div>
        )}
      </div>
      
      {/* Individual photos grid - only show if not viewing gallery */}
      {!showGallery && (
        <div className="photos-grid">
          {photosTaken.map(renderPhotoItem)}
        </div>
      )}
    </div>
  );
};

export default CameraScreen;