/**
 * Service Worker — Moe Kyaw Aung Portfolio V144
 * Strategy: Cache First for assets, Network First for HTML
 */

const CACHE_NAME = 'mka-portfolio-v144';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
];

/* ── INSTALL: cache static shell ── */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing V144...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

/* ── ACTIVATE: clear old caches ── */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating V144...');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

/* ── FETCH: serve from cache, fallback to network ── */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests (CDN images etc)
  if (request.method !== 'GET') return;
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      // Cache hit — return immediately
      if (cached) return cached;

      // Miss — fetch from network and cache the response
      return fetch(request)
        .then((response) => {
          // Only cache valid responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          return response;
        })
        .catch(() => {
          // Offline fallback — return cached index.html
          if (request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

