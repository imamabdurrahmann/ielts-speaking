/**
 * IELTS Speaking Practice — Main Application
 * App.js — Router, Page Rendering, Event Handling
 */

// ==========================================
// INTERNATIONALIZATION (i18n)
// ==========================================
var I18N = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.part1': 'Part 1',
    'nav.part2': 'Part 2',
    'nav.part3': 'Part 3',
    'nav.tips': 'Tips',
    'nav.settings': 'Settings',
    'nav.stats': 'Statistics',

    // Home
    'home.hero.title': 'IELTS Speaking Practice',
    'home.hero.sub': 'Master your speaking skills with Makkar Jan-April 2026 cue cards',
    'home.hero.start': 'Start Practice',
    'home.hero.tips': 'View Tips',
    'home.daily.title': 'Daily Challenge',
    'home.daily.start': 'Start Challenge',
    'home.daily.done': 'Completed',
    'home.daily.label': 'Today\'s card',
    'home.due.title': 'Due for Review',
    'home.due.sub': 'Cards you haven\'t practiced recently',
    'home.due.empty': 'Start practicing to see cards due for review here.',

    // Part 1
    'part1.title': 'Introduction & Interview',
    'part1.sub': 'Practice everyday topics — 3 to 5 questions per topic',
    'part1.random': 'Random Topic',

    // Part 2
    'part2.title': 'Long Turn',
    'part2.sub': '37 cue cards with 1-2 minute speaking',
    'part2.shuffle': 'Shuffle All',
    'part2.reset': 'Reset Order',

    // Part 3
    'part3.title': 'Discussion',
    'part3.sub': '30+ discussion topics. Develop ideas with deeper analysis.',

    // Practice
    'practice.start': 'Start Speaking',
    'practice.band': 'Band Criteria',
    'practice.model': 'Model Answer',
    'practice.record': 'Record',
    'practice.recording': 'Recording',
    'practice.prev': 'Prev',
    'practice.next': 'Next',
    'practice.cue': 'Read this before speaking',
    'practice.followup': 'The examiner will ask follow-up questions after your talk',
    'practice.read': 'Read',
    'practice.reading': 'Speaking...',
    'practice.notes.placeholder': 'Jot down key ideas, structure notes, or anything before you speak...',
    'practice.vocab.add': 'Add',
    'practice.vocab.placeholder': 'Add a word or phrase...',
    'practice.difficulty.easy': 'Easy',
    'practice.difficulty.medium': 'Medium',
    'practice.difficulty.hard': 'Hard',

    // Settings
    'settings.title': 'Settings',
    'settings.theme': 'Theme',
    'settings.theme.light': 'Light',
    'settings.theme.dark': 'Dark',
    'settings.sound': 'Sound Effects',
    'settings.sound.on': 'On',
    'settings.sound.off': 'Off',
    'settings.timer': 'Timer Duration',
    'settings.timer.p1': 'Part 1',
    'settings.timer.p2': 'Part 2',
    'settings.timer.p3': 'Part 3',
    'settings.language': 'Language',
    'settings.reset': 'Reset All Progress',
    'settings.reset.confirm': 'This will delete all your practice history, bookmarks, and vocabulary. Are you sure?',
    'settings.export': 'Export Vocabulary',
    'settings.share': 'Share',

    // Tips
    'tips.part1.title': 'Part 1 Strategies',
    'tips.part2.title': 'Part 2 Strategies',
    'tips.part3.title': 'Part 3 Strategies',
    'tips.band.title': 'Band Score Descriptors',
    'tips.phrases.title': 'Useful Phrases',

    // Stats
    'stats.title': 'Your Statistics',
    'stats.total': 'Total Sessions',
    'stats.streak': 'Day Streak',
    'stats.practiced': 'Cards Practiced',
    'stats.time': 'Est. Practice Time',
    'stats.level': 'Level & XP',
    'stats.part': 'Part Progress',
    'stats.hard': 'Cards Marked as Difficult',
    'stats.recent': 'Recent Sessions',
    'stats.achievements': 'Achievements',
    'stats.mistakes': 'Common Mistakes to Avoid',

    // Misc
    'search.placeholder': 'Search...',
    'filter.bookmarked': 'Saved',
    'filter.done': 'Done',
    'filter.hard': 'Hard',
    'share.copied': 'Link copied!',
    'share.title': 'Share this card',
    'export.download': 'Download',
    'export.success': 'Vocabulary exported!',
    'rate.wpm': 'Words per Minute',
    'rate.estimate': 'Estimated',
    'rate.slow': 'Slow (ideal: 100-120 WPM)',
    'rate.fast': 'Fast (ideal: 100-120 WPM)',
    'rate.good': 'Good pace!',

    // Due cards
    'due.never': 'Never practiced',
    'due.today': 'Practiced today',
    'due.yesterday': 'Last practiced yesterday',
    'due.days': 'days ago',
    'due.overdue': 'overdue',

    // Criteria
    'criteria.fc': 'Fluency & Coherence',
    'criteria.lr': 'Lexical Resource',
    'criteria.gr': 'Grammatical Range',
    'criteria.pr': 'Pronunciation',

    // Model Answer
    'model.band7': 'Band 7+ Model Answer',
    'model.vocab': 'Key Vocabulary',
    'model.tips': 'Speaking Tips',
    'model.empty': 'No model answer available for this card yet.'
  },

  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.part1': 'Part 1',
    'nav.part2': 'Part 2',
    'nav.part3': 'Part 3',
    'nav.tips': 'Tips',
    'nav.settings': 'Pengaturan',
    'nav.stats': 'Statistik',

    // Home
    'home.hero.title': 'Latihan IELTS Speaking',
    'home.hero.sub': 'Kuasai kemampuan speaking dengan kartu Makkar Jan-April 2026',
    'home.hero.start': 'Mulai Latihan',
    'home.hero.tips': 'Lihat Tips',
    'home.daily.title': 'Tantangan Harian',
    'home.daily.start': 'Mulai Tantangan',
    'home.daily.done': 'Selesai',
    'home.daily.label': 'Kartu hari ini',
    'home.due.title': 'Perlu Review',
    'home.due.sub': 'Kartu yang belum practiced recently',
    'home.due.empty': 'Mulai berlatih untuk melihat kartu yang perlu diulang.',

    // Part 1
    'part1.title': 'Perkenalan & Wawancara',
    'part1.sub': 'Latihan topik sehari-hari — 3 hingga 5 pertanyaan per topik',
    'part1.random': 'Topik Acak',

    // Part 2
    'part2.title': 'Monolog',
    'part2.sub': '37 kartu dengan speaking 1-2 menit',
    'part2.shuffle': 'Acak Semua',
    'part2.reset': 'Reset Urutan',

    // Part 3
    'part3.title': 'Diskusi',
    'part3.sub': '30+ topik diskusi. Kembangkan ide dengan analisis lebih dalam.',

    // Practice
    'practice.start': 'Mulai Berbicara',
    'practice.band': 'Kriteria Band',
    'practice.model': 'Contoh Jawaban',
    'practice.record': 'Rekam',
    'practice.recording': 'Merekam',
    'practice.prev': 'Sebelumnya',
    'practice.next': 'Selanjutnya',
    'practice.cue': 'Baca ini sebelum berbicara',
    'practice.followup': 'Pewawancara akan menanyakan pertanyaan lanjutan setelah monolog',
    'practice.read': 'Baca',
    'practice.reading': 'Berbicara...',
    'practice.notes.placeholder': 'Catat ide kunci, struktur, atau apapun sebelum berbicara...',
    'practice.vocab.add': 'Tambah',
    'practice.vocab.placeholder': 'Tambah kata atau frasa...',
    'practice.difficulty.easy': 'Mudah',
    'practice.difficulty.medium': 'Sedang',
    'practice.difficulty.hard': 'Sulit',

    // Settings
    'settings.title': 'Pengaturan',
    'settings.theme': 'Tema',
    'settings.theme.light': 'Terang',
    'settings.theme.dark': 'Gelap',
    'settings.sound': 'Efek Suara',
    'settings.sound.on': 'Nyala',
    'settings.sound.off': 'Mati',
    'settings.timer': 'Durasi Timer',
    'settings.timer.p1': 'Part 1',
    'settings.timer.p2': 'Part 2',
    'settings.timer.p3': 'Part 3',
    'settings.language': 'Bahasa',
    'settings.reset': 'Reset Semua Progres',
    'settings.reset.confirm': 'Ini akan menghapus semua riwayat, penanda, dan kosakata. Yakin?',
    'settings.export': 'Export Kosakata',
    'settings.share': 'Bagikan',

    // Tips
    'tips.part1.title': 'Strategi Part 1',
    'tips.part2.title': 'Strategi Part 2',
    'tips.part3.title': 'Strategi Part 3',
    'tips.band.title': 'Deskriptor Skor Band',
    'tips.phrases.title': 'Frasa Berguna',

    // Stats
    'stats.title': 'Statistik Kamu',
    'stats.total': 'Total Sesi',
    'stats.streak': 'Hari Beruntun',
    'stats.practiced': 'Kartu Dibahasakan',
    'stats.time': 'Estimasi Waktu Latihan',
    'stats.level': 'Level & XP',
    'stats.part': 'Progres per Part',
    'stats.hard': 'Kartu Ditandai Sulit',
    'stats.recent': 'Sesi Terbaru',
    'stats.achievements': 'Pencapaian',
    'stats.mistakes': 'Kesalahan Umum yang Harus Dihindari',

    // Misc
    'search.placeholder': 'Cari...',
    'filter.bookmarked': 'Tersimpan',
    'filter.done': 'Selesai',
    'filter.hard': 'Sulit',
    'share.copied': 'Link berhasil disalin!',
    'share.title': 'Bagikan kartu ini',
    'export.download': 'Unduh',
    'export.success': 'Kosakata berhasil diexport!',
    'rate.wpm': 'Kata per Menit',
    'rate.estimate': 'Estimasi',
    'rate.slow': 'Lambat (ideal: 100-120 WPM)',
    'rate.fast': 'Cepat (ideal: 100-120 WPM)',
    'rate.good': 'Kecepatan baik!',

    // Due cards
    'due.never': 'Belum pernah dibahasakan',
    'due.today': 'Dibahasakan hari ini',
    'due.yesterday': 'Terakhir dibahasakan kemarin',
    'due.days': 'hari lalu',
    'due.overdue': 'terlambat',

    // Criteria
    'criteria.fc': 'Kelancaran & Koherensi',
    'criteria.lr': 'Sumber Leksikal',
    'criteria.gr': 'Rentang Tata Bahasa',
    'criteria.pr': 'Pengucapan',

    // Model Answer
    'model.band7': 'Contoh Jawaban Band 7+',
    'model.vocab': 'Kosakata Kunci',
    'model.tips': 'Tips Speaking',
    'model.empty': 'Belum ada contoh jawaban untuk kartu ini.'
  }
};

class App {
  constructor() {
    // State
    this.currentPage = 'home';
    this.currentPart = null;
    this.currentIndex = 0;
    this.currentItems = [];
    this.practiceOpen = false;
    this.lang = 'en';

    // Modules
    this.timer = new Timer();
    this.recorder = new Recorder();

    // TTS state
    this.tts = {
      utterance: null,
      playing: false,
      paused: false,
      text: '',
      progressTimer: null,
      startTime: 0,
      pausedTime: 0,
      speed: 1
    };

    // Speech Recognition state
    this.sr = {
      recognition: null,
      isListening: false,
      transcript: '',
      interimTranscript: ''
    };

    // AI Feedback state
    this.aiFeedback = {
      lastTranscript: '',
      lastQuestion: '',
      isProcessing: false
    };

    // Settings (loaded from localStorage)
    this.settings = {
      theme: 'light',
      soundEnabled: true,
      timerPart1: 60,
      timerPart2: 120,
      timerPart3: 120,
      geminiApiKey: '',
      geminiModel: 'gemini-2.5-flash'
    };

    // Data state
    this.practiced = new Set();      // Set of practiced item IDs
    this.bookmarks = new Set();      // Set of bookmarked item IDs
    this.vocab = new Map();          // Map of itemId -> array of vocab words
    this.dailyChallenge = null;      // { date, cardId }
    this.shuffleOrder = null;       // Array of shuffled indices for Part 2
    this.history = [];               // Array of practice sessions { id, part, topicId, timestamp }
    this.streak = { current: 0, lastDate: null }; // Streak data
    this.difficulty = new Map();     // Map of topicId -> 'easy'|'medium'|'hard'

    // DOM refs
    this.overlay = document.getElementById('practiceOverlay');
    this.practiceQuestion = document.getElementById('practiceQuestion');
    this.practiceTopicName = document.getElementById('practiceTopicName');
    this.practicePartTag = document.getElementById('practicePartTag');
    this.practiceNotes = document.getElementById('practiceNotes');

    // Load language preference
    try {
      var savedLang = localStorage.getItem('ielts-speaking-lang');
      if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
        this.lang = savedLang;
      }
    } catch (e) {}

