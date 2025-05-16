class AppUtils {
    static debugLog(message) {
        // Short wrapper around info to maintain backward compatibility
        this.info(message);
    }

    static info(message) {
        // Truncate message to 100 characters
        const truncated = typeof message === 'string' 
            ? (message.length > 100 ? message.substring(0, 97) + '...' : message)
            : message;
            
        console.log(`[PixCrab] ${truncated}`);
        
        const debugConsole = document.getElementById('debugConsole');
        if (debugConsole) {
            const now = new Date();
            const timestamp = now.toLocaleTimeString() + '.' + now.getMilliseconds().toString().padStart(3, '0');
            const logEntry = document.createElement('div');
            logEntry.textContent = `[${timestamp}] ${truncated}`;
            debugConsole.appendChild(logEntry);
            debugConsole.scrollTop = debugConsole.scrollHeight;
        }
    }

    static showToast(message, duration = 3000) {
        console.log(`[Toast Debug] showToast called with message: "${message}"`);
        const toast = document.getElementById('toast');
        if (!toast) {
            console.error('[Toast Debug] Toast element not found in DOM!');
            this.info('Toast element not found when trying to show message');
            return;
        }
        
        console.log('[Toast Debug] Toast element found, updating content and visibility');
        toast.textContent = message;
        toast.classList.remove('hidden');
        
        // Force visibility with inline styles (critical fix)
        toast.style.display = 'block';
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        
        // Log toast element state for debugging
        console.log(`[Toast Debug] Toast element classes: "${toast.className}"`);
        console.log(`[Toast Debug] Toast element style: display=${getComputedStyle(toast).display}, visibility=${getComputedStyle(toast).visibility}, opacity=${getComputedStyle(toast).opacity}, z-index=${getComputedStyle(toast).zIndex}`);
        
        // Clear any previous timeout to prevent hiding too soon
        if (window._toastHideTimeout) {
            clearTimeout(window._toastHideTimeout);
        }
        
        window._toastHideTimeout = setTimeout(() => {
            console.log('[Toast Debug] Hide timeout triggered, adding hidden class');
            toast.classList.add('hidden');
        }, duration);
    }

    static formatSessionId(sessionId) {
        if (!sessionId) return '';
        
        // Format as XXX-XXX if length is 6
        if (sessionId.length === 6) {
            return `${sessionId.slice(0, 3)}-${sessionId.slice(3)}`;
        }
        
        return sessionId;
    }

    static async capturePhoto(videoElement) {
        return new Promise((resolve, reject) => {
            try {
                if (!videoElement || !(videoElement instanceof HTMLVideoElement)) {
                    reject(new Error('Invalid video element'));
                    return;
                }
                
                // Create a canvas with the same dimensions as the video
                const canvas = document.createElement('canvas');
                const videoAspectRatio = videoElement.videoWidth / videoElement.videoHeight;
                
                // Set a high resolution for the photo capture
                const width = 2160; // Target resolution width
                const height = Math.round(width / videoAspectRatio);
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(videoElement, 0, 0, width, height);
                
                // Get image as data URL with high quality
                const imageDataUrl = canvas.toDataURL('image/jpeg', 0.92);
                
                AppUtils.debugLog(`Photo captured: ${Math.round(width)}x${Math.round(height)}`);
                
                resolve(imageDataUrl);
            } catch (error) {
                AppUtils.debugLog(`Error capturing photo: ${error.message}`);
                reject(error);
            }
        });
    }

    static async generateSafeSessionId() {
        // Generate a random 6-character alphanumeric string (excluding ambiguous characters)
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = '';
        
        // Use crypto API for better randomness if available
        if (window.crypto && window.crypto.getRandomValues) {
            const values = new Uint8Array(6);
            window.crypto.getRandomValues(values);
            
            for (let i = 0; i < 6; i++) {
                result += chars.charAt(values[i] % chars.length);
            }
        } else {
            // Fallback to Math.random
            for (let i = 0; i < 6; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
        
        return result;
    }

    static copyToClipboard(text) {
        if (!text) return Promise.reject(new Error('No text to copy'));
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text)
                .then(() => {
                    AppUtils.debugLog('Text copied to clipboard');
                    AppUtils.showToast('Copied to clipboard');
                    return true;
                })
                .catch(err => {
                    AppUtils.debugLog(`Clipboard write failed: ${err.message}`);
                    return false;
                });
        } else {
            // Fallback to execCommand
            try {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                const success = document.execCommand('copy');
                document.body.removeChild(textarea);
                
                if (success) {
                    AppUtils.showToast('Copied to clipboard');
                    return Promise.resolve(true);
                } else {
                    return Promise.reject(new Error('execCommand copy failed'));
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }

    static isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    static generateQRCode(container, text, options = {}) {
        if (typeof QRCode === 'undefined') {
            throw new Error('QRCode library not loaded');
        }

        return new QRCode(container, {
            text,
            width: options.width || 184,
            height: options.height || 184,
            colorDark: options.colorDark || "#4831D4",
            colorLight: options.colorLight || "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Initialize toast event listener
    static initToastListeners() {
        console.log(`[Toast Debug] initToastListeners called, document.readyState=${document.readyState}`);
        
        // Check if already initialized to prevent duplicate listeners
        if (window._toastListenersInitialized) {
            console.log('[Toast Debug] Toast listeners already initialized, skipping');
            this.info('Toast listeners already initialized, skipping');
            return;
        }

        // Check if document is ready
        if (document.readyState !== 'complete') {
            console.log('[Toast Debug] DOM not ready, will retry on DOMContentLoaded');
            document.addEventListener('DOMContentLoaded', () => {
                console.log('[Toast Debug] DOMContentLoaded fired, retrying initialization');
                this.initToastListeners();
            });
            return;
        }
        
        // Verify toast element exists
        const toastElement = document.getElementById('toast');
        if (!toastElement) {
            console.error('[Toast Debug] Toast element not found in DOM during initialization!');
            this.info('Toast element not found in DOM');
            
            // Attempt to create toast element if missing
            if (!document.getElementById('toast')) {
                console.log('[Toast Debug] Creating toast element dynamically');
                const toast = document.createElement('div');
                toast.id = 'toast';
                toast.className = 'hidden';
                toast.style.position = 'fixed';
                toast.style.top = '20px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                toast.style.color = 'white';
                toast.style.padding = '12px 24px';
                toast.style.borderRadius = '24px';
                toast.style.zIndex = '9999';
                toast.style.textAlign = 'center';
                toast.style.minWidth = '200px';
                toast.style.transition = 'all 0.3s ease';
                toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                document.body.appendChild(toast);
            }
        } else {
            console.log('[Toast Debug] Toast element found during initialization');
        }

        console.log('[Toast Debug] Adding showToast event listener');
        window.addEventListener('showToast', (event) => {
            console.log(`[Toast Debug] showToast event received: ${JSON.stringify(event.detail)}`);
            if (event.detail && event.detail.message) {
                this.showToast(event.detail.message, event.detail.duration || 3000);
            }
        });
        
        // Mark as initialized to prevent duplicates
        window._toastListenersInitialized = true;
        console.log('[Toast Debug] Toast listeners initialized successfully');
        this.info('Toast event listeners initialized');
        
        // Test toast system
        setTimeout(() => {
            console.log('[Toast Debug] Testing toast system with test message');
            this.showToast('Toast system initialized', 2000);
        }, 500);
    }
}

export default AppUtils; 