import React, { useState } from 'react';
import { auth } from '../../services/firebase';

function AuthScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    try {
      await auth.signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleAppleSignIn = async () => {
    setError('Apple sign-in is not implemented yet.');
  };
  
  const handleGuestSignIn = async () => {
    setIsLoading(true);
    setError('');
    try {
      await auth.signInAnonymously();
    } catch (error) {
      console.error('Guest sign-in error:', error);
      setError('Failed to sign in as guest. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-secondary p-4">
      <div className="text-4xl font-bold mb-8">PixCrab</div>
      <div className="text-xl mb-8 text-center">Sync photos with friends in real-time</div>
      
      <div className="flex flex-col w-full max-w-sm gap-4">
        <button 
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="flex items-center justify-center px-4 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
          </svg>
          Continue with Google
        </button>
        
        <button 
          onClick={handleAppleSignIn}
          disabled={isLoading}
          className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 disabled:opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M17.05 20.28a9.85 9.85 0 0 1-.98 1.8c-.52.74-1.05 1.32-1.59 1.74-.85.7-1.73 1.06-2.64 1.07-68 0-1.5-.19-2.45-.58-96-.39-1.83-.58-2.63-.58-.83 0-1.73.2-2.71.6-.97.39-1.8.59-2.48.59s-1.52-.2-2.46-.61c-.95-.4-1.73-.61-2.35-.63-.9-.03-1.8-.38-2.68-1.06-.58-.44-1.16-1.04-1.73-1.81a11.2 11.2 0 0 1-1.21-2.27c-.41-.94-.73-2.03-.98-3.25-.27-1.3-.4-2.64-.4-4.01 0-1.6.34-3 1.03-4.2.54-.95 1.26-1.7 2.17-2.27.9-.57 1.9-.86 2.99-.88.6 0 1.37.12 2.33.35.95.23 1.56.35 1.84.35.2 0 .88-.14 2.05-.42 1.1-.25 2.02-.36 2.78-.33 2.06.16 3.6.95 4.63 2.38-1.84 1.12-2.75 2.69-2.75 4.7 0 1.57.58 2.87 1.72 3.9.52.5 1.09.89 1.73 1.18-.14.4-.28.79-.44 1.16zM12.92.02c0 .23-.02.47-.05.7-.04.24-.1.5-.19.75-.33 1.07-.9 1.99-1.72 2.75-.93.81-1.9 1.21-2.9 1.15-.05-.42-.08-.82-.08-1.2 0-.27.03-.57.09-.91.05-.34.14-.67.26-1 .12-.32.28-.63.48-.92.2-.3.4-.55.62-.75.22-.2.48-.4.76-.58.28-.18.52-.31.74-.39.22-.08.5-.16.83-.23.33-.07.58-.1.76-.11h.32z"/>
          </svg>
          Continue with Apple
        </button>
        
        <button 
          onClick={handleGuestSignIn}
          disabled={isLoading}
          className="flex items-center justify-center px-4 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Continue as Guest
        </button>
      </div>
      
      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}
      
      {isLoading && (
        <div className="mt-4 text-secondary">Loading...</div>
      )}
    </div>
  );
}

export default AuthScreen; 