    // Initialize
    this.loadAllData();
    this.bindEvents();
    this.initRouter();
    this.renderAllPages();
    this.initSearch();
    this.initVocab();
    this.initDifficulty();
    this.initSpeechRecognition();

    // Populate API key field
    var apiKeyInput = document.getElementById('geminiApiKey');
    if (apiKeyInput && this.settings.geminiApiKey) {
      apiKeyInput.value = this.settings.geminiApiKey;
    }

    // Set initial model button
    var self = this;
    document.querySelectorAll('.model-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.model === self.settings.geminiModel);
    });

    // Set initial timer duration
    this.timer.setDuration(this.settings.timerPart2);

    // Sync model dropdown with current setting
    var submitModel = document.getElementById('submitModelSelect');
    if (submitModel) submitModel.value = this.settings.geminiModel || 'gemini-2.5-flash';

    // Apply initial language
    this.applyTranslations();
  }

  // ==========================================
  // INTERNATIONALIZATION
  // ==========================================

  t(key) {
    var translations = I18N[this.lang] || I18N.en;
    return translations[key] || I18N.en[key] || key;
  }

  setLang(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    this.lang = lang;
    try {
      localStorage.setItem('ielts-speaking-lang', lang);
    } catch (e) {}
    this.applyTranslations();
  }

  applyTranslations() {
    var self = this;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.dataset.i18n;
      el.textContent = self.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.dataset.i18nPlaceholder;
      el.placeholder = self.t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
      var key = el.dataset.i18nTitle;
      el.title = self.t(key);
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === self.lang);
    });
  }

  // ==========================================
  // SETTINGS & STORAGE
  // ==========================================

  /**
   * Load all data from localStorage
   */
  loadAllData() {
    try {
      const settings = localStorage.getItem('ielts-speaking-settings');
      if (settings) {
        const parsed = JSON.parse(settings);
        this.settings = { ...this.settings, ...parsed };
      }

      // Migrate old Gemini model names to valid names
      var migrated = false;
      var validModels = ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-3-pro-preview'];
      if (!validModels.includes(this.settings.geminiModel)) {
        this.settings.geminiModel = 'gemini-2.5-flash';
        migrated = true;
      }
      if (migrated) {
        try { localStorage.setItem('ielts-speaking-settings', JSON.stringify(this.settings)); } catch (e) {}
      }

      const practiced = localStorage.getItem('ielts-speaking-practiced');
      if (practiced) {
        this.practiced = new Set(JSON.parse(practiced));
      }

      const bookmarks = localStorage.getItem('ielts-speaking-bookmarks');
      if (bookmarks) {
        this.bookmarks = new Set(JSON.parse(bookmarks));
      }

      const vocab = localStorage.getItem('ielts-speaking-vocab');
      if (vocab) {
        const parsed = JSON.parse(vocab);
        this.vocab = new Map(parsed);
      }

      const daily = localStorage.getItem('ielts-speaking-daily');
      if (daily) {
        this.dailyChallenge = JSON.parse(daily);
      }

      const history = localStorage.getItem('ielts-speaking-history');
      if (history) {
        this.history = JSON.parse(history);
        // Rebuild practiced set from history
        this.practiced = new Set(this.history.map(h => h.topicId));
      }

      const streak = localStorage.getItem('ielts-speaking-streak');
      if (streak) {
        this.streak = JSON.parse(streak);
        this.updateStreak();
      }

      const diff = localStorage.getItem('ielts-speaking-difficulty');
      if (diff) {
        this.difficulty = new Map(JSON.parse(diff));
      }
    } catch (e) {
      console.warn('Could not load data:', e);
    }

    // Apply theme
    this.applyTheme(this.settings.theme);
  }

  /**
   * Save all data to localStorage
   */
  saveAllData() {
    try {
      localStorage.setItem('ielts-speaking-settings', JSON.stringify(this.settings));
      localStorage.setItem('ielts-speaking-practiced', JSON.stringify([...this.practiced]));
      localStorage.setItem('ielts-speaking-bookmarks', JSON.stringify([...this.bookmarks]));
      localStorage.setItem('ielts-speaking-vocab', JSON.stringify([...this.vocab]));
      localStorage.setItem('ielts-speaking-daily', JSON.stringify(this.dailyChallenge));
      localStorage.setItem('ielts-speaking-history', JSON.stringify(this.history));
      localStorage.setItem('ielts-speaking-streak', JSON.stringify(this.streak));
      localStorage.setItem('ielts-speaking-difficulty', JSON.stringify([...this.difficulty]));
    } catch (e) {
      console.warn('Could not save data:', e);
    }
  }

  /**
   * Save settings to localStorage
   */
  saveSettings() {
    try {
      localStorage.setItem('ielts-speaking-settings', JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Could not save settings:', e);
    }
  }

  /**
   * Save Gemini API key from settings input
   */
  saveApiKey() {
    var input = document.getElementById('geminiApiKey');
    var statusEl = document.getElementById('aiStatus');
    if (!input) return;

    var key = input.value.trim();
    if (!key) {
      this.settings.geminiApiKey = '';
      this.saveSettings();
      if (statusEl) {
        statusEl.className = 'api-key-status error';
        statusEl.innerHTML = 'API key cleared.';
      }
      return;
    }

    if (!key.startsWith('AIza')) {
      if (statusEl) {
        statusEl.className = 'api-key-status error';
        statusEl.innerHTML = 'Invalid API key format. Should start with AIza...';
      }
      return;
    }

    this.settings.geminiApiKey = key;
    this.saveSettings();
    if (statusEl) {
      statusEl.className = 'api-key-status success';
      statusEl.innerHTML = 'API key saved! Ready for AI feedback.';
    }
  }

  /**
   * Update Gemini model selection
   */
  selectGeminiModel(model) {
    this.settings.geminiModel = model;
    this.saveSettings();
    document.querySelectorAll('.model-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.model === model);
    });
  }

  /**
   * Apply theme
   */
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.settings.theme = theme;

    // Update theme options in settings page
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });

    this.saveSettings();
  }

  /**
   * Toggle theme
   */
  toggleTheme() {
    const newTheme = this.settings.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  /**
   * Clear all data
   */
  clearData() {
    if (confirm('Clear all saved data? This will reset progress, bookmarks, vocab, history, streak, and settings.')) {
      localStorage.removeItem('ielts-speaking-settings');
      localStorage.removeItem('ielts-speaking-practiced');
      localStorage.removeItem('ielts-speaking-bookmarks');
      localStorage.removeItem('ielts-speaking-vocab');
      localStorage.removeItem('ielts-speaking-daily');
      localStorage.removeItem('ielts-speaking-notes');
      localStorage.removeItem('ielts-speaking-history');
      localStorage.removeItem('ielts-speaking-streak');
      localStorage.removeItem('ielts-speaking-difficulty');

      this.settings = {
        theme: 'light',
        soundEnabled: true,
        timerPart1: 60,
        timerPart2: 120,
        timerPart3: 120
      };
      this.practiced = new Set();
      this.bookmarks = new Set();
      this.vocab = new Map();
      this.dailyChallenge = null;
      this.shuffleOrder = null;
      this.history = [];
      this.streak = { current: 0, lastDate: null };
      this.difficulty = new Map();

      this.applyTheme('light');
      document.getElementById('timerPart1').value = 60;
      document.getElementById('timerPart2').value = 120;
      document.getElementById('timerPart3').value = 120;
      document.getElementById('soundEnabled').checked = true;

      // Re-render all pages to reflect cleared state
      this.renderAllPages();
    }
  }

  // ==========================================
  // EVENT BINDING
  // ==========================================

  bindEvents() {
    // Navigation
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        this.navigate(page);
      });
    });

    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

    // Theme options in settings
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => this.applyTheme(btn.dataset.theme));
    });

    // Language toggle in settings
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setLang(btn.dataset.lang));
    });

    // Practice overlay close
    document.getElementById('practiceClose')?.addEventListener('click', () => this.closePractice());
    document.getElementById('closeAiFeedback')?.addEventListener('click', () => this.closeAIFeedback());
    this.overlay?.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.closePractice();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts when typing in inputs
      const tag = e.target.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (this.practiceOpen) {
        switch (e.key) {
          case 'Escape':
            e.preventDefault();
            this.closePractice();
            break;
          case ' ':
          case 'k':
            e.preventDefault();
            this.toggleTimer();
            break;
          case 'ArrowRight':
          case 'n':
            if (e.target.id !== 'vocabInput') {
              e.preventDefault();
              this.nextQuestion();
            }
            break;
          case 'ArrowLeft':
          case 'p':
            if (e.target.id !== 'vocabInput') {
              e.preventDefault();
              this.prevQuestion();
            }
            break;
          case 'r':
            e.preventDefault();
            this.resetTimer();
            break;
          case 'b':
            e.preventDefault();
            this.toggleCriteria();
            break;
          case 'm':
          case 'M':
            e.preventDefault();
            this.toggleModelAnswer();
            break;
          case 'v':
          case 'V':
            if (e.altKey) {
              e.preventDefault();
              this.toggleTTS();
            }
            break;
        }
      }

      // Global shortcuts
      switch (e.key) {
        case '1':
          if (!this.practiceOpen) this.navigate('home');
          break;
        case '2':
          if (!this.practiceOpen) this.navigate('part1');
          break;
        case '3':
          if (!this.practiceOpen) this.navigate('part2');
          break;
        case '4':
          if (!this.practiceOpen) this.navigate('part3');
          break;
        case '5':
          if (!this.practiceOpen) this.navigate('stats');
          break;
        case 't':
          if (!this.practiceOpen) this.navigate('tips');
          break;
        case '?':
          this.showKeyboardShortcuts();
          break;
      }
    });

    // Timer settings inputs
    document.getElementById('timerPart1')?.addEventListener('change', (e) => {
      this.settings.timerPart1 = parseInt(e.target.value) || 60;
      this.saveSettings();
    });
    document.getElementById('timerPart2')?.addEventListener('change', (e) => {
      this.settings.timerPart2 = parseInt(e.target.value) || 120;
      this.saveSettings();
    });
    document.getElementById('timerPart3')?.addEventListener('change', (e) => {
      this.settings.timerPart3 = parseInt(e.target.value) || 120;
      this.saveSettings();
    });

    // Sound toggle
    document.getElementById('soundEnabled')?.addEventListener('change', (e) => {
      this.settings.soundEnabled = e.target.checked;
      this.timer.setSound(this.settings.soundEnabled);
      this.saveSettings();
    });

    // Tips tabs
    document.querySelectorAll('.tips-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tips-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.renderTips(tab.dataset.tab);
      });
    });

    // Event delegation for topic cards (handles click on rendered cards)
    document.addEventListener('click', (e) => {
      const bookmarkBtn = e.target.closest('.bookmark-btn');
      if (bookmarkBtn) {
        e.stopPropagation();
        const card = bookmarkBtn.closest('.topic-card');
        const id = card?.dataset.id;
        if (id) this.toggleBookmark(id);
        return;
      }

      const card = e.target.closest('.topic-card');
      if (!card) return;

      const practiceBtn = e.target.closest('.btn-primary');
      if (practiceBtn) {
        e.stopPropagation();
        const idx = parseInt(card.dataset.index);
        const page = card.closest('#page-part1') ? 'p1' :
                     card.closest('#page-part2') ? 'p2' :
                     card.closest('#page-part3') ? 'p3' : null;
        if (page === 'p1') this.startPart1(idx);
        if (page === 'p2') this.startPart2(idx);
        if (page === 'p3') this.startPart3(idx);
        return;
      }

      this.toggleCard(card);
    });

    // Home section cards
    document.querySelectorAll('.home-section-card').forEach(el => {
      el.addEventListener('click', () => {
        const target = el.getAttribute('data-target');
        if (target) this.navigate(target);
      });
    });

    // Hero buttons
    document.getElementById('heroStartPractice')?.addEventListener('click', () => this.navigate('part2'));
    document.getElementById('heroViewTips')?.addEventListener('click', () => this.navigate('tips'));

    // Random practice buttons
    document.getElementById('randomPart1')?.addEventListener('click', () => this.startRandomPart1());
    document.getElementById('randomPart2')?.addEventListener('click', () => this.startRandomPart2());
    document.getElementById('randomPart3')?.addEventListener('click', () => this.startRandomPart3());

    // Practice modal controls
    document.getElementById('criteriaToggle')?.addEventListener('click', () => this.toggleCriteria());
    document.getElementById('modelAnswerToggle')?.addEventListener('click', () => this.toggleModelAnswer());
    document.getElementById('prevQuestion')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('nextQuestion')?.addEventListener('click', () => this.nextQuestion());
    document.getElementById('shortcutsBtn')?.addEventListener('click', () => this.showKeyboardShortcuts());

    // TTS (Read Aloud)
    document.getElementById('ttsBtn')?.addEventListener('click', () => this.toggleTTS());
    document.getElementById('ttsPlayBtn')?.addEventListener('click', () => this.playTTS());
    document.getElementById('ttsPauseBtn')?.addEventListener('click', () => this.pauseTTS());
    document.getElementById('ttsStopBtn')?.addEventListener('click', () => this.stopTTS());
    document.getElementById('ttsSpeedSelect')?.addEventListener('change', (e) => {
      this.tts.speed = parseFloat(e.target.value);
    });

    document.getElementById('timerReset')?.addEventListener('click', () => this.resetTimer());
    document.getElementById('timerToggle')?.addEventListener('click', () => this.toggleTimer());
    document.querySelector('.criteria-close')?.addEventListener('click', () => this.toggleCriteria());

    // Clear data
    document.getElementById('clearDataBtn')?.addEventListener('click', () => this.clearData());

    // Export vocabulary
    document.getElementById('exportVocabBtn')?.addEventListener('click', () => this.exportVocab());

    // Save API key
    document.getElementById('saveApiKeyBtn')?.addEventListener('click', () => this.saveApiKey());

    // Model selection
    document.querySelectorAll('.model-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var model = btn.dataset.model;
        if (window.App) window.App.selectGeminiModel(model);
      });
    });

    // Submit answer for AI feedback
    document.getElementById('submitAnswerBtn')?.addEventListener('click', () => this.submitForAIFeedback());
    document.getElementById('clearAnswerBtn')?.addEventListener('click', () => {
      var ta = document.getElementById('submitAnswerText');
      if (ta) ta.value = '';
    });

    // Share card
    document.getElementById('shareCardBtn')?.addEventListener('click', () => this.shareCard());

    // Shuffle Part 2
    document.getElementById('shufflePart2')?.addEventListener('click', () => this.shufflePart2());

    // Hash change (browser back/forward)
    window.addEventListener('hashchange', () => this.handleHashChange());

    // Recording
    this.initRecorder();
  }

  // ==========================================
  // RECORDING
  // ==========================================

  initRecorder() {
    const recordBtn = document.getElementById('recordBtn');
    if (!recordBtn) return;

    recordBtn.addEventListener('click', () => {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        this.startRecording();
      }
    });
  }

  async startRecording() {
    if (!this.recorder.isSupported()) {
      alert('Recording is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const success = await this.recorder.start();
    if (success) {
      this.isRecording = true;
      this.updateRecordUI(true);
      this.startRecordTimer();

      // Start speech recognition
      this.sr.transcript = '';
      this.sr.interimTranscript = '';
      this.sr.isListening = true;
      this.updateLiveTranscript('');
      try {
        this.sr.recognition.start();
      } catch (e) {}
    }
  }

  async stopRecording() {
    // Stop speech recognition first
    this.sr.isListening = false;
    try { this.sr.recognition.stop(); } catch (e) {}

    const blob = await this.recorder.stop();
    this.isRecording = false;
    this.updateRecordUI(false);
    this.stopRecordTimer();

    // Get final transcript
    var finalTranscript = this.sr.transcript || '';

    if (blob) {
      // Show speaking rate
      var recordTimeEl = document.getElementById('recordTime');
      if (recordTimeEl) {
        var parts = recordTimeEl.textContent.split(':');
        var durationSec = parseInt(parts[0]) * 60 + parseInt(parts[1] || 0);
        if (durationSec > 5) {
          this.showRateAnalyzer(durationSec);
        }
      }
      this.playbackRecording(blob);
    }

    // Get current question text
    var item = this.currentItems[this.currentIndex];
    var questionText = '';
    if (item) {
      if (item.type === 'cuecard') {
        questionText = item.cue.replace(/\n/g, ' ').replace(/You should say:/g, '').replace(/Talk about:/g, '');
      } else {
        questionText = item.text || '';
      }
    }

    // Store for AI feedback
    this.aiFeedback.lastTranscript = finalTranscript;
    this.aiFeedback.lastQuestion = questionText;

    // Show transcript summary
    if (finalTranscript) {
      this.showTranscriptSummary(finalTranscript);
    }

    // Request AI feedback
    if (this.settings.geminiApiKey && finalTranscript.trim().length > 10) {
      var modelSelect = document.getElementById('submitModelSelect');
      var model = modelSelect ? modelSelect.value : this.settings.geminiModel;
      this.requestAIFeedback(finalTranscript, questionText, model);
    } else if (!this.settings.geminiApiKey) {
      // Show message to set API key
      this.showAIFeedbackMessage('Please enter your Gemini API key in Settings to get AI feedback.');
    }
  }

  updateRecordUI(isRecording) {
    const btn = document.getElementById('recordBtn');
    const indicator = document.getElementById('recordIndicator');

    if (btn) {
      btn.classList.toggle('recording', isRecording);
      btn.querySelector('span').textContent = isRecording ? 'Stop' : 'Record';
    }
    if (indicator) {
      indicator.classList.toggle('hidden', !isRecording);
    }
  }

  startRecordTimer() {
    this.recordTimerId = setInterval(() => {
      const timeEl = document.getElementById('recordTime');
      if (timeEl) {
        timeEl.textContent = this.recorder.getRecordingTime();
      }
    }, 1000);
  }

  stopRecordTimer() {
    if (this.recordTimerId) {
      clearInterval(this.recordTimerId);
      this.recordTimerId = null;
    }
    const timeEl = document.getElementById('recordTime');
    if (timeEl) timeEl.textContent = '00:00';
  }

  playbackRecording(blob) {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.controls = true;

    const body = document.getElementById('practiceBody');
    if (body) {
      let playback = document.getElementById('playbackContainer');
      if (!playback) {
        playback = document.createElement('div');
        playback.id = 'playbackContainer';
        playback.className = 'record-playback';
        const notesWrap = document.getElementById('practiceNotesWrap');
        body.insertBefore(playback, notesWrap);
      }
      playback.innerHTML = `
        <div class="playback-header">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <polygon points="5,3 19,10 5,17"/>
          </svg>
          Recording saved
        </div>
      `;
      audio.style.width = '100%';
      audio.style.height = '40px';
      audio.style.marginTop = '8px';
      playback.appendChild(audio);
    }
  }

  // ==========================================
  // SEARCH & FILTER
  // ==========================================

  searchState = {
    p1: { query: '', bookmarked: false, done: false, difficulty: null },
    p2: { query: '', bookmarked: false, done: false, difficulty: null, tag: null },
    p3: { query: '', bookmarked: false, done: false, difficulty: null, tag: null }
  };

  initSearch() {
    ['Part1', 'Part2', 'Part3'].forEach(part => {
      const searchInput = document.getElementById('search' + part);
      const clearBtn = document.getElementById('clearSearch' + part);
      const bookmarkBtn = document.getElementById('filterBookmarked' + part);
      const doneBtn = document.getElementById('filterDone' + part);
      const hardBtn = document.getElementById('filterHard' + part);
      const partKey = part.toLowerCase().replace('part', 'p');

      searchInput?.addEventListener('input', (e) => {
        this.searchState[partKey].query = e.target.value.toLowerCase();
        clearBtn?.classList.toggle('hidden', !e.target.value);
        this.applyFilter(partKey);
      });

      clearBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchState[partKey].query = '';
        clearBtn?.classList.add('hidden');
        this.applyFilter(partKey);
      });

      bookmarkBtn?.addEventListener('click', () => {
        this.searchState[partKey].bookmarked = !this.searchState[partKey].bookmarked;
        bookmarkBtn.classList.toggle('active', this.searchState[partKey].bookmarked);
        this.applyFilter(partKey);
      });

      doneBtn?.addEventListener('click', () => {
        this.searchState[partKey].done = !this.searchState[partKey].done;
        doneBtn.classList.toggle('active', this.searchState[partKey].done);
        this.applyFilter(partKey);
      });

      hardBtn?.addEventListener('click', () => {
        const current = this.searchState[partKey].difficulty;
        this.searchState[partKey].difficulty = current === 'hard' ? null : 'hard';
        hardBtn.classList.toggle('active', this.searchState[partKey].difficulty === 'hard');
        this.applyFilter(partKey);
      });
    });
  }

  applyFilter(part) {
    const state = this.searchState[part];
    const grid = document.getElementById(part + 'Grid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.topic-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const id = card.dataset.id;
      const title = card.querySelector('.topic-card-title')?.textContent.toLowerCase() || '';
      const matchesQuery = !state.query || title.includes(state.query);
      const matchesBookmark = !state.bookmarked || this.isBookmarked(id);
      const matchesDone = !state.done || this.isPracticed(id);
      const matchesDifficulty = !state.difficulty || this.getDifficulty(id) === state.difficulty;
      const cardTags = (card.dataset.tags || '').split(',').filter(Boolean);
      const matchesTag = !state.tag || cardTags.includes(state.tag);

      const visible = matchesQuery && matchesBookmark && matchesDone && matchesDifficulty && matchesTag;
      card.classList.toggle('search-hidden', !visible);
      if (visible) visibleCount++;
    });

    // Show/hide no results message
    let noResults = grid.querySelector('.no-results');
    if (visibleCount === 0) {
      if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" style="margin:0 auto 12px;color:var(--text-muted)">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <p>No results found</p>
        `;
        grid.appendChild(noResults);
      }
    } else {
      noResults?.remove();
    }
  }

  // ==========================================
  // SHUFFLE MODE
  // ==========================================

  shufflePart2() {
    const grid = document.getElementById('part2Grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.topic-card'));

    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      grid.insertBefore(cards[i], cards[j]);
      grid.insertBefore(cards[j], cards[i]);
      // Swap references for next iteration
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Re-index data-index attributes
    cards.forEach((card, idx) => {
      card.dataset.index = idx;
    });
  }

  // ==========================================
  // KEYBOARD SHORTCUTS
  // ==========================================

  showKeyboardShortcuts() {
    const shortcuts = [
      { key: 'Space / K', action: 'Start / Pause timer' },
      { key: 'R', action: 'Reset timer' },
      { key: '→ / N', action: 'Next question' },
      { key: '← / P', action: 'Previous question' },
      { key: 'B', action: 'Toggle band criteria' },
      { key: 'M', action: 'Toggle model answer' },
      { key: 'Alt+V', action: 'Read aloud (TTS)' },
      { key: 'Esc', action: 'Close practice mode' },
      { key: '1', action: 'Go to Home' },
      { key: '2', action: 'Go to Part 1' },
      { key: '3', action: 'Go to Part 2' },
      { key: '4', action: 'Go to Part 3' },
      { key: '5', action: 'Go to Statistics' },
      { key: 'T', action: 'Go to Tips' },
      { key: '?', action: 'Show shortcuts' }
    ];

    const html = `
      <div id="shortcuts-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);z-index:999;display:flex;align-items:center;justify-content:center;padding:16px;" onclick="if(event.target.id==='shortcuts-overlay'){this.remove()}">
        <div style="background:var(--bg-secondary);border-radius:12px;padding:24px;max-width:400px;width:100%;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);animation:fadeScale 200ms ease-out">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
            <h3 style="font-size:1rem;font-weight:700">Keyboard Shortcuts</h3>
            <button onclick="document.getElementById('shortcuts-overlay').remove()" style="width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--text-muted);cursor:pointer">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="14" height="14"><path d="M5 5l10 10M15 5L5 15"/></svg>
            </button>
          </div>
          <div style="display:grid;gap:8px">
            ${shortcuts.map(s => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
                <span style="font-size:0.8rem;color:var(--text-secondary)">${s.action}</span>
                <kbd style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:4px;padding:2px 8px;font-size:0.75rem;font-family:var(--font-mono);font-weight:600;color:var(--text-primary)">${s.key}</kbd>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    // Remove existing if any
    document.getElementById('shortcuts-overlay')?.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  }

  // ==========================================
  // ROUTING
  // ==========================================

  initRouter() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash, false);
  }

  handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash, false);
  }

  // ==========================================
  // VOCABULARY BUILDER
  // ==========================================

  currentVocabId = null;

  initVocab() {
    const addBtn = document.getElementById('addVocabBtn');
    const input = document.getElementById('vocabInput');

    addBtn?.addEventListener('click', () => this.addVocab());
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.addVocab();
      }
    });
  }

  loadVocabForItem(itemId) {
    this.currentVocabId = itemId;
    this.renderVocabList();
  }

  addVocab() {
    const input = document.getElementById('vocabInput');
    if (!input || !input.value.trim() || !this.currentVocabId) return;

    const word = input.value.trim();
    if (!this.vocab.has(this.currentVocabId)) {
      this.vocab.set(this.currentVocabId, []);
    }

    const list = this.vocab.get(this.currentVocabId);
    if (!list.includes(word)) {
      list.push(word);
      this.saveAllData();
    }

    input.value = '';
    this.renderVocabList();
  }

  removeVocab(word) {
    if (!this.currentVocabId) return;
    const list = this.vocab.get(this.currentVocabId);
    if (list) {
      const idx = list.indexOf(word);
      if (idx > -1) {
        list.splice(idx, 1);
        this.saveAllData();
        this.renderVocabList();
      }
    }
  }

  renderVocabList() {
    const container = document.getElementById('vocabList');
    if (!container) return;

    const list = this.vocab.get(this.currentVocabId) || [];

    if (list.length === 0) {
      container.innerHTML = '<div class="vocab-empty">No vocabulary saved yet</div>';
      return;
    }

    container.innerHTML = list.map(word => {
      const escaped = word.replace(/'/g, "\\'");
      return `<div class="vocab-item">
        <span class="vocab-item-text">${word}</span>
        <button class="vocab-item-delete" onclick="App.removeVocab('${escaped}')">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M5 5l10 10M15 5L5 15"/>
          </svg>
        </button>
      </div>`;
    }).join('');
  }

  /**
   * Navigate to a page
   * @param {string} page - Page identifier
   * @param {boolean} updateHash - Whether to update browser history
   */
  navigate(page, updateHash = true) {
    // Validate page
    const validPages = ['home', 'part1', 'part2', 'part3', 'tips', 'settings', 'stats'];
    if (!validPages.includes(page)) page = 'home';

    // Update current page
    this.currentPage = page;

    // Update URL hash
    if (updateHash) {
      window.location.hash = page;
    }

    // Update sidebar active state
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    // Show/hide pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Re-render dynamic pages on navigate
    if (page === 'home') this.renderHome();
    if (page === 'stats') this.renderStatistics();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // PAGE RENDERING
  // ==========================================

  renderAllPages() {
    this.renderHome();
    this.renderPart1();
    this.renderPart2();
    this.renderPart3();
    this.renderTips('part1-tips');
    this.renderStatistics();
  }

  // ==========================================
  // STATISTICS PAGE
  // ==========================================

  renderStatistics() {
    const container = document.getElementById('statsContent');
    if (!container) return;

    const total = this.getTotalSessions();
    const streak = this.streak.current;
    const maxStreak = this.streak.current; // simplified — tracks current only
    const p1Total = window.IELTS_DATA.part1Topics.length;
    const p2Total = window.IELTS_DATA.cueCards.length;
    const p3Total = window.IELTS_DATA.discussionTopics.length;

    // Count practiced per part
    const p1Practiced = window.IELTS_DATA.part1Topics.filter(t => this.practiced.has('p1-' + t.id)).length;
    const p2Practiced = window.IELTS_DATA.cueCards.filter(c => this.practiced.has('p2-' + c.id)).length;
    const p3Practiced = window.IELTS_DATA.discussionTopics.filter(d => this.practiced.has('p3-' + d.id)).length;

    // XP and level
    const xpPerSession = 10;
    const xp = total * xpPerSession;
    const level = Math.floor(xp / 100) + 1;
    const xpInLevel = xp % 100;
    const xpToNext = 100;

    // Hard cards
    const hardCards = [];
    this.difficulty.forEach((level, id) => {
      if (level === 'hard') {
        let card = null;
        if (id.startsWith('p1-')) {
          const tid = id.replace('p1-', '');
          card = window.IELTS_DATA.part1Topics.find(t => t.id === tid);
          if (card) card = { part: 'Part 1', id: id, title: card.title };
        } else if (id.startsWith('p2-')) {
          const tid = id.replace('p2-', '');
          card = window.IELTS_DATA.cueCards.find(c => c.id === tid);
          if (card) card = { part: 'Part 2', id: id, title: card.title };
        } else if (id.startsWith('p3-')) {
          const tid = id.replace('p3-', '');
          card = window.IELTS_DATA.discussionTopics.find(d => d.id === tid);
          if (card) card = { part: 'Part 3', id: id, title: card.title };
        }
        if (card) hardCards.push(card);
      }
    });

    // Recent sessions (last 5)
    const recent = this.history.slice(-5).reverse();
    const recentHTML = recent.length > 0 ? recent.map(h => {
      const d = new Date(h.timestamp);
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const timeStr = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      return '<div class="stat-list-row"><span class="stat-list-label">' + h.part.toUpperCase() + '</span><span class="stat-list-value">' + dateStr + ' ' + timeStr + '</span></div>';
    }).join('') : '<p class="text-muted" style="padding:16px 0;text-align:center">No sessions yet. Start practicing!</p>';

    // Achievements
    const achievements = this.getAchievements();
    const achievementHTML = achievements.map(a => {
      const unlocked = a.unlocked ? 'unlocked' : 'locked';
      const icon = a.unlocked ? a.icon : '&#128274;';
      return '<div class="achievement-card ' + unlocked + '" title="' + a.desc + '"><div class="achievement-icon">' + icon + '</div><div class="achievement-name">' + a.name + '</div></div>';
    }).join('');

    // Mistakes checklist
    const mistakes = [
      { part: 'Part 1', text: 'Repeating the same ideas in different words' },
      { part: 'Part 1', text: 'Using filler words too often ("um", "uh", "you know")' },
      { part: 'Part 1', text: 'Giving one-word answers without elaboration' },
      { part: 'Part 2', text: 'Going off-topic from the cue card prompt' },
      { part: 'Part 2', text: 'Speaking for less than 1 minute' },
      { part: 'Part 2', text: 'Forgetting to use linking phrases' },
      { part: 'Part 3', text: 'Not supporting opinions with reasons or examples' },
      { part: 'Part 3', text: 'Speaking too quickly without pausing' },
      { part: 'All', text: 'Overusing basic vocabulary (good, nice, big)' },
      { part: 'All', text: 'Incorrect use of verb tenses' }
    ];

    const mistakesHTML = mistakes.map((m, i) => {
      return '<div class="mistake-item"><label class="mistake-check-label"><input type="checkbox" class="mistake-check" data-mistake="' + i + '"><span class="mistake-check-custom"></span><span class="mistake-text">' + m.text + '</span></label><span class="mistake-part-tag">' + m.part + '</span></div>';
    }).join('');

    // Build HTML
    var html = '';

    // === Stats Overview Row ===
    html += '<div class="stats-overview">';
    html += '<div class="stat-big-card stat-purple">';
    html += '<div class="stat-big-icon">&#128200;</div>';
    html += '<div class="stat-big-number">' + total + '</div>';
    html += '<div class="stat-big-label">Total Sessions</div>';
    html += '</div>';
    html += '<div class="stat-big-card stat-green">';
    html += '<div class="stat-big-icon">&#128293;</div>';
    html += '<div class="stat-big-number">' + streak + '</div>';
    html += '<div class="stat-big-label">Day Streak</div>';
    html += '</div>';
    html += '<div class="stat-big-card stat-yellow">';
    html += '<div class="stat-big-icon">&#127942;</div>';
    html += '<div class="stat-big-number">' + (p1Practiced + p2Practiced + p3Practiced) + '</div>';
    html += '<div class="stat-big-label">Cards Practiced</div>';
    html += '</div>';
    html += '<div class="stat-big-card stat-red">';
    html += '<div class="stat-big-icon">&#9200;</div>';
    html += '<div class="stat-big-number">~' + Math.round(total * 2.5) + 'm</div>';
    html += '<div class="stat-big-label">Est. Practice Time</div>';
    html += '</div>';
    html += '</div>';

    // === XP & Level ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Level & XP</h2>';
    html += '<div class="xp-display">';
    html += '<div class="xp-level">Level ' + level + '</div>';
    html += '<div class="xp-bar-wrap">';
    html += '<div class="xp-bar-fill" style="width:' + (xpInLevel / xpToNext * 100) + '%"></div>';
    html += '</div>';
    html += '<div class="xp-text">' + xpInLevel + ' / ' + xpToNext + ' XP to Level ' + (level + 1) + '</div>';
    html += '</div>';
    html += '</div>';

    // === Per-Part Progress ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Part Progress</h2>';
    html += '<div class="part-progress-grid">';

    // Part 1
    html += '<div class="part-progress-card">';
    html += '<div class="part-progress-ring">';
    html += '<svg width="80" height="80" viewBox="0 0 80 80">';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--border)" stroke-width="6"/>';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--accent)" stroke-width="6" stroke-dasharray="' + (Math.PI * 34 * 2) + '" stroke-dashoffset="' + (Math.PI * 34 * 2 * (1 - p1Practiced / p1Total)) + '" transform="rotate(-90 40 40)" stroke-linecap="round"/>';
    html += '</svg>';
    html += '<div class="part-progress-ring-text">' + p1Practiced + '/' + p1Total + '</div>';
    html += '</div>';
    html += '<div class="part-progress-info"><div class="part-progress-name">Part 1</div><div class="part-progress-sub">Topics</div></div>';
    html += '</div>';

    // Part 2
    html += '<div class="part-progress-card">';
    html += '<div class="part-progress-ring">';
    html += '<svg width="80" height="80" viewBox="0 0 80 80">';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--border)" stroke-width="6"/>';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--accent)" stroke-width="6" stroke-dasharray="' + (Math.PI * 34 * 2) + '" stroke-dashoffset="' + (Math.PI * 34 * 2 * (1 - p2Practiced / p2Total)) + '" transform="rotate(-90 40 40)" stroke-linecap="round"/>';
    html += '</svg>';
    html += '<div class="part-progress-ring-text">' + p2Practiced + '/' + p2Total + '</div>';
    html += '</div>';
    html += '<div class="part-progress-info"><div class="part-progress-name">Part 2</div><div class="part-progress-sub">Cue Cards</div></div>';
    html += '</div>';

    // Part 3
    html += '<div class="part-progress-card">';
    html += '<div class="part-progress-ring">';
    html += '<svg width="80" height="80" viewBox="0 0 80 80">';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--border)" stroke-width="6"/>';
    html += '<circle cx="40" cy="40" r="34" fill="none" stroke="var(--accent)" stroke-width="6" stroke-dasharray="' + (Math.PI * 34 * 2) + '" stroke-dashoffset="' + (Math.PI * 34 * 2 * (1 - p3Practiced / p3Total)) + '" transform="rotate(-90 40 40)" stroke-linecap="round"/>';
    html += '</svg>';
    html += '<div class="part-progress-ring-text">' + p3Practiced + '/' + p3Total + '</div>';
    html += '</div>';
    html += '<div class="part-progress-info"><div class="part-progress-name">Part 3</div><div class="part-progress-sub">Discussions</div></div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';

    // === Hard Cards ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Cards Marked as Difficult</h2>';
    if (hardCards.length > 0) {
      html += '<div class="hard-cards-list">';
      hardCards.forEach(card => {
        html += '<div class="hard-card-item" data-id="' + card.id + '">';
        html += '<div class="hard-card-badge">&#9888;</div>';
        html += '<div class="hard-card-info">';
        html += '<div class="hard-card-part">' + card.part + '</div>';
        html += '<div class="hard-card-title">' + card.title + '</div>';
        html += '</div>';
        html += '<button class="btn btn-sm practice-hard-btn" data-id="' + card.id + '">Practice</button>';
        html += '</div>';
      });
      html += '</div>';
    } else {
      html += '<div class="empty-state-inline">';
      html += '<p style="color:var(--text-muted);text-align:center;padding:24px 0">No cards marked as difficult yet. Rate cards during practice to see them here.</p>';
      html += '</div>';
    }
    html += '</div>';

    // === Recent Sessions ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Recent Sessions</h2>';
    html += '<div class="recent-sessions-list">' + recentHTML + '</div>';
    html += '</div>';

    // === Achievements ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Achievements</h2>';
    html += '<div class="achievements-grid">' + achievementHTML + '</div>';
    html += '</div>';

    // === Mistakes Checklist ===
    html += '<div class="stats-section">';
    html += '<h2 class="stats-section-title">Common Mistakes to Avoid</h2>';
    html += '<div class="mistakes-section">' + mistakesHTML + '</div>';
    html += '</div>';

    container.innerHTML = html;

    // Bind practice buttons on hard cards
    container.querySelectorAll('.practice-hard-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (id.startsWith('p1-')) {
          const idx = window.IELTS_DATA.part1Topics.findIndex(t => 'p1-' + t.id === id);
          this.navigate('part1');
          setTimeout(() => this.startPart1(idx >= 0 ? idx : 0), 100);
        } else if (id.startsWith('p2-')) {
          const idx = window.IELTS_DATA.cueCards.findIndex(c => 'p2-' + c.id === id);
          this.navigate('part2');
          setTimeout(() => this.startPart2(idx >= 0 ? idx : 0), 100);
        } else if (id.startsWith('p3-')) {
          const idx = window.IELTS_DATA.discussionTopics.findIndex(d => 'p3-' + d.id === id);
          this.navigate('part3');
          setTimeout(() => this.startPart3(idx >= 0 ? idx : 0), 100);
        }
      });
    });

    // Bind mistake checkboxes
    container.querySelectorAll('.mistake-check').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(container.querySelectorAll('.mistake-check:checked')).map(c => c.dataset.mistake);
        localStorage.setItem('ielts-speaking-mistakes', JSON.stringify(checked));
      });
      // Restore checked state
      try {
        const saved = JSON.parse(localStorage.getItem('ielts-speaking-mistakes') || '[]');
        if (saved.includes(cb.dataset.mistake)) cb.checked = true;
      } catch (e) {}
    });
  }

  getAchievements() {
    const total = this.getTotalSessions();
    const streak = this.streak.current;
    const p1Done = window.IELTS_DATA.part1Topics.every(t => this.practiced.has('p1-' + t.id));
    const p2Done = window.IELTS_DATA.cueCards.every(c => this.practiced.has('p2-' + c.id));
    const p3Done = window.IELTS_DATA.discussionTopics.every(d => this.practiced.has('p3-' + d.id));
    const hardCount = Array.from(this.difficulty.values()).filter(v => v === 'hard').length;
    const vocabCount = Array.from(this.vocab.values()).reduce((s, arr) => s + arr.length, 0);

    return [
      { id: 'first', name: 'First Step', icon: '&#127775;', desc: 'Complete your first practice session', unlocked: total >= 1 },
      { id: 'five', name: 'Getting Started', icon: '&#128075;', desc: 'Complete 5 practice sessions', unlocked: total >= 5 },
      { id: 'ten', name: 'Dedicated', icon: '&#128170;', desc: 'Complete 10 practice sessions', unlocked: total >= 10 },
      { id: 'twentyfive', name: 'On Fire', icon: '&#128293;', desc: 'Complete 25 practice sessions', unlocked: total >= 25 },
      { id: 'fifty', name: 'Half Century', icon: '&#127941;', desc: 'Complete 50 practice sessions', unlocked: total >= 50 },
      { id: 'hundred', name: 'Centurion', icon: '&#127938;', desc: 'Complete 100 practice sessions', unlocked: total >= 100 },
      { id: 'streak3', name: '3-Day Streak', icon: '&#128536;', desc: 'Practice 3 days in a row', unlocked: streak >= 3 },
      { id: 'streak7', name: 'Week Warrior', icon: '&#127804;', desc: 'Practice 7 days in a row', unlocked: streak >= 7 },
      { id: 'streak14', name: 'Fortnight Focus', icon: '&#127758;', desc: 'Practice 14 days in a row', unlocked: streak >= 14 },
      { id: 'streak30', name: 'Monthly Master', icon: '&#127770;', desc: 'Practice 30 days in a row', unlocked: streak >= 30 },
      { id: 'p1done', name: 'Part 1 Complete', icon: '&#128203;', desc: 'Practice all 17 Part 1 topics', unlocked: p1Done },
      { id: 'p2done', name: 'Part 2 Complete', icon: '&#128196;', desc: 'Practice all 37 Part 2 cue cards', unlocked: p2Done },
      { id: 'p3done', name: 'Part 3 Complete', icon: '&#128172;', desc: 'Practice all Part 3 discussions', unlocked: p3Done },
      { id: 'hard', name: 'Honest Self', icon: '&#129300;', desc: 'Mark at least one card as difficult', unlocked: hardCount >= 1 },
      { id: 'vocab10', name: 'Word Collector', icon: '&#128220;', desc: 'Save 10 vocabulary words', unlocked: vocabCount >= 10 },
      { id: 'vocab50', name: 'Lexicon Builder', icon: '&#128218;', desc: 'Save 50 vocabulary words', unlocked: vocabCount >= 50 },
      { id: 'bookmark5', name: 'Saver', icon: '&#11088;', desc: 'Bookmark 5 cards', unlocked: this.bookmarks.size >= 5 },
      { id: 'allparts', name: 'Triple Threat', icon: '&#127936;', desc: 'Complete at least one session in each part', unlocked: p1Done || p2Done || p3Done }
    ];
  }

  // ==========================================
  // PRACTICED & BOOKMARK HELPERS
  // ==========================================

  markPracticed(id) {
    this.practiced.add(id);
    this.logPractice(this.currentPart || 'p1', id);
    this.refreshCardState(id);
  }

  isPracticed(id) {
    return this.practiced.has(id);
  }

  toggleBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
    } else {
      this.bookmarks.add(id);
    }
    this.saveAllData();
    this.refreshCardState(id);
    this.refreshHomeProgress();
  }

  isBookmarked(id) {
    return this.bookmarks.has(id);
  }

  refreshCardState(id) {
    // Update badge on card if visible
    const card = document.querySelector('.topic-card[data-id="' + id + '"]');
    if (!card) return;

    const existingBadge = card.querySelector('.card-badge-done');
    if (this.isPracticed(id)) {
      if (!existingBadge) {
        const badge = document.createElement('span');
        badge.className = 'card-badge-done';
        badge.textContent = 'Done';
        card.querySelector('.topic-card-header')?.appendChild(badge);
      }
    } else {
      existingBadge?.remove();
    }

    // Update bookmark icon
    const bookmarkBtn = card.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('active', this.isBookmarked(id));
    }
  }

  refreshHomeProgress() {
    // Update home stats if visible
    const p1Count = document.getElementById('stat-p1-count');
    const p2Count = document.getElementById('stat-p2-count');
    const p3Count = document.getElementById('stat-p3-count');
    const p1Total = IELTS_DATA.part1.length;
    const p2Total = IELTS_DATA.part2.length;
    const p3Total = IELTS_DATA.part3.length;

    if (p1Count) p1Count.textContent = `${this.getPracticedCount('p1')}/${p1Total}`;
    if (p2Count) p2Count.textContent = `${this.getPracticedCount('p2')}/${p2Total}`;
    if (p3Count) p3Count.textContent = `${this.getPracticedCount('p3')}/${p3Total}`;
  }

  getPracticedCount(part) {
    const prefix = part === 'p1' ? 'p1-' : part === 'p2' ? 'p2-' : 'p3-';
    let count = 0;
    this.practiced.forEach(id => {
      if (id.startsWith(prefix)) count++;
    });
    return count;
  }

  /**
   * Log a practice session
   */
  logPractice(part, topicId) {
    this.history.push({
      id: Date.now(),
      part: part,
      topicId: topicId,
      timestamp: new Date().toISOString()
    });
    // Keep only last 500 entries
    if (this.history.length > 500) {
      this.history = this.history.slice(-500);
    }
    this.updateStreak();
    this.saveAllData();
  }

  /**
   * Update streak based on today's date
   */
  updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (this.streak.lastDate === today) {
      // Already practiced today, no change
      return;
    } else if (this.streak.lastDate === yesterday) {
      // Consecutive day
      this.streak.current++;
      this.streak.lastDate = today;
    } else {
      // Streak broken or first time
      this.streak.current = 1;
      this.streak.lastDate = today;
    }
  }

  /**
   * Get last practiced date for a topic
   */
  getLastPracticed(topicId) {
    const entries = this.history.filter(h => h.topicId === topicId);
    if (entries.length === 0) return null;
    return new Date(entries[entries.length - 1].timestamp);
  }

  /**
   * Get total practice time (estimated from session count)
   */
  getTotalSessions() {
    return this.history.length;
  }

  /**
   * Get practice sessions for a specific date
   */
  getSessionsForDate(date) {
    const dateStr = new Date(date).toDateString();
    return this.history.filter(h =>
      new Date(h.timestamp).toDateString() === dateStr
    );
  }

  /**
   * Get difficulty for a topic
   */
  getDifficulty(topicId) {
    return this.difficulty.get(topicId) || null;
  }

  /**
   * Set difficulty for a topic
   */
  setDifficulty(topicId, level) {
    this.difficulty.set(topicId, level);
    this.saveAllData();
    this.refreshCardState(topicId);
  }

  /**
   * Extract tags from card title
   */
  getCardTags(title) {
    const keywords = [
      'Travel', 'Competition', 'Business', 'Education', 'Technology', 'Science',
      'Environment', 'Health', 'Sports', 'Music', 'Art', 'Food', 'Shopping',
      'Culture', 'Society', 'Work', 'Career', 'Communication', 'Media',
      'Friendship', 'Family', 'Childhood', 'Learning', 'Adventure', 'History',
      'Reading', 'Photography', 'Festival', 'Decision', 'Money', 'Nature',
      'Politeness', 'Weather', 'Transport', 'Animals'
    ];
    return keywords.filter(kw => title.toLowerCase().includes(kw.toLowerCase()));
  }

  /**
   * Get unique tags from Part 2 cards
   */
  getPart2Tags(cards) {
    const allTags = new Set();
    cards.forEach(card => {
      this.getCardTags(card.title).forEach(t => allTags.add(t));
    });
    return [...allTags].sort();
  }

  /**
   * Init difficulty buttons in practice modal
   */
  initDifficulty() {
    ['Easy', 'Medium', 'Hard'].forEach(level => {
      const btn = document.getElementById('diff' + level);
      btn?.addEventListener('click', () => {
        const topicId = this.currentItems[this.currentIndex]?.topicName + '-' + this.currentIndex;
        if (topicId) {
          this.setDifficulty(topicId, level.toLowerCase());
        }
        // Update button states
        ['Easy', 'Medium', 'Hard'].forEach(l => {
          const b = document.getElementById('diff' + l);
          b?.classList.remove('active', 'diff-easy', 'diff-medium', 'diff-hard');
          if (l === level) {
            b.classList.add('active', 'diff-' + level.toLowerCase());
          }
        });
      });
    });
  }

  /**
   * Initialize Web Speech Recognition
   */
  initSpeechRecognition() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    this.sr.recognition = new SR();
    this.sr.recognition.continuous = true;
    this.sr.recognition.interimResults = true;
    this.sr.recognition.lang = 'en-US';

    var self = this;
    this.sr.recognition.onresult = function(event) {
      var final = '';
      var interim = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      self.sr.transcript = final;
      self.sr.interimTranscript = interim;
      self.updateLiveTranscript(final + (interim ? ' ' : '') + interim);
    };

    this.sr.recognition.onerror = function(e) {
      if (e.error !== 'aborted' && e.error !== 'no-speech') {
        console.log('Speech recognition error:', e.error);
      }
    };

    this.sr.recognition.onend = function() {
      if (self.sr.isListening) {
        // Restart if still supposed to be listening
        try { self.sr.recognition.start(); } catch (e) {}
      }
    };
  }

  /**
   * Show/hide difficulty rating based on current item
   */
  /**
   * Update live transcript display
   */
  updateLiveTranscript(text) {
    var container = document.getElementById('liveTranscript');
    var textEl = document.getElementById('transcriptText');
    if (!container || !textEl) return;

    if (text && text.trim()) {
      container.style.display = 'block';
      textEl.textContent = text || '(Listening...)';
    } else {
      container.style.display = 'none';
    }
  }

  /**
   * Show/hide difficulty rating based on current item
   */
  updateDifficultyUI() {
    const wrap = document.getElementById('difficultyWrap');
    if (!wrap) return;
    const item = this.currentItems[this.currentIndex];
    const topicId = item?.topicName + '-' + this.currentIndex;
    if (!topicId) return;

    // Show difficulty wrap when in practice
    wrap.style.display = 'flex';
    wrap.style.visibility = 'visible';

    // Update button states
    const current = this.getDifficulty(topicId);
    ['Easy', 'Medium', 'Hard'].forEach(l => {
      const b = document.getElementById('diff' + l);
      if (b) {
        b.classList.remove('active', 'diff-easy', 'diff-medium', 'diff-hard');
        if (current === l.toLowerCase()) {
          b.classList.add('active', 'diff-' + l.toLowerCase());
        }
      }
    });
  }

  /**
   * Render home page with progress stats
   */
  renderHome() {
    const p1Practiced = this.getPracticedCount('p1');
    const p2Practiced = this.getPracticedCount('p2');
    const p3Practiced = this.getPracticedCount('p3');

    const p1El = document.getElementById('stat-p1-count');
    const p2El = document.getElementById('stat-p2-count');
    const p3El = document.getElementById('stat-p3-count');
    const p1Bar = document.getElementById('stat-p1-bar');
    const p2Bar = document.getElementById('stat-p2-bar');
    const p3Bar = document.getElementById('stat-p3-bar');

    if (p1El) p1El.textContent = `${p1Practiced}/${IELTS_DATA.part1.length}`;
    if (p2El) p2El.textContent = `${p2Practiced}/${IELTS_DATA.part2.length}`;
    if (p3El) p3El.textContent = `${p3Practiced}/${IELTS_DATA.part3.length}`;

    if (p1Bar) p1Bar.style.width = `${(p1Practiced / IELTS_DATA.part1.length) * 100}%`;
    if (p2Bar) p2Bar.style.width = `${(p2Practiced / IELTS_DATA.part2.length) * 100}%`;
    if (p3Bar) p3Bar.style.width = `${(p3Practiced / IELTS_DATA.part3.length) * 100}%`;

    // Streak
    const streakEl = document.getElementById('streakDisplay');
    if (streakEl) {
      streakEl.innerHTML = `
        <div class="streak-fire">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 2c0 0-4 4-4 8a4 4 0 018 0c0-4-4-8-4-8z"/>
            <path d="M10 8c0 0-2 2-2 4a2 2 0 004 0c0-2-2-4-2-4z"/>
          </svg>
        </div>
        <div class="streak-info">
          <span class="streak-count">${this.streak.current}</span>
          <span class="streak-label">day streak</span>
        </div>
      `;
    }

    // Calendar heatmap
    this.renderCalendar();

    // Daily challenge
    this.renderDailyChallenge();

    // Due cards (spaced repetition)
    this.renderDueCards();
  }

  /**
   * Render due cards based on spaced repetition algorithm
   */
  renderDueCards() {
    var container = document.getElementById('dueCardsList');
    if (!container) return;

    var allCards = [];
    var self = this;

    // Collect all cards with their last practiced dates
    IELTS_DATA.part1.forEach(function(card) {
      var id = 'p1-' + card.id;
      var lastPracticed = self.getLastPracticed(id);
      var daysSince = lastPracticed
        ? Math.floor((Date.now() - lastPracticed.getTime()) / 86400000)
        : 999;
      allCards.push({
        id: id,
        part: 'Part 1',
        title: card.title || card.topic,
        lastPracticed: lastPracticed,
        daysSince: daysSince,
        priority: daysSince
      });
    });

    IELTS_DATA.part2.forEach(function(card) {
      var id = 'p2-' + card.id;
      var lastPracticed = self.getLastPracticed(id);
      var daysSince = lastPracticed
        ? Math.floor((Date.now() - lastPracticed.getTime()) / 86400000)
        : 999;
      allCards.push({
        id: id,
        part: 'Part 2',
        title: card.title,
        lastPracticed: lastPracticed,
        daysSince: daysSince,
        priority: daysSince
      });
    });

    IELTS_DATA.part3.forEach(function(card) {
      var id = 'p3-' + card.id;
      var lastPracticed = self.getLastPracticed(id);
      var daysSince = lastPracticed
        ? Math.floor((Date.now() - lastPracticed.getTime()) / 86400000)
        : 999;
      allCards.push({
        id: id,
        part: 'Part 3',
        title: card.title,
        lastPracticed: lastPracticed,
        daysSince: daysSince,
        priority: daysSince
      });
    });

    // Sort by priority (days since last practiced, descending)
    allCards.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // Show top 6 due cards
    var topCards = allCards.slice(0, 6);

    if (topCards.length === 0 || (topCards.length > 0 && topCards[0].daysSince === 999)) {
      container.innerHTML = '<div class="due-empty">Start practicing to see cards due for review here.</div>';
      return;
    }

    var html = '';
    topCards.forEach(function(card) {
      var metaClass = card.daysSince > 7 ? 'overdue' : '';
      var metaText = card.daysSince === 999
        ? 'Never practiced'
        : card.daysSince === 0
          ? 'Practiced today'
          : card.daysSince === 1
            ? 'Last practiced yesterday'
            : card.daysSince + ' days ago';

      html += '<div class="due-card-item" data-id="' + card.id + '">';
      html += '<span class="due-card-part">' + card.part + '</span>';
      html += '<div class="due-card-info">';
      html += '<div class="due-card-title">' + card.title + '</div>';
      html += '<div class="due-card-meta ' + metaClass + '">' + metaText + '</div>';
      html += '</div>';
      html += '</div>';
    });

    container.innerHTML = html;

    // Bind click events
    container.querySelectorAll('.due-card-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var id = item.dataset.id;
        if (id.startsWith('p1-')) {
          var topicId = id.replace('p1-', '');
          var idx = IELTS_DATA.part1.findIndex(function(c) { return c.id === topicId; });
          self.navigate('part1');
          setTimeout(function() { self.startPart1(idx >= 0 ? idx : 0); }, 100);
        } else if (id.startsWith('p2-')) {
          var cardId = id.replace('p2-', '');
          var idx = IELTS_DATA.part2.findIndex(function(c) { return c.id === cardId; });
          self.navigate('part2');
          setTimeout(function() { self.startPart2(idx >= 0 ? idx : 0); }, 100);
        } else if (id.startsWith('p3-')) {
          var discId = id.replace('p3-', '');
          var idx = IELTS_DATA.part3.findIndex(function(c) { return c.id === discId; });
          self.navigate('part3');
          setTimeout(function() { self.startPart3(idx >= 0 ? idx : 0); }, 100);
        }
      });
    });
  }

  /**
   * Render calendar heatmap
   */
  renderCalendar() {
    const container = document.getElementById('calendarHeatmap');
    if (!container) return;

    const days = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const count = this.getSessionsForDate(date).length;
      days.push({ date, count, dateStr: date.toISOString().split('T')[0] });
    }

    container.innerHTML = `
      <div class="cal-months">
        ${this.getCalendarMonths(days)}
      </div>
      <div class="cal-grid">
        ${['S','M','T','W','T','F','S'].map(d => `<span class="cal-day-label">${d}</span>`).join('')}
        ${' '.repeat(days[0].date.getDay()).split('').map(() => '<span></span>').join('')}
        ${days.map(d => {
          const level = d.count === 0 ? 0 : d.count <= 1 ? 1 : d.count <= 3 ? 2 : 3;
          return `<span class="cal-cell cal-level-${level}" title="${d.dateStr}: ${d.count} sessions"></span>`;
        }).join('')}
      </div>
      <div class="cal-legend">
        <span class="cal-legend-label">Less</span>
        <span class="cal-cell cal-level-0"></span>
        <span class="cal-cell cal-level-1"></span>
        <span class="cal-cell cal-level-2"></span>
        <span class="cal-cell cal-level-3"></span>
        <span class="cal-legend-label">More</span>
      </div>
    `;
  }

  getCalendarMonths(days) {
    const months = [];
    let lastMonth = null;
    days.forEach(d => {
      const month = d.date.toLocaleDateString('en-US', { month: 'short' });
      if (month !== lastMonth) {
        months.push(`<span class="cal-month">${month}</span>`);
        lastMonth = month;
      }
    });
    return months.join('');
  }

  /**
   * Render daily challenge
   */
  renderDailyChallenge() {
    const container = document.getElementById('dailyChallengeCard');
    if (!container) return;

    const today = new Date().toDateString();
    let card = null;

    if (this.dailyChallenge && this.dailyChallenge.date === today) {
      card = IELTS_DATA.part2.find(c => c.id === this.dailyChallenge.cardId);
    } else {
      // Generate new daily challenge
      const randomIdx = Math.floor(Math.random() * IELTS_DATA.part2.length);
      card = IELTS_DATA.part2[randomIdx];
      this.dailyChallenge = { date: today, cardId: card.id };
      this.saveAllData();
    }

    if (card) {
      const alreadyDone = this.isPracticed(card.id);
      container.innerHTML = `
        <div class="daily-challenge-header">
          <div class="dc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="dc-title-wrap">
            <span class="dc-label">Daily Challenge</span>
            <span class="dc-date">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
          </div>
          ${alreadyDone ? '<span class="dc-done-badge">Done</span>' : ''}
        </div>
        <p class="dc-card-title">${card.title}</p>
        <button class="btn btn-primary btn-sm" id="startDailyChallenge">
          ${alreadyDone ? 'Practice Again' : 'Start Challenge'}
        </button>
      `;

      document.getElementById('startDailyChallenge')?.addEventListener('click', () => {
        const idx = IELTS_DATA.part2.findIndex(c => c.id === card.id);
        this.navigate('part2');
        setTimeout(() => this.startPart2(idx), 300);
      });
    }
  }

  /**
   * Render Part 1 topic grid
   */
  renderPart1() {
    const grid = document.getElementById('part1Grid');
    if (!grid) return;

    const topics = IELTS_DATA.part1;
    grid.innerHTML = topics.map((topic, idx) => `
      <div class="topic-card ${this.isPracticed(topic.id) ? 'is-practiced' : ''}" data-id="${topic.id}" data-index="${idx}">
        <div class="topic-card-header">
          <div class="topic-card-title">${topic.title}</div>
          <button class="bookmark-btn ${this.isBookmarked(topic.id) ? 'active' : ''}" aria-label="Bookmark">
            <svg viewBox="0 0 20 20" fill="${this.isBookmarked(topic.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
              <path d="M5 3h10a1 1 0 011 1v13l-6-3.5L4 17V4a1 1 0 011-1z"/>
            </svg>
          </button>
        </div>
        <div class="topic-card-count">
          ${topic.questions.length} questions
          ${this.isPracticed(topic.id) ? '<span class="card-badge-done-inline">Done</span>' : ''}
          ${this.getDifficulty(topic.id) ? '<span class="card-badge-difficulty ' + this.getDifficulty(topic.id) + '">' + this.getDifficulty(topic.id) + '</span>' : ''}
        </div>
        <div class="topic-card-body">
          ${topic.questions.map(q => `
            <div class="question-item">
              <p>${q.q}</p>
              ${q.hint ? `<p style="font-size:0.8rem;color:var(--text-muted);margin-top:4px">${q.hint}</p>` : ''}
            </div>
          `).join('')}
          <div class="topic-card-actions">
            <button class="btn btn-primary btn-sm">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                <polygon points="5,3 19,10 5,17"/>
              </svg>
              Practice
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /**
   * Render Part 2 cue card grid
   */
  renderPart2() {
    const grid = document.getElementById('part2Grid');
    if (!grid) return;

    const cards = IELTS_DATA.part2;

    // Generate tag chips from card titles
    const tags = this.getPart2Tags(cards);
    const tagRow = document.getElementById('tagFilterRowPart2');
    if (tagRow) {
      tagRow.innerHTML = tags.map(t => `
        <button class="tag-chip" data-tag="${t}">${t}</button>
      `).join('');
      tagRow.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('active');
          const activeTag = tagRow.querySelector('.tag-chip.active')?.dataset.tag || null;
          this.searchState.p2.tag = activeTag;
          this.applyFilter('p2');
        });
      });
    }

    grid.innerHTML = cards.map((card, idx) => {
      const tags = this.getCardTags(card.title);
      return '<div class="topic-card' + (this.isPracticed(card.id) ? ' is-practiced' : '') + '" data-id="' + card.id + '" data-index="' + idx + '" data-tags="' + tags.join(',') + '">' +
        '<div class="topic-card-header">' +
          '<div class="topic-card-title">' + card.title + '</div>' +
          '<button class="bookmark-btn' + (this.isBookmarked(card.id) ? ' active' : '') + '" aria-label="Bookmark">' +
            '<svg viewBox="0 0 20 20" fill="' + (this.isBookmarked(card.id) ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">' +
              '<path d="M5 3h10a1 1 0 011 1v13l-6-3.5L4 17V4a1 1 0 011-1z"/>' +
            '</svg>' +
          '</button>' +
        '</div>' +
        '<div class="topic-card-count">' +
          card.followUps.length + ' follow-up questions' +
          (this.isPracticed(card.id) ? '<span class="card-badge-done-inline">Done</span>' : '') +
          (this.getDifficulty(card.id) ? '<span class="card-badge-difficulty ' + this.getDifficulty(card.id) + '">' + this.getDifficulty(card.id) + '</span>' : '') +
        '</div>' +
        '<div class="topic-card-body">' +
          '<div class="cue-card-cue"><p>' + card.cue.replace(/\n/g, '<br>') + '</p></div>' +
          (card.points.length > 0 ? '<ul class="cue-card-points">' + card.points.map(p => '<li>' + p + '</li>').join('') + '</ul>' : '') +
          '<div class="topic-card-actions"><button class="btn btn-primary btn-sm"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="5,3 19,10 5,17"/></svg> Practice</button></div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /**
   * Render Part 3 discussion topics grid
   */
  renderPart3() {
    const grid = document.getElementById('part3Grid');
    if (!grid) return;

    const topics = IELTS_DATA.part3;

    // Generate tag chips from themes
    const themes = [...new Set(topics.map(t => t.theme))].sort();
    const tagRow = document.getElementById('tagFilterRowPart3');
    if (tagRow) {
      tagRow.innerHTML = themes.map(t => '<button class="tag-chip" data-tag="' + t + '">' + t + '</button>').join('');
      tagRow.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('active');
          const activeTag = tagRow.querySelector('.tag-chip.active')?.dataset.tag || null;
          this.searchState.p3.tag = activeTag;
          this.applyFilter('p3');
        });
      });
    }

    grid.innerHTML = topics.map((topic, idx) => {
      return '<div class="topic-card' + (this.isPracticed(topic.id) ? ' is-practiced' : '') + '" data-id="' + topic.id + '" data-index="' + idx + '" data-tags="' + topic.theme + '">' +
        '<div class="topic-card-header">' +
          '<div class="topic-card-title">' + topic.title + '</div>' +
          '<div class="topic-card-header-right">' +
            '<span class="topic-card-badge">' + topic.theme + '</span>' +
            '<button class="bookmark-btn' + (this.isBookmarked(topic.id) ? ' active' : '') + '" aria-label="Bookmark">' +
              '<svg viewBox="0 0 20 20" fill="' + (this.isBookmarked(topic.id) ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">' +
                '<path d="M5 3h10a1 1 0 011 1v13l-6-3.5L4 17V4a1 1 0 011-1z"/>' +
              '</svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="topic-card-count">' +
          topic.points.length + ' discussion questions' +
          (this.isPracticed(topic.id) ? '<span class="card-badge-done-inline">Done</span>' : '') +
          (this.getDifficulty(topic.id) ? '<span class="card-badge-difficulty ' + this.getDifficulty(topic.id) + '">' + this.getDifficulty(topic.id) + '</span>' : '') +
        '</div>' +
        '<div class="topic-card-body">' +
          topic.points.map(p => '<div class="question-item"><p>' + p + '</p></div>').join('') +
          '<div class="topic-card-actions"><button class="btn btn-primary btn-sm"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="5,3 19,10 5,17"/></svg> Practice</button></div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /**
   * Render tips content
   */
  renderTips(tabId) {
    const container = document.getElementById('tipsContent');
    if (!container) return;

    let html = '';
    const tips = IELTS_DATA.tips;

    switch (tabId) {
      case 'part1-tips':
        html = `
          <div class="tips-section active">
            <div class="tips-block">
              <h3>Part 1 Strategies</h3>
              <ul class="tips-list">
                ${tips.part1.map(tip => `
                  <li><strong>${tip.title}:</strong> ${tip.content}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        `;
        break;

      case 'part2-tips':
        html = `
          <div class="tips-section active">
            <div class="tips-block">
              <h3>Part 2 Strategies</h3>
              <ul class="tips-list">
                ${tips.part2.map(tip => `
                  <li><strong>${tip.title}:</strong> ${tip.content}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        `;
        break;

      case 'part3-tips':
        html = `
          <div class="tips-section active">
            <div class="tips-block">
              <h3>Part 3 Strategies</h3>
              <ul class="tips-list">
                ${tips.part3.map(tip => `
                  <li><strong>${tip.title}:</strong> ${tip.content}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        `;
        break;

      case 'band-score':
        html = `
          <div class="tips-section active">
            <div class="tips-block">
              <h3>Band Score Descriptors</h3>
              <table class="band-table">
                <thead>
                  <tr>
                    <th>Band</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  ${tips.bandScore.map(row => `
                    <tr>
                      <td>${row.band}</td>
                      <td>${row.desc}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
        break;

      case 'phrases':
        html = `
          <div class="tips-section active">
            <div class="phrases-grid">
              ${tips.phrases.map(group => `
                <div class="phrase-card">
                  <div class="phrase-category">${group.category}</div>
                  <div class="phrase-examples">
                    ${group.examples.map(ex => `
                      <div class="phrase-example">${ex.text}</div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        break;

      default:
        html = '';
    }

    container.innerHTML = html;
  }

  // ==========================================
  // CARD TOGGLING
  // ==========================================

  toggleCard(card) {
    // Close all other cards first
    document.querySelectorAll('.topic-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });

    card.classList.toggle('active');
  }

  // ==========================================
  // PRACTICE MODE
  // ==========================================

  /**
   * Start Part 1 practice
   */
  startPart1(topicIndex) {
    const topic = IELTS_DATA.part1[topicIndex];
    if (!topic) return;

    this.markPracticed(topic.id);
    this.currentPart = 'p1';
    this.currentIndex = 0;
    this.currentItems = topic.questions.map((q, i) => ({
      type: 'question',
      text: q.q,
      hint: q.hint || '',
      part: 'Part 1',
      topicName: topic.title,
      itemIndex: i
    }));

    this.timer.setDuration(this.settings.timerPart1);
    this.timer.reset();
    this.openPractice();
    this.showCurrentQuestion();
  }

  /**
   * Start Part 2 practice
   */
  startPart2(cardIndex) {
    const card = IELTS_DATA.part2[cardIndex];
    if (!card) return;

    this.markPracticed(card.id);
    this.currentPart = 'p2';
    this.currentIndex = 0;

    // Build items: cue card first, then follow-ups
    const items = [];

    // Cue card item
    items.push({
      type: 'cuecard',
      title: card.title,
      cue: card.cue,
      points: card.points,
      part: 'Part 2',
      topicName: card.title,
      itemIndex: 0
    });

    // Follow-up questions
    card.followUps.forEach((q, i) => {
      items.push({
        type: 'question',
        text: q,
        part: 'Part 2 — Follow-up',
        topicName: card.title,
        itemIndex: i + 1
      });
    });

    this.currentItems = items;
    this.timer.setDuration(this.settings.timerPart2);
    this.timer.reset();
    this.openPractice();
    this.showCurrentQuestion();
  }

  /**
   * Start Part 3 practice
   */
  startPart3(topicIndex) {
    const topic = IELTS_DATA.part3[topicIndex];
    if (!topic) return;

    this.markPracticed(topic.id);
    this.currentPart = 'p3';
    this.currentIndex = 0;

    const items = topic.points.map((p, i) => ({
      type: 'question',
      text: p,
      theme: topic.theme,
      part: 'Part 3',
      topicName: topic.title,
      itemIndex: i
    }));

    this.currentItems = items;
    this.timer.setDuration(this.settings.timerPart3);
    this.timer.reset();
    this.openPractice();
    this.showCurrentQuestion();
  }

  /**
   * Start random Part 1
   */
  startRandomPart1() {
    const idx = Math.floor(Math.random() * IELTS_DATA.part1.length);
    this.navigate('part1');
    setTimeout(() => this.startPart1(idx), 300);
  }

  /**
   * Start random Part 2
   */
  startRandomPart2() {
    const idx = Math.floor(Math.random() * IELTS_DATA.part2.length);
    this.navigate('part2');
    setTimeout(() => this.startPart2(idx), 300);
  }

  /**
   * Start random Part 3
   */
  startRandomPart3() {
    const idx = Math.floor(Math.random() * IELTS_DATA.part3.length);
    this.navigate('part3');
    setTimeout(() => this.startPart3(idx), 300);
  }

  /**
   * Open practice overlay
   */
  openPractice() {
    this.practiceOpen = true;
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close criteria panel
    this.closeCriteria();
  }

  /**
   * Close practice overlay
   */
  closePractice() {
    this.practiceOpen = false;
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';

    // Stop timer
    this.timer.pause();

    // Stop recording if active
    if (this.isRecording) {
      this.recorder.cancel();
      this.isRecording = false;
      this.updateRecordUI(false);
      this.stopRecordTimer();
    }

    // Close criteria
    this.closeCriteria();

    // Close model answer
    this.closeModelAnswer();

    // Close rate analyzer
    this.hideRateAnalyzer();

    // Close AI feedback
    this.closeAIFeedback();

    // Clear transcript
    this.updateLiveTranscript('');
  }

  /**
   * Show current question/item
   */
  showCurrentQuestion() {
    if (this.currentItems.length === 0) return;

    const item = this.currentItems[this.currentIndex];
    if (!item) return;

    // Update meta
    this.practicePartTag.textContent = item.part;
    this.practiceTopicName.textContent = item.topicName;

    // Reset timer for new question
    this.timer.reset();

    // Load vocab for this item
    const vocabId = item.topicName + '-' + this.currentIndex;
    this.loadVocabForItem(vocabId);

    // Update difficulty UI
    this.updateDifficultyUI();

    // Build question HTML
    let html = '';

    if (item.type === 'cuecard') {
      html = `
        <div class="practice-cue-full">
          <p>${item.cue.replace(/\n/g, '<br>')}</p>
        </div>
        ${item.points.length > 0 ? `
          <div class="practice-follow-ups">
            <p style="font-size:0.75rem;font-weight:600;color:var(--text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em">Talk about:</p>
            ${item.points.map(p => `<li>${p}</li>`).join('')}
          </div>
        ` : ''}
        <div class="cue-card-actions">
          <button class="btn btn-primary" id="startSpeakingBtn">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5,3 19,10 5,17"/>
            </svg>
            Start Speaking
          </button>
          <p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px;text-align:center">
            The examiner will ask follow-up questions after your talk
          </p>
        </div>
      `;
    } else {
      html = `<p>${item.text}</p>`;
      if (item.hint) {
        html += `<p style="font-size:0.8rem;color:var(--text-muted);margin-top:12px">${item.hint}</p>`;
      }
    }

    // Question counter
    html += `
      <p style="font-size:0.7rem;color:var(--text-muted);margin-top:16px;padding-top:12px;border-top:1px solid var(--border)">
        ${item.type === 'cuecard' ? 'Cue Card — Read this before speaking' : 'Question ' + (this.currentIndex) + ' of ' + (this.currentItems.length - 1)}
      </p>
    `;

    this.practiceQuestion.innerHTML = html;

    // Bind Start Speaking button
    document.getElementById('startSpeakingBtn')?.addEventListener('click', () => {
      this.nextQuestion();
    });

    // Update prev/next buttons
    // For Part 2 cue card (index 0): show Next, hide Prev
    // For Part 2 follow-ups (index 1+): show Prev until last, hide Next at last
    const isCueCard = item.type === 'cuecard';
    const isLastItem = this.currentIndex === this.currentItems.length - 1;

    document.getElementById('prevQuestion').style.visibility =
      this.currentIndex > 0 && !isCueCard ? 'visible' : 'hidden';
    document.getElementById('nextQuestion').style.visibility =
      isCueCard || isLastItem ? 'hidden' : 'visible';

    // Refresh model answer if panel is open
    const section = document.getElementById('modelAnswerSection');
    if (section && section.style.display !== 'none' && !section.classList.contains('hidden')) {
      this.showModelAnswerForCurrent();
    }
  }

  /**
   * Go to next question
   */
  nextQuestion() {
    if (this.currentIndex < this.currentItems.length - 1) {
      this.currentIndex++;
      // Don't reset timer for Part 2 follow-up questions
      if (this.currentPart !== 'p2') {
        this.timer.reset();
      }
      this.showCurrentQuestion();
    }
  }

  /**
   * Go to previous question
   */
  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.timer.reset();
      this.showCurrentQuestion();
    }
  }

  // ==========================================
  // TIMER CONTROLS
  // ==========================================

  toggleTimer() {
    this.timer.toggle();
  }

  resetTimer() {
    this.timer.reset();
  }

  // ==========================================
  // CRITERIA PANEL
  // ==========================================

  toggleCriteria() {
    const panel = document.getElementById('criteriaPanel');
    if (panel) {
      panel.classList.toggle('active');
    }
  }

  closeCriteria() {
    const panel = document.getElementById('criteriaPanel');
    if (panel) {
      panel.classList.remove('active');
    }
  }

  // ==========================================
  // MODEL ANSWER PANEL
  // ==========================================

  toggleModelAnswer() {
    const section = document.getElementById('modelAnswerSection');
    if (!section) return;

    const isHidden = section.style.display === 'none' || section.classList.contains('hidden');
    if (isHidden) {
      section.style.display = 'block';
      section.classList.remove('hidden');
      this.showModelAnswerForCurrent();
    } else {
      section.style.display = 'none';
      section.classList.add('hidden');
    }
  }

  showModelAnswerForCurrent() {
    const section = document.getElementById('modelAnswerSection');
    const contentEl = document.getElementById('modelAnswerContent');
    const vocabEl = document.getElementById('modelAnswerVocab');
    const tipsEl = document.getElementById('modelAnswerTips');
    if (!section || !contentEl) return;

    const item = this.currentItems[this.currentIndex];
    if (!item) return;

    const modelAnswer = window.MODEL_ANSWERS && window.MODEL_ANSWERS[item.id];

    if (!modelAnswer) {
      contentEl.innerHTML = '<p style="color:var(--text-muted);font-size:0.875rem;padding:var(--space-2) 0">No model answer available for this card yet. Keep practicing and check back soon!</p>';
      vocabEl.innerHTML = '';
      tipsEl.innerHTML = '';
      return;
    }

    contentEl.innerHTML = modelAnswer.answer;

    if (modelAnswer.vocab && modelAnswer.vocab.length > 0) {
      var vocabHTML = '<div class="model-answer-vocab-title">Key Vocabulary</div>';
      modelAnswer.vocab.forEach(function(v) {
        vocabHTML += '<div class="model-answer-vocab-item">';
        vocabHTML += '<span class="model-answer-vocab-word">' + v.word + '</span>';
        vocabHTML += '<span class="model-answer-vocab-meaning">' + v.meaning + '</span>';
        vocabHTML += '</div>';
      });
      vocabEl.innerHTML = vocabHTML;
    } else {
      vocabEl.innerHTML = '';
    }

    if (modelAnswer.tips && modelAnswer.tips.length > 0) {
      var tipsHTML = '<div class="model-answer-tips-title">Speaking Tips</div>';
      modelAnswer.tips.forEach(function(t) {
        tipsHTML += '<div class="model-answer-tip-item">' + t + '</div>';
      });
      tipsEl.innerHTML = tipsHTML;
    } else {
      tipsEl.innerHTML = '';
    }
  }

  closeModelAnswer() {
    const section = document.getElementById('modelAnswerSection');
    if (section) {
      section.style.display = 'none';
      section.classList.add('hidden');
    }
  }

  // ==========================================
  // READ ALOUD (TTS)
  // ==========================================

  toggleTTS() {
    if (!window.speechSynthesis) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    const controls = document.getElementById('ttsControls');
    const btn = document.getElementById('ttsBtn');

    if (!this.tts.playing && !this.tts.paused) {
      // Start TTS
      this.initTTSText();
      this.playTTS();
      if (controls) controls.style.display = 'block';
      if (btn) btn.classList.add('playing');
    } else {
      // Stop TTS
      this.stopTTS();
      if (controls) controls.style.display = 'none';
      if (btn) btn.classList.remove('playing');
    }
  }

  initTTSText() {
    const item = this.currentItems[this.currentIndex];
    if (!item) return;

    var text = '';

    if (item.type === 'cuecard') {
      text = item.cue;
    } else {
      text = item.text;
      if (item.hint) {
        text += '. Hint: ' + item.hint;
      }
    }

    // Strip HTML tags
    text = text.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();

    // Clean up cue card bullets
    text = text.replace(/You should say:\s*/g, '. Talk about: ');
    text = text.replace(/\bwhat\b/gi, 'what');
    text = text.replace(/\bwhere\b/gi, 'where');
    text = text.replace(/\bwho\b/gi, 'who');
    text = text.replace(/\bwhen\b/gi, 'when');
    text = text.replace(/\bwhy\b/gi, 'why');
    text = text.replace(/\band explain\b/gi, 'and explain');

    this.tts.text = text;
    this.tts.utterance = null;
    this.tts.startTime = 0;
    this.tts.pausedTime = 0;
  }

  playTTS() {
    if (!window.speechSynthesis) return;

    if (this.tts.paused) {
      window.speechSynthesis.resume();
      this.tts.paused = false;
      this.tts.playing = true;
      this.updateTTSUI('playing');
      return;
    }

    if (!this.tts.text) {
      this.initTTSText();
    }

    if (!this.tts.text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    this.tts.utterance = new SpeechSynthesisUtterance(this.tts.text);
    this.tts.utterance.rate = this.tts.speed;
    this.tts.utterance.pitch = 1;
    this.tts.utterance.lang = 'en-US';

    // Try to use a good English voice
    var voices = window.speechSynthesis.getVoices();
    var preferred = voices.find(function(v) {
      return v.lang === 'en-US' && v.name.toLowerCase().includes('natural');
    });
    if (!preferred) {
      preferred = voices.find(function(v) {
        return v.lang === 'en-US';
      });
    }
    if (preferred) {
      this.tts.utterance.voice = preferred;
    }

    var self = this;
    this.tts.utterance.onend = function() {
      self.onTTSEnd();
    };
    this.tts.utterance.onerror = function(e) {
      if (e.error !== 'interrupted') {
        self.onTTSEnd();
      }
    };

    this.tts.startTime = Date.now();
    this.tts.playing = true;
    this.tts.paused = false;

    window.speechSynthesis.speak(this.tts.utterance);
    this.updateTTSUI('playing');
    this.startTTSProgress();
  }

  pauseTTS() {
    if (!window.speechSynthesis || !this.tts.playing) return;
    window.speechSynthesis.pause();
    this.tts.paused = true;
    this.tts.playing = false;
    this.pauseTTSProgress();
    this.updateTTSUI('paused');
  }

  stopTTS() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    this.tts.playing = false;
    this.tts.paused = false;
    this.tts.utterance = null;
    this.stopTTSProgress();
    this.updateTTSUI('stopped');

    var btn = document.getElementById('ttsBtn');
    if (btn) btn.classList.remove('playing');
  }

  onTTSEnd() {
    this.tts.playing = false;
    this.tts.paused = false;
    this.stopTTSProgress();
    this.updateTTSUI('stopped');
    var btn = document.getElementById('ttsBtn');
    if (btn) btn.classList.remove('playing');
  }

  updateTTSUI(state) {
    var playBtn = document.getElementById('ttsPlayBtn');
    var pauseBtn = document.getElementById('ttsPauseBtn');
    var statusEl = document.getElementById('ttsStatus');

    if (playBtn) playBtn.style.display = state === 'playing' ? 'none' : 'flex';
    if (pauseBtn) pauseBtn.style.display = state === 'playing' ? 'flex' : 'none';

    if (statusEl) {
      switch (state) {
        case 'playing':
          statusEl.textContent = 'Speaking...';
          break;
        case 'paused':
          statusEl.textContent = 'Paused';
          break;
        default:
          statusEl.textContent = '';
          break;
      }
    }
  }

  startTTSProgress() {
    this.stopTTSProgress();
    var progressBar = document.querySelector('.tts-progress-bar');
    var self = this;

    this.tts.progressTimer = setInterval(function() {
      if (!self.tts.utterance || !self.tts.playing) {
        self.stopTTSProgress();
        return;
      }
      // Estimate progress based on elapsed time (rough)
      var elapsed = (Date.now() - self.tts.startTime) / 1000;
      var estimatedDuration = self.tts.utterance.text.length / (12 * self.tts.speed);
      var pct = Math.min(100, (elapsed / estimatedDuration) * 100);
      if (progressBar) {
        progressBar.style.width = pct + '%';
      }
    }, 200);
  }

  stopTTSProgress() {
    if (this.tts.progressTimer) {
      clearInterval(this.tts.progressTimer);
      this.tts.progressTimer = null;
    }
    var progressBar = document.querySelector('.tts-progress-bar');
    if (progressBar) progressBar.style.width = '0%';
  }

  pauseTTSProgress() {
    if (this.tts.progressTimer) {
      clearInterval(this.tts.progressTimer);
      this.tts.progressTimer = null;
    }
  }

  // ==========================================
  // SHARE CARD
  // ==========================================

  shareCard() {
    var item = this.currentItems[this.currentIndex];
    if (!item) return;

    var shareUrl = window.location.origin + window.location.pathname + '?card=' + encodeURIComponent(item.id);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(function() {
        alert('Link copied to clipboard!');
      }).catch(function() {
        prompt('Copy this link:', shareUrl);
      });
    } else {
      prompt('Copy this link:', shareUrl);
    }
  }

  // ==========================================
  // EXPORT VOCABULARY
  // ==========================================

  exportVocab() {
    var lines = ['IELTS Speaking Practice — Vocabulary Export', 'Generated: ' + new Date().toLocaleString(), ''];

    this.vocab.forEach(function(words, itemId) {
      if (words.length > 0) {
        lines.push('--- ' + itemId + ' ---');
        words.forEach(function(w) {
          lines.push('  - ' + w);
        });
        lines.push('');
      }
    });

    if (lines.length === 3) {
      alert('No vocabulary saved yet.');
      return;
    }

    lines.push('Total words: ' + Array.from(this.vocab.values()).reduce(function(s, arr) { return s + arr.length; }, 0));

    var blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'ielts-vocab-' + new Date().toISOString().split('T')[0] + '.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ==========================================
  // SPEAKING RATE ANALYZER
  // ==========================================

  showRateAnalyzer(durationSec) {
    var container = document.getElementById('rateAnalyzer');
    var valueEl = document.getElementById('rateValue');
    var descEl = document.getElementById('rateDesc');
    if (!container || !valueEl || !descEl) return;

    // Rough estimate: typical IELTS speaking is 100-120 words per minute
    // For a 2-minute talk, that's ~200-240 words
    // Adjust based on timer duration and cue card
    var item = this.currentItems[this.currentIndex];
    var estimatedWords = item && item.type === 'cuecard' ? 200 : 120;
    var wpm = Math.round(estimatedWords / (durationSec / 60));

    valueEl.textContent = wpm + ' WPM';

    if (wpm < 80) {
      descEl.textContent = 'Slow — aim for 100-120 WPM';
      descEl.className = 'rate-desc slow';
    } else if (wpm > 140) {
      descEl.textContent = 'Fast — aim for 100-120 WPM';
      descEl.className = 'rate-desc fast';
    } else {
      descEl.textContent = 'Good pace!';
      descEl.className = 'rate-desc good';
    }

    container.classList.remove('hidden');
  }

  hideRateAnalyzer() {
    var container = document.getElementById('rateAnalyzer');
    if (container) container.classList.add('hidden');
  }

  /**
   * Show transcript summary after recording
   */
  showTranscriptSummary(transcript) {
    var container = document.getElementById('liveTranscript');
    var textEl = document.getElementById('transcriptText');
    if (!container || !textEl) return;

    textEl.textContent = transcript || '(No speech detected)';
    container.style.display = 'block';
  }

  /**
   * Submit typed answer for AI feedback
   */
  submitForAIFeedback() {
    var textArea = document.getElementById('submitAnswerText');
    var modelSelect = document.getElementById('submitModelSelect');
    if (!textArea) return;

    var answer = textArea.value.trim();
    if (!answer) {
      alert('Please type your answer first.');
      return;
    }

    if (!this.settings.geminiApiKey) {
      this.showAIFeedbackMessage('Please enter your Gemini API key in Settings to get AI feedback.');
      return;
    }

    if (answer.length < 20) {
      alert('Your answer is too short. Please write at least a few sentences.');
      return;
    }

    // Get model from dropdown
    var model = modelSelect ? modelSelect.value : this.settings.geminiModel;

    // Get current question
    var item = this.currentItems[this.currentIndex];
    var questionText = '';
    if (item) {
      if (item.type === 'cuecard') {
        questionText = item.cue.replace(/\n/g, ' ').replace(/You should say:/g, '').replace(/Talk about:/g, '');
      } else {
        questionText = item.text || '';
      }
    }

    // Store for reference
    this.aiFeedback.lastTranscript = answer;
    this.aiFeedback.lastQuestion = questionText;

    // Request AI feedback with selected model
    this.requestAIFeedback(answer, questionText, model);
  }

  /**
   * Show AI feedback message (before feedback is loaded)
   */
  showAIFeedbackMessage(msg) {
    var panel = document.getElementById('aiFeedbackSection');
    var content = document.getElementById('aiFeedbackContent');
    if (!panel || !content) return;

    content.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;padding:var(--space-2)">' + msg + '</p>';
    panel.style.display = 'block';
    panel.classList.remove('hidden');
  }

  /**
   * Request AI feedback from Gemini API
   */
  async requestAIFeedback(transcript, questionText, model) {
    var self = this;
    var panel = document.getElementById('aiFeedbackSection');
    var content = document.getElementById('aiFeedbackContent');
    if (!panel || !content) return;

    // Show loading state with model name
    var modelName = model || this.settings.geminiModel || 'gemini-2.5-flash';
    content.innerHTML = '<div class="ai-loading"><div class="ai-spinner"></div><p>Analyzing with ' + modelName + '...</p><p style="font-size:0.75rem;color:var(--text-muted);margin-top:8px">This may take a few seconds</p></div>';
    panel.style.display = 'block';
    panel.classList.remove('hidden');

    try {
      var feedback = await this.getAIFeedback(transcript, questionText, model);
      this.displayAIFeedback(feedback);
    } catch (e) {
      content.innerHTML = '<p style="color:var(--danger)">Error: ' + (e.message || 'Could not get AI feedback. Please check your API key.') + '</p>';
    }
  }

  /**
   * Call Gemini API for feedback
   */
  async getAIFeedback(transcript, questionText, model) {
    var apiKey = this.settings.geminiApiKey;
    if (!apiKey) throw new Error('No API key configured.');

    var modelName = model || this.settings.geminiModel || 'gemini-2.5-flash';

    var prompt = 'You are an IELTS speaking examiner. Evaluate this speaking response and provide constructive, encouraging feedback.\n\nTOPIC/PROMPT: ' + questionText + '\n\nCANDIDATE RESPONSE:\n' + transcript + '\n\nFormat your feedback EXACTLY like this (use markdown headers):\n\n## Overall Assessment\n[2-3 sentences about the overall quality of this response]\n\n## Strengths\n- [One specific thing the candidate did well]\n- [Another strength]\n\n## Areas to Improve\n- [One specific area for improvement with actionable advice]\n- [Another area for improvement]\n\n## Vocabulary Enhancement\n- **[Advanced word]**: meaning in this context\n- **[Another word]**: meaning\n\n## Estimated Band Score\nBand [5-9]: [One sentence justification]\n\nBe specific, encouraging, and helpful. Focus on IELTS criteria: Fluency & Coherence, Lexical Resource, Grammatical Range, and Pronunciation.';

    var response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        })
      }
    );

    if (!response.ok) {
      var errText = await response.text();
      throw new Error('API error: ' + response.status);
    }

    var data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No feedback generated.';
  }

  /**
   * Display AI feedback with simple markdown rendering
   */
  displayAIFeedback(feedback) {
    var content = document.getElementById('aiFeedbackContent');
    if (!content) return;

    // Simple markdown-like rendering
    var html = feedback
      .replace(/^## (.+)$/gm, '<h4>$1</h4>')
      .replace(/^### (.+)$/gm, '<h5>$1</h5>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');

    // Clean up nested ul tags
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    content.innerHTML = '<div class="ai-feedback-body">' + html + '</div>';

    // Scroll into view
    var panel = document.getElementById('aiFeedbackSection');
    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Close AI feedback panel
   */
  closeAIFeedback() {
    var panel = document.getElementById('aiFeedbackSection');
    if (panel) {
      panel.style.display = 'none';
      panel.classList.add('hidden');
    }
  }
}

// ==========================================
// INITIALIZE APPLICATION
// ==========================================

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // SW registered
    }).catch(function(err) {
      // SW registration failed
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  window.App = new App();
});
