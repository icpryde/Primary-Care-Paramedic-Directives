const CACHE_NAME = 'pcp-directives-v58';
const BASE = (self.location && self.location.hostname === 'icpryde.github.io')
  ? '/Primary-Care-Paramedic-Directives'
  : '';
const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/styles.css',
  BASE + '/app.js',
  BASE + '/data/directives.js',
  BASE + '/data/companion.js',
  BASE + '/data/references.js',
  BASE + '/data/specialEvent.js',
  BASE + '/data/contact.js',
  BASE + '/data/destinationGuidelines.js',
  BASE + '/data/calculators-content.js',
  BASE + '/data/medications.js',
  BASE + '/data/logos.json',
  BASE + '/assets/logos/region-waterloo-paramedic.png',
  BASE + '/assets/logos/halton-paramedic.png',
  BASE + '/assets/logos/niagara-ems.png',
  BASE + '/assets/logos/hamilton-paramedic.png',
  BASE + '/assets/logos/brant-brantford-paramedic.png',
  BASE + '/assets/logos/york-region-paramedic.png',
  BASE + '/assets/logos/peel-paramedic.png',
  BASE + '/assets/logos/oxford-county-paramedic.png',
  BASE + '/assets/logos/guelph-wellington-paramedic.png',
  BASE + '/assets/logos/toronto-paramedic.png',
  BASE + '/manifest.json',
  BASE + '/icons/icon-192.png',
  BASE + '/icons/icon-512.png',
  BASE + '/assets/Paramedic_Directives_logo.png',
  BASE + '/assets/newborn-flowchart.pdf',
  BASE + '/assets/newborn-flowchart-thumb.png',
  BASE + '/assets/trauma-arrest-flowchart.pdf',
  BASE + '/assets/trauma-arrest-flowchart-thumb.png',
  BASE + '/assets/12-lead-ecg.png',
  BASE + '/assets/v4r-ecg.png',
  BASE + '/assets/15-lead-v8-v9.png',
  BASE + '/assets/cpr-guidelines.pdf',
  BASE + '/assets/cpr-guidelines-thumb.png',
  BASE + '/assets/breech-delivery.png',
  BASE + '/assets/breech-flowchart.png',
  BASE + '/assets/cord-prolapse-management.png',
  BASE + '/assets/cord-prolapse-transport.png',
  BASE + '/assets/pain-scale.png',
  BASE + '/assets/rule-of-nines.png',
  BASE + '/assets/etco2-waveforms.png',
  BASE + '/assets/cpap-step1.png',
  BASE + '/assets/cpap-step2.png',
  BASE + '/assets/cpap-step3.png',
  BASE + '/assets/omc-patch.png',
  BASE + '/assets/fast-sepsis-prealert-chart.png',
  BASE + '/assets/field-trauma-triage-prompt-card.pdf',
  BASE + '/assets/field-trauma-triage-flowchart-thumb.png',
  BASE + '/assets/spinal-motion-restriction-prompt-card.pdf',
  BASE + '/assets/spinal-motion-restriction-prompt-card-thumb.png',
  BASE + '/assets/12-lead-acs-process-flowchart.png',
  BASE + '/assets/radio-channel-selector.png'
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
