import React, { useState, useEffect } from 'react';
import { Gallery } from "react-grid-gallery";

const AlbumScreen = ({ onCreateSession, onReturn }) => {
  const [photos, setPhotos] = useState([]);
  const [combinedSessions, setCombinedSessions] = useState([]);

  useEffect(() => {
    // Load individual photos from localStorage
    const loadPhotos = () => {
      const savedPhotos = localStorage.getItem('albumPhotos');
      if (savedPhotos) {
        setPhotos(JSON.parse(savedPhotos));
      }
    };
    
    // Load combined session photos from localStorage
    const loadCombinedSessions = () => {
      const savedSessions = localStorage.getItem('combinedSessions');
      if (savedSessions) {
        setCombinedSessions(JSON.parse(savedSessions));
      }
    };

    loadPhotos();
    loadCombinedSessions();
  }, []);

  const handleCreateSession = () => {
    if (typeof onCreateSession === 'function') {
      onCreateSession();
    }
  };

  return (
    <div className="album-screen">
      <div className="album-header">
        <h1>My Album</h1>
        <div className="album-actions">
          <button 
            className="btn btn-primary rainbow-button"
            onClick={handleCreateSession}
          >
            Create New Session
          </button>
          <button 
            className="btn btn-secondary return-btn"
            onClick={onReturn}
          >
            Return to Sessions
          </button>
        </div>
      </div>

      {combinedSessions.length > 0 && (
        <div className="combined-sessions">
          <h2>Combined Photo Sessions</h2>
          <div className="sessions-grid">
            {combinedSessions.map((session, index) => (
              <div key={index} className="session-card">
                <h3>Session: {session.id.substring(0, 8)}...</h3>
                <div className="session-photos-preview">
                  {session.photos.slice(0, 4).map((photo, photoIndex) => (
                    <div key={photoIndex} className="preview-photo">
                      <img src={photo.dataUrl} alt={`Session preview ${photoIndex}`} />
                    </div>
                  ))}
                </div>
                <p>{new Date(session.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {photos.length > 0 ? (
        <div className="album-content">
          <h2>Individual Photos</h2>
          <Gallery 
            images={photos.map(photo => ({
              src: photo.url,
              thumbnail: photo.url,
              thumbnailWidth: photo.width,
              thumbnailHeight: photo.height,
              caption: new Date(photo.timestamp).toLocaleString(),
              alt: `Photo taken at ${new Date(photo.timestamp).toLocaleString()}`
            }))}
            enableImageSelection={false}
            rowHeight={180}
            margin={4}
          />
        </div>
      ) : (
        <div className="empty-album">
          <p>No photos yet. Start a new session to take some pictures!</p>
        </div>
      )}
    </div>
  );
};

export default AlbumScreen; 