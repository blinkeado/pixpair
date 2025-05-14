import React, { useState, useEffect } from 'react';

// Simple Modal Component (can be moved to its own file later)
const PhotoModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="photo-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="modal-content bg-white p-2 rounded-lg shadow-xl max-w-full max-h-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image/content
      >
        <img 
          src={imageUrl} 
          alt="Full size" 
          className="modal-image max-w-[90vw] max-h-[90vh] object-contain"
        />
        <button 
          onClick={onClose}
          className="close-modal-button absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const CombinedPhotoGallery = ({ photos, participantInfo }) => {
  const [selectedFullImageUrl, setSelectedFullImageUrl] = useState(null);

  useEffect(() => {
    console.log('🖼️ GALLERY DEBUG: Photos received by gallery:', photos.length);
    if (photos.length > 0) {
      photos.forEach((photo, index) => {
        console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} details:`, JSON.stringify({
          id: photo.id,
          userId: photo.userId,
          isCombined: !!photo.isCombined,
          hasParticipantIds: !!photo.participantIds,
          participantCount: photo.participantIds ? photo.participantIds.length : 0,
          timestamp: photo.timestamp,
          type: photo.type || 'unspecified',
          hasThumbnail: !!photo.thumbnailDataUrl, // Check for thumbnail
          thumbnailLength: photo.thumbnailDataUrl ? photo.thumbnailDataUrl.length : 0,
          hasFullImage: !!photo.dataUrl,
          fullImageLength: photo.dataUrl ? photo.dataUrl.length : 0,
        }));
      });
    }
  }, [photos]);

  if (!photos || photos.length === 0) {
    console.log('🖼️ GALLERY DEBUG: No photos to display');
    return (
      <div className="combined-photo-empty text-center p-4">
        <p>No photos captured yet. Combined photos will appear here.</p>
      </div>
    );
  }

  const processedPhotos = photos.map((photo, index) => {
    if (photo.participantIds || photo.isCombined) {
      console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} identified as a COMBINED photo`);
      return {
        ...photo,
        isCombined: true,
        timestamp: photo.timestamp || Date.now(),
        type: 'combined'
      };
    }
    console.log(`🖼️ GALLERY DEBUG: Photo ${index+1} identified as an INDIVIDUAL photo from user ${photo.userId || 'unknown'}`);
    return {
      ...photo,
      timestamp: photo.timestamp || Date.now(),
      type: 'individual'
    };
  });

  const groupedPhotos = processedPhotos.reduce((groups, photo) => {
    const timestamp = photo.timestamp;
    const groupKey = Object.keys(groups).find(key => 
      Math.abs(parseInt(key) - timestamp) < 5000 // Group within 5s
    ) || timestamp.toString();
    
    if (!groups[groupKey]) {
      groups[groupKey] = [];
      console.log(`🖼️ GALLERY DEBUG: Created new time group at ${new Date(parseInt(groupKey)).toLocaleTimeString()}`);
    }
    groups[groupKey].push(photo);
    return groups;
  }, {});

  console.log(`🖼️ GALLERY DEBUG: Grouped photos into ${Object.keys(groupedPhotos).length} time groups`);

  // Debug log for selectedFullImageUrl state
  console.log('🖼️ GALLERY DEBUG: selectedFullImageUrl state before render:', selectedFullImageUrl);

  return (
    <div className="combined-photo-gallery p-2">
      {Object.entries(groupedPhotos).sort(([tsA], [tsB]) => parseInt(tsB) - parseInt(tsA)).map(([timestamp, groupPhotos]) => (
        <div key={timestamp} className="photo-capture-group mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Captured around {new Date(parseInt(timestamp)).toLocaleTimeString()}
          </h3>
          
          <div className="gallery-grid-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
            {groupPhotos.filter(p => p.type === 'combined').map((photo, index) => ( // Only show combined photos in the grid
              <div 
                key={`combined-${photo.id || index}`} 
                className="gallery-thumbnail-item w-[100px] h-[177px] bg-gray-200 rounded overflow-hidden cursor-pointer relative group"
                onClick={() => {
                  console.warn('!!! THUMBNAIL CLICKED !!! Setting full image URL to:', photo.dataUrl); 
                  alert('Thumbnail clicked! Check console.');
                  setSelectedFullImageUrl(photo.dataUrl);
                }}
              >
                <img 
                  src={photo.thumbnailDataUrl || photo.dataUrl} // Fallback to full if no thumbnail
                  alt="Combined photo thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onLoad={() => console.log(`🖼️ GALLERY DEBUG: Thumbnail loaded for ${photo.id}`)}
                  onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading thumbnail for ${photo.id}:`, e)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <PhotoModal imageUrl={selectedFullImageUrl} onClose={() => setSelectedFullImageUrl(null)} />
    </div>
  );
};

export default CombinedPhotoGallery; 