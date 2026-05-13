# IELTS Speaking Practice — Makkar Jan-April 2026

## 1. Concept & Vision

A focused, distraction-free IELTS Speaking practice tool built from the Makkar Jan-April 2026 cue card PDF. The experience feels like having a personal speaking coach — clean, calm, and purposeful. Each question surfaces naturally with timing tools, band-score criteria, and self-assessment checklists. No clutter, no noise — just the words you need to practice.

---

## 2. Design Language

### Aesthetic Direction
Calm academic — inspired by high-end language learning apps (like Elsa or Cambly). Clean surfaces with subtle depth, purposeful whitespace, and warm undertones that reduce anxiety during practice.

### Color Palette
```
--bg-primary:      #FAFBFC   (main background)
--bg-secondary:    #FFFFFF   (card/surface)
--bg-dark:         #1A1D24   (dark mode bg)
--bg-dark-secondary: #242830 (dark mode card)

--text-primary:    #1A1D24   (headings)
--text-secondary:  #4A5568   (body)
--text-muted:      #94A3B8   (hints/placeholders)

--accent:          #4F46E5   (primary accent — indigo)
--accent-light:    #EEF2FF   (accent background)
--accent-hover:    #4338CA   (accent hover)

--success:         #10B981   (timer done / correct)
--warning:         #F59E0B   (timer warning)
--danger:          #EF4444   (timer expired)

--border:          #E5E7EB
--border-dark:    #374151
```

### Typography
- **Headings**: "Plus Jakarta Sans" (Google Fonts) — weights 600, 700, 800
- **Body**: "Inter" (Google Fonts) — weights 400, 500, 600
- **Monospace** (timer): "JetBrains Mono" — weight 500

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Border radius: 8px (cards), 6px (buttons), 12px (modals)
- Max content width: 900px (centered)

### Motion Philosophy
- Page transitions: fade + slide-up, 250ms ease-out
- Card hover: subtle shadow lift + translateY(-2px), 150ms
- Timer pulse: scale 1→1.05→1, 800ms ease-in-out loop
- Progress bars: smooth width transition, 300ms
- Modal: fade + scale(0.95→1), 200ms ease-out
- Staggered list items: 50ms delay between items

### Visual Assets
- Icons: Custom inline SVG, 20×20 default, stroke-based
- No external icon libraries
- Decorative: subtle gradient overlays on header, dot-grid pattern on empty states

---

## 3. Layout & Structure

### Pages
1. **Home** — Hero + quick-start buttons + recent practice stats
2. **Part 1** — Topic grid with question cards
3. **Part 2** — Cue card list with timer integration
4. **Part 3** — Discussion topic cards
5. **Practice** — Full-screen practice mode (selected question + timer + recorder)
6. **Tips** — IELTS Speaking strategies and band descriptors
7. **Settings** — Timer durations, theme toggle

### Navigation
- Fixed sidebar on desktop (collapsed to bottom bar on mobile)
- Logo + app name at top of sidebar
- Navigation items with active state indicator
- Theme toggle at bottom of sidebar

### Responsive Strategy
- Mobile-first
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Sidebar collapses at <768px
- Cards: 1 col mobile, 2 col tablet, 3 col desktop

---

## 4. Features & Interactions

### Part 1 — Topic Cards
- Grid of 17 topics with question sets
- Click topic → expand to show all Q&A pairs
- "Practice" button per topic → opens Practice mode
- Each topic shows estimated Q count

### Part 2 — Cue Cards
- List of 37 cue cards
- Click card → expand full cue card prompt
- Timer preset: 2 minutes
- "Start Practice" button → Practice mode with full card

### Part 3 — Discussion Topics
- 30+ discussion topics grouped by cue card theme
- Expandable cards with suggested discussion points
- "Practice" button → Practice mode

### Practice Mode (Core Feature)
- Full-screen overlay
- Displays current question/cue card
- **Timer**: countdown with visual ring, audio chime at 10s/0s
- **Record button**: Web Audio API recording (visual waveform if possible)
- **Pause/Resume** timer
- **Skip** to next question
- **Band criteria** checklist panel (toggleable)
- **Notes**: free-text area for vocabulary/ideas before speaking
- Close with X or ESC key

### Band Score Criteria Panel
- Collapsible panel showing:
  - Fluency & Coherence
  - Lexical Resource
  - Grammatical Range
  - Pronunciation
- Each criterion has a brief description

### Tips Page
- Tabbed interface: Part 1 / Part 2 / Part 3 strategies
- Band score descriptors (band 5 → 9)
- Common mistakes to avoid
- Useful linking phrases

