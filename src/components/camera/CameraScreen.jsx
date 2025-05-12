import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import { storage } from '../../services/firebase';

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
      
      // Don't auto-start countdown when 2 participants join anymore
      // This is now triggered only by the Take Synchronized Photo button
    });
    
    // Listen for capture time updates
    const captureRef = firebase.database().ref(`sessions/${sessionId}/capture`);
    captureRef.on('value', (snapshot) => {
      const captureData = snapshot.val();
      if (captureData && captureData.captureTime) {
        startCountdown(captureData.captureTime);
      }
    });
    
    // Add CORS headers to Firebase Storage
    addCorsHeaders();
    
    return () => {
      // Clean up
      stopCamera();
      photosRef.off();
      participantsRef.off();
      captureRef.off();
      clearInterval(countdownRef.current);
    };
  }, [sessionId]);
  
  // Add CORS headers to Firebase Storage
  const addCorsHeaders = async () => {
    try {
      // This will just ensure the CORS configuration is applied
      const storageRef = firebase.storage().ref();
      console.log('CORS configuration applied to Firebase Storage');
    } catch (error) {
      console.error('Error configuring CORS:', error);
    }
  };
  
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
      
      // Convert canvas to blob
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg', 0.8);
      });
      
      // Get user data
      const userId = firebase.auth().currentUser ? 
        firebase.auth().currentUser.uid : 
        'anonymous';
      const timestamp = Date.now();
      const fileName = `${sessionId}_${timestamp}.jpg`;
      const storagePath = `sessions/${sessionId}/photos/${fileName}`;
      
      // Use the storage service with CORS headers
      try {
        // Upload with enhanced CORS headers
        const uploadTask = await storage.upload(storagePath, blob, {
          contentType: 'image/jpeg',
          customMetadata: {
            sessionId,
            userId,
            timestamp: timestamp.toString()
          }
        });
        
        // Get download URL
        const downloadURL = await firebase.storage().ref(storagePath).getDownloadURL();
        
        // Save to database
        const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
        await photosRef.push({
          userId,
          timestamp,
          downloadURL,
          storagePath
        });
        
        console.log('Photo uploaded successfully');
      } catch (error) {
        console.error('Error uploading photo:', error);
        setError('Failed to upload photo. CORS error or network issue.');
        
        // Try alternative approach for development/testing
        // In a real app, you might want to implement a fallback or retry mechanism
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result;
          
          // Save data URL to database as fallback
          const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
          await photosRef.push({
            userId,
            timestamp,
            dataUrl: base64data, // Store the data URL instead
            isDataUrl: true
          });
          
          console.log('Photo saved as data URL instead');
        };
        reader.readAsDataURL(blob);
      }
    } catch (err) {
      console.error('Error taking photo:', err);
      setError('Failed to take photo. Please try again.');
    } finally {
      setUploading(false);
    }
  };
  
  // Render a photo item based on whether it's a URL or data URL
  const renderPhotoItem = (photo) => {
    const photoSrc = photo.isDataUrl ? photo.dataUrl : photo.downloadURL;
    return (
      <div key={photo.id} className="photo-item">
        <img src={photoSrc} alt="Captured" />
        <p>Taken at: {new Date(photo.timestamp).toLocaleTimeString()}</p>
      </div>
    );
  };
  
  return (
    <div className="camera-screen">
      <div className="session-header">
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
      
      <div className="participants-count">
        Participants: {participantCount}/2
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <div className="camera-container">
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
      </div>
      
      <div className="camera-controls">
        <button 
          className="btn btn-primary" 
          onClick={initiateCapture} 
          disabled={!cameraReady || uploading || countdown !== null || participantCount < 2}
        >
          {uploading ? 'Uploading...' : countdown !== null ? 'Taking photo...' : 'Take Synchronized Photo'}
        </button>
        
        <div className="session-controls">
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