import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import AuthScreen from './auth/AuthScreen';
import SessionSetup from './session/SessionSetup';
import CameraScreen from './camera/CameraScreen';
import { initializeFirebase } from '../services/firebase';
import { PixCrabProvider } from '../context/PixCrabContext';

// Initialize Firebase with the config from window.firebaseConfig
initializeFirebase();

function App() {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  
  // Handle auth state changes
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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
  }, []);
  
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
      await firebase.auth().signOut();
      setCurrentScreen('auth');
      setSessionId(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  // Render the current screen
  return (
    <PixCrabProvider value={{ user, sessionId }}>
      <div className="app-container">
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