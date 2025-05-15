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
          isCombined: !!photo.isCombined,
          timestamp: photo.timestamp,
          hasThumbnail: !!photo.thumbnailDataUrl,
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

  // Filter for combined photos directly and sort them by timestamp (newest first)
  const combinedPhotos = photos
    .filter(photo => photo.isCombined || photo.participantIds) // Ensure it's a combined photo
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  console.log('🖼️ GALLERY DEBUG: selectedFullImageUrl state before render:', selectedFullImageUrl);

  return (
    <div className="combined-photo-gallery p-1 w-full"> {/* Slightly increased padding, full width */} 
      {/* Responsive grid: 3 columns on desktop, 2 on medium screens, 1 on mobile */}
      <div className="gallery-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {combinedPhotos.map((photo, index) => ( 
          <div 
            key={`combined-${photo.id || index}`} 
            className="gallery-thumbnail-item relative cursor-pointer group overflow-hidden border-4 border-red-500 bg-yellow-300 bg-opacity-50 rounded-md"
          >
            {/* Aspect ratio container with responsive scaling */}
            <div className="aspect-ratio-box relative" style={{ paddingBottom: '177.78%' }}> {/* 16:9 aspect ratio */}
              <img 
                src={photo.thumbnailDataUrl || photo.dataUrl} 
                alt="Combined photo thumbnail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onLoad={() => console.log(`🖼️ GALLERY DEBUG: Thumbnail loaded for ${photo.id}`)}
                onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading thumbnail for ${photo.id}:`, e)}
                onClick={() => {
                  console.warn('!!! THUMBNAIL IMG CLICKED !!! Setting full image URL to:', photo.dataUrl);
                  setSelectedFullImageUrl(photo.dataUrl);
                }}
              />
              {/* Overlay for hover effect - allows clicks to pass through */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      <PhotoModal imageUrl={selectedFullImageUrl} onClose={() => setSelectedFullImageUrl(null)} />
    </div>
  );
};

export default CombinedPhotoGallery; 