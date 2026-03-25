// ── PCP Directives App ──────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

// ─── State ──────────────────────────────────────────────────────────────────
const state = {
  history: [],
  /** Screens undone via Back, for swipe-forward (most recent at end). */
  forwardStack: [],
};

const DEFAULT_HEADER_TITLE = 'Medical Directives';
const LOGO_STORAGE_KEY = 'pcpHeaderLogoV1';
/** @type {{ file: string, label?: string }[]} */
let logoManifestLogos = [];
let logoPickerScrollY = 0;

/** Short labels for the top bar — full titles stay on the page body. */
const HEADER_TITLE_ALIASES = {
  'Moderate to Severe Allergic Reaction': 'Severe allergic reaction',
  'Advanced Airway and Tracheostomy Suctioning & Reinsertion': 'Adv airway / trach',
  'Continuous Positive Airway Pressure (CPAP)': 'CPAP',
  'Return of Spontaneous Circulation (ROSC)': 'ROSC',
  'Acute Cardiogenic Pulmonary Edema': 'ACPE',
  'Intravenous and Fluid Therapy': 'IV & fluid therapy',
  'Home Dialysis Emergency Disconnect': 'Dialysis disconnect',
  'Opioid Toxicity and Withdrawal': 'Opioid toxicity',
  'Palliative Care Medical Directive': 'Palliative care',
  'Treat and Discharge (if authorized)': 'Treat & discharge',
  'Considerations for Treat and Discharge (if authorized)': 'Treat & discharge info',
  'Online Medical Consultation (OMC) Patch': 'OMC patch',
  'OMC BHP Number List': 'OMC BHP list',
  'Additional Contact Information Reference': 'Extra contacts',
  'Base Hospital Physician Patching Template': 'BHP patch template',
  'Emergency Dialysis Disconnect Prompt Card': 'Dialysis disconnect card',
  'Rescuer II Compact CPAP System': 'Rescuer II CPAP',
  'Neonatal Pre-ductal Oxygen Saturation': 'Neonatal SpO₂',
  'Physician On-Scene Reference': 'On-scene physician',
  'Croup Medical Directive': 'Croup',
  'Hallucinations or Agitation': 'Hallucination / agitation',
  'Acute Stroke Bypass Protocol': 'Stroke bypass',
  'STEMI Bypass Protocol': 'STEMI bypass',
  'Spinal Motion Restriction Standard': 'SMR standard',
  'BLS Standards — General Standards of Care': 'BLS general',
  'BLS Standards — Medical Standards': 'BLS medical',
  'BLS Standards — Trauma Standards': 'BLS trauma',
  'BLS Standards — Obstetrical Standards': 'BLS obstetrical',
  'Terminal Congested Breathing': 'Terminal congestion',
  'Suspected Adrenal Crisis': 'Adrenal crisis',
  'Lateral Patellar Dislocation': 'Patellar dislocation',
  'Subcutaneous Line Placement': 'Subcut. line placement',
};

function trimHeaderTitle(str, max = 22) {
  if (!str || str.length <= max) return str;
  let cut = str.slice(0, max - 1);
  const sp = cut.lastIndexOf(' ');
  if (sp > 8) cut = cut.slice(0, sp);
  return `${cut}…`;
}

/** Object with optional .navTitle / .title, or a plain string. */
function headerTitleFromItem(obj) {
  if (obj == null) return DEFAULT_HEADER_TITLE;
  if (typeof obj === 'string') {
    if (HEADER_TITLE_ALIASES[obj]) return HEADER_TITLE_ALIASES[obj];
    return trimHeaderTitle(obj, 24);
  }
  if (obj.navTitle) return obj.navTitle;
  const t = obj.title;
  if (!t) return DEFAULT_HEADER_TITLE;
  if (HEADER_TITLE_ALIASES[t]) return HEADER_TITLE_ALIASES[t];
  return trimHeaderTitle(t, 24);
}

/** Sticky search: filter a flat list of `.directive-row` by `.directive-row-title`. */
function bindFlatListSearch(inputId, listId) {
  const input = $(inputId);
  const list = $(listId);
  if (!input || !list || input.dataset.bound) return;
  input.dataset.bound = '1';
  input.addEventListener('input', e => {
    const q = e.target.value.trim();
    if (!q) {
      list.querySelectorAll('.directive-row').forEach(r => { r.style.display = ''; });
      return;
    }
    const lq = q.toLowerCase();
    list.querySelectorAll('.directive-row').forEach(row => {
      const title = row.querySelector('.directive-row-title')?.textContent.toLowerCase() || '';
      row.style.display = title.includes(lq) ? '' : 'none';
    });
  });
}

/** Add clear (X) button to every `.search-bar` search input; toggles with text. */
function initSearchClearButtons() {
  document.querySelectorAll('.search-bar input[type="search"]').forEach(input => {
    if (input.dataset.clearInit) return;
    input.dataset.clearInit = '1';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'search-clear';
    btn.setAttribute('aria-label', 'Clear search');
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
    btn.hidden = !String(input.value || '').trim();
    input.insertAdjacentElement('afterend', btn);
    const syncVisibility = () => {
      btn.hidden = !String(input.value || '').trim();
    };
    input.addEventListener('input', syncVisibility);
    btn.addEventListener('click', () => {
      input.value = '';
      btn.hidden = true;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
    });
  });
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function showView(viewId, title, pushHistory = true) {
  const current = document.querySelector('.view.active');
  if (current) {
    if (pushHistory && current.id !== viewId) {
      state.forwardStack = [];
      state.history.push({ viewId: current.id, title: $('header-title').textContent, scrollY: window.scrollY });
    }
    current.classList.remove('active');
    current.hidden = true;
  }
  const next = $(viewId);
  next.hidden = false;
  next.classList.add('active');
  window.scrollTo(0, 0);

  if (viewId !== 'view-home') {
    const home = $('view-home');
    if (home) {
      home.classList.remove('home-searching');
      const sr = $('search-results');
      if (sr) sr.hidden = true;
      const gs = $('global-search');
      if (gs) {
        gs.value = '';
        gs.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }

  $('header-title').textContent = title || DEFAULT_HEADER_TITLE;
  updateBackButtonVisibility(viewId);
  if (viewId === 'view-presepsis') presepsisRefreshUI();
  if (viewId === 'view-burn') burnRefreshUI();
  if (viewId === 'view-lams') lamsRefreshUI();
  if (viewId === 'view-ped-calc') pedCalcRefresh();
  if (viewId === 'view-o2-duration') o2DurationRefresh();
  if (viewId === 'view-dosage-calc') dosageRefresh();
  if (viewId === 'view-parkland-burn') parklandRefresh();
  if (viewId === 'view-iv-therapy') ivTherapyRefresh();
  if (viewId === 'view-dextrose') dextroseInit();
  if (viewId === 'view-epi-anaphylaxis') epiAnaphylaxisInit();
  if (viewId === 'view-broncho-calc') bronchoCalcInit();
  if (viewId === 'view-croup-calc') croupCalcInit();
  if (viewId === 'view-medications') medicationsSyncAndRender();
}

function goBack() {
  if (!state.history.length) return;
  const cur = document.querySelector('.view.active');
  if (cur) {
    state.forwardStack.push({
      viewId: cur.id,
      title: $('header-title').textContent,
      scrollY: window.scrollY,
    });
  }
  const prev = state.history.pop();
  if (cur) { cur.classList.remove('active'); cur.hidden = true; }
  const target = $(prev.viewId);
  target.hidden = false;
  target.classList.add('active');
  $('header-title').textContent = prev.title;
  updateBackButtonVisibility(target.id);
  requestAnimationFrame(() => window.scrollTo(0, prev.scrollY || 0));
}

function goForward() {
  if (!state.forwardStack.length) return;
  const cur = document.querySelector('.view.active');
  if (cur) {
    state.history.push({
      viewId: cur.id,
      title: $('header-title').textContent,
      scrollY: window.scrollY,
    });
  }
  const next = state.forwardStack.pop();
  if (cur) { cur.classList.remove('active'); cur.hidden = true; }
  const target = $(next.viewId);
  target.hidden = false;
  target.classList.add('active');
  $('header-title').textContent = next.title;
  updateBackButtonVisibility(next.viewId);
  requestAnimationFrame(() => window.scrollTo(0, next.scrollY || 0));
}

function updateBackButtonVisibility(activeViewId) {
  const onHome = activeViewId === 'view-home';
  document.body.classList.toggle('app-on-home', onHome);
  const back = $('back-btn');
  if (back) back.hidden = onHome || state.history.length === 0;
  const brand = $('header-paramedic-brand');
  if (brand) brand.hidden = !onHome;
  const logoBtn = $('header-logo-btn');
  if (logoBtn) logoBtn.hidden = !onHome;
  const helpBtn = $('header-help-btn');
  if (helpBtn) helpBtn.hidden = false;
}

function applyHeaderLogo() {
  const img = $('header-logo-img');
  const placeholder = $('header-logo-placeholder');
  const logoBtn = $('header-logo-btn');
  if (!img || !placeholder) return;

  let stored = '';
  try {
    stored = localStorage.getItem(LOGO_STORAGE_KEY) || '';
  } catch (_) {
    stored = '';
  }

  const entry = stored && logoManifestLogos.find(l => l && l.file === stored);
  if (!entry) {
    img.removeAttribute('src');
    img.hidden = true;
    img.alt = '';
    placeholder.hidden = false;
    if (logoBtn) logoBtn.classList.remove('header-logo-btn--custom');
    return;
  }

  if (logoBtn) logoBtn.classList.add('header-logo-btn--custom');

  img.onerror = () => {
    try {
      localStorage.removeItem(LOGO_STORAGE_KEY);
    } catch (_) { /* ignore */ }
    img.removeAttribute('src');
    img.hidden = true;
    img.alt = '';
    placeholder.hidden = false;
    if (logoBtn) logoBtn.classList.remove('header-logo-btn--custom');
  };

  img.src = entry.file;
  img.alt = entry.label || 'Service logo';
  img.hidden = false;
  placeholder.hidden = true;
}

function buildLogoPickerGrid() {
  const grid = $('logo-picker-grid');
  const emptyMsg = $('logo-picker-empty');
  if (!grid || !emptyMsg) return;
  grid.innerHTML = '';

  if (!logoManifestLogos.length) {
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;

  logoManifestLogos.forEach((item, idx) => {
    if (!item || !item.file) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'logo-picker-choice';
    btn.setAttribute('aria-label', item.label || `Logo ${idx + 1}`);
    const thumb = document.createElement('img');
    thumb.src = item.file;
    thumb.alt = '';
    thumb.decoding = 'async';
    btn.appendChild(thumb);
    if (item.label) {
      const cap = document.createElement('span');
      cap.className = 'logo-picker-choice-label';
      cap.textContent = item.label;
      btn.appendChild(cap);
    }
    btn.addEventListener('click', () => {
      try {
        localStorage.setItem(LOGO_STORAGE_KEY, item.file);
      } catch (_) { /* ignore */ }
      applyHeaderLogo();
      closeLogoPickerModal();
    });
    grid.appendChild(btn);
  });
}

function logoPickerOnTouchMove(e) {
  const modal = $('logo-picker-modal');
  if (!modal || modal.hidden) return;
  const scrollBody = modal.querySelector('.logo-picker-body');
  if (scrollBody && (e.target === scrollBody || scrollBody.contains(e.target))) {
    return;
  }
  e.preventDefault();
}

function openLogoPickerModal() {
  const helpM = $('install-help-modal');
  if (helpM && !helpM.hidden) closeInstallHelpModal();
  const modal = $('logo-picker-modal');
  if (!modal) return;
  logoPickerScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${logoPickerScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.documentElement.classList.add('help-modal-open');
  document.body.classList.add('help-modal-open');
  document.addEventListener('touchmove', logoPickerOnTouchMove, { passive: false });

  buildLogoPickerGrid();
  const closeBtn = modal.querySelector('.logo-picker-close');
  if (closeBtn) closeBtn.focus();
}

function closeLogoPickerModal() {
  const modal = $('logo-picker-modal');
  if (!modal) return;
  document.removeEventListener('touchmove', logoPickerOnTouchMove, { passive: false });

  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('help-modal-open');
  document.body.classList.remove('help-modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  window.scrollTo(0, logoPickerScrollY);

  const logoBtn = $('header-logo-btn');
  if (logoBtn && !logoBtn.hidden) logoBtn.focus();
}

function initLogoPicker() {
  const logoBtn = $('header-logo-btn');
  const modal = $('logo-picker-modal');
  if (!logoBtn || !modal || modal.dataset.bound) return;
  modal.dataset.bound = '1';

  logoBtn.addEventListener('click', () => openLogoPickerModal());
  modal.querySelector('.logo-picker-backdrop')?.addEventListener('click', closeLogoPickerModal);
  modal.querySelector('.logo-picker-close')?.addEventListener('click', closeLogoPickerModal);

  fetch('data/logos.json')
    .then(r => (r.ok ? r.json() : { logos: [] }))
    .then(data => {
      logoManifestLogos = Array.isArray(data.logos) ? data.logos : [];
      buildLogoPickerGrid();
      applyHeaderLogo();
    })
    .catch(() => {
      logoManifestLogos = [];
      buildLogoPickerGrid();
      applyHeaderLogo();
    });
}

let helpModalScrollY = 0;

function helpModalOnTouchMove(e) {
  const modal = $('install-help-modal');
  if (!modal || modal.hidden) return;
  const scrollBody = modal.querySelector('.help-modal-body');
  if (scrollBody && (e.target === scrollBody || scrollBody.contains(e.target))) {
    return;
  }
  e.preventDefault();
}

function openInstallHelpModal() {
  const logoM = $('logo-picker-modal');
  if (logoM && !logoM.hidden) closeLogoPickerModal();
  const modal = $('install-help-modal');
  if (!modal) return;
  helpModalScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${helpModalScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.documentElement.classList.add('help-modal-open');
  document.body.classList.add('help-modal-open');
  document.addEventListener('touchmove', helpModalOnTouchMove, { passive: false });

  const closeBtn = modal.querySelector('.help-modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeInstallHelpModal() {
  const modal = $('install-help-modal');
  if (!modal) return;
  document.removeEventListener('touchmove', helpModalOnTouchMove, { passive: false });

  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('help-modal-open');
  document.body.classList.remove('help-modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  window.scrollTo(0, helpModalScrollY);

  const helpBtn = $('header-help-btn');
  if (helpBtn && !helpBtn.hidden) helpBtn.focus();
}

/** Block pinch-to-zoom globally, except inside the image viewer. */
function setupPinchZoomBlock() {
  const shouldBlockZoom = target => {
    if (document.documentElement.classList.contains('ref-image-viewer-open')) return false;
    return !target?.closest?.('#ref-image-viewer');
  };

  document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1 && shouldBlockZoom(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 1 && shouldBlockZoom(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('gesturestart', function (e) {
    if (shouldBlockZoom(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('gesturechange', function (e) {
    if (shouldBlockZoom(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });
}

/** iOS PWA has no system swipe-back; mimic Safari with edge gestures. */
function setupEdgeSwipeNavigation() {
  const EDGE = 32;
  const SWIPE_MIN = 70;
  let startX = 0;
  let startY = 0;
  let fromLeftEdge = false;
  let fromRightEdge = false;

  document.body.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) {
      fromLeftEdge = fromRightEdge = false;
      return;
    }
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      fromLeftEdge = fromRightEdge = false;
      return;
    }
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    const w = window.innerWidth;
    fromLeftEdge = startX <= EDGE;
    fromRightEdge = startX >= w - EDGE;
  }, { passive: true });

  document.body.addEventListener('touchend', e => {
    if (!fromLeftEdge && !fromRightEdge) return;
    if (e.changedTouches.length !== 1) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) * 1.25) {
      fromLeftEdge = fromRightEdge = false;
      return;
    }
    if (fromLeftEdge && dx > SWIPE_MIN && state.history.length > 0) {
      const onHome = document.querySelector('#view-home.active');
      if (!onHome) goBack();
    } else if (fromRightEdge && dx < -SWIPE_MIN && state.forwardStack.length > 0) {
      goForward();
    }
    fromLeftEdge = fromRightEdge = false;
  }, { passive: true });
}

// ─── Flowchart Viewer ────────────────────────────────────────────────────────
function openFlowchartPdf(pdfUrl) {
  window.open(pdfUrl, '_blank');
}

// ─── Reference image viewer (pinch zoom + pan, in-app for PWA) ───────────────
const refImgViewer = {
  scale: 1,
  tx: 0,
  ty: 0,
  panStart: null,
  lastPinchDist: 0,
};

function setRefImgViewerUIHidden(hidden) {
  const modal = $('ref-image-viewer');
  if (!modal) return;
  modal.classList.toggle('ref-image-viewer-ui-hidden', !!hidden);
}

function refImgViewerApply() {
  const stage = $('ref-image-viewer-stage');
  if (!stage) return;
  stage.style.transform = `translate(${refImgViewer.tx}px, ${refImgViewer.ty}px) scale(${refImgViewer.scale})`;
}

function refImgViewerLayoutFit() {
  const img = $('ref-image-viewer-img');
  if (!img || !img.naturalWidth) return;
  const pad = 12;
  const chrome = 120;
  const vw = window.innerWidth - pad * 2;
  const vh = window.innerHeight - chrome;
  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  const r = Math.min(vw / nw, vh / nh, 1);
  img.style.width = `${nw * r}px`;
  img.style.height = 'auto';
  refImgViewer.scale = 1;
  refImgViewer.tx = 0;
  refImgViewer.ty = 0;
  refImgViewerApply();
}

function openRefImageViewer(src, alt) {
  const modal = $('ref-image-viewer');
  const img = $('ref-image-viewer-img');
  if (!modal || !img) {
    window.open(src, '_blank');
    return;
  }
  refImgViewer.scale = 1;
  refImgViewer.tx = 0;
  refImgViewer.ty = 0;
  refImgViewer.panStart = null;
  refImgViewer.lastPinchDist = 0;
  setRefImgViewerUIHidden(false);
  img.alt = alt || '';
  img.src = src;
  const done = () => refImgViewerLayoutFit();
  img.onload = done;
  if (img.complete && img.naturalWidth) done();
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.documentElement.classList.add('ref-image-viewer-open');
  document.body.classList.add('ref-image-viewer-open');
}

function closeRefImageViewer() {
  const modal = $('ref-image-viewer');
  const img = $('ref-image-viewer-img');
  setRefImgViewerUIHidden(false);
  refImgViewer.panStart = null;
  refImgViewer.lastPinchDist = 0;
  if (modal) {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }
  if (img) {
    img.src = '';
    img.removeAttribute('src');
  }
  document.documentElement.classList.remove('ref-image-viewer-open');
  document.body.classList.remove('ref-image-viewer-open');
}

function refImgTouchDist(a, b) {
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy) || 1;
}

function initRefImageViewer() {
  const outer = $('ref-image-viewer-outer');
  const modal = $('ref-image-viewer');
  if (!outer || !modal || outer.dataset.bound) return;
  outer.dataset.bound = '1';

  const shouldRestoreViewerUI = () =>
    !modal.hidden && document.documentElement.classList.contains('ref-image-viewer-open');

  const restoreViewerUI = () => {
    refImgViewer.panStart = null;
    refImgViewer.lastPinchDist = 0;
    if (shouldRestoreViewerUI()) setRefImgViewerUIHidden(false);
  };

  outer.addEventListener(
    'touchstart',
    e => {
      if (e.touches.length === 1) {
        refImgViewer.lastPinchDist = 0;
        refImgViewer.panStart = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          tx: refImgViewer.tx,
          ty: refImgViewer.ty,
        };
      } else if (e.touches.length === 2) {
        refImgViewer.panStart = null;
        refImgViewer.lastPinchDist = refImgTouchDist(e.touches[0], e.touches[1]);
      }
    },
    { passive: true }
  );

  outer.addEventListener(
    'touchmove',
    e => {
      if (e.touches.length === 1 && refImgViewer.panStart) {
        e.preventDefault();
        setRefImgViewerUIHidden(true);
        refImgViewer.tx =
          refImgViewer.panStart.tx + (e.touches[0].clientX - refImgViewer.panStart.x);
        refImgViewer.ty =
          refImgViewer.panStart.ty + (e.touches[0].clientY - refImgViewer.panStart.y);
        refImgViewerApply();
      } else if (e.touches.length === 2 && refImgViewer.lastPinchDist > 0) {
        e.preventDefault();
        setRefImgViewerUIHidden(true);
        const d = refImgTouchDist(e.touches[0], e.touches[1]);
        const ratio = d / refImgViewer.lastPinchDist;
        refImgViewer.lastPinchDist = d;
        refImgViewer.scale = Math.min(6, Math.max(0.35, refImgViewer.scale * ratio));
        refImgViewerApply();
      }
    },
    { passive: false }
  );

  outer.addEventListener('touchend', e => {
    refImgViewer.panStart = null;
    if (e.touches.length < 2) refImgViewer.lastPinchDist = 0;
    if (e.touches.length === 0) setRefImgViewerUIHidden(false);
  });

  outer.addEventListener('touchcancel', restoreViewerUI);

  outer.addEventListener(
    'wheel',
    e => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.08 : 0.92;
      refImgViewer.scale = Math.min(6, Math.max(0.35, refImgViewer.scale * factor));
      refImgViewerApply();
    },
    { passive: false }
  );

  let drag = null;
  outer.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    setRefImgViewerUIHidden(true);
    drag = { x: e.clientX, y: e.clientY, tx: refImgViewer.tx, ty: refImgViewer.ty };
  });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    refImgViewer.tx = drag.tx + (e.clientX - drag.x);
    refImgViewer.ty = drag.ty + (e.clientY - drag.y);
    refImgViewerApply();
  });
  window.addEventListener('mouseup', () => {
    drag = null;
    setRefImgViewerUIHidden(false);
  });

  window.addEventListener('touchend', e => {
    if (e.touches.length === 0) restoreViewerUI();
  }, { passive: true });
  window.addEventListener('touchcancel', restoreViewerUI, { passive: true });
  window.addEventListener('pointerup', restoreViewerUI, { passive: true });
  window.addEventListener('blur', restoreViewerUI);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') restoreViewerUI();
  });

  outer.addEventListener('dblclick', e => {
    e.preventDefault();
    refImgViewerLayoutFit();
  });

  const img = $('ref-image-viewer-img');
  if (img) img.addEventListener('dragstart', e => e.preventDefault());

  modal.querySelector('.ref-image-viewer-backdrop')?.addEventListener('click', closeRefImageViewer);
  modal.querySelector('.ref-image-viewer-close')?.addEventListener('click', closeRefImageViewer);
  $('ref-image-viewer-fit')?.addEventListener('click', () => refImgViewerLayoutFit());
}

// ─── GCS / Coma Scale Calculator ─────────────────────────────────────────────
function gcsSelect(el) {
  const group = el.dataset.group;
  document.querySelectorAll(`.gcs-option[data-group="${group}"]`).forEach(o => o.classList.remove('selected'));
  el.classList.toggle('selected', true);
  gcsUpdateTotal(group.startsWith('pcs') ? 'pcs' : 'gcs');
}

function gcsUpdateTotal(prefix) {
  const groups = [`${prefix}-eye`, `${prefix}-verbal`, `${prefix}-motor`];
  let total = 0;
  let allSelected = true;
  groups.forEach(g => {
    const sel = document.querySelector(`.gcs-option[data-group="${g}"].selected`);
    if (sel) {
      total += parseInt(sel.dataset.value, 10);
    } else {
      allSelected = false;
    }
  });
  const scoreEl = document.getElementById(`${prefix}-score`);
  if (scoreEl) scoreEl.textContent = allSelected ? total : (total > 0 ? total + '+' : '--');
}

function gcsReset(prefix) {
  const groups = [`${prefix}-eye`, `${prefix}-verbal`, `${prefix}-motor`];
  groups.forEach(g => {
    document.querySelectorAll(`.gcs-option[data-group="${g}"]`).forEach(o => o.classList.remove('selected'));
  });
  const scoreEl = document.getElementById(`${prefix}-score`);
  if (scoreEl) scoreEl.textContent = '--';
}

// ─── LAMS Calculator (Los Angeles Motor Scale) ─────────────────────────────
const lamsState = {
  facial: null,
  arm: null,
  grip: null,
  criteriaOpen: false,
};

const LAMS_SVG_ALERT = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
const LAMS_SVG_INFO = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';

function lamsRefreshUI() {
  const root = $('view-lams');
  if (!root) return;

  root.querySelectorAll('.lams-opt').forEach(btn => {
    const field = btn.dataset.lamsField;
    const v = parseInt(btn.dataset.value, 10);
    const tone = btn.dataset.tone;
    const on = lamsState[field] === v;
    btn.classList.remove('lams-opt--on-green', 'lams-opt--on-yellow', 'lams-opt--on-red');
    if (on) {
      if (tone === 'green') btn.classList.add('lams-opt--on-green');
      else if (tone === 'yellow') btn.classList.add('lams-opt--on-yellow');
      else if (tone === 'red') btn.classList.add('lams-opt--on-red');
    }
  });

  const f = lamsState.facial;
  const a = lamsState.arm;
  const g = lamsState.grip;
  const total = (f !== null ? f : 0) + (a !== null ? a : 0) + (g !== null ? g : 0);
  const complete = f !== null && a !== null && g !== null;

  const numEl = $('lams-total-num');
  const sevEl = $('lams-severity-text');
  const guide = $('lams-guidance');
  const listEl = $('lams-guidance-list');
  const inner = root.querySelector('.lams-guidance-inner');
  const iconEl = $('lams-guidance-icon');
  const critList = $('lams-criteria-list');
  const critBtn = $('lams-criteria-toggle');

  if (numEl) numEl.textContent = String(total);

  if (!complete) {
    if (sevEl) {
      sevEl.textContent = 'Complete all fields';
      sevEl.className = 'lams-severity lams-severity--muted';
    }
    if (guide) guide.hidden = true;
    return;
  }

  if (sevEl) {
    sevEl.className = 'lams-severity ' + (total >= 4 ? 'lams-severity--lvo' : 'lams-severity--std');
    sevEl.textContent = total >= 4 ? 'High Probability of LVO' : 'Standard Stroke Protocol';
  }

  if (guide) guide.hidden = false;
  if (inner) {
    inner.classList.remove('lams-guidance--high', 'lams-guidance--std');
    inner.classList.add(total >= 4 ? 'lams-guidance--high' : 'lams-guidance--std');
  }
  if (iconEl) iconEl.innerHTML = total >= 4 ? LAMS_SVG_ALERT : LAMS_SVG_INFO;

  if (listEl) {
    if (total >= 4) {
      listEl.innerHTML =
        '<li><span class="lams-g-li-num">1.</span> Classify patient as <strong>CTAS 2</strong>.</li>' +
        '<li><span class="lams-g-li-num">2.</span> Inform receiving hospital: <strong>“LVO Clinical Screen is positive”</strong>.</li>' +
        '<li><span class="lams-g-li-num">3.</span> Consider redirect to closest EVT centre (if within 6 hours of onset, in select regions).</li>';
    } else {
      listEl.innerHTML =
        '<li><span class="lams-g-li-num">1.</span> Inform receiving hospital: <strong>“LVO Clinical Screen is negative”</strong>.</li>' +
        '<li><span class="lams-g-li-num">2.</span> Transport to the closest or most appropriate Designated Stroke Centre (DSC).</li>';
    }
  }

  if (critList) critList.hidden = !lamsState.criteriaOpen;
  if (critBtn) {
    critBtn.setAttribute('aria-expanded', lamsState.criteriaOpen ? 'true' : 'false');
    critBtn.classList.toggle('lams-criteria-toggle--open', lamsState.criteriaOpen);
  }
}

function lamsReset() {
  lamsState.facial = lamsState.arm = lamsState.grip = null;
  lamsState.criteriaOpen = false;
  const critList = $('lams-criteria-list');
  const critBtn = $('lams-criteria-toggle');
  if (critList) critList.hidden = true;
  if (critBtn) {
    critBtn.setAttribute('aria-expanded', 'false');
    critBtn.classList.remove('lams-criteria-toggle--open');
  }
  lamsRefreshUI();
}

function initLamsTool() {
  const root = $('view-lams');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  root.querySelectorAll('.lams-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.dataset.lamsField;
      const value = parseInt(btn.dataset.value, 10);
      lamsState[field] = value;
      lamsRefreshUI();
    });
  });

  $('lams-reset-btn')?.addEventListener('click', lamsReset);

  $('lams-criteria-toggle')?.addEventListener('click', () => {
    lamsState.criteriaOpen = !lamsState.criteriaOpen;
    lamsRefreshUI();
  });
}

