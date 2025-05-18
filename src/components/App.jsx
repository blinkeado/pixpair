import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthScreen from './auth/AuthScreen';
import SessionSetup from './session/SessionSetup';
import CameraScreen from './camera/CameraScreen';
import AlbumScreen from './album/AlbumScreen';
import BuilderPage from './builder/BuilderPage';
import firebase, { auth, initializeFirebase } from '../services/firebase';
import { PixCrabProvider } from '../context/PixCrabContext';
import Logo from './Logo';

// Import Builder.io integration
import '../builder/builder-styles.css';

// Initialize Builder.io
import { initBuilder } from '../builder/builder-integration';

// Call initBuilder to register components
initBuilder();

// Firebase is already initialized in the firebase.js module
// No need to call initializeFirebase() again or check window.firebaseConfig

function App() {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState(null);
  
  // Initialize Firebase
  useEffect(() => {
    try {
      // Check if Firebase is initialized by checking if we can access Firebase app
      if (!firebase.apps.length) {
        setError("Firebase initialization failed. Please check your setup.");
        return;
      }
      
      // Firebase is successfully initialized
      setInitialized(true);
    } catch (err) {
      console.error('Error initializing app:', err);
      setError("Failed to initialize the application. Please try again later.");
    }
  }, []);
  
  // Handle auth state changes
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
    
    // Check URL for session ID
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get('sessionId');
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
    }
    
    return () => unsubscribe();
  }, [initialized]);
  
  // Handle screen changes based on app state
  const handleCreateSession = (newSessionId) => {
    setSessionId(newSessionId);
    setCurrentScreen('camera');
  };
  
  const handleJoinSession = (joinSessionId) => {
    setSessionId(joinSessionId);
    setCurrentScreen('camera');
  };
  
  const handleExitSession = () => {
    setSessionId(null);
    setCurrentScreen('session');
  };

  const handleViewAlbum = () => {
    setCurrentScreen('album');
  };

  const handleReturnFromAlbum = () => {
    setCurrentScreen('session');
  };
  
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setCurrentScreen('auth');
      setSessionId(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  if (error) {
    return (
      <div className="app-container">
        <div className="error">{error}</div>
      </div>
    );
  }
  
  if (!initialized) {
    return (
      <div className="app-container">
        <div>Loading...</div>
      </div>
    );
  }
  
  // Check if we're in Builder.io mode via URL
  const isBuilderMode = window.location.pathname.startsWith('/builder');
  
  // Use Router for Builder.io paths, but keep existing code for the main app flow
  if (isBuilderMode) {
    return (
      <Router>
        <Routes>
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/builder/:page" element={<BuilderPage />} />
        </Routes>
      </Router>
    );
  }
  
  // Render the current screen (original flow)
  return (
    <PixCrabProvider value={{ user, sessionId }}>
      <div className={`app-container ${currentScreen === 'camera' ? 'camera-mode' : ''}`}>
        {/* Only show logo on auth and session screens, not on camera screen */}
        {currentScreen !== 'camera' && (
          <div className="flex justify-center items-center w-full mb-4">
            <Logo />
          </div>
        )}
        
        {currentScreen === 'auth' && (
          <AuthScreen 
            onCreateSession={handleCreateSession}
            onJoinSession={handleJoinSession}
            onSignOut={handleSignOut}
          />
        )}
        
        {currentScreen === 'session' && (
          <SessionSetup 
            onCreateSession={handleCreateSession}
            onJoinSession={handleJoinSession}
            onSignOut={handleSignOut}
            onViewAlbum={handleViewAlbum}
            initialSessionId={sessionId}
          />
        )}
        
        {currentScreen === 'camera' && (
          <CameraScreen 
            sessionId={sessionId}
            onExitSession={handleExitSession}
            onSignOut={handleSignOut}
          />
        )}

        {currentScreen === 'album' && (
          <AlbumScreen 
            onCreateSession={handleCreateSession}
            onReturn={handleReturnFromAlbum}
          />
        )}
      </div>
    </PixCrabProvider>
  );
}

export default App; 