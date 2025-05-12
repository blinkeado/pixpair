import BasePresenter from './BasePresenter.js';
import AppUtils from '../utils/AppUtils.js';

class SessionPresenter extends BasePresenter {
    constructor() {
        super();
        this.eventCallback = null;
        this._findElements();
        this._bindEventHandlers();
    }

    _findElements() {
        // Session setup elements
        this.sessionSetup = document.getElementById('sessionSetup');
        this.sessionIdInput = document.getElementById('sessionId');
        this.joinSessionBtn = document.getElementById('joinSession');
        this.createSessionBtn = document.getElementById('createSession');
        
        // Camera section elements
        this.cameraSection = document.getElementById('cameraSection');
        this.newSessionBtn = document.getElementById('newSessionBtn');
        this.displaySessionId = document.getElementById('displaySessionId');
        this.sessionIdBadge = document.getElementById('sessionIdBadge');
        this.qrContainer = document.getElementById('qrcode');
        this.qrFallback = document.getElementById('qrFallback');
        this.connectionStatus = document.getElementById('connectionStatus');
        this.statusText = document.getElementById('statusText');
        this.peerCount = document.getElementById('peerCount');
        this.captureBtn = document.getElementById('captureBtn');
        
        // Countdown elements
        this.countdownOverlay = document.getElementById('countdownOverlay');
        this.countdownText = document.getElementById('countdownText');
        this.captureText = document.getElementById('captureText');
    }