// ─── Pediatric Values Calculator ─────────────────────────────────────────────
function pedCalcGetVitals(value, timeUnit) {
  if (timeUnit === 'months') {
    if (value <= 3) return { rr: '30–60', hr: '90–180' };
    if (value <= 6) return { rr: '30–60', hr: '80–160' };
    if (value <= 12) return { rr: '25–45', hr: '80–140' };
    return { rr: '20–30', hr: '75–130' };
  }
  if (value < 1) return { rr: '25–45', hr: '80–140' };
  if (value <= 3) return { rr: '20–30', hr: '75–130' };
  if (value <= 6) return { rr: '16–24', hr: '70–110' };
  return { rr: '14–20', hr: '60–90' };
}

function pedCalcPopulateAgeOptions() {
  const sel = $('ped-calc-age');
  const unitEl = $('ped-calc-unit');
  if (!sel || !unitEl) return;
  const unit = unitEl.value;
  const prev = sel.value;
  sel.innerHTML = '<option value="">Select…</option>';
  if (unit === 'months') {
    for (let i = 0; i <= 11; i += 1) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = String(i);
      sel.appendChild(opt);
    }
  } else {
    for (let i = 1; i <= 12; i += 1) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = String(i);
      sel.appendChild(opt);
    }
  }
  if (prev && [...sel.options].some(o => o.value === prev)) sel.value = prev;
  else sel.value = '';
}

function pedCalcRefresh() {
  const ageSel = $('ped-calc-age');
  const unitSel = $('ped-calc-unit');
  const wEl = $('ped-calc-weight');
  const nEl = $('ped-calc-sbp-norm');
  const hEl = $('ped-calc-sbp-hypo');
  const rrEl = $('ped-calc-rr');
  const hrEl = $('ped-calc-hr');
  const bglEl = $('ped-calc-bgl');
  if (!ageSel || !unitSel) return;

  const raw = ageSel.value;
  const unit = unitSel.value;
  const empty = raw === '';
  const ageNum = empty ? 0 : parseFloat(raw, 10);
  const ageInYears = empty ? 0 : (unit === 'months' ? ageNum / 12 : ageNum);

  const dash = '—';
  if (empty) {
    if (wEl) wEl.textContent = dash;
    if (nEl) nEl.textContent = dash;
    if (hEl) hEl.textContent = dash;
    if (rrEl) rrEl.textContent = dash;
    if (hrEl) hrEl.textContent = dash;
    if (bglEl) bglEl.textContent = dash;
    return;
  }

  const weight = ageInYears * 2 + 10;
  const sbpNorm = Math.round(90 + 2 * ageInYears);
  const sbpHypo = Math.round(70 + 2 * ageInYears);
  const hypoglycemia = ageInYears < 2 ? '< 3.0 mmol/L' : '< 4.0 mmol/L';
  const vitals = pedCalcGetVitals(ageNum, unit);

  if (wEl) {
    wEl.textContent = Number.isInteger(weight) ? String(weight) : weight.toFixed(1);
  }
  if (nEl) nEl.textContent = `≥ ${sbpNorm}`;
  if (hEl) hEl.textContent = `< ${sbpHypo}`;
  if (rrEl) rrEl.textContent = vitals.rr;
  if (hrEl) hrEl.textContent = vitals.hr;
  if (bglEl) bglEl.textContent = hypoglycemia;
}

function pedCalcReset() {
  const ageSel = $('ped-calc-age');
  const unitSel = $('ped-calc-unit');
  if (unitSel) unitSel.value = 'years';
  pedCalcPopulateAgeOptions();
  if (ageSel) ageSel.value = '';
  pedCalcRefresh();
}

function initPedCalcTool() {
  const root = $('view-ped-calc');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  pedCalcPopulateAgeOptions();

  $('ped-calc-unit')?.addEventListener('change', () => {
    $('ped-calc-age').value = '';
    pedCalcPopulateAgeOptions();
    pedCalcRefresh();
  });

  $('ped-calc-age')?.addEventListener('change', pedCalcRefresh);

  $('ped-calc-reset-btn')?.addEventListener('click', pedCalcReset);
}

// ─── Oxygen tank duration (psi × factor ÷ L/min) ───────────────────────────
function o2DurationFormatTime(totalMinutes) {
  if (totalMinutes === null) return '—';
  if (totalMinutes === 0) return '0 minutes (tank empty / too low)';
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) return `${hours} hr ${minutes} min`;
  return `${minutes} minutes`;
}

function o2DurationRefresh() {
  const gaugeEl = $('o2-gauge');
  const residualEl = $('o2-residual');
  const flowEl = $('o2-flow');
  const unitEl = $('o2-flow-unit');
  const cylEl = $('o2-cylinder');
  const customEl = $('o2-custom');
  const hintEl = $('o2-lpm-hint');
  const emptyEl = $('o2-result-empty');
  const valuesEl = $('o2-result-values');
  const minsEl = $('o2-duration-mins');
  const fmtEl = $('o2-duration-formatted');
  if (!gaugeEl || !residualEl || !flowEl || !unitEl || !cylEl) return;

  const gaugePressure = gaugeEl.value;
  const safeResidual = residualEl.value;
  const flowRateStr = flowEl.value;
  const flowUnit = unitEl.value;
  const cylinderFactorVal = cylEl.value;
  const customFactorStr = customEl?.value ?? '';

  const p = parseFloat(gaugePressure);
  const r = parseFloat(safeResidual);
  let f = parseFloat(flowRateStr);

  if (flowUnit === 'percent' && !Number.isNaN(f)) {
    f = (f - 20) / 4;
  }

  let c = parseFloat(cylinderFactorVal);
  if (cylinderFactorVal === 'custom') {
    c = parseFloat(customFactorStr);
  }

  if (hintEl) {
    if (flowUnit === 'percent' && flowRateStr !== '' && !Number.isNaN(parseFloat(flowRateStr))) {
      const lpm = Math.max(0, (parseFloat(flowRateStr) - 20) / 4);
      hintEl.textContent = `Calculated as ${lpm.toFixed(1)} L/min`;
      hintEl.hidden = false;
    } else {
      hintEl.hidden = true;
    }
  }

  let duration = null;
  if (!Number.isNaN(p) && !Number.isNaN(r) && !Number.isNaN(f) && !Number.isNaN(c) && f > 0 && p > r && c > 0) {
    duration = Math.floor(((p - r) * c) / f);
  } else if (p <= r && !Number.isNaN(p) && !Number.isNaN(r) && gaugePressure !== '') {
    duration = 0;
  }

  if (duration !== null) {
    if (emptyEl) emptyEl.hidden = true;
    if (valuesEl) valuesEl.hidden = false;
    if (minsEl) minsEl.textContent = String(duration);
    if (fmtEl) fmtEl.textContent = o2DurationFormatTime(duration);
  } else {
    if (emptyEl) emptyEl.hidden = false;
    if (valuesEl) valuesEl.hidden = true;
  }
}

function o2DurationReset() {
  const gaugeEl = $('o2-gauge');
  const residualEl = $('o2-residual');
  const flowEl = $('o2-flow');
  const unitEl = $('o2-flow-unit');
  const cylEl = $('o2-cylinder');
  const customEl = $('o2-custom');
  const wrap = $('o2-custom-wrap');
  if (gaugeEl) gaugeEl.value = '';
  if (residualEl) residualEl.value = '500';
  if (flowEl) flowEl.value = '';
  if (unitEl) unitEl.value = 'lpm';
  if (cylEl) cylEl.value = '0.16';
  if (customEl) customEl.value = '';
  if (wrap) wrap.hidden = true;
  o2DurationUpdateFlowPlaceholder();
  o2DurationRefresh();
}

function o2DurationUpdateFlowPlaceholder() {
  const flow = $('o2-flow');
  const unit = $('o2-flow-unit');
  if (flow && unit) flow.placeholder = unit.value === 'percent' ? 'e.g. 32' : 'e.g. 15';
}

function initO2DurationTool() {
  const root = $('view-o2-duration');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  const onChange = () => o2DurationRefresh();
  ['o2-gauge', 'o2-residual', 'o2-flow', 'o2-custom'].forEach(id => {
    $(id)?.addEventListener('input', onChange);
  });
  $('o2-flow-unit')?.addEventListener('change', () => {
    o2DurationUpdateFlowPlaceholder();
    onChange();
  });
  o2DurationUpdateFlowPlaceholder();
  $('o2-cylinder')?.addEventListener('change', () => {
    const wrap = $('o2-custom-wrap');
    const cyl = $('o2-cylinder');
    if (wrap && cyl) wrap.hidden = cyl.value !== 'custom';
    onChange();
  });
  $('o2-reset-btn')?.addEventListener('click', o2DurationReset);

  const wrap = $('o2-custom-wrap');
  const cyl = $('o2-cylinder');
  if (wrap && cyl) wrap.hidden = cyl.value !== 'custom';
  o2DurationRefresh();
}

// ─── Weight converter (lbs ↔ kg) ───────────────────────────────────────────
const WT_LB_PER_KG = 2.20462;

function wtFromLbs() {
  const lbsEl = $('wt-lbs');
  const kgEl = $('wt-kg');
  if (!lbsEl || !kgEl) return;
  const raw = lbsEl.value.trim();
  if (raw === '') {
    kgEl.value = '';
    return;
  }
  const n = parseFloat(raw);
  if (Number.isNaN(n)) {
    kgEl.value = '';
    return;
  }
  kgEl.value = (n / WT_LB_PER_KG).toFixed(2);
}

function wtFromKg() {
  const lbsEl = $('wt-lbs');
  const kgEl = $('wt-kg');
  if (!lbsEl || !kgEl) return;
  const raw = kgEl.value.trim();
  if (raw === '') {
    lbsEl.value = '';
    return;
  }
  const n = parseFloat(raw);
  if (Number.isNaN(n)) {
    lbsEl.value = '';
    return;
  }
  lbsEl.value = (n * WT_LB_PER_KG).toFixed(2);
}

function wtReset() {
  const lbsEl = $('wt-lbs');
  const kgEl = $('wt-kg');
  if (lbsEl) lbsEl.value = '';
  if (kgEl) kgEl.value = '';
}

function initWeightConvertTool() {
  const root = $('view-weight-convert');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';
  $('wt-lbs')?.addEventListener('input', wtFromLbs);
  $('wt-kg')?.addEventListener('input', wtFromKg);
  $('wt-reset-btn')?.addEventListener('click', wtReset);
}

// ─── Medical dosage calculator (Want ÷ Have) × Vol ───────────────────────────
function dosageFmt(num) {
  return Math.round(num * 1000) / 1000;
}

function dosageGetActiveType() {
  const on = document.querySelector('.dosage-tab--on');
  return (on && on.dataset.dosageType) || 'custom';
}

