import React, { useState, useEffect } from 'react';

// Simple Modal Component (can be moved to its own file later)
const PhotoModal = ({ imageUrl, onClose }) => {
  console.log('🖼️ MODAL DEBUG: PhotoModal render, imageUrl exists:', !!imageUrl, typeof imageUrl === 'string' ? imageUrl.substring(0, 50) + '...' : 'null');
  
  if (!imageUrl) return null;

  return (
    <div 
      className="photo-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
      onClick={onClose} // Close on backdrop click
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="modal-content bg-white p-2 rounded-lg shadow-xl max-w-full max-h-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image/content
      >
        <img 
          src={imageUrl} 
          alt="Full size" 
          className="modal-image max-w-[90vw] max-h-[90vh] object-contain"
          onLoad={() => console.log('🖼️ MODAL DEBUG: Full-size image loaded successfully')}
          onError={(e) => console.error('🖼️ MODAL DEBUG: Error loading full-size image:', e)}
        />
        <button 
          onClick={onClose}
          className="close-modal-button absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-sm"
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

  // Debug useEffect to monitor state changes
  useEffect(() => {
    console.log('🖼️ GALLERY DEBUG: selectedFullImageUrl state changed:', selectedFullImageUrl ? 'URL set (length: ' + selectedFullImageUrl.length + ')' : 'null');
  }, [selectedFullImageUrl]);

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

  console.log('🖼️ GALLERY DEBUG: selectedFullImageUrl state before render:', selectedFullImageUrl ? 'URL set' : 'null');

  const handleThumbnailClick = (url) => {
    console.log('🖼️ CLICK DEBUG: Setting image URL from handleThumbnailClick, url exists:', !!url);
    // Force image URL to be a string in case it's something else
    setSelectedFullImageUrl(url);
  };

  return (
    <div className="combined-photo-gallery p-1 w-full"> {/* Slightly increased padding, full width */} 
      {/* Responsive grid: 3 columns on desktop, 2 on medium screens, 1 on mobile */}
      <div className="gallery-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {combinedPhotos.map((photo, index) => ( 
          <div 
            key={`combined-${photo.id || index}`} 
            className="gallery-thumbnail-item relative overflow-hidden border-4 border-red-500 bg-yellow-300 bg-opacity-50 rounded-md"
            onClick={() => handleThumbnailClick(photo.dataUrl)}
            style={{ cursor: 'pointer' }}
          >
            {/* Aspect ratio container with responsive scaling */}
            <div className="aspect-ratio-box relative" style={{ paddingBottom: '177.78%' }}> {/* 16:9 aspect ratio */}
              <img 
                src={photo.thumbnailDataUrl || photo.dataUrl} 
                alt="Combined photo thumbnail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                onLoad={() => console.log(`🖼️ GALLERY DEBUG: Thumbnail loaded for ${photo.id}`)}
                onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading thumbnail for ${photo.id}:`, e)}
              />
              {/* Overlay for hover effect */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"
              ></div>
            </div>
          </div>
        ))}
      </div>
      {/* PhotoModal outside other elements to avoid CSS conflicts */}
      <PhotoModal 
        imageUrl={selectedFullImageUrl} 
        onClose={() => {
          console.log('🖼️ GALLERY DEBUG: Modal close clicked');
          setSelectedFullImageUrl(null);
        }} 
      />
    </div>
  );
};

export default CombinedPhotoGallery; 