import React, { useState, useEffect } from 'react';
import firebase, { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const AuthScreen = ({ onCreateSession, onJoinSession, onSignOut }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check for existing session in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('sessionId');
    if (sessionId) {
      handleJoinExistingSession(sessionId);
    }
  }, []);

  const handleJoinExistingSession = async (sessionId) => {
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
      const userId = firebase.auth().currentUser?.uid;
      if (!userId) {
        setError('You must be signed in to join a session.');
        return;
      }
      
      await firebase.database().ref(`sessions/${sessionId}/members/${userId}`).set({
        joinedAt: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Call the onJoinSession callback
      onJoinSession(sessionId);
      
      // Navigate to camera screen
      navigate('/camera');
      
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
      
      // After successful auth, create a new session
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const userId = firebase.auth().currentUser.uid;
      
      await firebase.database().ref(`sessions/${sessionId}`).set({
        createdBy: userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        members: {
          [userId]: {
            joinedAt: firebase.database.ServerValue.TIMESTAMP
          }
        }
      });
      
      // Call the onCreateSession callback
      onCreateSession(sessionId);
      
      // Navigate to camera screen
      navigate('/camera');
      
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message);
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
      
      // After successful auth, create a new session
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const userId = firebase.auth().currentUser.uid;
      
      await firebase.database().ref(`sessions/${sessionId}`).set({
        createdBy: userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        members: {
          [userId]: {
            joinedAt: firebase.database.ServerValue.TIMESTAMP
          }
        }
      });
      
      // Call the onCreateSession callback
      onCreateSession(sessionId);
      
      // Navigate to camera screen
      navigate('/camera');
      
    } catch (error) {
      console.error('Google auth error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousAuth = async () => {
    setError(null);
    setLoading(true);

    try {
      await firebase.auth().signInAnonymously();
      
      // After successful auth, create a new session
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const userId = firebase.auth().currentUser.uid;
      
      await firebase.database().ref(`sessions/${sessionId}`).set({
        createdBy: userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        members: {
          [userId]: {
            joinedAt: firebase.database.ServerValue.TIMESTAMP
          }
        }
      });
      
      // Call the onCreateSession callback
      onCreateSession(sessionId);
      
      // Navigate to camera screen
      navigate('/camera');
      
    } catch (error) {
      console.error('Anonymous auth error:', error);
      setError(error.message);
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
        >
          Continue with Google
        </button>
        
        <button 
          className="btn btn-text" 
          onClick={handleAnonymousAuth}
          disabled={loading}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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