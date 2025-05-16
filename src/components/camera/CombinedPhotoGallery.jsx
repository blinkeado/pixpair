import React, { useState, useEffect } from 'react';
import { Gallery } from "react-grid-gallery";
import AppUtils from '../../utils/AppUtils';

// Simple Modal Component (can be moved to its own file later)
const PhotoModal = ({ imageUrl, onClose }) => {
  AppUtils.info(`MODAL: PhotoModal render, imageUrl exists: ${!!imageUrl}`);
  
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
          onLoad={() => AppUtils.info('MODAL: Full-size image loaded successfully')}
          onError={(e) => console.error('MODAL ERROR: Error loading full-size image:', e)}
        />
        <button 
          onClick={onClose}
          className="close-modal-button absolute top-2 right-2 text-white rounded-full"
          aria-label="Close modal"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '0px none rgb(255, 255, 255)',
            borderRadius: '50%',
            padding: '4px 12px',
            width: '36px',
            height: '36px',
          }}
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
    AppUtils.info(`GALLERY: Photos received by gallery: ${photos.length}`);
    
    // Debug details of received photos
    const combinedCount = photos.filter(p => p.isCombined || p.participantIds).length;
    const individualCount = photos.length - combinedCount;
    AppUtils.info(`GALLERY: Received ${combinedCount} combined photos and ${individualCount} individual photos`);
  }, [photos]);

  // Debug useEffect to monitor state changes
  useEffect(() => {
    AppUtils.info(`GALLERY: selectedFullImageUrl state changed: ${selectedFullImageUrl ? 'URL set' : 'null'}`);
  }, [selectedFullImageUrl]);

  if (!photos || photos.length === 0) {
    AppUtils.info('GALLERY: No photos to display');
    return (
      <div className="combined-photo-empty text-center p-4">
        <p>No photos captured yet. Combined photos will appear here.</p>
      </div>
    );
  }

  // Separate combined and individual photos
  const combinedPhotos = photos
    .filter(photo => photo.isCombined || photo.participantIds) // Combined photos
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    
  const individualPhotos = photos
    .filter(photo => !photo.isCombined && !photo.participantIds) // Individual photos
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    
  AppUtils.info(`GALLERY: Displaying ${combinedPhotos.length} combined photos and ${individualPhotos.length} individual photos`);
  
  // Merge photos, prioritizing combined photos first, then individual photos
  const displayPhotos = [...combinedPhotos, ...individualPhotos];
  
  // Format timestamp into readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  // Handle image click for react-grid-gallery
  const handleClick = (index, item, event) => {
    AppUtils.info(`CLICK: Image clicked at index: ${index}`);
    
    try {
      // Get the photo from our combinedPhotos array
      const photo = displayPhotos[index];
      
      if (!photo) {
        console.error('CLICK ERROR: No photo found at index', index);
        return;
      }
      
      // Always try to use the full dataUrl for the modal
      if (photo.dataUrl) {
        AppUtils.info(`CLICK: Setting full image URL from photo.dataUrl (length: ${photo.dataUrl.length}) [dataUrl omitted]`);
        setSelectedFullImageUrl(photo.dataUrl);
      } else {
        console.error('CLICK ERROR: No dataUrl found for full image');
      }
    } catch (error) {
      console.error('CLICK ERROR: Exception in handleClick:', error);
    }
  };

  // Create images array for react-grid-gallery
  const galleryImages = displayPhotos.map((photo, index) => {
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
      src: photo.dataUrl, // Full-size image (needed by the gallery component)
      thumbnail: photo.thumbnailDataUrl || photo.dataUrl, // Use thumbnail for gallery view
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
          AppUtils.info('GALLERY: Modal close clicked');
          setSelectedFullImageUrl(null);
        }} 
      />
    </div>
  );
};

export default CombinedPhotoGallery; 