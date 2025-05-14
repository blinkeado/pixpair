import React, { useState } from 'react';

const CombinedPhotoGallery = ({ photos, participantInfo }) => {
  const [layout, setLayout] = useState('grid'); // 'grid' or 'sideBySide'
  
  if (!photos || photos.length === 0) {
    return (
      <div className="combined-photo-empty">
        <p>No photos captured yet. Take synchronized photos to see them here.</p>
      </div>
    );
  }
  
  // Group photos by capture timestamp (within 5 seconds)
  const groupedPhotos = photos.reduce((groups, photo) => {
    // Find a group that's within 5 seconds of this photo
    const timestamp = photo.timestamp;
    const groupKey = Object.keys(groups).find(key => 
      Math.abs(parseInt(key) - timestamp) < 5000
    ) || timestamp.toString();
    
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    
    groups[groupKey].push(photo);
    return groups;
  }, {});
  
  return (
    <div className="combined-photo-gallery">
      <div className="gallery-controls">
        <button 
          className={`layout-btn ${layout === 'grid' ? 'active' : ''}`}
          onClick={() => setLayout('grid')}
        >
          Grid View
        </button>
        <button 
          className={`layout-btn ${layout === 'sideBySide' ? 'active' : ''}`}
          onClick={() => setLayout('sideBySide')}
        >
          Side by Side
        </button>
      </div>
      
      {Object.entries(groupedPhotos).map(([timestamp, groupPhotos]) => (
        <div key={timestamp} className="photo-capture-group">
          <h3>Captured at {new Date(parseInt(timestamp)).toLocaleTimeString()}</h3>
          
          <div className={`photos-container layout-${layout}`}>
            {groupPhotos.map((photo, index) => {
              const userNickname = participantInfo[photo.userId]?.nickname || 
                `User ${photo.userId.substring(0, 6)}`;
              
              return (
                <div key={`${photo.userId}-${index}`} className="participant-photo">
                  <img src={photo.dataUrl} alt={`${userNickname}'s photo`} />
                  <div className="photo-info">
                    <span className="user-nickname">{userNickname}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CombinedPhotoGallery; 