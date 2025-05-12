import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';

const SessionSetup = ({ onCreateSession, onJoinSession, onSignOut, initialSessionId }) => {
  const [sessionIdInput, setSessionIdInput] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (initialSessionId) {
      handleJoinExistingSession(initialSessionId);
    }
  }, [initialSessionId]);
  
  const handleCreateNewSession = async () => {
    try {
      setError(null);
      
      // Generate a random session ID
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Create session in Firebase
      const sessionRef = firebase.database().ref(`sessions/${sessionId}`);
      const userId = firebase.auth().currentUser.uid;
      
      await sessionRef.set({
        createdBy: userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        members: {
          [userId]: {
            joinedAt: firebase.database.ServerValue.TIMESTAMP
          }
        }
      });
      
      // Call the onCreateSession callback with the new session ID
      onCreateSession(sessionId);
      
    } catch (error) {
      console.error('Error creating session:', error);
      setError('Failed to create session. Please try again.');
    }
  };
  
  const handleJoinExistingSession = async (sessionId) => {
    try {
      setError(null);
      const sessionIdToJoin = sessionId || sessionIdInput;
      
      if (!sessionIdToJoin) {
        setError('Please enter a session ID');
        return;
      }
      
      // Check if session exists
      const sessionRef = firebase.database().ref(`sessions/${sessionIdToJoin}`);
      const snapshot = await sessionRef.once('value');
      
      if (!snapshot.exists()) {
        setError('Session not found. Please check the ID and try again.');
        return;
      }
      
      // Join the session
      const userId = firebase.auth().currentUser.uid;
      await sessionRef.child(`members/${userId}`).set({
        joinedAt: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Call the onJoinSession callback with the session ID
      onJoinSession(sessionIdToJoin);
      
    } catch (error) {
      console.error('Error joining session:', error);
      setError('Failed to join session. Please try again.');
    }
  };
  
  return (
    <div className="session-setup">
      <h1>PixCrab</h1>
      <p>Create a new session or join an existing one</p>
      
      {error && <div className="error">{error}</div>}
      
      <div className="session-actions">
        <button 
          className="btn btn-primary" 
          onClick={handleCreateNewSession}
        >
          Create New Session
        </button>
        
        <div className="session-join">
          <input 
            type="text" 
            placeholder="Enter Session ID" 
            value={sessionIdInput}
            onChange={(e) => setSessionIdInput(e.target.value)}
          />
          <button 
            className="btn btn-secondary" 
            onClick={() => handleJoinExistingSession()}
          >
            Join Session
          </button>
        </div>
      </div>
      
      <button className="btn btn-text" onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SessionSetup;