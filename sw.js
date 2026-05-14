/**
 * IELTS Speaking Practice — Enhanced Service Worker
 * Complete offline support with predictive caching and background sync
 */

var CACHE_VERSION = 'v2.0.0';
var CACHE_NAME = 'ielts-speaking-' + CACHE_VERSION;

// Core assets that must be cached immediately
var CORE_ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './css/components.css',
  './css/pages.css',
  './js/app.js',
  './js/data.js',
  './js/timer.js',
  './js/recorder.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/apple-touch-icon.svg',
  './icons/maskable-icon.svg'
];

// Dynamic cache for data and recordings
var DATA_CACHE_NAME = 'ielts-data-' + CACHE_VERSION;
var RECORDINGS_CACHE_NAME = 'ielts-recordings-' + CACHE_VERSION;
var SESSIONS_CACHE_NAME = 'ielts-sessions-' + CACHE_VERSION;

// Background sync tag
var SYNC_TAG = 'ielts-sync';

// Install: cache core assets and trigger data fetch
self.addEventListener('install', function(event) {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    Promise.all([
      // Cache core assets
      caches.open(CACHE_NAME).then(function(cache) {
        console.log('[SW] Caching core assets');
        return cache.addAll(CORE_ASSETS);
      }),
      // Pre-cache data for offline access
      precacheAppData()
    ]).then(function() {
      console.log('[SW] Installation complete, skipping waiting');
      return self.skipWaiting();
    })
  );
});

// Activate: clean old caches and claim clients
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      var deletions = cacheNames
        .filter(function(name) {
          return name.startsWith('ielts-') &&
                 name !== CACHE_NAME &&
                 name !== DATA_CACHE_NAME &&
                 name !== RECORDINGS_CACHE_NAME &&
                 name !== SESSIONS_CACHE_NAME;
        })
        .map(function(name) {
          console.log('[SW] Deleting old cache:', name);
          return caches.delete(name);
        });

      return Promise.all(deletions);
    }).then(function() {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch: intelligent caching strategy
self.addEventListener('fetch', function(event) {
  var request = event.request;
  var url = new URL(request.url);

  // Skip non-GET requests (except for IndexedDB operations)
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  // Skip external requests (but cache Google Fonts)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.')) return;

  event.respondWith(
    caches.match(request).then(function(cachedResponse) {
      if (cachedResponse) {
        // Update cache in background (stale-while-revalidate)
        event.waitUntil(
          updateCache(request).catch(function() {})
        );
        return cachedResponse;
      }

      // Not in cache - fetch and cache
      return fetchAndCache(request);
    })
  );
});

// Background sync for recording data
self.addEventListener('sync', function(event) {
  if (event.tag === SYNC_TAG) {
    console.log('[SW] Background sync triggered');
    event.waitUntil(syncPendingData());
  }
});

// Message handler for communication with main app
self.addEventListener('message', function(event) {
  var data = event.data;

  if (data.type === 'CACHE_RECORDING') {
    cacheRecording(data.blob, data.id);
  } else if (data.type === 'CACHE_SESSION') {
    cachePracticeSession(data.session);
  } else if (data.type === 'UPDATE_PRELOAD') {
    updatePreloadQueue(data.currentId, data.part);
  } else if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ==========================================
// Helper Functions
// ==========================================

function precacheAppData() {
  console.log('[SW] Pre-caching app data for offline use');

  return caches.open(DATA_CACHE_NAME).then(function(cache) {
    // Add empty placeholder for data cache
    // Actual data is bundled in app.js, so this just ensures cache exists
    return cache.put('./data-placeholder', new Response(JSON.stringify({
      precached: true,
      timestamp: Date.now()
    })));
  });
}

function updateCache(request) {
  return fetch(request.clone()).then(function(response) {
    if (response && response.status === 200) {
      return caches.open(CACHE_NAME).then(function(cache) {
        return cache.put(request, response.clone());
      });
    }
    return response;
  });
}

function fetchAndCache(request) {
  return fetch(request).then(function(response) {
    if (!response || response.status !== 200) {
      // Return offline fallback for navigation requests
      if (request.mode === 'navigate') {
        return caches.match('./index.html');
      }
      return response;
    }

    // Cache successful responses
    var responseClone = response.clone();
    caches.open(CACHE_NAME).then(function(cache) {
      cache.put(request, responseClone);
    });

    return response;
  }).catch(function(error) {
    console.log('[SW] Fetch failed, trying cache:', error);
    return caches.match(request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      // Offline fallback for navigation
      if (request.mode === 'navigate') {
        return caches.match('./index.html');
      }
      return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    });
  });
}

function cacheRecording(blob, id) {
  console.log('[SW] Caching recording:', id);

  caches.open(RECORDINGS_CACHE_NAME).then(function(cache) {
    var response = new Response(blob, {
      headers: {
        'Content-Type': blob.type || 'audio/webm',
        'X-Recording-Id': id,
        'X-Cached-At': Date.now().toString()
      }
    });
    return cache.put('./recordings/' + id, response);
  }).then(function() {
    // Notify clients that recording is cached
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        client.postMessage({
          type: 'RECORDING_CACHED',
          id: id
        });
      });
    });

    // Trigger background sync if online
    if (navigator.onLine) {
      self.registration.sync.register(SYNC_TAG);
    }
  });
}

