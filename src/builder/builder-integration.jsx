import React from 'react';
import { Builder, BuilderComponent } from '@builder.io/react';

// Replace with your Builder.io API key
// You should ideally store this in an environment variable
export const BUILDER_API_KEY = 'YOUR_BUILDER_API_KEY';

// Initialize Builder.io with your API key
export function initBuilder() {
  Builder.init(BUILDER_API_KEY);
  
  // Register your custom components here
  // Example: 
  // import { GalleryView } from '../components/gallery/GalleryView';
  // Builder.registerComponent(GalleryView, { 
  //   name: 'Gallery View',
  //   inputs: [
  //     { name: 'title', type: 'string', defaultValue: 'My Gallery' }
  //   ]
  // });
  
  // Register more components as needed...
}

// Simple BuilderPage component to use in your routes
export function BuilderPage({ model = 'page' }) {
  return (
    <div className="builder-page-wrapper">
      <BuilderComponent model={model} />
    </div>
  );
}

// Optional custom content loader function
function contentLoaderFunction(options) {
  // You can customize how content is loaded
  // This is particularly useful for handling preview states, etc.
  return Builder.get(options.model, options);
}

// Export the content loader function for use in other components
export { contentLoaderFunction };
