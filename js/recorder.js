/**
 * Recorder Module — Web Audio API recording for speaking practice
 */

class Recorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.isRecording = false;
    this.recordingTime = 0;
    this.intervalId = null;
    this.stream = null;

    // DOM elements
    this.recordBtn = null;
    this.recordingIndicator = null;
    this.recordingTimeDisplay = null;
  }

  /**
   * Check if recording is supported
   */
  isSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  /**
   * Request microphone permission
   */
  async requestPermission() {
    if (!this.isSupported()) {
      return false;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop the tracks immediately after permission check
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
      return true;
    } catch (e) {
      console.warn('Microphone permission denied:', e);
      return false;
    }
  }

  /**
   * Start recording
   * @returns {Promise<boolean>}
   */
  async start() {
    if (this.isRecording) return false;

    if (!this.isSupported()) {
      console.warn('Recording not supported in this browser');
      return false;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(this.stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      this.recordingTime = 0;

      // Start timer display
      this.startTimerDisplay();

      this.updateUI(true);
      return true;
    } catch (e) {
      console.warn('Failed to start recording:', e);
      return false;
    }
  }

  /**
   * Stop recording
   * @returns {Promise<Blob|null>}
   */
  async stop() {
    if (!this.isRecording || !this.mediaRecorder) return null;

    return new Promise((resolve) => {
      this.mediaRecorder.onstop = () => {
        if (this.audioChunks.length === 0) {
          resolve(null);
          return;
        }

        const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.cleanup();
        resolve(blob);
      };

      this.mediaRecorder.stop();
    });
  }

  /**
   * Cancel recording
   */
  cancel() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
    }
    this.cleanup();
  }

  /**
   * Clean up resources
   */
  cleanup() {
    this.isRecording = false;
    this.recordingTime = 0;
    this.stopTimerDisplay();

    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    this.audioChunks = [];
    this.mediaRecorder = null;
    this.updateUI(false);
  }

  /**
   * Start recording timer display
   */
  startTimerDisplay() {
    this.stopTimerDisplay();
    this.intervalId = setInterval(() => {
      this.recordingTime++;
    }, 1000);
  }

  /**
   * Stop recording timer display
   */
  stopTimerDisplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Get recording time formatted
   */
  getRecordingTime() {
    const minutes = Math.floor(this.recordingTime / 60);
    const seconds = this.recordingTime % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  /**
   * Update UI elements
   */
  updateUI(isRecording) {
    // Override in app.js for custom UI updates
  }
}

// Export
window.Recorder = Recorder;