function dosageSetTab(type) {
  document.querySelectorAll('.dosage-tab').forEach(btn => {
    const on = btn.dataset.dosageType === type;
    btn.classList.toggle('dosage-tab--on', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  const panels = {
    custom: $('dosage-panel-custom'),
    cr: $('dosage-panel-cr'),
    sd: $('dosage-panel-sd'),
    spercent: $('dosage-panel-spercent'),
  };
  Object.entries(panels).forEach(([key, el]) => {
    if (el) el.hidden = key !== type;
  });
}

function dosageReadState() {
  return {
    wantAmount: $('dosage-want-amount')?.value ?? '',
    wantUnit: $('dosage-want-unit')?.value ?? 'mg',
    calcType: dosageGetActiveType(),
    haveAmount: $('dosage-have-amount')?.value ?? '',
    haveUnit: $('dosage-have-unit')?.value ?? 'mg',
    haveVolume: $('dosage-have-vol')?.value ?? '',
    haveVolumeUnit: $('dosage-have-vol-unit')?.value ?? 'mL',
    crAmount: $('dosage-cr')?.value ?? '',
    sdVolume: $('dosage-sd-vol')?.value ?? '',
    sPercent: $('dosage-s-percent')?.value ?? '',
  };
}

function dosageCompute(state) {
  const want = parseFloat(state.wantAmount);
  if (Number.isNaN(want) || want <= 0) return null;

  let workHave = 0;
  let actualHaveUnit = 'mg';
  let workVol = 0;
  const typeSteps = [];

  if (state.calcType === 'custom') {
    workHave = parseFloat(state.haveAmount);
    actualHaveUnit = state.haveUnit;
    workVol = parseFloat(state.haveVolume);
    const actualVolUnit = state.haveVolumeUnit;
    if (Number.isNaN(workHave) || workHave <= 0 || Number.isNaN(workVol) || workVol <= 0) return null;
    if (actualVolUnit === 'L') workVol *= 1000;
  } else if (state.calcType === 'cr') {
    workHave = parseFloat(state.crAmount);
    actualHaveUnit = 'mg';
    workVol = 1;
    if (Number.isNaN(workHave) || workHave <= 0) return null;
    typeSteps.push({
      title: 'Decode concentration ratio (CR)',
      desc: `A ratio of ${dosageFmt(workHave)} mg/mL means there are ${dosageFmt(workHave)} mg of medication in every 1 mL of fluid.`,
    });
  } else if (state.calcType === 'sd') {
    workHave = 1;
    actualHaveUnit = 'g';
    workVol = parseFloat(state.sdVolume);
    if (Number.isNaN(workVol) || workVol <= 0) return null;
    typeSteps.push({
      title: 'Decode standard dilution (SD)',
      desc: `A 1:${dosageFmt(workVol)} dilution means there is 1 g of medication in every ${dosageFmt(workVol)} mL of fluid.`,
    });
  } else if (state.calcType === 'spercent') {
    workHave = parseFloat(state.sPercent);
    actualHaveUnit = 'g';
    workVol = 100;
    if (Number.isNaN(workHave) || workHave <= 0) return null;
    typeSteps.push({
      title: 'Decode solution percentage (S%)',
      desc: `A ${dosageFmt(workHave)}% solution means there are ${dosageFmt(workHave)} g of medication in every 100 mL of fluid.`,
    });
  } else {
    return null;
  }

  let workWant = want;
  let conversionStep = null;
  if (state.wantUnit !== actualHaveUnit) {
    if (state.wantUnit === 'g' && actualHaveUnit === 'mg') workWant = want * 1000;
    if (state.wantUnit === 'g' && actualHaveUnit === 'mcg') workWant = want * 1000000;
    if (state.wantUnit === 'mg' && actualHaveUnit === 'g') workWant = want / 1000;
    if (state.wantUnit === 'mg' && actualHaveUnit === 'mcg') workWant = want * 1000;
    if (state.wantUnit === 'mcg' && actualHaveUnit === 'g') workWant = want / 1000000;
    if (state.wantUnit === 'mcg' && actualHaveUnit === 'mg') workWant = want / 1000;
    conversionStep = {
      title: 'Unit conversion',
      desc: `Convert dose ordered so units match dose on hand: ${want} ${state.wantUnit} = ${dosageFmt(workWant)} ${actualHaveUnit}`,
    };
  }

  const divisionResult = workWant / workHave;
  const finalVolume = divisionResult * workVol;

  const steps = [
    ...typeSteps,
    ...(conversionStep ? [conversionStep] : []),
    { title: 'The formula', desc: '(Dose ordered ÷ Dose on hand) × volume' },
    {
      title: 'Plug in the values',
      desc: `(${dosageFmt(workWant)} ${actualHaveUnit} ÷ ${dosageFmt(workHave)} ${actualHaveUnit}) × ${dosageFmt(workVol)} mL`,
    },
    {
      title: 'Calculate',
      desc: `${dosageFmt(divisionResult)} × ${dosageFmt(workVol)} mL = ${dosageFmt(finalVolume)} mL`,
    },
  ];

  return { finalVolume: dosageFmt(finalVolume), steps };
}

function dosageRenderTutor(steps) {
  const placeholder = $('dosage-tutor-placeholder');
  const mount = $('dosage-tutor-steps');
  const tip = $('dosage-tutor-tip');
  if (!mount || !placeholder || !tip) return;
  if (!steps || !steps.length) {
    placeholder.hidden = false;
    mount.hidden = true;
    tip.hidden = true;
    mount.innerHTML = '';
    return;
  }
  placeholder.hidden = true;
  mount.hidden = false;
  tip.hidden = false;
  let html = '';
  steps.forEach((step, idx) => {
    const last = idx === steps.length - 1;
    html += `<div class="dosage-step">
      <div class="dosage-step-rail">
        <span class="dosage-step-badge">${idx + 1}</span>
        ${last ? '' : '<span class="dosage-step-line" aria-hidden="true"></span>'}
      </div>
      <div class="dosage-step-body">
        <h4 class="dosage-step-title">${escapeHtml(step.title)}</h4>
        <p class="dosage-step-desc">${escapeHtml(step.desc)}</p>
      </div>
    </div>`;
  });
  mount.innerHTML = html;
}

function dosageRefresh() {
  const calc = dosageCompute(dosageReadState());
  const empty = $('dosage-result-empty');
  const valWrap = $('dosage-result-value');
  const numEl = $('dosage-result-num');
  if (!empty || !valWrap || !numEl) return;
  if (!calc) {
    empty.hidden = false;
    valWrap.hidden = true;
    dosageRenderTutor(null);
    return;
  }
  empty.hidden = true;
  valWrap.hidden = false;
  numEl.textContent = String(calc.finalVolume);
  dosageRenderTutor(calc.steps);
}

function dosageReset() {
  const w = $('dosage-want-amount');
  const wu = $('dosage-want-unit');
  if (w) w.value = '';
  if (wu) wu.value = 'mg';
  dosageSetTab('custom');
  const ha = $('dosage-have-amount');
  const hu = $('dosage-have-unit');
  const hv = $('dosage-have-vol');
  const hvu = $('dosage-have-vol-unit');
  if (ha) ha.value = '';
  if (hu) hu.value = 'mg';
  if (hv) hv.value = '';
  if (hvu) hvu.value = 'mL';
  const cr = $('dosage-cr');
  const sd = $('dosage-sd-vol');
  const sp = $('dosage-s-percent');
  if (cr) cr.value = '';
  if (sd) sd.value = '';
  if (sp) sp.value = '';
  dosageRefresh();
}

function initDosageCalcTool() {
  const root = $('view-dosage-calc');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  document.querySelectorAll('.dosage-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.dosageType;
      if (!t) return;
      dosageSetTab(t);
      dosageRefresh();
    });
  });

  const onInput = () => dosageRefresh();
  [
    'dosage-want-amount', 'dosage-want-unit',
    'dosage-have-amount', 'dosage-have-unit', 'dosage-have-vol', 'dosage-have-vol-unit',
    'dosage-cr', 'dosage-sd-vol', 'dosage-s-percent',
  ].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.addEventListener('input', onInput);
    el.addEventListener('change', onInput);
  });

  $('dosage-reset-btn')?.addEventListener('click', dosageReset);
  dosageSetTab(dosageGetActiveType());
  dosageRefresh();
}

// ─── Parkland burn fluid calculator ──────────────────────────────────────────
function parklandFormatTiming(dripsPerMin) {
  if (!dripsPerMin || dripsPerMin <= 0) return '—';
  const dropsPerSec = dripsPerMin / 60;
  if (dropsPerSec >= 1) {
    return `~${Math.round(dropsPerSec)} drops every second`;
  }
  const secPerDrop = 60 / dripsPerMin;
  return `1 drop every ${Math.round(secPerDrop)} sec`;
}

function parklandCompute() {
  const w = parseFloat(($('parkland-weight')?.value ?? '').trim());
  const bsa = parseFloat(($('parkland-tbsa')?.value ?? '').trim());
  const gtts = parseFloat($('parkland-drop-factor')?.value ?? '10');
  const unit = $('parkland-weight-unit')?.value ?? 'kg';

  if (Number.isNaN(w) || Number.isNaN(bsa) || Number.isNaN(gtts) || w <= 0 || bsa <= 0 || bsa > 100) {
    return null;
  }

  const weightInKg = unit === 'lbs' ? w / 2.2 : w;
  const totalVolume = 4 * weightInKg * bsa;
  const halfVolume = totalVolume / 2;
  const rateFirst8 = halfVolume / 8;
  const rateNext16 = halfVolume / 16;
  const dripFirst8 = (rateFirst8 * gtts) / 60;
  const dripNext16 = (rateNext16 * gtts) / 60;
  const dropsPerSecFirst8 = dripFirst8 / 60;
  const dropsPerSecNext16 = dripNext16 / 60;

  return {
    weightKg: weightInKg,
    totalVolume,
    halfVolume,
    rateFirst8,
    rateNext16,
    dripFirst8,
    dripNext16,
    dropsPerSecFirst8,
    dropsPerSecNext16,
    gtts,
  };
}

function parklandRefresh() {
  const placeholder = $('parkland-placeholder');
  const resultsEl = $('parkland-results');
  if (!placeholder || !resultsEl) return;

  const r = parklandCompute();
  if (!r) {
    placeholder.hidden = false;
    resultsEl.hidden = true;
    return;
  }

  placeholder.hidden = true;
  resultsEl.hidden = false;

  const wkg = $('parkland-weight-kg-line');
  if (wkg) wkg.textContent = `Patient weight: ${r.weightKg.toFixed(1)} kg`;

  const totalEl = $('parkland-total-ml');
  if (totalEl) totalEl.textContent = Math.round(r.totalVolume).toLocaleString();

  const halfStr = `${Math.round(r.halfVolume).toLocaleString()} mL`;
  const h8 = $('parkland-half-8');
  const h16 = $('parkland-half-16');
  if (h8) h8.textContent = halfStr;
  if (h16) h16.textContent = halfStr;

  const rate8 = $('parkland-rate-8');
  const rate16 = $('parkland-rate-16');
  if (rate8) rate8.textContent = `${Math.round(r.rateFirst8)} mL/hr`;
  if (rate16) rate16.textContent = `${Math.round(r.rateNext16)} mL/hr`;

  const d8 = $('parkland-drip-8');
  const d16 = $('parkland-drip-16');
  if (d8) d8.textContent = String(Math.round(r.dripFirst8));
  if (d16) d16.textContent = String(Math.round(r.dripNext16));

  const dps8 = $('parkland-dps-8');
  const dps16 = $('parkland-dps-16');
  if (dps8) dps8.textContent = r.dropsPerSecFirst8.toFixed(2);
  if (dps16) dps16.textContent = r.dropsPerSecNext16.toFixed(2);

  const t8 = $('parkland-timing-8');
  const t16 = $('parkland-timing-16');
  if (t8) t8.textContent = parklandFormatTiming(r.dripFirst8);
  if (t16) t16.textContent = parklandFormatTiming(r.dripNext16);

  const setNote = g => `Using ${g} gtts/mL set`;
  const s8 = $('parkland-set-8');
  const s16 = $('parkland-set-16');
  if (s8) s8.textContent = setNote(r.gtts);
  if (s16) s16.textContent = setNote(r.gtts);
}

function parklandReset() {
  const pw = $('parkland-weight');
  const pu = $('parkland-weight-unit');
  const pt = $('parkland-tbsa');
  const pd = $('parkland-drop-factor');
  if (pw) pw.value = '';
  if (pu) pu.value = 'kg';
  if (pt) pt.value = '';
  if (pd) pd.value = '10';
  parklandRefresh();
}

function initParklandBurnTool() {
  const root = $('view-parkland-burn');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  const onChange = () => parklandRefresh();
  ['parkland-weight', 'parkland-tbsa'].forEach(id => {
    $(id)?.addEventListener('input', onChange);
  });
  $('parkland-weight-unit')?.addEventListener('change', onChange);
  $('parkland-drop-factor')?.addEventListener('change', onChange);

  $('parkland-reset-btn')?.addEventListener('click', parklandReset);
  parklandRefresh();
}

// ─── IV Therapy Calculator (general + PCP-style directives) ────────────────
function ivGetStdDf() {
  const b = document.querySelector('.iv-std-df-btn.iv-drop-btn--on');
  return b?.dataset?.df || '10';
}

function ivGetDirDf() {
  const b = document.querySelector('.iv-dir-df-btn.iv-drop-btn--on');
  return b?.dataset?.df || '10';
}

function ivGetDirType() {
  const b = document.querySelector('.iv-dir-type-btn.iv-dir-type-btn--on');
  return b?.dataset?.ivPreset || 'maintenance';
}

function ivSetStdDf(df) {
  document.querySelectorAll('.iv-std-df-btn').forEach(btn => {
    btn.classList.toggle('iv-drop-btn--on', btn.dataset.df === String(df));
  });
}

function ivSetDirDf(df) {
  document.querySelectorAll('.iv-dir-df-btn').forEach(btn => {
    btn.classList.toggle('iv-drop-btn--on', btn.dataset.df === String(df));
  });
}

function ivSetDirType(type) {
  document.querySelectorAll('.iv-dir-type-btn').forEach(btn => {
    btn.classList.toggle('iv-dir-type-btn--on', btn.dataset.ivPreset === type);
  });
  const ageSel = $('iv-dir-age');
  if (type === 'maintenance' || type === 'bolus_cardio') {
    if (ageSel) ageSel.value = 'adult';
  }
}

function ivSetTab(tab) {
  document.querySelectorAll('.iv-tab').forEach(btn => {
    const on = btn.dataset.ivTab === tab;
    btn.classList.toggle('iv-tab--on', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  const g = $('iv-panel-general');
  const d = $('iv-panel-directive');
  if (g) g.hidden = tab !== 'general';
  if (d) d.hidden = tab !== 'directive';
}

/** Open the IV Therapy calculator pre-set to a specific directive preset. */
function ivDirOpenPreset(preset) {
  ivSetTab('directive');
  ivSetDirType(preset);
  ivDirSyncForm();
  showView('view-iv-therapy', 'IV Therapy');
}

function ivDirSyncForm() {
  const type = ivGetDirType();
  const age = $('iv-dir-age')?.value || 'adult';

  const ageRow = $('iv-dir-age-row');
  const cardioAge = $('iv-dir-cardio-age');
  const pedAgeRow = $('iv-dir-ped-age-row');
  const weightRow = $('iv-dir-weight-row');
  const rateRow = $('iv-dir-rate-row');
  const adminRow = $('iv-dir-admin-row');
  const bolusMeta = $('iv-dir-bolus-meta');

  const isBolus = type === 'bolus_general' || type === 'bolus_cardio';

  if (type === 'bolus_cardio') {
    if (ageRow) ageRow.hidden = true;
    if (cardioAge) cardioAge.hidden = false;
    if (pedAgeRow) pedAgeRow.hidden = true;
  } else {
    if (ageRow) ageRow.hidden = false;
    if (cardioAge) cardioAge.hidden = true;
    if (pedAgeRow) pedAgeRow.hidden = !(age === 'pediatric' && type === 'bolus_general');
  }

  if (weightRow) weightRow.hidden = !isBolus;
  if (rateRow) rateRow.hidden = !(type === 'maintenance' && age === 'adult');
  if (adminRow) adminRow.hidden = !isBolus;
  if (bolusMeta) bolusMeta.hidden = !isBolus;
}

function ivStdRefresh() {
  const vol = parseFloat(($('iv-std-vol')?.value ?? '').trim());
  const tRaw = parseFloat(($('iv-std-time')?.value ?? '').trim());
  const unit = $('iv-std-time-unit')?.value ?? 'minutes';
  const df = parseFloat(ivGetStdDf());

  const gttsEl = $('iv-std-gtts');
  const subFast = $('iv-std-sub-fast');
  const subSlow = $('iv-std-sub-slow');
  const dpsVal = $('iv-std-dps-val');
  const dpsPrac = $('iv-std-dps-practical');
  const spdVal = $('iv-std-spd-val');
  const spdPrac = $('iv-std-spd-practical');

  const valid = vol > 0 && tRaw > 0;
  if (!valid) {
    if (gttsEl) gttsEl.textContent = '0';
    if (subFast) subFast.hidden = true;
    if (subSlow) subSlow.hidden = false;
    if (dpsVal) dpsVal.textContent = '0';
    if (dpsPrac) dpsPrac.textContent = '';
    if (spdVal) spdVal.textContent = '0';
    if (spdPrac) { spdPrac.textContent = ''; spdPrac.hidden = true; }
    return;
  }

  let timeInMins = tRaw;
  if (unit === 'hours') timeInMins = tRaw * 60;

  const gttsPerMin = (vol * df) / timeInMins;
  const gttsMin = Math.round(gttsPerMin);
  const gttsSec = (gttsPerMin / 60).toFixed(2);
  const secGtt = (60 / gttsPerMin).toFixed(1);

  if (gttsEl) gttsEl.textContent = String(gttsMin);

  if (gttsMin >= 60) {
    if (subFast) subFast.hidden = false;
    if (subSlow) subSlow.hidden = true;
    if (dpsVal) dpsVal.textContent = gttsSec;
    if (dpsPrac) dpsPrac.textContent = `~${Math.round(parseFloat(gttsSec))} drops/sec`;
  } else {
    if (subFast) subFast.hidden = true;
    if (subSlow) subSlow.hidden = false;
    if (spdVal) spdVal.textContent = parseFloat(secGtt) > 0 ? secGtt : '0';
    if (spdPrac) {
      if (parseFloat(secGtt) > 0) {
        spdPrac.textContent = `~1 drop every ${Math.round(parseFloat(secGtt))} sec`;
        spdPrac.hidden = false;
      } else {
        spdPrac.textContent = '';
        spdPrac.hidden = true;
      }
    }
  }
}

function ivDirCompute() {
  let volume = 0;
  let max = 0;
  let reassess = 0;
  const notes = [];

  const dirType = ivGetDirType();
  const dirAge = $('iv-dir-age')?.value || 'adult';
  const weight = parseFloat(($('iv-dir-weight')?.value ?? '').trim()) || 0;
  const adminTimeMins = parseFloat(($('iv-dir-admin-mins')?.value ?? '').trim()) || 1;
  const df = parseFloat(ivGetDirDf());
  const rateChoice = parseFloat($('iv-dir-rate')?.value ?? '30');

  if (dirType === 'maintenance') {
    if (dirAge === 'pediatric') {
      volume = 15;
      notes.push('Maintenance rate for 2 to <12 years is 15 mL/hr.');
      notes.push('Microdrips (60 gtts/mL) or volume control should be considered for patients <12 years.');
    } else {
      volume = rateChoice;
      notes.push('Maintenance rate for ≥12 years is 30–60 mL/hr.');
    }
  } else if (dirType === 'bolus_general') {
    if (dirAge === 'pediatric') {
      volume = Math.min(weight * 20, 2000);
      max = 2000;
      reassess = 100;
      notes.push('Fluid Bolus (2 to <12 yrs): 20 mL/kg. Max 2,000 mL.');
      notes.push('Microdrips (60 gtts/mL) or volume control should be considered for patients <12 years.');
    } else {
      volume = Math.min(weight * 20, 2000);
      max = 2000;
      reassess = 250;
      notes.push('Fluid Bolus (≥12 yrs): 20 mL/kg. Max 2,000 mL.');
    }
  } else if (dirType === 'bolus_cardio') {
    volume = Math.min(weight * 10, 1000);
    max = 1000;
    reassess = 250;
    notes.push('Cardiogenic Shock Bolus (≥18 yrs): 10 mL/kg. Max 1,000 mL.');
    notes.push('Condition: Chest auscultation must be clear.');
    notes.push('Contraindication: SBP ≥ 90 mmHg or Fluid overload.');
  }

  let gttsPerMin = 0;
  let gttsPerSec = 0;
  let secPerGtt = 0;

  if (volume > 0) {
    const timeToUse = dirType === 'maintenance' ? 60 : adminTimeMins;
    gttsPerMin = (volume * df) / timeToUse;
    gttsPerSec = gttsPerMin / 60;
    secPerGtt = 60 / gttsPerMin;
  }

  const secGttStr = secPerGtt === Infinity || Number.isNaN(secPerGtt) ? '0' : secPerGtt.toFixed(1);

  return {
    volumeToAdminister: Math.round(volume),
    maxVolume: max,
    reassessVolume: reassess,
    gttsMin: Math.round(gttsPerMin),
    gttsSec: gttsPerSec.toFixed(2),
    secGtt: secGttStr,
    notes,
    dirType,
  };
}

function ivDirRefresh() {
  ivDirSyncForm();
  const r = ivDirCompute();

  const volEl = $('iv-dir-vol');
  const reEl = $('iv-dir-reassess');
  const maxEl = $('iv-dir-max');
  const gttsEl = $('iv-dir-gtts');
  const notesEl = $('iv-dir-notes');

  if (volEl) volEl.textContent = String(r.volumeToAdminister);
  if (reEl) reEl.textContent = String(r.reassessVolume);
  if (maxEl) maxEl.textContent = String(r.maxVolume);
  if (gttsEl) gttsEl.textContent = String(r.gttsMin);

  const pf = $('iv-dir-practical-fast');
  const ps = $('iv-dir-practical-slow');
  const dps = $('iv-dir-dps');
  const dpsPill = $('iv-dir-dps-pill');
  const spd = $('iv-dir-spd');
  const spdPill = $('iv-dir-spd-pill');

  if (r.gttsMin >= 60) {
    if (pf) pf.hidden = false;
    if (ps) ps.hidden = true;
    if (dps) dps.textContent = r.gttsSec;
    if (dpsPill) dpsPill.textContent = `~${Math.round(parseFloat(r.gttsSec))} drops/sec`;
  } else {
    if (pf) pf.hidden = true;
    if (ps) ps.hidden = false;
    const sg = parseFloat(r.secGtt);
    if (spd) spd.textContent = sg > 0 ? r.secGtt : '0';
    if (spdPill) {
      if (sg > 0) {
        spdPill.textContent = `~1 drop / ${Math.round(sg)}s`;
        spdPill.hidden = false;
      } else {
        spdPill.textContent = '';
        spdPill.hidden = true;
      }
    }
  }

  if (notesEl) {
    if (r.notes.length === 0) {
      notesEl.hidden = true;
      notesEl.innerHTML = '';
    } else {
      notesEl.hidden = false;
      notesEl.innerHTML = r.notes.map(note => {
        const warn = note.includes('Contraindication') || note.includes('Microdrips');
        const icon = warn
          ? '<svg class="iv-note-icon iv-note-icon--warn" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>'
          : '<svg class="iv-note-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
        return `<div class="iv-note-row">${icon}<span>${escapeHtml(note)}</span></div>`;
      }).join('');
    }
  }
}

function ivTherapyRefresh() {
  const tab = document.querySelector('.iv-tab.iv-tab--on')?.dataset.ivTab || 'general';
  if (tab === 'general') ivStdRefresh();
  else ivDirRefresh();
}

function ivPedAgeToWeight() {
  const val = ($('iv-dir-ped-age')?.value ?? '').trim();
  const w = $('iv-dir-weight');
  if (!w) return;
  const ageNum = parseFloat(val);
  if (!Number.isNaN(ageNum)) {
    w.value = String(ageNum * 2 + 10);
  } else if (val === '') {
    w.value = '';
  }
}

function ivTherapyReset() {
  ivSetTab('general');
  const v = $('iv-std-vol');
  const t = $('iv-std-time');
  const tu = $('iv-std-time-unit');
  if (v) v.value = '';
  if (t) t.value = '';
  if (tu) tu.value = 'minutes';
  ivSetStdDf('10');

  ivSetDirType('maintenance');
  const age = $('iv-dir-age');
  const pedA = $('iv-dir-ped-age');
  const wt = $('iv-dir-weight');
  const adm = $('iv-dir-admin-mins');
  const rate = $('iv-dir-rate');
  if (age) age.value = 'adult';
  if (pedA) pedA.value = '';
  if (wt) wt.value = '';
  if (adm) adm.value = '60';
  if (rate) rate.value = '30';
  ivSetDirDf('10');

  ivTherapyRefresh();
}

function initIvTherapyTool() {
  const root = $('view-iv-therapy');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  document.querySelectorAll('.iv-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.ivTab;
      if (!tab) return;
      ivSetTab(tab);
      ivTherapyRefresh();
    });
  });

  document.querySelectorAll('.iv-std-df-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ivSetStdDf(btn.dataset.df);
      ivTherapyRefresh();
    });
  });

  document.querySelectorAll('.iv-dir-df-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ivSetDirDf(btn.dataset.df);
      ivTherapyRefresh();
    });
  });

  document.querySelectorAll('.iv-dir-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const typ = btn.dataset.ivPreset;
      if (!typ) return;
      ivSetDirType(typ);
      ivDirSyncForm();
      ivTherapyRefresh();
    });
  });

  ['iv-std-vol', 'iv-std-time'].forEach(id => {
    $(id)?.addEventListener('input', ivTherapyRefresh);
  });
  $('iv-std-time-unit')?.addEventListener('change', ivTherapyRefresh);

  $('iv-dir-age')?.addEventListener('change', () => {
    ivDirSyncForm();
    ivTherapyRefresh();
  });
  $('iv-dir-ped-age')?.addEventListener('input', () => {
    ivPedAgeToWeight();
    ivTherapyRefresh();
  });
  ['iv-dir-weight', 'iv-dir-admin-mins', 'iv-dir-rate'].forEach(id => {
    $(id)?.addEventListener('input', ivTherapyRefresh);
    $(id)?.addEventListener('change', ivTherapyRefresh);
  });

  $('iv-reset-btn')?.addEventListener('click', ivTherapyReset);
  ivTherapyRefresh();
}

