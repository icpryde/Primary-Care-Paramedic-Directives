// Destination Guidelines — transcribed for mobile viewing (Ontario BLS PCS v3.4 + regional ops).
// Confirm operational detail with your service / CACC / hospital partners.

const MOH_BLS_PCS_V34_PDF =
  'https://files.ontario.ca/moh_2/moh-standards-basic-life-support-patient-care-standards-v3-4-en-2023-03-10.pdf';

const DESTINATION_MENU = [
  {
    id: 'prompt-acute-stroke',
    title: 'Acute Stroke Bypass Protocol',
    keywords: 'stroke dsc lvo lams ctas bypass evt telestroke acute stroke protocol prompt card',
  },
  {
    id: 'prompt-stemi-bypass',
    title: 'STEMI Bypass Protocol',
    keywords: 'stemi pci cath lab bypass fibrinolytic southlake srhc st elevation ami chest pain pci centre lbbb',
  },
  {
    id: 'fast-sepsis-prealert',
    title: 'FAST Sepsis Pre-Alert',
    keywords: 'sepsis prealert parahews fast infection hospital alert',
  },
  {
    id: 'field-trauma-triage',
    title: 'Field Trauma Triage Standards',
    keywords: 'trauma triage field mechanism injury lth physiological anatomical prompt card flowchart',
  },
  {
    id: 'air-ambulance-utilization',
    title: 'Air Ambulance Utilization Standard',
    keywords: 'ornge helicopter air ambulance operational clinical criteria aco',
  },
  {
    id: 'deceased-patient',
    title: 'Deceased Patient Standards',
    keywords: 'death pronouncement coroner police scene preservation body',
  },
  {
    id: 'prompt-spinal-motion-restriction',
    title: 'Spinal Motion Restriction Standard',
    keywords: 'smr spinal motion restriction standard collar penetrating moi prompt card',
  },
  {
    id: 'twelve-lead-acs',
    title: '12 Lead and Acute Coronary Syndrome Process',
    keywords: 'acs stemi ecg fibrinolytic cardiac interventionalist srhc',
  },
  {
    id: 'fit-2-sit',
    title: 'Fit 2 Sit Process',
    keywords: 'fit2sit fit to sit ctas gcs rowpsv grh cmh st mary exclusion inclusion',
  },
  {
    id: 'radio-channel-change',
    title: 'Radio Channel Change Locations',
    keywords: 'radio nia reg2 moh zn prov com fifty road qew cacc tac',
  },
];

function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function blsSourceFooter() {
  return `<p class="destination-source-footer">Official reference: <a href="${esc(MOH_BLS_PCS_V34_PDF)}" target="_blank" rel="noopener">Ontario MOH <em>Basic Life Support Patient Care Standards</em> v3.4</a>. Cross-check with the current published standard.</p>`;
}

function flowchartBlock(label, pdfPath, thumbPath) {
  const fullImg = esc(pdfPath).replace(/\.pdf$/i, '-full.png');
  return `<div class="flowchart-wrap destination-flowchart-wrap">
    <div class="flowchart-label">${esc(label)}</div>
    <img class="flowchart-thumb" src="${esc(thumbPath)}" alt="${esc(label)}"
         onclick="openRefImageViewer('${fullImg}', '${esc(label)}')" />
  </div>`;
}

