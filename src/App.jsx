import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import firebase, { auth, database } from './services/firebase';
import AuthScreen from './components/auth/AuthScreen';
import CameraScreen from './components/camera/CameraScreen';
import AlbumScreen from './components/album/AlbumScreen';

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      const firebaseConfig = window.firebaseConfig;
      if (!firebaseConfig) {
        console.error('Firebase configuration not found on window.firebaseConfig');
        return;
      }
      
      try {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully');
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    }

    // Listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleCreateSession = (newSessionId) => {
    setSessionId(newSessionId);
  };

  const handleJoinSession = (newSessionId) => {
    setSessionId(newSessionId);
  };

  const handleExitSession = () => {
    setSessionId(null);
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      setSessionId(null);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <AuthScreen 
                onCreateSession={handleCreateSession}
                onJoinSession={handleJoinSession}
                onSignOut={handleSignOut}
              />
            } 
          />
          <Route 
            path="/camera" 
            element={
              <CameraScreen 
                sessionId={sessionId}
                onExitSession={handleExitSession}
                onSignOut={handleSignOut}
              />
            } 
          />
          <Route 
            path="/album" 
            element={
              <AlbumScreen 
                onSignOut={handleSignOut}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 