// ─── My Notes (localStorage) ───────────────────────────────────────────────
function getNote(directiveId) {
  try { return localStorage.getItem('notes-' + directiveId) || ''; } catch(e) { return ''; }
}

function saveNote(directiveId, text) {
  try { localStorage.setItem('notes-' + directiveId, text); } catch(e) { /* quota */ }
}

function renderMyNotesAnchor() {
  return `<div class="my-notes-anchor" onclick="document.getElementById('my-notes-bottom').scrollIntoView({behavior:'smooth'})">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 3v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    My Notes
  </div>`;
}

function renderMyNotesSection(directiveId) {
  const saved = getNote(directiveId);
  const displayText = saved || 'No notes yet. Tap Edit to add notes.';
  const emptyClass = saved ? '' : ' empty';
  return `<div id="my-notes-bottom" class="my-notes-section" data-directive-id="${directiveId}">
    <div class="my-notes-header">
      <span>My Notes</span>
      <button class="my-notes-edit-btn" onclick="enterNotesEditMode(this)">Edit</button>
    </div>
    <div class="my-notes-display${emptyClass}">${escapeHtml(displayText)}</div>
  </div>`;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function enterNotesEditMode(btn) {
  const section = btn.closest('.my-notes-section');
  const directiveId = section.dataset.directiveId;
  const display = section.querySelector('.my-notes-display');
  const saved = getNote(directiveId);

  display.outerHTML = `<textarea class="my-notes-textarea" id="notes-edit-area">${escapeHtml(saved)}</textarea>
    <div class="my-notes-actions">
      <button class="my-notes-cancel-btn" onclick="exitNotesEditMode('${directiveId}')">Cancel</button>
      <button class="my-notes-save-btn" onclick="saveNotesFromEditor('${directiveId}')">Save</button>
    </div>`;

  btn.style.display = 'none';
  const ta = $('notes-edit-area');
  if (ta) { ta.focus(); ta.selectionStart = ta.value.length; }
}

function saveNotesFromEditor(directiveId) {
  const ta = $('notes-edit-area');
  if (ta) saveNote(directiveId, ta.value);
  exitNotesEditMode(directiveId);
}

function exitNotesEditMode(directiveId) {
  const section = document.querySelector(`.my-notes-section[data-directive-id="${directiveId}"]`);
  if (!section) return;
  const saved = getNote(directiveId);
  const displayText = saved || 'No notes yet. Tap Edit to add notes.';
  const emptyClass = saved ? '' : ' empty';

  const ta = section.querySelector('.my-notes-textarea');
  const actions = section.querySelector('.my-notes-actions');
  if (ta) ta.remove();
  if (actions) actions.remove();

  const header = section.querySelector('.my-notes-header');
  header.insertAdjacentHTML('afterend', `<div class="my-notes-display${emptyClass}">${escapeHtml(displayText)}</div>`);

  const editBtn = section.querySelector('.my-notes-edit-btn');
  if (editBtn) editBtn.style.display = '';
}

// ─── Category helpers ────────────────────────────────────────────────────────
function getCategoryForId(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

function getDirectivesByCategory(catId) {
  if (catId === 'bls' && typeof BLS_GROUPS !== 'undefined') return BLS_GROUPS;
  return DIRECTIVES.filter(d => d.category === catId);
}

function getCompanionByCategory(catId) {
  return COMPANION.filter(c => c.category === catId);
}

function getBlsStandardsForGroup(groupId) {
  if (typeof BLS_GROUP_CONTENT === 'undefined') return [];
  const group = BLS_GROUP_CONTENT[groupId];
  if (!group || !Array.isArray(group.standards)) return [];
  return group.standards;
}

/** Bold selected phrases in Pregnancy Standard guidelines (input must already be HTML-escaped). */
function formatBlsPregnancyGuidelinesHtml(escaped) {
  let s = String(escaped);
  const phrases = [
    '= 36 weeks of gestational size',
    '= 20 weeks of gestational size',
    '3 months + 7 days',
    'diastolic BP ≥110',
    '≥140/90',
  ].sort((a, b) => b.length - a.length);
  phrases.forEach(p => {
    const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    s = s.replace(re, '<strong>$&</strong>');
  });
  return s;
}

/** Wrap numeric / threshold fragments in BLS detail text (input must already be HTML-escaped). */
function formatBlsHighlight(t) {
  if (t == null || t === '') return '';
  let s = String(t);
  s = s.replace(/(\d+-\d+%)/g, '<span class="bls-val">$1</span>');
  s = s.replace(/\bCTAS\s+2\b/gi, '<span class="bls-val bls-val--red">$&</span>');
  s = s.replace(/((?:SpO₂|SpO2|ETCO₂|ETCO2|GCS|LAMS|SBP|DBP|HR|RR|BP|CTAS)\s*(?:[<>≤≥=]|&lt;|&gt;|&le;|&ge;)\s*\d+(?:\.\d+)?(?:\s*(?:mmHg|bpm|\/min|mmol\/L|mmol))?)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/((?:^|(?<=[\s(,;:'"–-]))(?:≥|≤|&lt;|&gt;|&le;|&ge;|<|>)\s*\d+(?:\.\d+)?\s*°\s*C\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/((?:^|(?<=[\s(,;:'"–-]))(?:≥|≤|&lt;|&gt;|&le;|&ge;|<|>)\s*\d+(?:\.\d+)?%)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b(?:1st|2nd|3rd)\s+degree\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\birrigate for a minimum of (?:10|20) minutes at scene\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/((?:^|(?<=[\s(,;:'"–-]))(?:≥|≤|&lt;|&gt;|&le;|&ge;|<|>)\s*\d+\s*breaths\/minute\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b\d+(?:-\d+)?\s*mL\/(?:hr|kg\/hr)\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b\d+\s*mEq\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b\d+\s*mL\b)(?!\/)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(?<!Infant\s)(\b(?:age\s+)?(?:≥|≤|&lt;|&gt;|&le;|&ge;|<|>)\s*\d+\s*years?\s+(?:of\s+age|old)\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b(?:≥|≤|<|>|&lt;|&gt;)\s*\d+\s*km\/hr\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b(?:≥|≤|<|>|&lt;|&gt;)\s*\d+\s*metres?\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\bevery\s+\d+\s+minutes?\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/((?:^|(?<=[\s(,;:'"–-]))(?:<|>|≤|≥|&lt;|&gt;|&le;|&ge;)\s*\d+\s*hours?\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(?<!<\s)\b(\d+\s+hours?\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\bapproximately\s+\d+\s+breaths\s+per\s+minute\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/((?:^|(?<=[\s(,;:'"–-]))(?:<|>|≤|≥|&lt;|&gt;|&le;|&ge;)\s*\d+\s*minutes?\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b\d+\s*\(\s*(?:≥|≤|&lt;|&gt;|&le;|&ge;)\s*\d+\s*\))/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b\d+-\d+\s*(?:mmHg|bpm|\/min|litres|minutes|mm)\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\b(?:≥|≤|&lt;|&gt;)\s*\d+(?:\/\d+)?\s*mmHg\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\(PCI\)\s*(?:≥|&ge;|≤|&le;|<|>|&lt;|&gt;)\s*\d+\s+minutes\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\bAt least 2 mm ST-elevation in leads V1-V3\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(\bAt least 1 mm ST-elevation\b)/gi, '<span class="bls-val">$1</span>');
  s = s.replace(/(?<![≥≤<>]|&lt;|&gt;|&le;|&ge;)\b(\d+(?:\.\d+)?%)\b/g, '<span class="bls-val">$1</span>');
  return s;
}

// ─── Build category list (PCP or Companion) ──────────────────────────────────
function buildCategoryList(containerEl, items_fn, onClickFn) {
  containerEl.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const items = items_fn(cat.id);
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'cat-section';

    const header = document.createElement('div');
    header.className = `cat-header ${cat.colorClass}`;
    header.innerHTML = `<span class="cat-header-title">${cat.label}</span><span class="cat-chevron"></span>`;
    header.addEventListener('click', () => {
      itemsEl.classList.toggle('collapsed');
      header.classList.toggle('collapsed');
    });

    const itemsEl = document.createElement('div');
    itemsEl.className = 'cat-items';

    items.forEach(item => {
      if (item.type === 'bls-group') {
        const standards = getBlsStandardsForGroup(item.id);

        const groupRow = document.createElement('div');
        groupRow.className = 'directive-row directive-row--bls-group';
        groupRow.setAttribute('data-group-id', item.id);
        groupRow.innerHTML = `<span class="directive-row-title">${item.title}<span class="bls-group-count">(${standards.length})</span></span><span class="bls-group-chevron"></span>`;

        const subList = document.createElement('div');
        subList.className = 'bls-group-sublist collapsed';
        subList.setAttribute('data-group-id', item.id);

        standards.forEach(std => {
          const subRow = document.createElement('div');
          subRow.className = 'directive-row directive-row--bls-standard';
          subRow.innerHTML = `<span class="directive-row-title">${std.title}</span><span class="directive-row-chevron"></span>`;
          subRow.addEventListener('click', e => {
            e.stopPropagation();
            onClickFn({ type: 'bls-standard', standard: std, group: item });
          });
          subList.appendChild(subRow);
        });

        groupRow.addEventListener('click', () => {
          const isCollapsed = subList.classList.toggle('collapsed');
          groupRow.classList.toggle('expanded', !isCollapsed);
        });

        itemsEl.appendChild(groupRow);
        itemsEl.appendChild(subList);
        return;
      }

      const row = document.createElement('div');
      row.className = 'directive-row';
      row.innerHTML = `<span class="directive-row-title">${item.title}</span><span class="directive-row-chevron"></span>`;
      row.addEventListener('click', () => onClickFn(item));
      itemsEl.appendChild(row);
    });

    /* Start collapsed — tap category bar to expand */
    itemsEl.classList.add('collapsed');
    header.classList.add('collapsed');

    section.appendChild(header);
    section.appendChild(itemsEl);
    containerEl.appendChild(section);
  });
}

function escHtml(text) {
  if (text == null) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderBlsStandardDetail(standard, group) {
  let html = '';
  html += `<div class="detail-scope-banner bg-navy">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-cat-banner bg-purple">BLS Standards — ${escHtml(group.title)}</div>`;
  html += `<div class="detail-title">${escHtml(standard.title)}</div>`;
  html += `<div class="detail-auth">BLS PCS v3.4 verbatim reference. Confirm with current MOH BLS PCS and local service policy.</div>`;
  const blsGroupMeta = typeof BLS_GROUP_CONTENT !== 'undefined' ? BLS_GROUP_CONTENT[group.id] : null;
  if (blsGroupMeta && blsGroupMeta.sectionIntro) {
    const introParas = String(blsGroupMeta.sectionIntro).split(/\n\n+/).map(p => p.trim()).filter(Boolean);
    html += `<div class="bls-section-intro bls-section-intro--group">`;
    introParas.forEach(p => {
      html += `<p>${formatBlsHighlight(escHtml(p))}</p>`;
    });
    html += `</div>`;
  }
  html += renderMyNotesAnchor();

  const sections = Array.isArray(standard.sections) ? standard.sections : [];
  const guidelines = Array.isArray(standard.guidelines) ? standard.guidelines : [];
  const children = Array.isArray(standard.children) ? standard.children : [];

  function formatBlsText(text) {
    return formatBlsHighlight(text);
  }

  // Helper: render a single item (string or { text, subItems })
  function renderItem(item) {
    if (typeof item === 'string') {
      return `<li>${formatBlsText(escHtml(item))}</li>`;
    }
    if (item && typeof item === 'object') {
      const sys = item.systemLabel
        ? `<span class="bls-body-system">${escHtml(item.systemLabel)}</span> `
        : '';
      const rawText = item.text != null ? String(item.text) : '';
      const textPart = rawText.trim() !== '' ? formatBlsText(escHtml(rawText)) : '';
      let h = `<li>${sys}${textPart}`;
      const subs = Array.isArray(item.subItems) ? item.subItems : [];
      if (subs.length) {
        h += `<ol class="bls-sub-list">`;
        subs.forEach(sub => {
          if (typeof sub === 'string') {
            h += `<li>${formatBlsText(escHtml(sub))}</li>`;
          } else if (sub && typeof sub === 'object') {
            const subSys = sub.systemLabel
              ? `<span class="bls-body-system">${escHtml(sub.systemLabel)}</span> `
              : '';
            const subRaw = sub.text != null ? String(sub.text) : '';
            const subText = subRaw.trim() !== '' ? formatBlsText(escHtml(subRaw)) : '';
            h += `<li>${subSys}${subText}`;
            const ss = Array.isArray(sub.subItems) ? sub.subItems : [];
            if (ss.length) {
              h += `<ol class="bls-sub-sub-list">`;
              ss.forEach(s => { h += `<li>${formatBlsText(escHtml(typeof s === 'string' ? s : (s && s.text) || ''))}</li>`; });
              h += `</ol>`;
            }
            h += `</li>`;
          }
        });
        h += `</ol>`;
      }
      h += `</li>`;
      return h;
    }
    return '';
  }

  // Helper: render notes callout
  function renderNotes(notes) {
    if (!notes || !notes.length) return '';
    let h = '';
    notes.forEach(n => {
      h += `<div class="bls-note"><strong>Note:</strong> ${formatBlsText(escHtml(n))}</div>`;
    });
    return h;
  }

  // Helper: render guidelines (flat strings or structured groups)
  function renderGuidelines(gl) {
    if (!gl || !gl.length) return '';
    function formatGuidelineEscaped(escaped) {
      if (standard.id === 'bls-pregnancy') return formatBlsPregnancyGuidelinesHtml(escaped);
      return formatBlsText(escaped);
    }
    let h = `<div class="bls-guideline-box"><div class="bls-guideline-heading">Guidelines</div>`;
    // Check if structured (dict with heading/items) or flat strings
    const isStructured = gl.some(g => g && typeof g === 'object' && g.heading);
    if (isStructured) {
      gl.forEach(g => {
        if (g && typeof g === 'object' && g.heading) {
          h += `<div class="bls-guideline-subheading">${escHtml(g.heading)}</div>`;
          h += `<ul class="bls-guideline-list">`;
          (g.items || []).forEach(gi => { h += `<li>${formatGuidelineEscaped(escHtml(typeof gi === 'string' ? gi : ''))}</li>`; });
          h += `</ul>`;
        } else {
          h += `<ul class="bls-guideline-list"><li>${formatGuidelineEscaped(escHtml(typeof g === 'string' ? g : ''))}</li></ul>`;
        }
      });
    } else {
      h += `<ul class="bls-guideline-list">`;
      gl.forEach(g => { h += `<li>${formatGuidelineEscaped(escHtml(typeof g === 'string' ? g : ''))}</li>`; });
      h += `</ul>`;
    }
    h += `</div>`;
    return h;
  }

  // Helper: render a section block
  function renderSection(sec) {
    const cardExtra = sec.definitions ? ' bls-def-section' : '';
    let h = `<div class="section-card${cardExtra}">`;
    if (sec.heading) {
      h += `<div class="section-heading">${escHtml(sec.heading)}</div>`;
    }
    if (sec.intro) {
      h += `<div class="bls-section-intro">${formatBlsText(escHtml(sec.intro))}</div>`;
    }
    if (sec.preamble) {
      h += `<div class="bls-preamble">${escHtml(sec.preamble)}</div>`;
    }
    const items = Array.isArray(sec.items) ? sec.items : [];
    if (items.length) {
      h += `<ol class="bls-directive-list">`;
      items.forEach(item => { h += renderItem(item); });
      h += `</ol>`;
    }
    h += renderNotes(sec.notes);
    h += `</div>`;
    return h;
  }

  // Render sections
  sections.forEach(sec => { html += renderSection(sec); });

  // Render children (blunt/penetrating)
  if (children.length) {
    children.forEach(child => {
      html += `<div class="section-card">`;
      html += `<div class="section-heading">${escHtml(child.title)}</div>`;
      if (child.preamble) {
        html += `<div class="bls-preamble">${escHtml(child.preamble)}</div>`;
      }
      const items = Array.isArray(child.items) ? child.items : [];
      if (items.length) {
        html += `<ol class="bls-directive-list">`;
        items.forEach(item => { html += renderItem(item); });
        html += `</ol>`;
      }
      const cGuidelines = Array.isArray(child.guidelines) ? child.guidelines : [];
      if (cGuidelines.length) {
        html += renderGuidelines(cGuidelines);
      }
      html += `</div>`;
    });
  }

  // Render guidelines
  if (guidelines.length) {
    html += `<div class="section-card">`;
    html += renderGuidelines(guidelines);
    html += `</div>`;
  }

  html += renderMyNotesSection(standard.id || ('bls-' + group.id));

  $('detail-content').innerHTML = html;
  window.scrollTo(0, 0);
}

// ─── Render Directive Detail ─────────────────────────────────────────────────
function renderDirectiveDetail(directive) {
  const cat = getCategoryForId(directive.category);
  const colorClass = cat ? cat.colorClass : 'bg-navy';
  const catLabel = cat ? cat.label : '';

  let html = '';

  html += `<div class="detail-scope-banner bg-navy">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-cat-banner ${colorClass}">${catLabel}</div>`;

  html += `<div class="detail-title">${directive.fullTitle}</div>`;
  html += `<div class="detail-auth">${directive.scopeNote}</div>`;

  // My Notes anchor at top
  html += renderMyNotesAnchor();

  // INDICATIONS
  if (directive.indications && directive.indications.length) {
    html += `<div class="section-card">
      <div class="section-heading">Indications</div>
      <ul class="indications-list">`;
    directive.indications.forEach(ind => {
      const isConnector = ind === 'AND' || ind === 'OR';
      html += `<li class="${isConnector ? 'and-connector' : ''}">${ind}</li>`;
    });
    html += `</ul></div>`;
  }

  // CONDITIONS
  const condKeys = Object.keys(directive.conditions || {});
  if (condKeys.length) {
    html += `<div class="section-card"><div class="section-heading">Conditions</div><div class="conditions-block">`;
    condKeys.forEach(med => {
      const c = directive.conditions[med];
      html += `<div class="conditions-med-label">${med}</div>`;
      html += `<div class="table-scroll-wrap"><table class="conditions-table">`;
      const rows = [
        ['Age', c.age],
        c.weight !== undefined ? ['Weight', c.weight] : null,
        ['LOA', c.loa],
        ['HR', c.hr],
        ['RR', c.rr],
        ['SBP', c.sbp],
        ['Other', c.other],
      ].filter(Boolean);
      rows.forEach(([label, val]) => {
        html += `<tr><td>${label}</td><td>${String(val || 'N/A').replace(/\n/g, '<br>')}</td></tr>`;
      });
      html += `</table></div>`;
    });
    html += `</div></div>`;
  }

  // CONTRAINDICATIONS
  const contraKeys = Object.keys(directive.contraindications || {});
  if (contraKeys.length) {
    html += `<div class="section-card"><div class="section-heading red">Contraindications</div><div class="contra-block">`;
    contraKeys.forEach(med => {
      const items = directive.contraindications[med];
      html += `<div class="contra-med-label">${med}</div><ul class="contra-list">`;
      items.forEach(item => { html += `<li>${item}</li>`; });
      html += `</ul>`;
    });
    html += `</div></div>`;
  }

  // TREATMENT
  if (directive.treatments && directive.treatments.length) {
    html += `<div class="section-card"><div class="section-heading">Treatment</div>`;
    directive.treatments.forEach(t => {
      html += `<div class="treatment-block"><div class="treatment-med-label">${t.med}</div>`;
      if (t.rows && t.rows.length) {
        html += `<div class="table-scroll-wrap"><table class="treatment-table">`;
        if (t.cols && t.cols.length > 1) {
          html += `<thead><tr>`;
          t.cols.forEach(col => { html += `<td>${String(col).replace(/\n/g, '<br>')}</td>`; });
          html += `</tr></thead>`;
        }
        html += `<tbody>`;
        t.rows.forEach(row => {
          html += `<tr>`;
          row.forEach(cell => { html += `<td>${String(cell).replace(/\n/g, '<br>')}</td>`; });
          html += `</tr>`;
        });
        html += `</tbody></table></div>`;
        if (t.note) html += `<div class="treatment-note">${t.note.replace(/\n/g,'<br>')}</div>`;
      }
      html += `</div>`;
    });

    // Flowchart thumbnail + PDF link (if present)
    if (directive.flowchartPdf) {
      html += `<div class="flowchart-wrap">
        <div class="flowchart-label">Treatment Flowchart (tap to view full PDF)</div>
        <img class="flowchart-thumb" src="${directive.flowchartThumb}" alt="Treatment Flowchart"
             onclick="openFlowchartPdf('${directive.flowchartPdf}')" />
      </div>`;
    }

    html += `</div>`;
  }

  // QUICK CALCULATOR LINKS
  const calcLinks = {
    'hypoglycemia':           [{ label: 'Dextrose Dose Calculator',                      fn: `showView('view-dextrose','Dextrose Calc')` }],
    'allergic-reaction':      [{ label: 'EPINEPHrine Dose Calculator',                   fn: `showView('view-epi-anaphylaxis','Epi Calculator')` }],
    'bronchoconstriction':    [{ label: 'Bronchoconstriction Drug Calculator',           fn: `showView('view-broncho-calc','Broncho Calculator')` }],
    'croup':                  [{ label: 'Croup Drug Calculator',                         fn: `showView('view-croup-calc','Croup Calculator')` }],
    'medical-cardiac-arrest': [{ label: 'EPINEPHrine Dose Calculator (Anaphylaxis)',      fn: `showView('view-epi-anaphylaxis','Epi Calculator')` }],
    'cardiogenic-shock':      [{ label: 'IV Fluid Calculator',                           fn: `ivDirOpenPreset('bolus_cardio')` }],
    'iv-fluid':               [{ label: 'IV Therapy Calculator',                         fn: `ivDirOpenPreset('bolus_general')` }],
  };
  const directiveCalcLinks = calcLinks[directive.id];
  if (directiveCalcLinks) {
    html += `<div class="section-card quick-calc-card">`;
    html += `<div class="section-heading quick-calc-heading">Quick Calculator</div>`;
    directiveCalcLinks.forEach(link => {
      html += `<button class="quick-calc-btn" onclick="${link.fn}">${link.label}</button>`;
    });
    html += `</div>`;
  }

  // PATCH POINTS
  if (directive.patchPoints && directive.patchPoints.length) {
    html += `<div class="section-card"><div class="section-heading">Mandatory Patch Point(s)</div>`;
    directive.patchPoints.forEach(pp => {
      html += `<div class="patch-point">${pp}</div>`;
    });
    html += `<div class="spacer"></div></div>`;
  }

  // CLINICAL CONSIDERATIONS
  if (directive.clinicalConsiderations && directive.clinicalConsiderations.length) {
    html += `<div class="section-card"><div class="section-heading">Clinical Considerations</div><ul class="cc-list">`;
    directive.clinicalConsiderations.forEach(cc => {
      html += `<li>${cc}</li>`;
    });
    html += `</ul></div>`;
  }

  // TREAT & DISCHARGE
  if (directive.treatDischarge) {
    const td = directive.treatDischarge;
    html += `<div class="section-card"><div class="section-heading">${td.title}</div><div class="tnd-block">`;
    if (td.criteria && td.criteria.length) {
      html += `<div class="tnd-title">All of the following criteria must be met:</div><ul class="tnd-list">`;
      td.criteria.forEach(c => { html += `<li>${c}</li>`; });
      html += `</ul>`;
    }
    if (td.contraindications && td.contraindications.length) {
      html += `<div class="tnd-title" style="margin-top:10px">Contraindications</div><ul class="tnd-list tnd-contra-list">`;
      td.contraindications.forEach(c => { html += `<li>${c}</li>`; });
      html += `</ul>`;
    }
    if (td.clinicalConsiderationsTD) {
      html += `<div class="tnd-title" style="margin-top:10px">Clinical Considerations (Treat and Discharge)</div>`;
      html += `<div class="tnd-cc">${td.clinicalConsiderationsTD}</div>`;
    }
    html += `</div></div>`;
  }

  // My Notes section at bottom
  html += renderMyNotesSection(directive.id);

  $('detail-content').innerHTML = html;
}

// ─── Render Companion Detail ─────────────────────────────────────────────────
function renderCompanionDetail(entry) {
  const cat = getCategoryForId(entry.category);
  const colorClass = cat ? cat.colorClass : 'bg-navy';
  const catLabel = cat ? cat.label : '';

  let html = '';

  html += `<div class="detail-scope-banner bg-orange">COMPANION DOCUMENT</div>`;
  html += `<div class="detail-cat-banner ${colorClass}">${catLabel}</div>`;
  html += `<div class="detail-title">${entry.title}</div>`;

  // My Notes anchor at top
  html += renderMyNotesAnchor();

  const sections = [
    { key: 'introduction', label: 'Introduction' },
    { key: 'essentials',   label: 'Essentials' },
    { key: 'interventions',label: 'Interventions' },
  ];

  sections.forEach(s => {
    if (entry[s.key]) {
      html += `<div class="section-card">
        <div class="section-heading">${s.label}</div>
        <div class="comp-section-body">${entry[s.key].trim()}</div>
      </div>`;
    }
  });

  if (entry.references && entry.references.length) {
    html += `<div class="section-card"><div class="section-heading">References</div><ul class="cc-list">`;
    entry.references.forEach(ref => { html += `<li>${ref}</li>`; });
    html += `</ul></div>`;
  }

  // My Notes section at bottom
  html += renderMyNotesSection(entry.id);

  $('detail-content').innerHTML = html;
}

// ─── Render Palliative Detail ─────────────────────────────────────────────────
function renderPalliativeDetail(directive) {
  let html = '';

  html += `<div class="detail-scope-banner bg-gray">SPECIAL CARE DIRECTIVES</div>`;
  html += `<div class="detail-title">${directive.fullTitle}</div>`;
  html += `<div class="detail-auth">${directive.scopeNote}</div>`;

  // My Notes anchor at top
  html += renderMyNotesAnchor();

  // INDICATIONS
  if (directive.indications && directive.indications.length) {
    html += `<div class="section-card">
      <div class="section-heading">Indications</div>
      <ul class="indications-list">`;
    directive.indications.forEach(ind => {
      const isConnector = ind === 'AND' || ind === 'OR';
      html += `<li class="${isConnector ? 'and-connector' : ''}">${ind}</li>`;
    });
    html += `</ul></div>`;
  }

  // CONDITIONS
  const condKeys = Object.keys(directive.conditions || {});
  if (condKeys.length) {
    html += `<div class="section-card"><div class="section-heading">Conditions</div><div class="conditions-block">`;
    condKeys.forEach(med => {
      const c = directive.conditions[med];
      html += `<div class="conditions-med-label">${med}</div>`;
      html += `<div class="table-scroll-wrap"><table class="conditions-table">`;
      [['Age', c.age], ['LOA', c.loa], ['HR', c.hr], ['RR', c.rr], ['SBP', c.sbp], ['Other', c.other]]
        .forEach(([label, val]) => {
          html += `<tr><td>${label}</td><td>${String(val || 'N/A').replace(/\n/g,'<br>')}</td></tr>`;
        });
      html += `</table></div>`;
    });
    html += `</div></div>`;
  }

  // CONTRAINDICATIONS
  const contraKeys = Object.keys(directive.contraindications || {});
  if (contraKeys.length) {
    html += `<div class="section-card"><div class="section-heading red">Contraindications</div><div class="contra-block">`;
    contraKeys.forEach(med => {
      const items = directive.contraindications[med];
      html += `<div class="contra-med-label">${med}</div><ul class="contra-list">`;
      items.forEach(item => { html += `<li>${item}</li>`; });
      html += `</ul>`;
    });
    html += `</div></div>`;
  }

  // TREATMENT
  if (directive.treatments && directive.treatments.length) {
    html += `<div class="section-card"><div class="section-heading">Treatment</div>`;
    directive.treatments.forEach(t => {
      html += `<div class="treatment-block"><div class="treatment-med-label">${t.med}</div>`;
      if (t.rows && t.rows.length) {
        html += `<div class="table-scroll-wrap"><table class="treatment-table">`;
        if (t.cols && t.cols.length > 1) {
          html += `<thead><tr>`;
          t.cols.forEach(col => { html += `<td>${String(col).replace(/\n/g,'<br>')}</td>`; });
          html += `</tr></thead>`;
        }
        html += `<tbody>`;
        t.rows.forEach(row => {
          html += `<tr>`;
          row.forEach(cell => { html += `<td>${String(cell).replace(/\n/g,'<br>')}</td>`; });
          html += `</tr>`;
        });
        html += `</tbody></table></div>`;
        if (t.note) html += `<div class="treatment-note">${t.note.replace(/\n/g,'<br>')}</div>`;
      }
      html += `</div>`;
    });
    html += `</div>`;
  }

  // CLINICAL CONSIDERATIONS
  if (directive.clinicalConsiderations && directive.clinicalConsiderations.length) {
    html += `<div class="section-card"><div class="section-heading">Clinical Considerations</div><ul class="cc-list">`;
    directive.clinicalConsiderations.forEach(cc => { html += `<li>${cc}</li>`; });
    html += `</ul></div>`;
  }

  // My Notes section at bottom
  html += renderMyNotesSection(directive.id);

  $('detail-content').innerHTML = html;
}

// ─── Render Palliative Preamble ──────────────────────────────────────────────
function renderPalliativePreamble() {
  let html = '';
  html += `<div class="detail-scope-banner bg-gray">SPECIAL CARE DIRECTIVES</div>`;
  html += `<div class="detail-title">PCP Palliative Directives</div>`;

  html += `<div class="section-card">`;
  PALLIATIVE_PREAMBLE.sections.forEach(s => {
    html += `<div class="preamble-section">
      <div class="preamble-heading">${s.heading}</div>
      <div class="preamble-body">${s.body}</div>
    </div>`;
  });
  html += `</div>`;

  $('detail-content').innerHTML = html;
}

// ─── Build Special Care View ──────────────────────────────────────────────────
function buildSpecialView() {
  const container = $('special-list');
  if (!container) return;
  container.innerHTML = '';

  // Flat list (like Medical References) — always visible, not collapsible
  const overviewRow = document.createElement('div');
  overviewRow.className = 'directive-row';
  overviewRow.innerHTML = `<span class="directive-row-title" style="font-weight:600;">Overview / Introduction</span><span class="directive-row-chevron"></span>`;
  overviewRow.addEventListener('click', () => {
    renderPalliativePreamble();
    showView('view-detail', 'Palliative overview');
  });
  container.appendChild(overviewRow);

  PALLIATIVE_DIRECTIVES.forEach(d => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${d.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderPalliativeDetail(d);
      showView('view-detail', headerTitleFromItem(d));
    });
    container.appendChild(row);
  });
}

// ─── Build Medical References View ───────────────────────────────────────────
function buildReferencesView() {
  const container = $('references-list');
  container.innerHTML = '';

  REFERENCES.forEach(ref => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${ref.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderReferenceDetail(ref);
      showView('view-detail', headerTitleFromItem(ref));
    });
    container.appendChild(row);
  });
}

// ─── Medical Calculators hub ─────────────────────────────────────────────────
// ─── Drug Calculators (Directive-linked) ─────────────────────────────────────

// ── Shared helper: round to nearest 0.05, preserving float precision ──────────
function roundTo005(val) {
  return parseFloat((Math.round(val / 0.05) * 0.05).toFixed(2));
}

// ── Dextrose Calculator ───────────────────────────────────────────────────────
const dexState = { unit: 'kg', conc: '10', age: 'over2' };

function dextroseCalcRefresh() {
  const raw = parseFloat($('dex-weight')?.value ?? '');
  const resultEl = $('dex-result');
  const emptyEl  = $('dex-empty');
  if (!resultEl || !emptyEl) return;

  if (!raw || raw <= 0 || isNaN(raw)) {
    resultEl.classList.add('drug-calc-result--hidden');
    emptyEl.hidden = false;
    return;
  }

  const kg = dexState.unit === 'lbs' ? raw / 2.20462 : raw;
  let dose, vol, maxDose, maxVol;

  if (dexState.age === 'under2') {
    dose    = Math.min(parseFloat((kg * 0.2).toFixed(2)), 5);
    vol     = Math.min(parseFloat((kg * 2).toFixed(1)), 50);
    maxDose = 5; maxVol = 50;
  } else if (dexState.conc === '10') {
    dose   = Math.min(parseFloat((kg * 0.2).toFixed(2)), 25);
    vol    = Math.min(parseFloat((kg * 2).toFixed(1)), 250);
    maxDose = 25; maxVol = 250;
  } else {
    dose   = Math.min(parseFloat((kg * 0.5).toFixed(2)), 25);
    vol    = Math.min(parseFloat((kg * 1).toFixed(1)), 50);
    maxDose = 25; maxVol = 50;
  }

  const rawDose = dexState.age === 'under2' ? kg * 0.2 : (dexState.conc === '10' ? kg * 0.2 : kg * 0.5);
  const isMaxed = rawDose > maxDose;

  $('dex-vol').textContent        = vol.toFixed(1);
  $('dex-dose').textContent       = dose.toFixed(1);
  $('dex-kg-display').textContent = kg.toFixed(1);
  const warn = $('dex-max-warning');
  if (warn) warn.hidden = !isMaxed;
  resultEl.classList.remove('drug-calc-result--hidden');
  emptyEl.hidden = true;
}

function dextroseInit() {
  const root = $('view-dextrose');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  $('dex-weight')?.addEventListener('input', dextroseCalcRefresh);

  $('dex-age-under2')?.addEventListener('click', () => {
    dexState.age = 'under2';
    $('dex-age-under2').classList.add('drug-calc-option-btn--on');
    $('dex-age-over2').classList.remove('drug-calc-option-btn--on');
    dexState.conc = '10';
    $('dex-conc-10')?.classList.add('drug-calc-option-btn--on');
    $('dex-conc-50')?.classList.remove('drug-calc-option-btn--on');
    const conc50 = $('dex-conc-50');
    if (conc50) { conc50.disabled = true; conc50.style.opacity = '0.4'; conc50.style.pointerEvents = 'none'; }
    dextroseCalcRefresh();
  });
  $('dex-age-over2')?.addEventListener('click', () => {
    dexState.age = 'over2';
    $('dex-age-over2').classList.add('drug-calc-option-btn--on');
    $('dex-age-under2').classList.remove('drug-calc-option-btn--on');
    const conc50 = $('dex-conc-50');
    if (conc50) { conc50.disabled = false; conc50.style.opacity = ''; conc50.style.pointerEvents = ''; }
    dextroseCalcRefresh();
  });

  root.querySelectorAll('[data-dex-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      dexState.unit = btn.dataset.dexUnit;
      root.querySelectorAll('[data-dex-unit]').forEach(b =>
        b.classList.toggle('drug-calc-unit-btn--on', b === btn));
      dextroseCalcRefresh();
    });
  });

  $('dex-conc-10')?.addEventListener('click', () => {
    dexState.conc = '10';
    $('dex-conc-10').classList.add('drug-calc-option-btn--on');
    $('dex-conc-50').classList.remove('drug-calc-option-btn--on');
    dextroseCalcRefresh();
  });
  $('dex-conc-50')?.addEventListener('click', () => {
    dexState.conc = '50';
    $('dex-conc-50').classList.add('drug-calc-option-btn--on');
    $('dex-conc-10').classList.remove('drug-calc-option-btn--on');
    dextroseCalcRefresh();
  });

  dextroseCalcRefresh();
}

// ── EPINEPHrine Anaphylaxis Calculator ────────────────────────────────────────
const epiState = { unit: 'kg' };

function epiAnaphylaxisRefresh() {
  const raw = parseFloat($('epi-weight')?.value ?? '');
  const resultEl = $('epi-result');
  const emptyEl  = $('epi-empty');
  if (!resultEl || !emptyEl) return;

  if (!raw || raw <= 0 || isNaN(raw)) {
    resultEl.classList.add('drug-calc-result--hidden');
    emptyEl.hidden = false;
    return;
  }

  const kg       = epiState.unit === 'lbs' ? raw / 2.20462 : raw;
  const rawDose  = kg * 0.01;
  const rounded  = roundTo005(rawDose);
  const isMaxed  = rounded > 0.5;
  const finalDose = Math.min(rounded, 0.5);

  $('epi-dose').textContent       = finalDose.toFixed(2);
  $('epi-vol').textContent        = finalDose.toFixed(2);
  $('epi-kg-display').textContent = kg.toFixed(1);
  const warn = $('epi-max-warning');
  if (warn) warn.hidden = !isMaxed;
  resultEl.classList.remove('drug-calc-result--hidden');
  emptyEl.hidden = true;
}

function epiAnaphylaxisInit() {
  const root = $('view-epi-anaphylaxis');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  $('epi-weight')?.addEventListener('input', epiAnaphylaxisRefresh);

  root.querySelectorAll('[data-epi-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      epiState.unit = btn.dataset.epiUnit;
      root.querySelectorAll('[data-epi-unit]').forEach(b =>
        b.classList.toggle('drug-calc-unit-btn--on', b === btn));
      epiAnaphylaxisRefresh();
    });
  });

  epiAnaphylaxisRefresh();
}

