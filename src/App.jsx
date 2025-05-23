import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import firebase, { auth, database } from './services/firebase';
import AuthScreen from './components/auth/AuthScreen';
import CameraScreen from './components/camera/CameraScreen';
import AlbumScreen from './components/album/AlbumScreen';
import BuilderPage from './components/builder/BuilderPage';
import AppUtils from './utils/AppUtils';

// Import and initialize Builder.io
import { initBuilder } from './builder/builder-integration.jsx';

// Initialize Builder with components and configuration
initBuilder();

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [user, setUser] = useState(null);

  // Set up auth state change listener
  useEffect(() => {
    // Simple, direct auth state handler
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(`Auth state changed: ${user ? 'signed in' : 'signed out'}`);
      
      if (user) {
        // Show toast directly without events or flags
        const message = user.isAnonymous
          ? 'Guest session active'
          : `Signed in as ${user.displayName || user.email || 'user'}`;
        
        // Direct synchronous toast call
        AppUtils.showToast(message);
      }
      
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
      
      // Direct toast for sign out
      AppUtils.showToast('Signed out successfully');
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
          {/* Builder.io Routes */}
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/builder/:page" element={<BuilderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 