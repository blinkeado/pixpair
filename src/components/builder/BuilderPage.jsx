import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BuilderComponent, builder } from '@builder.io/react';
// Import the API key from a separate file to avoid duplication
import { BUILDER_API_KEY } from '../../builder/builder-integration.jsx';

// Initialize Builder with the imported API key
builder.init(BUILDER_API_KEY);

export default function BuilderPage() {
  const { page } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Builder content based on the URL
    async function fetchContent() {
      try {
        // Default content path
        const urlPath = page || '';
        
        const content = await builder
          .get('page', {
            url: `/${urlPath}` || '/',
            userAttributes: {
              // You can add user attributes here for targeting
              // For example:
              // loggedIn: !!currentUser,
            }
          })
          .promise();
        
        setContent(content);
      } catch (error) {
        console.error('Error fetching Builder content:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [page]);

  // Show loading state while content is being fetched
  if (loading) {
    return (
      <div className="builder-loading">
        <div className="loading-spinner"></div>
        <p>Loading content...</p>
      </div>
    );
  }

  // Handle when no content is found
  if (!content) {
    return (
      <div className="builder-no-content">
        <h1>No Content Found</h1>
        <p>The requested page could not be found in Builder.io.</p>
      </div>
    );
  }

  // Render the Builder content
  return (
    <div className="builder-content-wrapper">
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <BuilderComponent model="page" />
      )}
    </div>
  );
}
