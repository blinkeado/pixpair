import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import firebase, { auth, database } from './services/firebase';
import AuthScreen from './components/auth/AuthScreen';
import CameraScreen from './components/camera/CameraScreen';
import AlbumScreen from './components/album/AlbumScreen';
import AppUtils from './utils/AppUtils';

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [user, setUser] = useState(null);

  // Initialize toast listeners immediately when the app loads
  useEffect(() => {
    // Initialize toast listeners first
    AppUtils.initToastListeners();
    AppUtils.info('App initialized toast listeners');
  }, []);

  // Set up auth state change listener after toast is ready
  useEffect(() => {
    // Small delay to ensure toast listeners are fully initialized
    const initAuthListener = setTimeout(() => {
      // Listen for auth state changes
      const unsubscribe = auth.onAuthStateChanged((user) => {
        AppUtils.info(`Auth state changed: ${user ? 'signed in' : 'signed out'}`);
        setUser(user);
        
        // Show toast for existing auth state on initial load
        if (user && !window._initialAuthToastShown) {
          window._initialAuthToastShown = true;
          const isAnonymous = user.isAnonymous;
          
          if (isAnonymous) {
            window.dispatchEvent(new CustomEvent('showToast', { 
              detail: { message: 'Guest session active' } 
            }));
          } else {
            window.dispatchEvent(new CustomEvent('showToast', { 
              detail: { message: `Signed in as ${user.displayName || user.email || 'user'}` } 
            }));
          }
        }
      });
      
      return () => {
        clearTimeout(initAuthListener);
        unsubscribe();
      };
    }, 100); // Brief delay to ensure toast system is ready
    
    return () => clearTimeout(initAuthListener);
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
      
      // Reset initial auth toast flag when signing out
      window._initialAuthToastShown = false;
      
      // Show sign out toast
      window.dispatchEvent(new CustomEvent('showToast', { 
        detail: { message: 'Signed out successfully' } 
      }));
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