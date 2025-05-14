import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import AuthScreen from './components/auth/AuthScreen';
import CameraScreen from './components/camera/CameraScreen';
import AlbumScreen from './components/album/AlbumScreen';

function App() {
  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      const firebaseConfig = window.firebaseConfig;
      if (!firebaseConfig) {
        console.error('Firebase configuration not found on window.firebaseConfig');
        return;
      }
      
      try {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully');
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path="/camera" element={<CameraScreen />} />
          <Route path="/album" element={<AlbumScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 