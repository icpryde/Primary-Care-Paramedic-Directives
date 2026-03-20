// ── PCP Directives App ──────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

// ─── State ──────────────────────────────────────────────────────────────────
const state = {
  history: [],
  /** Screens undone via Back, for swipe-forward (most recent at end). */
  forwardStack: [],
};

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
  'Terminal Congested Breathing': 'Terminal congestion',
  'Suspected Adrenal Crisis': 'Adrenal crisis',
  'Lateral Patellar Dislocation': 'Patellar dislocation',
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
  if (obj == null) return 'MEDICAL DIRECTIVES';
  if (typeof obj === 'string') {
    if (HEADER_TITLE_ALIASES[obj]) return HEADER_TITLE_ALIASES[obj];
    return trimHeaderTitle(obj, 24);
  }
  if (obj.navTitle) return obj.navTitle;
  const t = obj.title;
  if (!t) return 'MEDICAL DIRECTIVES';
  if (HEADER_TITLE_ALIASES[t]) return HEADER_TITLE_ALIASES[t];
  return trimHeaderTitle(t, 24);
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

  $('header-title').textContent = title || 'MEDICAL DIRECTIVES';
  updateBackButtonVisibility(viewId);
  if (viewId === 'view-presepsis') presepsisRefreshUI();
  if (viewId === 'view-burn') burnRefreshUI();
  if (viewId === 'view-lams') lamsRefreshUI();
  if (viewId === 'view-ped-calc') pedCalcRefresh();
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
  const helpBtn = $('header-help-btn');
  if (helpBtn) helpBtn.hidden = false;
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
        refImgViewer.tx =
          refImgViewer.panStart.tx + (e.touches[0].clientX - refImgViewer.panStart.x);
        refImgViewer.ty =
          refImgViewer.panStart.ty + (e.touches[0].clientY - refImgViewer.panStart.y);
        refImgViewerApply();
      } else if (e.touches.length === 2 && refImgViewer.lastPinchDist > 0) {
        e.preventDefault();
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
  });

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
  if (unitSel) unitSel.value = 'months';
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
  return DIRECTIVES.filter(d => d.category === catId);
}

