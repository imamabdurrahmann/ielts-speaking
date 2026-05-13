/**
 * IELTS Speaking Practice — Service Worker
 * Offline support for PWA
 */

var CACHE_NAME = 'ielts-speaking-v1';
var STATIC_ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './css/components.css',
  './css/pages.css',
  './js/app.js',
  './js/data.js',
  './js/timer.js',
  './js/recorder.js',
  './manifest.json'
];

// Install: cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  var url = event.request.url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) return;

  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      // Return cached if available
      if (cachedResponse) {
        // Fetch in background to update cache
        event.waitUntil(
          fetch(event.request).then(function(networkResponse) {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(function() {})
        );
        return cachedResponse;
      }

      // Not in cache — fetch from network
      return fetch(event.request).then(function(networkResponse) {
        // Cache successful responses
        if (networkResponse && networkResponse.status === 200) {
          var responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(function() {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
