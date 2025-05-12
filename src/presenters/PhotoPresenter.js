import BasePresenter from './BasePresenter.js';
import AppUtils from '../utils/AppUtils.js';

class PhotoPresenter extends BasePresenter {
    constructor() {
        super();
        this.eventCallback = null;
        this._findElements();
        this._bindEventHandlers();
        this._touchStartY = 0;
        this._touchEndY = 0;
        this._setupTouchEvents();
    }

    _findElements() {
        // Camera elements
        this.cameraFeed = document.getElementById('cameraFeed');
        this.photoResult = document.getElementById('photoResult');
        this.captureBtn = document.getElementById('captureBtn');
        this.cameraSwitchBtn = document.getElementById('cameraSwitchBtn');
        this.countdownOverlay = document.getElementById('countdownOverlay');
        this.countdownText = document.getElementById('countdownText');
        this.captureText = document.getElementById('captureText');
        
        // Gallery elements
        this.slideContainer = document.getElementById('slideContainer');
        this.gallerySection = document.getElementById('gallerySection');
        this.galleryGrid = document.getElementById('galleryGrid');
        this.galleryBtn = document.getElementById('galleryBtn');
        this.closeGalleryBtn = document.getElementById('closeGalleryBtn');
        this.galleryFullScreen = document.getElementById('galleryFullScreen');
        this.imageQualityInfo = document.getElementById('imageQualityInfo');
        this.imageSizeSpan = document.getElementById('imageSize');
        this.hintText = document.getElementById('hintText');
        
        // Modal elements
        this.photoModal = document.getElementById('photoModal');
        this.modalFullImg = document.getElementById('modalFullImg');
        this.modalDownloadBtn = document.getElementById('modalDownloadBtn');
        this.modalShareBtn = document.getElementById('modalShareBtn');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
    }

    _bindEventHandlers() {
        // Bind camera button
        if (this.captureBtn) {
            this.captureBtn.addEventListener('click', () => {
                // Get the current session ID from UI
                const sessionId = document.getElementById('displaySessionId')?.textContent;
                
                this._triggerEvent('capturePhoto', {
                    videoElement: this.cameraFeed,
                    sessionId: sessionId
                });
            });
        }
        
        // Bind gallery button
        if (this.galleryBtn) {
            this.galleryBtn.addEventListener('click', () => {
                this._showGallery();
            });
        }
        
        // Bind close gallery button
        if (this.closeGalleryBtn) {
            this.closeGalleryBtn.addEventListener('click', () => {
                this._hideGallery();
            });
        }
        
        // Bind camera switch button
        if (this.cameraSwitchBtn) {
            this.cameraSwitchBtn.addEventListener('click', () => {
                this._triggerEvent('switchCamera');
            });
        }
        
        // Bind modal buttons
        if (this.modalDownloadBtn) {
            this.modalDownloadBtn.addEventListener('click', () => {
                const photoUrl = this.modalFullImg.src;
                this._triggerEvent('downloadPhoto', { photoUrl });
            });
        }
        
        if (this.modalShareBtn) {
            this.modalShareBtn.addEventListener('click', () => {
                const photoUrl = this.modalFullImg.src;
                this._triggerEvent('sharePhoto', { photoUrl });
            });
        }
        
        if (this.modalCloseBtn) {
            this.modalCloseBtn.addEventListener('click', () => {
                this._closePhotoModal();
            });
        }
        
        if (this.photoModal) {
            this.photoModal.addEventListener('click', (event) => {
                if (event.target === this.photoModal) {
                    this._closePhotoModal();
                }
            });
        }
        
        // Set up debug toggle
        const debugToggle = document.getElementById('debugToggle');
        if (debugToggle) {
            debugToggle.addEventListener('click', () => {
                const consoleElem = document.getElementById('debugConsole');
                if (consoleElem) {
                    consoleElem.style.display = consoleElem.style.display === 'none' ? 'block' : 'none';
                    AppUtils.debugLog(`Debug console ${consoleElem.style.display === 'none' ? 'hidden' : 'shown'}`);
                }
            });
        }
    }
    
    _setupTouchEvents() {
        // Touch events for swipe navigation
        document.addEventListener('touchstart', (e) => {
            this._touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            this._touchEndY = e.changedTouches[0].screenY;
            this._handleSwipe();
        }, { passive: true });
    }
    
