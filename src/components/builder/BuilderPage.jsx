import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { useParams } from 'react-router-dom';
import { BUILDER_API_KEY } from '../../builder/builder-integration';
import '../../builder/builder-styles.css';

// Enable Builder.io preview mode in development
if (import.meta.env.DEV) {
  builder.allowBuilderFrame = true;
}

/**
 * BuilderPage component for rendering Builder.io content
 * This component fetches and renders content from Builder.io based on the current URL
 */
function BuilderPage({ model = 'page' }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  
  // Determine the page path from URL params or default to '/'
  const pagePath = params.page || '/';
  
  // Log component initialization for debugging
  useEffect(() => {
    console.log(`BuilderPage initialized for model: ${model}, path: ${pagePath}`);
    console.log('Using Builder.io API key:', BUILDER_API_KEY ? 'Valid key set' : 'Missing API key');
    
    // Check for API key
    if (!BUILDER_API_KEY) {
      setError('Builder.io API key is missing. Add VITE_BUILDER_API_KEY to your .env file.');
      setLoading(false);
    }
    
    return () => {
      console.log('BuilderPage unmounted');
    };
  }, [model, pagePath]);
  
  // Handle content loading error
  const handleError = (err) => {
    console.error('Error loading Builder.io content:', err);
    setError(`Failed to load content: ${err.message || 'Unknown error'}`);
    setLoading(false);
  };
  
  return (
    <div className="builder-page-wrapper">
      {/* Show loading state */}
      {loading && !error && (
        <div className="builder-loading">
          <div className="builder-loading-indicator">Loading Builder.io content...</div>
        </div>
      )}
      
      {/* Show error state if there's an error */}
      {error && (
        <div className="builder-error">
          <h3>Error Loading Builder Content</h3>
          <p>{error}</p>
          <a href="/" className="back-link">Return to PixCrab Home</a>
        </div>
      )}
      
      {/* Only render Builder component if there's a valid API key */}
      {!error && BUILDER_API_KEY && (
        <BuilderComponent
          model={model}
          contentLoaded={(content) => {
            console.log('Builder content loaded:', content ? 'Success' : 'No content found');
            setContent(content);
            setLoading(false);
          }}
          contentError={handleError}
          apiKey={BUILDER_API_KEY}
          userAttributes={{
            urlPath: pagePath
          }}
        />
      )}
      
      {/* Show no content message when not loading and no content found */}
      {!loading && !content && !error && (
        <div className="builder-no-content">
          <h3>No Content Found</h3>
          <p>No Builder.io content was found for this URL: {pagePath}</p>
          <p>You may need to create content for this page in the Builder.io dashboard.</p>
          <div className="builder-actions">
            <a href="/builder" className="back-link">Return to Builder home</a>
            <a href="/" className="back-link">Return to PixCrab Home</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuilderPage;
