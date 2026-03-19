const CACHE_NAME = 'pcp-directives-v9';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/data/directives.js',
  '/data/companion.js',
  '/data/references.js',
  '/manifest.json',
  '/assets/newborn-flowchart.pdf',
  '/assets/newborn-flowchart-thumb.png',
  '/assets/trauma-arrest-flowchart.pdf',
  '/assets/trauma-arrest-flowchart-thumb.png',
  '/assets/12-lead-ecg.png',
  '/assets/v4r-ecg.png',
  '/assets/15-lead-v8-v9.png',
  '/assets/cpr-guidelines.pdf',
  '/assets/cpr-guidelines-thumb.png',
  '/assets/breech-delivery.png',
  '/assets/breech-flowchart.png',
  '/assets/cord-prolapse-management.png',
  '/assets/cord-prolapse-transport.png',
  '/assets/pain-scale.png',
  '/assets/rule-of-nines.png',
  '/assets/etco2-waveforms.png',
  '/assets/cpap-step1.png',
  '/assets/cpap-step2.png',
  '/assets/cpap-step3.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => cached);
    })
  );
});