function cachePracticeSession(session) {
  console.log('[SW] Caching practice session:', session.id);

  caches.open(SESSIONS_CACHE_NAME).then(function(cache) {
    var response = new Response(JSON.stringify(session), {
      headers: {
        'Content-Type': 'application/json',
        'X-Session-Id': session.id,
        'X-Cached-At': Date.now().toString()
      }
    });
    return cache.put('./sessions/' + session.id, response);
  });

  // Also store in IndexedDB for more complex queries
  return openIndexedDB().then(function(db) {
    var tx = db.transaction('sessions', 'readwrite');
    var store = tx.objectStore('sessions');
    store.put(Object.assign({}, session, { cachedAt: Date.now() }));
    return tx.complete;
  });
}

// Preload queue management for next card prediction
var preloadQueue = [];

function updatePreloadQueue(currentId, part) {
  console.log('[SW] Updating preload queue for:', currentId, part);

  // Find next card ID based on current position
  var nextId = predictNextCard(currentId, part);

  if (nextId) {
    preloadQueue.push(nextId);
    // Keep only next 3 cards in queue
    if (preloadQueue.length > 3) {
      preloadQueue = preloadQueue.slice(-3);
    }

    // Preload next card data
    if (nextId) {
      caches.open(DATA_CACHE_NAME).then(function(cache) {
        // Store preloaded card info
        cache.put('./preload/' + nextId, new Response(JSON.stringify({
          id: nextId,
          part: part,
          preloadedAt: Date.now()
        })));
      });
    }

    // Notify clients of preload update
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        client.postMessage({
          type: 'PRELOAD_UPDATED',
          nextId: nextId,
          queue: preloadQueue
        });
      });
    });
  }
}

function predictNextCard(currentId, part) {
  // Simple prediction: assume sequential order
  var match = currentId.match(/p(\d+)-(\d+)/);
  if (!match) return null;

  var partNum = match[1];
  var cardNum = parseInt(match[2], 10);

  // Predict next card number
  var nextNum = cardNum + 1;

  // Return next card ID (app will validate if it exists)
  return 'p' + partNum + '-' + String(nextNum).padStart(2, '0');
}

function syncPendingData() {
  console.log('[SW] Syncing pending data...');

  // This would be implemented to sync cached recordings
  // to a backend server when connection is restored

  return caches.open(RECORDINGS_CACHE_NAME).then(function(cache) {
    return cache.keys();
  }).then(function(requests) {
    console.log('[SW] Found', requests.length, 'recordings to sync');
    // Implement actual sync logic here
    // For now, just log that sync was attempted
    return Promise.resolve();
  });
}

function openIndexedDB() {
  return new Promise(function(resolve, reject) {
    var request = indexedDB.open('ielts-speaking', 1);

    request.onerror = function() {
      reject(request.error);
    };

    request.onsuccess = function() {
      resolve(request.result);
    };

    request.onupgradeneeded = function(event) {
      var db = event.target.result;

      // Sessions store
      if (!db.objectStoreNames.contains('sessions')) {
        db.createObjectStore('sessions', { keyPath: 'id' });
      }

      // Vocabulary store
      if (!db.objectStoreNames.contains('vocabulary')) {
        db.createObjectStore('vocabulary', { keyPath: 'id', autoIncrement: true });
      }

      // Stats store
      if (!db.objectStoreNames.contains('stats')) {
        db.createObjectStore('stats', { keyPath: 'id' });
      }

      // Sync queue store
      if (!db.objectStoreNames.contains('syncQueue')) {
        db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

// Periodic sync (if supported)
self.addEventListener('periodicsync', function(event) {
  if (event.tag === 'ielts-sync-periodic') {
    console.log('[SW] Periodic sync triggered');
    event.waitUntil(syncPendingData());
  }
});

// Push notification handler (for future use)
self.addEventListener('push', function(event) {
  if (!event.data) return;

  var data = event.data.json();

  event.waitUntil(
    self.registration.showNotification(data.title || 'IELTS Speaking', {
      body: data.body || 'Time to practice!',
      icon: './icons/icon-192.svg',
      badge: './icons/icon-192.svg',
      tag: 'ielts-daily',
      requireInteraction: false
    })
  );
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(function(clients) {
      // Focus existing window or open new one
      for (var i = 0; i < clients.length; i++) {
        if (clients[i].url === '/' && 'focus' in clients[i]) {
          return clients[i].focus();
        }
      }
      return self.clients.openWindow('./');
    })
  );
});

console.log('[SW] Service Worker loaded');