import React, { useState, useEffect, useRef } from 'react';
import firebase, { auth, database } from '../../services/firebase';
import FirebaseService from '../../services/FirebaseService';
import SessionModel from '../../models/SessionModel';

const SessionSetup = ({ onCreateSession, onJoinSession, onSignOut, onViewAlbum, initialSessionId }) => {
  const [sessionIdInput, setSessionIdInput] = useState('');
  const [error, setError] = useState(null);
  const [createdSessionId, setCreatedSessionId] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');
  const [user, setUser] = useState(null);
  const qrCodeRef = useRef(null);
  
  // Create instances of FirebaseService and SessionModel
  const firebaseServiceRef = useRef(null);
  const sessionModelRef = useRef(null);
  
  // Initialize Firebase service and session model
  useEffect(() => {
    if (!firebaseServiceRef.current) {
      console.log('📱 Initializing FirebaseService and SessionModel');
      firebaseServiceRef.current = new FirebaseService();
      sessionModelRef.current = new SessionModel(firebaseServiceRef.current);
    }
  }, []);
  
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
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setUser(u));
    return () => unsubscribe();
  }, []);
  
  const handleCreateNewSession = async () => {
    try {
      setError(null);
      setCopySuccess('');
      
      // Make sure Firebase auth is initialized and ready
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        // If not authenticated, wait for a moment and try again
        setTimeout(() => {
          // Re-attempt with a user verification
          const retryUser = firebase.auth().currentUser;
          if (!retryUser) {
            setError('Authentication required. Please sign in before creating a session.');
            return;
          }
          // Once authenticated, proceed
          createSessionWithUser(retryUser);
        }, 1000);
        return;
      }
      
      // If we have a user, proceed with creation
      createSessionWithUser(currentUser);
      
    } catch (error) {
      console.error('Error creating session:', error);
      setError('Failed to create session. Please try again.');
    }
  };
  
  // Helper function to create a session with a verified user
  const createSessionWithUser = async (user) => {
    try {
      // Generate a random session ID
      const sessionId = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Create session in Firebase with a simplified structure
      const userId = user.uid;
      
      // Create a sessions entry directly at the database root
      // Using a simple data structure to minimize potential issues
      await firebase.database().ref(`/sessions/${sessionId}`).set({
        id: sessionId,
        owner: userId,
        created: firebase.database.ServerValue.TIMESTAMP,
        status: 'active'
      });
      
      // Add a minimal members entry in a separate write
      await firebase.database().ref(`/sessions/${sessionId}/members/${userId}`).set(true);
      
      console.log("Session created successfully:", sessionId);
      
      // Store the created session ID for QR code generation
      setCreatedSessionId(sessionId);
      
      // Important: Join the session using the SessionModel to ensure the user is added to participants
      // This is critical for real-time synchronization
      console.log('🔄 Joining session after creation using SessionModel:', sessionId);
      await sessionModelRef.current.joinSession(sessionId);
      console.log('✅ Successfully joined session after creation:', sessionId);
      
      // Call the onCreateSession callback with the new session ID
      if (typeof onCreateSession === 'function') {
        onCreateSession(sessionId);
      }
    } catch (error) {
      console.error('❌ Error in session creation/join:', error);
      if (error.message.includes("PERMISSION_DENIED")) {
        setError('Database permission denied. Please check Firebase rules.');
      } else {
        setError('Failed to create session. Please try again.');
      }
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
      
      // Make sure Firebase auth is initialized and ready
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        setError('Authentication required. Please sign in before joining a session.');
        return;
      }
      
      // Check if session exists
      const snapshot = await firebase.database().ref(`sessions/${sessionIdToJoin}`).once('value');
      const sessionData = snapshot.val();
      
      if (!sessionData) {
        setError('Session not found. Please check the ID and try again.');
        return;
      }
      
      // Join the session using the traditional way (for backward compatibility)
      const userId = currentUser.uid;
      
      await firebase.database().ref(`sessions/${sessionIdToJoin}/members/${userId}`).set({
        joinedAt: firebase.database.ServerValue.TIMESTAMP
      });
      
      // Critical addition: Use SessionModel to join the session properly
      // This ensures the user is added to the participants node for real-time synchronization
      console.log('🔄 Joining session with SessionModel:', sessionIdToJoin);
      await sessionModelRef.current.joinSession(sessionIdToJoin);
      console.log('✅ Successfully joined session with SessionModel:', sessionIdToJoin);
      
      // Store the joined session ID for QR code generation
      setCreatedSessionId(sessionIdToJoin);
      
      // Call the onJoinSession callback with the session ID
      if (typeof onJoinSession === 'function') {
        onJoinSession(sessionIdToJoin);
      }
      
    } catch (error) {
      console.error('❌ Error joining session:', error);
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
      <h1 className="text-3xl font-bold mt-4">
        {user
          ? user.isAnonymous
            ? 'Hi Crabbie'
            : `Hi ${(user.displayName || user.email.split('@')[0]).split(' ')[0]}`
          : 'Welcome'}
      </h1>
      <p className="text-gray-600 mt-2">Create a new session or join an existing one</p>
      
      {error && <div className="error">{error}</div>}
      
      <div className="session-actions">
        <div className="w-full flex justify-center">
          <button 
            className="btn btn-primary rainbow-button" 
            onClick={handleCreateNewSession}
            aria-label="Create New Session"
            style={{width: '100%', maxWidth: '20rem'}}
          >
            Create New Session
          </button>
        </div>
        
        <div className="session-join w-full flex flex-col items-center">
          <label htmlFor="sessionId" className="sr-only">Enter Session ID</label>
          <div className="w-full max-w-xs">
            <input 
              id="sessionId"
              name="sessionId"
              type="text" 
              placeholder="Enter Session ID" 
              value={sessionIdInput}
              onChange={(e) => setSessionIdInput(e.target.value)}
              autoComplete="off"
              aria-label="Session ID"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full flex justify-center">
            <button 
              className="album-button w-full max-w-xs"
              onClick={() => handleJoinExistingSession()}
              aria-label="Join Session"
            >
              Join Session
            </button>
          </div>
        </div>
        
        {/* View Album Button */}
        <div className="w-full flex justify-center mt-4">
          <button 
            className="album-button w-full max-w-xs"
            onClick={onViewAlbum}
            aria-label="View Photo Album"
          >
            View Photo Album
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