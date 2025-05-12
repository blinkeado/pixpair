import React, { createContext, useContext } from 'react';

// Create the context
const PixCrabContext = createContext(null);

// Create provider component
export const PixCrabProvider = ({ children, value }) => {
  return (
    <PixCrabContext.Provider value={value}>
      {children}
    </PixCrabContext.Provider>
  );
};

// Create hook for using the context
export const usePixCrab = () => {
  const context = useContext(PixCrabContext);
  if (context === null) {
    throw new Error('usePixCrab must be used within a PixCrabProvider');
  }
  return context;
};

export default PixCrabContext;