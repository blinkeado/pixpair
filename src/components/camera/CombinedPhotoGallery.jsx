import React, { useState, useEffect } from 'react';
import { Gallery } from 'react-grid-gallery';

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

  // Convert photos to the format expected by react-grid-gallery
  const galleryImages = combinedPhotos.map((photo) => {
    // Extract timestamp in a user-friendly format
    const date = photo.timestamp ? new Date(photo.timestamp) : new Date();
    const formattedDate = date.toLocaleString();
    
    // Calculate aspect ratio from the original thumbnail
    // For combined photos, we're using 2160x3840 (9:16 ratio, taller than wide)
    // But react-grid-gallery wants width and height
    const width = 270;  // Based on our thumbnail width
    const height = 480; // Based on our thumbnail height
    
    return {
      src: photo.dataUrl,
      thumbnail: photo.thumbnailDataUrl || photo.dataUrl,
      thumbnailWidth: width,
      thumbnailHeight: height,
      width: width,
      height: height,
      caption: `Combined photo created on ${formattedDate}`,
      alt: "Combined photo",
      tags: photo.participantIds ? photo.participantIds.map(id => ({
        value: id,
        title: participantInfo && participantInfo[id] ? participantInfo[id].name || id : id
      })) : [],
    };
  });

  // Handle image click in the gallery
  const handleImageClick = (index) => {
    console.log('🖼️ CLICK DEBUG: Image clicked at index', index);
    if (index >= 0 && index < combinedPhotos.length) {
      setSelectedFullImageUrl(combinedPhotos[index].dataUrl);
    }
  };

  return (
    <div className="combined-photo-gallery p-2 w-full">
      <Gallery
        images={galleryImages}
        enableImageSelection={false}
        rowHeight={180}
        margin={3}
        onClick={(index) => handleImageClick(index)}
      />
      
      {/* PhotoModal for displaying full-size images */}
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