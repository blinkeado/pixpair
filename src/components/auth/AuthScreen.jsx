import React, { useState, useEffect } from 'react';
import firebase, { auth, authMethods } from '../../services/firebase';

const AuthScreen = ({ onCreateSession, onJoinSession, onSignOut }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Check for existing session in URL
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('sessionId');
      
      // Only try to join if we have sessionId and user is already logged in
      if (sessionId && firebase.auth().currentUser) {
        handleJoinExistingSession(sessionId);
      } else if (sessionId) {
        // Save the session ID for after login
        localStorage.setItem('pendingSessionId', sessionId);
      }
    } catch (err) {
      console.error('Error in session URL processing:', err);
      setError('Could not process session information from URL.');
    }
  }, []);

  // Check for pending session after login
  useEffect(() => {
    try {
      const pendingSessionId = localStorage.getItem('pendingSessionId');
      const currentUser = firebase.auth().currentUser;
      
      if (pendingSessionId && currentUser) {
        handleJoinExistingSession(pendingSessionId);
        localStorage.removeItem('pendingSessionId');
      }
    } catch (err) {
      console.error('Error checking pending session:', err);
    }
  }, [firebase.auth().currentUser]);

  const handleJoinExistingSession = async (sessionId) => {
    if (!sessionId) return;
    
    try {
      setError(null);
      setLoading(true);
      
      // Check if session exists
      const snapshot = await firebase.database().ref(`sessions/${sessionId}`).once('value');
      const sessionData = snapshot.val();
      
      if (!sessionData) {
        setError('Session not found. Please check the ID and try again.');
        return;
      }
      
      // Join the session
      const currentUser = firebase.auth().currentUser;
      const userId = currentUser?.uid;
      
      if (!userId) {
        setError('You must be signed in to join a session.');
        return;
      }
      
      await firebase.database().ref(`sessions/${sessionId}/members/${userId}`).set({
        joinedAt: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Call the onJoinSession callback if provided
      if (typeof onJoinSession === 'function') {
        onJoinSession(sessionId);
      }
      
      // No longer need to navigate, as onJoinSession will handle screen changes
      
    } catch (error) {
      console.error('Error joining session:', error);
      setError('Failed to join session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        // Create new user
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } else {
        // Sign in existing user
        await firebase.auth().signInWithEmailAndPassword(email, password);
      }
      
      // Get current user - added safety check
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        throw new Error('Authentication succeeded but user is not available.');
      }
      
      // Don't create a session here - let the user go to the session screen first
      // The auth state change in App.jsx will automatically navigate to the session screen
      
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      
      // Get current user - added safety check
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        throw new Error('Google authentication succeeded but user is not available.');
      }
      
      // Don't create a session here - let the user go to the session screen first
      // The auth state change in App.jsx will automatically navigate to the session screen
      
    } catch (error) {
      console.error('Google auth error:', error);
      setError(error.message || 'Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousAuth = async () => {
    setError(null);
    setLoading(true);

    try {
      // Sign in anonymously using Firebase
      const userCredential = await firebase.auth().signInAnonymously();
      console.log("Anonymous authentication successful", userCredential);
      
      // Wait a moment for auth to fully propagate
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get current user - added safety check
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        throw new Error('Anonymous authentication succeeded but user is not available.');
      }
      
      // Don't create a session here - let the user go to the session screen first
      // The auth state change in App.jsx will automatically navigate to the session screen
      
    } catch (error) {
      console.error('Anonymous auth error:', error);
      
      // Provide more detailed error message
      if (error.message.includes("PERMISSION_DENIED")) {
        setError('Database permission denied. Please check Firebase rules.');
      } else {
        setError(error.message || 'Guest sign-in failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <h1>PixCrab</h1>
      <p>Synchronized Photo Capture</p>

      {error && <div className="error">{error}</div>}

      <div className="auth-options">
        <button 
          className="btn btn-google rainbow-button w-full" 
          onClick={handleGoogleAuth}
          disabled={loading}
          aria-label="Continue with Google"
        >
          Continue with Google
        </button>
        
        <button 
          className="btn btn-text" 
          onClick={handleAnonymousAuth}
          disabled={loading}
          aria-label="Continue as Guest"
        >
          Continue as Guest
        </button>
        
        <div className="auth-separator">
          <span>or</span>
        </div>
      </div>

      <form onSubmit={handleAuth}>
        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            aria-required="true"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={isSignUp ? "new-password" : "current-password"}
            aria-required="true"
          />
        </div>
        
        <button 
          type="submit" 
          className="auth-form-button"
          disabled={loading}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      
      <button 
        className="btn btn-secondary"
        onClick={() => setIsSignUp(!isSignUp)}
        disabled={loading}
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default AuthScreen;