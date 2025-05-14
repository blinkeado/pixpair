import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthScreen from './components/auth/AuthScreen';
import CameraScreen from './components/camera/CameraScreen';
import AlbumScreen from './components/album/AlbumScreen';

function App() {
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