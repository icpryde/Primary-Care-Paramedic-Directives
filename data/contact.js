// Contact reference content (CPER / regional). Verify numbers with your service.

const CONTACT_MENU = [
  { id: 'omc-patch', title: 'Online Medical Consultation (OMC) Patch' },
  { id: 'omc-bhp-list', title: 'OMC BHP Number List' },
  { id: 'physician-on-scene', title: 'Physician On-Scene Reference' },
  { id: 'contact-information', title: 'Contact Information' },
  { id: 'additional-contacts', title: 'Additional Contact Information Reference' },
  { id: 'child-protection', title: 'Child in Need of Protection' },
  { id: 'patching-template', title: 'Base Hospital Physician Patching Template' },
  { id: 'elder-abuse', title: 'How to Report Elder Abuse' },
];

function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function telDigits(s) {
  const d = String(s).replace(/\D/g, '');
  if (!d) return '';
  if (d.length === 10) return '+1' + d;
  if (d.length === 11 && d.startsWith('1')) return '+' + d;
  return '+' + d;
}

function tel(display, raw) {
  const href = 'tel:' + telDigits(raw);
  return `<a class="tel-link" href="${esc(href)}">${esc(display)}</a>`;
}

function mailto(label, addr) {
  return `<a class="mailto-link" href="mailto:${esc(addr)}">${esc(label)}</a>`;
}

const OMC_PHYSICIANS = [
  ['Michael Austin', '93761'],
  ['Kim Barker', '72299'],
  ['Dan Beamish', '107026'],
  ['Renee Bradley', '112019'],
  ['Nick Costain', '97795'],
  ['Richard Dionne', '75776'],
  ['Chris Evans', '86337'],
  ['Natasha Ewert', '103531'],
  ['Mark Froats', '90680'],
  ['Justin Godbout', '108994'],
  ['Connor Inglis', '118659'],
  ['Paul Miller', '76090'],
  ['Simeon Mitchell', '101098'],
  ['Jennifer Moore', '98157'],
  ['Philip Moran', '70208'],
  ['Sara-Pier Piscopo', '112007'],
  ['Jason Prpic', '73974'],
  ['Rupinder Sahsi', '76338'],
  ['David Savage', '103493'],
  ['Catherine Sellens', '67935'],
  ['Paula Sneath', '115152'],
  ['Margaret (Maggie) Vincent', '120824'],
  ['Ayesha Zia', '100347'],
  ['Harmine Christina Leo (PTM Fellow)', '267561'],
  ['Mohammed Abdulnasser Molan Ahmd (PTM Fellow)', '150730'],
  ['Amanda Mattice (PTM Fellow)', '131835'],
  ['Sabrina Slade (PTM Fellow)', '118986'],
];

const STAFF_ROWS = [
  { name: 'Tim Dodd', role: 'Regional Program Manager / Director', ext: '', mobile: '905-515-4818', email: 'tdodd@cper.ca' },
  { name: 'Dr. Paul Miller', role: 'Interim Medical Director', ext: '', mobile: '', email: 'millerpa@hhsc.ca' },
  { name: 'Dr. Clare Wallner', role: 'Associate Medical Director', ext: '', mobile: '', email: 'wallnero@mcmaster.ca' },
  { name: 'Dr. Rupinder Sahsi', role: 'Assistant Medical Director', ext: '', mobile: '', email: 'rupinder@sahsi.net' },
  { name: 'Dr. Erich Hanel', role: 'Assistant Medical Director', ext: '', mobile: '', email: 'erich.hanel@medportal.ca' },
  { name: 'Colette Easton', role: 'Administrative Assistant (Directors)', ext: '71226', mobile: '', email: 'ceaston@cper.ca' },
  { name: 'Audrey Collie', role: 'Administrative Assistant (Programs)', ext: '71229', mobile: '', email: 'acollie@cper.ca' },
  { name: 'Jackie Swing', role: 'Administrative Assistant', ext: '71223', mobile: '', email: 'jswing@cper.ca' },
  { name: 'Angela Burgess', role: 'Quality Specialist', ext: '', mobile: '289-286-0975', email: 'aburgess@cper.ca' },
  { name: 'Kailash Selvaratinam', role: 'Quality Specialist', ext: '', mobile: '905-870-4457', email: 'kselvar@cper.ca' },
  { name: 'Stephanie Coletta', role: 'Paramedic Educator', ext: '', mobile: '905-515-0659', email: 'scoletta@cper.ca' },
  { name: 'David Plyley', role: 'Paramedic Educator', ext: '', mobile: '289-257-1774', email: 'dplyley@cper.ca' },
  { name: 'Jenn Radoslav', role: 'Paramedic Educator', ext: '', mobile: '289-260-3268', email: 'jradoslav@cper.ca' },
];

