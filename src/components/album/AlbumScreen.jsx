import React, { useState, useEffect } from 'react';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useNavigate } from 'react-router-dom';

const AlbumScreen = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load photos from localStorage or your storage solution
    const loadPhotos = () => {
      const savedPhotos = localStorage.getItem('albumPhotos');
      if (savedPhotos) {
        setPhotos(JSON.parse(savedPhotos));
      }
    };

    loadPhotos();
  }, []);

  const handleCreateSession = () => {
    navigate('/camera');
  };

  return (
    <div className="album-screen">
      <div className="album-header">
        <h1>My Album</h1>
        <button 
          className="btn btn-primary rainbow-button"
          onClick={handleCreateSession}
        >
          Create New Session
        </button>
      </div>

      {photos.length > 0 ? (
        <div className="album-content">
          <RowsPhotoAlbum 
            photos={photos.map(photo => ({
              src: photo.url,
              width: photo.width,
              height: photo.height,
              alt: photo.timestamp
            }))}
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