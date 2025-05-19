import React, { useState, useEffect } from 'react';
import AppUtils from '../../utils/AppUtils';
import PhotoModal from './PhotoModal';

const CombinedPhotoGallery = ({ photos, participantInfo }) => {
  const [selectedFullImageUrl, setSelectedFullImageUrl] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    AppUtils.info(`GALLERY: Photos received by gallery: ${photos.length}`);
    
    // Debug details of received photos
    const combinedCount = photos.filter(p => p.isCombined || p.participantIds).length;
    const individualCount = photos.length - combinedCount;
    AppUtils.info(`GALLERY: Received ${combinedCount} combined photos and ${individualCount} individual photos`);
  }, [photos]);

  // Filter only for combined photos
  const combinedPhotos = photos
    .filter(photo => photo.isCombined || photo.participantIds) // Only combined photos
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    
  AppUtils.info(`GALLERY: Displaying ${combinedPhotos.length} combined photos only`);
  
  if (!combinedPhotos || combinedPhotos.length === 0) {
    return (
      <div className="combined-photo-empty text-center p-4">
        <p>No combined photos captured yet. Combined photos will appear here.</p>
      </div>
    );
  }
  
  // Format timestamp into readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  // Handle image click to show modal
  const handleImageClick = (photo) => {
    console.log('Photo clicked:', photo.id);
    setSelectedPhoto(photo);
    setSelectedFullImageUrl(photo.dataUrl || photo.downloadURL);
  };

  return (
    <div className="combined-photo-gallery w-full h-full overflow-y-auto pb-20">
      {/* Instagram-style photo grid */}
      <div className="photo-grid-header border-b border-gray-300 pb-2 mb-4">
        <h2 className="text-xl font-semibold text-center">Photo Gallery</h2>
        <p className="text-sm text-gray-500 text-center">{combinedPhotos.length} photos</p>
      </div>
      
      {/* Photo grid - 3 columns on desktop, 2 on small mobile */}
      <div className="photo-grid grid grid-cols-3 gap-1 mx-auto max-w-screen-lg px-1">
        {combinedPhotos.map((photo) => {
          const photoSrc = photo.dataUrl || photo.downloadURL;
          return (
            <div 
              key={photo.id || Math.random().toString()} 
              className="aspect-square relative overflow-hidden bg-gray-100 cursor-pointer"
              onClick={() => handleImageClick(photo)}
            >
              <img 
                src={photoSrc} 
                alt="Gallery photo" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image`);
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYWFhIj5JbWFnZSBFcnJvcjwvdGV4dD48L3N2Zz4=';
                }}
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                <div className="hidden group-hover:block text-white font-bold">
                  {photo.participantIds && photo.participantIds.length > 0 && (
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">
                      {photo.participantIds.length} participants
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Modal for full-size image */}
      {selectedFullImageUrl && (
        <PhotoModal 
          imageUrl={selectedFullImageUrl}
          photo={selectedPhoto}
          onClose={() => {
            setSelectedFullImageUrl(null);
            setSelectedPhoto(null);
          }}
        />
      )}
    </div>
  );
};

export default CombinedPhotoGallery;