const CACC_ROWS = [
  ['CACC – Cambridge', '800-265-2215'],
  ['CACC – Hamilton', '905-574-1414'],
  ['CACC – Hamilton (Alternate)', '800-263-5767'],
  ['CACC – Niagara Ambulance Communication Centre', '905-704-4005'],
  ['CACC – Niagara (Alt)', '866-895-6227'],
];

const EMS_ROWS = [
  ['County of Brant Ambulance', '519-756-4570'],
  ['Dufferin County Paramedic Service', '519-941-9608'],
  ['Guelph-Wellington EMS', '519-824-1677'],
  ['Haldimand County EMS', '905-318-5932'],
  ['Hamilton Paramedic Service', '905-546-2424'],
  ['Niagara EMS', '905-641-0827'],
  ['Norfolk County EMS', '519-426-4111'],
  ['Region of Waterloo Paramedic Service', '519-650-8295'],
  ['Six Nations Ambulance Service', '519-445-4000'],
];

const CAS_ROWS = [
  { org: 'Dufferin Child and Family Protection Services', lines: [['Bus', '519-941-1530']] },
  { org: 'Family & Children’s Services of Guelph and Wellington County', lines: [['Bus', '519-824-2410']] },
  { org: 'Children’s Aid Society of Hamilton', lines: [['Bus', '905-522-1121']] },
  { org: 'Catholic Children’s Aid Society of Hamilton', lines: [['Bus', '905-525-2012']] },
  { org: 'Family & Children’s Services Niagara', lines: [['Bus', '888-937-7731']] },
  { org: 'Children’s Aid Society of Haldimand and Norfolk', lines: [['Bus', '519-587-5437'], ['Toll free', '888-227-5437']] },
  { org: 'Brant Family and Children’s Services', lines: [['Bus', '519-753-8681'], ['Toll free', '888-753-8681']] },
  { org: 'Family & Children’s Services of the Waterloo Region', lines: [['Bus', '519-576-0540']] },
];

