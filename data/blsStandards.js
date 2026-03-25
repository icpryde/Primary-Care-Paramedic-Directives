// ── Ontario BLS PCS v3.4 – BLS Standards Quick-Use Reference ───────────────
// Mobile-focused summary intended for field use. Confirm with current MOH BLS PCS
// and local service directives when operational decisions are time-critical.

const BLS_GROUPS = [
  {
    id: 'bls-general',
    type: 'bls-group',
    category: 'bls',
    title: 'General Standards of Care',
    fullTitle: 'BLS Standards — General Standards of Care',
  },
  {
    id: 'bls-medical',
    type: 'bls-group',
    category: 'bls',
    title: 'Medical Standards',
    fullTitle: 'BLS Standards — Medical Standards',
  },
  {
    id: 'bls-trauma',
    type: 'bls-group',
    category: 'bls',
    title: 'Trauma Standards',
    fullTitle: 'BLS Standards — Trauma Standards',
  },
  {
    id: 'bls-obstetrical',
    type: 'bls-group',
    category: 'bls',
    title: 'Obstetrical Standards',
    fullTitle: 'BLS Standards — Obstetrical Standards',
  },
];

const BLS_GROUP_CONTENT = {
  'bls-general': {
    lead: 'High-priority baseline standards frequently used across multiple call types.',
    standards: [
      {
        title: 'Oxygen Therapy Standard',
        critical: ['Titrate oxygen to clinical need and avoid unnecessary hyperoxia.'],
        keyPoints: [
          'Use lowest effective oxygen concentration to maintain target SpO₂ for patient context.',
          'Escalate from nasal prongs to mask/BVM based on work of breathing and oxygenation failure.',
          'Continuously reassess mental status, respiratory effort, SpO₂ trend, and ETCO₂ when available.',
          'Document indication, route/device, flow rate, response, and adverse effects.'
        ]
      },
      {
        title: 'Spinal Motion Restriction Standard',
        critical: ['Use selective SMR; avoid reflex full immobilization when criteria are not met.'],
        keyPoints: [
          'Apply decision process using mechanism, exam findings, and neurologic risk factors.',
          'Prioritize patient comfort and movement minimization over rigid immobilization when appropriate.',
          'Maintain inline stabilization only when indicated; avoid delays to transport in unstable trauma.',
          'Record decision pathway used and patient findings supporting SMR/no-SMR approach.'
        ]
      },
      {
        title: 'Do Not Resuscitate (DNR) Standard',
        critical: ['Valid DNR confirmation changes resuscitation pathway — verify before withholding CPR.'],
        keyPoints: [
          'Confirm validity of DNR documentation/identifier and patient match per service procedure.',
          'If DNR is invalid/uncertain, proceed with standard resuscitation until clarified.',
          'Provide comfort-focused supportive care, family communication, and respectful scene management.',
          'Document verification source, decision timing, and consultation/patch details where used.'
        ]
      },
      {
        title: 'IV Line Maintenance Standard',
        critical: ['Maintain patency and safety; do not compromise line sterility during transport.'],
        keyPoints: [
          'Assess catheter site and infusion status (patency, infiltration, phlebitis, securement).',
          'Maintain ordered rate unless changed by authorized directive/patch/order.',
          'Stop or slow infusion when adverse signs develop and reassess hemodynamics frequently.',
          'Document pre-existing line status, interventions, and continuity handoff at destination.'
        ]
      },
      {
        title: 'Sexual Assault Standard',
        critical: ['Patient safety, consent, privacy, and evidence preservation are all high priority.'],
        keyPoints: [
          'Ensure immediate medical safety while minimizing unnecessary physical evidence disruption.',
          'Use trauma-informed communication: ask permission, explain steps, preserve patient choice/control.',
          'Avoid washing/changing evidence-critical materials unless clinically required for safety.',
          'Coordinate destination options and mandatory reporting obligations per policy and law.'
        ]
      }
    ]
  },

  'bls-medical': {
    lead: 'Medical presentations requiring focused assessment, early risk recognition, and destination planning.',
    standards: [
      { title: 'Abdominal Pain Standard', keyPoints: ['Screen for peritonitis, shock, GI bleed, AAA risk, and pregnancy-related causes.', 'Trend pain severity, vitals, and associated symptoms (vomiting, fever, syncope).', 'Escalate destination urgency for instability, guarding/rigidity, or significant bleeding.'] },
      { title: 'Airway Obstruction Standard', keyPoints: ['Differentiate partial vs complete obstruction and deterioration speed.', 'Use age-appropriate airway maneuvers and suction/choking protocol interventions.', 'Prepare for rapid decompensation and early transport to definitive airway-capable site.'] },
      { title: 'Allergic Reaction Standard', keyPoints: ['Identify anaphylaxis features early (airway, breathing, circulation, skin/GI).', 'Prioritize epinephrine pathway per directive and reassess response quickly.', 'Monitor for biphasic deterioration and transport even after symptom improvement when indicated.'] },
      { title: 'Altered Level of Consciousness Standard', keyPoints: ['Rule out immediately reversible causes: hypoxia, hypoglycemia, opioid toxicity, seizure/post-ictal state.', 'Use serial neurologic reassessment and collateral history for baseline comparison.', 'Escalate destination and patch considerations for persistent unexplained LOC changes.'] },
      { title: 'Back Pain Standard', keyPoints: ['Screen for red flags: neuro deficit, infection, trauma, AAA, cauda equina indicators.', 'Assess functional impact, pain severity trend, and associated systemic symptoms.', 'Prioritize urgent transport for high-risk features or progressive deficits.'] },
      { title: 'Cardiac Arrest Standard', keyPoints: ['Deliver high-quality CPR, rhythm-guided care, and coordinated team task flow.', 'Identify reversible causes and apply TOR/DNR pathways where criteria are met.', 'Document arrest timeline, rhythm changes, interventions, ROSC status, and disposition.'] },
      { title: 'Cerebrovascular Accident (Stroke) Standard', keyPoints: ['Use stroke screen and establish precise onset/last-known-well time.', 'Recognize bypass eligibility and destination selection urgency for reperfusion pathways.', 'Pre-notify receiving centre with exam findings, onset window, glucose, and anticoagulant history.'] },
      { title: 'Chest Pain Standard', keyPoints: ['Differentiate ACS concern from other life threats (PE, dissection, pneumothorax).', 'Obtain/interpret serial 12-lead ECGs and trend symptoms/hemodynamics.', 'Use bypass criteria and patch process when STEMI pathway indicators are present.'] },
      { title: 'Dysphagia Standard', keyPoints: ['Assess aspiration risk, airway protection, and neurologic association (stroke/neuro).', 'Monitor secretion handling, voice quality, and respiratory compromise signs.', 'Transport for urgent evaluation when new-onset or associated with focal deficits.'] },
      { title: 'Epistaxis Standard', keyPoints: ['Control bleeding with direct pressure and posture while protecting airway.', 'Assess anticoagulant use, hemodynamic effect, and recurrent/traumatic causes.', 'Escalate care for persistent severe bleeding or airway compromise.'] },
      { title: 'Excited Delirium Standard', keyPoints: ['Prioritize provider/public safety and rapid physiologic stabilization.', 'Recognize hyperthermia, severe agitation, stimulant/toxicology patterns, and sudden collapse risk.', 'Minimize prolonged struggle/restraint time; expedite monitored transport and reassessment.'] },
      { title: 'Extremity Pain Standard', keyPoints: ['Assess neurovascular status and occult trauma/infection/ischemia red flags.', 'Provide immobilization/comfort measures while preserving reassessment access.', 'Escalate destination urgency for compromised circulation, severe deformity, or uncontrolled pain.'] },
      { title: 'Fever Standard', keyPoints: ['Screen for sepsis indicators, dehydration, meningismus, and vulnerable populations.', 'Trend temperature and hemodynamic markers with mental status changes.', 'Use pre-alert process when sepsis criteria are met.'] },
      { title: 'Headache Standard', keyPoints: ['Identify thunderclap onset, neuro deficits, meningism, trauma, and high-risk history.', 'Differentiate primary headache patterns from secondary life-threatening causes.', 'Escalate for red-flag headache features and atypical presentation.'] },
      { title: 'Heat-Related Illness Standard', keyPoints: ['Differentiate heat exhaustion vs heat stroke; severe CNS change = high acuity.', 'Begin active cooling strategy as indicated while monitoring airway and circulation.', 'Prioritize rapid transport with ongoing temperature and mental status reassessment.'] },
      { title: 'Hematemesis or Hematochezia Standard', keyPoints: ['Estimate bleeding severity and shock risk; assess stool/emesis characteristics.', 'Identify anticoagulant/liver disease/ulcer history and orthostatic intolerance.', 'Expedite transport for active significant bleed, instability, or recurrent episodes.'] },
      { title: 'Nausea and Vomiting Standard', keyPoints: ['Assess dehydration, metabolic causes, GI obstruction/bleed, and pregnancy-related complications.', 'Monitor aspiration risk, volume loss, and electrolyte compromise indicators.', 'Escalate care for persistent vomiting with instability, altered LOC, or severe pain.'] },
      { title: 'Respiratory Failure Standard', keyPoints: ['Recognize fatigue and impending failure early (silent chest, altered LOC, rising ETCO₂).', 'Escalate oxygen/ventilatory support promptly and reassess response continuously.', 'Prepare for rapid deterioration and destination bypass where protocol allows.'] },
      { title: 'Seizure Standard', keyPoints: ['Protect airway and prevent injury during active seizure/post-ictal phase.', 'Differentiate status epilepticus, recurrent seizure clusters, and first-time seizure risk.', 'Treat reversible causes and transport for persistent altered status or recurrent events.'] },
      { title: 'Shortness of Breath Standard', keyPoints: ['Rapidly classify cause pattern (asthma/COPD, CHF, PE, pneumonia, anaphylaxis).', 'Use respiratory distress markers and serial reassessment to guide escalation.', 'Pre-notify for severe distress or suspected critical etiology.'] },
      { title: 'Syncope, Dizziness, and Vertigo Standard', keyPoints: ['Screen for cardiac, neurologic, hemorrhagic, and metabolic causes.', 'Assess orthostatic context, prodrome, exertional events, and injury from fall.', 'Escalate for persistent deficits, recurrent syncope, or high-risk vitals/ECG findings.'] },
      { title: 'Toxicological Emergency Standard', keyPoints: ['Identify agent class, route, timing, dose estimate, and mixed-ingestion potential.', 'Monitor airway, ventilation, perfusion, and mental status for delayed toxicity.', 'Use poison centre/patch support per protocol and transport with exposure details.'] },
      { title: 'Vaginal Bleeding Standard', keyPoints: ['Assess hemodynamic status, pregnancy status, bleeding severity, and pain profile.', 'Consider ectopic pregnancy, miscarriage, postpartum hemorrhage, and gynecologic causes.', 'Escalate destination urgency for instability or significant ongoing blood loss.'] },
      { title: 'Visual Disturbance Standard', keyPoints: ['Differentiate monocular vs binocular symptoms and sudden vs progressive onset.', 'Screen for stroke, retinal/ocular emergencies, trauma, and toxic/metabolic causes.', 'Urgent transport for acute vision loss, neuro signs, or severe eye pain.'] },
    ]
  },

  'bls-trauma': {
    lead: 'Trauma-focused standards emphasizing life threats, mechanism, and destination strategy.',
    standards: [
      { title: 'General Trauma Standard', keyPoints: ['Complete primary survey with rapid hemorrhage control and shock recognition.', 'Use trauma triage criteria and destination protocols early.', 'Trend neuro status, perfusion, and respiratory pattern continuously.'] },
      { title: 'Amputation and Avulsion Standard', keyPoints: ['Control bleeding with direct pressure/tourniquet as required.', 'Protect amputated tissue using clean, cool, indirect ice method (no direct ice contact).', 'Prioritize rapid transport and receiving facility pre-notification.'] },
      {
        title: 'Blunt and Penetrating Injury Standard',
        keyPoints: ['Treat immediate life threats first, then complete focused trauma assessment.', 'Use mechanism + findings to identify hidden torso/head-neck injury risk.', 'Apply trauma destination criteria and patch process per protocol.'],
        children: [
          { title: 'Blunt Injury — Head', keyPoints: ['Monitor for evolving intracranial injury signs and declining GCS.', 'Protect airway and avoid secondary injury from hypoxia/hypotension.'] },
          { title: 'Blunt Injury — Chest', keyPoints: ['Assess for pneumothorax, flail segment, pulmonary contusion, and occult shock.', 'Escalate transport urgency for respiratory compromise or chest instability.'] },
          { title: 'Blunt Injury — Abdomen/Pelvis', keyPoints: ['Suspect internal bleeding with pain, distension, hypotension, or mechanism clues.', 'Minimize delays and prioritize definitive trauma-capable destination.'] },
          { title: 'Blunt Injury — Spine/Neck', keyPoints: ['Assess neuro deficits, pain, and high-risk mechanism for selective SMR decisions.', 'Maintain movement minimization and serial neurologic checks.'] },
          { title: 'Penetrating Injury — Head/Neck', keyPoints: ['Early airway risk and hemorrhage control are critical priorities.', 'Transport rapidly; avoid unnecessary scene delays.'] },
          { title: 'Penetrating Injury — Chest', keyPoints: ['Identify sucking chest wound/tension signs and manage per trauma protocol.', 'Pre-notify receiving trauma destination early.'] },
          { title: 'Penetrating Injury — Abdomen/Torso', keyPoints: ['Expect occult hemorrhage even with small external wounds.', 'Expedite transport and reassessment for shock progression.'] },
          { title: 'Penetrating Injury — Proximal Extremity', keyPoints: ['Control bleeding aggressively; monitor distal perfusion after intervention.', 'Escalate for uncontrolled hemorrhage or severe tissue damage.'] },
        ]
      },
      { title: 'Bite Standard', keyPoints: ['Control bleeding, assess tissue damage/infection risk, and mechanism (animal/human).', 'Evaluate tetanus/rabies exposure pathways per public health/local policy.', 'Document wound pattern and scene details carefully.'] },
      { title: 'Chest Injury Standard', keyPoints: ['Identify life threats: tension pneumothorax, open pneumothorax, massive hemothorax signs.', 'Support oxygenation/ventilation and monitor rapid deterioration.', 'Transport urgently to appropriate trauma-capable centre.'] },
      { title: 'Eye Injury Standard', keyPoints: ['Protect injured eye (shield, no pressure), assess vision changes and severe pain.', 'Avoid manipulation/removal of embedded objects.', 'Urgent destination for penetrating injury, chemical injury, or vision loss.'] },
      { title: 'Face and Nose Injury Standard', keyPoints: ['Watch for airway compromise from bleeding/swelling.', 'Assess for associated head/neck trauma and facial fracture indicators.', 'Escalate for uncontrolled epistaxis, deformity, or airway threat.'] },
      { title: 'Head Injury Standard', keyPoints: ['Serial GCS/pupil/neurologic trend is critical.', 'Prevent secondary injury with oxygenation/perfusion support.', 'Use destination triage for severe mechanism or neuro decline.'] },
      { title: 'Neck Injury Standard', keyPoints: ['Assess airway, vascular, and neurologic risk immediately.', 'Use selective SMR and minimize neck movement when indicated.', 'Urgent transport for penetrating neck trauma or neuro deficits.'] },
      { title: 'Burns Standard', keyPoints: ['Stop burning process, estimate TBSA/depth, prevent hypothermia.', 'Use burn destination criteria and fluid/temperature monitoring principles.', 'Protect wound surfaces and reassess airway for inhalation injury signs.'] },
      { title: 'Cold Injury Standard', keyPoints: ['Differentiate localized frost injury from systemic hypothermia.', 'Handle tissue gently; avoid refreeze cycles after rewarming begins.', 'Monitor for arrhythmia and progressive instability.'] },
      { title: 'Electrocution Injury Standard', keyPoints: ['Ensure scene safety/power isolation before contact.', 'Assess arrhythmia risk, burns, trauma from falls, and neuro injury.', 'Continuous monitoring and destination selection for high-voltage/significant symptoms.'] },
      { title: 'Extremity Injury Standard', keyPoints: ['Assess deformity, open fracture signs, and distal neurovascular status.', 'Immobilize in functional position and reassess after splinting.', 'Escalate for compartment syndrome concern or compromised perfusion.'] },
      { title: 'Foreign Bodies (Eye, Ear, Nose) Standard', keyPoints: ['Do not blindly remove deeply embedded or high-risk foreign bodies.', 'Protect airway and avoid worsening tissue damage.', 'Transport for specialist assessment when depth/complication risk is high.'] },
      { title: 'Hazardous Material Injury Standard', keyPoints: ['Prioritize rescuer safety, decontamination pathway, and toxidrome recognition.', 'Avoid contamination spread to ambulance/hospital teams.', 'Provide early pre-notification with agent/exposure details.'] },
      { title: 'Soft Tissue Injury Standard', keyPoints: ['Control bleeding and assess contamination/crush/degloving severity.', 'Use wound protection and infection-risk considerations.', 'Escalate for major blood loss or extensive tissue damage.'] },
      { title: 'Submersion Injury Standard', keyPoints: ['Address airway/ventilation immediately; hypoxia is key driver of deterioration.', 'Treat concurrent trauma/hypothermia based on scene context.', 'Continuous reassessment for delayed respiratory decline after rescue.'] },
    ]
  },

  'bls-obstetrical': {
    lead: 'Obstetrical and neonatal standards requiring early risk recognition and destination planning.',
    standards: [
      {
        title: 'Neonate Standard',
        critical: ['Thermoregulation, airway support, and perfusion reassessment are immediate priorities.'],
        keyPoints: [
          'Perform structured newborn assessment and support transition to effective respiration.',
          'Escalate support promptly for persistent respiratory distress, poor tone, or perfusion failure.',
          'Document birth timeline, APGAR-style observations, interventions, and response.'
        ]
      },
      {
        title: 'Pregnancy Standard',
        critical: ['Maternal instability can rapidly compromise both mother and fetus — prioritize maternal resuscitation.'],
        keyPoints: [
          'Assess gestational age, bleeding/pain patterns, contractions, fetal movement concerns, and hypertensive risk.',
          'Use left lateral positioning when appropriate and monitor for obstetrical emergencies.',
          'Coordinate destination with obstetrical capability and pre-notify for high-risk presentation.'
        ]
      }
    ]
  }
};
