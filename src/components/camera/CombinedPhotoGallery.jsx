import React, { useState, useEffect } from 'react';

const CombinedPhotoGallery = ({ photos, participantInfo }) => {
  const [layout, setLayout] = useState('grid'); // 'grid' or 'sideBySide'
  
  // Add debug logging when photos change
  useEffect(() => {
    console.log('🖼️ GALLERY DEBUG: Photos received by gallery:', photos.length);
    if (photos.length > 0) {
      // Log basic info about each photo
      photos.forEach((photo, index) => {
        console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} details:`, JSON.stringify({
          id: photo.id,
          userId: photo.userId,
          isCombined: !!photo.isCombined,
          hasParticipantIds: !!photo.participantIds,
          participantCount: photo.participantIds ? photo.participantIds.length : 0,
          timestamp: photo.timestamp,
          type: photo.type || 'unspecified'
        }));
      });
    }
  }, [photos]);

  if (!photos || photos.length === 0) {
    console.log('🖼️ GALLERY DEBUG: No photos to display');
    return (
      <div className="combined-photo-empty">
        <p>No photos captured yet. Take synchronized photos to see them here.</p>
      </div>
    );
  }
  
  console.log('🖼️ GALLERY DEBUG: Processing photos for display');
  
  // Process photos to ensure they have consistent structure
  const processedPhotos = photos.map((photo, index) => {
    // For combined photos that have participantIds field
    if (photo.participantIds || photo.isCombined) {
      console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} identified as a COMBINED photo`);
      return {
        ...photo,
        isCombined: true,
        timestamp: photo.timestamp || Date.now(),
        type: 'combined'
      };
    }
    
    // For regular individual photos
    console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} identified as an INDIVIDUAL photo from user ${photo.userId || 'unknown'}`);
    return {
      ...photo,
      timestamp: photo.timestamp || Date.now(),
      type: 'individual'
    };
  });
  
  console.log(`🖼️ GALLERY DEBUG: Processed ${processedPhotos.length} photos: ${processedPhotos.filter(p => p.type === 'combined').length} combined, ${processedPhotos.filter(p => p.type === 'individual').length} individual`);
  
  // Group photos by capture timestamp (within 5 seconds)
  const groupedPhotos = processedPhotos.reduce((groups, photo) => {
    // Find a group that's within 5 seconds of this photo
    const timestamp = photo.timestamp;
    const groupKey = Object.keys(groups).find(key => 
      Math.abs(parseInt(key) - timestamp) < 5000
    ) || timestamp.toString();
    
    if (!groups[groupKey]) {
      groups[groupKey] = [];
      console.log(`🖼️ GALLERY DEBUG: Created new time group at ${new Date(parseInt(groupKey)).toLocaleTimeString()}`);
    }
    
    groups[groupKey].push(photo);
    return groups;
  }, {});
  
  console.log(`🖼️ GALLERY DEBUG: Grouped photos into ${Object.keys(groupedPhotos).length} time groups`);
  
  // Debug each group
  Object.entries(groupedPhotos).forEach(([timestamp, photos]) => {
    console.log(`🖼️ GALLERY DEBUG: Group at ${new Date(parseInt(timestamp)).toLocaleTimeString()} has ${photos.length} photos: ${photos.filter(p => p.type === 'combined').length} combined, ${photos.filter(p => p.type === 'individual').length} individual`);
  });
  
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
              // If it's a combined photo (contains multiple participant photos)
              if (photo.isCombined) {
                console.log(`🖼️ GALLERY DEBUG: Rendering combined photo at index ${index}`);
                return (
                  <div key={`combined-${index}`} className="participant-photo combined">
                    <img 
                      src={photo.dataUrl} 
                      alt="Combined photo" 
                      onLoad={() => console.log(`🖼️ GALLERY DEBUG: Combined photo image loaded`)}
                      onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading combined photo image:`, e)}
                    />
                    <div className="photo-info">
                      <span className="photo-type">Combined Photo</span>
                    </div>
                  </div>
                );
              }
              
              // For individual photos
              const userNickname = participantInfo && photo.userId && participantInfo[photo.userId]?.nickname 
                ? participantInfo[photo.userId].nickname
                : `User ${photo.userId ? photo.userId.substring(0, 6) : 'unknown'}`;
              
              console.log(`🖼️ GALLERY DEBUG: Rendering individual photo for user ${userNickname} at index ${index}`);
              return (
                <div key={`${photo.userId || 'unknown'}-${index}`} className="participant-photo">
                  <img 
                    src={photo.dataUrl} 
                    alt={`${userNickname}'s photo`} 
                    onLoad={() => console.log(`🖼️ GALLERY DEBUG: Individual photo image loaded for ${userNickname}`)}
                    onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading individual photo image for ${userNickname}:`, e)}
                  />
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