    _handleSwipe() {
        const threshold = 50;
        const cameraSection = document.getElementById('cameraSection');
        
        // Only allow swipe navigation if we're in the camera section
        if (cameraSection && !cameraSection.classList.contains('hidden')) {
            if (this._touchStartY - this._touchEndY > threshold) {
                // Swipe up - scroll to next photo slide if available
                const currentSlide = document.elementFromPoint(
                    window.innerWidth / 2, 
                    window.innerHeight / 2
                ).closest('.slide, .photo-slide');
                
                if (currentSlide && currentSlide.nextElementSibling) {
                    currentSlide.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (this._touchEndY - this._touchStartY > threshold) {
                // Swipe down - scroll to previous slide (usually back to camera)
                const currentSlide = document.elementFromPoint(
                    window.innerWidth / 2, 
                    window.innerHeight / 2
                ).closest('.slide, .photo-slide');
                
                if (currentSlide && currentSlide.previousElementSibling) {
                    currentSlide.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }

    setEventCallback(callback) {
        this.eventCallback = callback;
    }

    _triggerEvent(event, data = null) {
        if (this.eventCallback) {
            this.eventCallback(event, data);
        }
    }

    update(photoModel) {
        this.render(photoModel);
    }

    render(photoModel) {
        AppUtils.debugLog('Rendering photo UI');
        
        // Update photo UI based on model state
        if (photoModel.photoData) {
            // Display the captured photo
            this._showCapturedPhoto(photoModel);
        }
        
        // Update camera stream if available
        if (photoModel.stream && this.cameraFeed) {
            this.cameraFeed.srcObject = photoModel.stream;
        }
        
        // Show/hide camera switch button based on available cameras
        this.toggleCameraSwitchButton(photoModel.hasMultipleCameras);
        
        // Update photo size information
        if (this.imageSizeSpan && photoModel.photoSize) {
            this.imageSizeSpan.textContent = Math.round(photoModel.photoSize / 1024);
            this.imageQualityInfo?.classList.remove('hidden');
        }
    }
    
    updateCameraStream(stream) {
        if (this.cameraFeed && stream) {
            this.cameraFeed.srcObject = stream;
            
            // Enable capture button once camera is initialized
            if (this.captureBtn) {
                this.captureBtn.disabled = false;
            }
        }
    }
    
    toggleCameraSwitchButton(show) {
        if (this.cameraSwitchBtn) {
            if (show) {
                this.cameraSwitchBtn.classList.remove('hidden');
            } else {
                this.cameraSwitchBtn.classList.add('hidden');
            }
        }
    }

    _showCapturedPhoto(photoModel) {
        if (!this.photoResult) return;
        
        this.photoResult.src = photoModel.photoData;
        this.photoResult.style.display = 'block';
        
        if (this.cameraFeed) {
            this.cameraFeed.style.display = 'none';
        }
        
        // Apply shutter effect
        const cameraSection = document.getElementById('cameraSection');
        if (cameraSection) {
            cameraSection.classList.add('shutter-effect');
            setTimeout(() => {
                cameraSection.classList.remove('shutter-effect');
                
                // Return to camera view after shutter effect
                setTimeout(() => {
                    this.photoResult.style.display = 'none';
                    this.cameraFeed.style.display = 'block';
                }, 1000);
            }, 500);
        }
    }

    startCountdown(captureTime) {
        AppUtils.debugLog(`Starting countdown for capture at ${new Date(captureTime).toISOString()}`);
        
        const now = Date.now();
        const timeUntilCapture = captureTime - now;
        
        if (timeUntilCapture <= 0) {
            AppUtils.debugLog("Capture time already passed");
            return;
        }
        
        // Reset countdown state
        this._resetCountdown();
        
        // Show countdown overlay
        if (this.countdownOverlay) {
            this.countdownOverlay.style.display = 'flex';
            this.countdownOverlay.classList.remove('hidden');
        }
        
        if (this.countdownText) {
            this.countdownText.style.display = 'block';
            this.countdownText.classList.remove('hidden');
        }
        
        const countdownSteps = Math.floor(timeUntilCapture / 1000);
        let currentCount = countdownSteps;
        
        if (this.countdownText) {
            this.countdownText.textContent = currentCount;
        }
        
        const countdownInterval = setInterval(() => {
            currentCount--;
            
            if (currentCount > 0 && this.countdownText) {
                this.countdownText.textContent = currentCount;
            } else {
                if (this.countdownText) {
                    this.countdownText.style.display = 'none';
                    this.countdownText.classList.add('hidden');
                }
                
                if (this.captureText) {
                    this.captureText.style.display = 'block';
                    this.captureText.classList.remove('hidden');
                }
            }
        }, 1000);
        
        setTimeout(() => {
            clearInterval(countdownInterval);
            this._resetCountdown();
            
            // Trigger photo capture
            const sessionId = document.getElementById('displaySessionId')?.textContent;
            if (sessionId) {
                this._triggerEvent('capturePhoto', {
                    videoElement: this.cameraFeed,
                    sessionId: sessionId
                });
            }
        }, timeUntilCapture);
    }

    _resetCountdown() {
        if (this.countdownOverlay) {
            this.countdownOverlay.style.display = 'none';
            this.countdownOverlay.classList.add('hidden');
        }
        
        if (this.countdownText) {
            this.countdownText.style.display = 'none';
            this.countdownText.classList.add('hidden');
            this.countdownText.textContent = '3';
        }
        
        if (this.captureText) {
            this.captureText.style.display = 'none';
            this.captureText.classList.add('hidden');
        }
    }

    addPhotoSlide(photoUrl) {
        if (!this.slideContainer) return;
        
        AppUtils.debugLog("Adding photo slide to container");
        
        const photoSlide = document.createElement('div');
        photoSlide.className = 'photo-slide';
        
        const photoWrapper = document.createElement('div');
        photoWrapper.className = 'photo-wrapper';
        
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = 'Combined photo';
        
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'photo-actions-container';
        
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'photo-action-btn';
        downloadBtn.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>`;
        
        const shareBtn = document.createElement('button');
        shareBtn.className = 'photo-action-btn';
        shareBtn.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>`;
        
        downloadBtn.addEventListener('click', () => {
            this._triggerEvent('downloadPhoto', { photoUrl });
        });
        
        shareBtn.addEventListener('click', () => {
            this._triggerEvent('sharePhoto', { photoUrl });
        });
        
        actionsContainer.appendChild(downloadBtn);
        actionsContainer.appendChild(shareBtn);
        photoWrapper.appendChild(img);
        photoWrapper.appendChild(actionsContainer);
        photoSlide.appendChild(photoWrapper);
        this.slideContainer.appendChild(photoSlide);
        
        // Scroll to the new photo slide
        setTimeout(() => {
            photoSlide.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        
        // Show hint text
        if (this.hintText) {
            this.hintText.style.opacity = '1';
            setTimeout(() => {
                this.hintText.style.opacity = '0';
            }, 3000);
        }
    }

    addGalleryPhoto(photo) {
        if (!this.gallerySection) return;
        
        AppUtils.debugLog(`Adding photo to gallery: ${photo.photoId || 'unknown'}`);
        
        // Create wrapper for the thumbnail
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-photo-wrapper';
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.width = '80px';
        wrapper.style.height = '80px';
        wrapper.style.overflow = 'hidden';
        wrapper.style.borderRadius = '10px';
        wrapper.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        wrapper.style.background = '#222';
        wrapper.style.marginRight = '8px';
        
        // Create the image element
        const img = document.createElement('img');
        img.src = photo.getThumbnailUrl();
        img.alt = 'Gallery photo';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '10px';
        img.style.cursor = 'pointer';
        
        // Loading indicator 
        img.style.opacity = '0.5';
        img.onload = () => {
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease';
        };
        
        // On click, open modal with full image
        img.onclick = () => this._openPhotoModal(photo.getPhotoUrl());
        
        // Create download button
        const dlBtn = document.createElement('button');
        dlBtn.innerHTML = '⬇️';
        dlBtn.title = 'Download';
        dlBtn.style.position = 'absolute';
        dlBtn.style.bottom = '4px';
        dlBtn.style.right = '4px';
        dlBtn.style.background = 'rgba(72,49,212,0.7)';
        dlBtn.style.color = '#CCF381';
        dlBtn.style.border = 'none';
        dlBtn.style.borderRadius = '50%';
        dlBtn.style.width = '24px';
        dlBtn.style.height = '24px';
        dlBtn.style.fontSize = '1em';
        dlBtn.style.cursor = 'pointer';
        
        // Stop propagation to prevent opening modal when clicking download
        dlBtn.onclick = (e) => { 
            e.stopPropagation();
            this._triggerEvent('downloadPhoto', { photoUrl: photo.getPhotoUrl() });
        };
        
        // Assemble the components
        wrapper.appendChild(img);
        wrapper.appendChild(dlBtn);
        
        // Prepend to gallery (newest first)
        this.gallerySection.prepend(wrapper);
        
        // Make sure gallery is visible
        this.gallerySection.classList.remove('hidden');
    }

    _openPhotoModal(url) {
        if (!this.photoModal || !this.modalFullImg) return;
        
        this.modalFullImg.src = url;
        this.photoModal.classList.remove('hidden');
    }

    _closePhotoModal() {
        if (!this.photoModal || !this.modalFullImg) return;
        
        this.photoModal.classList.add('hidden');
        this.modalFullImg.src = '';
    }

    _showGallery() {
        if (this.galleryFullScreen) {
            this.galleryFullScreen.classList.remove('hidden');
            // Load gallery photos
            this._loadGalleryPhotos();
        }
    }

    _loadGalleryPhotos() {
        if (!this.galleryGrid) return;
        
        // Clear existing photos
        this.galleryGrid.innerHTML = '';
        
        // Get the current session ID
        const sessionId = document.getElementById('displaySessionId')?.textContent;
        if (!sessionId) return;
        
        // Reference to the photos in the current session
        const photosRef = firebase.database().ref(`sessions/${sessionId}/photos`);
        
        // Listen for photos
        photosRef.on('value', (snapshot) => {
            const photos = snapshot.val();
            if (!photos) {
                this.galleryGrid.innerHTML = '<div class="text-center text-secondary p-8 col-span-2">No photos yet. Take some photos with a friend to see them here!</div>';
                return;
            }
            
            // Clear the grid
            this.galleryGrid.innerHTML = '';
            
            // Add each photo to the grid
            Object.values(photos).forEach(photo => {
                if (photo.photoData) {
                    const photoElement = document.createElement('div');
                    photoElement.className = 'gallery-grid-item';
                    photoElement.innerHTML = `<img src="${photo.photoData}" alt="Gallery photo" onclick="document.getElementById('modalFullImg').src = '${photo.photoData}'; document.getElementById('photoModal').classList.remove('hidden');">`;
                    this.galleryGrid.appendChild(photoElement);
                }
            });
        });
    }

    _hideGallery() {
        if (this.galleryFullScreen) {
            this.galleryFullScreen.classList.add('hidden');
        }
    }
    
    showGalleryIndicator() {
        AppUtils.debugLog("Showing gallery indicator");
        
        // Create or get the indicator
        let indicator = document.getElementById('galleryIndicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'galleryIndicator';
            indicator.style.position = 'fixed';
            indicator.style.bottom = '80px';
            indicator.style.left = '50%';
            indicator.style.transform = 'translateX(-50%)';
            indicator.style.backgroundColor = 'rgba(204, 243, 129, 0.8)';
            indicator.style.color = '#4831D4';
            indicator.style.padding = '8px 16px';
            indicator.style.borderRadius = '20px';
            indicator.style.fontWeight = 'bold';
            indicator.style.zIndex = '99';
            indicator.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            indicator.style.animation = 'pulse 2s infinite';
            
            // Add arrow icon
            const arrowIcon = document.createElement('span');
            arrowIcon.innerHTML = '⬆️';
            arrowIcon.style.marginRight = '6px';
            
            // Add text
            const text = document.createElement('span');
            text.textContent = 'View Gallery';
            
            indicator.appendChild(arrowIcon);
            indicator.appendChild(text);
            
            // Add click event to scroll to gallery
            indicator.addEventListener('click', () => {
                if (this.slideContainer && this.slideContainer.children.length > 1) {
                    this.slideContainer.children[1].scrollIntoView({ behavior: 'smooth' });
                }
            });
            
            // Add the indicator to the page
            document.body.appendChild(indicator);
            
            // Add pulse animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulse {
                    0% { transform: translateX(-50%) scale(1); }
                    50% { transform: translateX(-50%) scale(1.1); }
                    100% { transform: translateX(-50%) scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Show the indicator
        indicator.style.display = 'block';
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 8000);
    }
}

export default PhotoPresenter; 