import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase, { database } from '../../services/firebase';
import PhotoModal from '../camera/PhotoModal';
import AppUtils from '../../utils/AppUtils';

const UserProfile = ({ onReturn }) => {
  const { userId: urlUserId } = useParams();
  const [user, setUser] = useState(null);
  const [combinedPhotos, setCombinedPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedFullImageUrl, setSelectedFullImageUrl] = useState(null);

  useEffect(() => {
    // Load user information and photos
    const fetchUserData = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        
        if (!currentUser || currentUser.isAnonymous) {
          AppUtils.info('Guest users cannot access profiles');
          setLoading(false);
          return;
        }

        const targetUserId = urlUserId || currentUser.uid;
        
        // Get user profile data
        const userRef = database.ref(`users/${targetUserId}`);
        const userSnapshot = await userRef.once('value');
        const userData = userSnapshot.val() || {};
        
        // Check for profile info in participants collection of any session
        const participantsRef = database.ref('sessions');
        const sessionsSnapshot = await participantsRef.orderByChild(`participants/${targetUserId}/connected`).equalTo(true).limitToLast(1).once('value');
        const sessions = sessionsSnapshot.val();
        
        let userProfile = {
          uid: targetUserId,
          displayName: currentUser.displayName || 'User',
          photoURL: currentUser.photoURL,
          email: currentUser.email,
          isAnonymous: currentUser.isAnonymous,
        };
        
        // If we found this user as a participant in a session, get more profile info
        if (sessions) {
          const sessionId = Object.keys(sessions)[0];
          const participantData = sessions[sessionId].participants[targetUserId];
          if (participantData) {
            userProfile.displayName = participantData.displayName || userProfile.displayName;
            userProfile.photoURL = participantData.photoURL || userProfile.photoURL;
          }
        }
        
        setUser(userProfile);
        
        // Get combined photos
        const combinedPhotosRef = database.ref(`users/${targetUserId}/combinedPhotos`);
        const combinedPhotosSnapshot = await combinedPhotosRef.once('value');
        const combinedPhotosData = combinedPhotosSnapshot.val() || {};
        
        // Convert from object to array and sort by timestamp
        const photosArray = Object.entries(combinedPhotosData).map(([id, photo]) => ({
          id,
          ...photo,
          timestamp: photo.timestamp || 0
        })).sort((a, b) => b.timestamp - a.timestamp);
        
        AppUtils.info(`Loaded ${photosArray.length} photos for user profile`);
        setCombinedPhotos(photosArray);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
        AppUtils.info('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [urlUserId]);
  
  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
    setSelectedFullImageUrl(photo.dataUrl || photo.downloadURL);
  };
  
  // Format timestamp to readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Unknown date';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin h-12 w-12 border-4 border-purple-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  
  if (!user || user.isAnonymous) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <h2 className="text-xl font-bold mb-4">Guest Account</h2>
        <p className="text-center mb-6">
          Guest users don't have a permanent profile or gallery.
          Sign in to create a profile and save your photos permanently.
        </p>
        <button 
          className="btn btn-primary"
          onClick={onReturn}
        >
          Return to Camera
        </button>
      </div>
    );
  }
  
  return (
    <div className="user-profile w-full h-full overflow-y-auto pb-20">
      <div className="profile-header flex items-center p-4 border-b border-gray-200 mb-4">
        <div className="avatar-container mr-6">
          <div className="avatar w-20 h-20 rounded-full overflow-hidden">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white text-xl">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
        
        <div className="user-info flex-1">
          <h1 className="text-xl font-bold">{user.displayName}</h1>
          <p className="text-gray-600">{user.email}</p>
          
          <div className="stats flex mt-2">
            <div className="mr-4">
              <span className="font-bold">{combinedPhotos.length}</span> photos
            </div>
            <div className="mr-4">
              <span className="font-bold">{[...new Set(combinedPhotos.flatMap(p => p.participantIds || []))].length}</span> collaborators
            </div>
          </div>
        </div>
        
        <button 
          className="btn btn-primary"
          onClick={onReturn}
        >
          Return to Camera
        </button>
      </div>
      
      {/* Photo Gallery Grid - Instagram style */}
      <div className="photo-grid-header border-b border-gray-200 pb-2 mb-4">
        <div className="container mx-auto px-4 flex items-center">
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width="18" height="18" x="3" y="3" rx="2" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 9.75l4.5 4.5M9.75 14.25l4.5-4.5" />
          </svg>
          <h2 className="text-sm font-semibold uppercase tracking-wider">Photos</h2>
        </div>
      </div>
      
      {combinedPhotos.length > 0 ? (
        <div className="photo-grid grid grid-cols-3 gap-1 mx-auto px-1">
          {combinedPhotos.map((photo) => {
            const photoSrc = photo.dataUrl || photo.downloadURL;
            return (
              <div 
                key={photo.id} 
                className="aspect-square relative overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => handleImageClick(photo)}
              >
                <img 
                  src={photoSrc} 
                  alt={`Photo taken at ${formatDate(photo.timestamp)}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image`);
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYWFhIj5JbWFnZSBFcnJvcjwvdGV4dD48L3N2Zz4=';
                  }}
                />
                
                {/* Overlay info on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                  <div className="hidden group-hover:block text-white font-bold">
                    {photo.participantIds && photo.participantIds.length > 1 && (
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
      ) : (
        <div className="empty-gallery flex flex-col items-center justify-center p-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold mb-2">No Photos Yet</h3>
          <p className="text-gray-500 text-center">
            Start capturing combined photos with friends to build your gallery.
          </p>
        </div>
      )}
      
      {/* Modal for full-size image viewing */}
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

export default UserProfile;
