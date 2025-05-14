import React, { useState, useEffect, useRef } from 'react';
import firebase, { auth, database } from '../../services/firebase';

const SessionSetup = ({ onCreateSession, onJoinSession, onSignOut, initialSessionId }) => {
  const [sessionIdInput, setSessionIdInput] = useState('');
  const [error, setError] = useState(null);
  const [createdSessionId, setCreatedSessionId] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');
  const qrCodeRef = useRef(null);
  
  useEffect(() => {
    if (initialSessionId) {
      handleJoinExistingSession(initialSessionId);
    }
  }, [initialSessionId]);
  
  useEffect(() => {
    // Generate QR code if we have a session ID
    if (createdSessionId && qrCodeRef.current) {
      generateQRCode(createdSessionId);
    }
  }, [createdSessionId]);
  
  const handleCreateNewSession = async () => {
    try {
      setError(null);
      setCopySuccess('');
      
      // Generate a random session ID
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Create session in Firebase
      const userId = firebase.auth().currentUser?.uid;
      if (!userId) {
        throw new Error('User not authenticated');
      }
      
      await firebase.database().ref(`sessions/${sessionId}`).set({
        createdBy: userId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        members: {
          [userId]: {
            joinedAt: firebase.database.ServerValue.TIMESTAMP
          }
        }
      });
      
      // Store the created session ID for QR code generation
      setCreatedSessionId(sessionId);
      
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
      setCopySuccess('');
      const sessionIdToJoin = sessionId || sessionIdInput;
      
      if (!sessionIdToJoin) {
        setError('Please enter a session ID');
        return;
      }
      
      // Check if session exists
      const snapshot = await firebase.database().ref(`sessions/${sessionIdToJoin}`).once('value');
      const sessionData = snapshot.val();
      
      if (!sessionData) {
        setError('Session not found. Please check the ID and try again.');
        return;
      }
      
      // Join the session
      const userId = firebase.auth().currentUser?.uid;
      if (!userId) {
        throw new Error('User not authenticated');
      }
      
      await firebase.database().ref(`sessions/${sessionIdToJoin}/members/${userId}`).set({
        joinedAt: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Store the joined session ID for QR code generation
      setCreatedSessionId(sessionIdToJoin);
      
      // Call the onJoinSession callback with the session ID
      onJoinSession(sessionIdToJoin);
      
    } catch (error) {
      console.error('Error joining session:', error);
      setError('Failed to join session. Please try again.');
    }
  };
  
  // Function to generate QR code
  const generateQRCode = (sessionId) => {
    // Clear previous QR code
    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = '';
      
      // Create a URL with the session ID
      const shareUrl = `${window.location.origin}${window.location.pathname}?sessionId=${sessionId}`;
      
      // Generate QR code
      try {
        // Directly use QRCode library since it's loaded via script tag
        // eslint-disable-next-line no-undef
        new QRCode(qrCodeRef.current, {
          text: shareUrl,
          width: 256,
          height: 256,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      } catch (err) {
        console.error('Error generating QR code:', err);
        if (qrCodeRef.current) {
          qrCodeRef.current.innerHTML = '<p style="color: red;">Failed to generate QR code</p>';
        }
      }
    }
  };
  
  // Function to copy session ID to clipboard
  const copySessionIdToClipboard = () => {
    if (createdSessionId) {
      navigator.clipboard.writeText(createdSessionId)
        .then(() => {
          setCopySuccess('Copied!');
          setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          setCopySuccess('Failed to copy');
        });
    }
  };
  
  return (
    <div className="session-setup pt-20">
      <h1 className="text-3xl font-bold mt-4">PixCrab</h1>
      <p className="text-gray-600 mt-2">Create a new session or join an existing one</p>
      
      {error && <div className="error">{error}</div>}
      
      <div className="session-actions">
        <button 
          className="btn btn-primary rainbow-button" 
          onClick={handleCreateNewSession}
          aria-label="Create New Session"
        >
          Create New Session
        </button>
        
        <div className="session-join">
          <label htmlFor="sessionId" className="sr-only">Enter Session ID</label>
          <input 
            id="sessionId"
            name="sessionId"
            type="text" 
            placeholder="Enter Session ID" 
            value={sessionIdInput}
            onChange={(e) => setSessionIdInput(e.target.value)}
            autoComplete="off"
            aria-label="Session ID"
          />
          <button 
            className="btn btn-secondary" 
            onClick={() => handleJoinExistingSession()}
            aria-label="Join Session"
          >
            Join Session
          </button>
        </div>
      </div>
      
      {createdSessionId && (
        <div className="session-info">
          <div className="session-id-container">
            <span className="session-id-label">Session ID:</span>
            <span className="session-id">{createdSessionId}</span>
            <button 
              className="btn btn-icon" 
              onClick={copySessionIdToClipboard}
              title="Copy Session ID"
              aria-label="Copy Session ID"
            >
              Copy
            </button>
            {copySuccess && <span className="copy-status" aria-live="polite">{copySuccess}</span>}
          </div>
          <p>Scan this QR code to join the session:</p>
          <div className="qr-code-container" ref={qrCodeRef} aria-label="QR code to join session"></div>
        </div>
      )}
      
      <button className="btn btn-text" onClick={onSignOut} aria-label="Sign Out">
        Sign Out
      </button>
    </div>
  );
};

export default SessionSetup;