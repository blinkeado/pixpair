import React, { useState, useEffect } from 'react';
import AuthScreen from './auth/AuthScreen';
import SessionSetup from './session/SessionSetup';
import CameraScreen from './camera/CameraScreen';
import { initializeFirebase, auth } from '../services/firebase';
import { PixCrabProvider } from '../context/PixCrabContext';
import Logo from './Logo';

// Initialize Firebase with the config from window.firebaseConfig
const firebaseApp = initializeFirebase();

function App() {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState(null);
  
  // Initialize Firebase
  useEffect(() => {
    if (!window.firebaseConfig) {
      setError("Firebase configuration not found. Please check your setup.");
      return;
    }
    
    try {
      // Firebase is already initialized in the import section
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
  
  // Render the current screen
  return (
    <PixCrabProvider value={{ user, sessionId }}>
      <div className={`app-container ${currentScreen === 'camera' ? 'camera-mode' : ''}`}>
        {/* Only show logo on auth and session screens, not on camera screen */}
        {currentScreen !== 'camera' && (
          <div className="flex justify-center p-4">
            <Logo />
          </div>
        )}
        
        {currentScreen === 'auth' && (
          <AuthScreen />
        )}
        
        {currentScreen === 'session' && (
          <SessionSetup 
            onCreateSession={handleCreateSession}
            onJoinSession={handleJoinSession}
            onSignOut={handleSignOut}
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
      </div>
    </PixCrabProvider>
  );
}

export default App; 