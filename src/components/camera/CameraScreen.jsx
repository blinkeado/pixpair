import React, { useState, useEffect, useRef, useCallback } from 'react';
import firebase, { database } from '../../services/firebase';
import Logo from '../../components/Logo';
import CombinedPhotoGallery from './CombinedPhotoGallery';
import AppUtils from '../../utils/AppUtils';

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
    
    // Create the slideContainer if it doesn't exist yet
    let slideContainer = document.getElementById('slideContainer');
    if (!slideContainer) {
      console.log('📊 DEBUG: Creating slideContainer for vertical photo scrolling');
      slideContainer = document.createElement('div');
      slideContainer.id = 'slideContainer';
      slideContainer.className = 'slide-container w-full h-full flex flex-col items-center';
      slideContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; scroll-snap-type: y mandatory;';
      
      // Add the camera feed as first slide
      const cameraSlide = document.createElement('div');
      cameraSlide.className = 'camera-slide slide';
      cameraSlide.style.cssText = 'width: 100%; height: 100vh; scroll-snap-align: start; position: relative;';
      slideContainer.appendChild(cameraSlide);
      
      // Add a hint text for swiping
      const hintText = document.createElement('div');
      hintText.id = 'hintText';
      hintText.className = 'hint-text';
      hintText.textContent = 'Swipe up to view photos';
      hintText.style.cssText = 'position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.5); color: white; padding: 8px 16px; border-radius: 20px; opacity: 0; transition: opacity 0.3s ease;';
      
      document.body.appendChild(slideContainer);
      document.body.appendChild(hintText);
    }
    
    // Add current user to participants with authentication info
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      const isAnonymous = currentUser.isAnonymous;
      const displayName = currentUser.displayName || (isAnonymous ? 'Guest User' : currentUser.email || 'Unknown');
      
      console.log(`📊 DEBUG: Adding current user to participants: ${userId}, isAnonymous: ${isAnonymous}`);
      
      // Add participant with auth info to participants node
      database.ref(`sessions/${sessionId}/participants/${userId}`).set({
        connected: true,
        lastSeen: firebase.database.ServerValue.TIMESTAMP,
        displayName: displayName,
        photoURL: currentUser.photoURL || null,
        isAnonymous: isAnonymous
      });
      
      // Also update the members node with authentication status
      database.ref(`sessions/${sessionId}/members/${userId}`).set({
        isAnonymous: isAnonymous,
        joinTime: firebase.database.ServerValue.TIMESTAMP
      });
    }
    
    // Set up initial session data check
    const sessionRef = database.ref(`sessions/${sessionId}`);
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
      console.log('📊 DEBUG: Combined photos count:', Object.keys(combinedPhotosData).length);
      
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
        
        // Get the most recent photo (for slideshow if needed)
        const latestPhoto = combinedPhotosList.sort((a, b) => 
          (b.timestamp || 0) - (a.timestamp || 0)
        )[0];
        
        // Try to get the slideContainer for showing latest photo
        const slideContainer = document.getElementById('slideContainer');
        if (slideContainer && latestPhoto && latestPhoto.dataUrl) {
          console.log('📊 DEBUG: Adding latest combined photo to slides');
          // Add this photo to the slide container if it's new
          const existingSlides = slideContainer.querySelectorAll('.photo-slide');
          const slideIds = Array.from(existingSlides).map(slide => slide.dataset.photoId);
          
          if (!slideIds.includes(latestPhoto.id)) {
            // Create a new slide for this photo
            const slide = document.createElement('div');
            slide.className = 'photo-slide';
            slide.dataset.photoId = latestPhoto.id;
            
            const img = document.createElement('img');
            img.src = latestPhoto.dataUrl;
            img.alt = 'Combined Photo';
            img.className = 'w-full h-auto';
            
            slide.appendChild(img);
            slideContainer.appendChild(slide);
            
            // Scroll to the new slide
            setTimeout(() => {
              slide.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        }
        
        // Update state with ONLY combined photos (no individual photos)
        setCombinedPhotos(combinedPhotosList);
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
    const participantsRef = database.ref(`sessions/${sessionId}/participants`);
    participantsRef.on('value', (snapshot) => {
      const participantData = snapshot.val() || {};
      console.log('📊 DEBUG: Participants updated:', JSON.stringify(participantData));
      setParticipants(participantData);
      setParticipantCount(Object.keys(participantData).length);
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
      
      const photoId = newPhotoRef.key;
      console.log(`📸 DEBUG: Photo saved successfully to Firebase with ID: ${photoId}`);
      
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
    const participantsRef = database.ref(`sessions/${sessionId}/participants`);
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
                console.log('🔄 DEBUG: Authenticated participants:', authenticatedParticipants);
                
                let shouldCreateCombinedPhoto = false;
                let createReason = '';
                
                if (authenticatedParticipants.length > 0) {
                  // At least one authenticated user
                  if (!isCurrentUserAnonymous && authenticatedParticipants.includes(currentUserId)) {
                    // Current user is authenticated - check if it should save
                    if (authenticatedParticipants.length === 1) {
                      // Only authenticated user, should save
                      shouldCreateCombinedPhoto = true;
                      createReason = 'Only authenticated user';
                    } else {
                      // Multiple authenticated users, use lowest UID
                      const lowestAuthId = authenticatedParticipants.sort()[0];
                      shouldCreateCombinedPhoto = (currentUserId === lowestAuthId);
                      createReason = `Lowest authenticated UID (${lowestAuthId})`;
                    }
                  } else {
                    // Current user is guest but authenticated users exist, should NOT save
                    shouldCreateCombinedPhoto = false;
                    createReason = 'Guest user with authenticated participants present';
                  }
                } else {
                  // All guests - use lowest UID
                  const lowestGuestId = participantIds.sort()[0];
                  shouldCreateCombinedPhoto = (currentUserId === lowestGuestId);
                  createReason = `All guests, using lowest UID (${lowestGuestId})`;
                }
                
                console.log(`🔄 DEBUG: Should create combined photo: ${shouldCreateCombinedPhoto}, Reason: ${createReason}`);
                
                // Return if we shouldn't create the combined photo
                if (!shouldCreateCombinedPhoto) {
                  console.log('🔄 DEBUG: This device should NOT create the combined photo, skipping creation');
                  return;
                }
                
                // Check if this exact combination already exists
                combinedPhotosRef.once('value')
                  .then(combinedSnapshot => {
                    console.log(`🔄 DEBUG: Successfully retrieved combined photos data from Firebase (${Date.now() - startTime}ms)`);
                    
                    const combinedPhotos = combinedSnapshot.val() || {};
                    console.log(`🔄 DEBUG: Found ${Object.keys(combinedPhotos).length} existing combined photos`);
                    
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
                    
                    // Add information about the device performing the merge
                    const mergerInfo = {
                      mergedBy: currentUserId,
                      mergerIsAnonymous: isCurrentUserAnonymous
                    };
                    
                    createCombinedPhoto(sessionId, latestPhotos, participantIds, mergerInfo)
                      .then(photoId => {
                        const totalTime = Date.now() - startTime;
                        if (photoId) {
                          console.log(`🔄 DEBUG: Successfully created combined photo with ID: ${photoId} (total time: ${totalTime}ms)`);
                          
                          // Show toast notification
                          setCopySuccess(`Combined photo saved by ${isCurrentUserAnonymous ? 'guest' : 'authenticated'} user!`);
                          setTimeout(() => setCopySuccess(''), 3000);
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
          })
          .catch(error => {
            console.error('🔄 ERROR fetching participant details:', error);
          });
      })
      .catch(error => {
        console.error('🔄 ERROR fetching participants:', error);
      });
  };
  
  // Create a combined photo from multiple participant photos
  const createCombinedPhoto = async (sessionId, photos, participantIds, mergerInfo) => {
    try {
      console.log('🔄 DEBUG: Starting combined photo creation');
      console.log(`🔄 DEBUG: Creating combined photo for ${participantIds.length} participants`);
      console.log('🔄 DEBUG: Participant IDs:', JSON.stringify(participantIds));
      console.log('🔄 DEBUG: Merger info:', JSON.stringify(mergerInfo));
      
      // Extract the dataUrls from the participant photos
      const photoDataUrls = participantIds.map(id => {
        console.log(`🔄 DEBUG: Processing photo from participant ${id}`);
        const photo = photos[id];
        console.log(`🔄 DEBUG: Photo data structure:`, JSON.stringify({
          hasDataUrl: !!photo.dataUrl,
          dataUrlLength: photo.dataUrl ? photo.dataUrl.length : 0,
          timestamp: photo.timestamp
        }));
        // Make sure to return the dataUrl property explicitly
        if (!photo.dataUrl) {
          console.error(`🔄 ERROR: Missing dataUrl for photo from participant ${id}`);
        }
        return photo.dataUrl;
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
          img.crossOrigin = 'anonymous';  // Add this for CORS issues
          
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
      
      // SIMPLIFIED APPROACH: ALWAYS USE VERTICAL STACKING (PREVIOUS WORKING CODE)
      console.log('🔄 DEBUG: Using vertical stacking layout (first photo on top, second on bottom)');
      
      // Fixed width from your previous working code
      const W = 2160;
      const H = 1920;
      const TARGET_ASPECT = W / H; // About 1.125
      
      console.log(`🔄 DEBUG: Using fixed dimensions: ${W}x${H} per image`);
      console.log(`🔄 DEBUG: Setting canvas dimensions to: ${W}x${H*2}`);
      
      // Add requested debug logs
      console.log('🛠️ DEBUG: canvasRef.current:', canvasRef.current);
      console.log('🛠️ DEBUG: canvas element id/class:', canvasRef.current?.id, canvasRef.current?.className);
      console.log('🛠️ DEBUG: pre-set dimensions:', canvas.width, canvas.height);
      
      // Set canvas dimensions for vertical stacking
      canvas.width = W;
      canvas.height = H * 2; // Stack images vertically
      
      // Clear canvas with black background
      console.log('🔄 DEBUG: Clearing canvas with black background');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw images stacked vertically (first on top, second on bottom)
      images.forEach((img, index) => {
        // Calculate cropping dimensions to preserve aspect ratio
        const imgAspectRatio = img.width / img.height;
        
        // Variables for source crop rectangle
        let sourceX, sourceY, sourceWidth, sourceHeight;
        
        if (imgAspectRatio > TARGET_ASPECT) {
          // Image is wider than target - crop from sides
          sourceHeight = img.height;
          sourceWidth = img.height * TARGET_ASPECT;
          sourceX = (img.width - sourceWidth) / 2;
          sourceY = 0;
          console.log(`🔄 DEBUG: Image ${index+1} is wider, cropping sides: sourceX=${sourceX}, sourceWidth=${sourceWidth}`);
        } else {
          // Image is taller than target - crop from top/bottom
          sourceWidth = img.width;
          sourceHeight = img.width / TARGET_ASPECT;
          sourceX = 0;
          sourceY = (img.height - sourceHeight) / 2;
          console.log(`🔄 DEBUG: Image ${index+1} is taller, cropping top/bottom: sourceY=${sourceY}, sourceHeight=${sourceHeight}`);
        }
        
        // Destination position (stacked vertically)
        const destX = 0;
        const destY = index * H;
        
        console.log(`🔄 DEBUG: Drawing image ${index+1}: source(${sourceX},${sourceY},${sourceWidth},${sourceHeight}) -> dest(${destX},${destY},${W},${H})`);
        
        try {
          // Use 9-argument version of drawImage to crop source and place on canvas
          ctx.drawImage(
            img,
            sourceX, sourceY, sourceWidth, sourceHeight, // Source crop rectangle
            destX, destY, W, H                           // Destination rectangle
          );
          console.log(`🔄 DEBUG: Successfully drew image ${index+1}`);
        } catch (drawError) {
          console.error(`🔄 ERROR: Failed to draw image ${index+1}:`, drawError);
          throw drawError;
        }
      });
      
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
        combinedDataUrl = canvas.toDataURL('image/jpeg', 0.95); // Use 0.95 quality as in your previous code
        console.log(`🔄 DEBUG: Combined photo created, data URL length: ${combinedDataUrl.length}`);
      } catch (dataUrlError) {
        console.error('🔄 ERROR: Failed to convert canvas to data URL:', dataUrlError);
        throw dataUrlError;
      }

      // Generate Thumbnail
      console.log('🔄 DEBUG: Generating thumbnail');
      let thumbnailDataUrl = '';
      try {
        const thumbCanvas = document.createElement('canvas');
        const thumbCtx = thumbCanvas.getContext('2d');
        const thumbWidth = 270; // New width
        const thumbHeight = 480; // New height
        thumbCanvas.width = thumbWidth;
        thumbCanvas.height = thumbHeight;

        const tempImg = new Image();
        await new Promise((resolve, reject) => {
          tempImg.onload = resolve;
          tempImg.onerror = reject;
          tempImg.src = combinedDataUrl;
        });
        console.log(`🔄 DEBUG: Temporary image for thumbnail loaded: ${tempImg.width}x${tempImg.height}`);

        const sourceWidth = tempImg.width;
        const sourceHeight = tempImg.height;
        const sourceAspectRatio = sourceWidth / sourceHeight;
        const thumbAspectRatio = thumbWidth / thumbHeight; // Use new dimensions

        let drawWidth, drawHeight, drawX, drawY;

        if (sourceAspectRatio > thumbAspectRatio) { // Source is wider relative to thumbnail aspect ratio
          // Fit to thumbnail height, crop width
          drawHeight = thumbHeight;
          drawWidth = drawHeight * sourceAspectRatio;
          drawX = (thumbWidth - drawWidth) / 2;
          drawY = 0;
        } else { // Source is taller or same aspect as thumbnail
          // Fit to thumbnail width, crop height
          drawWidth = thumbWidth;
          drawHeight = drawWidth / sourceAspectRatio;
          drawX = 0;
          drawY = (thumbHeight - drawHeight) / 2;
        }
        
        console.log(`🔄 DEBUG: Drawing thumbnail with source dimensions: ${sourceWidth}x${sourceHeight}, target: ${thumbWidth}x${thumbHeight}, draw dimensions: ${drawWidth}x${drawHeight} at ${drawX},${drawY}`);
        thumbCtx.drawImage(tempImg, drawX, drawY, drawWidth, drawHeight);
        thumbnailDataUrl = thumbCanvas.toDataURL('image/jpeg', 0.9); // Slightly lower quality for thumbnail
        console.log(`🔄 DEBUG: Thumbnail created, data URL length: ${thumbnailDataUrl.length}`);
      } catch (thumbError) {
        console.error('🔄 ERROR: Failed to generate thumbnail:', thumbError);
        // Continue without thumbnail if it fails
      }
      
      // Save to Firebase under combinedPhotos
      console.log('🔄 DEBUG: Saving combined photo to Firebase');
      try {
        const combinedPhotoId = firebase.database().ref().push().key;
        console.log(`🔄 DEBUG: Generated Firebase key: ${combinedPhotoId}`);
        
        const combinedPhotoRef = database.ref(`sessions/${sessionId}/combinedPhotos/${combinedPhotoId}`);
        console.log(`🔄 DEBUG: Created Firebase reference at: sessions/${sessionId}/combinedPhotos/${combinedPhotoId}`);
        
        // Check if both data URLs are valid before saving
        if (!combinedDataUrl) {
          throw new Error('Combined photo data URL is missing');
        }
        
        console.log(`🔄 DEBUG: dataUrl length: ${combinedDataUrl.length}, thumbnailDataUrl length: ${thumbnailDataUrl?.length || 0}`);
        
        // Create the combined photo data object with merger info
        const combinedPhotoData = {
          dataUrl: combinedDataUrl,
          thumbnailDataUrl: thumbnailDataUrl || null, // Use null as fallback if thumbnail generation fails
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          participantIds: participantIds,
          isCombined: true,  // Explicitly mark as combined photo
          mergerInfo: mergerInfo || null
        };
        
        // Save to realtime database
        await combinedPhotoRef.set(combinedPhotoData);
        console.log(`🔄 DEBUG: Combined photo saved to Firebase Realtime Database with ID: ${combinedPhotoId}`);
        
        // Check authentication status of participants
        const authParticipantIds = [];
        const guestParticipantIds = [];
        
        // Determine which participants are authenticated vs guests
        for (const pid of participantIds) {
          if (participantAuthState[pid] && !participantAuthState[pid].isAnonymous) {
            authParticipantIds.push(pid);
          } else {
            guestParticipantIds.push(pid);
          }
        }
        
        console.log(`🔄 DEBUG: Auth participants: ${authParticipantIds.length}, Guest participants: ${guestParticipantIds.length}`);
        
        // Convert dataUrl to blob for Storage upload
        const response = await fetch(combinedDataUrl);
        const blob = await response.blob();
        
        // CASE 1: At least one participant is authenticated
        if (authParticipantIds.length > 0) {
          console.log('🔄 DEBUG: At least one participant is authenticated, storing in their account');
          
          // Store in each authenticated user's folder
          for (const authUid of authParticipantIds) {
            try {
              const storagePath = `users/${authUid}/combined/${combinedPhotoId}.jpg`;
              console.log(`🔄 DEBUG: Storing photo for auth user ${authUid} at path: ${storagePath}`);
              
              const storageRef = firebase.storage().ref(storagePath);
              const uploadTask = await storageRef.put(blob);
              const downloadURL = await uploadTask.ref.getDownloadURL();
              
              // Record the storage info for this user
              await combinedPhotoRef.child('storageInfo').child(authUid).set({
                storagePath: storagePath,
                downloadURL: downloadURL,
                isAnonymous: false
              });
              
              console.log(`🔄 DEBUG: Successfully stored for auth user ${authUid}`);
            } catch (storageError) {
              console.error(`🔄 ERROR: Failed to save to Storage for auth user ${authUid}:`, storageError);
            }
          }
        }
        // CASE 2: All participants are guests
        else if (guestParticipantIds.length > 0) {
          console.log('🔄 DEBUG: All participants are guests, storing in guest storage');
          
          try {
            // Store in a guest area with sessionId for organization
            const storagePath = `analysisData/guests/${sessionId}/combined/${combinedPhotoId}.jpg`;
            console.log(`🔄 DEBUG: Storing photo in guest path: ${storagePath}`);
            
            const storageRef = firebase.storage().ref(storagePath);
            const uploadTask = await storageRef.put(blob);
            const downloadURL = await uploadTask.ref.getDownloadURL();
            
            // Record the storage info
            await combinedPhotoRef.child('storageInfo').set({
              storagePath: storagePath,
              downloadURL: downloadURL,
              isGuestStorage: true
            });
            
            console.log('🔄 DEBUG: Successfully stored for guest users');
          } catch (storageError) {
            console.error('🔄 ERROR: Failed to save to Storage for guests:', storageError);
          }
        }
        
        // Show success toast with appropriate message
        if (authParticipantIds.length > 0) {
          setCopySuccess(`Combined photo saved to ${authParticipantIds.length} authenticated user(s)`);
        } else {
          setCopySuccess('Combined photo saved to guest storage');
        }
        setTimeout(() => setCopySuccess(''), 3000);
        
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
  
  // Save combined photos to localStorage with participant authentication info
  const saveCombinedPhotosToAlbum = useCallback(() => {
    if (combinedPhotos.length === 0) {
      setError('No photos to save');
      return;
    }
    
    try {
      // Get current user authentication status
      const currentUser = firebase.auth().currentUser;
      
      // Check if user exists and authentication status
      if (!currentUser) {
        AppUtils.info('No user found, cannot save photos');
        setError('User not logged in');
        return;
      }
      
      const isCurrentUserAnonymous = currentUser.isAnonymous;
      AppUtils.info(`Saving combined photos to album. User: ${currentUser.uid}, isAnonymous: ${isCurrentUserAnonymous}`);
      
      // Get participants authentication status
      const participantAuthStatus = {};
      const authParticipants = [];
      const guestParticipants = [];
      
      // Add current user's status
      participantAuthStatus[currentUser.uid] = {
        isAnonymous: isCurrentUserAnonymous,
        displayName: currentUser.displayName || 'Unknown',
        email: currentUser.email || null
      };
      
      if (!isCurrentUserAnonymous) {
        authParticipants.push(currentUser.uid);
      } else {
        guestParticipants.push(currentUser.uid);
      }
      
      // Add other participants from the session if available
      Object.entries(participants).forEach(([userId, participantData]) => {
        if (userId !== currentUser.uid) {
          const isAnonymous = participantData.isAnonymous !== undefined ? participantData.isAnonymous : true;
          participantAuthStatus[userId] = {
            isAnonymous: isAnonymous,
            displayName: participantData.displayName || 'Unknown',
            // Don't include email for other participants for privacy
          };
          
          if (!isAnonymous) {
            authParticipants.push(userId);
          } else {
            guestParticipants.push(userId);
          }
        }
      });
      
      AppUtils.info(`Auth participants: ${authParticipants.length}, Guest participants: ${guestParticipants.length}`);
      
      // Determine storage path based on authentication rules
      let savePath = '';
      let shouldSave = false;
      
      // Case 1: At least one authenticated participant
      if (authParticipants.length > 0) {
        // If current user is authenticated, save to their storage
        if (!isCurrentUserAnonymous) {
          savePath = `users/${currentUser.uid}/combined/`;
          shouldSave = true;
          AppUtils.info('Saving to authenticated user storage (current user)');
        } else {
          AppUtils.info('Current user is guest but authenticated users exist - saving skipped for this device');
          shouldSave = false;
        }
      }
      // Case 2: All participants are guests
      else {
        savePath = `analysisData/guests/${sessionId}/combined/`;
        shouldSave = true;
        AppUtils.info('All participants are guests - saving to guest storage');
      }
      
      if (!shouldSave) {
        setCopySuccess('Skipped saving - authenticated users exist');
        setTimeout(() => setCopySuccess(''), 2000);
        return;
      }
      
      // Get existing combined sessions from localStorage
      const existingSessionsJSON = localStorage.getItem('combinedSessions');
      const existingSessions = existingSessionsJSON ? JSON.parse(existingSessionsJSON) : [];
      
      // Create a new session entry with enhanced metadata
      const newSessionEntry = {
        id: sessionId,
        timestamp: Date.now(),
        photos: combinedPhotos.filter(p => p.isCombined || p.participantIds), // Only combined photos
        participantsCount: Object.keys(participants).length,
        savedByUser: currentUser.uid,
        isAnonymous: isCurrentUserAnonymous,
        participantAuthStatus: participantAuthStatus,
        savePath: savePath
      };
      
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