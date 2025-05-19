import React, { useEffect } from 'react';
import AppUtils from '../../utils/AppUtils';

const PhotoModal = ({ imageUrl, photo, onClose }) => {
  useEffect(() => {
    // Add event listener for ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  AppUtils.info(`MODAL: PhotoModal render, imageUrl exists: ${!!imageUrl}`);
  
  if (!imageUrl) return null;

  // Determine timestamp from photo data
  const timestamp = photo?.timestamp ? new Date(photo.timestamp).toLocaleString() : '';
  const isSharedPhoto = photo?.participantIds && photo.participantIds.length > 1;
  
  return (
    <div 
      className="photo-modal fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
      onClick={onClose} // Close on backdrop click
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <img 
          src={imageUrl} 
          alt="Full size view" 
          className="max-w-full max-h-[90vh] object-contain shadow-lg"
        />
        
        {/* Photo metadata display */}
        {timestamp && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
            {timestamp}
            {isSharedPhoto && (
              <span className="ml-2 bg-purple-500 text-white text-xs px-1 py-0.5 rounded">
                Shared Photo
              </span>
            )}
          </div>
        )}
        
        <button 
          onClick={onClose}
          className="close-modal-button absolute top-2 right-2 text-white rounded-full hover:bg-red-600 transition-colors"
          aria-label="Close modal"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

export default PhotoModal;