// ── Bronchoconstriction Calculator ────────────────────────────────────────────
const bronchoState = { unit: 'kg' };

function bronchoCalcRefresh() {
  const raw = parseFloat($('broncho-weight')?.value ?? '');
  const resultEl = $('broncho-result');
  const emptyEl  = $('broncho-empty');
  if (!resultEl || !emptyEl) return;

  if (!raw || raw <= 0 || isNaN(raw)) {
    resultEl.classList.add('drug-calc-result--hidden');
    emptyEl.hidden = false;
    return;
  }

  const kg          = bronchoState.unit === 'lbs' ? raw / 2.20462 : raw;

  // Epi IM
  const epiRaw     = kg * 0.01;
  const epiRounded = roundTo005(epiRaw);
  const epiIsMaxed = epiRounded > 0.5;
  const epiDose    = Math.min(epiRounded, 0.5);
  const epiVol     = epiDose;

  // Dexamethasone
  const dexRaw     = kg * 0.5;
  const dexIsMaxed = dexRaw > 8;
  const dexDose    = Math.min(parseFloat(dexRaw.toFixed(1)), 8);

  $('broncho-epi-dose').textContent = epiDose.toFixed(2);
  $('broncho-epi-vol').textContent  = epiVol.toFixed(2);
  const epiWarn = $('broncho-epi-max-warning');
  if (epiWarn) epiWarn.hidden = !epiIsMaxed;

  $('broncho-dex-dose').textContent = dexDose.toFixed(1);
  const dexWarn = $('broncho-dex-max-warning');
  if (dexWarn) dexWarn.hidden = !dexIsMaxed;

  $('broncho-kg-display').textContent = kg.toFixed(1);
  resultEl.classList.remove('drug-calc-result--hidden');
  emptyEl.hidden = true;
}

