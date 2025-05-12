import React, { createContext, useContext } from 'react';

// Create a context for the PixCrab app
const PixCrabContext = createContext(null);

// Provider component that wraps the app
export function PixCrabProvider({ children, value }) {
  return (
    <PixCrabContext.Provider value={value}>
      {children}
    </PixCrabContext.Provider>
  );
}

// Custom hook to use the PixCrab context
export function usePixCrab() {
  const context = useContext(PixCrabContext);
  if (context === undefined) {
    throw new Error('usePixCrab must be used within a PixCrabProvider');
  }
  return context;
}

export default PixCrabContext; 