function getCompanionByCategory(catId) {
  return COMPANION.filter(c => c.category === catId);
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
  container.innerHTML = '';

  const section = document.createElement('div');
  section.className = 'cat-section';

  const header = document.createElement('div');
  header.className = 'cat-header bg-gray';
  header.innerHTML = `<span class="cat-header-title">PCP Palliative Care Medical Directive</span><span class="cat-chevron"></span>`;
  header.addEventListener('click', () => {
    itemsEl.classList.toggle('collapsed');
    header.classList.toggle('collapsed');
  });

  const itemsEl = document.createElement('div');
  itemsEl.className = 'cat-items';

  // Overview / Introduction row
  const overviewRow = document.createElement('div');
  overviewRow.className = 'directive-row';
  overviewRow.innerHTML = `<span class="directive-row-title" style="font-weight:600;">Overview / Introduction</span><span class="directive-row-chevron"></span>`;
  overviewRow.addEventListener('click', () => {
    renderPalliativePreamble();
    showView('view-detail', 'Palliative overview');
  });
  itemsEl.appendChild(overviewRow);

  PALLIATIVE_DIRECTIVES.forEach(d => {
    const row = document.createElement('div');
    row.className = 'directive-row';
    row.innerHTML = `<span class="directive-row-title">${d.title}</span><span class="directive-row-chevron"></span>`;
    row.addEventListener('click', () => {
      renderPalliativeDetail(d);
      showView('view-detail', headerTitleFromItem(d));
    });
    itemsEl.appendChild(row);
  });

  itemsEl.classList.add('collapsed');
  header.classList.add('collapsed');

  section.appendChild(header);
  section.appendChild(itemsEl);
  container.appendChild(section);
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
function buildCalculatorsView() {
  const container = $('calculators-list');
  if (!container) return;
  const items = [
    { title: 'Pre-Sepsis Tool', fn: () => showView('view-presepsis', 'Pre-Sepsis') },
    { title: 'Burn Calculator', fn: () => showView('view-burn', 'Burn Calculator') },
    { title: 'LAMS Calculator', fn: () => showView('view-lams', 'LAMS Calculator') },
    { title: 'Pediatric Values Calculator', fn: () => showView('view-ped-calc', 'Pediatric Values Calculator') },
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
    text: 'medical calculators calculator pre-sepsis sepsis parahews burn rule of nines tbsa body surface glasgow coma pediatric pcs gcs lams stroke ped values weight'.toLowerCase(),
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
    title: 'Burn Calculator',
    catLabel: 'Medical Calculators',
    text: 'burn calculator rule of nines tbsa thermal bls dressing cooling pediatric adult groin'.toLowerCase(),
    type: 'calc-burn',
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
  return index;
}

let searchIndex = null;

function performSearch(query, containerEl, onResultClick) {
  if (!searchIndex) searchIndex = buildSearchIndex();
  const q = query.trim().toLowerCase();

  if (!q) {
    containerEl.hidden = true;
    return;
  }

  const results = searchIndex.filter(item => item.text.includes(q) || item.title.toLowerCase().includes(q));
  containerEl.hidden = false;

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
        'view-pcp': 'MEDICAL DIRECTIVES',
        'view-special-event': 'MEDICAL DIRECTIVES',
        'view-special': 'MEDICAL DIRECTIVES',
        'view-companion': 'MEDICAL DIRECTIVES',
        'view-references': 'MEDICAL DIRECTIVES',
        'view-calculators': 'Calculators',
        'view-burn': 'Burn Calculator',
        'view-lams': 'LAMS Calculator',
        'view-ped-calc': 'Pediatric Values Calculator',
        'view-contact': 'MEDICAL DIRECTIVES',
        'view-destination': 'MEDICAL DIRECTIVES',
      };
      showView(viewId, labels[viewId] || 'MEDICAL DIRECTIVES');
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
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const rv = $('ref-image-viewer');
    if (rv && !rv.hidden) {
      closeRefImageViewer();
      return;
    }
    if (helpModal && !helpModal.hidden) closeInstallHelpModal();
  });

  // Build PCP list
  buildCategoryList($('pcp-list'), getDirectivesByCategory, directive => {
    renderDirectiveDetail(directive);
    showView('view-detail', headerTitleFromItem(directive));
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

  buildSpecialEventView();
  buildContactView();
  buildDestinationView();

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

  // References search
  $('ref-search').addEventListener('input', e => {
    const q = e.target.value;
    if (!q.trim()) {
      $('references-list').querySelectorAll('.directive-row').forEach(r => { r.style.display = ''; });
      return;
    }
    const lq = q.toLowerCase();
    $('references-list').querySelectorAll('.directive-row').forEach(row => {
      const title = row.querySelector('.directive-row-title').textContent.toLowerCase();
      row.style.display = title.includes(lq) ? '' : 'none';
    });
  });

  // Global search on home
  $('global-search').addEventListener('input', e => {
    performSearch(e.target.value, $('search-results'), result => {
      $('global-search').value = '';
      $('search-results').hidden = true;
      if (result.type === 'directive') {
        renderDirectiveDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
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
        showView('view-burn', 'Burn Calculator');
      } else if (result.type === 'calc-gcs') {
        renderCalculatorDetail('gcs');
      } else if (result.type === 'calc-pcs') {
        renderCalculatorDetail('pcs');
      } else if (result.type === 'calc-lams') {
        showView('view-lams', 'LAMS Calculator');
      } else if (result.type === 'calc-pediatric-values') {
        showView('view-ped-calc', 'Pediatric Values Calculator');
      } else if (result.type === 'presepsis') {
        showView('view-presepsis', 'Pre-Sepsis');
      } else {
        renderCompanionDetail(result.data);
        showView('view-detail', headerTitleFromItem(result.data));
      }
    });
  });

  setupEdgeSwipeNavigation();

  initPreSepsisTool();
  initBurnCalculator();
  burnRefreshUI();
  initLamsTool();
  lamsRefreshUI();
  initPedCalcTool();
  pedCalcRefresh();
  initRefImageViewer();

  const activeView = document.querySelector('.view.active');
  if (activeView) updateBackButtonVisibility(activeView.id);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW reg failed:', err));
  }
}

document.addEventListener('DOMContentLoaded', init);