function bronchoCalcInit() {
  const root = $('view-broncho-calc');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  $('broncho-weight')?.addEventListener('input', bronchoCalcRefresh);

  root.querySelectorAll('[data-broncho-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      bronchoState.unit = btn.dataset.bronchoUnit;
      root.querySelectorAll('[data-broncho-unit]').forEach(b =>
        b.classList.toggle('drug-calc-unit-btn--on', b === btn));
      bronchoCalcRefresh();
    });
  });

  bronchoCalcRefresh();
}

// ── Croup Calculator ──────────────────────────────────────────────────────────
const croupState = { unit: 'kg' };

function croupCalcRefresh() {
  const raw = parseFloat($('croup-weight')?.value ?? '');
  const resultEl = $('croup-result');
  const emptyEl  = $('croup-empty');
  if (!resultEl || !emptyEl) return;

  if (!raw || raw <= 0 || isNaN(raw)) {
    resultEl.classList.add('drug-calc-result--hidden');
    emptyEl.hidden = false;
    return;
  }

  const kg = croupState.unit === 'lbs' ? raw / 2.20462 : raw;

  // Epi NEB: fixed dose based on weight bracket
  const epiDose     = kg < 10 ? 2.5 : 5;
  const epiVol      = epiDose; // 1 mg/mL → same mL as mg
  const bracket     = kg < 10 ? '< 10 kg' : '≥ 10 kg';

  // Dexamethasone PO
  const dexRaw     = kg * 0.5;
  const dexIsMaxed = dexRaw > 8;
  const dexDose    = Math.min(parseFloat(dexRaw.toFixed(1)), 8);

  $('croup-epi-dose').textContent = epiDose.toFixed(1);
  $('croup-epi-vol').textContent  = epiVol.toFixed(1);
  $('croup-weight-bracket').textContent = bracket;

  $('croup-dex-dose').textContent = dexDose.toFixed(1);
  const dexWarn = $('croup-dex-max-warning');
  if (dexWarn) dexWarn.hidden = !dexIsMaxed;

  $('croup-kg-display').textContent = kg.toFixed(1);
  resultEl.classList.remove('drug-calc-result--hidden');
  emptyEl.hidden = true;
}

function croupCalcInit() {
  const root = $('view-croup-calc');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = '1';

  $('croup-weight')?.addEventListener('input', croupCalcRefresh);

  root.querySelectorAll('[data-croup-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      croupState.unit = btn.dataset.croupUnit;
      root.querySelectorAll('[data-croup-unit]').forEach(b =>
        b.classList.toggle('drug-calc-unit-btn--on', b === btn));
      croupCalcRefresh();
    });
  });

  croupCalcRefresh();
}

// ─────────────────────────────────────────────────────────────────────────────

function buildCalculatorsView() {
  const container = $('calculators-list');
  if (!container) return;
  const items = [
    { title: 'Pre-Sepsis Tool', fn: () => showView('view-presepsis', 'Pre-Sepsis') },
    { title: 'Burn % Calculator', fn: () => showView('view-burn', 'Burn %') },
    { title: 'Parkland Burn Calculator', fn: () => showView('view-parkland-burn', 'Parkland') },
    { title: 'LAMS Calculator', fn: () => showView('view-lams', 'LAMS Calculator') },
    { title: 'Pediatric Values Calculator', fn: () => showView('view-ped-calc', 'Pediatric Values Calculator') },
    { title: 'Oxygen Tank Duration', fn: () => showView('view-o2-duration', 'O₂ Duration') },
    { title: 'Weight Converter', fn: () => showView('view-weight-convert', 'Weight Converter') },
    { title: 'Medical Dosage Calculator', fn: () => showView('view-dosage-calc', 'Dosage Calc') },
    { title: 'IV Therapy Calculator', fn: () => showView('view-iv-therapy', 'IV Therapy') },
    { title: 'Dextrose Dose Calculator', fn: () => showView('view-dextrose', 'Dextrose Calc') },
    { title: 'EPINEPHrine Dose Calculator (Anaphylaxis)', fn: () => showView('view-epi-anaphylaxis', 'Epi Calculator') },
    { title: 'Bronchoconstriction Drug Calculator', fn: () => showView('view-broncho-calc', 'Broncho Calculator') },
    { title: 'Croup Drug Calculator', fn: () => showView('view-croup-calc', 'Croup Calculator') },
    { title: 'Glasgow Coma Scale (Calculator)', fn: () => renderCalculatorDetail('gcs') },
    { title: 'Pediatric Coma Scale (Calculator)', fn: () => renderCalculatorDetail('pcs') },
  ];
  container.innerHTML = '';
  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${item.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', item.fn);
    container.appendChild(row);
  });
}

// ─── Medication Information (Field Rx–style reference) ─────────────────────
const medicationsUI = { tab: 'All', search: '', expandedId: null };

function medicationsFilterMeds() {
  if (typeof MEDICATIONS === 'undefined') return [];
  const q = medicationsUI.search.trim().toLowerCase();
  return MEDICATIONS.filter(med => {
    const matchesSearch = !q || med.name.toLowerCase().includes(q) ||
      med.category.toLowerCase().includes(q) ||
      med.indication.toLowerCase().includes(q) ||
      (med.tags || []).some(tag => tag.toLowerCase().includes(q));
    const matchesTab = medicationsUI.tab === 'All' || med.type === medicationsUI.tab;
    return matchesSearch && matchesTab;
  });
}

function medicationsFilterSuffixes() {
  if (typeof MED_SUFFIXES === 'undefined') return [];
  const q = medicationsUI.search.trim().toLowerCase();
  return MED_SUFFIXES.filter(item =>
    !q || item.suffix.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.indication.toLowerCase().includes(q) ||
    item.example.toLowerCase().includes(q)
  );
}

function medicationsSyncTabs() {
  document.querySelectorAll('#view-medications .med-tab').forEach(btn => {
    const on = btn.dataset.medTab === medicationsUI.tab;
    btn.classList.toggle('med-tab--on', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });
}

function renderMedicationsList() {
  const container = $('medications-list');
  if (!container) return;

  if (medicationsUI.tab === 'Suffixes') {
    const items = medicationsFilterSuffixes();
    if (!items.length) {
      const q = escapeHtml(medicationsUI.search.trim());
      container.innerHTML = `<div class="med-empty"><p>No suffixes match${q ? ` “${q}”` : ''}.</p></div>`;
      return;
    }
    container.innerHTML = items.map(item => `
      <div class="med-suffix-card">
        <div class="med-suffix-row">
          <h3 class="med-suffix-title">${escapeHtml(item.suffix)}</h3>
          <span class="med-suffix-cat">${escapeHtml(item.category)}</span>
        </div>
        <p class="med-suffix-indication">${escapeHtml(item.indication)}</p>
        <p class="med-suffix-examples"><span class="med-suffix-examples-label">Examples:</span> ${escapeHtml(item.example)}</p>
      </div>
    `).join('');
    return;
  }

  const meds = medicationsFilterMeds();
  if (!meds.length) {
    const q = escapeHtml(medicationsUI.search.trim());
    container.innerHTML = `<div class="med-empty"><p>No medications match${q ? ` “${q}”` : ''}.</p></div>`;
    return;
  }

  container.innerHTML = meds.map(med => {
    const expanded = medicationsUI.expandedId === med.id;
    const home = med.type === 'Home Med';
    const badges = `
      ${home
        ? '<span class="med-badge med-badge-home">Home Med</span>'
        : '<span class="med-badge med-badge-ems">EMS Drug</span>'}
      ${med.critical ? '<span class="med-badge med-badge-alert">High Alert</span>' : ''}
    `;
    const chevron = expanded
      ? '<span class="med-chevron med-chevron-up" aria-hidden="true"></span>'
      : '<span class="med-chevron med-chevron-down" aria-hidden="true"></span>';
    const preview = expanded ? '' : `<p class="med-card-preview">${escapeHtml(med.indication)}</p>`;
    const body = expanded ? `
      <div class="med-card-body">
        <div class="med-stats-grid">
          <div class="med-stat">
            <span class="med-stat-label">Route</span>
            <span class="med-stat-val">${escapeHtml(med.route)}</span>
          </div>
          <div class="med-stat">
            <span class="med-stat-label">Onset</span>
            <span class="med-stat-val">${escapeHtml(med.onset)}</span>
          </div>
          <div class="med-stat med-stat-wide">
            <span class="med-stat-label">Duration</span>
            <span class="med-stat-val">${escapeHtml(med.duration)}</span>
          </div>
        </div>
        <div class="med-block">
          <span class="med-block-label">Primary indication</span>
          <p class="med-block-text">${escapeHtml(med.indication)}</p>
        </div>
        <details class="med-details">
          <summary>Pharmacodynamics &amp; deep dive</summary>
          <p class="med-details-body">${escapeHtml(med.pharmacodynamics)}</p>
        </details>
        <details class="med-details med-details-notes">
          <summary>Clinical field notes</summary>
          <div class="med-notes-wrap">
            <span class="med-notes-icon" aria-hidden="true">!</span>
            <p class="med-notes-text">${escapeHtml(med.clinicalNotes)}</p>
          </div>
        </details>
      </div>
    ` : '';
    return `
      <div class="med-card${expanded ? ' med-card--expanded' : ''}" data-med-id="${med.id}">
        <button type="button" class="med-card-header" aria-expanded="${expanded}">
          <div class="med-card-header-main">
            <div class="med-card-title-row">
              <span class="med-card-name">${escapeHtml(med.prefix)}<span class="med-name-suffix">${escapeHtml(med.suffix)}</span></span>
              <span class="med-badge-row">${badges}</span>
            </div>
            <p class="med-card-category">${escapeHtml(med.category)}</p>
            ${preview}
          </div>
          ${chevron}
        </button>
        ${body}
      </div>
    `;
  }).join('');
}

function medicationsSyncAndRender() {
  const inp = $('medications-search');
  if (inp) inp.value = medicationsUI.search;
  medicationsSyncTabs();
  renderMedicationsList();
}

function buildMedicationsView() {
  const root = $('view-medications');
  if (!root || typeof MEDICATIONS === 'undefined') return;

  if (!root.dataset.bound) {
    root.dataset.bound = '1';
    root.querySelectorAll('.med-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        medicationsUI.tab = btn.dataset.medTab;
        medicationsUI.expandedId = null;
        medicationsSyncTabs();
        renderMedicationsList();
      });
    });
    const searchInp = $('medications-search');
    if (searchInp) {
      searchInp.addEventListener('input', e => {
        medicationsUI.search = e.target.value;
        renderMedicationsList();
      });
    }
    const medList = $('medications-list');
    if (medList && !medList.dataset.clickBound) {
      medList.dataset.clickBound = '1';
      medList.addEventListener('click', e => {
        const btn = e.target.closest('.med-card-header');
        if (!btn) return;
        const card = btn.closest('.med-card');
        if (!card) return;
        const id = Number(card.dataset.medId);
        if (Number.isNaN(id)) return;
        medicationsUI.expandedId = medicationsUI.expandedId === id ? null : id;
        renderMedicationsList();
      });
    }
  }
  medicationsSyncAndRender();
}

/** Open medication section from global search (optional expanded med). */
function medicationsOpenFromSearch(med) {
  medicationsUI.tab = 'All';
  medicationsUI.search = '';
  medicationsUI.expandedId = med && med.id != null ? med.id : null;
  showView('view-medications', med ? med.name : 'Medications');
}

function renderCalculatorDetail(kind) {
  const body = typeof GCS_CALCULATOR_HTML !== 'undefined' && kind === 'gcs'
    ? GCS_CALCULATOR_HTML
    : typeof PCS_CALCULATOR_HTML !== 'undefined' && kind === 'pcs'
      ? PCS_CALCULATOR_HTML
      : '';
  if (!body) return;
  const title = kind === 'gcs' ? 'Glasgow Coma Scale' : 'Pediatric Coma Scale';
  const shortTitle = kind === 'gcs' ? 'GCS Calculator' : 'PCS Calculator';
  const notesId = kind === 'gcs' ? 'ref-gcs' : 'ref-pediatric-coma';
  const prefix = kind === 'gcs' ? 'gcs' : 'pcs';
  let html = '';
  html += `<div class="detail-scope-banner bg-red">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-scope-banner calc-hub-banner">Medical Calculators</div>`;
  html += `<div class="detail-title">${title}</div>`;
  html += renderMyNotesAnchor();
  html += `<div class="section-card ref-detail">${body}</div>`;
  html += renderMyNotesSection(notesId);
  $('detail-content').innerHTML = html;
  gcsReset(prefix);
  showView('view-detail', shortTitle);
}

// ─── Render Reference Detail ─────────────────────────────────────────────────
function renderReferenceDetail(ref) {
  let html = '';

  html += `<div class="detail-scope-banner bg-red">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-scope-banner bg-purple" style="font-size:14px;">Medical References</div>`;
  html += `<div class="detail-title">${ref.title}</div>`;

  html += renderMyNotesAnchor();

  html += `<div class="section-card ref-detail">${ref.content}</div>`;

  html += renderMyNotesSection(ref.id);

  $('detail-content').innerHTML = html;
}

// ─── Special Event & Contact ───────────────────────────────────────────────────
function renderSpecialEventDetail(directive) {
  let html = '';

  html += `<div class="detail-scope-banner bg-specialevent">SPECIAL EVENT DIRECTIVES</div>`;
  html += `<div class="detail-cat-banner bg-specialevent-sub">${directive.title}</div>`;
  html += `<div class="detail-title">${directive.fullTitle}</div>`;
  html += `<div class="detail-auth">${directive.scopeNote}</div>`;
  html += renderMyNotesAnchor();

  if (directive.indications && directive.indications.length) {
    html += `<div class="section-card">
      <div class="section-heading">Indications</div>
      <ul class="indications-list">`;
    directive.indications.forEach(ind => {
      const isConnector = ind === 'AND' || ind === 'OR';
      html += `<li class="${isConnector ? 'and-connector' : ''}">${ind}</li>`;
    });
    html += `</ul></div>`;
  }

  const condKeys = Object.keys(directive.conditions || {});
  if (condKeys.length) {
    html += `<div class="section-card"><div class="section-heading">Conditions</div><div class="conditions-block">`;
    condKeys.forEach(med => {
      const c = directive.conditions[med];
      html += `<div class="conditions-med-label">${med}</div>`;
      html += `<div class="table-scroll-wrap"><table class="conditions-table">`;
      [
        ['Age', c.age],
        ['LOA', c.loa],
        ['HR', c.hr],
        ['RR', c.rr],
        ['SBP', c.sbp],
        ['Other', c.other],
      ].forEach(([label, val]) => {
        html += `<tr><td>${label}</td><td>${String(val || 'N/A').replace(/\n/g, '<br>')}</td></tr>`;
      });
      html += `</table></div>`;
    });
    html += `</div></div>`;
  }

  // CONTRAINDICATIONS
  const contraKeys = Object.keys(directive.contraindications || {});
  if (contraKeys.length) {
    html += `<div class="section-card"><div class="section-heading red">Contraindications</div><div class="contra-block">`;
    contraKeys.forEach(med => {
      const items = directive.contraindications[med];
      html += `<div class="contra-med-label">${med}</div><ul class="contra-list">`;
      items.forEach(item => { html += `<li>${item}</li>`; });
      html += `</ul>`;
    });
    html += `</div></div>`;
  }

  // TREATMENT
  if (directive.treatments && directive.treatments.length) {
    html += `<div class="section-card"><div class="section-heading">Treatment</div>`;
    directive.treatments.forEach(t => {
      html += `<div class="treatment-block"><div class="treatment-med-label">${t.med}</div>`;
      if (t.rows && t.rows.length) {
        html += `<div class="table-scroll-wrap"><table class="treatment-table">`;
        if (t.cols && t.cols.length > 1) {
          html += `<thead><tr>`;
          t.cols.forEach(col => { html += `<td>${String(col).replace(/\n/g, '<br>')}</td>`; });
          html += `</tr></thead>`;
        }
        html += `<tbody>`;
        t.rows.forEach(row => {
          html += `<tr>`;
          row.forEach(cell => { html += `<td>${String(cell).replace(/\n/g, '<br>')}</td>`; });
          html += `</tr>`;
        });
        html += `</tbody></table></div>`;
        if (t.note) html += `<div class="treatment-note">${t.note.replace(/\n/g, '<br>')}</div>`;
      }
      html += `</div>`;
    });
    html += `</div>`;
  }

  if (directive.clinicalConsiderations && directive.clinicalConsiderations.length) {
    html += `<div class="section-card"><div class="section-heading">Clinical Considerations</div><ul class="cc-list">`;
    directive.clinicalConsiderations.forEach(cc => {
      html += `<li>${cc}</li>`;
    });
    html += `</ul></div>`;
  }

  html += renderMyNotesSection(directive.id);
  $('detail-content').innerHTML = html;
}

function renderContactDetail(pageId, pageTitle) {
  let html = '';

  html += `<div class="detail-scope-banner bg-red">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-cat-banner contact-banner-mauve">Contact</div>`;
  html += `<div class="detail-title contact-detail-title">${pageTitle}</div>`;
  html += renderMyNotesAnchor();
  html += typeof buildContactDetailHtml === 'function' ? buildContactDetailHtml(pageId) : '';
  html += renderMyNotesSection('contact-' + pageId);
  $('detail-content').innerHTML = html;
}

function renderDestinationDetail(pageId, pageTitle) {
  let html = '';

  html += `<div class="detail-scope-banner bg-red">PRIMARY CARE PARAMEDIC</div>`;
  html += `<div class="detail-cat-banner destination-guidelines-banner">Destination Guidelines</div>`;
  html += `<div class="detail-title destination-detail-title">${pageTitle}</div>`;
  html += renderMyNotesAnchor();
  html += typeof buildDestinationDetailHtml === 'function' ? buildDestinationDetailHtml(pageId) : '';
  html += renderMyNotesSection('destination-' + pageId);
  $('detail-content').innerHTML = html;
}

function buildSpecialEventView() {
  const container = $('special-event-list');
  if (!container || typeof SPECIAL_EVENT_DIRECTIVES === 'undefined') return;
  container.innerHTML = '';
  SPECIAL_EVENT_DIRECTIVES.forEach(d => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${d.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderSpecialEventDetail(d);
      showView('view-detail', headerTitleFromItem(d));
    });
    container.appendChild(row);
  });
}

function buildContactView() {
  const container = $('contact-list');
  if (!container || typeof CONTACT_MENU === 'undefined') return;
  container.innerHTML = '';
  CONTACT_MENU.forEach(item => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${item.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderContactDetail(item.id, item.title);
      showView('view-detail', headerTitleFromItem(item));
    });
    container.appendChild(row);
  });
}