### Settings
- Timer durations: Part 1 (1 min default), Part 2 (2 min default)
- Dark/Light theme toggle
- Sound effects toggle (on/off)
- LocalStorage persistence
- Reset progress button

### Data Persistence (LocalStorage)
- Last practiced topic
- Timer settings
- Theme preference
- Notes (per topic/cue card)
- Practiced topics/cue cards (array of IDs)
- Bookmarked items (array of IDs)
- Vocabulary per topic/cue card
- Daily challenge date & cue card ID
- Shuffle order state
- Practice history (array of sessions with timestamps)
- Streak data (current streak, last practice date)
- Difficulty ratings (map of topicId -> easy/medium/hard)
- Tag filter state
- Custom lists

### Progress Tracker
- Badge on practiced cards ("Done" indicator)
- Progress stats on home: "X/37 Cue Cards practiced"
- Per-part counters on home page
- Reset progress option in Settings

### Speaking Recorder
- Record button in practice mode (Web Audio API)
- Visual recording indicator
- Playback recorded audio
- Works in practice overlay

### Bookmarks
- Bookmark icon on every card (star icon)
- Bookmarked state persists in localStorage
- "Saved" filter tab on each part page
- Quick access to favorited cue cards

### Search
- Search bar at top of Part 1, Part 2 and Part 3 pages
- Filters cards in real-time as user types
- Filter by bookmarked, done, difficulty (hard)
- Tag filter chips on Part 2 and Part 3 pages
- Tag-based filtering from card title keywords

### Keyboard Shortcuts
- Space / K: Start/Pause timer
- R: Reset timer
- Arrow keys / N/P: Navigate questions
- B: Toggle band criteria
- Esc: Close practice mode
- 1-4: Navigate pages
- T: Go to Tips
- ?: Show shortcuts overlay

### Shuffle Mode
- "Shuffle All" button on Part 2 page
- Randomizes order of all 37 cue cards
- Session-based shuffle (persists during session)
- Reset to original order button

### Vocabulary Builder
- "Add Vocab" button in practice mode
- Panel to type and save key words/phrases
- Persisted per topic/cue card in localStorage
- Delete individual vocab items
- View saved vocab from card body

### Part 2 Follow-up Auto-advance
- After cue card presentation in Part 2 practice
- "Start Speaking" button to proceed to follow-up questions
- No manual next required for follow-ups
- Timer continues through all follow-ups

### Daily Challenge
- "Daily Challenge" card on home page
- Random cue card assigned per calendar day
- "Done" badge if already practiced that day
- Same card persists all day

### Practice History
- Logs every practice session with timestamp
- Streak counter (consecutive days of practice)
- Calendar heatmap showing 90 days of activity
- Per-card last practiced date

### Difficulty Rating
- Easy/Medium/Hard buttons in practice modal
- Rating persists per topic in localStorage
- Color-coded badge on cards
- Filter Part 2 by "Hard" difficulty
- Helps prioritize difficult cards for review

### Tag System
- Predefined tag chips derived from card titles (Part 2)
- Theme-based tags for Part 3
- Click tag to filter cards
- Active/inactive tag state

### Practice Statistics
- Total sessions tracked
- Per-part progress percentages
- Total practice time (estimated from session count)
- Per-card practice count

### Model Answer Showcase
- Example band 7+ answers per topic
- Strategic tips for each cue card
- Vocabulary suggestions

### Vocabulary Highlight
- Click any word in cue card for popup definition
- Simple synonym and usage information

### Common Mistakes Tracker
- Per-part checklist of common errors
- Can tick off during practice
- Helps avoid repeating mistakes

### Calendar Heatmap
- 90-day activity grid on home page
- Color intensity based on sessions per day
- GitHub-style contribution graph

### Achievement System
- Badges: First Practice, Part 1 Done, Part 2 Done, 7-day streak, etc.
- Milestone notifications

### XP & Levels
- Points earned per practice session
- Level progression from Beginner to Master

### Read Aloud Mode
- Text-to-speech for cue card reading
- Play/Pause controls
- Uses browser Web Speech API

### Spaced Repetition
- Suggests cards to revisit based on last practice date
- "Due cards" section on home
- Prioritizes rarely-practiced cards

### Multi-language UI
- Toggle between English and Indonesian interface
- All UI text translatable
- Language preference saved

### Share Card
- Generate shareable link to specific cue card
- Copy link to clipboard

### Export Notes & Vocab
- Download all saved vocabulary as text file
- Export per topic or all at once

### Speaking Rate Analyzer
- Calculate estimated words per minute
- Based on recording duration and word count

### Offline Support (PWA)
- Service worker for offline access
- Installable as app on mobile
- manifest.json configuration
- Picks a random cue card per calendar day
- Shows same card for the whole day
- "Mark as Done" after practicing

