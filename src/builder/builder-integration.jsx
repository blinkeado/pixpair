import React from 'react';
import { Builder } from '@builder.io/react';

// Get Builder.io API key from environment variables with fallback for development
const apiKey = import.meta.env.VITE_BUILDER_API_KEY || '';

// Export API key for use in components
export const BUILDER_API_KEY = apiKey;

// Initialize Builder with your API key
export function initBuilder() {
  if (!BUILDER_API_KEY) {
    console.warn(
      'Builder.io API key is missing. Please add your API key to .env file:\n' +
      'VITE_BUILDER_API_KEY=your_builder_api_key_here'
    );
    return false;
  }
  
  // Initialize Builder.io with API key
  Builder.init(BUILDER_API_KEY);
  console.log('Builder.io initialized with API key:', BUILDER_API_KEY);
  return true;
}

// Register any custom components that you want to use in Builder.io
export function registerComponents() {
  // Import components needed for Builder.io
  const { default: Logo } = require('../components/Logo');
  
  // Register PixCrab Logo component
  Builder.registerComponent(Logo, {
    name: 'PixCrab Logo',
    description: 'Displays the PixCrab logo',
    image: 'https://img.icons8.com/color/96/000000/camera.png', // Placeholder icon
  });
  
  // Example of how to register a simple button component
  const SimpleButton = (props) => (
    <button 
      className={`btn-primary ${props.className || ''}`}
      onClick={props.onClick || (() => console.log('Button clicked'))}
    >
      {props.text || 'Button'}
    </button>
  );
  
  Builder.registerComponent(SimpleButton, {
    name: 'PixCrab Button',
    description: 'Standard PixCrab button',
    inputs: [
      { name: 'text', type: 'string', defaultValue: 'Click Me' },
      { name: 'className', type: 'string' },
    ]
  });
  
  // Register additional components as needed
  console.log('PixCrab components registered with Builder.io');
}