    _bindEventHandlers() {
        // Bind session buttons
        if (this.createSessionBtn) {
            this.createSessionBtn.addEventListener('click', () => {
                this._triggerEvent('createSession');
            });
        }
        
        if (this.joinSessionBtn) {
            this.joinSessionBtn.addEventListener('click', () => {
                const sessionId = this.sessionIdInput?.value?.trim();
                this._triggerEvent('joinSession', { sessionId });
            });
        }
        
        if (this.newSessionBtn) {
            this.newSessionBtn.addEventListener('click', () => {
                this._triggerEvent('leaveSession');
            });
        }
        
        // Bind capture button
        if (this.captureBtn) {
            this.captureBtn.addEventListener('click', () => {
                this._triggerEvent('initiateCapture');
            });
        }
        
        // Bind session ID badge for copying
        if (this.sessionIdBadge) {
            this.sessionIdBadge.addEventListener('click', () => {
                if (this.displaySessionId && this.displaySessionId.textContent) {
                    navigator.clipboard.writeText(this.displaySessionId.textContent)
                        .then(() => {
                            AppUtils.showToast('Session ID copied!');
                        })
                        .catch(err => {
                            AppUtils.debugLog(`Could not copy session ID: ${err.message}`);
                        });
                }
            });
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

    update(sessionModel) {
        AppUtils.debugLog('Rendering session UI');
        
        const isInSession = sessionModel.sessionId != null;
        
        // Show or hide appropriate UI sections
        if (isInSession) {
            this._showCameraSection();
            this._hideAuthSection();
            this._hideSessionSetup();
            
            // Display session ID
            if (this.displaySessionId) {
                this.displaySessionId.textContent = sessionModel.sessionId;
            }
            
            // Display participant count
            const participantCount = sessionModel.participants ? sessionModel.participants.length : 0;
            this._updateParticipantCount(participantCount);
            
            // Show QR code if only one participant
            if (participantCount === 1) {
                this._showQRCode(sessionModel.sessionId);
            } else {
                this._hideQRCode();
            }
        } else {
            this._hideAuthSection();
            this._showSessionSetup();
            this._hideCameraSection();
        }
    }
    
    // Add this method to update participant count
    _updateParticipantCount(count) {
        // Look for existing participant count element or create one
        let countElement = document.getElementById('participantCount');
        if (!countElement) {
            countElement = document.createElement('div');
            countElement.id = 'participantCount';
            countElement.className = 'participant-count';
            countElement.style.position = 'fixed';
            countElement.style.top = '70px';
            countElement.style.right = '10px';
            countElement.style.backgroundColor = 'rgba(72, 49, 212, 0.8)';
            countElement.style.color = '#CCF381';
            countElement.style.padding = '5px 10px';
            countElement.style.borderRadius = '20px';
            countElement.style.fontSize = '0.8rem';
            countElement.style.zIndex = '100';
            document.body.appendChild(countElement);
        }
        
        countElement.textContent = `Participants: ${count}/2`;
        
        // Show or hide based on count
        if (count > 0) {
            countElement.style.display = 'block';
        } else {
            countElement.style.display = 'none';
        }
    }

    _showCameraSection() {
        if (this.cameraSection) this.cameraSection.classList.remove('hidden');
    }

    _hideCameraSection() {
        if (this.cameraSection) this.cameraSection.classList.add('hidden');
    }

    _showSessionSetup() {
        if (this.sessionSetup) this.sessionSetup.classList.remove('hidden');
        if (this.cameraSection) this.cameraSection.classList.add('hidden');
        
        if (this.qrContainer) {
            this.qrContainer.innerHTML = '';
            this.qrContainer.classList.add('hidden');
        }
        
        if (this.qrFallback) {
            this.qrFallback.classList.add('hidden');
        }
    }

    _hideSessionSetup() {
        if (this.sessionSetup) this.sessionSetup.classList.add('hidden');
        if (this.cameraSection) this.cameraSection.classList.remove('hidden');
    }

    _showQRCode(sessionId) {
        if (!this.qrContainer || !sessionId) return;
        
        try {
            const APP_BASE_URL = window.APP_BASE_URL || 'https://pixcrab.netlify.app';
            const sessionUrl = `${APP_BASE_URL}?sessionId=${sessionId}`;
            
            this.qrContainer.innerHTML = '';
            if (this.qrFallback) this.qrFallback.classList.add('hidden');
            
            // Check if QRCode library is available
            if (typeof QRCode === 'undefined') {
                throw new Error('QRCode library not loaded');
            }
            
            // Generate QR code
            new QRCode(this.qrContainer, {
                text: sessionUrl,
                width: 184,
                height: 184,
                colorDark: "#4831D4",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            
            this.qrContainer.classList.remove('hidden');
        } catch (error) {
            AppUtils.debugLog(`QR code generation failed: ${error.message}`);
            
            // Show fallback with session ID
            if (this.qrFallback) {
                this.qrFallback.textContent = sessionId;
                this.qrFallback.classList.remove('hidden');
                this.qrContainer.classList.remove('hidden');
            }
        }
    }

    _hideQRCode() {
        if (this.qrContainer) {
            this.qrContainer.innerHTML = '';
            this.qrContainer.classList.add('hidden');
        }
        
        if (this.qrFallback) {
            this.qrFallback.classList.add('hidden');
        }
    }

    startCountdown(captureTime) {
        if (!this.countdownOverlay || !this.countdownText || !this.captureText) {
            return;
        }
        
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
        this.countdownOverlay.style.display = 'flex';
        this.countdownOverlay.classList.remove('hidden');
        this.countdownText.style.display = 'block';
        this.countdownText.classList.remove('hidden');
        
        const countdownSteps = Math.floor(timeUntilCapture / 1000);
        let currentCount = countdownSteps;
        
        this.countdownText.textContent = currentCount;
        
        const countdownInterval = setInterval(() => {
            currentCount--;
            
            if (currentCount > 0) {
                this.countdownText.textContent = currentCount;
            } else {
                this.countdownText.style.display = 'none';
                this.countdownText.classList.add('hidden');
                this.captureText.style.display = 'block';
                this.captureText.classList.remove('hidden');
            }
        }, 1000);
        
        setTimeout(() => {
            clearInterval(countdownInterval);
            this._resetCountdown();
            
            // Photo capture will be triggered from PhotoController
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

    _hideAuthSection() {
        const authSection = document.getElementById('authSection');
        if (authSection) {
            authSection.classList.add('hidden');
        }
    }

    _showAuthSection() {
        const authSection = document.getElementById('authSection');
        if (authSection) {
            authSection.classList.remove('hidden');
        }
    }
}

export default SessionPresenter; 