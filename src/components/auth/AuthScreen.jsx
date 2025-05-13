import React, { useState } from 'react';
import firebase from 'firebase/compat/app';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
  className="rainbow-button w-full"
  disabled={loading}
>
  {isSignUp ? 'Sign Up' : 'Sign In'}
</button>

      </form>
      
      <div className="auth-options">
        <button 
          className="btn btn-secondary"
          onClick={() => setIsSignUp(!isSignUp)}
          disabled={loading}
        >
          {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
        </button>
        
        <div className="auth-separator">
          <span>or</span>
        </div>
        
        <button 
          className="btn btn-google" 
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
      </div>
    </div>
  );
};

export default AuthScreen;