function buildDestinationView() {
  const container = $('destination-list');
  if (!container || typeof DESTINATION_MENU === 'undefined') return;
  container.innerHTML = '';
  DESTINATION_MENU.forEach(item => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${item.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderDestinationDetail(item.id, item.title);
      showView('view-detail', headerTitleFromItem(item));
    });
    container.appendChild(row);
  });
}

// ─── Search ──────────────────────────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];
  DIRECTIVES.forEach(d => {
    const cat = getCategoryForId(d.category);
    index.push({
      id: d.id, title: d.title, catLabel: cat ? cat.label : '',
      text: [d.title, d.fullTitle, ...(d.indications || []), ...(d.clinicalConsiderations || []),
             ...Object.keys(d.conditions || {}), ...Object.keys(d.contraindications || {})].join(' ').toLowerCase(),
      type: 'directive', data: d
    });
  });
  if (typeof BLS_GROUPS !== 'undefined' && typeof BLS_GROUP_CONTENT !== 'undefined') {
    BLS_GROUPS.forEach(group => {
      const c = BLS_GROUP_CONTENT[group.id] || {};
      const standards = Array.isArray(c.standards) ? c.standards : [];
      standards.forEach(std => {
        const textParts = [std.title];
        if (c.sectionIntro) textParts.push(c.sectionIntro);
        // Collect text from sections
        if (std.sections) {
          std.sections.forEach(sec => {
            if (sec.preamble) textParts.push(sec.preamble);
            if (sec.intro) textParts.push(sec.intro);
            (sec.items || []).forEach(item => {
              if (typeof item === 'string') textParts.push(item);
              else if (item && item.text) {
                textParts.push(item.text);
                (item.subItems || []).forEach(sub => {
                  textParts.push(typeof sub === 'string' ? sub : (sub && sub.text) || '');
                });
              }
            });
          });
        }
        // Collect text from children (blunt/penetrating)
        if (std.children) {
          std.children.forEach(child => {
            if (child.title) textParts.push(child.title);
            (child.items || []).forEach(item => {
              if (typeof item === 'string') textParts.push(item);
              else if (item && item.text) textParts.push(item.text);
            });
          });
        }
        // Collect guidelines
        if (std.guidelines) {
          std.guidelines.forEach(g => {
            if (typeof g === 'string') textParts.push(g);
            else if (g && g.heading) {
              textParts.push(g.heading);
              (g.items || []).forEach(gi => { if (typeof gi === 'string') textParts.push(gi); });
            }
          });
        }
        // Collect notes
        if (std.sections) {
          std.sections.forEach(sec => {
            (sec.notes || []).forEach(n => { if (typeof n === 'string') textParts.push(n); });
          });
        }
        index.push({
          id: std.id || std.title,
          title: std.title,
          catLabel: 'BLS — ' + group.title,
          text: textParts.join(' ').toLowerCase(),
          type: 'bls-standard',
          data: { standard: std, group: group },
        });
      });
    });
  }
  COMPANION.forEach(c => {
    const cat = getCategoryForId(c.category);
    index.push({
      id: c.id, title: c.title, catLabel: (cat ? cat.label : '') + ' – Companion',
      text: [c.title, c.introduction || '', c.essentials || '', c.interventions || ''].join(' ').toLowerCase(),
      type: 'companion', data: c
    });
  });
  if (typeof PALLIATIVE_DIRECTIVES !== 'undefined') {
    PALLIATIVE_DIRECTIVES.forEach(d => {
      index.push({
        id: d.id, title: d.title, catLabel: 'Palliative Care',
        text: [d.title, d.fullTitle, ...(d.indications || []), ...(d.clinicalConsiderations || []),
               ...Object.keys(d.conditions || {}), ...Object.keys(d.contraindications || {})].join(' ').toLowerCase(),
        type: 'palliative', data: d
      });
    });
  }
  if (typeof REFERENCES !== 'undefined') {
    REFERENCES.forEach(r => {
      index.push({
        id: r.id, title: r.title, catLabel: 'Medical References',
        text: [r.title, r.content].join(' ').toLowerCase().replace(/<[^>]*>/g, ''),
        type: 'reference', data: r
      });
    });
  }
  if (typeof SPECIAL_EVENT_DIRECTIVES !== 'undefined') {
    SPECIAL_EVENT_DIRECTIVES.forEach(d => {
      const treatText = (d.treatments || []).map(tr =>
        [tr.med, tr.note, ...(tr.rows || []).flat(), ...(tr.cols || [])].join(' ')
      ).join(' ');
      const contraText = Object.values(d.contraindications || {}).flat().join(' ');
      index.push({
        id: d.id,
        title: d.title,
        catLabel: 'Special Event',
        text: [d.title, d.fullTitle, ...(d.indications || []), ...(d.clinicalConsiderations || []),
          ...Object.keys(d.conditions || {}), contraText, treatText].join(' ').toLowerCase(),
        type: 'specialevent',
        data: d
      });
    });
  }
  if (typeof CONTACT_MENU !== 'undefined') {
    CONTACT_MENU.forEach(c => {
      index.push({
        id: c.id,
        title: c.title,
        catLabel: 'Contact',
        text: c.title.toLowerCase(),
        type: 'contact',
        data: c
      });
    });
  }
  if (typeof DESTINATION_MENU !== 'undefined') {
    DESTINATION_MENU.forEach(d => {
      const kw = (d.keywords || '').toLowerCase();
      index.push({
        id: d.id,
        title: d.title,
        catLabel: 'Destination Guidelines',
        text: [d.title, d.id, kw].join(' ').toLowerCase(),
        type: 'destination',
        data: d
      });
    });
  }
  index.push({
    id: 'calc-hub',
    title: 'Medical Calculators',
    catLabel: 'Tools',
    text: 'medical calculators calculator pre-sepsis sepsis parahews burn rule of nines tbsa body surface parkland fluid resuscitation iv therapy drip gtts bolus maintenance glasgow coma pediatric pcs gcs lams stroke ped values weight converter lbs kg pounds kilograms oxygen o2 tank cylinder duration psi lpm dosage dose medication ml concentration'.toLowerCase(),
    type: 'calc-hub',
    data: null,
  });
  index.push({
    id: 'calc-presepsis',
    title: 'Pre-Sepsis Tool',
    catLabel: 'Medical Calculators',
    text: 'pre-sepsis pre sepsis fast parahews parhews infection alert capnography hospital notify gwps hps rowps clinical suspicion'.toLowerCase(),
    type: 'presepsis',
    data: null,
  });
  index.push({
    id: 'calc-burn',
    title: 'Burn % Calculator',
    catLabel: 'Medical Calculators',
    text: 'burn percent calculator rule of nines tbsa thermal bls dressing cooling pediatric adult groin body surface'.toLowerCase(),
    type: 'calc-burn',
    data: null,
  });
  index.push({
    id: 'calc-parkland',
    title: 'Parkland Burn Calculator',
    catLabel: 'Medical Calculators',
    text: 'parkland burn calculator fluid resuscitation lactated ringers lr 4ml tbsa drip rate gtts macrodrip microdrip iv'.toLowerCase(),
    type: 'calc-parkland',
    data: null,
  });
  index.push({
    id: 'calc-gcs',
    title: 'Glasgow Coma Scale (Calculator)',
    catLabel: 'Medical Calculators',
    text: 'glasgow coma scale gcs calculator adult eye verbal motor'.toLowerCase(),
    type: 'calc-gcs',
    data: null,
  });
  index.push({
    id: 'calc-pcs',
    title: 'Pediatric Coma Scale (Calculator)',
    catLabel: 'Medical Calculators',
    text: 'pediatric coma scale pcs calculator child infant babbles'.toLowerCase(),
    type: 'calc-pcs',
    data: null,
  });
  index.push({
    id: 'calc-lams',
    title: 'LAMS Calculator',
    catLabel: 'Medical Calculators',
    text: 'lams los angeles motor scale stroke lvo large vessel occlusion facial droop arm drift grip ctas'.toLowerCase(),
    type: 'calc-lams',
    data: null,
  });
  index.push({
    id: 'calc-pediatric-values',
    title: 'Pediatric Values Calculator',
    catLabel: 'Medical Calculators',
    text: 'pediatric values weight sbp hypotension normotension vitals heart rate respiratory hypoglycemia bgl child infant'.toLowerCase(),
    type: 'calc-pediatric-values',
    data: null,
  });
  index.push({
    id: 'calc-o2-duration',
    title: 'Oxygen Tank Duration',
    catLabel: 'Medical Calculators',
    text: 'oxygen o2 tank duration cylinder psi lpm flow d-tank m-tank e-tank cannula nasal residual gauge factor'.toLowerCase(),
    type: 'calc-o2-duration',
    data: null,
  });
  index.push({
    id: 'calc-weight-convert',
    title: 'Weight Converter',
    catLabel: 'Medical Calculators',
    text: 'weight converter pounds lbs kilograms kg lb to kg kg to lb mass imperial metric'.toLowerCase(),
    type: 'calc-weight-convert',
    data: null,
  });
  index.push({
    id: 'calc-dosage',
    title: 'Medical Dosage Calculator',
    catLabel: 'Medical Calculators',
    text: 'medical dosage calculator dose medication mg mcg g ml concentration ratio cr dilution sd percent solution want have volume administer'.toLowerCase(),
    type: 'calc-dosage',
    data: null,
  });
  index.push({
    id: 'calc-iv-therapy',
    title: 'IV Therapy Calculator',
    catLabel: 'Medical Calculators',
    text: 'iv therapy calculator drip rate gtts ml hour bolus fluid maintenance 0.9 saline nacl cardiogenic shock macrodrip microdrip'.toLowerCase(),
    type: 'calc-iv-therapy',
    data: null,
  });
  index.push({
    id: 'med-hub',
    title: 'Medication Information',
    catLabel: 'Medication Information',
    text: 'medication medications drugs pharma pharmacology field rx home meds ems drugs paramedic suffix pril olol statin doac nitro aspirin naloxone'.toLowerCase(),
    type: 'med-hub',
    data: null,
  });
  if (typeof MEDICATIONS !== 'undefined') {
    MEDICATIONS.forEach(m => {
      index.push({
        id: `med-${m.id}`,
        title: m.name,
        catLabel: 'Medication Information',
        text: [m.name, m.category, m.indication, ...(m.tags || [])].join(' ').toLowerCase(),
        type: 'med-drug',
        data: m,
      });
    });
  }
  return index;
}

let searchIndex = null;

function setHomeSearchOverlay(active) {
  const home = $('view-home');
  if (home) home.classList.toggle('home-searching', !!active);
}

function performSearch(query, containerEl, onResultClick) {
  if (!searchIndex) searchIndex = buildSearchIndex();
  const q = query.trim().toLowerCase();
  const isGlobalHome = containerEl && containerEl.id === 'search-results';

  if (!q) {
    containerEl.hidden = true;
    if (isGlobalHome) setHomeSearchOverlay(false);
    return;
  }

  const results = searchIndex.filter(item => item.text.includes(q) || item.title.toLowerCase().includes(q));
  containerEl.hidden = false;
  if (isGlobalHome) setHomeSearchOverlay(true);

  if (!results.length) {
    containerEl.innerHTML = '<div class="search-result-item"><div class="search-result-title">No results</div></div>';
    return;
  }

  containerEl.innerHTML = results.slice(0, 20).map((r, i) =>
    `<div class="search-result-item" data-idx="${i}">
      <div class="search-result-title">${r.title}</div>
      <div class="search-result-cat">${r.catLabel}</div>
    </div>`
  ).join('');

  containerEl.querySelectorAll('.search-result-item').forEach((el, i) => {
    el.addEventListener('click', () => onResultClick(results[i]));
  });
}

// ─── Pre-Sepsis Tool (FAST ParaHEWS) — ported from provided React reference ──
const presepsisState = {
  suspect: null,
  scores: {},
};

const PRESEPSIS_PARA_DATA = [
  {
    id: 'hr',
    name: 'Heart Rate / Pulse',
    options: [
      { label: '<41', value: 2, tier: 'o' },
      { label: '41-50', value: 1, tier: 'y' },
      { label: '51-100', value: 0, tier: 'g' },
      { label: '101-110', value: 1, tier: 'y' },
      { label: '111-130', value: 2, tier: 'o' },
      { label: '≥131', value: 3, tier: 'r' },
    ],
  },
  {
    id: 'sbp',
    name: 'Systolic BP',
    options: [
      { label: '<71', value: 3, tier: 'r' },
      { label: '71-90', value: 2, tier: 'o' },
      { label: '91-170', value: 0, tier: 'g' },
      { label: '171-200', value: 2, tier: 'o' },
      { label: '≥201', value: 3, tier: 'r' },
    ],
  },
  {
    id: 'rr',
    name: 'Respiratory Rate',
    options: [
      { label: '<8', value: 3, tier: 'r' },
      { label: '8-13', value: 2, tier: 'o' },
      { label: '14-20', value: 0, tier: 'g' },
      { label: '21-30', value: 2, tier: 'o' },
      { label: '≥31', value: 3, tier: 'r' },
    ],
  },
  {
    id: 'temp',
    name: 'Temperature (C)',
    options: [
      { label: '<35', value: 3, tier: 'r' },
      { label: '35.0-36.0', value: 1, tier: 'y' },
      { label: '36.1-37.9 (or N/A)', value: 0, tier: 'g' },
      { label: '38.0-39.0', value: 1, tier: 'y' },
      { label: '≥39.1', value: 2, tier: 'o' },
    ],
  },
  {
    id: 'o2sat',
    name: 'O₂ Saturation',
    options: [
      { label: '<85', value: 3, tier: 'r' },
      { label: '85-92', value: 1, tier: 'y' },
      { label: '≥93', value: 0, tier: 'g' },
    ],
  },
  {
    id: 'o2therapy',
    name: 'O₂ Therapy',
    options: [
      { label: 'Room Air', value: 0, tier: 'g' },
      { label: 'O₂ via nasal prongs', value: 1, tier: 'y' },
      { label: 'O₂ via face mask', value: 3, tier: 'r' },
    ],
  },
  {
    id: 'cns',
    name: 'Change in CNS',
    options: [
      { label: 'New Confusion', value: 2, tier: 'o' },
      { label: 'Alert or Usual Self', value: 0, tier: 'g' },
      { label: 'Voice', value: 1, tier: 'y' },
      { label: 'Pain', value: 2, tier: 'o' },
      { label: 'Not responsive', value: 3, tier: 'r' },
    ],
  },
];

function presepsisEsc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function presepsisTotal() {
  return Object.values(presepsisState.scores).reduce((sum, x) => sum + x.value, 0);
}

function renderPreSepsisParaRows() {
  const root = $('presepsis-para-rows');
  if (!root) return;
  root.innerHTML = PRESEPSIS_PARA_DATA.map(param => {
    const sel = presepsisState.scores[param.id];
    const buttons = param.options.map((opt, oidx) => {
      const on = sel && sel.label === opt.label;
      const tierClass = on ? `presepsis-opt--on tier-${opt.tier}` : '';
      const pts = on ? '' : `<span class="presepsis-opt-val">(${opt.value})</span>`;
      return `<button type="button" class="presepsis-opt-btn ${tierClass}" data-param="${param.id}" data-oidx="${oidx}"><span>${presepsisEsc(opt.label)}</span>${pts}</button>`;
    }).join('');
    const scoreBadge = sel ? `<span class="presepsis-param-score">Score: ${sel.value}</span>` : '';
    return `<div class="presepsis-param-block"><div class="presepsis-param-head"><h3>${presepsisEsc(param.name)}</h3>${scoreBadge}</div><div class="presepsis-opt-grid">${buttons}</div></div>`;
  }).join('');
}

function updatePreSepsisFooter() {
  const footer = $('presepsis-footer');
  const view = $('view-presepsis');
  const totalEl = $('presepsis-total');
  const panel = $('presepsis-alert-panel');
  const idle = $('presepsis-alert-idle');
  const active = $('presepsis-alert-active');
  if (!footer || !totalEl || !panel) return;

  const showFooter = presepsisState.suspect === true;
  footer.hidden = !showFooter;
  if (view) view.classList.toggle('presepsis--footer-on', showFooter);

  if (!showFooter) return;

  const total = presepsisTotal();
  totalEl.textContent = String(total);
  const isAlert = total >= 5 && presepsisState.suspect === true;
  panel.classList.toggle('presepsis-alert--on', isAlert);
  if (idle) idle.hidden = isAlert;
  if (active) active.hidden = !isAlert;
}

function presepsisSyncGateway() {
  const yes = $('presepsis-yes');
  const no = $('presepsis-no');
  const msg = $('presepsis-not-indicated');
  const para = $('presepsis-para-section');
  if (yes) {
    yes.classList.toggle('presepsis--selected-yes', presepsisState.suspect === true);
  }
  if (no) {
    no.classList.toggle('presepsis--selected-no', presepsisState.suspect === false);
  }
  if (msg) msg.hidden = presepsisState.suspect !== false;
  if (para) para.hidden = presepsisState.suspect !== true;
}

function presepsisRefreshUI() {
  presepsisSyncGateway();
  if (presepsisState.suspect === true) {
    renderPreSepsisParaRows();
  } else {
    const root = $('presepsis-para-rows');
    if (root) root.innerHTML = '';
  }
  updatePreSepsisFooter();
}

function initPreSepsisTool() {
  const yes = $('presepsis-yes');
  const no = $('presepsis-no');
  const reset = $('presepsis-reset');
  const rows = $('presepsis-para-rows');

  if (yes) {
    yes.addEventListener('click', () => {
      presepsisState.suspect = true;
      presepsisSyncGateway();
      renderPreSepsisParaRows();
      updatePreSepsisFooter();
    });
  }
  if (no) {
    no.addEventListener('click', () => {
      presepsisState.suspect = false;
      presepsisState.scores = {};
      presepsisSyncGateway();
      if (rows) rows.innerHTML = '';
      updatePreSepsisFooter();
    });
  }
  if (reset) {
    reset.addEventListener('click', () => {
      presepsisState.suspect = null;
      presepsisState.scores = {};
      presepsisSyncGateway();
      if (rows) rows.innerHTML = '';
      updatePreSepsisFooter();
    });
  }

  if (rows) {
    rows.addEventListener('click', e => {
      const btn = e.target.closest('.presepsis-opt-btn');
      if (!btn || btn.dataset.param == null) return;
      const paramId = btn.dataset.param;
      const oidx = Number(btn.dataset.oidx, 10);
      const param = PRESEPSIS_PARA_DATA.find(p => p.id === paramId);
      if (!param || param.options[oidx] == null) return;
      const opt = param.options[oidx];
      presepsisState.scores[paramId] = { label: opt.label, value: opt.value };
      renderPreSepsisParaRows();
      updatePreSepsisFooter();
    });
  }
}

// ─── Burn Calculator (Rule of Nines) ───────────────────────────────────────────
const burnState = {
  type: 'adult',
  selected: new Set(),
  zoom: false,
  degree: '2nd',
};

const BURN_BASE_PATH = {
  adult: 'M50,5 Q60,5 65,20 Q65,35 50,35 Q35,35 35,20 Q40,5 50,5 M32,35 L68,35 L92,45 L88,85 L72,75 L68,135 L32,135 L28,75 L12,85 L8,45 Z',
  pediatric: 'M50,5 Q75,5 75,30 Q75,55 50,55 Q25,55 25,30 Q25,5 50,5 M30,60 L70,60 L92,75 L88,105 L75,95 L70,135 L30,135 L25,95 L12,105 L8,75 Z',
};

