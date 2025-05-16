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
    console.log('[App Debug] App component mounted, initializing toast system');
    // Initialize toast listeners first
    AppUtils.initToastListeners();
    AppUtils.info('App initialized toast listeners');
  }, []);

  // Set up auth state change listener after toast is ready
  useEffect(() => {
    console.log('[App Debug] Setting up auth state listener with delay');
    // Small delay to ensure toast listeners are fully initialized
    const initAuthListener = setTimeout(() => {
      console.log('[App Debug] Delay complete, registering auth state change listener');
      console.log(`[App Debug] Toast listeners initialized: ${window._toastListenersInitialized || false}`);
      
      // Listen for auth state changes
      const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(`[App Debug] Auth state changed: ${user ? `user ${user.uid} (${user.isAnonymous ? 'anonymous' : 'authenticated'})` : 'signed out'}`);
        AppUtils.info(`Auth state changed: ${user ? 'signed in' : 'signed out'}`);
        setUser(user);
        
        // Debug flag state
        console.log(`[App Debug] Initial auth toast shown flag: ${window._initialAuthToastShown || false}`);
        
        // Show toast for existing auth state on initial load
        if (user && !window._initialAuthToastShown) {
          console.log('[App Debug] Setting initial auth toast shown flag');
          window._initialAuthToastShown = true;
          const isAnonymous = user.isAnonymous;
          
          const message = isAnonymous 
            ? 'Guest session active' 
            : `Signed in as ${user.displayName || user.email || 'user'}`;
            
          console.log(`[App Debug] Dispatching showToast event with message: "${message}"`);
          
          // If toast system not ready, retry with increasing delays
          if (!window._toastListenersInitialized) {
            console.log('[App Debug] Toast system not initialized yet, scheduling retry');
            
            const tryShowToast = (attempt = 1) => {
              console.log(`[App Debug] Toast retry attempt ${attempt}`);
              
              if (window._toastListenersInitialized) {
                console.log('[App Debug] Toast system now ready, dispatching event');
                window.dispatchEvent(new CustomEvent('showToast', { 
                  detail: { message } 
                }));
                
                // Also try direct method call as fallback
                setTimeout(() => {
                  console.log('[App Debug] Also trying direct showToast method call');
                  AppUtils.showToast(message);
                }, 100);
              } else if (attempt < 5) {
                console.log(`[App Debug] Toast system still not ready, will retry in ${attempt * 200}ms`);
                setTimeout(() => tryShowToast(attempt + 1), attempt * 200);
              } else {
                console.log('[App Debug] Giving up on toast after 5 attempts');
              }
            };
            
            tryShowToast();
          } else {
            console.log('[App Debug] Toast system ready, dispatching event normally');
            window.dispatchEvent(new CustomEvent('showToast', { 
              detail: { message } 
            }));
            
            // Also try direct method call as fallback
            setTimeout(() => {
              console.log('[App Debug] Also trying direct showToast method call');
              AppUtils.showToast(message);
            }, 100);
          }
        }
      });
      
      return () => {
        clearTimeout(initAuthListener);
        unsubscribe();
        console.log('[App Debug] Auth listener unsubscribed');
      };
    }, 100); // Brief delay to ensure toast system is ready
    
    return () => {
      clearTimeout(initAuthListener);
      console.log('[App Debug] Auth listener setup cleanup');
    };
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