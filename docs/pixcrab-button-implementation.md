# PixCrab Button Implementation Guide

This document details the implementation of the gallery/camera toggle button in the PixCrab application, as well as the return buttons in various screens.

## Gallery/Camera Toggle Button

The gallery/camera toggle button in the camera screen allows users to switch between the camera view and the combined photo gallery view.

### Implementation

#### Component Structure

```jsx
<button 
  className="btn btn-primary rainbow-button"
  onClick={toggleGallery}
  title={showGallery ? "Return to Camera" : "View Combined Photos"}
>
  {showGallery ? "Camera" : "Gallery"}
</button>
```

#### Toggle Function

```javascript
// Toggle gallery view
const toggleGallery = () => {
  setShowGallery(!showGallery);
};
```

#### State Management

```javascript
const [showGallery, setShowGallery] = useState(false);
```

#### Conditional Rendering

```jsx
{/* Camera container with video feed */}
<div className={`camera-container ${showGallery ? 'hidden' : ''}`}>
  {/* Camera elements */}
</div>

{/* Combined Photos Gallery */}
{showGallery && (
  <div className="combined-gallery-container">
    <CombinedPhotoGallery 
      photos={combinedPhotos} 
      participantInfo={participants}
    />
    {/* Save to Album button */}
  </div>
)}
```

### Styling

```css
/* Rainbow button styling */
.rainbow-button {
  position: relative;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: transparent;
  color: #4831d4;
  font-weight: bold;
  overflow: hidden;
  z-index: 1;
  border: none;
  transition: all 0.5s ease;
}

.rainbow-button::before {
  content: '';
  position: absolute;
  top: -4px; left: -4px; right: -4px; bottom: -4px;
  background: conic-gradient(
    from var(--angle, 0deg),
    #FF3B30, #FF9500, #FFCC00,
    #34C759, #5AC8FA, #5856D6,
    #FF2D55, #FF3B30
  );
  border-radius: 14px;
  z-index: -1;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  to { --angle: 360deg; }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.rainbow-button::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: #ffffff;
  border-radius: 10px;
  z-index: -1;
  transition: background-color 0.3s ease;
}

.rainbow-button:hover::after {
  background: #f0f0f0;
}
```

## Return Button in Album Screen

The return button in the album screen allows users to navigate back to the session setup screen.

### Implementation

#### Component Structure

```jsx
<button 
  className="btn btn-secondary return-btn"
  onClick={onReturn}
>
  Return to Sessions
</button>
```

#### Navigation Function

```javascript
// In App.jsx
const handleReturnFromAlbum = () => {
  setCurrentScreen('session');
};

// Then pass to AlbumScreen
<AlbumScreen 
  onCreateSession={handleCreateSession}
  onReturn={handleReturnFromAlbum}
/>
```

### Styling

```css
.return-btn {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.return-btn:hover {
  background-color: #e5e5e5;
}
```

## View Album Button in Session Setup

The View Album button in the session setup screen allows users to navigate to the album screen.

### Implementation

#### Component Structure

```jsx
<button 
  className="btn btn-secondary view-album-btn"
  onClick={onViewAlbum}
  aria-label="View Photo Album"
>
  View Photo Album
</button>
```

#### Navigation Function

```javascript
// In App.jsx
const handleViewAlbum = () => {
  setCurrentScreen('album');
};

// Then pass to SessionSetup
<SessionSetup 
  // ... other props
  onViewAlbum={handleViewAlbum}
/>
```

### Styling

```css
.view-album-btn {
  margin-top: 15px;
  width: 100%;
  max-width: 300px;
  padding: 12px;
  background-color: #4831D4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s, transform 0.2s;
}

.view-album-btn:hover {
  background-color: #3a28a7;
  transform: translateY(-2px);
}

.view-album-btn:active {
  background-color: #2c1e7a;
  transform: translateY(1px);
}
```

## General Button Strategies

1. **State-Based Text**: Change button text based on current state (`showGallery ? "Camera" : "Gallery"`)
2. **Conditional Classes**: Add/remove classes based on state
3. **Function Props**: Pass callback functions from parent components for navigation
4. **Aria-Labels**: Include accessibility attributes for better usability
5. **Hover Effects**: Use transform and shadow transitions for interactive feedback

## Best Practices

1. Keep button components reusable by accepting props for customization
2. Separate styling from logic using CSS classes
3. Use semantic HTML elements for accessibility
4. Provide visual feedback on hover/active states
5. Use consistent button styles throughout the application
6. Implement responsive design considerations for different screen sizes

## Gallery CSS Issues and Solutions

### ReactGridGallery Clickability Issues

The ReactGridGallery component can experience issues with thumbnails not being clickable due to overlapping elements and z-index conflicts. This occurs because:

1. The camera-screen-content div overlays the entire screen
2. Z-index conflicts prevent clicks from reaching gallery tiles
3. Pointer-events are not properly configured

### Solution

Add the following CSS to resolve gallery clickability issues:

```css
/* Fix for ReactGridGallery clickability issues */
.ReactGridGallery_tile {
  z-index: 10 !important; /* Ensure tiles are above other elements */
  pointer-events: auto !important; /* Force pointer events */
  cursor: pointer !important; /* Ensure cursor indicates clickability */
  position: relative !important; /* Ensure stacking context */
}

.ReactGridGallery_tile-viewport {
  pointer-events: auto !important;
  cursor: pointer !important;
}

.ReactGridGallery_tile-viewport img {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* Ensure all gallery elements are visible and clickable */
.ReactGridGallery {
  pointer-events: auto !important;
  z-index: 10 !important;
  position: relative !important;
}

/* Ensure camera-screen-content doesn't block gallery clicks */
.camera-screen-content {
  pointer-events: none; /* Let clicks pass through except for its buttons */
}

/* Make sure specific buttons still receive clicks */
.camera-screen-content button,
.session-header,
.gallery-save-controls button {
  pointer-events: auto; 
}
```

### Key Concepts

1. **Z-index Management**: Ensure gallery components have higher z-index than overlapping elements
2. **Pointer-events Configuration**: Use pointer-events: none on container elements that should pass clicks through
3. **Selective Click Handling**: Re-enable pointer-events: auto only on interactive elements
4. **Proper Stacking Context**: Use position: relative to create proper stacking contexts

This solution resolves the issue where clicking on gallery thumbnails doesn't trigger the full-size image modal.

---

Document Version: 1.1
Last Updated: May 15, 2025 