function buildContactDetailHtml(id) {
  let html = '';

  if (id === 'omc-patch') {
    html += `<div class="section-card contact-intro-card">
      <p class="contact-lead">Reference poster for Online Medical Consultation (OMC) patch process. Tap the patch number to call.</p>
      <img class="omc-poster-img" src="assets/omc-patch.png" alt="Online Medical Consultation OMC reference poster" />
    </div>`;

    html += `<div class="section-card patch-callout-card">
      <div class="patch-callout-label">CPER regional patch number</div>
      <a class="patch-callout-number" href="tel:+18885548011">1-888-554-8011</a>
    </div>`;

    html += `<div class="section-card"><div class="section-heading">ISBAR patching template</div>
      <p class="contact-muted">Structure your report using ISBAR:</p>
      <div class="isbar-stack">`;
    const isbar = [
      ['i', 'Identification', 'Identify BHP & introduce yourself (OASIS, service, ACP / PCP).'],
      ['S', 'Situation', 'Orders sought — age, sex, weight, problem / concern, ETA to hospital.'],
      ['B', 'Background', 'Pertinent +/- HPI (OPQRST), PMHx (SAMPLE).'],
      ['A', 'Assessment', 'Pertinent +/- physical exam, vital signs, ECG.'],
      ['R', 'Response', 'Response to treatment; reiterate orders sought; receive orders; <strong>repeat back orders</strong>.'],
    ];
    isbar.forEach(([letter, label, body]) => {
      html += `<div class="isbar-card">
        <div class="isbar-letter"><span>${letter}</span><small>${esc(label)}</small></div>
        <div class="isbar-body">${body}</div>
      </div>`;
    });
    html += `</div></div>`;

    html += `<div class="section-card connection-backup-card">
      <div class="section-heading">Connection issues</div>
      <p>Use <strong>CACC / radio backup</strong> to reach OMC BHP if the primary line fails.</p>
    </div>`;
    return html;
  }

  if (id === 'omc-bhp-list') {
    html += `<div class="section-card"><div class="section-heading">OMC physician list + CPSO #</div>
      <p class="contact-muted">Physicians available for OMC (verify current list with CPER).</p>
      <div class="physician-card-grid">`;
    OMC_PHYSICIANS.forEach(([name, cpso]) => {
      html += `<div class="info-chip-card">
        <div class="info-chip-name">${esc(name)}</div>
        <div class="info-chip-meta">CPSO #${esc(cpso)}</div>
      </div>`;
    });
    html += `</div></div>`;
    return html;
  }

  if (id === 'physician-on-scene') {
    html += `<div class="section-card"><div class="section-heading">For the paramedic</div>
      <p>When a physician is on scene, follow Ontario BLS PCS and your medical directives. If on-scene physician instructions conflict with your directives, follow your directives or contact a Regional Base Hospital Physician as per policy.</p>
    </div>`;
    html += `<div class="section-card"><div class="section-heading">Three options</div>
      <div class="option-cards">
        <div class="option-card"><h4>1. Offer assistance / suggestions</h4>
          <p>Must follow Ontario BLS PCS and/or paramedic medical directives. If instructions conflict, follow directives or patch RBHP.</p></div>
        <div class="option-card"><h4>2. Physician takes complete responsibility</h4>
          <p>The physician must accompany the patient to hospital. Paramedics assist but do not perform skills outside scope. Identification may be required.</p></div>
        <div class="option-card"><h4>3. Request to speak with base hospital physician</h4>
          <p>Physician may offer advice via patch for patient management.</p></div>
      </div>
    </div>`;
    return html;
  }

  if (id === 'contact-information') {
    html += `<div class="section-card org-address-card">
      <div class="section-heading">Centre for Prehospital Education &amp; Research (CPER)</div>
      <p class="address-block">430 McNeilly Road, Unit 201<br>Stoney Creek, ON &nbsp;L8E 5E3</p>
      <div class="kv-row"><span class="kv-label">Telephone</span><span class="kv-val">${tel('905-521-2100 ext. 71223', '9055212100')}</span></div>
      <div class="kv-row"><span class="kv-label">Fax</span><span class="kv-val">${tel('905-643-1104', '9056431104')}</span></div>
    </div>`;

    html += `<div class="section-card"><div class="section-heading">Staff directory</div>
      <div class="staff-card-list">`;
    STAFF_ROWS.forEach(row => {
      html += `<div class="staff-card">`;
      html += `<div class="staff-card-name">${esc(row.name)}</div>`;
      html += `<div class="staff-card-role">${esc(row.role)}</div>`;
      html += `<div class="staff-card-rows">`;
      if (row.ext) html += `<span><em>Ext</em> ${esc(row.ext)}</span>`;
      if (row.mobile) html += `<span><em>Mobile</em> ${tel(row.mobile, row.mobile)}</span>`;
      if (row.email) html += `<span><em>Email</em> ${mailto(row.email, row.email)}</span>`;
      html += `</div></div>`;
    });
    html += `</div></div>`;
    return html;
  }

  if (id === 'additional-contacts') {
    html += `<div class="section-card"><div class="section-heading">Central Ambulance Communication Centres (CACC)</div>
      <div class="phone-table">`;
    CACC_ROWS.forEach(([label, num]) => {
      html += `<div class="phone-table-row"><span class="ptr-org">${esc(label)}</span><span class="ptr-num">${tel(num, num)}</span></div>`;
    });
    html += `</div></div>`;

    html += `<div class="section-card"><div class="section-heading">Emergency medical services (non-emergency / dispatch)</div>
      <div class="phone-table">`;
    EMS_ROWS.forEach(([label, num]) => {
      html += `<div class="phone-table-row"><span class="ptr-org">${esc(label)}</span><span class="ptr-num">${tel(num, num)}</span></div>`;
    });
    html += `</div></div>`;
    return html;
  }

  if (id === 'child-protection') {
    html += `<div class="section-card"><div class="section-heading">Child in need of protection</div>
      <p>Paramedics have a duty to report under the <em>Child, Youth and Family Services Act</em> when a child may be in need of protection. Follow service policy and document thoroughly.</p>
      <p class="contact-muted">Below are sample Children’s Aid Society contacts — verify current numbers for your area.</p>
    </div>`;
    html += `<div class="section-card"><div class="section-heading">Children’s Aid Societies (sample)</div>
      <div class="cas-card-list">`;
    CAS_ROWS.forEach(entry => {
      html += `<div class="cas-card"><div class="cas-org">${esc(entry.org)}</div><div class="cas-lines">`;
      entry.lines.forEach(([kind, num]) => {
        html += `<div class="cas-line"><span>${esc(kind)}</span> ${tel(num, num)}</div>`;
      });
      html += `</div></div>`;
    });
    html += `</div></div>`;
    html += `<div class="section-card contact-footnote">
      <p><strong>References:</strong> Training Bulletin 116 – Child in Need of Protection Standard (March 2015); BLS PCS (verify current version).</p>
    </div>`;
    return html;
  }

  if (id === 'patching-template') {
    const fields = [
      ['Paramedic name', 'single'],
      ['Paramedic #', 'single'],
      ['Level of paramedic', 'choice', 'PCP / ACP'],
      ['Service / operator', 'single'],
      ['Chief complaint', 'single'],
      ['Patient age', 'single'],
      ['Patient gender', 'choice', 'M / F'],
      ['Reason for call', 'multi'],
      ['Event', 'multi'],
      ['Summary of events (pertinent prior to EMS arrival)', 'multi'],
      ['Assessment', 'multi'],
      ['Vital signs', 'vitals'],
      ['Interventions', 'multi'],
      ['Changes in status', 'multi'],
      ['Medical history (incl. meds & allergies)', 'multi'],
      ['Orders (read back to physician)', 'multi'],
    ];
    html += `<div class="section-card"><div class="section-heading">Base hospital physician patching template</div>
      <p class="contact-muted">Use for documentation / radio report structure. Not a substitute for service-specific forms.</p>
      <div class="patch-template-grid">`;
    fields.forEach(([label, type, extra]) => {
      if (type === 'vitals') {
        html += `<div class="patch-field patch-field-wide">
          <div class="patch-field-label">${esc(label)}</div>
          <div class="patch-subgrid">
            <div class="patch-line"><span>GCS</span><span class="patch-blank"></span></div>
            <div class="patch-line"><span>BP</span><span class="patch-blank"></span></div>
            <div class="patch-line"><span>HR</span><span class="patch-blank"></span></div>
            <div class="patch-line"><span>RR</span><span class="patch-blank"></span></div>
            <div class="patch-line"><span>BGL</span><span class="patch-blank"></span></div>
            <div class="patch-line"><span>SpO₂</span><span class="patch-blank"></span></div>
            <div class="patch-line patch-line-full"><span>Skin / temp / cap refill</span><span class="patch-blank"></span></div>
          </div>
        </div>`;
      } else if (type === 'choice') {
        html += `<div class="patch-field">
          <div class="patch-field-label">${esc(label)} <span class="patch-choices">(${esc(extra)})</span></div>
          <div class="patch-blank patch-blank-tall"></div>
        </div>`;
      } else if (type === 'multi') {
        html += `<div class="patch-field patch-field-wide">
          <div class="patch-field-label">${esc(label)}</div>
          <div class="patch-blank patch-blank-tall"></div>
          <div class="patch-blank patch-blank-tall"></div>
        </div>`;
      } else {
        html += `<div class="patch-field">
          <div class="patch-field-label">${esc(label)}</div>
          <div class="patch-blank"></div>
        </div>`;
      }
    });
    html += `</div></div>`;
    return html;
  }

  if (id === 'elder-abuse') {
    html += `<div class="section-card"><div class="section-heading">How do I report elder abuse?</div>
      <ol class="numbered-steps">`;
    const steps = [
      'If immediate danger, call <strong>911</strong> or your local police.',
      'For long-term care concerns, contact the <strong>Ministry of Long-Term Care</strong>.',
      'For retirement homes, contact the <strong>Retirement Homes Regulatory Authority (RHRA)</strong>.',
      'For community concerns, you may contact local police <strong>non-emergency</strong> lines.',
    ];
    steps.forEach(s => {
      html += `<li>${s}</li>`;
    });
    html += `</ol></div>`;

    html += `<div class="section-card"><div class="section-heading">Key phone numbers</div>
      <div class="phone-table">`;
    const elder = [
      ['Ministry of Long-Term Care', '866-434-0144'],
      ['Retirement Homes Regulatory Authority (RHRA)', '855-275-7472'],
      ['Waterloo Regional Police (non-emergency)', '519-570-9777'],
      ['Emergency', '911'],
    ];
    elder.forEach(([label, num]) => {
      const display = num === '911' ? '911' : num;
      html += `<div class="phone-table-row"><span class="ptr-org">${esc(label)}</span><span class="ptr-num">${num === '911' ? '<a class="tel-link" href="tel:911">911</a>' : tel(display, num)}</span></div>`;
    });
    html += `</div></div>`;
    return html;
  }

  return `<div class="section-card"><p>Content not found.</p></div>`;
}