function buildDestinationDetailHtml(id) {
  let html = '';

  if (id === 'field-trauma-triage') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Field Trauma Triage Standard</h2>
      <div class="destination-prose">
        <h3 class="destination-bls-h3">Definitions</h3>
        <p><strong>Regionally Designated Equivalent Hospital</strong> means an appropriately resourced hospital facility as defined by the Regional Trauma Network of Critical Care Services Ontario and included in a local PPS.</p>
        <p><strong>Transport Time</strong> means the time from scene departure to time of arrival at destination.</p>

        <h3 class="destination-bls-h3">General directive</h3>
        <p>Paramedics shall follow the procedure for field triage of patients injured by a traumatic mechanism or showing evidence of trauma.</p>
        <ul class="destination-inline-list">
          <li>The standard is used to assess clinical criteria for the <em>Air Ambulance Utilization Standard</em>.</li>
          <li>Consider Trauma Termination of Resuscitation (TOR) as per the ALS PCS.</li>
          <li>CACC/ACS may authorize transport redirects.</li>
        </ul>

        <h3 class="destination-bls-h3">Procedure</h3>
        <ol class="destination-numbered">
          <li><strong>Step 1 — Physiological criteria.</strong> Assess whether <em>any</em> of the following are met:
            <ul class="destination-sublist">
              <li>a. Patient does not follow commands;</li>
              <li>b. Systolic blood pressure &lt; 90 mmHg; or</li>
              <li>c. Respiratory rate &lt; 10 or ≥ 30 breaths per minute, or need for ventilatory support (&lt; 20 in an infant aged &lt; 1 year).</li>
            </ul>
            If <strong>any</strong> physiological criteria are met <strong>and</strong> land transport time is estimated to be <strong>&lt; 30 minutes</strong> to a Lead Trauma Hospital (LTH) or regionally designated equivalent hospital, transport directly to that facility.
          </li>
          <li>If Step 1 criteria are <strong>not</strong> met, assess <strong>anatomical criteria (Step 2)</strong>:
            <ul class="destination-sublist">
              <li>a. Any penetrating injuries to head, neck, torso and extremities proximal to elbow or knee;</li>
              <li>b. Chest wall instability or deformity (e.g. flail chest);</li>
              <li>c. Two or more proximal long-bone fractures;</li>
              <li>d. Crushed, de-gloved, mangled or pulseless extremity;</li>
              <li>e. Amputation proximal to wrist or ankle;</li>
              <li>f. Pelvic fractures;</li>
              <li>g. Open or depressed skull fracture;</li>
              <li>h. Paralysis.</li>
            </ul>
            If <strong>any</strong> anatomical criteria are met <strong>and</strong> land transport time is <strong>&lt; 30 minutes</strong> to an LTH or regionally designated equivalent hospital, transport directly to that facility.
          </li>
          <li>If Step 2 criteria are <strong>not</strong> met, assess <strong>mechanism of injury (Step 3)</strong>:
            <ul class="destination-sublist">
              <li><strong>Falls:</strong> Adults — falls ≥ 6 m (one storey ≈ 3 m). Children (&lt; 15) — falls ≥ 3 m or two to three times the child’s height.</li>
              <li><strong>High-risk auto crash:</strong> Intrusion ≥ 0.3 m occupant site or ≥ 0.5 m any site including roof; ejection (partial or complete); death in same passenger compartment; vehicle telemetry consistent with high-risk injury (if available).</li>
              <li><strong>Pedestrian or bicyclist</strong> thrown, run over or struck with significant impact (≥ 30 km/h) by an automobile.</li>
              <li><strong>Motorcycle crash</strong> ≥ 30 km/h.</li>
            </ul>
            If <strong>any</strong> mechanism criteria are met: determine need for transport to the LTH; <strong>paramedic judgement is required</strong> (may patch BHP). If judgement confirms need, transport to LTH.
          </li>
          <li>If Step 3 criteria are <strong>not</strong> met, assess <strong>special criteria (Step 4)</strong>:
            <ul class="destination-sublist">
              <li><strong>Age:</strong> Older adults — injury/death risk increases after age 55; SBP &lt; 110 may represent shock after age 65.</li>
              <li><strong>Anticoagulation and bleeding disorders.</strong></li>
              <li><strong>Burns</strong> with trauma mechanism: triage to LTH or regionally designated equivalent.</li>
              <li><strong>Pregnancy</strong> ≥ 20 weeks.</li>
            </ul>
            If <strong>any</strong> special criteria are met: determine need for LTH; <strong>paramedic judgement is required</strong> (may patch BHP). If judgement confirms need, transport to LTH.
          </li>
        </ol>
        <p class="destination-footnote"><sup>*</sup> The 30-minute transport time may be amended up to 60 minutes per ambulance service PPS, but must not exceed 60 minutes.</p>
        <p class="destination-footnote"><sup>**</sup> If unable to secure the airway or survival to the LTH is unlikely, transport to the closest ED <strong>unless</strong> penetrating trauma to torso or head/neck. Consider Trauma TOR per ALS PCS.</p>
      </div></div>`;
    html += flowchartBlock(
      'Official field trauma triage prompt card (PDF — tap)',
      'assets/field-trauma-triage-prompt-card.pdf',
      'assets/field-trauma-triage-flowchart-thumb.png'
    );
    html += blsSourceFooter();
    return html;
  }

  if (id === 'air-ambulance-utilization') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Air Ambulance Utilization Standard</h2>
      <div class="destination-prose">
        <h3 class="destination-bls-h3">General directive</h3>
        <p>Requests for an on-scene air ambulance response should meet <strong>at least one</strong> of the bulleted <strong>operational criteria</strong> <strong>PLUS</strong> one of the <strong>clinical criteria</strong> (e.g. known clinical criteria as listed in the <em>Field Trauma Triage Standard</em>, or from the medical / obstetrical criteria below).</p>

        <h3 class="destination-bls-h3">Procedure — the paramedic shall</h3>
        <ol class="destination-numbered">
          <li>Assess the scene response to meet <strong>one or more</strong> of the following <strong>operational criteria</strong>:
            <ul class="destination-sublist">
              <li>a. Land ambulance is estimated to require <strong>more than 30 minutes</strong> to reach the scene and air ambulance can reach the scene quicker.</li>
              <li>b. Land ambulance is estimated to require <strong>more than 30 minutes</strong> from scene to closest appropriate hospital* and the helicopter can reach the scene and transport to that hospital* quicker than land ambulance.</li>
              <li>c. Estimated response for land and air is both &gt; 30 minutes but approximately equal, and the patient needs care that cannot be provided by the responding land ambulance.</li>
              <li>d. Multiple patients meet clinical criteria and local land ambulance resources are already fully utilized.</li>
            </ul>
          </li>
          <li>If paragraph 1 is met, assess whether the patient meets <strong>one or more</strong> of the following <strong>clinical criteria</strong>:
            <ul class="destination-sublist">
              <li>a. Patients meeting the <em>Field Trauma Triage Standard</em>.</li>
              <li>b. Patients meeting one or more of the following:
                <ul class="destination-sublist">
                  <li><strong>Medical:</strong>
                    <ol class="destination-sublist-num">
                      <li>Shock, especially hypotension with altered mentation (e.g. suspected AAA rupture, massive GI bleed, severe sepsis, anaphylaxis, cardiogenic shock, <em>etc.</em>)</li>
                      <li>Acute stroke with clearly determined onset or last known normal <strong>&lt; 6.0 hours</strong></li>
                      <li>Altered level of consciousness (GCS &lt; 10)</li>
                      <li>Acute respiratory failure or distress</li>
                      <li>Suspected STEMI or potentially lethal dysrhythmia</li>
                      <li>Resuscitation from respiratory or cardiac arrest</li>
                      <li>Status epilepticus</li>
                      <li>Unstable airway or partial airway obstruction</li>
                    </ol>
                  </li>
                  <li><strong>Obstetrical:</strong>
                    <ol class="destination-sublist-num">
                      <li>Active labour with abnormal presentation (shoulder, breech or limb)</li>
                      <li>Multiple gestation and active labour</li>
                      <li>Umbilical cord prolapse</li>
                      <li>Significant vaginal bleeding (suspected abruption, placenta previa or ectopic pregnancy)</li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>In conjunction with the ACO, assess whether an on-scene air ambulance helicopter is appropriate based on operational factors (weather, aircraft availability, scene/landing zone, patient stability, and other agency direction). <strong>Complete wording is in BLS PCS v3.4.</strong></li>
        </ol>
        <p class="destination-footnote">* “Closest appropriate hospital” as defined in the standard.</p>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'deceased-patient') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Deceased Patient Standards</h2>
      <div class="destination-prose">
        <p>These standards address respectful care of the deceased, scene safety, legal obligations, and coordination with police and the coroner.</p>
        <h3 class="destination-bls-h3">Assessment &amp; pronouncement</h3>
        <ul class="destination-inline-list">
          <li>Confirm absence of vital signs and neurological function per protocol; document time and findings.</li>
          <li>Where required, involve authorized practitioners for pronouncement; follow ALS PCS / service policy.</li>
        </ul>
        <h3 class="destination-bls-h3">Scene &amp; evidence</h3>
        <ul class="destination-inline-list">
          <li>Preserve the scene; minimize movement of the body and disturbance of evidence.</li>
          <li>Leave medical devices in place unless removal is required for safety, unless directed otherwise by investigating authorities.</li>
        </ul>
        <h3 class="destination-bls-h3">Notifications</h3>
        <ul class="destination-inline-list">
          <li>Notify police when circumstances require (sudden/unexpected death, trauma, homicide/suicide suspicion, <em>etc.</em>).</li>
          <li>Notify the coroner when mandatory criteria apply in your jurisdiction.</li>
          <li>Coordinate with CACC and receiving facilities as directed.</li>
        </ul>
        <h3 class="destination-bls-h3">Family &amp; others</h3>
        <ul class="destination-inline-list">
          <li>Provide privacy and support; assign a single point of contact where possible.</li>
          <li>Document notifications and handoffs.</li>
        </ul>
        <h3 class="destination-bls-h3">Personal effects</h3>
        <p>Secure and transfer personal effects per service policy and police direction.</p>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'prompt-acute-stroke') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Acute Stroke Bypass Protocol</h2>
      <div class="destination-prose">
        <p class="destination-lead">Quick reference for the Acute Stroke Protocol in BLS PCS. See BLS PCS for the full standard.</p>

        <h3 class="destination-bls-h3">Indications</h3>
        <p>Redirect or transport to the closest or most appropriate <strong>Designated Stroke Centre (DSC)</strong>* is considered when <strong>BOTH</strong> apply:</p>
        <ol class="destination-numbered">
          <li>New onset of <strong>at least one</strong> of:
            <ul class="destination-sublist">
              <li>a. Unilateral arm/leg weakness or drift</li>
              <li>b. Slurred speech, inappropriate words, or mute</li>
              <li>c. Unilateral facial droop</li>
            </ul>
          </li>
          <li>Can arrive at a DSC within <strong>6 hours</strong> of clearly determined symptom onset or last known normal.</li>
        </ol>
        <ul class="destination-inline-list">
          <li>Inform CACC/ACS to help determine the most appropriate destination.</li>
          <li>* Regional Stroke Centre, District Stroke Centre, or Telestroke Centre (regardless of EVT capability).</li>
        </ul>

        <h3 class="destination-bls-h3">Large vessel occlusion (LVO) assessment</h3>
        <p>Perform a secondary LVO screen using the <strong>Los Angeles Motor Scale (LAMS)</strong> for probable stroke within <strong>24 hours</strong> of onset.</p>
        <ul class="destination-inline-list">
          <li>a. If LAMS <strong>≥ 4</strong>, classify patient as <strong>CTAS 2</strong>.</li>
          <li>b. Inform receiving hospital whether “LVO Clinical Screen is positive or negative”.**</li>
          <li>** In select regions, LVO-positive patients within 6 hours of onset may be redirected to the closest EVT centre.</li>
        </ul>

        <h3 class="destination-bls-h3">Contraindications</h3>
        <p><strong>Any</strong> of the following excludes transport under the Acute Stroke Protocol:</p>
        <ol class="destination-numbered">
          <li>CTAS 1 and/or uncorrected ABC problem.</li>
          <li>Stroke symptoms resolved prior to paramedic arrival or assessment.***</li>
          <li>Blood glucose &lt; 3 mmol/L.****</li>
          <li>Seizure at symptom onset or observed by paramedics.</li>
          <li>GCS &lt; 10.</li>
          <li>Terminally ill or palliative care patient.</li>
          <li>Out-of-hospital transport duration will exceed <strong>two hours</strong>.</li>
        </ol>
        <p class="destination-footnote">*** If symptoms improve significantly or resolve during transport, continue to a DSC.</p>
        <p class="destination-footnote">**** If symptoms persist after glucose correction, not contraindicated.</p>
        <p>CACC/ACS authorizes transport once notified of need for redirect/transport under this protocol.</p>

        <div class="destination-tool-callout">
          <p class="destination-tool-callout-text"><strong>LAMS scoring:</strong> Use the <strong>LAMS Calculator</strong> under <strong>Medical Calculators</strong> to score facial droop, arm drift, and grip — it shows total LAMS, CTAS / LVO screen messaging, and bypass contraindications.</p>
          <button type="button" class="destination-action-btn destination-action-btn--secondary" onclick="showView('view-lams', 'LAMS Calculator')">Open LAMS calculator</button>
        </div>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'radio-channel-change') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Radio Channel Change Locations</h2>
      <div class="destination-prose">
        <p>Change channels at the locations below as indicated. <strong>Contact the listed CACC</strong> when switching. When <strong>returning</strong>, use the <strong>same</strong> geographic points to change back.</p>
        <div class="table-scroll-wrap destination-table-wrap">
          <table class="ref-table ref-table-striped ref-table-compact destination-radio-table">
            <thead><tr><th>Area</th><th>Location</th><th>Channel / zone</th><th>CACC</th></tr></thead>
            <tbody>
              <tr><td>Hamilton</td><td>QEW &amp; Fifty Road</td><td>NIA REG2 COM</td><td>Hamilton CACC</td></tr>
              <tr><td>London</td><td>QEW &amp; Fifty Road</td><td>NIA REG2 COM</td><td>Hamilton CACC</td></tr>
              <tr><td>London</td><td>Hwy 403 &amp; County Rd 25 (Middle Townline Rd)<br><span class="destination-note">~15–20 km west of Brantford</span></td><td>NIA MOH ZN 1</td><td>London CACC</td></tr>
              <tr><td>Mississauga</td><td>QEW &amp; Fifty Road</td><td>NIA REG2 COM</td><td>Hamilton CACC</td></tr>
              <tr><td>Mississauga</td><td>QEW &amp; Hwy 403 (base of Burlington Skyway)</td><td>NIA MOH ZN 1</td><td>Mississauga CACC</td></tr>
              <tr><td>Toronto</td><td>QEW &amp; Fifty Road</td><td>NIA REG2 COM</td><td>Hamilton CACC</td></tr>
              <tr><td>Toronto</td><td>QEW &amp; Hwy 403 (base of Burlington Skyway)</td><td>NIA MOH ZN 1</td><td>Mississauga CACC</td></tr>
              <tr><td>Toronto</td><td>QEW &amp; Hwy 427</td><td>NIA PROV COM</td><td>Toronto CACC</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="destination-bls-h3">Returning to Niagara</h3>
        <ul class="destination-inline-list">
          <li><strong>Patient on board:</strong> switch to <strong>NIA TAC 1</strong> at <strong>Fifty Road</strong>.</li>
          <li><strong>Empty (non-patient):</strong> switch to <strong>NIA North</strong> at <strong>Fifty Road</strong>.</li>
          <li>All channels are in the <strong>NIA</strong> folder — use the <strong>Channel Selector</strong> on the radio.</li>
        </ul>
      </div></div>`;
    html += `<div class="flowchart-wrap destination-flowchart-wrap">
      <div class="flowchart-label">Radio faceplate — Channel Selector (tap to zoom)</div>
      <img class="flowchart-thumb" src="assets/radio-channel-selector.png" alt="Radio channel selector"
           onclick="openRefImageViewer('assets/radio-channel-selector.png', 'Radio channel selector')" />
    </div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'prompt-stemi-bypass') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">STEMI Bypass Protocol</h2>
      <div class="destination-prose">
        <p class="destination-lead"><strong>Paramedic Prompt Card for STEMI Hospital Bypass Protocol</strong></p>
        <p>This prompt card summarizes the <em>STEMI Hospital Bypass Protocol</em> in the <em>Basic Life Support Patient Care Standards (BLS PCS)</em>. Refer to BLS PCS for the full protocol.</p>

        <h3 class="destination-bls-h3">Indications under the STEMI Hospital Bypass Protocol</h3>
        <p>Transport to a <strong>PCI centre</strong> will be considered for patients who meet <strong>ALL</strong> of the following:</p>
        <ol class="destination-numbered">
          <li><strong>≥ 18 years of age.</strong></li>
          <li><strong>Chest pain or equivalent</strong> consistent with cardiac ischemia / myocardial infarction.</li>
          <li><strong>Time from onset</strong> of the current episode of pain <strong>&lt; 12 hours</strong>.</li>
          <li><strong>12-lead ECG indicates acute AMI / STEMI*:</strong>
            <ul class="destination-sublist">
              <li><strong>a.</strong> At least <strong>2 mm</strong> ST-elevation in leads V1–V3 in at least <strong>two contiguous leads</strong>; <strong>AND/OR</strong></li>
              <li><strong>b.</strong> At least <strong>1 mm</strong> ST-elevation in at least <strong>two other anatomically contiguous leads</strong>; <strong>OR</strong></li>
              <li><strong>c.</strong> 12-lead ECG computer interpretation of STEMI <strong>and paramedic agrees</strong>.</li>
            </ul>
          </li>
        </ol>
        <p class="destination-footnote"><sup>*</sup> Once activated, continue to follow the STEMI Hospital Bypass Protocol even if the ECG normalizes.</p>

        <h3 class="destination-bls-h3">Contraindications under the STEMI Hospital Bypass Protocol</h3>
        <p><strong>ANY</strong> of the following exclude transport under the STEMI Hospital Bypass Protocol:</p>
        <ol class="destination-numbered">
          <li><strong>CTAS 1</strong> and the paramedic is <strong>unable to secure the patient’s airway or ventilate</strong>.</li>
          <li><strong>12-lead ECG</strong> consistent with <strong>LBBB</strong>, <strong>ventricular paced rhythm</strong>, or <strong>any other STEMI imitator</strong>.</li>
          <li><strong>Transport to a PCI centre ≥ 60 minutes</strong> from patient contact.**</li>
          <li>Patient has a complication requiring <strong>PCP diversion</strong>:
            <ul class="destination-sublist">
              <li><strong>a.</strong> Moderate to severe respiratory distress or use of <strong>CPAP</strong>.</li>
              <li><strong>b.</strong> Hemodynamic instability or symptomatic <strong>SBP &lt; 90 mmHg</strong> at any point.</li>
              <li><strong>c.</strong> <strong>VSA without ROSC.</strong></li>
            </ul>
          </li>
          <li>Patient has a complication requiring <strong>ACP diversion</strong>:
            <ul class="destination-sublist">
              <li><strong>a.</strong> Ventilation inadequate despite assistance.</li>
              <li><strong>b.</strong> Hemodynamic instability unresponsive / not amenable to ACP treatment or management.</li>
              <li><strong>c.</strong> <strong>VSA without ROSC.</strong></li>
            </ul>
          </li>
        </ol>
        <p class="destination-footnote"><sup>**</sup> The interventional cardiology program may still permit transport to the PCI centre.</p>

        <p class="destination-prose-strong"><strong>CACC/ACS will authorize the transport</strong> once notified of the patient’s need for bypass under the STEMI Hospital Bypass Protocol.</p>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'fast-sepsis-prealert') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">FAST Sepsis Pre-Alert</h2>
      <div class="destination-prose">
        <p>When infection is suspected and your service’s criteria are met (e.g. FAST ParaHEWS), notify the receiving hospital per protocol, apply monitoring including capnography as directed, and document scores and trends.</p>
      </div>
      <div class="destination-action-row destination-action-row--padded">
        <button type="button" class="destination-action-btn" onclick="openRefImageViewer('assets/fast-sepsis-prealert-chart.png', 'FAST Sepsis pre-alert chart')">Open chart</button>
        <button type="button" class="destination-action-btn destination-action-btn--secondary" onclick="showView('view-presepsis', 'Pre-Sepsis')">Open calculator</button>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'twelve-lead-acs') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">12 Lead &amp; Acute Coronary Syndrome Process</h2>
      <div class="destination-prose">
        <h3 class="destination-bls-h3">Flow summary</h3>
        <ol class="destination-numbered">
          <li><strong>1st 12-lead</strong> — automated interpretation: <strong>STEMI positive?</strong>
            <ul class="destination-sublist">
              <li><strong>No</strong> → Repeat ECG ×2: <em>2nd on departure, 3rd on arrival at destination.</em> Reassess STEMI positive?</li>
              <li>If still <strong>no</strong> → Treat per medical directives → transport to local ED.</li>
              <li>If <strong>yes</strong> at any point → go to STEMI criteria box.</li>
            </ul>
          </li>
          <li><strong>STEMI criteria box</strong> — all required:
            <ul class="destination-sublist">
              <li>STEMI positive ECG and <strong>meets ST-elevation MI criteria</strong></li>
              <li>Time to arrive SRHC <strong>&lt; 60 min</strong> (or your designated PCI centre per local policy)</li>
              <li>No LBBB</li>
              <li>No suspected pericarditis</li>
              <li>Chest pain <strong>&lt; 12 hours</strong></li>
            </ul>
            <p><strong>All met (Yes)</strong> → Apply defib pads; follow STEMI process guidelines.</p>
            <p><strong>Not all met (No)</strong> → Notify local ED; complete fibrinolytic checklist en route.</p>
            <ul class="destination-sublist">
              <li>Checklist <strong>PASS</strong> → Treat per directives → local ED.</li>
              <li>Checklist <strong>FAIL</strong> → Contact cardiac interventionalist — patient accepted?
                <ul class="destination-sublist">
                  <li><strong>Yes</strong> → Defib pads + STEMI process guidelines.</li>
                  <li><strong>No</strong> → Transport to local ED.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
        <p>Use <strong>Medical References</strong> for additional lead placement (V4R, V7–V9) when indicated.</p>
        <div class="destination-action-row destination-action-row--padded">
          <button type="button" class="destination-action-btn" onclick="showView('view-references', 'Medical Directives')">Medical References</button>
        </div>
      </div></div>`;
    html += `<div class="flowchart-wrap destination-flowchart-wrap">
      <div class="flowchart-label">Regional flowchart (tap to zoom)</div>
      <img class="flowchart-thumb" src="assets/12-lead-acs-process-flowchart.png" alt="12 Lead ACS process flowchart"
           onclick="openRefImageViewer('assets/12-lead-acs-process-flowchart.png', '12 Lead ACS process')" />
    </div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'fit-2-sit') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title destination-page-title--fit2sit">Fit 2 Sit Process</h2>

      <div class="destination-prose">
        <h3 class="destination-bls-h3"><em>Inclusion criteria</em></h3>
        <div class="table-scroll-wrap destination-table-wrap">
          <table class="ref-table ref-table-striped destination-fit-table">
            <tbody>
              <tr><td>1. <strong>Age:</strong> ≥ 8 years (≤ 16 years <strong>MUST</strong> have a caregiver present).</td></tr>
              <tr><td>2. <strong>CTAS:</strong> Patient is CTAS 3–5.</td></tr>
              <tr><td>3. <strong>GCS:</strong> GCS 15. <em>Note:</em> If baseline is normally below 15 with no acute change, family/caregiver <strong>MUST</strong> accompany.</td></tr>
              <tr><td>4. <strong>Treatments:</strong> No ongoing treatments by paramedics.</td></tr>
              <tr><td>5. <strong>Medication:</strong> Only acetaminophen, dimenhydrinate, ondansetron, ibuprofen, or ketorolac given (beyond that excludes).</td></tr>
              <tr><td>6. <strong>Vital signs</strong> within limits (within 15 min of TOC):
                <ul class="destination-sublist tight">
                  <li>a. Pulse ≥ 50–100 BPM</li>
                  <li>b. BP ≥ 100 mmHg systolic</li>
                  <li>c. RR ≥ 12 and ≤ 22</li>
                  <li>d. SpO₂ ≥ 92% on room air</li>
                  <li>e. BG ≥ 4.0 and ≤ 18.0 mmol/L if applicable</li>
                </ul>
                <p class="destination-note"><strong>Note:</strong> Last qualifying vitals <strong>MUST</strong> be obtained using ROWPSV Zoll cardiac monitor and uploaded to ePCR.</p>
              </td></tr>
              <tr><td>7. <strong>Ambulatory:</strong> Independent or minimal assistance if caregiver present.</td></tr>
              <tr><td>8. <strong>Signature:</strong> TOC signature must be obtained.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="destination-bls-h3"><em>Exclusion criteria</em></h3>
        <div class="table-scroll-wrap destination-table-wrap">
          <table class="ref-table ref-table-striped destination-fit-table">
            <tbody>
              <tr><td>1. Patient CTAS 1 or 2</td></tr>
              <tr><td>2. GCS 14 or lower (change from baseline)</td></tr>
              <tr><td>3. Clinical condition requires a stretcher</td></tr>
              <tr><td>4. Dementia without caregiver present</td></tr>
              <tr><td>5. Unaccompanied minor ≤ 16 years</td></tr>
              <tr><td>6. Vitals outside limits within 15 min of hospital arrival</td></tr>
              <tr><td>7. Aggressive behaviour or self-harm in paramedic care</td></tr>
              <tr><td>8. Chest pain presumed cardiac origin</td></tr>
              <tr><td>9. Persistent vomiting despite treatment</td></tr>
              <tr><td>10. Gross bleeding</td></tr>
              <tr><td>11. Overdose</td></tr>
              <tr><td>12. Patients requiring SMR</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="destination-bls-h3">Requirements</h3>
        <ul class="destination-must-list">
          <li>Reporting Details form <strong>MUST</strong> be completed in full and given to a triage nurse.</li>
          <li>Patient FIT2SIT poster <strong>MUST</strong> be given to the patient.</li>
          <li>IVs may be started; if Fit2SIT is activated, IV <strong>MUST</strong> be removed prior to TOC in the waiting room.</li>
          <li>TOC signature on tablet ePCR <strong>MUST</strong> be obtained.</li>
          <li>Symptom relief <strong>MUST</strong> be recorded on the reporting details form (medication, dose, time, route).</li>
          <li>Fit2SIT cannot be activated at an <strong>out of region</strong> hospital.</li>
        </ul>

        <h3 class="destination-hospital-process">Hospital process</h3>

        <h4 class="destination-hospital-h4">Grand River &amp; St. Mary’s Hospital Fit2SIT</h4>
        <ol class="destination-hospital-steps">
          <li>Complete Reporting Details Form.</li>
          <li>Provide pamphlet/poster to the patient.</li>
          <li>“Check in” at kiosk with health card or name; if applicable chief complaint <strong>“complaint/Fit2SIT”</strong> (e.g. headache/Fit2SIT).</li>
          <li>Place patient in the ER triage area.</li>
          <li>Give Reporting Details Form to triage nurse.</li>
          <li>Obtain TOC signature on tablet ePCR.</li>
        </ol>

        <h4 class="destination-hospital-h4">Cambridge Memorial Hospital</h4>
        <ol class="destination-hospital-steps">
          <li>Complete Reporting Details Form.</li>
          <li>Provide pamphlet/poster to the patient.</li>
          <li>Direct patient to screener/triage assistant for self-registration.</li>
          <li>Provide Reporting Details Form to triage nurse.</li>
          <li>Obtain TOC signature on tablet ePCR.</li>
        </ol>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  if (id === 'prompt-spinal-motion-restriction') {
    html += `<div class="section-card destination-guidelines-page">
      <h2 class="destination-page-title">Spinal Motion Restriction Standard</h2>
      <div class="destination-prose destination-lead">
        <p>Official Ontario flowchart below (PDF). A text summary follows for quick scrolling on mobile — see BLS PCS for the full standard.</p>
      </div></div>`;
    html += flowchartBlock(
      'SMR standard — official flowchart / prompt card (PDF — tap)',
      'assets/spinal-motion-restriction-prompt-card.pdf',
      'assets/spinal-motion-restriction-prompt-card-thumb.png'
    );
    html += `<div class="section-card destination-guidelines-page">
      <div class="destination-prose">
        <p class="destination-smr-start"><strong>MOI</strong> suggestive of potential spine or spinal cord injury.</p>

        <h3 class="destination-bls-h3">MOI examples</h3>
        <ul class="destination-sublist">
          <li>a. Trauma with neck or back pain</li>
          <li>b. Sports accidents (impaction, falls)</li>
          <li>c. Diving / submersion injuries</li>
          <li>d. Explosions; forceful acceleration/deceleration</li>
          <li>e. Falls (e.g. stairs)</li>
          <li>f. Pedestrians struck</li>
          <li>g. Electrocution</li>
          <li>h. Lightning strikes</li>
          <li>i. Penetrating trauma to head, neck or torso</li>
        </ul>

        <h3 class="destination-bls-h3">Decision 1 — Any risk criteria met?</h3>
        <p><strong>No</strong> → <strong>No SMR required.</strong></p>
        <p><strong>Yes</strong> → Continue to Decision 2.</p>
        <p><strong>Risk criteria:</strong></p>
        <ul class="destination-sublist">
          <li>a. Neck or back pain</li>
          <li>b. Spine tenderness</li>
          <li>c. Neurologic signs or symptoms</li>
          <li>d. Altered LOC</li>
          <li>e. Suspected drug or alcohol intoxication</li>
          <li>f. Distracting painful injury</li>
          <li>g. Anatomic deformity of the spine</li>
          <li>h. High-energy MOI:
            <ul class="destination-sublist">
              <li>i. Fall &gt; 3 ft / 5 stairs</li>
              <li>ii. Axial load to head (e.g. diving)</li>
              <li>iii. MVC high speed (≥ 100 km/h), rollover, ejection</li>
              <li>iv. Struck by bus or large truck</li>
              <li>v. Motorized/ATV collision</li>
              <li>vi. Bicycle struck or collision</li>
            </ul>
          </li>
          <li>i. Age ≥ 65 including falls from standing height</li>
        </ul>

        <h3 class="destination-bls-h3">Decision 2 — Penetrating trauma MOI with <em>all</em> penetrating modifiers present?</h3>
        <p><strong>Yes</strong> → <strong>No SMR required.</strong></p>
        <p><strong>No</strong> → <strong>SMR using cervical collar only</strong>, minimizing spinal movement.*</p>
        <p><strong>Penetrating modifiers (all must be present for “Yes” above):</strong></p>
        <ul class="destination-sublist">
          <li>a. No spine tenderness</li>
          <li>b. No neurologic signs or symptoms</li>
          <li>c. No altered LOC</li>
          <li>d. No evidence of intoxication</li>
          <li>e. No distracting painful injury</li>
          <li>f. No anatomic deformity of the spine</li>
        </ul>
        <p class="destination-footnote">*Backboards may still be indicated to minimize spinal movement during extrication.</p>
      </div></div>`;
    html += blsSourceFooter();
    return html;
  }

  html += `<div class="section-card destination-guidelines-page"><p class="destination-prose">Page not found.</p></div>`;
  html += blsSourceFooter();
  return html;
}
