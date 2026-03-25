// ── Ontario ALS PCS v5.4  –  PCP Medical Directives ────────────────────────
// Source: MOH ALS PCS 5.4 (in force June 2, 2025)
// ALL content transcribed VERBATIM from the official document.
// ────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'airway',    label: 'Airway/Breathing',                  colorClass: 'bg-blue'   },
  { id: 'cardiac',   label: 'Cardiac/Circulation',               colorClass: 'bg-red'    },
  { id: 'loc',       label: 'Level of Consciousness/Pain/Nausea',colorClass: 'bg-orange' },
  { id: 'procedural',label: 'Procedural',                        colorClass: 'bg-green'  },
  { id: 'bls',       label: 'BLS Standards',                     colorClass: 'bg-purple' },
];

const DIRECTIVES = [

  // ════════════════════════════════════════════════════════
  //  AIRWAY / BREATHING  (PCP Core + Auxiliary)
  // ════════════════════════════════════════════════════════

  {
    id: 'supraglottic',
    title: 'Supraglottic Airway',
    fullTitle: 'Supraglottic Airway Medical Directive',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Need for ventilatory assistance or airway control',
      'AND',
      'Other airway management is ineffective'
    ],
    conditions: {
      'Supraglottic Airway': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Absent gag reflex' },
    },
    contraindications: {
      'Supraglottic Airway': [
        'Airway obstructed by a foreign object',
        'Known esophageal disease (varices)',
        'Trauma to the oropharynx',
        'Caustic ingestion',
      ],
    },
    treatments: [
      {
        med: 'Consider supraglottic airway insertion',
        cols: ['', ''],
        rows: [
          ['Max. attempts', '2'],
        ]
      },
      {
        med: 'Confirm supraglottic airway placement',
        cols: ['Method', 'Method'],
        rows: [
          ['Primary', 'Secondary'],
          ['ETCO₂ (Waveform capnography)', 'ETCO₂ (Non-waveform device)\nAuscultation\nChest rise'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'An attempt at supraglottic airway insertion is defined as the insertion of the supraglottic airway into the mouth.',
      'Confirmation of supraglottic airway should use ETCO₂ (Waveform capnography). If waveform capnography is not available or is not working, then at least 2 secondary methods must be used.',
    ],
    treatDischarge: null,
  },

  {
    id: 'bronchoconstriction',
    title: 'Bronchoconstriction',
    fullTitle: 'Bronchoconstriction Medical Directive',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Respiratory distress',
      'AND',
      'Suspected bronchoconstriction'
    ],
    conditions: {
      'salbutamol': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'EPINEPHrine': { age: 'N/A', weight: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'BVM ventilation required', sbp: 'N/A', other: 'Hx of asthma' },
      'dexamethasone': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Hx of asthma OR COPD OR 20 pack-year history of smoking' },
    },
    contraindications: {
      'salbutamol': ['Allergy or sensitivity to salbutamol'],
      'EPINEPHrine': ['Allergy or sensitivity to EPINEPHrine'],
      'dexamethasone': ['Allergy or sensitivity to steroids', 'Currently on PO or parenteral steroids'],
    },
    treatments: [
      {
        med: 'Consider salbutamol',
        cols: ['', 'Weight <25 kg MDI*', 'Weight <25 kg NEB', 'Weight ≥25 kg MDI*', 'Weight ≥25 kg NEB'],
        rows: [
          ['Dose', 'Up to 600 mcg (6 puffs)', '2.5 mg', 'Up to 800 mcg (8 puffs)', '5 mg'],
          ['Max. single dose', '600 mcg', '2.5 mg', '800 mcg', '5 mg'],
          ['Dosing interval', '5-15 min PRN', '5-15 min PRN', '5-15 min PRN', '5-15 min PRN'],
          ['Max. # of doses', '3', '3', '3', '3'],
        ],
        note: '*1 puff = 100 mcg'
      },
      {
        med: 'Consider EPINEPHrine',
        cols: ['', 'IM'],
        rows: [
          ['Concentration', '1 mg/mL = 1:1,000'],
          ['Dose', '0.01 mg/kg*'],
          ['Max. single dose', '0.5 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ],
        note: '*The EPINEPHrine dose may be rounded to the nearest 0.05 mg'
      },
      {
        med: 'Consider dexamethasone',
        cols: ['', 'PO/IM/IV'],
        rows: [
          ['Dose', '0.5 mg/kg'],
          ['Max. single dose', '8 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'EPINEPHrine should be the 1st medication administered if the patient is apneic. Salbutamol MDI may be administered subsequently using a BVM MDI adapter.',
      'Nebulization is contraindicated in patients with a known or suspected fever or in the setting of a declared febrile respiratory illness outbreak by the local medical officer of health.',
      'When administering salbutamol MDI, the rate of administration should be 100 mcg approximately every 4 breaths.',
      'A spacer should be used when administering salbutamol MDI.',
    ],
    treatDischarge: null,
  },

  {
    id: 'allergic-reaction',
    title: 'Moderate to Severe Allergic Reaction',
    fullTitle: 'Moderate to Severe Allergic Reaction Medical Directive',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Exposure to a probable allergen',
      'AND',
      'Signs and/or symptoms of a moderate to severe allergic reaction (including anaphylaxis)'
    ],
    conditions: {
      'EPINEPHrine': { age: 'N/A', weight: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'For anaphylaxis only' },
      'diphenhydrAMINE': { age: 'N/A', weight: '≥ 25 kg', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'EPINEPHrine': ['Allergy or sensitivity to EPINEPHrine'],
      'diphenhydrAMINE': ['Allergy or sensitivity to diphenhydramine'],
    },
    treatments: [
      {
        med: 'Consider EPINEPHrine',
        cols: ['', 'IM'],
        rows: [
          ['Concentration', '1 mg/mL = 1:1,000'],
          ['Dose', '0.01 mg/kg*'],
          ['Max. single dose', '0.5 mg'],
          ['Dosing interval', 'Minimum 5 min'],
          ['Max. # of doses', '2'],
        ],
        note: '*The EPINEPHrine dose may be rounded to the nearest 0.05 mg'
      },
      {
        med: 'Consider diphenhydrAMINE',
        cols: ['', 'Weight ≥25 kg to <50 kg', 'Weight ≥50 kg'],
        rows: [
          ['Route', 'IV/IM', 'IV/IM'],
          ['Dose', '25 mg', '50 mg'],
          ['Max. single dose', '25 mg', '50 mg'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'EPINEPHrine administration takes priority over IV access.',
      'IV administration of diphenhydrAMINE applies only to PCPs authorized for PCP Autonomous IV.',
    ],
    treatDischarge: null,
  },

  {
    id: 'croup',
    title: 'Croup',
    fullTitle: 'Croup Medical Directive',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Current history of URTI',
      'AND',
      'Barking cough or recent history of a barking cough'
    ],
    conditions: {
      'EPINEPHrine': { age: '≥ 6 months to < 8 years', loa: 'N/A', hr: '< 200 bpm', rr: 'N/A', sbp: 'N/A', other: 'Stridor at rest' },
      'dexamethasone': { age: '≥ 6 months to < 8 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'For mild, moderate and severe croup' },
    },
    contraindications: {
      'EPINEPHrine': ['Allergy or sensitivity to EPINEPHrine'],
      'dexamethasone': ['Allergy or sensitivity to steroids', 'Steroids received within the last 48 hours', 'Unable to tolerate oral medications'],
    },
    treatments: [
      {
        med: 'Consider EPINEPHrine',
        cols: ['', 'Weight <10 kg', 'Weight ≥10 kg'],
        rows: [
          ['Route', 'NEB', 'NEB'],
          ['Concentration', '1 mg/mL = 1:1,000', '1 mg/mL = 1:1,000'],
          ['Dose', '2.5 mg', '5 mg'],
          ['Max. single dose', '2.5 mg', '5 mg'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
      {
        med: 'Consider dexamethasone',
        cols: ['', 'Age ≥6 months to <8 years'],
        rows: [
          ['Route', 'PO'],
          ['Dose', '0.5 mg/kg'],
          ['Max. single dose', '8 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: null,
  },

  {
    id: 'airway-suctioning',
    title: 'Advanced Airway and Tracheostomy Suctioning & Reinsertion',
    fullTitle: 'Advanced Airway and Tracheostomy Suctioning & Reinsertion Medical Directive',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Patient with endotracheal tube, SGA (with gastric suction port) or tracheostomy tube',
      'AND',
      'Airway obstruction or increased secretions'
    ],
    conditions: {
      'Suctioning (ETT/Tracheostomy)': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'Suctioning through SGA Gastric Port (if available)': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Known or suspected gastric secretions or emesis following placement of SGA\nPersistent difficult ventilation despite other efforts to improve ventilation' },
      'Emergency tracheostomy reinsertion': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Patient with an existing tracheostomy where the inner and/or outer cannula(s) have been removed from the airway AND\nRespiratory distress AND\nInability to adequately ventilate AND\nParamedics are presented with a tracheostomy cannula for the identified patient' },
    },
    contraindications: {
      'Suctioning (ETT/Tracheostomy)': ['N/A'],
      'Emergency tracheostomy reinsertion': ['Inability to landmark or visualize'],
      'Suctioning through SGA Gastric Port (if available)': ['N/A'],
    },
    treatments: [
      {
        med: 'Consider Suctioning (ETT/Tracheostomy)',
        cols: ['', 'Age <1 year', 'Age ≥1 year to <12 years', 'Age ≥12 years'],
        rows: [
          ['Dose', 'Suction at 60-100 mmHg', 'Suction at 100-120 mmHg', 'Suction at 100-150 mmHg'],
          ['Max. single dose', '10 seconds', '10 seconds', '10 seconds'],
          ['Dosing interval', '1 minute', '1 minute', '1 minute'],
          ['Max. # of doses', 'N/A', 'N/A', 'N/A'],
        ]
      },
      {
        med: 'Consider Suctioning through SGA Gastric Port (if available)',
        cols: ['', 'Age <1 year', 'Age ≥1 year to <12 years', 'Age ≥12 years'],
        rows: [
          ['Dose', 'Suction at 60-100 mmHg', 'Suction at 100-120 mmHg', 'Suction at 100-150 mmHg'],
          ['Max. single dose', 'Until fluid disappears or after 15 seconds of no fluid return', '', ''],
          ['Dosing interval', 'N/A', 'N/A', 'N/A'],
          ['Max. # of doses', 'N/A', 'N/A', 'N/A'],
        ]
      },
      {
        med: 'Consider emergency tracheostomy reinsertion',
        cols: ['', ''],
        rows: [
          ['Maximum number of attempts', '2'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'ETT/Tracheostomy Suctioning: Pre-oxygenate with 100% oxygen.',
      'In an alert patient, whenever possible, have patient cough to clear airway prior to suctioning.',
      'Suctioning of SGA with gastric suction port: When gastric secretions are not evident, consider other causes of difficult ventilation (e.g., improper device size, incorrect depth, lack of posterior/inferior pressure, or airway obstruction) prior to attempting SGA suctioning.',
      'Once fluid clears or if no fluid appears after 15 seconds, turn off suction.',
      'Emergency tracheostomy reinsertion: A reinsertion attempt is defined as the insertion of the cannula into the tracheostomy.',
      'A new replacement inner or outer cannula is preferred over cleaning and reusing an existing one.',
      'Utilize a family member or caregiver who is available and knowledgeable to replace the tracheostomy cannula.',
    ],
    treatDischarge: null,
  },

  {
    id: 'cpap',
    title: 'Continuous Positive Airway Pressure (CPAP)',
    fullTitle: 'Continuous Positive Airway Pressure (CPAP) Medical Directive – AUXILIARY',
    category: 'airway',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized.',
    indications: [
      'Severe respiratory distress',
      'AND',
      'Signs and/or symptoms of acute pulmonary edema or COPD'
    ],
    conditions: {
      'CPAP': { age: '≥ 18 years', loa: 'N/A', hr: 'N/A', rr: 'Tachypnea', sbp: 'Normotension', other: 'SpO₂ <90% or accessory muscle use' },
    },
    contraindications: {
      'CPAP': [
        'Asthma exacerbation',
        'Suspected pneumothorax',
        'Unprotected or unstable airway',
        'Major trauma or burns to the head or torso',
        'Tracheostomy',
        'Inability to sit upright',
        'Unable to cooperate',
      ],
    },
    treatments: [
      {
        med: 'Consider CPAP',
        cols: ['', 'Setting'],
        rows: [
          ['Initial Setting', '5 cmH₂O or equivalent flow rate of device as per RBHP direction'],
          ['Titration increment', '2.5 cmH₂O or equivalent flow rate of device as per RBHP direction'],
          ['Titration interval', '5 min'],
          ['Max. setting', '15 cmH₂O or equivalent flow rate of device as per RBHP direction'],
        ]
      },
      {
        med: 'Consider increasing FiO₂ (if available)',
        cols: ['', 'Setting'],
        rows: [
          ['Initial FiO₂', '50-100%'],
          ['FiO₂ increment (if available on device)', 'SpO₂ <92% despite treatment and/or 10 cmH₂O pressure or equivalent flow rate of device as per RBHP direction'],
          ['Max. FiO₂', '100%'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: null,
  },

  // ════════════════════════════════════════════════════════
  //  CARDIAC / CIRCULATION  (PCP Core + Auxiliary)
  // ════════════════════════════════════════════════════════

  {
    id: 'medical-cardiac-arrest',
    title: 'Medical Cardiac Arrest',
    fullTitle: 'Medical Cardiac Arrest Medical Directive',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Non-traumatic cardiac arrest'
    ],
    conditions: {
      'Manual Defibrillation': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'VF OR pulseless VT' },
      'AED or SAED Defibrillation': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Defibrillation indicated' },
      'EPINEPHrine': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Anaphylaxis suspected as causative event' },
      'DSED or VCD': { age: '≥ 18 years', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Non-traumatic VF/pulseless VT of presumed cardiac origin\nThree consecutive standard shocks by Paramedics or Fire Services' },
      'Medical TOR': { age: '≥ 16 years', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Arrest not witnessed by paramedic\nAND No ROSC after 20 minutes of resuscitation\nAND No defibrillation delivered' },
    },
    contraindications: {
      'Manual Defibrillation': ['N/A'],
      'AED or SAED Defibrillation': ['N/A'],
      'EPINEPHrine': ['Allergy or sensitivity to EPINEPHrine'],
      'DSED or VCD': ['N/A'],
      'Medical TOR': ['Pregnancy presumed to be ≥ 20 weeks gestation', 'Suspected hypothermia', 'Airway obstruction', 'Non-opioid drug overdose/toxicology'],
    },
    treatments: [
      {
        med: 'Consider Manual defibrillation (if available and authorized)',
        cols: ['', 'Age ≥24 hours to <8 years', 'Age ≥8 years'],
        rows: [
          ['Dose', '1 defibrillation', '1 defibrillation'],
          ['Initial dose', '2 J/kg', 'As per RBHP / manufacturer'],
          ['Subsequent dose(s)', '4 J/kg', 'As per RBHP / manufacturer'],
          ['Dosing interval', '2 min', '2 min'],
          ['Max. # of doses', 'N/A', 'N/A'],
        ]
      },
      {
        med: 'Consider AED or SAED defibrillation (if not using manual defibrillation)',
        cols: ['', 'Age ≥24 hours to <8 years', 'Age ≥8 years'],
        rows: [
          ['Dose', '1 defibrillation with or without pediatric attenuator cable', '1 defibrillation'],
          ['Max. single dose', 'As per RBHP / manufacturer', 'As per RBHP / manufacturer'],
          ['Dosing interval', '2 min', '2 min'],
          ['Max. # of doses', 'N/A', 'N/A'],
        ]
      },
      {
        med: 'Consider DSED (if authorized) or VCD (if DSED is not available or authorized)',
        cols: ['', 'Age ≥18 years'],
        rows: [
          ['Dose', '1 DSED or VCD'],
          ['Max. single dose', 'As per RBHP / manufacturer'],
          ['Dosing interval', '2 min'],
          ['Max. # of doses', 'N/A'],
        ]
      },
      {
        med: 'Consider EPINEPHrine (only if anaphylaxis is suspected as causative event)',
        cols: ['', 'IM'],
        rows: [
          ['Concentration', '1 mg/mL = 1:1,000'],
          ['Dose', '0.01 mg/kg*'],
          ['Max. single dose', '0.5 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ],
        note: '*The EPINEPHrine dose may be rounded to the nearest 0.05 mg'
      },
    ],
    patchPoints: [
      'Patch to consider Medical TOR (if applicable).',
      'Patch early to consider TOR if there are extenuating circumstances or where the paramedic considers ongoing resuscitation to be futile.',
      'If the patch fails, and/or, no ROSC after 20 minutes of resuscitation, initiate transport.',
    ],
    clinicalConsiderations: [
      'Primary Clinical Consideration(s): In the following settings, consider very early transport after a minimum of one analysis (and defibrillation if indicated) once an egress plan is organized: 1. pregnancy presumed to be ≥ 20 weeks gestation (fundus at or above umbilicus, ensure manual displacement of uterus to left); 2. known reversible cause of the arrest unable to be addressed.',
      'For patients in refractory VF or pulseless VT, consider: 1. Double sequential external defibrillation (DSED) if authorized, OR 2. Vector change defibrillation (VCD) if DSED is unavailable or not authorized, AND 3. Transport following three (3) doses of DSED or VCD. Refractory VF or pulseless VT is defined for the purpose of this directive, as persistent VF or pulseless VT after 3 consecutive shocks.',
      'The BHP might not authorize TOR even though the patient meets TOR rule. Factors may include: location of the patient, EtCO₂, age, bystander witnessed, bystander CPR, transportation time, and unusual cause of cardiac arrest such as electrocution, hanging, and toxicology.',
      'DSED/VCD: The second defibrillator for Dual Sequential Defibrillation will be a paramedic service defibrillator or a fire service defibrillator (in order of preference and if agreed to by the fire service). If a second defibrillator is not available, Vector Change Defibrillation should be provided.',
    ],
    treatDischarge: null,
  },

  {
    id: 'trauma-cardiac-arrest',
    title: 'Trauma Cardiac Arrest',
    fullTitle: 'Trauma Cardiac Arrest Medical Directive',
    category: 'cardiac',
    flowchartPdf: 'assets/trauma-arrest-flowchart.pdf',
    flowchartThumb: 'assets/trauma-arrest-flowchart-thumb.png',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Cardiac arrest secondary to severe blunt or penetrating trauma'
    ],
    conditions: {
      'CPR': { age: 'N/A', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Performed in 2 minute intervals' },
      'Manual defibrillation': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'VF OR pulseless VT' },
      'AED or SAED defibrillation': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Defibrillation indicated' },
      'Trauma TOR': { age: '≥ 16 years', loa: 'Altered', hr: '0', rr: '0', sbp: 'N/A', other: 'No palpable pulses AND\nNo defibrillation delivered AND\nRhythm Asystole AND\nNo signs of life at any time since fully extricated OR\nSigns of life when fully extricated with the closest ED ≥30 min transport time away OR\nRhythm PEA with the closest ED ≥30 min transport time away' },
    },
    contraindications: {
      'CPR': ['Obviously dead as per BLS PCS', 'Meet conditions of the BLS PCS Do Not Resuscitate (DNR) Standard'],
      'AED or SAED Defibrillation': ['Non-shockable rhythm'],
      'Manual Defibrillation': ['Rhythms other than VF or pulseless VT'],
      'Trauma TOR': ['Age <16 years', 'Defibrillation delivered', 'Signs of life at any time since fully extricated', 'Rhythm PEA and closest ED <30 min transport time away', 'Patients with penetrating trauma to the torso or head/neck and Lead Trauma Hospital <30 min transport time away'],
    },
    treatments: [
      {
        med: 'Consider CPR as per current Heart and Stroke Foundation of Canada Guidelines',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider manual defibrillation (if available and authorized)',
        cols: ['', 'Age ≥24 hours to <8 years', 'Age ≥8 years'],
        rows: [
          ['Dose', '1 defibrillation', '1 defibrillation'],
          ['Initial dose', '2 J/kg', 'As per RBHP / manufacturer'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
      {
        med: 'Consider AED or SAED defibrillation (if not using manual defibrillation)',
        cols: ['', 'Age ≥24 hours to <8 years', 'Age ≥8 years'],
        rows: [
          ['Dose', '1 defibrillation with or without Pediatric Attenuator Cable', '1 defibrillation'],
          ['Max. single dose', 'As per RBHP / manufacturer', 'As per RBHP / manufacturer'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
    ],
    patchPoints: [
      'Patch to BHP for authorization to apply the Trauma TOR if applicable. If the BHP patch fails, or the Trauma TOR does not apply, transport to the closest appropriate receiving facility following the 1st analysis/defibrillation.',
    ],
    clinicalConsiderations: [
      'If no obvious external signs of significant blunt trauma, consider medical cardiac arrest and treat according to the appropriate medical cardiac arrest directive.',
      'Signs of life: specifically any spontaneous movement, respiratory efforts, organized electrical activity on ECG, and reactive pupils.',
      'An intravenous fluid bolus may be considered, where it does not delay transport and should not be prioritized over management of other reversible pathology.',
    ],
    treatDischarge: null,
  },

  {
    id: 'newborn-resuscitation',
    title: 'Newborn Resuscitation',
    fullTitle: 'Newborn Resuscitation Medical Directive',
    category: 'cardiac',
    flowchartPdf: 'assets/newborn-flowchart.pdf',
    flowchartThumb: 'assets/newborn-flowchart-thumb.png',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Newborn patient'
    ],
    conditions: {
      'Positive Pressure Ventilation (PPV)': { age: '< 24 hours', loa: 'N/A', hr: '< 100 bpm', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'CPR': { age: '< 24 hours', loa: 'N/A', hr: '< 60 bpm', rr: 'N/A', sbp: 'N/A', other: 'After 30 seconds of PPV using room air' },
    },
    contraindications: {
      'Positive Pressure Ventilation (PPV)': ['Obviously dead as per BLS PCS', 'Presumed gestational age less than 20 weeks'],
      'CPR': ['Obviously dead as per BLS PCS', 'Presumed gestational age less than 20 weeks'],
    },
    treatments: [
      {
        med: 'Consider PPV as per the treatment flowchart',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider CPR as per current Heart and Stroke Foundation of Canada Guidelines',
        cols: ['', ''],
        rows: []
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'If newborn resuscitation is required, initiate cardiac monitoring and right-hand pulse oximetry monitoring.',
      'Infants born between 20-25 weeks gestation may be stillborn or die quickly. Initiate resuscitation and transport as soon as feasible.',
      'If gestational age cannot be confirmed, initiate resuscitation and rapid transport.',
      'If newborn is less than 20 weeks gestation, resuscitation is futile. Provide the newborn with warmth and consider patching to BHP for further direction.',
    ],
    treatDischarge: null,
  },

  {
    id: 'rosc',
    title: 'Return of Spontaneous Circulation (ROSC)',
    fullTitle: 'Return of Spontaneous Circulation (ROSC) Medical Directive',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Patient with return of spontaneous circulation (ROSC) after the resuscitation was initiated'
    ],
    conditions: {
      '0.9% NaCl Fluid Bolus': { age: '≥ 2 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'Hypotension', other: 'Chest auscultation is clear' },
    },
    contraindications: {
      '0.9% NaCl Fluid Bolus': ['Fluid overload'],
    },
    treatments: [
      {
        med: 'Consider optimizing ventilation and oxygenation',
        cols: ['', ''],
        rows: [
          ['Titrate oxygenation', '94-98%'],
          ['Avoid hyperventilation', 'Target ETCO₂ to 30-40 mmHg with continuous waveform capnography (if available)'],
        ]
      },
      {
        med: 'Consider 0.9% NaCl fluid bolus (if available and authorized)',
        cols: ['', 'Age ≥2 years to <12 years', 'Age ≥12 years'],
        rows: [
          ['Route', 'IV', 'IV'],
          ['Infusion', '10 ml/kg', '10 ml/kg'],
          ['Infusion interval', 'Immediate', 'Immediate'],
          ['Reassess every', '100 ml', '250 ml'],
          ['Max. volume', '1,000 ml', '1,000 ml'],
        ]
      },
      {
        med: 'Consider 12-lead ECG acquisition and interpretation',
        cols: ['', ''],
        rows: []
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Consider initiating transport in parallel with the above treatment.',
      'IV fluid bolus applies only to PCPs authorized for PCP Autonomous IV.',
    ],
    treatDischarge: null,
  },

  {
    id: 'cardiac-ischemia',
    title: 'Cardiac Ischemia',
    fullTitle: 'Cardiac Ischemia Medical Directive',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Suspected cardiac ischemia'
    ],
    conditions: {
      'ASA': { age: '≥ 18 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Able to chew and swallow' },
      'nitroglycerin': { age: '≥ 18 years', loa: 'Unaltered', hr: '60-159 bpm', rr: 'N/A', sbp: 'Normotension', other: 'Prior history of nitroglycerin use OR IV access obtained' },
    },
    contraindications: {
      'ASA': ['Allergy or sensitivity to NSAIDs', 'If asthmatic, no prior use of ASA', 'Current active bleeding', 'CVA or TBI in the previous 24 hours'],
      'nitroglycerin': ['Allergy or sensitivity to nitrates', 'Phosphodiesterase inhibitor use within the previous 48 hours', 'SBP drops by one-third or more of its initial value after nitroglycerin is administered', '12-lead ECG compatible with Right Ventricular MI'],
    },
    treatments: [
      {
        med: 'Consider ASA',
        cols: ['', 'PO'],
        rows: [
          ['Dose', '160-162 mg'],
          ['Max. single dose', '162 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
      {
        med: 'Consider 12-lead ECG acquisition and interpretation for STEMI',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider nitroglycerin',
        cols: ['', 'STEMI: No (SBP ≥100 mmHg)', 'STEMI: Yes (SBP ≥100 mmHg)'],
        rows: [
          ['Route', 'SL', 'SL'],
          ['Dose', '0.3 mg OR 0.4 mg', '0.3 mg OR 0.4 mg'],
          ['Max. single dose', '0.4 mg', '0.4 mg'],
          ['Dosing interval', '5 min', '5 min'],
          ['Max. # of doses', '6', '3'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Suspect a Right Ventricular MI in all inferior STEMIs and perform at minimum V4R to confirm (ST-elevation ≥ 1mm in V4R).',
      'Do not administer nitroglycerin to a patient with Right Ventricular STEMI.',
      'IV condition applies only to PCPs authorized for PCP Autonomous IV.',
      'Apply defibrillation pads when a STEMI is identified.',
      'The goal for time to 12-lead ECG from first medical contact is < 10 minutes where possible.',
    ],
    treatDischarge: null,
  },

  {
    id: 'pulmonary-edema',
    title: 'Acute Cardiogenic Pulmonary Edema',
    fullTitle: 'Acute Cardiogenic Pulmonary Edema Medical Directive',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Moderate to severe respiratory distress',
      'AND',
      'Suspected acute cardiogenic pulmonary edema'
    ],
    conditions: {
      'nitroglycerin': { age: '≥ 18 years', loa: 'N/A', hr: '60-159 bpm', rr: 'N/A', sbp: 'Normotension', other: 'N/A' },
    },
    contraindications: {
      'nitroglycerin': [
        'Allergy or sensitivity to nitrates',
        'Phosphodiesterase inhibitor use within the previous 48 hours',
        'SBP drops by one-third or more of its initial value after nitroglycerin is administered',
      ],
    },
    treatments: [
      {
        med: 'Consider nitroglycerin',
        cols: ['', 'SBP ≥100 mmHg to <140 mmHg\nIV or Hx*: Yes', 'SBP ≥140 mmHg\nIV or Hx*: No', 'SBP ≥140 mmHg\nIV or Hx*: Yes'],
        rows: [
          ['Route', 'SL', 'SL', 'SL'],
          ['Dose', '0.3 mg or 0.4 mg', '0.3 mg or 0.4 mg', '0.6 mg or 0.8 mg'],
          ['Max. single dose', '0.4 mg', '0.4 mg', '0.8 mg'],
          ['Dosing interval', '5 min', '5 min', '5 min'],
          ['Max. # of doses', '6', '6', '6'],
        ],
        note: '*Hx refers to a patient with a prior history of nitroglycerin use'
      },
      {
        med: 'Consider 12-lead ECG acquisition and interpretation',
        cols: ['', ''],
        rows: []
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'IV condition applies only to PCPs authorized for PCP Autonomous IV.',
    ],
    treatDischarge: null,
  },

  {
    id: 'cardiogenic-shock',
    title: 'Cardiogenic Shock',
    fullTitle: 'Cardiogenic Shock Medical Directive – AUXILIARY',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized for PCP Autonomous IV.',
    indications: [
      'STEMI-positive 12-lead ECG',
      'AND',
      'Cardiogenic shock'
    ],
    conditions: {
      '0.9% NaCl Fluid Bolus': { age: '≥ 18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'Hypotension', other: 'Chest auscultation is clear' },
    },
    contraindications: {
      '0.9% NaCl Fluid Bolus': ['Fluid overload', 'SBP ≥ 90 mmHg'],
    },
    treatments: [
      {
        med: 'Consider 0.9% NaCl fluid bolus',
        cols: ['', 'Age ≥18 years'],
        rows: [
          ['Route', 'IV'],
          ['Infusion', '10 ml/kg'],
          ['Infusion interval', 'N/A'],
          ['Reassess every', '250 ml'],
          ['Max. volume', '1,000 ml'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: null,
  },

  {
    id: 'iv-fluid',
    title: 'Intravenous and Fluid Therapy',
    fullTitle: 'Intravenous and Fluid Therapy Medical Directive – AUXILIARY',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized for PCP Autonomous IV.',
    indications: [
      'Actual or potential need for intravenous medication OR fluid therapy'
    ],
    conditions: {
      'IV Cannulation': { age: '≥ 2 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      '0.9% NaCl Fluid Bolus': { age: '≥ 2 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'Hypotension', other: 'N/A' },
    },
    contraindications: {
      'IV Cannulation': ['Suspected fracture proximal to the access site'],
      '0.9% NaCl Fluid Bolus': ['Fluid overload'],
    },
    treatments: [
      {
        med: 'Consider IV cannulation',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider 0.9% NaCl maintenance infusion',
        cols: ['', 'Age ≥2 years to <12 years', 'Age ≥12 years'],
        rows: [
          ['Route', 'IV', 'IV'],
          ['Infusion', '15 ml/hr', '30-60 ml/hr'],
          ['Infusion interval', 'N/A', 'N/A'],
          ['Reassess every', 'N/A', 'N/A'],
          ['Max. volume', 'N/A', 'N/A'],
        ]
      },
      {
        med: 'Consider 0.9% NaCl fluid bolus',
        cols: ['', 'Age ≥2 years to <12 years', 'Age ≥12 years'],
        rows: [
          ['Route', 'IV', 'IV'],
          ['Infusion', '20 ml/kg', '20 ml/kg'],
          ['Infusion interval', 'N/A', 'N/A'],
          ['Reassess every', '100 ml', '250 ml'],
          ['Max. volume*', '2,000 ml', '2,000 ml'],
        ],
        note: '*The maximum volume of NaCl is lower for patients in cardiogenic shock and return of spontaneous circulation.'
      },
    ],
    patchPoints: [
      'Patch to BHP for authorization to administer 0.9% NaCl fluid bolus to hypotensive patients ≥2 years to <12 years with suspected Diabetic Ketoacidosis (DKA)',
    ],
    clinicalConsiderations: [
      '"PCP Assist IV" authorizes a PCP to cannulate a peripheral IV at the request and under the direct supervision of an ACP. The patient must require a peripheral IV in accordance with the indications listed in this Medical Directive. PCPs authorized for PCP Assist IV are not authorized to administer IV fluid or medication therapy.',
      'Microdrips and/or volume control administration sets should be considered when IV access is indicated for patients <12 years of age.',
      'An intravenous fluid bolus may be considered for a patient who does not meet trauma TOR criteria, where it does not delay transport and should not be prioritized over management of other reversible causes.',
    ],
    treatDischarge: null,
  },

  {
    id: 'traumatic-hemorrhage',
    title: 'Traumatic Hemorrhage',
    fullTitle: 'Traumatic Hemorrhage Medical Directive – AUXILIARY',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Suspected hemorrhage due to trauma',
      'AND',
      'Hemodynamic instability'
    ],
    conditions: {
      'Tranexamic Acid (TXA)': { age: '≥ 16 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'HR ≥ 110 BPM or hypotension' },
    },
    contraindications: {
      'Tranexamic Acid (TXA)': [
        'Allergy or sensitivity to TXA',
        'Greater than 3 hours from the time of injury to drug administration OR unknown time of injury',
        'Isolated head injury',
      ],
    },
    treatments: [
      {
        med: 'Consider Tranexamic Acid (TXA)',
        cols: ['', 'IV', 'IM'],
        rows: [
          ['Initial dose', '1000 mg', '1000 mg'],
          ['Max. single dose', '1000 mg', '1000 mg'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'TXA should not delay transport and should not be prioritized over the management of other reversible causes.',
      'IV administration of TXA applies only to PCPs authorized for PCP Autonomous IV.',
      'TXA solution for injection should be administered intravenously by slow injection over a period of at least 5 minutes, as rapid administration can cause hypotension.',
    ],
    treatDischarge: null,
  },

  {
    id: 'tachydysrhythmia',
    title: 'Tachydysrhythmia',
    fullTitle: 'Tachydysrhythmia Medical Directive – AUXILIARY',
    category: 'cardiac',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Symptomatic Tachydysrhythmia'
    ],
    conditions: {
      'Valsalva Maneuver': { age: '≥ 18 years', loa: 'Unaltered', hr: '≥ 150 bpm', rr: 'N/A', sbp: 'Normotension', other: 'Narrow complex and regular rhythm' },
    },
    contraindications: {
      'Valsalva Maneuver': ['Sinus tachycardia or atrial fibrillation or atrial flutter'],
    },
    treatments: [
      {
        med: 'Consider rhythm determination (confirm regularity)',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider 12-lead ECG acquisition and interpretation to confirm QRS width (if this won\'t delay therapy)',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider valsalva maneuver',
        cols: ['', ''],
        rows: [
          ['Max. attempts', '2 attempts lasting 10 to 20 seconds duration each'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: {
      title: 'Treat and Discharge (if authorized)',
      criteria: [
        'The patient is ≥ 18 AND < 65 years old',
        'Patient must have a prior history of SVT',
        'The patient presented with narrow complex and regular rhythm Supraventricular Tachycardia (SVT)',
        'The patient must have only had a single SVT episode in the past 24 hours',
        'The patient has returned to normal sinus rhythm (NSR) either spontaneously or with a valsalva maneuver and is now asymptomatic',
        'The patient has returned to their normal level of consciousness',
        'A complete set of vital signs are within expected normal ranges with a HR <100bpm and the patient remains in NSR for at least 15 minutes post conversion',
        'The patient is not pregnant',
        'The SVT must not be related to alcohol or substance abuse or withdrawal',
        'The patient has no fever or preceding illness',
        'A responsible adult agrees to remain with the patient for the next 4 hours',
        'All of the patient or substitute decision makers questions were answered and a care plan was developed',
        'The patient or substitute decision maker has been advised to follow up with their primary health care team or provider',
        'Clear instructions to call 911 were provided should symptoms redevelop',
        'Patient or substitute decision maker has the ability to access 911 should symptoms redevelop',
        'Patient or substitute decision maker consents to the discharge',
      ],
      contraindications: [],
      clinicalConsiderationsTD: 'Patch to BHP for consultation if you are unclear if the patient meets all of the discharge criteria.',
    },
  },

  // ════════════════════════════════════════════════════════
  //  LEVEL OF CONSCIOUSNESS / PAIN / NAUSEA
  // ════════════════════════════════════════════════════════

  {
    id: 'hypoglycemia',
    title: 'Hypoglycemia',
    fullTitle: 'Hypoglycemia Medical Directive',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Suspected hypoglycemia'
    ],
    conditions: {
      'dextrose': { age: 'Any age (< 2 yr: D10W only)', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Hypoglycemia' },
      'glucagon': { age: 'N/A (≥4 years for IN powder)', loa: 'Altered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Hypoglycemia' },
    },
    contraindications: {
      'dextrose': ['Allergy or sensitivity to dextrose'],
      'glucagon': ['Allergy or sensitivity to glucagon', 'Pheochromocytoma'],
    },
    treatments: [
      {
        med: 'Consider glucometry',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider dextrose (if available and authorized)',
        cols: ['', '< 2 years\n10% dextrose only', '≥ 2 years\n10% dextrose', '≥ 2 years\n50% dextrose'],
        rows: [
          ['Route', 'IV', 'IV', 'IV'],
          ['Dose', '0.2 g/kg (2 ml/kg)', '0.2 g/kg (2 ml/kg)', '0.5 g/kg (1 ml/kg)'],
          ['Max. single dose', '5 g (50 ml)', '25 g (250 ml)', '25 g (50 ml)'],
          ['Dosing interval', '10 min', '10 min', '10 min'],
          ['Max. # of doses', '2', '2', '2'],
        ],
        note: 'Titrate dextrose to a level of awareness where the patient can safely consume complex carbohydrate.'
      },
      {
        med: 'Consider glucagon (if not using dextrose)',
        cols: ['', 'Weight <25 kg (IM)', 'Weight ≥25 kg (IM)', 'IN powder (if authorized, ≥4 years)'],
        rows: [
          ['Route', 'IM', 'IM', 'IN'],
          ['Dose', '0.5 mg', '1 mg', '3 mg'],
          ['Max. single dose', '0.5 mg', '1 mg', '3 mg'],
          ['Dosing interval', '20 min', '20 min', '20 min'],
          ['Max. # of doses', '2', '2', '2'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'If the patient responds to dextrose or glucagon, he/she may receive oral glucose or other simple carbohydrates.',
      'If only mild signs or symptoms are exhibited, the patient may receive oral glucose or other simple carbohydrates instead of dextrose or glucagon.',
      'If a patient initiates an informed refusal of transport, a final set of vital signs including blood glucometry must be attempted and documented.',
      'IV administration of dextrose applies only to PCPs authorized for PCP Autonomous IV.',
      'Intranasal glucagon is a powder that is supplied in a commercially available single-dose intranasal device.',
    ],
    treatDischarge: {
      title: 'Considerations for Treat and Discharge (if authorized)',
      criteria: [
        'The patient is ≥18 AND <65 years old',
        'The patient has a diagnosis of diabetes',
        'The hypoglycemia can be explained by insulin administration with inadequate oral intake',
        'The hypoglycemia promptly responded to a single administration of dextrose or glucagon as per the Medical Directive and/or consumed oral glucose or other complex carbohydrates',
        'This was a single isolated episode of symptomatic hypoglycemia within the past 24 hours',
        'The blood glucose is ≥4.0mmol/L after treatment',
        'The patient has a return to their normal level of consciousness and is asymptomatic',
        'A complete set of vital signs are within expected normal ranges',
        'Not an intentional overdose',
        'The hypoglycemia must not be related to alcohol or substance abuse or withdrawal',
        'No seizure or reported history of seizure prior to paramedic treatment',
        'Not on an oral hypoglycemic medication',
        'Hypoglycemia is not considered to be related to an acute medical illness',
        'The patient is not pregnant',
        'The patient has access to appropriate carbohydrates',
        'A responsible adult agrees to remain with the patient for the next 4 hours',
        'All of the patient or substitute decision makers questions were answered and a care plan was developed',
        'The patient or substitute decision maker has been advised to follow up with their primary health care team or provider',
        'Clear instructions to call 911 were provided should symptoms redevelop',
        'Patient or substitute decision maker has the ability to access 911 should symptoms redevelop',
        'Patient or substitute decision maker consents to the discharge',
      ],
      contraindications: [],
      clinicalConsiderationsTD: 'Patch to BHP for consultation if you are unclear if the patient meets all of the discharge criteria.',
    },
  },

  {
    id: 'seizure',
    title: 'Seizure',
    fullTitle: 'Seizure Medical Directive – AUXILIARY',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Auxiliary Medical Directive if authorized. Note: This PCP auxiliary directive provides Treat and Discharge criteria only. Midazolam administration is an ACP-level intervention.',
    indications: [],
    conditions: {},
    contraindications: {},
    treatments: [],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: {
      title: 'Considerations for Treat and Discharge (if authorized)',
      criteria: [
        'The patient is ≥18 AND <65 years old',
        'Patient must have a history of epilepsy',
        'The patient is taking their anticonvulsant medication as prescribed',
        'The patient must have only had a single seizure episode in the past 24 hours',
        'The seizure pattern and duration must be similar to past seizures',
        'The patient has returned to their normal level of consciousness',
        'A complete set of vital signs including temperature are within expected normal ranges',
        'The seizure must not be related to hypoglycemia, alcohol or substance abuse or withdrawal',
        'The patient must not have received midazolam by paramedics',
        'The patient did not injure themselves during seizure activity',
        'The patient must not have a fever, preceding illness or recently started a new medication',
        'The patient is not pregnant',
        'A responsible adult agrees to remain with the patient for the next 4 hours',
        'All of the patient or substitute decision makers questions were answered and a care plan was developed',
        'The patient or substitute decision maker has been advised to follow up with their primary health care team or provider',
        'Clear instructions to call 911 were provided should symptoms redevelop',
        'Patient or substitute decision maker has the ability to access 911 should symptoms redevelop',
        'Patient or substitute decision maker consents to the discharge',
      ],
      contraindications: [],
      clinicalConsiderationsTD: 'Patch to BHP for consultation if you are unclear if the patient meets all of the discharge criteria.',
    },
  },

  {
    id: 'opioid-toxicity',
    title: 'Opioid Toxicity and Withdrawal',
    fullTitle: 'Opioid Toxicity and Withdrawal Medical Directive',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Suspected opioid toxicity'
    ],
    conditions: {
      'naloxone': { age: '≥ 24 hours', loa: 'Altered', hr: 'N/A', rr: '< 10 breaths/min', sbp: 'N/A', other: 'Inability to adequately ventilate OR persistent need to assist ventilations' },
      'buprenorphine/naloxone': { age: '≥ 16', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Received naloxone for current opioid toxicity episode\nAND Patient is exhibiting acute withdrawal with a COWS score ≥ 8' },
    },
    contraindications: {
      'naloxone': ['Allergy or sensitivity to naloxone'],
      'buprenorphine/naloxone': ['Allergy or sensitivity to buprenorphine', 'Taken methadone in the past 72 hours'],
    },
    treatments: [
      {
        med: 'Consider naloxone',
        cols: ['', 'IV', 'IM', 'IN', 'SC'],
        rows: [
          ['Dose', 'Up to 0.4 mg**', '0.4 mg', '2-4 mg', '0.8 mg'],
          ['Max. single dose', '0.4 mg', '0.4 mg', '2-4 mg', '0.8 mg'],
          ['Dosing interval', '5 min', '5 min', '5 min', '5 min'],
          ['Max. # of doses', '3', '3', '3', '3'],
        ],
        note: '**For the IV route, titrate naloxone only to restore the patient\'s respiratory status.'
      },
      {
        med: 'Consider buprenorphine/naloxone (if available and authorized)',
        cols: ['', 'BUC/SL'],
        rows: [
          ['Initial dose', '16 mg'],
          ['Subsequent dose(s)', '8 mg'],
          ['Dosing interval', '10 minutes'],
          ['Max. cumulative dose', '24 mg'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'IV administration of naloxone applies only to PCPs authorized for PCP Autonomous IV.',
      'Upfront aggressive management of the airway is paramount and the initial priority.',
      'If no response to initial treatment; consider patching for further doses.',
      'If the patient does not respond to airway management and the administration of naloxone, glucometry should be considered.',
      'Combative behaviour should be anticipated following naloxone administration and paramedics should protect themselves accordingly, thus the importance of gradual titrating (if given IV) to desired clinical effect: respiratory rate ≥10, adequate airway and ventilation, not full alertness.',
    ],
    treatDischarge: null,
  },

  {
    id: 'adrenal-crisis',
    title: 'Suspected Adrenal Crisis',
    fullTitle: 'Suspected Adrenal Crisis Medical Directive',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'A patient with primary adrenal failure who is experiencing clinical signs of an adrenal crisis'
    ],
    conditions: {
      'hydrocortisone': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Paramedics are presented with a vial of hydrocortisone for the identified patient AND\nAge-related hypoglycemia OR\nGI symptoms (vomiting, diarrhea, abdominal pain) OR\nSyncope OR\nTemperature ≥38°C or suspected/history of fever OR\nAltered level of awareness OR\nAge-related tachycardia OR\nAge-related hypotension' },
    },
    contraindications: {
      'hydrocortisone': ['Allergy or sensitivity to hydrocortisone'],
    },
    treatments: [
      {
        med: 'Consider hydrocortisone',
        cols: ['', 'IM/IV'],
        rows: [
          ['Dose', '2 mg/kg*'],
          ['Max. single dose', '100 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ],
        note: '*Dose should be rounded to the nearest 10 mg'
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'IV administration of hydrocortisone applies only to PCPs authorized for PCP Autonomous IV.',
    ],
    treatDischarge: null,
  },

  {
    id: 'analgesia',
    title: 'Analgesia',
    fullTitle: 'Analgesia Medical Directive',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Pain'
    ],
    conditions: {
      'acetaminophen': { age: '≥ 12 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'ibuprofen': { age: '≥ 12 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'ketorolac': { age: '≥ 12 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'acetaminophen': ['Acetaminophen use within previous 4 hours', 'Allergy or sensitivity to acetaminophen', 'Hx of liver disease', 'Active vomiting', 'Unable to tolerate oral medication', 'Suspected ischemic chest pain'],
      'ibuprofen': ['NSAID use within previous 6 hours', 'Allergy or sensitivity to ASA or NSAIDs', 'Patient on anticoagulation therapy', 'Current active bleeding', 'Hx of peptic ulcer disease or GI bleed', 'Pregnant', 'If asthmatic, no prior use of ASA or other NSAIDs', 'CVA or TBI in the previous 24 hours', 'Known renal impairment', 'Active vomiting', 'Unable to tolerate oral medication', 'Suspected ischemic chest pain'],
      'ketorolac': ['NSAID use within previous 6 hours', 'Allergy or sensitivity to ASA or NSAIDs', 'Patient on anticoagulation therapy', 'Current active bleeding', 'Hx of peptic ulcer disease or GI bleed', 'Pregnant', 'If asthmatic, no prior use of ASA or other NSAIDs', 'CVA or TBI in the previous 24 hours', 'Known renal impairment', 'Suspected ischemic chest pain'],
    },
    treatments: [
      {
        med: 'Consider acetaminophen',
        cols: ['', 'Age ≥12 years to <18 years', 'Age ≥18 years'],
        rows: [
          ['Route', 'PO', 'PO'],
          ['Dose', '500-650 mg', '960-1,000 mg'],
          ['Max. single dose', '650 mg', '1,000 mg'],
          ['Dosing interval', 'N/A', 'N/A'],
          ['Max. # of doses', '1', '1'],
        ]
      },
      {
        med: 'Consider ibuprofen',
        cols: ['', 'Age ≥12 years'],
        rows: [
          ['Route', 'PO'],
          ['Dose', '400 mg'],
          ['Max. single dose', '400 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
      {
        med: 'Consider ketorolac',
        cols: ['', 'Age ≥12 years'],
        rows: [
          ['Route', 'IM/IV'],
          ['Dose', '10-15 mg'],
          ['Max. single dose', '15 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Whenever possible, consider co-administration of acetaminophen and ibuprofen.',
      'Suspected renal colic patients should routinely be considered for NSAIDs, either ibuprofen or ketorolac.',
      'IV administration of ketorolac applies only to PCPs authorized for PCP Autonomous IV.',
    ],
    treatDischarge: null,
  },

  {
    id: 'nausea-vomiting',
    title: 'Nausea / Vomiting',
    fullTitle: 'Nausea/Vomiting Medical Directive',
    category: 'loc',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Nausea OR vomiting'
    ],
    conditions: {
      'ondansetron': { age: 'N/A', weight: '≥ 25 kg', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'dimenhyDRINATE': { age: 'N/A', weight: '≥ 25 kg', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'ondansetron': ['Allergy to ondansetron', 'Prolonged QT syndrome (known to patient)', 'Apomorphine use'],
      'dimenhyDRINATE': ['Allergy or sensitivity to dimenhyDRINATE or other antihistamines', 'Overdose on antihistamines or anticholinergics or tricyclic antidepressants', 'Co-administration of diphenhydrAMINE'],
    },
    treatments: [
      {
        med: 'Consider ondansetron',
        cols: ['', 'Weight ≥25 kg'],
        rows: [
          ['Route', 'PO / IV* / IM*'],
          ['Dose', '4 mg'],
          ['Max. single dose', '4 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ],
        note: '*IV/IM (if formulation is available and authorized)'
      },
      {
        med: 'Consider dimenhyDRINATE',
        cols: ['', 'Weight ≥25 kg to <50 kg', 'Weight ≥50 kg'],
        rows: [
          ['Route', 'IV/IM', 'IV/IM'],
          ['Dose', '25 mg', '**25 or 50 mg'],
          ['Max. single dose', '25 mg', '50 mg'],
          ['Dosing interval', 'N/A', '30 min'],
          ['Max. # of doses', '1', '2'],
          ['Max. cumulative dose', 'N/A', '50 mg'],
        ],
        note: '**If ondansetron is unavailable, assess the risks and benefits to pts. ≥ 65 years old for dimenhyDRINATE administration. This may include an initial reduced dose of 25 mg'
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'IV administration of dimenhyDRINATE applies only to PCPs authorized for PCP Autonomous IV.',
      'Prior to IV administration, dilute dimenhyDRINATE (concentration of 50 mg/1 ml) 1:9 with Normal Saline or D5W. If administered IM do not dilute.',
      'If a patient has received an antiemetic and has no relief of their nausea & vomiting symptoms after 30 minutes, the alternative antiemetic may be considered.',
    ],
    treatDischarge: null,
  },

  // ════════════════════════════════════════════════════════
  //  PROCEDURAL
  // ════════════════════════════════════════════════════════

  {
    id: 'home-dialysis',
    title: 'Home Dialysis Emergency Disconnect',
    fullTitle: 'Home Dialysis Emergency Disconnect Medical Directive',
    category: 'procedural',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Patient receiving home dialysis (hemo or peritoneal) and connected to dialysis machine and requires transport to the closest appropriate receiving facility',
      'AND',
      'Patient is unable to disconnect',
      'AND',
      'There is no family member or caregiver who is available and knowledgeable in dialysis disconnect'
    ],
    conditions: {
      'Home Dialysis Emergency Disconnect': { age: 'N/A', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'Home Dialysis Emergency Disconnect': ['N/A'],
    },
    treatments: [
      {
        med: 'Consider Home Dialysis Emergency Disconnect',
        cols: ['', ''],
        rows: []
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Generally, emergency disconnect kit with materials and instructions can be found hanging from dialysis machine or nearby on the wall.',
      'Ensure both the patient side and machine side of the connection are clamped before disconnecting and attaching end caps.',
    ],
    treatDischarge: null,
  },

  {
    id: 'emergency-childbirth',
    title: 'Emergency Childbirth',
    fullTitle: 'Emergency Childbirth Medical Directive',
    category: 'procedural',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Pregnant patient experiencing labour',
      'OR',
      'Post-partum patient immediately following delivery and/or placenta'
    ],
    conditions: {
      'Delivery': { age: 'Childbearing years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Second stage labour AND/OR Imminent birth AND/OR Shoulder Dystocia AND/OR Breech Delivery AND/OR Prolapsed Cord' },
      'Umbilical cord management': { age: 'Childbearing years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Cord complications OR if neonatal or maternal resuscitation is required OR Due to transport considerations' },
      'External Uterine Massage': { age: 'Childbearing years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Post-placental delivery' },
      'oxytocin': { age: 'Childbearing years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: '< 160 mmHg', other: 'Postpartum delivery AND/OR Placental delivery' },
    },
    contraindications: {
      'Delivery': ['N/A'],
      'Umbilical cord management': ['N/A'],
      'External Uterine Massage': ['Placenta not delivered'],
      'oxytocin': ['Allergy or sensitivity to oxytocin', 'Undelivered fetus', 'Suspected or known pre-eclampsia with current pregnancy', 'Eclampsia (seizures) with current pregnancy', '≥4 hours post placenta delivery'],
    },
    treatments: [
      {
        med: 'Consider delivery – Position the patient and deliver neonate',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider shoulder dystocia delivery',
        cols: ['', ''],
        rows: [
          ['Procedure', 'Perform ALARM twice on scene. If successful; deliver neonate. If unsuccessful; transport to closest appropriate facility.'],
        ]
      },
      {
        med: 'Consider breech delivery',
        cols: ['', ''],
        rows: [
          ['Procedure', 'HANDS OFF the breech. Allow neonate to deliver to umbilicus; consider carefully releasing the legs & arms as they are delivered; otherwise hands off.\nOnce hairline is visible AND/OR 3 mins has passed since umbilicus was visualized attempt the Mauriceau Smellie-Veit maneuver.\nIf successful; deliver neonate. If unsuccessful; transport to closest appropriate facility.'],
        ]
      },
      {
        med: 'Consider prolapsed cord delivery',
        cols: ['', ''],
        rows: [
          ['Procedure', 'If a cord prolapse is present, the fetal part should be elevated to relieve pressure on the cord. Assist the patient into a knee-chest position or exaggerated Sims position, and insert gloved fingers/hand into the vagina to apply manual digital pressure to the presenting part which is maintained until transfer of care in hospital.'],
        ]
      },
      {
        med: 'Consider umbilical cord management',
        cols: ['', ''],
        rows: [
          ['Nuchal cord', 'If loose, slip cord over the neonate\'s head. Only if tight and cannot be slipped over the neonate\'s head, clamp and cut the cord, encourage rapid delivery.'],
          ['Post-delivery', 'Clamp and cut immediately if neonatal or maternal resuscitation is required. Otherwise, after pulsations have ceased (approximately 2-3 minutes), clamp the cord in two places and cut the cord.'],
        ]
      },
      {
        med: 'Consider external uterine massage – Post placental delivery',
        cols: ['', ''],
        rows: []
      },
      {
        med: 'Consider oxytocin',
        cols: ['', 'IM'],
        rows: [
          ['Dose', '10 units'],
          ['Max. single dose', '10 units'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'If the patient presents with limb-presentation, do not attempt to push the limb back into the vagina; discourage the patient from pushing, cover the limb using a dry sheet to maintain warmth, and initiate transport as per the Load and Go Patient Standard of the BLS PCS.',
      'If labour is failing to progress, discourage the patient from pushing or bearing down during contractions.',
      'If delivery has not occurred at scene within approximately ten minutes of initial assessment, consider transport in conjunction with the following: a. Patient assessment findings: i. Lack of progression of labour; ii. Multiple births expected; iii. Neonate presents face-up; iv. Pre-eclampsia; v. Presence of vaginal hemorrhage; vi. Premature labour; vii. Primip; b. Distance to the closest appropriate receiving facility.',
      'When the placenta is delivered, inspect it for wholeness, place in a plastic bag from the OBS kit, label it with the maternal patient\'s name and time of delivery, and transport it with the maternal or neonatal patient. Delivery of the placenta should not delay transport considerations/initiation.',
    ],
    treatDischarge: null,
  },

  {
    id: 'patellar-dislocation',
    title: 'Lateral Patellar Dislocation',
    fullTitle: 'Lateral Patellar Dislocation Medical Directive – AUXILIARY',
    category: 'procedural',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'Patient with suspected lateral patellar dislocation'
    ],
    conditions: {
      'Patellar Reduction': { age: '≥10 years to ≤50 years', loa: 'Unaltered', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'Patellar Reduction': ['High velocity trauma', 'Direct knee trauma'],
    },
    treatments: [
      {
        med: 'Consider Patellar Reduction',
        cols: ['', ''],
        rows: [
          ['Technique', 'With the patient in a seated or lying position, gently extend the knee while lifting up on the patella and placing medial pressure to the edge of the patella.'],
          ['Max. attempts', '2'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: null,
  },

];

// ─── PALLIATIVE CARE – Preamble ──────────────────────────────────────────────
const PALLIATIVE_PREAMBLE = {
  title: 'Palliative Care Medical Directive',
  sections: [
    {
      heading: 'PALLIATIVE CARE MEDICAL DIRECTIVE',
      body: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized to a patient with a life limiting illness <strong>OR</strong> a patient nearing end of life, requiring management for the following symptoms: Dyspnea, Nausea/Vomiting, Hallucinations/Delirium/Agitation, and/or Terminal Congested Breathing (noisy breathing or excessive secretions).'
    },
    {
      heading: 'Patch',
      body: 'If a paramedic determines that the patient would benefit from any other management that is not included in this medical directive, a patch to a Base Hospital Physician is necessary.'
    },
    {
      heading: 'Management of Patients with Palliative Care Needs',
      body: 'Patients with palliative care needs may require a different approach to assessment and treatment that reflects their unique goals of care. Therefore, for this defined patient population, paramedics should consider prioritizing patient comfort and are not required to follow the described regimen of strict vital signs, cardiac monitoring and transport as directed in the Basic Life Support Patient Care Standard (BLS PCS). If patient transport is initiated, paramedics should consider usual care (vitals and monitoring) per the ALS and BLS PCS in conjunction with the patients\' goals of care; they may also consider symptom treatments below if indicated.'
    },
    {
      heading: 'Medical Directive',
      body: 'This Medical Directive is written in five sections including five symptom-based sections (Dyspnea, Hallucinations/Delirium/Agitation, Nausea/Vomiting and Terminal Congested Breathing) as well as a Treat and Refer directive. Any of these directives can apply, individually or in combination, to a patient with palliative care needs. The Treat and Refer part of this directive can be applied even if no symptoms listed in the directive are present or treatments have not been provided. All patients who remain at home must be referred to their primary care physician or a palliative care team to ensure follow up of their presenting complaint.\n\nWhen in doubt, consult/patch to a Base Hospital Physician (BHP).'
    },
    {
      heading: 'Pocket Orders',
      body: 'Orders received from the base hospital physician that are for the <strong>same patient</strong> on the <strong>same shift</strong> administered by the <strong>same paramedic</strong>. They are designed for the paramedic to alleviate repeat calling when seeing the patient multiple times in a shift. If a different paramedic attends to the same patient, a new patch is required.'
    },
    {
      heading: 'Subcutaneous Infusion Device',
      body: 'A paramedic may insert a subcutaneous infusion device providing they have been trained and authorized and their employer has approved the use of this device and policies are in place supporting this technique.'
    },
  ]
};

// ─── PALLIATIVE CARE (Special Care Directives) ──────────────────────────────
const PALLIATIVE_DIRECTIVES = [
  {
    id: 'palliative-dyspnea',
    title: 'Dyspnea',
    fullTitle: 'Palliative Care – Dyspnea',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive for REGISTERED patients if authorized.',
    indications: [
      'Patient registered in palliative care program',
      'AND',
      'Uncontrolled dyspnea with suspected bronchoconstriction'
    ],
    conditions: {
      'Salbutamol': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'For dyspnea with suspected bronchoconstriction ONLY' },
    },
    contraindications: {
      'Salbutamol': ['Allergy to salbutamol'],
    },
    treatments: [
      {
        med: 'Consider Salbutamol',
        cols: ['', 'MDI', 'NEB'],
        rows: [
          ['Dose', 'Up to 800 mcg (8 puffs)', '5 mg'],
          ['Dosing interval', '5–15 min PRN', '5–15 min PRN'],
          ['Max. # of doses', '3', '3'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Salbutamol should ONLY be used in patients whose dyspnea is accompanied by wheezing or a history of response to bronchodilators.',
    ],
    treatDischarge: null,
  },
  {
    id: 'palliative-agitation',
    title: 'Hallucinations or Agitation',
    fullTitle: 'Palliative Care – Hallucinations or Agitation',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive for REGISTERED patients if authorized.',
    indications: [
      'Patient registered in palliative care program',
      'AND',
      'Increasing agitation OR suspected new or increased hallucinations'
    ],
    conditions: {
      'Haloperidol': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'Haloperidol': ['Allergy to haloperidol', 'Known Parkinson\'s or Lewy Body Dementia', 'Neuroleptic Malignant Syndrome'],
    },
    treatments: [
      {
        med: 'Consider Haloperidol',
        cols: ['', 'SC'],
        rows: [
          ['Dose', '0.5–1 mg'],
          ['Max. single dose', '1 mg'],
          ['Dosing interval', '30 min'],
          ['Max. # of doses', '2'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [],
    treatDischarge: null,
  },
  {
    id: 'palliative-nausea',
    title: 'Nausea or Vomiting',
    fullTitle: 'Palliative Care – Nausea or Vomiting',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive for REGISTERED patients if authorized.',
    indications: [
      'Patient registered in palliative care program',
      'AND',
      'Nausea and/or vomiting'
    ],
    conditions: {
      'Haloperidol': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
      'Ondansetron': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Contraindication to haloperidol' },
      'Dimenhydrinate': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Contraindication to haloperidol AND contraindication to ondansetron' },
    },
    contraindications: {
      'Haloperidol': ['Allergy to haloperidol', 'Known Parkinson\'s or Lewy Body Dementia', 'Neuroleptic Malignant Syndrome'],
      'Ondansetron': ['Allergy to ondansetron'],
      'Dimenhydrinate': ['Allergy to dimenhydrinate or antihistamines', 'Overdose on antihistamines, anticholinergics, or tricyclic antidepressants'],
    },
    treatments: [
      {
        med: 'Consider Haloperidol (first line)',
        cols: ['', 'SC'],
        rows: [
          ['Dose', '0.5–1 mg'],
          ['Max. single dose', '1 mg'],
          ['Dosing interval', '30 min'],
          ['Max. # of doses', '2'],
        ]
      },
      {
        med: 'Consider Ondansetron (if haloperidol contraindicated)',
        cols: ['', 'PO / SC'],
        rows: [
          ['Dose', '4 mg'],
          ['Max. single dose', '4 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
      {
        med: 'Consider Dimenhydrinate (if both above contraindicated)',
        cols: ['', 'SC'],
        rows: [
          ['Dose', '25–50 mg'],
          ['Max. single dose', '50 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Dimenhydrinate is rarely used in the palliative care population as it can cause delirium, increase drowsiness, and does not target appropriate nausea receptors. Use at low doses only.',
    ],
    treatDischarge: null,
  },
  {
    id: 'palliative-congestion',
    title: 'Terminal Congested Breathing',
    fullTitle: 'Palliative Care – Terminal Congested Breathing',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive for REGISTERED patients if authorized.',
    indications: [
      'Patient registered in palliative care program',
      'AND',
      'Congested/loud/rattling breathing in patient near end of life'
    ],
    conditions: {
      'Glycopyrrolate or Atropine': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'Glycopyrrolate': ['Allergy to glycopyrrolate'],
      'Atropine': ['Allergy to atropine'],
    },
    treatments: [
      {
        med: 'Consider Glycopyrrolate OR Atropine',
        cols: ['', 'SC'],
        rows: [
          ['Dose', '0.4 mg'],
          ['Max. single dose', '0.4 mg'],
          ['Dosing interval', 'N/A'],
          ['Max. # of doses', '1'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'Patient repositioning and gentle turning of the head to the side can be done instead of medication.',
      'Suction of the oropharynx is NOT appropriate – will likely cause discomfort and gag reflex.',
    ],
    treatDischarge: null,
  },
  {
    id: 'palliative-treat-refer',
    title: 'Treat and Refer',
    fullTitle: 'Palliative Care – Treat and Refer',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive for REGISTERED patients if authorized.',
    indications: [
      'Patient registered in palliative care program',
      'AND',
      'Symptoms improved to patient\'s/SDM\'s satisfaction',
      'AND',
      'After informed discussion, patient/SDM preference to remain at home'
    ],
    conditions: {
      'Treat and Refer': { age: '≥18 years', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'Valid DNR Confirmation Form\nAND Patient registered in Paramedic Palliative Care Program' },
    },
    contraindications: {
      'Treat and Refer': [
        'Concerns of patient abuse or neglect',
        'Patient and SDM cannot demonstrate decision-making capacity (Aid to Capacity Evaluation Tool)',
        'Uncontrolled or new seizures',
      ],
    },
    treatments: [
      {
        med: 'Treat and Refer',
        cols: ['', ''],
        rows: [
          ['Action', 'Paramedics may treat per this directive and, in collaboration with patient/SDM, honour wishes to remain at home'],
          ['Notification', 'Notify patient\'s palliative care team'],
        ]
      },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'A period of observation is recommended after any medication to ensure adequate response and no unexpected adverse effects.',
      'Consider transport for suspected reversible causes: complete bowel obstruction, new spinal cord compression, new SVC obstruction, airway obstruction, suspected new pathologic fracture.',
    ],
    treatDischarge: null,
  },
  {
    id: 'palliative-iv-cannulation',
    title: 'Intravenous Cannulation',
    fullTitle: 'Palliative Care – Intravenous Cannulation Medical Directive',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'A patient with a life limiting illness OR a patient nearing end of life, requiring parenteral hydration or venous access.',
    ],
    conditions: {
      'IV Cannulation': { age: '≥18', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'IV Cannulation': ['N/A'],
    },
    treatments: [
      { med: 'Consider IV Cannulation', rows: [], cols: [] },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'A follow up plan should be in place to ensure ongoing management of the intravenous line (such as follow up by MRP (most responsible practitioner) or community paramedic).',
      'A period of observation is recommended after the administration of any fluid if this patient is not transported to ensure adequate response and no unexpected immediate adverse effects.',
      'When a paramedic is requested to start an IV solely for the purpose of MAID (Medical Assistance in Dying) by the patient\'s care team, the paramedic has the right to refuse this request.',
    ],
    treatDischarge: null,
  },
  {
    id: 'palliative-sc-line',
    title: 'Subcutaneous Line Placement',
    fullTitle: 'Palliative Care – Subcutaneous Line Placement Medical Directive',
    category: 'palliative',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this Medical Directive if authorized.',
    indications: [
      'A patient with a life limiting illness OR a patient nearing end of life, requiring symptom management and parenteral administration of palliative care symptom relief medications is clinically indicated AND it is expected more than one medication administration will be required and thus the patient will benefit from placement of a subcutaneous line',
    ],
    conditions: {
      'Subcutaneous Line Placement': { age: '≥18', loa: 'N/A', hr: 'N/A', rr: 'N/A', sbp: 'N/A', other: 'N/A' },
    },
    contraindications: {
      'Subcutaneous Line Placement': ['N/A'],
    },
    treatments: [
      { med: 'Consider Subcutaneous Line Placement', rows: [], cols: [] },
    ],
    patchPoints: [],
    clinicalConsiderations: [
      'A follow up plan should be in place to ensure ongoing management of the subcutaneous line (such as follow up by MRP or community paramedic).',
      'A period of observation is recommended after the administration of any medication if the patient is not transported to ensure adequate response and no unexpected immediate adverse effects.',
      'Adverse events after insertion include pain at the site (from the irritation of the drug or the injection was fast, this is prevented by injecting the drug slowly). If pain remain then the needle may be pulled back into the intradermal space (put a folded 2x2 gauze under the butterfly wings to elevate the needle to 45 degrees. If pain persist, then you need to change needle).',
    ],
    treatDischarge: null,
  },
];
