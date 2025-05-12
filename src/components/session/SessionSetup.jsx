import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';

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
    <div className="session-setup">
      <div className="flex justify-center mb-2">
        <div className="crab-ring">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/pixpair.firebasestorage.app/o/crab5.svg?alt=media&token=93592dde-03d2-4140-bf36-c4cb0ca39f85" 
            alt="PixCrab logo" 
            className="logo-glow w-32 h-32"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-4">PixCrab</h1>
      <p className="text-gray-600 mt-2">Create a new session or join an existing one</p>
      
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
      
      {createdSessionId && (
        <div className="session-info">
          <div className="session-id-container">
            <span className="session-id-label">Session ID:</span>
            <span className="session-id">{createdSessionId}</span>
            <button 
              className="btn btn-icon" 
              onClick={copySessionIdToClipboard}
              title="Copy Session ID"
            >
              Copy
            </button>
            {copySuccess && <span className="copy-status">{copySuccess}</span>}
          </div>
          <p>Scan this QR code to join the session:</p>
          <div className="qr-code-container" ref={qrCodeRef}></div>
        </div>
      )}
      
      <button className="btn btn-text" onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SessionSetup;