const BURN_BODY_DATA = {
  adult: {
    front: [
      { id: 'af_head', label: 'Head (Front)', value: 4.5, path: 'M50,5 Q55,5 60,10 Q65,20 60,30 Q50,35 40,30 Q35,20 40,10 Q45,5 50,5' },
      { id: 'af_torso', label: 'Torso (Front)', value: 18, path: 'M32,35 L68,35 L72,75 L28,75 Z' },
      { id: 'af_arm_l', label: 'Left Arm (Front)', value: 4.5, path: 'M68,35 L92,45 L88,85 L72,75 Z' },
      { id: 'af_arm_r', label: 'Right Arm (Front)', value: 4.5, path: 'M32,35 L8,45 L12,85 L28,75 Z' },
      { id: 'af_leg_l', label: 'Left Leg (Front)', value: 9, path: 'M50,85 L72,75 L68,135 L52,135 Z' },
      { id: 'af_leg_r', label: 'Right Leg (Front)', value: 9, path: 'M50,85 L28,75 L32,135 L48,135 Z' },
      { id: 'af_groin', label: 'Groin', value: 1, path: 'M44,75 L56,75 L50,85 Z' },
    ],
    back: [
      { id: 'ab_head', label: 'Head (Back)', value: 4.5, path: 'M50,5 Q55,5 60,10 Q65,20 60,30 Q50,35 40,30 Q35,20 40,10 Q45,5 50,5' },
      { id: 'ab_torso', label: 'Torso (Back)', value: 18, path: 'M32,35 L68,35 L72,75 L28,75 Z' },
      { id: 'ab_arm_l', label: 'Left Arm (Back)', value: 4.5, path: 'M68,35 L92,45 L88,85 L72,75 Z' },
      { id: 'ab_arm_r', label: 'Right Arm (Back)', value: 4.5, path: 'M32,35 L8,45 L12,85 L28,75 Z' },
      { id: 'ab_leg_l', label: 'Left Leg (Back)', value: 9, path: 'M50,85 L72,75 L68,135 L52,135 Z' },
      { id: 'ab_leg_r', label: 'Right Leg (Back)', value: 9, path: 'M50,85 L28,75 L32,135 L48,135 Z' },
    ],
  },
  pediatric: {
    front: [
      { id: 'pf_head', label: 'Head (Front)', value: 9, path: 'M50,5 Q65,5 75,20 Q75,40 65,55 Q50,65 35,55 Q25,40 25,20 Q35,5 50,5' },
      { id: 'pf_torso', label: 'Torso (Front)', value: 18, path: 'M30,60 L70,60 L75,95 L25,95 Z' },
      { id: 'pf_arm_l', label: 'Left Arm (Front)', value: 4.5, path: 'M70,65 L92,75 L88,105 L75,95 Z' },
      { id: 'pf_arm_r', label: 'Right Arm (Front)', value: 4.5, path: 'M30,65 L8,75 L12,105 L25,95 Z' },
      { id: 'pf_leg_l', label: 'Left Leg (Front)', value: 7, path: 'M50,95 L75,95 L70,135 L52,135 Z' },
      { id: 'pf_leg_r', label: 'Right Leg (Front)', value: 7, path: 'M50,95 L25,95 L30,135 L48,135 Z' },
    ],
    back: [
      { id: 'pb_head', label: 'Head (Back)', value: 9, path: 'M50,5 Q65,5 75,20 Q75,40 65,55 Q50,65 35,55 Q25,40 25,20 Q35,5 50,5' },
      { id: 'pb_torso', label: 'Torso (Back)', value: 13, path: 'M30,60 L70,60 L75,95 L25,95 Z' },
      { id: 'pb_arm_l', label: 'Left Arm (Back)', value: 4.5, path: 'M70,65 L92,75 L88,105 L75,95 Z' },
      { id: 'pb_arm_r', label: 'Right Arm (Back)', value: 4.5, path: 'M30,65 L8,75 L12,105 L25,95 Z' },
      { id: 'pb_leg_l', label: 'Left Leg (Back)', value: 7, path: 'M50,95 L75,95 L70,135 L52,135 Z' },
      { id: 'pb_leg_r', label: 'Right Leg (Back)', value: 7, path: 'M50,95 L25,95 L30,135 L48,135 Z' },
      { id: 'pb_butt_l', label: 'Left Buttock', value: 2.5, path: 'M50,95 L75,95 L72,108 L50,108 Z' },
      { id: 'pb_butt_r', label: 'Right Buttock', value: 2.5, path: 'M50,95 L25,95 L28,108 L50,108 Z' },
    ],
  },
};

function burnTextPos(id, type) {
  if (id.includes('head')) return { x: 50, y: type === 'adult' ? 18 : 30 };
  if (id.includes('torso')) return { x: 50, y: type === 'adult' ? 55 : 78 };
  if (id.includes('arm_l')) return { x: 80, y: type === 'adult' ? 62 : 85 };
  if (id.includes('arm_r')) return { x: 20, y: type === 'adult' ? 62 : 85 };
  if (id.includes('leg_l')) return { x: 60, y: 110 };
  if (id.includes('leg_r')) return { x: 40, y: 110 };
  if (id.includes('groin')) return { x: 50, y: 78 };
  if (id.includes('butt_l')) return { x: 62, y: 101 };
  if (id.includes('butt_r')) return { x: 38, y: 101 };
  return { x: 50, y: 72 };
}

function burnRender() {
  const mount = $('burn-diagrams');
  if (!mount) return;
  const t = burnState.type;
  const d = BURN_BODY_DATA[t];
  const base = BURN_BASE_PATH[t];
  mount.classList.toggle('burn-diagrams--zoom', burnState.zoom);
  const mk = (label, parts) => {
    const paths = parts.map(part => {
      const sel = burnState.selected.has(part.id);
      const pos = burnTextPos(part.id, t);
      return `<g class="burn-hit" data-id="${part.id}" role="button" tabindex="0">
        <path d="${part.path}" class="burn-region${sel ? ' burn-region--selected' : ''}" />
        <text x="${pos.x}" y="${pos.y}" class="burn-pct${sel ? ' burn-pct--on' : ''}" text-anchor="middle" dominant-baseline="middle">${part.value}%</text>
      </g>`;
    }).join('');
    return `<div class="burn-figure"><span class="burn-side-label">${label}</span>
      <svg class="burn-svg" viewBox="0 0 100 145" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="${base}" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        ${paths}
      </svg></div>`;
  };
  mount.innerHTML = mk('Front', d.front) + mk('Back', d.back);
}

function burnComputeTotal() {
  const t = burnState.type;
  const all = BURN_BODY_DATA[t].front.concat(BURN_BODY_DATA[t].back);
  let sum = 0;
  burnState.selected.forEach(sid => {
    const p = all.find(x => x.id === sid);
    if (p) sum += p.value;
  });
  return parseFloat(sum.toFixed(1));
}

function burnShortLabel(label) {
  return label.replace(/\s*\(Front\)\s*$/i, '').replace(/\s*\(Back\)\s*$/i, '').trim();
}

function burnUpdateResult() {
  const mount = $('burn-result-mount');
  if (!mount) return;
  const total = burnComputeTotal();
  const has = burnState.selected.size > 0;
  const t = burnState.type;
  const all = BURN_BODY_DATA[t].front.concat(BURN_BODY_DATA[t].back);
  const tags = [...burnState.selected].map(sid => {
    const p = all.find(x => x.id === sid);
    return p ? `<span class="burn-tag">${burnShortLabel(p.label)}</span>` : '';
  }).join('');
  mount.innerHTML = `
    <div class="burn-result-card${has ? ' burn-result-card--on' : ''}">
      <span class="burn-result-badge">Calculated TBSA</span>
      <div class="burn-result-pct">${total}%</div>
      <div class="burn-result-tags">${has ? tags : '<span class="burn-result-hint">Select burn areas above…</span>'}</div>
    </div>`;
}

function burnUpdateBls() {
  const mount = $('burn-bls-mount');
  if (!mount) return;
  const pct = burnComputeTotal();
  const deg = burnState.degree;
  if (pct === 0) {
    mount.innerHTML = `<div class="burn-bls">
      <div class="burn-bls-head"><div class="burn-bls-icon">i</div><div class="burn-bls-title">Ontario BLS standards</div></div>
      <p class="burn-bls-idle">Select body regions and a burn degree to view treatment reminders aligned with Ontario BLS burn care.</p>
    </div>`;
    return;
  }
  const items = [];
  if (pct < 15) {
    items.push('For burn sites estimated to involve &lt;15% of body surface area, cool burns and limit cooling to &lt;30 minutes to prevent hypothermia.');
  }
  if (pct >= 15) {
    items.push('TBSA ≥15%: Monitor closely. Discontinue cooling if shivering or hypotension develops.');
  }
  if (deg === '1st') {
    items.push('Cover all 1st degree burns with moist sterile dressing, then cover with a dry sheet or blanket.');
  }
  if (deg === '2nd' && pct < 15) {
    items.push('Cover 2nd degree burns involving &lt;15% TBSA with moist sterile dressing, then a dry sheet or blanket.');
  }
  if (deg === '2nd' && pct >= 15) {
    items.push('Cover 2nd degree burns involving ≥15% TBSA with dry sterile dressing or sheet.');
  }
  if (deg === '3rd') {
    items.push('Cover all 3rd degree burns with dry sterile dressing or sheet.');
  }
  items.push('Stop the burning process. When removing clothing, cut around clothing adherent to skin.');
  items.push('Dress digits individually; leave blisters intact.');
  items.push('Keep the patient warm and prepare for expected problems (airway obstruction, respiratory distress, agitation, etc.).');
  mount.innerHTML = `<div class="burn-bls">
    <div class="burn-bls-head"><div class="burn-bls-icon">i</div><div class="burn-bls-title">Ontario BLS standards</div></div>
    <ul>${items.map(x => `<li>${x}</li>`).join('')}</ul>
  </div>`;
}

function burnToggle(id) {
  if (burnState.selected.has(id)) burnState.selected.delete(id);
  else burnState.selected.add(id);
  burnRender();
  burnUpdateResult();
  burnUpdateBls();
}

function burnSyncTypeButtons() {
  const adult = $('burn-type-adult');
  const ped = $('burn-type-ped');
  if (adult) adult.classList.toggle('burn-type-btn--on', burnState.type === 'adult');
  if (ped) ped.classList.toggle('burn-type-btn--on', burnState.type === 'pediatric');
}

function burnSyncDegButtons() {
  document.querySelectorAll('.burn-deg-btn').forEach(btn => {
    const d = btn.getAttribute('data-burn-degree');
    btn.classList.toggle('burn-deg-btn--on', d === burnState.degree);
  });
}

function burnRefreshUI() {
  burnSyncTypeButtons();
  burnSyncDegButtons();
  burnRender();
  burnUpdateResult();
  burnUpdateBls();
}

function initBurnCalculator() {
  const diagrams = $('burn-diagrams');
  if (diagrams && !diagrams.dataset.bound) {
    diagrams.dataset.bound = '1';
    diagrams.addEventListener('click', e => {
      const hit = e.target.closest('.burn-hit');
      if (hit && hit.dataset.id) burnToggle(hit.dataset.id);
    });
  }
  const adult = $('burn-type-adult');
  if (adult && !adult.dataset.bound) {
    adult.dataset.bound = '1';
    adult.addEventListener('click', () => {
      burnState.type = 'adult';
      burnState.selected = new Set();
      burnRefreshUI();
    });
  }
  const ped = $('burn-type-ped');
  if (ped && !ped.dataset.bound) {
    ped.dataset.bound = '1';
    ped.addEventListener('click', () => {
      burnState.type = 'pediatric';
      burnState.selected = new Set();
      burnRefreshUI();
    });
  }
  const degRow = document.querySelector('.burn-degree-row');
  if (degRow && !degRow.dataset.bound) {
    degRow.dataset.bound = '1';
    degRow.addEventListener('click', e => {
      const b = e.target.closest('.burn-deg-btn');
      if (!b) return;
      const d = b.getAttribute('data-burn-degree');
      if (!d) return;
      burnState.degree = d;
      burnSyncDegButtons();
      burnUpdateBls();
    });
  }
  const zoomBtn = $('burn-btn-zoom');
  if (zoomBtn && !zoomBtn.dataset.bound) {
    zoomBtn.dataset.bound = '1';
    zoomBtn.addEventListener('click', () => {
      burnState.zoom = !burnState.zoom;
      burnRender();
    });
  }
  const resetBtn = $('burn-btn-reset');
  if (resetBtn && !resetBtn.dataset.bound) {
    resetBtn.dataset.bound = '1';
    resetBtn.addEventListener('click', () => {
      burnState.selected = new Set();
      burnRefreshUI();
    });
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────
function init() {
  // Home nav buttons
  document.querySelectorAll('.home-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const viewId = btn.dataset.view;
      const labels = {
        'view-pcp': DEFAULT_HEADER_TITLE,
        'view-special-event': DEFAULT_HEADER_TITLE,
        'view-special': DEFAULT_HEADER_TITLE,
        'view-companion': DEFAULT_HEADER_TITLE,
        'view-references': DEFAULT_HEADER_TITLE,
        'view-calculators': 'Calculators',
        'view-medications': 'Medications',
        'view-burn': 'Burn %',
        'view-lams': 'LAMS Calculator',
        'view-ped-calc': 'Pediatric Values Calculator',
        'view-o2-duration': 'O₂ Duration',
        'view-weight-convert': 'Weight Converter',
        'view-dosage-calc': 'Dosage Calc',
        'view-iv-therapy': 'IV Therapy',
        'view-parkland-burn': 'Parkland',
        'view-contact': DEFAULT_HEADER_TITLE,
        'view-destination': DEFAULT_HEADER_TITLE,
      };
      showView(viewId, labels[viewId] || DEFAULT_HEADER_TITLE);
    });
  });

  // Back button
  $('back-btn').addEventListener('click', goBack);

  const helpBtn = $('header-help-btn');
  if (helpBtn) {
    helpBtn.addEventListener('click', () => openInstallHelpModal());
  }
  const helpModal = $('install-help-modal');
  if (helpModal) {
    helpModal.querySelector('.help-modal-backdrop')?.addEventListener('click', closeInstallHelpModal);
    helpModal.querySelector('.help-modal-close')?.addEventListener('click', closeInstallHelpModal);
  }

  initLogoPicker();
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const rv = $('ref-image-viewer');
    if (rv && !rv.hidden) {
      closeRefImageViewer();
      return;
    }
    const logoModal = $('logo-picker-modal');
    if (logoModal && !logoModal.hidden) {
      closeLogoPickerModal();
      return;
    }
    if (helpModal && !helpModal.hidden) closeInstallHelpModal();
  });

  // Build PCP list
  buildCategoryList($('pcp-list'), getDirectivesByCategory, directive => {
    if (directive.type === 'bls-standard') {
      renderBlsStandardDetail(directive.standard, directive.group);
      showView('view-detail', headerTitleFromItem(directive.standard));
    } else {
      renderDirectiveDetail(directive);
      showView('view-detail', headerTitleFromItem(directive));
    }
  });

  // Build Companion list
  buildCategoryList($('companion-list'), getCompanionByCategory, entry => {
    renderCompanionDetail(entry);
    showView('view-detail', headerTitleFromItem(entry));
  });

  // Build Special list
  buildSpecialView();

  // Build References list
  buildReferencesView();

  buildCalculatorsView();
  buildMedicationsView();

  buildSpecialEventView();
  buildContactView();
  buildDestinationView();

  initSearchClearButtons();

  // PCP search
  $('pcp-search').addEventListener('input', e => {
    const q = e.target.value;
    if (!q.trim()) {
      $('pcp-list').querySelectorAll('.directive-row').forEach(r => { r.style.display = ''; });
      $('pcp-list').querySelectorAll('.cat-items').forEach(el => {
        el.style.display = '';
        el.classList.add('collapsed');
      });
      $('pcp-list').querySelectorAll('.cat-header').forEach(el => {
        el.style.display = '';
        el.classList.add('collapsed');
      });
      return;
    }
    const lq = q.toLowerCase();
    $('pcp-list').querySelectorAll('.cat-items').forEach(section => {
      let hasVisible = false;
      section.querySelectorAll('.directive-row').forEach(row => {
        const title = row.querySelector('.directive-row-title').textContent.toLowerCase();
        const matches = title.includes(lq);
        row.style.display = matches ? '' : 'none';
        if (matches) hasVisible = true;
      });
      const header = section.previousElementSibling;
      if (hasVisible) {
        section.classList.remove('collapsed');
        header.classList.remove('collapsed');
        section.style.display = '';
        header.style.display = '';
      } else {
        section.style.display = 'none';
        header.style.display = 'none';
      }
    });
  });

  // Companion search
  $('comp-search').addEventListener('input', e => {
    const q = e.target.value;
    if (!q.trim()) {
      $('companion-list').querySelectorAll('.directive-row').forEach(r => { r.style.display = ''; });
      $('companion-list').querySelectorAll('.cat-items').forEach(el => {
        el.style.display = '';
        el.classList.add('collapsed');
      });
      $('companion-list').querySelectorAll('.cat-header').forEach(el => {
        el.style.display = '';
        el.classList.add('collapsed');
      });
      return;
    }
    const lq = q.toLowerCase();
    $('companion-list').querySelectorAll('.cat-items').forEach(section => {
      let hasVisible = false;
      section.querySelectorAll('.directive-row').forEach(row => {
        const title = row.querySelector('.directive-row-title').textContent.toLowerCase();
        const matches = title.includes(lq);
        row.style.display = matches ? '' : 'none';
        if (matches) hasVisible = true;
      });
      const header = section.previousElementSibling;
      if (hasVisible) {
        section.classList.remove('collapsed');
        header.classList.remove('collapsed');
        section.style.display = '';
        header.style.display = '';
      } else {
        section.style.display = 'none';
        header.style.display = 'none';
      }
    });
  });

  bindFlatListSearch('ref-search', 'references-list');
  bindFlatListSearch('special-event-search', 'special-event-list');
  bindFlatListSearch('special-search', 'special-list');
  bindFlatListSearch('calculators-search', 'calculators-list');
  bindFlatListSearch('contact-search', 'contact-list');
  bindFlatListSearch('destination-search', 'destination-list');

  // Global search on home
  $('global-search').addEventListener('input', e => {
    performSearch(e.target.value, $('search-results'), result => {
      $('global-search').value = '';
      $('search-results').hidden = true;
      setHomeSearchOverlay(false);
      if (result.type === 'directive') {
        renderDirectiveDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'bls-standard') {
        renderBlsStandardDetail(result.data.standard, result.data.group);
        showView('view-detail', headerTitleFromItem(result.data.standard));
      } else if (result.type === 'palliative') {
        renderPalliativeDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'reference') {
        renderReferenceDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'specialevent') {
        renderSpecialEventDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'contact') {
        renderContactDetail(result.data.id, result.data.title);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'destination') {
        renderDestinationDetail(result.data.id, result.data.title);
        showView('view-detail', headerTitleFromItem(result.data));
      } else if (result.type === 'calc-hub') {
        showView('view-calculators', 'Calculators');
      } else if (result.type === 'calc-burn') {
        showView('view-burn', 'Burn %');
      } else if (result.type === 'calc-iv-therapy') {
        showView('view-iv-therapy', 'IV Therapy');
      } else if (result.type === 'calc-parkland') {
        showView('view-parkland-burn', 'Parkland');
      } else if (result.type === 'calc-gcs') {
        renderCalculatorDetail('gcs');
      } else if (result.type === 'calc-pcs') {
        renderCalculatorDetail('pcs');
      } else if (result.type === 'calc-lams') {
        showView('view-lams', 'LAMS Calculator');
      } else if (result.type === 'calc-pediatric-values') {
        showView('view-ped-calc', 'Pediatric Values Calculator');
      } else if (result.type === 'calc-o2-duration') {
        showView('view-o2-duration', 'O₂ Duration');
      } else if (result.type === 'calc-weight-convert') {
        showView('view-weight-convert', 'Weight Converter');
      } else if (result.type === 'calc-dosage') {
        showView('view-dosage-calc', 'Dosage Calc');
      } else if (result.type === 'presepsis') {
        showView('view-presepsis', 'Pre-Sepsis');
      } else if (result.type === 'med-hub') {
        medicationsOpenFromSearch(null);
      } else if (result.type === 'med-drug') {
        medicationsOpenFromSearch(result.data);
      } else {
        renderCompanionDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      }
    });
  });

  setupPinchZoomBlock();
  setupEdgeSwipeNavigation();

  initPreSepsisTool();
  initBurnCalculator();
  burnRefreshUI();
  initLamsTool();
  lamsRefreshUI();
  initPedCalcTool();
  pedCalcRefresh();
  initO2DurationTool();
  initWeightConvertTool();
  initDosageCalcTool();
  initParklandBurnTool();
  initIvTherapyTool();
  dextroseInit();
  epiAnaphylaxisInit();
  bronchoCalcInit();
  croupCalcInit();
  initRefImageViewer();

  const activeView = document.querySelector('.view.active');
  if (activeView) updateBackButtonVisibility(activeView.id);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(registration => registration.update().catch(() => {}))
      .catch(err => console.log('SW reg failed:', err));
  }
}

document.addEventListener('DOMContentLoaded', init);

// Always fetch sw.js fresh so the footer shows the live server version,
// not whatever version is frozen in the service worker cache.
(function fetchAppVersion() {
  fetch('sw.js', { cache: 'no-store' })
    .then(function(r) { return r.text(); })
    .then(function(text) {
      var m = text.match(/pcp-directives-v(\d+)/);
      var tag = document.getElementById('app-version-tag');
      if (m && tag) tag.textContent = 'App v' + m[1];
    })
    .catch(function() {});
})();
