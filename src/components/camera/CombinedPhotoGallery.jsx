import React, { useState, useEffect } from 'react';
import { Gallery } from "react-grid-gallery";

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

  // Format timestamp into readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  // Handle image click for react-grid-gallery
  const handleClick = (index, item, event) => {
    console.log('🖼️ CLICK DEBUG: Image clicked at index:', index);
    
    try {
      // Get the photo from our combinedPhotos array
      const photo = combinedPhotos[index];
      
      if (!photo) {
        console.error('🖼️ CLICK ERROR: No photo found at index', index);
        return;
      }
      
      // Log photo details for debugging
      console.log('🖼️ CLICK DEBUG: Photo details:', JSON.stringify({
        id: photo.id || 'unknown',
        hasDataUrl: !!photo.dataUrl,
        dataUrlLength: photo.dataUrl ? photo.dataUrl.length : 0,
        hasThumbnail: !!photo.thumbnailDataUrl,
        thumbnailLength: photo.thumbnailDataUrl ? photo.thumbnailDataUrl.length : 0
      }));
      
      // Also log what we received from the gallery component
      console.log('🖼️ CLICK DEBUG: Gallery item details:', JSON.stringify({
        hasSrc: !!item?.src,
        srcLength: item?.src ? item.src.length : 0,
      }));
      
      // First try using the dataUrl from our photo object
      if (photo.dataUrl) {
        console.log('🖼️ CLICK DEBUG: Setting full image URL from photo.dataUrl');
        setSelectedFullImageUrl(photo.dataUrl);
        return;
      }
      
      // Fallback to the src property from the gallery item if available
      if (item && item.src) {
        console.log('🖼️ CLICK DEBUG: Falling back to gallery item src');
        setSelectedFullImageUrl(item.src);
        return;
      }
      
      // If no image URL found, log an error
      console.error('🖼️ CLICK ERROR: No valid image URL found for this photo');
      
    } catch (error) {
      console.error('🖼️ CLICK ERROR: Exception in handleClick:', error);
    }
  };

  // Create images array for react-grid-gallery
  const galleryImages = combinedPhotos.map((photo, index) => {
    // Calculate a consistent width and height for the gallery items
    const width = 800;
    const height = 450; // 16:9 aspect ratio
    
    // Create caption with participants
    let captionElement = (
      <div>
        <div className="font-medium">Combined Photo</div>
        <div className="text-xs">{formatDate(photo.timestamp)}</div>
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
    );
    
    return {
      src: photo.dataUrl,
      thumbnail: photo.thumbnailDataUrl || photo.dataUrl,
      thumbnailWidth: width,
      thumbnailHeight: height,
      caption: captionElement
    };
  });

  return (
    <div className="combined-photo-gallery p-3 w-full">
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        rowHeight={180}
        margin={8}
        onClick={handleClick}
      />
      
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