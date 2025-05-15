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

  // Handle image click
  const handleClick = (url) => {
    console.log('🖼️ CLICK DEBUG: Setting image URL, url exists:', !!url);
    setSelectedFullImageUrl(url);
  };
  
  // Format timestamp into readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="combined-photo-gallery p-3 w-full">
      {/* Masonry-style grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {combinedPhotos.map((photo, index) => (
          <div 
            key={`combined-${photo.id || index}`}
            className="photo-item flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(photo.dataUrl)}
          >
            {/* Image container with fixed aspect ratio */}
            <div className="relative pt-[177.78%]"> {/* 16:9 aspect ratio */}
              <img 
                src={photo.thumbnailDataUrl || photo.dataUrl} 
                alt="Combined photo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                onLoad={() => console.log(`🖼️ GALLERY DEBUG: Thumbnail loaded for ${photo.id}`)}
                onError={(e) => console.error(`🖼️ GALLERY DEBUG: Error loading thumbnail for ${photo.id}:`, e)}
              />
            </div>
            
            {/* Image metadata */}
            <div className="p-2 text-sm">
              <div className="font-medium text-gray-900">Combined Photo</div>
              <div className="text-xs text-gray-500">{formatDate(photo.timestamp)}</div>
              
              {/* Participants */}
              {photo.participantIds && photo.participantIds.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {photo.participantIds.map((id, i) => (
                    <span 
                      key={id} 
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                    >
                      {participantInfo && participantInfo[id] ? participantInfo[id].name || id : `User ${i+1}`}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for full-size image */}
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