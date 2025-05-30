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
        const toast = document.getElementById('toast');
        if (!toast) {
            console.error('Toast element missing!');
            return;
        }

        // Set content and force visibility
        toast.textContent = message;
        toast.classList.remove('hidden');
        
        // Force visibility with inline styles to ensure it's shown
        toast.style.display = 'block';
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        
        // Clear any previous timeout to prevent hiding too soon
        if (window._toastHideTimeout) {
            clearTimeout(window._toastHideTimeout);
        }
        
        // Auto-hide after duration
        window._toastHideTimeout = setTimeout(() => {
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

    // Remove initToastListeners entirely and replace with simple debug function
    static initToastListeners() {
        // This function is kept for backward compatibility but does nothing
        // Toast is now shown directly with showToast() calls
        console.log('Toast system using direct method calls instead of events');
    }
}

export default AppUtils; 