### AI Speech-to-Text + Feedback (Gemini API) ✅
- **Speech Recognition**: Web Speech API for real-time transcription during recording (no API needed)
- **Live Transcript**: Shows recognized text as user speaks, with microphone animation
- **Gemini API Integration**: After recording stops, sends transcript + question to Gemini 2.0 Flash for evaluation
- **AI Feedback Panel**: Displays structured feedback with Overall Assessment, Strengths, Areas to Improve, Vocabulary Enhancement, Estimated Band Score
- **Settings**: API key input with validation, saved in localStorage
- **Markdown Rendering**: Simple markdown-to-HTML rendering in feedback panel
- **Loading State**: Animated spinner while waiting for AI response
- **Keyboard**: F key toggles feedback panel (when available)

### Model Answer Showcase ✅
- Example Band 7+ answers per topic with annotations
- Vocabulary highlights with definitions
- Strategic tips for each cue card
- Toggle panel in practice mode (M key)
- 8 cards implemented: p2-01, p2-02, p2-07, p2-17, p2-21, p2-26, p2-30, p2-34

### Statistics Page ✅
- Total sessions, streak, cards practiced stats
- XP & Level system (10 XP/session, 100 XP per level)
- Per-part progress rings (SVG)
- Hard cards list with practice buttons
- Recent sessions log
- 18 achievement badges (unlock conditions)
- Common mistakes checklist (persisted)

---

## 5. Component Inventory

### Navigation Sidebar
- **Default**: Full width on desktop, icon+label
- **Collapsed**: Icon-only on tablet, bottom bar on mobile
- **Active**: Accent color background, bold text

### Topic Card
- **Default**: White surface, subtle border, topic name + question count
- **Hover**: Shadow lift, border color → accent
- **Active/Expanded**: Full height, questions visible, accent left border
- **Empty**: N/A (all topics have content)

### Cue Card
- **Default**: White card, title + brief cue
- **Hover**: Shadow lift
- **Expanded**: Full cue card text + action buttons
- **Practiced**: Subtle checkmark badge

### Timer
- **Default**: Circular ring, minutes:seconds in center
- **Running**: Ring animates (decreasing stroke-dashoffset)
- **Warning (<30s)**: Ring color → warning
- **Critical (<10s)**: Ring color → danger, pulse animation
- **Done**: Ring color → success, gentle shake + sound

### Record Button
- **Idle**: Microphone icon, accent outline
- **Recording**: Pulsing red dot, animated ring
- **Hover**: Scale up slightly

### Band Criteria Card
- **Collapsed**: Title + chevron
- **Expanded**: Full description, examples

### Button Variants
- **Primary**: Accent bg, white text
- **Secondary**: Transparent, accent text + border
- **Ghost**: Transparent, text only
- **Danger**: Red bg (for reset/clear actions)
- **All**: Hover scale(0.98), active scale(0.96)

### Modal / Practice Overlay
- Backdrop blur + dark overlay
- Centered card, max-width 800px
- Smooth enter/exit animation

---

## 6. Technical Approach

### Stack
- **Vanilla HTML5, CSS3, JavaScript (ES6+)**
- No frameworks — maximum simplicity and portability
- Single-page application behavior via JS routing

### Architecture
```
/
├── index.html           # Single HTML entry, loads all sections
├── manifest.json         # PWA manifest for installable app
├── sw.js                # Service worker for offline support
├── css/
│   ├── main.css         # Reset, variables, typography, utilities
│   ├── components.css   # Reusable UI components
│   └── pages.css         # Page-specific layouts
├── js/
│   ├── app.js           # Main app, router, navigation, i18n
│   ├── data.js          # All IELTS content + model answers
│   ├── timer.js         # Timer logic + audio
│   └── recorder.js      # Web Audio API recorder
└── assets/
    └── icons/           # Inline SVG strings
```

### Routing
- Hash-based routing (#home, #part1, #part2, #part3, #tips, #settings, #stats)
- History state for back button support

### Data Model
- All content stored in `data.js` as JS objects
- Topics: `{ id, title, questions: [{ q, hints }] }`
- CueCards: `{ id, title, cue, followUps: [] }`
- DiscussionTopics: `{ id, theme, title, points: [] }`

### Storage
- LocalStorage for settings and progress
- Key: `ielts-speaking-state`
- Value: JSON `{ theme, timerSettings, notes: {}, practiced: [] }`

### Browser Support
- Modern browsers (Chrome, Firefox, Edge, Safari latest 2 versions)
- Graceful degradation for Web Audio API (recorder)

