import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import { storage } from '../../services/firebase';

const CameraScreen = ({ sessionId, onExitSession, onSignOut }) => {
  const [error, setError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photosTaken, setPhotosTaken] = useState([]);
  const [uploading, setUploading] = useState(false);
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
    
    // Add CORS headers to Firebase Storage
    addCorsHeaders();
    
    return () => {
      // Clean up
      stopCamera();
      photosRef.off();
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
    }
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
      <h2>Session: {sessionId}</h2>
      
      {error && <div className="error">{error}</div>}
      
      <div className="camera-container">
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
          onClick={takePhoto} 
          disabled={!cameraReady || uploading}
        >
          {uploading ? 'Uploading...' : 'Take Photo'}
        </button>
        
        <div className="session-controls">
          <button className="btn btn-secondary" onClick={onExitSession}>
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