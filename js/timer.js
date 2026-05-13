/**
 * Timer Module — Countdown timer with audio feedback
 */

class Timer {
  constructor() {
    this.duration = 120; // seconds
    this.remaining = 120;
    this.intervalId = null;
    this.isRunning = false;
    this.isPaused = false;

    // DOM references
    this.ringFill = document.querySelector('.timer-ring-fill');
    this.timerText = document.getElementById('timerText');
    this.timerBtnText = document.getElementById('timerBtnText');
    this.timerToggle = document.getElementById('timerToggle');

    // Audio context for sound effects
    this.audioCtx = null;

    // Settings
    this.soundEnabled = true;
    this.circleRadius = 26;
    this.circumference = 2 * Math.PI * this.circleRadius; // 163.36
  }

  /**
   * Initialize audio context (must be triggered by user interaction)
   */
  initAudio() {
    if (!this.audioCtx) {
      try {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('Web Audio API not supported:', e);
      }
    }
  }

  /**
   * Set timer duration
   * @param {number} seconds - Duration in seconds
   */
  setDuration(seconds) {
    this.duration = seconds;
    this.remaining = seconds;
    this.render();
  }

  /**
   * Start the timer
   */
  start() {
    if (this.isRunning) return;

    this.initAudio();
    this.isRunning = true;
    this.isPaused = false;
    this.updateButtonState();

    this.intervalId = setInterval(() => {
      this.remaining--;
      this.render();

      // Play warning sound at 10 seconds
      if (this.remaining === 10 && this.soundEnabled) {
        this.playBeep(440, 0.2, 'sine');
      }

      // Play end sound at 0
      if (this.remaining <= 0) {
        this.stop();
        this.playEndChime();
      }
    }, 1000);
  }

  /**
   * Pause the timer
   */
  pause() {
    if (!this.isRunning) return;

    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isRunning = false;
    this.isPaused = true;
    this.updateButtonState();
  }

  /**
   * Stop the timer
   */
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isRunning = false;
    this.isPaused = false;
    this.remaining = 0;
    this.render();
    this.updateButtonState();
  }

  /**
   * Toggle start/pause
   */
  toggle() {
    if (this.isRunning) {
      this.pause();
    } else if (this.remaining > 0) {
      this.start();
    } else {
      this.reset();
      this.start();
    }
  }

  /**
   * Reset timer to initial duration
   */
  reset() {
    this.stop();
    this.remaining = this.duration;
    this.isPaused = false;
    this.render();
    this.updateButtonState();
    this.updateRingColor('normal');
  }

  /**
   * Render timer state to DOM
   */
  render() {
    const minutes = Math.floor(Math.max(0, this.remaining) / 60);
    const seconds = Math.max(0, this.remaining) % 60;
    const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update text
    if (this.timerText) {
      this.timerText.textContent = timeStr;

      // Color based on remaining time
      this.timerText.classList.remove('warning', 'danger');
      if (this.remaining <= 10 && this.remaining > 0) {
        this.timerText.classList.add('danger');
      } else if (this.remaining <= 30 && this.remaining > 0) {
        this.timerText.classList.add('warning');
      }
    }

    // Update ring
    if (this.ringFill) {
      const progress = this.duration > 0 ? this.remaining / this.duration : 0;
      const dashoffset = this.circumference * (1 - Math.max(0, progress));
      this.ringFill.style.strokeDasharray = this.circumference;
      this.ringFill.style.strokeDashoffset = dashoffset;

      // Color based on remaining time
      this.updateRingColor(this.remaining <= 10 ? 'danger' : this.remaining <= 30 ? 'warning' : 'normal');
    }
  }

  /**
   * Update ring fill color
   */
  updateRingColor(state) {
    if (!this.ringFill) return;
    this.ringFill.classList.remove('warning', 'danger', 'done');
    if (state === 'danger') {
      this.ringFill.classList.add('danger');
    } else if (state === 'warning') {
      this.ringFill.classList.add('warning');
    } else if (state === 'done') {
      this.ringFill.classList.add('done');
    }
  }

  /**
   * Update the toggle button state
   */
  updateButtonState() {
    const iconPlay = this.timerToggle?.querySelector('.icon-play');
    const iconPause = this.timerToggle?.querySelector('.icon-pause');

    if (this.timerBtnText) {
      if (this.isRunning) {
        this.timerBtnText.textContent = 'Pause';
      } else {
        this.timerBtnText.textContent = 'Start';
      }
    }

    if (iconPlay && iconPause) {
      iconPlay.style.display = this.isRunning ? 'none' : 'block';
      iconPause.style.display = this.isRunning ? 'block' : 'none';
    }
  }

  /**
   * Play a beep sound
   */
  playBeep(frequency, duration, type = 'sine') {
    if (!this.audioCtx || !this.soundEnabled) return;

    try {
      const oscillator = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

      gainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);

      oscillator.start(this.audioCtx.currentTime);
      oscillator.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  /**
   * Play end chime (3 ascending tones)
   */
  playEndChime() {
    if (!this.soundEnabled) return;

    this.playBeep(523, 0.15, 'sine'); // C5
    setTimeout(() => this.playBeep(659, 0.15, 'sine'), 150); // E5
    setTimeout(() => this.playBeep(784, 0.25, 'sine'), 300); // G5

    // Update ring to done state
    this.updateRingColor('done');
  }

  /**
   * Enable/disable sound
   */
  setSound(enabled) {
    this.soundEnabled = enabled;
  }
}

// Export
window.Timer = Timer;
