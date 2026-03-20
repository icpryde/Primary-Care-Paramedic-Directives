// ── Medical References ──────────────────────────────────────────────────────
const REFERENCES = [

  {
    id: 'ref-12-lead-ecg',
    title: '12 Lead ECG Placement',
    content: `
      <div class="ref-image-wrap">
        <img src="assets/12-lead-ecg.png" alt="12 Lead ECG Placement" onclick="openFlowchartPdf('assets/12-lead-ecg.png')" />
      </div>

      <h3 class="ref-subheading">PRECORDIAL LEADS:</h3>
      <table class="ref-lead-table">
        <tr><td><span class="lead-badge lead-v1">V1</span></td><td>4<sup>th</sup> intercostal space to the right of the sternum</td></tr>
        <tr><td><span class="lead-badge lead-v2">V2</span></td><td>4<sup>th</sup> intercostal space to the left of the sternum</td></tr>
        <tr><td><span class="lead-badge lead-v3">V3</span></td><td>directly between leads V2 and V4</td></tr>
        <tr><td><span class="lead-badge lead-v4">V4</span></td><td>5<sup>th</sup> intercostal space at left midclavicular line</td></tr>
        <tr><td><span class="lead-badge lead-v5">V5</span></td><td>level with lead V4 at left anterior axillary line</td></tr>
        <tr><td><span class="lead-badge lead-v6">V6</span></td><td>level with lead V5 at left midaxillary line</td></tr>
      </table>

      <h3 class="ref-subheading">LIMB LEADS</h3>
      <table class="ref-lead-table">
        <tr><td><strong>RA</strong></td><td>right forearm or wrist</td></tr>
        <tr><td><strong>LA</strong></td><td>left forearm or wrist</td></tr>
        <tr><td><strong>LL</strong></td><td>left lower leg</td></tr>
        <tr><td><strong>RL</strong></td><td>right lower leg</td></tr>
      </table>

      <div class="ref-note">
        <strong>NOTE:</strong> Refer to the Medical Directives for the clinical situations where a 12-Lead ECG should be considered. This may include patients experiencing cardiac ischemia, acute cardiogenic pulmonary edema, tachycardias, bradycardias, shortness of breath or upon ROSC.
      </div>
    `
  },

  {
    id: 'ref-15-lead-ecg',
    title: '15 Lead ECG Placement',
    content: `
      <div class="ref-image-wrap">
        <img src="assets/v4r-ecg.png" alt="V4R Lead Placement" onclick="openFlowchartPdf('assets/v4r-ecg.png')" />
      </div>

      <h3 class="ref-subheading">V4R LEAD PLACEMENT</h3>
      <table class="ref-lead-table">
        <tr><td><span class="lead-badge lead-v4r">V4R</span></td><td>5<sup>th</sup> intercostal space at right midclavicular line</td></tr>
      </table>
      <p class="ref-body-text">Place V4R in the mirror position of V4 on the right side of the chest. All standard 12-lead electrode positions remain unchanged.</p>

      <div class="ref-image-wrap" style="margin-top:20px;">
        <img src="assets/15-lead-v8-v9.png" alt="V8-V9 Posterior Lead Placement" onclick="openFlowchartPdf('assets/15-lead-v8-v9.png')" />
      </div>

      <h3 class="ref-subheading">POSTERIOR LEADS (V8 &amp; V9)</h3>
      <table class="ref-lead-table">
        <tr><td><span class="lead-badge lead-v8">V8</span></td><td>left posterior at tip of the scapula (level with V6)</td></tr>
        <tr><td><span class="lead-badge lead-v9">V9</span></td><td>left paraspinal border (level with V6)</td></tr>
      </table>
      <p class="ref-body-text">Posterior leads are placed on the patient's back at the same horizontal level as V6. V8 is at the tip of the left scapula and V9 is at the left paraspinal border.</p>
    `
  },

   {
    id: 'ref-fast-sepsis-prealert-chart',
    title: 'FAST Sepsis Pre-Alert Chart',
    content: `
      <p class="ref-body-text">ParaHEWS reference for <strong>GWPS, HPS, and ROWPS</strong>. If you suspect infection, score ParaHEWS; if total <strong>≥ 5</strong>, notify the receiving hospital of a <strong>Sepsis Pre-Alert</strong> and apply capnography per protocol. For an interactive calculator, use <strong>Medical Calculators</strong> → Pre-Sepsis Tool.</p>
      <div class="ref-image-wrap">
        <img src="assets/fast-sepsis-prealert-chart.png" alt="FAST Sepsis Pre-Alert Chart" onclick="openRefImageViewer('assets/fast-sepsis-prealert-chart.png', 'FAST Sepsis Pre-Alert Chart')" />
      </div>
      <p class="ref-body-text" style="font-size:13px;color:#666;">Tap the chart for a fullscreen viewer — pinch to zoom, drag to pan, or use <strong>Fit</strong> to reset.</p>
    `
  },

  {
    id: 'ref-lams-chart',
    title: 'LAMS Score Chart',
    content: `
      <p class="ref-body-text">Los Angeles Motor Scale (LAMS) — used as a secondary screen for large vessel occlusion (LVO) in probable stroke. Total score <strong>0–5</strong>. A score <strong>≥ 4</strong> supports classifying as CTAS 2 and reporting a positive LVO clinical screen per your acute stroke protocol. For an interactive tool, use <strong>Medical Calculators</strong> → LAMS Calculator.</p>

      <div class="table-scroll-wrap lams-chart-wrap">
        <table class="lams-chart-table" aria-label="LAMS scoring chart">
          <thead>
            <tr>
              <th scope="col" class="lams-chart-th-cat">Category</th>
              <th scope="col" class="lams-chart-th-score">Score</th>
              <th scope="col">Finding</th>
            </tr>
          </thead>
          <tbody>
            <tr class="lams-chart-rowspan">
              <th scope="rowgroup" rowspan="2" class="lams-chart-cat-cell">Facial Droop</th>
              <td class="lams-score-cell lams-bg-green">0</td>
              <td class="lams-bg-green">Absent</td>
            </tr>
            <tr>
              <td class="lams-score-cell lams-bg-red">1</td>
              <td class="lams-bg-red">Present</td>
            </tr>
            <tr class="lams-chart-rowspan">
              <th scope="rowgroup" rowspan="3" class="lams-chart-cat-cell">Arm Drift</th>
              <td class="lams-score-cell lams-bg-green">0</td>
              <td class="lams-bg-green">Absent</td>
            </tr>
            <tr>
              <td class="lams-score-cell lams-bg-yellow">1</td>
              <td class="lams-bg-yellow">Drifts down</td>
            </tr>
            <tr>
              <td class="lams-score-cell lams-bg-red">2</td>
              <td class="lams-bg-red">Falls rapidly</td>
            </tr>
            <tr class="lams-chart-rowspan">
              <th scope="rowgroup" rowspan="3" class="lams-chart-cat-cell">Grip Strength</th>
              <td class="lams-score-cell lams-bg-green">0</td>
              <td class="lams-bg-green">Normal</td>
            </tr>
            <tr>
              <td class="lams-score-cell lams-bg-yellow">1</td>
              <td class="lams-bg-yellow">Weak grip</td>
            </tr>
            <tr>
              <td class="lams-score-cell lams-bg-red">2</td>
              <td class="lams-bg-red">No grip</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="ref-body-text" style="font-size:13px;color:#666;"><strong>Green</strong> = 0 points · <strong>Yellow</strong> = 1 point (arm/grip) · <strong>Red</strong> = higher points / positive facial finding.</p>
    `
  },

  {
    id: 'ref-pediatric-values',
    title: 'Pediatric Values',
    content: `
      <p class="ref-body-text">Reference ranges and formulas for paediatric assessment. Use the <strong>Pediatric Values Calculator</strong> (Medical Calculators) for quick estimates from age.</p>

      <div class="table-scroll-wrap ped-ref-table-wrap">
        <table class="ref-table ref-table-striped ped-vitals-table" aria-label="Pediatric normal vital signs">
          <thead>
            <tr>
              <th scope="col">Age</th>
              <th scope="col">Respiratory rate</th>
              <th scope="col">Heart rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0–3 months</td><td>30–60</td><td>90–180</td></tr>
            <tr><td>3–6 months</td><td>30–60</td><td>80–160</td></tr>
            <tr><td>6–12 months</td><td>25–45</td><td>80–140</td></tr>
            <tr><td>1–3 years</td><td>20–30</td><td>75–130</td></tr>
            <tr><td>6 years</td><td>16–24</td><td>70–110</td></tr>
            <tr><td>10 years</td><td>14–20</td><td>60–90</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading ped-ref-formula-h">Formulas</h3>
      <ul class="ref-body-list">
        <li><strong>Normotension:</strong> SBP ≥ 90 mmHg + (2 × age in years)</li>
        <li><strong>Hypotension:</strong> SBP &lt; 70 mmHg + (2 × age in years)</li>
        <li><strong>Weight (kg):</strong> (age in years × 2) + 10</li>
      </ul>

      <h3 class="ref-subheading ped-ref-formula-h">Hypoglycemia</h3>
      <div class="table-scroll-wrap ped-ref-table-wrap">
        <table class="ref-table ref-table-striped ped-vitals-table" aria-label="Pediatric hypoglycemia thresholds">
          <thead>
            <tr>
              <th scope="col">Age</th>
              <th scope="col">Blood glucose level</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>&lt; 2 years</td><td>&lt; 3.0 mmol/L</td></tr>
            <tr><td>≥ 2 years</td><td>&lt; 4.0 mmol/L</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading ped-ref-formula-h">Level of Awareness (LOA)</h3>
      <div class="ref-note ped-loa-note">
        <p class="ref-body-text" style="margin:0 0 8px;">The word <strong>altered</strong> refers to a GCS that is <em>less than normal</em> for the patient.</p>
        <p class="ref-body-text" style="margin:0;">The word <strong>unaltered</strong> refers to a GCS that is <em>normal</em> for the patient. This may be a GCS &lt; 15.</p>
      </div>

      <div class="ref-calc-launch-wrap">
        <button type="button" class="ref-open-calc-btn" onclick="showView('view-ped-calc', 'Pediatric Values Calculator')">
          Open Pediatric Values Calculator
        </button>
      </div>
    `
  },

  {
    id: 'ref-defib-joules',
    title: 'Adult Defibrillation Joule Settings',
    content: `
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Series</th>
              <th>Joule Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Medtronic</strong></td>
              <td>Lifepack</td>
              <td>200, 300, 360 Joules</td>
            </tr>
            <tr>
              <td><strong>Phillips</strong></td>
              <td>MRX / FR2</td>
              <td>150 Joules non escalating</td>
            </tr>
            <tr>
              <td><strong>ZOLL</strong></td>
              <td>E, M, or X Series</td>
              <td>120, 150, 200 Joules</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  {
    id: 'ref-apgar',
    title: 'APGAR Score Chart',
    content: `
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-apgar">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pulse</strong></td>
              <td>0 (absent)</td>
              <td>Slow (&lt; 100)</td>
              <td>&ge; 100</td>
            </tr>
            <tr>
              <td><strong>Respiratory effort</strong></td>
              <td>Absent</td>
              <td>Slow, irregular</td>
              <td>Good, crying</td>
            </tr>
            <tr>
              <td><strong>Activity</strong></td>
              <td>None, limp</td>
              <td>Some flexion</td>
              <td>Active motion</td>
            </tr>
            <tr>
              <td><strong>Grimace</strong></td>
              <td>None</td>
              <td>Some grimace</td>
              <td>Good grimace, cough, cry</td>
            </tr>
            <tr>
              <td><strong>Appearance</strong></td>
              <td>Blue or pale</td>
              <td>Pink body with blue extremities</td>
              <td>Completely pink</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="ref-notes-list">
        <li>APGAR performed at 1 minute &amp; 5 minutes after delivery</li>
        <li>Maximum possible total score is 10 (5 parameters x maximum score 2 for each parameter)</li>
        <li>Don't wait for APGAR to make decision on resuscitation</li>
      </ul>
    `
  },

  {
    id: 'ref-cpr-guidelines',
    title: 'CPR Guidelines',
    content: `
      <div class="ref-image-wrap">
        <img src="assets/cpr-guidelines-thumb.png" alt="CPR Guidelines Chart"
             onclick="openFlowchartPdf('assets/cpr-guidelines.pdf')" />
        <div class="flowchart-label">Summary of High-Quality CPR (tap to view full PDF)</div>
      </div>

      <h3 class="ref-subheading">CPR NOTES:</h3>
      <ul class="ref-notes-list">
        <li>Rate: 100-120 compressions/minute and allow full chest recoil.</li>
        <li>Switch person doing compressions every 2 minutes and focus on high quality CPR.</li>
        <li>Minimize interruptions to chest compressions at all times.</li>
        <li>Give ventilations over 1 second just to point of seeing chest rise.</li>
      </ul>

      <h3 class="ref-subheading">ADULTS:</h3>
      <div class="ref-body-text">
        Non-intubated: ratio 30:2 as above.<br>
        Intubated: 10 ventilations per minute without interrupting chest compressions.<br>
        SGA inserted: 10 ventilations per minute without interrupting chest compressions
      </div>

      <h3 class="ref-subheading">INFANTS (AGE LESS THAN 1 YEAR, EXCLUDING NEWBORNS) <u>AND</u> PEDIATRICS (AGE 1 TO PUBERTY):</h3>
      <div class="ref-body-text">
        Non-intubated: ratio 15:2 as above.<br>
        Intubated: Give 1 breath every 2 to 3 seconds (20-30 per minute).
      </div>

      <h3 class="ref-subheading">NEONATE:</h3>
      <div class="ref-body-text">
        Both non-intubated <strong>AND</strong> intubated 3:1 ratio as above.
      </div>

      <h3 class="ref-subheading">ETCO2 IN CARDIAC ARREST</h3>
      <ul class="ref-notes-list">
        <li>When a SGA or ETT is in place, the following concepts apply:</li>
        <li>Continuous waveform capnography is recommended in addition to clinical assessment as the most reliable method of confirming and monitoring correct placement of an endotracheal tube</li>
        <li>Waveform capnography should be used to confirm and monitor endotracheal tube and SGA placement at all times</li>
        <li>Studies on waveform capnography have shown nearly 100% sensitivity and 100% specificity in identifying correct endotracheal tube and SGA placement</li>
        <li>Using quantitative waveform capnography is recommended in patients to monitor CPR quality, optimize chest compressions, and detect ROSC during chest compressions or when rhythm check reveals an organized rhythm (in addition to pulse checks)</li>
        <li>If waveform capnography abruptly increases to a normal value (35 to 40 mm Hg or higher) and is sustained, this may represent ROSC; wait for the next rhythm check to check for a pulse (or stop sooner if the patient exhibits signs of life)</li>
        <li>An ETCO<sub>2</sub> &lt; 10 mmHg in VSA patients after 20 minutes of ACLS have a very poor prognosis; and can be used with clinical factors for the BHP to determine if TOR is appropriate.</li>
      </ul>
    `
  },

  {
    id: 'ref-croup-assessment',
    title: 'Croup Assessment Reference',
    content: `
      <ul class="ref-notes-list">
        <li>Croup is an upper respiratory infection that is generally the result of a viral infection.</li>
        <li>It tends to occur in children aged 6 months to 3 years, and is most prevalent at the age of 2 years.</li>
        <li>It is characterized by swelling and irritation of the respiratory tract, and is often associated with a &ldquo;barking style&rdquo; cough.</li>
        <li>The severity of the symptoms can be characterized using the guideline below.</li>
        <li>Generally speaking, patients with moderate to severe croup should be considered for therapy as per the Medical Directive.</li>
      </ul>

      <h3 class="ref-subheading">WESTLEY CROUP SCORE:</h3>
      <p class="ref-body-text">This allows the severity of symptoms to be classified. Maximum score possible is 17.</p>

      <div class="croup-card">
        <div class="croup-card-header">Inspiratory Stridor</div>
        <div class="croup-card-row"><span><span class="croup-score-num">0</span> None</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">1</span> Audible with stethoscope</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">2</span> Audible without stethoscope</span></div>
      </div>

      <div class="croup-card">
        <div class="croup-card-header">Retraction</div>
        <div class="croup-card-row"><span><span class="croup-score-num">0</span> None</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">1</span> Mild</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">2</span> Moderate</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">3</span> Severe</span></div>
      </div>

      <div class="croup-card">
        <div class="croup-card-header">Air Entry</div>
        <div class="croup-card-row"><span><span class="croup-score-num">0</span> Normal</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">1</span> Decreased</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">2</span> Severely decreased</span></div>
      </div>

      <div class="croup-card">
        <div class="croup-card-header">Cyanosis</div>
        <div class="croup-card-row"><span><span class="croup-score-num">0</span> None</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">4</span> With agitation</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">5</span> At rest</span></div>
      </div>

      <div class="croup-card">
        <div class="croup-card-header">Conscious Level</div>
        <div class="croup-card-row"><span><span class="croup-score-num">0</span> Normal</span></div>
        <div class="croup-card-row"><span><span class="croup-score-num">5</span> Altered</span></div>
      </div>

      <ul class="ref-notes-list" style="margin-top:16px;">
        <li><strong>Score of 2&ndash;3:</strong> Indicates mild croup.</li>
        <li><strong>Score of 4&ndash;7:</strong> Indicates moderate croup.</li>
        <li><strong>Score of &gt;7:</strong> Indicates severe croup.</li>
      </ul>
    `
  },
  {
    id: 'ref-dextrose-dosing',
    title: 'Dextrose Dosing Guide',
    content: `
      <h3 class="ref-subheading">Dextrose Reference</h3>

      <div class="dextrose-card">
        <div class="dextrose-card-header">&lt; 30 Days</div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Weight</span><span class="dextrose-card-value">2&ndash;5 kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Blood Sugar</span><span class="dextrose-card-value">&lt; 3.0 mmol/L</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dextrose Prep</span><span class="dextrose-card-value">D10W</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label"></span><span class="dextrose-card-value" style="font-size:11px;color:#666;">Waste 40 mls, replace w/ Normal Saline</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dose</span><span class="dextrose-card-value">0.2 g/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Volume</span><span class="dextrose-card-value">2 ml/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Amount</span><span class="dextrose-card-value">4&ndash;10 ml</span></div>
      </div>

      <div class="dextrose-card">
        <div class="dextrose-card-header">&ge; 30 Days to &lt; 2 Years</div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Weight</span><span class="dextrose-card-value">3&ndash;14 kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Blood Sugar</span><span class="dextrose-card-value">&lt; 3.0 mmol/L</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dextrose Prep</span><span class="dextrose-card-value">D25W</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label"></span><span class="dextrose-card-value" style="font-size:11px;color:#666;">Waste 25 mls, replace w/ Normal Saline</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dose</span><span class="dextrose-card-value">0.5 g/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Volume</span><span class="dextrose-card-value">2 ml/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Amount</span><span class="dextrose-card-value">6&ndash;28 ml</span></div>
      </div>

      <div class="dextrose-card">
        <div class="dextrose-card-header">&ge; 2 Years</div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Weight</span><span class="dextrose-card-value">10 to &gt;50 kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Blood Sugar</span><span class="dextrose-card-value">&lt; 4.0 mmol/L</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dextrose Prep</span><span class="dextrose-card-value">D50W</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Dose</span><span class="dextrose-card-value">0.5 g/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Volume</span><span class="dextrose-card-value">1 ml/kg</span></div>
        <div class="dextrose-card-row"><span class="dextrose-card-label">Amount</span><span class="dextrose-card-value">10&ndash;50 ml</span></div>
      </div>
    `
  },
  {
    id: 'ref-emergency-childbirth',
    title: 'Emergency Childbirth Reference',
    content: `
      <h3 class="ref-subheading">Shoulder Dystocia &ndash; ALARM</h3>
      <p class="ref-body-text">Once shoulder dystocia is identified, the below maneuvers should be completed in <strong>8 minutes</strong> as that&rsquo;s when critical irreversible hypoxic injury can occur.</p>

      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-alarm">
          <thead>
            <tr>
              <th>Letter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A</strong></td>
              <td><strong>Ask for help</strong> &ndash; You will require 2 people</td>
            </tr>
            <tr>
              <td><strong>L</strong></td>
              <td><strong>Lift legs, hyperflex thighs</strong> &ndash; McRoberts Maneuver</td>
            </tr>
            <tr>
              <td><strong>A</strong></td>
              <td><strong>Adduct anterior shoulder</strong> &ndash; Apply suprapubic pressure</td>
            </tr>
            <tr>
              <td><strong>R</strong></td>
              <td><strong>Roll Over</strong> &ndash; Hands and Knees (Gaskin)</td>
            </tr>
            <tr>
              <td><strong>M</strong></td>
              <td><strong>Manually deliver posterior arm</strong> &ndash; Check for hand/arm visible at the perineum</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ref-note" style="margin-top:12px;">
        <strong>Note:</strong> Perform ALARM sequence twice. If unsuccessful after 2 attempts, transport.
      </div>

      <h3 class="ref-subheading" style="margin-top:24px;">Breech Delivery</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/breech-delivery.png','_blank')">
        <img src="assets/breech-delivery.png" alt="Breech Delivery" />
      </div>

      <h3 class="ref-subheading" style="margin-top:24px;">Breech Flowchart</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/breech-flowchart.png','_blank')">
        <img src="assets/breech-flowchart.png" alt="Breech Flowchart" />
      </div>

      <h3 class="ref-subheading" style="margin-top:24px;">Cord Prolapse &ndash; Management</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/cord-prolapse-management.png','_blank')">
        <img src="assets/cord-prolapse-management.png" alt="Cord Prolapse Management" />
      </div>
      <ul class="ref-notes-list" style="margin-top:8px;">
        <li>Move patient into knee-chest position or exaggerated sims position (left lateral, pelvis elevated on pillows).</li>
        <li>Wash hands, put on sterile gloves, gently cradle cord in hand, replace cord in vagina while inserting fingers/hand in vagina to apply manual digital pressure to fetal presenting part to lift off of cord.</li>
      </ul>

      <h3 class="ref-subheading" style="margin-top:24px;">Cord Prolapse &ndash; Transport</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/cord-prolapse-transport.png','_blank')">
        <img src="assets/cord-prolapse-transport.png" alt="Cord Prolapse Transport" />
      </div>
      <ul class="ref-notes-list" style="margin-top:8px;">
        <li>In order to apply sufficient force, you may need to place your hand in the vagina.</li>
        <li>Safest to transport in Exaggerated Sims position if possible.</li>
        <li>Maintain manual elevation until TOC in hospital, including during transport.</li>
        <li>Call ahead to hospital.</li>
      </ul>

      <p class="ref-body-text" style="margin-top:16px; font-size:11px; color:#888; text-align:center;">
        USED WITH PERMISSION FROM THE ASSOCIATION OF ONTARIO MIDWIVES (AOM)
      </p>
    `
  },
  {
    id: 'ref-etco2-waveforms',
    title: 'ETCO2 Waveforms',
    content: `
      <p class="ref-body-text">Capnography waveform reference for common clinical conditions.</p>

      <div class="ref-image-wrap" onclick="window.open('assets/etco2-waveforms.png','_blank')">
        <img src="assets/etco2-waveforms.png" alt="ETCO2 Waveforms" />
      </div>
      <p class="ref-body-text" style="font-size:12px;text-align:center;color:#888;">Tap image to view full size</p>
    `
  },
  {
    id: 'ref-epi-dosing',
    title: 'Epinephrine Dosing Chart',
    content: `
      <h3 class="ref-subheading" style="text-align:center;text-transform:none;">Epinephrine 1 mg/mL = 1:1000 IM</h3>
      <p class="ref-body-text" style="text-align:center;font-weight:600;">Dosing Guide</p>

      <div class="ref-note">
        <strong>Dose (0.01 mg/kg)</strong> is rounded to the nearest 0.05mg<br>
        Use a 1 mL syringe
      </div>

      <table class="ref-table-compact">
        <thead>
          <tr>
            <th>Age</th>
            <th>Weight</th>
            <th>Dose (mg)</th>
            <th>Volume (mL)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>3 months</td><td>5 kg</td><td>0.05</td><td>0.05</td></tr>
          <tr><td>6 months</td><td>8 kg</td><td>0.08</td><td>0.10</td></tr>
          <tr><td>9 months</td><td>10 kg</td><td>0.10</td><td>0.10</td></tr>
          <tr><td>1 year</td><td>12 kg</td><td>0.12</td><td>0.10</td></tr>
          <tr><td>2 years</td><td>14 kg</td><td>0.14</td><td>0.15</td></tr>
          <tr><td>3 years</td><td>16 kg</td><td>0.16</td><td>0.15</td></tr>
          <tr><td>4 years</td><td>18 kg</td><td>0.18</td><td>0.20</td></tr>
          <tr><td>5 years</td><td>20 kg</td><td>0.20</td><td>0.20</td></tr>
          <tr><td>6 years</td><td>22 kg</td><td>0.22</td><td>0.20</td></tr>
          <tr><td>7 years</td><td>24 kg</td><td>0.24</td><td>0.25</td></tr>
          <tr><td>8 years</td><td>26 kg</td><td>0.26</td><td>0.25</td></tr>
          <tr><td>9 years</td><td>28 kg</td><td>0.28</td><td>0.30</td></tr>
          <tr><td>10 years</td><td>30 kg</td><td>0.30</td><td>0.30</td></tr>
          <tr><td>11 years</td><td>32 kg</td><td>0.32</td><td>0.30</td></tr>
          <tr><td>12 years</td><td>34 kg</td><td>0.34</td><td>0.35</td></tr>
          <tr><td>13 years</td><td>36 kg</td><td>0.36</td><td>0.35</td></tr>
          <tr><td>14 years</td><td>38 kg</td><td>0.38</td><td>0.40</td></tr>
          <tr><td><strong>Adult</strong></td><td>50 kg</td><td><strong>0.50</strong></td><td><strong>0.50</strong></td></tr>
        </tbody>
      </table>

      <p class="ref-body-text" style="font-size:12px;margin-top:8px;">
        <strong>Note:</strong> Dosage administered can be calculated by the weight based calculation in the Medical Directive and/or by using the above chart. Administered dosage in the chart may be rounded to the nearest volume increment that can be accurately measured.
      </p>
    `
  },
  {
    id: 'ref-dialysis-disconnect',
    title: 'Emergency Dialysis Disconnect Prompt Card',
    content: `
      <div class="dialysis-card">
        <div class="dialysis-card-title">Hemodialysis</div>
        <ul>
          <li>Clamp patient side tubing clamps</li>
          <li>Clamp machine side clamps</li>
          <li>Attach sterile Luer Lock caps to the ends of the patient tubing</li>
          <li>Disregard any alarms that may sound from the machine</li>
          <li>Secure patient tubing and cover with abdo pad</li>
        </ul>
      </div>

      <div class="dialysis-card">
        <div class="dialysis-card-title">Continuous Ambulatory Peritoneal Dialysis (CAPD)</div>
        <ul>
          <li>Close the twist clamp</li>
          <li>Clamp both the fill and drain bag tubing with clamps supplied in disconnect kits</li>
          <li>Screw a sterile mini cap on the patient side tubing<span class="sub-item">&bull; Snap a sterile mini cap on the machine side tubing</span></li>
          <li>Secure patient tubing and cover with abdo pad</li>
        </ul>
      </div>

      <div class="dialysis-card">
        <div class="dialysis-card-title">Automatic Peritoneal Dialysis (APD)</div>
        <ul>
          <li>Push &ldquo;Stop&rdquo; button on APD machine</li>
          <li>Close the twist clamp</li>
          <li>Disconnect the patient tubing from the machine tubing</li>
          <li>Screw a sterile mini cap on the patient tubing</li>
          <li>Snap a mini cap on the machine tubing</li>
          <li>Secure patient tubing and cover with abdo pad</li>
        </ul>
      </div>
    `
  },
  {
    id: 'ref-fentanyl-dosing',
    title: 'Fentanyl Dosing Guide',
    content: `
      <h3 class="ref-subheading" style="text-align:center;text-transform:none;">FentaNYL Dosing Guide</h3>

      <div class="ref-body-text" style="text-align:center;font-size:13px;">
        Route: Intravenous or Intranasal<br>
        Supplied: 100 mcg in 2 mL<br>
        *Intranasal Max Fluid: 1 mL per nare<br>
        Use 1 mL Syringe, undiluted<br>
        Maximum Pediatric Dosage: up to 1 mcg/kg (administer in divided doses)
      </div>

      <div class="fentanyl-patch-banner">
        &#9888; Mandatory Provincial Patch Point for Children &lt; 12 years old
      </div>

      <table class="ref-table-compact ref-table-fentanyl">
        <thead>
          <tr>
            <th>Age</th>
            <th>Weight</th>
            <th>Max Dose</th>
            <th>Calc. Vol.</th>
            <th>Vol. (rounded)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Neonate</td><td>3 kg</td><td>3 mcg</td><td>0.06 mL</td><td>0.05 mL</td></tr>
          <tr><td>&lt;1</td><td>6 kg</td><td>6 mcg</td><td>0.12 mL</td><td>0.1 mL</td></tr>
          <tr><td>1</td><td>12 kg</td><td>12 mcg</td><td>0.24 mL</td><td>0.2 mL</td></tr>
          <tr><td>2</td><td>14 kg</td><td>14 mcg</td><td>0.28 mL</td><td>0.3 mL</td></tr>
          <tr><td>3</td><td>16 kg</td><td>16 mcg</td><td>0.32 mL</td><td>0.3 mL</td></tr>
          <tr><td>4</td><td>18 kg</td><td>18 mcg</td><td>0.36 mL</td><td>0.4 mL</td></tr>
          <tr><td>5</td><td>20 kg</td><td>20 mcg</td><td>0.40 mL</td><td>0.4 mL</td></tr>
          <tr><td>6</td><td>22 kg</td><td>22 mcg</td><td>0.44 mL</td><td>0.4 mL</td></tr>
          <tr><td>7</td><td>24 kg</td><td>24 mcg</td><td>0.48 mL</td><td>0.5 mL</td></tr>
          <tr><td>8</td><td>26 kg</td><td>26 mcg</td><td>0.52 mL</td><td>0.5 mL</td></tr>
          <tr><td>9</td><td>28 kg</td><td>28 mcg</td><td>0.56 mL</td><td>0.6 mL</td></tr>
          <tr><td>10</td><td>30 kg</td><td>30 mcg</td><td>0.60 mL</td><td>0.6 mL</td></tr>
          <tr><td>11</td><td>32 kg</td><td>32 mcg</td><td>0.64 mL</td><td>0.6 mL</td></tr>
        </tbody>
        <tbody class="fentanyl-youth-block">
          <tr><td rowspan="9"><strong>Youth* (12&ndash;17)</strong></td><td>34 kg</td><td>34 mcg</td><td>0.68 mL</td><td>0.7 mL</td></tr>
          <tr><td>40 kg</td><td>40 mcg</td><td>0.80 mL</td><td>0.8 mL</td></tr>
          <tr><td>45 kg</td><td>45 mcg</td><td>0.90 mL</td><td>0.9 mL</td></tr>
          <tr><td>50 kg</td><td>50 mcg</td><td>1.0 mL</td><td>1.0 mL</td></tr>
          <tr><td>55 kg</td><td>55 mcg</td><td>1.1 mL*</td><td>1.1 mL*</td></tr>
          <tr><td>60 kg</td><td>60 mcg</td><td>1.2 mL*</td><td>1.2 mL*</td></tr>
          <tr><td>65 kg</td><td>65 mcg</td><td>1.3 mL*</td><td>1.3 mL*</td></tr>
          <tr><td>70 kg</td><td>70 mcg</td><td>1.4 mL*</td><td>1.4 mL*</td></tr>
          <tr><td>75 kg</td><td>75 mcg</td><td>1.5 mL*</td><td>1.5 mL*</td></tr>
        </tbody>
        <tbody>
          <tr><td colspan="2"><em>Pediatric Maximum Single Dose*</em></td><td>75 mcg</td><td>1.5 mL*</td><td>1.5 mL*</td></tr>
          <tr><td>Adults &ge; 18</td><td>25&ndash;75 mcg</td><td></td><td>0.50&ndash;1.5 mL*</td><td>0.50&ndash;1.5 mL*</td></tr>
          <tr><td colspan="2"><em>Adult Maximum Single Dose</em></td><td>75 mcg</td><td colspan="2">1.5 mL*</td></tr>
        </tbody>
      </table>

      <p class="ref-body-text" style="font-size:12px;margin-top:8px;">
        *For pediatric dosing, consider administering in divided doses of one-third to one-half and titrate to effect similar to adult dosing.
      </p>
    `
  },
  {
    id: 'ref-formulas',
    title: 'Formulas',
    content: `
      <div class="ref-note">
        <strong>NOTE:</strong> The formulas below are for reference purposes only. Paramedics must refer to the Medical Directives and/or Base Hospital Physician patch orders for appropriate treatment options.
      </div>

      <div class="formula-block">
        <div class="formula-title">IV Flow Rate Calculation:</div>
        <div class="formula-equation">
          gtt/min = <span class="formula-fraction"><span class="num">Amount (ml) to be infused &times; Drops per ml (gtt/ml) of administration set</span><span class="den">Total time of infusion (min)</span></span>
        </div>
      </div>

      <div class="formula-block">
        <div class="formula-title">Medication Infusion Rate:</div>
        <div class="formula-equation">
          ml/hr = <span class="formula-fraction"><span class="num">Desired dose (mg/min) &times; 60 min/hr</span><span class="den">Drug concentration (mg/ml)</span></span>
        </div>
        <div class="formula-note">
          <strong>Note:</strong> Units must be consistent throughout the calculation. For example, the desired dose can be in mcg/min, as long as the concentration is also converted into mcg/ml.
        </div>
      </div>

      <div class="formula-block">
        <div class="formula-title">Pediatric Body Weight:</div>
        <p class="ref-body-text"><strong>For use with children aged 1 to 10 years.</strong></p>
        <div class="formula-equation">
          (Age in years &times; 2) + 10 = Approximate child body weight in kg.
        </div>
      </div>

      <div class="formula-block">
        <div class="formula-title">Oxygen Tank Duration:</div>
        <div class="formula-equation">
          Duration (minutes) = <span class="formula-fraction"><span class="num">Gauge pressure &minus; Safe residual pressure &times; Cylinder factor</span><span class="den">Flow rate (L/min)</span></span>
        </div>
        <div class="formula-note">
          Cylinder Factor: D-tank = 0.16; M-tank = 1.56
        </div>
      </div>
    `
  },
  {
    id: 'ref-gcs',
    title: 'Glasgow Coma Scale',
    content: `
      <p class="ref-body-text">Adult <strong>Glasgow Coma Scale</strong> reference chart. For a tap-to-score calculator, open <strong>Medical Calculators</strong> on the home screen → <strong>Glasgow Coma Scale (Calculator)</strong>.</p>

      <h3 class="ref-subheading">Eye opening</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>4</td><td>Spontaneous</td></tr>
            <tr><td>3</td><td>To voice</td></tr>
            <tr><td>2</td><td>To pain</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading">Verbal response</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>5</td><td>Orientated</td></tr>
            <tr><td>4</td><td>Confused</td></tr>
            <tr><td>3</td><td>Inappropriate words</td></tr>
            <tr><td>2</td><td>Incomprehensible sounds</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading">Motor response</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>6</td><td>Obeys commands</td></tr>
            <tr><td>5</td><td>Localize (pain)</td></tr>
            <tr><td>4</td><td>Withdraw (pain)</td></tr>
            <tr><td>3</td><td>Flexion (pain)</td></tr>
            <tr><td>2</td><td>Extension (pain)</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>
      <p class="ref-body-text"><strong>Total score range:</strong> 3–15 (sum of best eye, verbal, and motor scores).</p>
    `
  },
  {
    id: 'ref-isbar',
    title: 'iSBAR',
    content: `
      <div class="isbar-wrap">
        <div class="isbar-card">
          <div class="isbar-letter-col">
            <div class="isbar-letter">i</div>
            <div class="isbar-label">Identification</div>
          </div>
          <div class="isbar-content-col">
            <div class="isbar-line">Identify BHP &amp; Introduce yourself</div>
            <div class="isbar-line isbar-sub">(OASIS, Service, ACP/PCP)</div>
          </div>
        </div>
        <div class="isbar-card">
          <div class="isbar-letter-col">
            <div class="isbar-letter">S</div>
            <div class="isbar-label">Situation</div>
          </div>
          <div class="isbar-content-col">
            <div class="isbar-line"><strong>ORDERS SOUGHT</strong></div>
            <div class="isbar-line">age, sex, weight</div>
            <div class="isbar-line">problem / concern</div>
            <div class="isbar-line">ETA to hospital</div>
          </div>
        </div>
        <div class="isbar-card">
          <div class="isbar-letter-col">
            <div class="isbar-letter">B</div>
            <div class="isbar-label">Background</div>
          </div>
          <div class="isbar-content-col">
            <div class="isbar-line">Pertinent +/-</div>
            <div class="isbar-line">HPI (OPQRST)</div>
            <div class="isbar-line">PMHx (SAMPLE)</div>
          </div>
        </div>
        <div class="isbar-card">
          <div class="isbar-letter-col">
            <div class="isbar-letter">A</div>
            <div class="isbar-label">Assessment</div>
          </div>
          <div class="isbar-content-col">
            <div class="isbar-line">Pertinent +/-</div>
            <div class="isbar-line">Physical Exam</div>
            <div class="isbar-line">Vital Signs, ECG</div>
          </div>
        </div>
        <div class="isbar-card">
          <div class="isbar-letter-col">
            <div class="isbar-letter">R</div>
            <div class="isbar-label">Response</div>
          </div>
          <div class="isbar-content-col">
            <div class="isbar-line">Response to treatment</div>
            <div class="isbar-line">Reiterate orders sought</div>
            <div class="isbar-line">Receive orders</div>
            <div class="isbar-line"><strong>REPEAT BACK ORDERS</strong></div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'ref-neonatal-spo2',
    title: 'Neonatal Pre-ductal Oxygen Saturation',
    content: `
      <h3 class="ref-subheading" style="text-align:center;font-size:16px;">TARGETED PRE-DUCTAL SpO2</h3>

      <table class="spo2-table">
        <thead><tr><td colspan="2" style="text-align:center;font-weight:700;font-size:15px;padding-bottom:12px;">After Birth</td></tr></thead>
        <tbody>
          <tr><td>1 min</td><td class="spo2-1min">60&ndash;65%</td></tr>
          <tr><td>2 min</td><td class="spo2-2min">65&ndash;70%</td></tr>
          <tr><td>3 min</td><td class="spo2-3min">70&ndash;75%</td></tr>
          <tr><td>4 min</td><td class="spo2-4min">75&ndash;80%</td></tr>
          <tr><td>5 min</td><td class="spo2-5min">80&ndash;85%</td></tr>
          <tr><td>10 min</td><td class="spo2-10min">85&ndash;95%</td></tr>
        </tbody>
      </table>

      <p class="ref-body-text" style="text-align:center;font-size:13px;margin-top:12px;">
        In all neonates, only apply the pulse oximeter to the <strong>RIGHT HAND</strong>.<br>
        Target the above values when:
      </p>

      <ul class="ref-notes-list">
        <li>Resuscitation is anticipated</li>
        <li>PPV is required for more than a few breaths</li>
        <li>Persistent central cyanosis, or if you need to confirm your perception of central cyanosis</li>
        <li>Any administration of supplemental oxygen</li>
      </ul>
    `
  },
  {
    id: 'ref-pain-scale',
    title: 'Pain Scale',
    content: `
      <p class="ref-body-text">Can be utilized for patients 3 years of age and older.</p>

      <div class="ref-image-wrap" onclick="window.open('assets/pain-scale.png','_blank')">
        <img src="assets/pain-scale.png" alt="Pain Scale 0-10" />
      </div>
    `
  },
  {
    id: 'ref-pediatric-coma',
    title: 'Pediatric Coma Scale',
    content: `
      <p class="ref-body-text"><strong>Pediatric Coma Scale</strong> reference chart. For a tap-to-score calculator, open <strong>Medical Calculators</strong> on the home screen → <strong>Pediatric Coma Scale (Calculator)</strong>.</p>

      <h3 class="ref-subheading">Eye opening</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>4</td><td>Spontaneous</td></tr>
            <tr><td>3</td><td>To speech</td></tr>
            <tr><td>2</td><td>To pain</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading">Verbal response</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>5</td><td>Coos or babbles</td></tr>
            <tr><td>4</td><td>Irritable &amp; constantly cries</td></tr>
            <tr><td>3</td><td>Cries to pain</td></tr>
            <tr><td>2</td><td>Moans to pain</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="ref-subheading">Motor response</h3>
      <div class="table-scroll-wrap">
        <table class="ref-table ref-table-striped">
          <thead><tr><th>Score</th><th>Response</th></tr></thead>
          <tbody>
            <tr><td>6</td><td>Obeys commands</td></tr>
            <tr><td>5</td><td>Withdraws from touch</td></tr>
            <tr><td>4</td><td>Withdraws from pain</td></tr>
            <tr><td>3</td><td>Flexion to pain</td></tr>
            <tr><td>2</td><td>Extension to pain</td></tr>
            <tr><td>1</td><td>None</td></tr>
          </tbody>
        </table>
      </div>
      <p class="ref-body-text"><strong>Total score range:</strong> 3–15 (sum of best eye, verbal, and motor scores).</p>
    `
  },
  {
    id: 'ref-cpap',
    title: 'Rescuer II Compact CPAP System',
    content: `
      <ul class="ref-notes-list" style="margin-bottom:16px;">
        <li><strong>Obtain consent from Pt, Refer to Directive, and Don appropriate PPE.</strong></li>
      </ul>

      <h3 class="ref-subheading">Step 1</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/cpap-step1.png','_blank')">
        <img src="assets/cpap-step1.png" alt="CPAP Step 1 - Oxygen Regulator" />
      </div>
      <p class="ref-body-text">Turn on oxygen to 5 Lpm in truck / 6 Lpm on portable D tank due to regulator settings.</p>

      <h3 class="ref-subheading">Step 2</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/cpap-step2.png','_blank')">
        <img src="assets/cpap-step2.png" alt="CPAP Step 2 - Mask Placement" />
      </div>
      <p class="ref-body-text">Apply Defib ETCO2 cannula (NOT in line), place assembled device over patient&rsquo;s face, holding it in place while slipping bonnet/headgear over back of head snugly but not tightly.</p>

      <h3 class="ref-subheading">Step 3</h3>
      <div class="ref-image-wrap" onclick="window.open('assets/cpap-step3.png','_blank')">
        <img src="assets/cpap-step3.png" alt="CPAP Step 3 - Valve Adjustment" />
      </div>
      <p class="ref-body-text">Adjust oxygen flow according to manometer (read at <em>end</em> exhalation as per Directive).</p>
      <ul class="ref-notes-list">
        <li>If patient condition not improved or SpO2 &lt;92%, add supplemental oxygen using additional tubing and red-capped port. Start titrating at 1 Lpm as necessary to increase FiO2 (max 15 Lpm).</li>
      </ul>

      <h3 class="ref-subheading">Oxygen Flow Settings</h3>
      <p class="ref-body-text">Flow in liters per minute to pressure (cmH<sub>2</sub>O):</p>
      <table class="ref-table-compact">
        <thead>
          <tr>
            <th>Flow (Lpm)</th>
            <th>Pressure (cmH<sub>2</sub>O)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>5 L</td><td>5</td></tr>
          <tr><td>7 L</td><td>7.5</td></tr>
          <tr><td>8 L</td><td>10</td></tr>
          <tr><td>9 L</td><td>12.5</td></tr>
          <tr><td>10 L</td><td>15</td></tr>
        </tbody>
      </table>

      <div class="ref-note" style="margin-top:12px;">
        <strong>Note:</strong> EtCO2 should be monitored via EtCO2 nasal cannula and NOT inline to avoid washout as per the BLS standard.
      </div>

      <ul class="ref-notes-list" style="margin-top:12px;">
        <li>A secondary tank is needed from ED upon arrival to continue increased FiO2 treatment.</li>
        <li>If required to give <strong>Ventolin</strong>, the red-capped port will accept a Ventolin MDI.</li>
        <li>If required to give <strong>Nitro</strong>, hooks near the chin allow for quick access to the patient&rsquo;s mouth.</li>
      </ul>
    `
  },
  {
    id: 'ref-rule-of-nines',
    title: 'Rule of Nines - Burn Percentage',
    content: `
      <div class="ref-image-wrap" onclick="window.open('assets/rule-of-nines.png','_blank')">
        <img src="assets/rule-of-nines.png" alt="Rule of Nines - Burn Percentage Diagram" />
      </div>

      <p class="ref-body-text" style="font-size:11px;text-align:center;color:#888;margin-bottom:12px;">
        Advanced Trauma Life Support, 9<sup>th</sup> Edition 2012; The American College of Surgeons.
      </p>

      <h3 class="ref-subheading">Burn Treatment Notes:</h3>
      <ol class="ref-notes-list" style="padding-left:24px;">
        <li>For burn sites estimated to involve &lt;15% of body surface area, cool burns and limit cooling to &lt;30 minutes to prevent hypothermia</li>
        <li>Cover all 1<sup>st</sup> degree burns with moist sterile dressing and then cover with dry sheet or blanket</li>
        <li>Cover all 2<sup>nd</sup> degree burns estimated to involve &lt;15% of body surface area with moist, sterile dressing, and dry sheet or blanket</li>
        <li>Cover all 2<sup>nd</sup> degree burns estimated to involve &ge;15% of body surface area with dry, sterile dressing or sheet</li>
        <li>If remoistening of the dressing is required to continue to cool the burn, remove the dry sheet or blanket and remoisten the previously applied sterile dressing</li>
        <li>If shivering or hypotension develops, discontinue cooling efforts</li>
        <li>Cover all 3<sup>rd</sup> degree burns with dry, sterile dressing or sheet</li>
        <li>If dressing digits, dress digits individually</li>
        <li>Leave blisters intact</li>
        <li>Keep the patient warm</li>
      </ol>
    `
  },
  {
    id: 'ref-stemi-location',
    title: 'STEMI Anatomical Location',
    content: `
      <div class="stemi-grid">
        <div class="stemi-cell stemi-lateral"><div class="stemi-lead">I</div><div class="stemi-region">Lateral</div></div>
        <div class="stemi-cell stemi-none"><div class="stemi-lead">aVR</div><div class="stemi-region">&nbsp;</div></div>
        <div class="stemi-cell stemi-septal"><div class="stemi-lead">V1</div><div class="stemi-region">Septal</div></div>
        <div class="stemi-cell stemi-anterior"><div class="stemi-lead">V4</div><div class="stemi-region">Anterior</div></div>

        <div class="stemi-cell stemi-inferior"><div class="stemi-lead">II</div><div class="stemi-region">Inferior</div></div>
        <div class="stemi-cell stemi-lateral"><div class="stemi-lead">aVL</div><div class="stemi-region">Lateral</div></div>
        <div class="stemi-cell stemi-septal"><div class="stemi-lead">V2</div><div class="stemi-region">Septal</div></div>
        <div class="stemi-cell stemi-lateral"><div class="stemi-lead">V5</div><div class="stemi-region">Lateral</div></div>

        <div class="stemi-cell stemi-inferior"><div class="stemi-lead">III</div><div class="stemi-region">Inferior</div></div>
        <div class="stemi-cell stemi-inferior"><div class="stemi-lead">aVF</div><div class="stemi-region">Inferior</div></div>
        <div class="stemi-cell stemi-anterior"><div class="stemi-lead">V3</div><div class="stemi-region">Anterior</div></div>
        <div class="stemi-cell stemi-lateral"><div class="stemi-lead">V6</div><div class="stemi-region">Lateral</div></div>
      </div>

      <div class="stemi-legend">
        <div class="stemi-legend-item"><div class="stemi-legend-dot" style="background:#2E86C1;"></div> Lateral</div>
        <div class="stemi-legend-item"><div class="stemi-legend-dot" style="background:#27874A;"></div> Inferior</div>
        <div class="stemi-legend-item"><div class="stemi-legend-dot" style="background:#D4770B;"></div> Septal</div>
        <div class="stemi-legend-item"><div class="stemi-legend-dot" style="background:#C0392B;"></div> Anterior</div>
      </div>
    `
  },

];
