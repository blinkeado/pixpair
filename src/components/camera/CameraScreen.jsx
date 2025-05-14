import React, { useState, useEffect, useRef } from 'react';
import firebase, { database } from '../../services/firebase';
import Logo from '../../components/Logo';

const CameraScreen = ({ sessionId, onExitSession, onSignOut }) => {
  const [error, setError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photosTaken, setPhotosTaken] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [participants, setParticipants] = useState({});
  const [participantCount, setParticipantCount] = useState(0);
  const [copySuccess, setCopySuccess] = useState('');
  const countdownRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Redirect if no sessionId
  useEffect(() => {
    if (!sessionId) {
      console.log('No session ID provided, exiting session');
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
  
  // Debug camera initialization
  const initializeCamera = async () => {
    console.log('🎥 STARTING CAMERA INITIALIZATION');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      });
      
      console.log('🎥 CAMERA STREAM OBTAINED:', stream ? 'success' : 'failed');
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log('🎥 ASSIGNED STREAM TO VIDEO ELEMENT');
        
        videoRef.current.onloadedmetadata = () => {
          console.log('🎥 VIDEO METADATA LOADED, SETTING CAMERA READY');
          setCameraReady(true);
        };
      } else {
        console.error('🎥 VIDEO REF IS NULL');
      }
    } catch (err) {
      console.error('🎥 ERROR ACCESSING CAMERA:', err);
      setError('Could not access camera. Please check permissions.');
    }
  };
  
  // Debug camera readiness
  useEffect(() => {
    console.log('🎥 CAMERA READY STATE CHANGED:', cameraReady);
  }, [cameraReady]);
  
  // Initialize camera and Firebase listeners only if we have a sessionId
  useEffect(() => {
    if (!sessionId) return;

    console.log('Initializing camera and Firebase listeners for session:', sessionId);
    
    initializeCamera();
    
    // Listen for new photos in this session
    const photosRef = database.ref(`sessions/${sessionId}/photos`);
    photosRef.on('child_added', (snapshot) => {
      const photo = { id: snapshot.key, ...snapshot.val() };
      setPhotosTaken((prevPhotos) => [...prevPhotos, photo]);
    });
    
    // Listen for participants in this session
    const participantsRef = database.ref(`sessions/${sessionId}/members`);
    participantsRef.on('value', (snapshot) => {
      const members = snapshot.val() || {};
      setParticipants(members);
      setParticipantCount(Object.keys(members).length);
    });
    
    // Listen for capture time updates
    const captureRef = database.ref(`sessions/${sessionId}/capture`);
    captureRef.on('value', (snapshot) => {
      const captureData = snapshot.val();
      if (captureData && captureData.captureTime) {
        startCountdown(captureData.captureTime);
      }
    });
    
    return () => {
      // Clean up
      stopCamera();
      photosRef.off();
      participantsRef.off();
      captureRef.off();
      clearInterval(countdownRef.current);
    };
  }, [sessionId]);
  
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraReady(false);
    }
  };
  
  // Enhanced exit session to ensure camera is stopped
  const handleExitSession = () => {
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
  
  // Function to initiate synchronized capture
  const initiateCapture = async () => {
    try {
      // Set capture time 3 seconds in the future
      const captureTime = Date.now() + 3000;
      
      // Save to Firebase
      await database.ref(`sessions/${sessionId}/capture`).set({
        captureTime,
        initiatedBy: firebase.auth().currentUser?.uid || 'anonymous',
        initiated: firebase.database.ServerValue.TIMESTAMP
      });
      
      console.log(`Initiated capture for time: ${new Date(captureTime).toISOString()}`);
    } catch (error) {
      console.error('Error initiating capture:', error);
      setError('Failed to initiate synchronized capture.');
    }
  };
  
  // Function to start countdown
  const startCountdown = (captureTime) => {
    // Clear any existing countdown
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    
    const now = Date.now();
    const timeUntilCapture = captureTime - now;
    
    if (timeUntilCapture <= 0) {
      console.log("Capture time already passed");
      return;
    }
    
    console.log(`Starting countdown for capture at ${new Date(captureTime).toISOString()}`);
    
    // Calculate initial count (round up to nearest second)
    const initialCount = Math.ceil(timeUntilCapture / 1000);
    setCountdown(initialCount);
    
    // Set interval for countdown
    countdownRef.current = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          // Time to take the photo
          clearInterval(countdownRef.current);
          takePhoto();
          return null;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    // Safety timeout to ensure the photo is taken
    setTimeout(() => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        setCountdown(null);
      }
    }, timeUntilCapture + 100);
  };
  
  const takePhoto = async () => {
    if (!cameraReady || uploading) return;
    
    try {
      setUploading(true);
      setError(null);
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw the video frame to the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      // Convert canvas to data URL - this avoids CORS issues
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      
      // Get user data
      const userId = firebase.auth().currentUser ? 
        firebase.auth().currentUser.uid : 
        'anonymous';
      const timestamp = Date.now();
      
      // Save data URL directly to the database
      const photosRef = database.ref(`sessions/${sessionId}/photos/${firebase.auth().currentUser.uid}`);
      await photosRef.set({
        dataUrl: canvas.toDataURL('image/jpeg', 0.8),
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      
      console.log('Photo saved successfully');
    } catch (err) {
      console.error('Error taking photo:', err);
      setError('Failed to take photo. Please try again.');
    } finally {
      setUploading(false);
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
    // Instead of using navigate, call onExitSession
    if (typeof onExitSession === 'function') {
      onExitSession();
    }
  };
  
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
      
      {/* Content layer respecting safe areas */}
      <div className="camera-screen-content">
        {/* Header area with session info */}
        <div className="header-area">
          <div className="participants-count">
            Participants: {participantCount}/2
          </div>
          
          {error && <div className="error">{error}</div>}
          
          <div className="session-header">
            {/* Gallery button */}
            <button 
              className="btn btn-primary rainbow-button"
              onClick={handleGalleryClick}
              title="Exit to Gallery"
            >
              Gallery
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
        
        {/* Viewfinder area - empty space for camera view */}
        <div className="viewfinder-area">
          {/* Empty space for camera view, which is positioned behind in the camera-container */}
        </div>
        
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
        </div>
      </div>
      
      <div className="photos-grid">
        {photosTaken.map(renderPhotoItem)}
      </div>
    </div>
  );
};

export default CameraScreen;