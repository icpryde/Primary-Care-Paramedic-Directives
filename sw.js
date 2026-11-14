// Directives v2.0, the web app's offline copy. The phone apps carry everything and never use this.
// The deploy workflow bumps the number below on every push to main, so a new version replaces the saved one.
const CACHE_NAME = 'pcp-directives-v127';
const OWN = CACHE_NAME.replace(/\d+$/, '');            // this app's earlier copies; the archived first app (v1/) has its own name
const SCOPE = self.registration.scope;
const PRECACHE = [
"./",
"index.html",
"manifest.json",
"icons/icon-192.png",
"icons/icon-512.png",
"icons/apple-touch-icon.png",
"img/12-lead-acs-process-flowchart.jpg",
"img/12-lead-ecg.png",
"img/15-lead-v8-v9.png",
"img/bls-dnr-confirmation-form-sample.jpg",
"img/breech-delivery.png",
"img/breech-flowchart.png",
"img/cord-prolapse-management.png",
"img/cord-prolapse-transport.png",
"img/cpap-step1.png",
"img/cpap-step2.png",
"img/cpap-step3.png",
"img/cpr-guidelines-full.png",
"img/cpr-guidelines-thumb.png",
"img/etco2-waveforms.png",
"img/fast-sepsis-prealert-chart.png",
"img/field-trauma-triage-flowchart-full.png",
"img/field-trauma-triage-flowchart-thumb.png",
"img/imist-ambo-full.png",
"img/imist-ambo-thumb.png",
"img/mrsopa-infographic.webp",
"img/newborn-flowchart-full.png",
"img/newborn-flowchart-thumb.png",
"img/omc-patch.jpg",
"img/pads-adult-anterior-lateral.png",
"img/pads-adult-anterior-posterior.png",
"img/pads-pediatric-anterior-posterior.png",
"img/pain-scale.png",
"img/radio-channel-selector.jpg",
"img/rule-of-nines.png",
"img/spinal-motion-restriction-prompt-card-full.png",
"img/spinal-motion-restriction-prompt-card-thumb.png",
"img/trauma-arrest-flowchart-full.png",
"img/trauma-arrest-flowchart-thumb.png",
"img/v4r-ecg.png",
"files/imist-ambo.pdf",
"pdfjs/pdf.min.js",
"pdfjs/pdf.worker.min.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE.map((p) => new URL(p, SCOPE).href))));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.indexOf(OWN) === 0 && k !== CACHE_NAME).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.href.indexOf(SCOPE) !== 0) return;                                 // another site, or another app on this one
  const path = url.href.slice(SCOPE.length);
  if (path.indexOf('v1/') === 0 || path.indexOf('vid/') === 0) return;      // the archived first app; skill videos (network)
  if (req.mode === 'navigate') {                                            // the app is one page: any visit gets it
    event.respondWith(caches.match(new URL('index.html', SCOPE).href).then((hit) => hit || fetch(req)));
    return;
  }
  event.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, copy)); }
    return res;
  })));
});
