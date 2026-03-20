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
  index.push({
    id: 'presepsis-tool',
    title: 'Pre-Sepsis Tool',
    catLabel: 'Tools',
    text: 'pre-sepsis pre sepsis fast parahews parhews infection alert capnography hospital notify gwps hps rowps clinical suspicion'.toLowerCase(),
    type: 'presepsis',
    data: null
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
        'view-presepsis': 'Pre-Sepsis',
        'view-contact': 'MEDICAL DIRECTIVES',
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
    if (e.key === 'Escape' && helpModal && !helpModal.hidden) {
      closeInstallHelpModal();
    }
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

  buildSpecialEventView();
  buildContactView();

  // PCP search
  $('pcp-search').addEventListener('input', e => {
    const q = e.target.value;
    if (!q.trim()) {
      $('pcp-list').querySelectorAll('.directive-row').forEach(r => { r.style.display = ''; });
      $('pcp-list').querySelectorAll('.cat-items').forEach(el => { el.classList.remove('collapsed'); });
      $('pcp-list').querySelectorAll('.cat-header').forEach(el => { el.classList.remove('collapsed'); });
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
      $('companion-list').querySelectorAll('.cat-items').forEach(el => { el.classList.remove('collapsed'); });
      $('companion-list').querySelectorAll('.cat-header').forEach(el => { el.classList.remove('collapsed'); });
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

  const activeView = document.querySelector('.view.active');
  if (activeView) updateBackButtonVisibility(activeView.id);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW reg failed:', err));
  }
}

document.addEventListener('DOMContentLoaded', init);
