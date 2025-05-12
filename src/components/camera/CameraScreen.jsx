import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';

const CameraScreen = ({ sessionId, onExitSession, onSignOut }) => {
  const [error, setError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photosTaken, setPhotosTaken] = useState([]);
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
    
    return () => {
      // Clean up
      stopCamera();
      photosRef.off();
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
    }
  };
  
  const takePhoto = async () => {
    if (!cameraReady) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the video frame to the canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    try {
      // Convert canvas to blob
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg', 0.8);
      });
      
      // Upload to Firebase Storage
      const userId = firebase.auth().currentUser.uid;
      const timestamp = Date.now();
      const fileName = `${sessionId}_${timestamp}.jpg`;
      const storageRef = firebase.storage().ref(`sessions/${sessionId}/photos/${fileName}`);
      
      const uploadTask = storageRef.put(blob);
      
      uploadTask.on('state_changed', 
        null, 
        (error) => {
          console.error('Upload error:', error);
          setError('Failed to upload photo.');
        },
        async () => {
          // Get download URL
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          
          // Save to database
          const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
          await photosRef.push({
            userId,
            timestamp,
            downloadURL
          });
        }
      );
    } catch (err) {
      console.error('Error taking photo:', err);
      setError('Failed to take photo.');
    }
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
          disabled={!cameraReady}
        >
          Take Photo
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
        {photosTaken.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.downloadURL} alt="Captured" />
            <p>Taken at: {new Date(photo.timestamp).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraScreen;