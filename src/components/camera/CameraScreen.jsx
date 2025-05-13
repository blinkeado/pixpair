import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import { storage } from '../../services/firebase';
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
  
  // Initialize camera on component mount
  useEffect(() => {
    initializeCamera();
    
    // Listen for new photos in this session
    const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
    photosRef.on('child_added', (snapshot) => {
      const photo = { id: snapshot.key, ...snapshot.val() };
      setPhotosTaken((prevPhotos) => [...prevPhotos, photo]);
    });
    
    // Listen for participants in this session
    const participantsRef = firebase.database().ref(`sessions/${sessionId}/members`);
    participantsRef.on('value', (snapshot) => {
      const members = snapshot.val() || {};
      setParticipants(members);
      setParticipantCount(Object.keys(members).length);
    });
    
    // Listen for capture time updates
    const captureRef = firebase.database().ref(`sessions/${sessionId}/capture`);
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
  
  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          setCameraReady(true);
        };
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Could not access camera. Please check permissions.');
    }
  };
  
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
    onExitSession();
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
      await firebase.database().ref(`sessions/${sessionId}/capture`).set({
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
      const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
      await photosRef.push({
        userId,
        timestamp,
        dataUrl,
        isDataUrl: true
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
  
  return (
    <div className="camera-screen">
      <div className="participants-count" style={{ top: 'calc(env(safe-area-inset-top) + 70px)' }}>
        Participants: {participantCount}/2
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <div className="camera-container">
        <div className="logo-container" style={{ top: 'calc(env(safe-area-inset-top) + 10px)' }}>
          <Logo />
        </div>

        <div className="session-header absolute left-0 right-0 z-10 p-4" style={{ top: 'env(safe-area-inset-top)' }}>
          <h2>Session: </h2>
          <div className="session-id-container">
            <span className="session-id">{sessionId}</span>
            <button 
              className="btn btn-icon copy-btn" 
              onClick={copySessionIdToClipboard}
              title="Copy Session ID"
            >
              Copy
            </button>
            {copySuccess && <span className="copy-status">{copySuccess}</span>}
          </div>
        </div>

        {countdown !== null && (
          <div className="countdown-overlay">
            <div className="countdown-number">{countdown}</div>
          </div>
        )}
        
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        
        {cameraReady && (
          <button 
            className="
              btn-circle btn-circle-rainbow
              absolute left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-white shadow-lg border-4 border-gray-200
              z-50 hover:translate-y-[-2px] hover:scale-[1.02]
              active:translate-y-0 active:scale-[0.98]
              transition-transform disabled:opacity-50 disabled:cursor-not-allowed
            "
            style={{ 
              bottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)',
              transform: 'translateX(-50%)'
            }}
            onClick={initiateCapture} 
            disabled={!cameraReady || uploading || countdown !== null || participantCount < 2}
          >
            <span className="block w-8 h-8 bg-gray-200 rounded-full m-auto" />
          </button>
        )}

        <div 
          className="camera-controls absolute left-0 right-0 z-10 p-4 flex justify-between"
          style={{ bottom: 'env(safe-area-inset-bottom)' }}
        >
          <button className="btn btn-secondary" onClick={handleExitSession}>
            Exit Session
          </button>
          <button className="btn btn-text" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      
      <div className="photos-grid">
        {photosTaken.map(renderPhotoItem)}
      </div>
    </div>
  );
};

export default CameraScreen;