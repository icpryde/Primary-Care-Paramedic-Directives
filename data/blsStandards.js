// ── Ontario BLS PCS v3.4 – BLS Standards Verbatim Reference ────────────────
// Content sourced from Ontario BLS Patient Care Standards Version 3.4 (2023).
// For operational decisions, always confirm with the current MOH BLS PCS document.

const BLS_GROUPS = [
  { id: 'bls-general', type: 'bls-group', category: 'bls', title: 'General Standards of Care', fullTitle: 'BLS Standards — General Standards of Care' },
  { id: 'bls-medical', type: 'bls-group', category: 'bls', title: 'Medical Standards', fullTitle: 'BLS Standards — Medical Standards' },
  { id: 'bls-trauma', type: 'bls-group', category: 'bls', title: 'Trauma Standards', fullTitle: 'BLS Standards — Trauma Standards' },
  { id: 'bls-obstetrical', type: 'bls-group', category: 'bls', title: 'Obstetrical Standards', fullTitle: 'BLS Standards — Obstetrical Standards' },
];

const BLS_GROUP_CONTENT = {
  'bls-general': {
    lead: 'High-priority baseline standards frequently used across multiple call types.',
    standards: [
      {
        id: 'bls-oxygen-therapy',
        title: 'Oxygen Therapy Standard',
        sections: [
          {
            heading: 'General Directive',
            preamble: 'The paramedic shall:',
            items: [
              'administer oxygen therapy using an oxygen delivery system and flow rate to attempt to maintain a patient\'s oxygen saturation between 92-96%, as measured by SpO₂, unless specified otherwise in the Standards;',
              { text: 'continuously administer high concentration oxygen for patients who have,', subItems: [
                'confirmed or suspected carbon monoxide or cyanide toxicity or noxious gas exposure,',
                'upper airway burns,',
                'scuba-diving related disorders,',
                'ongoing cardiopulmonary arrest,',
                'complete airway obstruction, and/or',
                'sickle cell anemia with suspected vaso-occlusive crisis; and',
              ] },
              { text: 'if pulse oximetry equipment is not functioning or not providing an interpretable wave form, administer high concentration oxygen to all patients specified in paragraph 2 above, as well as those with critical findings, which include, a. age-specific hypotension,', subItems: [
                'respiratory distress,',
                'cyanosis, ashen colour, pallor,',
                'altered level of consciousness, and/or',
                'abnormal pregnancy or labour.',
              ] },
            ],
          },
          {
            heading: 'Oxygen Therapy and COPD',
            preamble: 'If a patient with chronic obstructive pulmonary disease (COPD) has increased dyspnea, a decreased level of consciousness, an altered mental status, and/or has suffered major trauma, the paramedic shall:',
            items: [
              'titrate oxygen administration to achieve an oxygen saturation between 88-92%. If pulse oximetry equipment is not functioning, administer oxygen by nasal cannula with oxygen flow at two litres per minute above the patient\'s home oxygen levels, or two litres per minute if patient is not on home oxygen;',
              're-assess the vital signs approximately every 10 minutes;',
              'maintain oxygen flow rate at that level, if the patient\'s status improves;',
              'increase oxygen by increments of two litres per minute above starting level approximately every two to three minutes if the patient\'s status deteriorates or the patient indicates they feel worse; and',
              'be prepared to ventilate.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-spinal-motion-restriction',
        title: 'Spinal Motion Restriction (SMR) Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              { text: 'consider spinal motion restriction (SMR) for any patient with a potential spine or spinal cord injury, based on mechanism of injury, such as,', subItems: [
                'any trauma associated with complaints of neck or back pain,',
                'sports accidents (impaction, falls),',
                'diving incidents and submersion injuries,',
                'explosions, other types of forceful acceleration/deceleration injuries,',
                'falls (e.g. stairs),',
                'pedestrians struck,',
                'electrocution,',
                'lightning strikes, or',
                'penetrating trauma to the head, neck or torso;',
              ] },
              { text: 'if the patient meets the criteria listed in paragraph 1 above, determine if the patient exhibits ANY risk criteria, as follows,', subItems: [
                'neck or back pain,',
                'spine tenderness,',
                'neurologic signs or symptoms,',
                'altered level of consciousness,',
                'suspected drug or alcohol intoxication,',
                'a distracting painful injury (any painful injury that may distract the patient from the pain of a spinal injury),',
                'anatomic deformity of the spine,',
                'high-energy mechanism of injury, such as,',
                { text: 'fall from elevation greater than 3 feet/5 stairs,', subItems: [
                  'axial load to the head (e.g. diving accidents),',
                  'high speed motor vehicle collisions (≥100 km/hr), rollover, ejection,',
                  'hit by bus or large truck,',
                ] },
                { text: 'motorized/ATV recreational vehicles collision, or', subItems: [
                  'bicyclist struck or collision, or',
                ] },
                'age ≥65 years old including falls from standing height;',
              ] },
              'if the patient meets the criteria of paragraph 1 above, but does not meet the criteria of paragraph 2 above, not apply SMR;',
              'subject to paragraph 6 below, if the patient meets the requirements of paragraph 2 above, apply SMR using a cervical collar only*, attempt to minimize spinal movement, and secure the patient to the stretcher with stretcher straps (see Guideline below);',
              { text: 'if the patient has penetrating trauma to the head, neck or torso, determine if the patient exhibits ALL of the following,', subItems: [
                'no spine tenderness,',
                'no neurologic signs or symptoms,',
                'no altered level of consciousness,',
                'no evidence of drug or alcohol intoxication,',
                'no distracting painful injury, and',
                'no anatomic deformity of the spine; and',
              ] },
              'notwithstanding paragraph 4 above, if the patient meets the criteria of paragraph 5, not apply SMR.',
            ],
            notes: [
              'Spinal boards or adjustable break-away stretchers may still be indicated for use to minimize spinal movement during extrication.',
            ]
          },
        ],
        guidelines: [
          { heading: 'General', items: [
            'This standard does not allow the paramedic to "clear the spine" for blunt trauma patients. Rather, it identifies patients where the mechanism of injury in combination with and the absence of risk criteria mean a spine injury does not have to be considered.',
            'Using SMR does not mean the paramedic has "cleared" the spine for blunt trauma patients. The paramedic must at all times manage the patient to minimize spinal movement.',
            'In conjunction with the Documentation of Patient Care Standard, when possible, document the neurologic status before and after SMR on the Ambulance Call Report.',
          ] },
          { heading: 'Use of Spinal Boards', items: [
            'Spinal boards or adjustable break-away stretchers should be considered primarily as extrication/patient lifting devices. The goal should be to remove the patient from these devices as soon as it is safe to do so. If sufficient personnel are present, the patient should be log rolled from the extrication device to the stretcher during loading of the patient or shortly after loading into the ambulance.',
            'Spinal boards or adjustable break-away stretchers may remain in place if the paramedic deems it safer/more comfortable for the patient in consideration of short transport times (<30 min).',
            'Recall that patients with suspected pelvic fractures should be secured on a spinal board or adjustable break-away stretcher as per the Blunt/Penetrating Injury Standard.',
          ] },
          { heading: 'Patient Extrication and Transport', items: [
            'Patient with SMR may be placed in a semi-sitting or supine position, according to patient comfort/clinical condition.',
            'If patient is unresponsive/uncooperative, apply manual C-spine immobilization until appropriate SMR has been applied.',
            'Cervical collars should be placed on the patient prior to movement, if possible.',
            'Patients involved in an MVC, who remain in a vehicle with isolated neck or back pain and no neurologic signs or symptoms/indications of major trauma may be allowed to self-extricate using a stand, turn and pivot onto the stretcher. The paramedic should coach the patient to maintain neutral spinal alignment.',
            'Patients who have had a spinal board or adjustable break-away stretcher applied by a first responder prior to the paramedic\'s arrival should still be assessed for SMR as per the Standard. Unless otherwise required, SMR may be modified to meet this standard.',
            'Patients with SMR undergoing inter-facility transfers may have SMR modified as per the Standard in consultation with the sending physician. This may involve removal of a spinal board.',
          ] },
          { heading: 'SMR and Agitated Patients', items: [
            'Patients who are markedly agitated, combative or confused may not be able to follow commands and cooperate with minimizing spinal movement. There may be rare circumstances in which attempts to apply SMR using a C-collar, spinal board or adjustable break-away stretcher leads to an increase in patient agitation that constitutes a safety hazard to both the patient and the paramedic. In these situations, the paramedic shall apply SMR to the best of his/her ability and secure the patient to the stretcher with stretcher straps. In conjunction with the Documentation of Patient Care Standard, the paramedic shall clearly document the circumstances of the safety hazard and his/her resulting inability to apply SMR to the patient.',
          ] },
        ]
      },
      {
        id: 'bls-dnr',
        title: 'Do Not Resuscitate (DNR) Standard',
        sections: [
          {
            intro: 'In a situation where a paramedic obtains a Valid MOH DNR Confirmation Form, the paramedic shall follow the General Directive set out below.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Definitions',
            preamble: 'For purposes of the Do Not Resuscitate (DNR) Standard:',
            items: [],
          },
          {
            definitions: true,
            heading: 'Cardiopulmonary Resuscitation (CPR)',
            preamble: 'An immediate application of life-saving measures to a person who has suffered sudden respiratory or cardiorespiratory arrest. These measures include but are not limited to basic or advanced cardiac life support interventions outlined in the ALS PCS such as:',
            items: [
              'Chest compression',
              'Defibrillation',
              'Artificial ventilation',
              'Insertion of an oropharyngeal, nasopharyngeal or supraglottic airway',
              'Endotracheal intubation',
              'Transcutaneous pacing',
              'Advanced resuscitation drugs such as, but not limited to, vasopressors, antiarrhythmic agents and opioid antagonists',
            ],
          },
          {
            definitions: true,
            heading: 'Do Not Resuscitate',
            preamble: 'means that the paramedic (in accordance with his/her level of certification) will not initiate any of the interventions listed in the definition of CPR, above.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Treatment',
            preamble: 'Any action or service that is provided for a therapeutic, preventive, palliative, diagnostic, cosmetic or other health-related purpose, and includes a course of treatment or plan of treatment.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Valid MOH DNR Confirmation Form',
            preamble: 'A DNR Confirmation Form with pre-printed serial number that has been completed, in full, with the following information:',
            items: [
              'The name of the patient (including both surname and first name) to whom the Form applies.',
              { text: 'A check box that has been checked to identify that one of the following conditions has been met:', subItems: [
                'A current plan of treatment exists that reflects the patient\'s expressed wish when capable, or consent of the substitute decision-maker when the patient is incapable, that CPR not be included in the patient\'s plan of treatment.',
                'The physician\'s current opinion is that CPR will almost certainly not benefit the patient and is not part of the plan of treatment, and the physician has discussed this with the capable patient or the substitute decision-maker when the patient is incapable.',
              ] },
              'A check box that has been checked to identify the professional designation of the Medical Doctor (M.D.), Registered Practical Nurse (R.P.N.), Registered Nurse (R.N.), or Registered Nurse in the Extended Class (R.N. [EC]) who has signed the Form.',
              'Printed name of the M.D., R.P.N., R.N., or R.N. (EC) signing the Form.',
              'A signature by the appropriate M.D., R.P.N., R.N., or R.N. (EC).',
              'The date that the Form was signed, which must be the same as or precede the date of request for ambulance service.',
            ],
            notes: [
              'A Valid DNR Confirmation Form may be a fully completed original, or a copy of a fully completed original.',
            ],
          },
          {
            heading: 'General Directive',
            preamble: 'The paramedic shall:',
            items: [
              'A paramedic, upon obtaining a Valid MOH DNR Confirmation Form and subject to paragraph 2 below, SHALL NOT initiate CPR (as per the definition above) on the patient in the event that the patient experiences respiratory or cardiorespiratory arrest (i.e. respirations and pulse are absent for at least three minutes from the time that respiratory or cardiac arrest was noted by the paramedic).',
              { text: 'A paramedic shall initiate CPR (as per the definition above) on a patient who has experienced respiratory or cardiorespiratory arrest when:', subItems: [
                'the patient with a Valid MOH DNR Confirmation Form appears to the paramedic to be capable and expresses clearly a wish to be resuscitated in the event that he/she experiences a respiratory or cardiac arrest; or',
                'the patient with a Valid MOH DNR Confirmation Form appears to the paramedic to be capable and expresses a wish to be resuscitated in the event that he/she experiences respiratory or cardiorespiratory arrest, but the request is vague, incomplete or ambiguous such that it is no longer clear what the wishes of the patient are.',
              ] },
              'The paramedic shall provide patient management necessary to provide comfort or alleviate pain, as required by the patient\'s clinical condition.',
              { text: 'Once it has been determined that death has occurred, the paramedic shall:', subItems: [
                'advise the CACC/ACS; and',
                'follow the Deceased Patient Standard.',
              ] },
              'In conjunction with the Documentation of Patient Care Standard, the paramedic shall note and document the time at which the paramedic confirms the patient was deceased as per paragraph 1 above.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-iv-line-maintenance',
        title: 'Intravenous Line Maintenance Standard',
        sections: [
          {
            heading: 'General Directive',
            preamble: 'A paramedic shall monitor an intravenous (IV) line for a patient who has:',
            items: [
              { text: 'an IV line to keep the vein open, as follows:', subItems: [
                'The flow rate to maintain IV patency for a patient <12 years of age is 15 mL/hr of any isotonic crystalloid solution.',
                'The flow rate to maintain IV patency for a patient ≥12 years of age is 30-60 mL/hr of any isotonic crystalloid solution; or',
              ] },
              { text: 'an intravenous line for fluid replacement with,', subItems: [
                'a maximum flow rate infused of up to two mL/kg/hr to a maximum of 200 mL/hr,',
                'thiamine, multivitamin preparations,',
                'drugs within his/her level of certification, or',
                'potassium chloride (KCl) for patients ≥18 years of age, to a maximum of 10 mEq in a 250 mL bag.',
              ] },
            ],
          },
          {
            heading: 'Use of Escorts',
            items: [
              { text: 'Unless within his/her level of certification, a paramedic shall request a medically responsible escort in the event a patient requires an intravenous:', subItems: [
                'that is being used for blood (or blood product) administration;',
                'that is being used to administer potassium chloride to a patient who is <18 years of age;',
                'that is being used to administer medication (including pre-packaged medications, except as detailed in paragraph 2 from the General Directive above);',
                'that requires electronic monitoring or uses a pressurized intravenous fluid infuser, pump or central venous line; or',
                'for a neonate or pediatric patient <2 years of age.',
              ] },
            ],
          },
          {
            heading: 'Procedure',
            preamble: 'The paramedic shall:',
            items: [
              { text: 'Pre-transport', subItems: [
                'confirm physician\'s written IV order with sending facility staff;',
                'determine IV solution, IV flow rate, catheter gauge, catheter length, and cannulation site;',
                'note condition of IV site prior to transport;',
                'confirm amount of fluid remaining in bag;',
                'determine amount of fluid required for complete transport time and obtain more fluid if applicable; and',
                'document all pre-transport IV information on the Ambulance Call Report.',
              ] },
              { text: 'During transport', subItems: [
                'monitor and maintain IV at the prescribed rate, this may include changing the IV bag as required;',
                'if the IV becomes dislodged or interstitial, discontinue the IV flow and remove the catheter with particular attention to aseptic technique; and',
                'confirm condition of catheter if removed.',
              ] },
            ],
          },
        ],
        guidelines: [
          'The IV bag should be changed when there is approximately 150 mLs of solution remaining.',
        ]
      },
      {
        id: 'bls-sexual-assault',
        title: 'Sexual Assault (Reported) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient who is reported to have been sexually assaulted, the paramedic shall:',
            items: [
              'ensure the patient is not left alone;',
              'if the patient is a child, follow the Child in Need of Protection Standard;',
              'notwithstanding paragraph 2 above, in situations where police are not on-scene, offer to contact police; and',
              'upon police request, bag the stretcher linen, dressings, and other materials in contact with the patient, and leave with the attending police officer.',
            ],
          },
        ],
        guidelines: [
          'If the patient declines to report the incident to the police, it is helpful to discuss options and be knowledgeable regarding local resources (e.g. sexual assault crisis centre; crime victim assistance programs), and be able to provide phone numbers for same.',
          'Advise the patient not to wash, urinate or defecate until an examination is conducted at the receiving facility.',
        ]
      },
    ]
  },

  'bls-medical': {
    lead: 'Medical presentations requiring focused assessment, early risk recognition, and destination planning.',
    sectionIntro: 'Specific standards in Section 2 – Medical Standards have been developed not on the basis of diagnosis, but on the basis of: (a) chief complaint, as stated by the patient/bystanders; (b) presenting problem as indicated by the patient/bystanders; and/or (c) immediately obvious primary survey critical findings, e.g. respiratory failure.\n\nParamedics should be aware of a patient\'s potential to deteriorate and prepare accordingly. Particular attention should be paid to the potential for compromises to airway, breathing or circulation, seizures, and/or emesis.\n\nIn conjunction with history gathering, paramedics shall determine provoking factors, quality, region/radiation/relieving factors, severity, and timing of the chief complaint or presenting problem.\n\nWhen providing patient care as per Section 2 – Medical Standards, a paramedic shall ensure that the patient simultaneously receives care in accordance with the ALS PCS.',
    standards: [
      {
        id: 'bls-abdominal-pain',
        title: 'Abdominal Pain (Non-Traumatic) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with abdominal pain that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'leaking or ruptured abdominal aortic aneurysm,',
                'ectopic pregnancy,',
                'other non-abdominal disorders that may present with abdominal pain, including:',
                { text: 'diabetic ketoacidosis, and', subItems: [
                  'pulmonary embolism,',
                ] },
                'perforated or obstructed hollow organs with or without peritonitis,',
                'acute pancreatitis,',
                'testicular torsion,',
                'pelvic infection, and',
                'strangulated hernia;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess the abdomen for,', subItems: [
                { text: 'pulsations,', subItems: [
                  'scars,',
                  'discolouration,',
                  'distention,',
                ] },
                { text: 'masses,', subItems: [
                  'guarding,',
                  'rigidity, and',
                  'tenderness;',
                ] },
              ] },
              'if a pulsatile mass is discovered, not initiate, or discontinue, further abdominal palpation;',
              'if abdominal aneurysm is suspected, palpate femoral pulses for weakness/absence; and',
              'observe for melena, hematemesis, or frank rectal bleeding ("hematochezia").',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-airway-obstruction',
        title: 'Airway Obstruction Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with an airway obstruction, the paramedic shall:',
            items: [
              'perform assessments and obstructed airway clearance maneuvers as per current Heart and Stroke Foundation of Canada Guidelines; and',
              'attempt to clear the airway using oropharyngeal/nasopharyngeal suction.',
            ],
          },
        ],
        guidelines: [
          'Consider the possibility of airway obstruction for patients who have smoke inhalation, anaphylaxis, epiglottitis, foreign body aspiration, or oropharyngeal malignancy.',
        ]
      },
      {
        id: 'bls-allergic-reaction',
        title: 'Allergic Reaction (Known or Suspected) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with an allergic reaction that is known or suspected, the paramedic shall:',
            items: [
              'consider potential life/limb/function threats, such as anaphylaxis;',
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'the site of allergic reaction, if applicable,',
                'lungs, for adventitious sounds through auscultation, and',
                'skin, for erythema, urticaria, and edema;',
              ] },
              { text: 'consider anaphylaxis if the patient presents with two or more body system manifestations as follows:', subItems: [
                { systemLabel: 'Respiratory:', subItems: ['Dyspnea, wheezing, stridor or hoarse voice'] },
                { systemLabel: 'Cardiovascular:', subItems: ['Tachycardia or hypotension/shock'] },
                { systemLabel: 'Neurological:', subItems: ['Dizziness, confusion, or loss of consciousness'] },
                { systemLabel: 'Gastrointestinal:', subItems: ['Nausea, vomiting, abdominal cramps, or diarrhea'] },
                { systemLabel: 'Dermatological/mucosal:', subItems: ['Facial, orolingual, or generalized swelling/flushing/urticaria;'] },
              ] },
              { text: 'in association with the body systems involvement in paragraph 3 above, consider historical findings as evidence of suspected anaphylaxis, as follows:', subItems: [
                'Difficulty swallowing/tightness in the throat',
                'Difficulty breathing/feeling of suffocation',
                'Fearfulness, anxiety, agitation, confusion, or feeling of doom',
                'Generalized itching',
                'History of any of the body system involvement listed in paragraph 3; and',
              ] },
              { text: 'prepare for potential problems, including,', subItems: [
                'cardiac arrest,',
                'airway obstruction,',
                'anaphylaxis,',
                'bronchospasm, and',
                'hypotension.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Common allergens include:',
          'Penicillin and other antibiotics in the penicillin family',
          'Latex',
          'Venom of bees, wasps, hornets',
          'Seafood - shrimp, crab, lobster, other shellfish',
          'Nuts, strawberries, melons, eggs, bananas',
          'Sulphites (food and wine preservatives)',
        ]
      },
      {
        id: 'bls-altered-loc',
        title: 'Altered Level of Consciousness Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a suspected acute altered level of consciousness, the paramedic shall:',
            items: [
              'attempt to determine a specific cause for the altered level of consciousness and provide further assessment and management as per the Standards;',
              'perform a secondary survey to assess the patient from head-to-toe;',
              'perform trauma assessments if trauma is obvious, suspected or cannot be ruled out;',
              'if unprotected airway, insert oropharyngeal airway/nasopharyngeal airway; and',
              'if patient is apneic or respirations are inadequate, ventilate the patient in accordance with the Respiratory Failure Standard.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-back-pain',
        title: 'Back Pain (Non-Traumatic) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with back pain that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'abdominal/thoracic aortic aneurysm,',
                'acute spinal nerve root(s) compression,',
                'intra-abdominal disease (e.g. pancreatitis; peptic ulcer), and',
                'possible occult injury (e.g. pathologic fracture); and',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'back, for abnormal appearance/findings,',
                'chest, as per Chest Pain (Non-Traumatic) Standard,',
                'abdomen, as per Abdominal Pain (Non-Traumatic) Standard,',
                'distal pulses, and',
                'extremities, for circulation, sensation, and movement.',
              ] },
            ],
          },
        ],
        guidelines: [
          'If a thoracic aneurysm is suspected, perform bilateral blood pressures.',
        ]
      },
      {
        id: 'bls-cardiac-arrest',
        title: 'Cardiac Arrest Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with cardiac arrest, the paramedic shall:',
            items: [
              'position the patient on a firm surface;',
              'initiate CPR (including defibrillation);',
              'establish a patent airway using authorized techniques;',
              'consider reversible causes of cardiac arrest and initiate further assessment and management as required by the Standards;',
              'minimize disruptions to CPR;',
              'continue cardiac arrest resuscitation measures until a TOR order is received as per the ALS PCS; and',
              { text: 'if the patient has a spontaneous return of circulation,', subItems: [
                'continue to ventilate if the patient remains apneic or respirations are inadequate,',
                'administer oxygen to attempt to maintain the patient\'s oxygen saturation 94-98%,',
                'in conjunction with the Patient Assessment Standard, obtain vital signs,',
                { text: 'at least every 15 minutes after the patient\'s return of spontaneous circulation for the first hour, and', subItems: [
                  'at a minimum every 30 minutes thereafter or if a change in patient status occurs,',
                ] },
                'continue cardiac monitoring, and',
                'resume CPR if cardiac arrest recurs.',
              ] },
            ],
          },
        ],
        guidelines: [
          'When two or more CPR-certified rescuers are available, attempt to switch chest compressors approximately every two minutes',
          'Have suction equipment readily available in preparation for emesis',
          'As per current Heart and Stroke Foundation of Canada Guidelines, use of mechanical CPR devices may be considered (if available) when limited rescuers are available, for prolonged CPR or in a moving ambulance',
          'End-tidal carbon dioxide (ETCO₂) monitoring may be considered if available',
          'In cases where CPR must be interrupted, such as when going down a flight of stairs, plan to reinitiate CPR as quickly as possible at a predetermined point.',
          'Cardiac Arrest in the Pregnant Patient When performing CPR on a pregnant patient with a uterine height at or above the umbilicus (approximately greater than 20 weeks gestation), have a second paramedic attempt to manually perform left uterine displacement.',
        ]
      },
      {
        id: 'bls-stroke',
        title: 'Cerebrovascular Accident (CVA, "Stroke") Standard',
        sections: [
          {
            heading: 'General Directive',
            preamble: 'In situations involving a patient with a cerebrovascular accident (CVA, "Stroke"), the paramedic shall:',
            items: [
              { text: 'consider other potentially serious conditions that may mimic a stroke, such as,', subItems: [
                'drug ingestion (e.g. cocaine),',
                'hypoglycemia,',
                'severe hypertension, hypertensive emergency, or',
                'central nervous system (CNS) infection (e.g. meningitis);',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'head/neck, for,',
                { text: 'facial symmetry,', subItems: [
                  'pupillary size, equality, and reactivity,',
                  'abnormal speech, and',
                  'presence of stiff neck,',
                ] },
                'central nervous system, for,',
                { text: 'abnormal motor function, e.g. hand grip strength, arm/leg movement/drift, and', subItems: [
                  'sensory loss, and',
                ] },
                'for incontinence of urine/stool;',
              ] },
              'ensure adequate support for the patient\'s body/limbs during patient movement and place extra padding and support beneath affected limbs;',
              { text: 'prepare for potential problems, including,', subItems: [
                'possible airway obstruction (if loss of tongue control, gag reflex),',
                'decreasing level of consciousness,',
                'seizures, and',
                'agitation, confusion, or combativeness; and',
              ] },
              { text: 'ventilate the patient if patient is apneic or respirations are inadequate,', subItems: [
                { text: 'if ETCO₂ monitoring is available,', subItems: [
                  'attempt to maintain ETCO₂ values of 35-45 mmHg,',
                  { text: 'notwithstanding paragraph 5(a)(i) above, if signs of cerebral herniation are present after measures to address hypoxemia and hypotension, hyperventilate the patient to attempt to maintain ETCO₂ values of 30-35 mmHg. Signs of cerebral herniation include a deteriorating GCS <9 with any of the following:', subItems: [
                    'dilated and unreactive pupils,',
                    'asymmetric pupillary response, or',
                    'a motor response that shows either unilateral or bilateral decorticate or decerebrate posturing, or',
                  ] },
                ] },
                { text: 'if ETCO₂ monitoring is unavailable, and measures to address hypoxemia and hypotension have been taken, and the patient shows signs of cerebral herniation as per paragraph 5(a)(ii) above, hyperventilate the patient as follows:', subItems: [
                  'Adult: approximately 20 breaths per minute,',
                  'Child: approximately 25 breaths per minute,',
                  'Infant <1 year old: approximately 30 breaths per minute.',
                ] },
              ] },
              { text: 'perform a secondary screen for LVO stroke using the Los Angeles Motor Scale (LAMS) for all probable stroke patients presenting within 24 hours of stroke symptom onset,', subItems: [
                'if LAMS is greater than or equal to 4 (≥4), classify the patient as CTAS 2,',
                'inform the receiving hospital whether "LVO Clinical Screen is positive or negative"',
                'Document LAMS screen for patients presenting with CVA/Stroke symptoms 0-24 hours from symptom onset.',
              ] },
            ],
          },
          {
            heading: 'Acute Stroke Bypass Protocol',
            items: [
              { text: 'assess the patient to determine if he/she has one or more of the symptoms consistent with the onset of an acute stroke, as follows:', subItems: [
                'Inappropriate words or mute,',
                'Slurred speech,',
                'Unilateral arm weakness or drift,',
                'Unilateral facial droop, or',
                'Unilateral leg weakness or drift;',
              ] },
              'if the patient meets the criteria listed in paragraph 1 of the Acute Stroke Bypass Protocol above, determine if the patient can be transported to a Designated Stroke Centre* within 6 hours of a clearly determined time of symptom onset or time the patient was last seen in his/her usual state of health;',
              { text: 'if the patient meets the criteria listed in paragraph 1 and paragraph 2 above, assess the patient to determine if he/she has any of the following contraindications:', subItems: [
                'CTAS 1 and/or an uncorrected airway, breathing or circulation issue',
                'Stroke symptoms resolved prior to paramedic arrival or assessment',
                'Blood Glucose Level <3 mmol/L **',
                'Seizure at the onset of symptoms or that is observed by the paramedic',
                'Glasgow Coma Scale <10',
                'Terminally ill or is in palliative care',
                'Duration of transport to the Designated Stroke Centre will exceed two hours;',
              ] },
              'if the patient does not meet any of the contraindications listed in paragraph 3 above, perform a secondary screen for a Large Vessel Occlusion (LVO) stroke using the Los Angeles Motor Scale (LAMS);',
              'inform the CACC/ACS of the LAMS score to assist in the determination of the closest or most appropriate*** Designated Stroke Centre; and',
              'if transport has been initiated to a Designated Stroke Centre and the patient\'s symptoms improve significantly or resolve during transport, continue transport to the Designated Stroke Centre.',
            ],
            notes: [
              'Note: In select regions, LVO Clinical Screen + patients, presenting within 6 hours of stroke symptom onset, may be redirected to the closest EVT centre.',
              'A Designated Stroke Centre includes a Regional Stroke Centre, District Stroke Centre or a Telestroke Centre regardless of EVT capability.',
              'If symptoms persist after correction of blood glucose level, the patient is not contraindicated as per paragraph 3(c) above.',
              'Most appropriate refers to a Designated Stroke Centre as defined by a PPS.',
            ]
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-chest-pain',
        title: 'Chest Pain (Non-Traumatic) Standard',
        sections: [
          {
            heading: 'General Directive',
            preamble: 'In situations involving a patient with chest pain that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'acute coronary syndrome/acute myocardial infarction (e.g. ST-segment elevation myocardial infarction [STEMI]),',
                'dissecting thoracic aorta,',
                'pneumothorax, tension pneumothorax/other respiratory disorders (e.g. pneumonia),',
                'pulmonary embolism, and',
                'pericarditis;',
              ] },
              'acquire a 12-lead electrocardiogram, in accordance with the ALS PCS; and',
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'chest, for',
                { text: 'subcutaneous emphysema,', subItems: [
                  'accessory muscle use,',
                  'urticaria,',
                  'indrawing,',
                ] },
                { text: 'shape,', subItems: [
                  'symmetry, and',
                  'tenderness;',
                ] },
                'lungs, for decreased air entry and adventitious sounds (e.g. wheezes, crackles), through auscultation,',
                'abdomen, as per the Abdominal Pain (Non-traumatic) Standard,',
                'neck, for tracheal position and jugular vein distension, and',
                'extremities, for leg/ankle edema.',
              ] },
            ],
          },
          {
            heading: 'STEMI Hospital Bypass Protocol',
            preamble: 'In situations in which the paramedic suspects that the patient is suffering from a STEMI, the paramedic shall:',
            items: [
              { text: 'assess the patient to determine if they meet all of the following indications:', subItems: [
                '≥18 years of age;',
                'experience chest pain or equivalent consistent with cardiac ischemia or myocardial infarction;',
                'the time from onset of the current episode of pain <12 hours; and',
                'the 12-lead electrocardiogram (ECG) indicates an acute myocardial infarction/STEMI, as follows:',
                { text: 'At least 2 mm ST-elevation in leads V1-V3 in at least two contiguous leads; AND/OR', subItems: [
                  'At least 1 mm ST-elevation in at least two other anatomically contiguous leads; OR',
                  '12-lead ECG computer interpretation of STEMI and paramedic agrees.',
                ] },
              ] },
              { text: 'if the patient meets the criteria listed in paragraph 1 above, assess the patient to determine if they have any of the following contraindications:', subItems: [
                'The patient is CTAS 1 and the paramedic is unable to secure the patient\'s airway or ventilate;',
                '12-lead ECG is consistent with a Left Bundle Branch Block (LBBB), ventricular paced rhythm, or any other STEMI imitator;',
                'Transport to a hospital capable of performing percutaneous coronary intervention (PCI) ≥60 minutes from patient contact;',
                'The patient is experiencing a complication requiring primary care paramedic (PCP) diversion, as follows:',
                { text: 'Moderate to severe respiratory distress or use of continuous positive airway pressure (CPAP);', subItems: [
                  'Hemodynamic instability (e.g. due to symptomatic arrhythmias or any ventricular arrhythmia) or symptomatic SBP <90 mmHg at any point; or',
                  'VSA without return of spontaneous circulation (ROSC).',
                ] },
                'The patient is experiencing a complication requiring ACP diversion, as follows:',
                { text: 'Ventilation inadequate despite assistance;', subItems: [
                  'Hemodynamic instability unresponsive to advanced care paramedic (ACP) treatment or not amenable to ACP management; or',
                  'VSA without ROSC.',
                ] },
              ] },
              'notwithstanding paragraphs 2(c), 2(d), and 2(e) above, attempt to determine if the interventional cardiology program at the PCI centre will still permit the transport to the PCI centre;',
              { text: 'if the patient does not meet any of the contraindications listed in paragraph 2 above OR the interventional cardiology program permits the transport to the PCI centre as per paragraph 3 above, inform the CACC/ACS of the need to transport to a PCI centre; provide the PCI centre the following information as soon as possible:', subItems: [
                'that the patient is a "STEMI patient";',
                'the patient\'s initials;',
                'the patient\'s age;',
                'the patient\'s sex;',
                'the paramedic\'s concerns regarding clinical stability;',
                'infarct territory and/or findings on the qualifying ECG;',
                'estimated time of arrival; and',
                'catchment area of the patient pickup.',
              ] },
              { text: 'upon arrival at the PCI centre, in addition to the requirements listed in the Transfer of Responsibility for Patient Care Standard, provide the following information to the PCI centre staff:', subItems: [
                'time of symptom onset;',
                'time of ROSC, if applicable;',
                'hemodynamic status;',
                'medications given and procedure;',
                'history of acute myocardial infarction/PCI/Coronary artery bypass graft, if applicable;',
                'a copy of the qualifying ECG; and',
                'a copy of the Ambulance Call Report in accordance with the Ontario Ambulance Documentation Standards.',
              ] },
            ],
            notes: [
              'Note: Once initiated, continue to follow the STEMI Hospital Bypass Protocol even if the ECG normalizes after the initial assessment.',
            ],
          },
        ],
        guidelines: [
          'Once a STEMI is confirmed, the paramedic should apply defibrillation pads due to the potential for lethal cardiac arrhythmias.',
          'If intravenous access is indicated and established as per the Advanced Life Support Patient Care Standards, then the left arm is the preferred site.',
          'If the ECG becomes STEMI-positive en route to a non-PCI destination, the patient should still be evaluated under this STEMI Hospital Bypass Protocol.',
          'If, in a rare circumstance, the PCI centre indicates that it cannot accept the patient (e.g. equipment failure, multiple STEMI patients), then the paramedic may consider transport to an alternative PCI centre as long as they still meet the STEMI Hospital Bypass Protocol.',
        ]
      },
      {
        id: 'bls-dysphagia',
        title: 'Dysphagia Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with dysphagia, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'anaphylaxis, and',
                'upper airway infections (e.g. epiglottitis);',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'head/neck, for',
                { text: 'drooling,', subItems: [
                  'hoarse voice or cough,',
                  'nasal flaring,',
                  'swelling or masses, and',
                ] },
                'tracheal deviation, and',
                'lungs, for adventitious sounds through auscultation;',
              ] },
              'notwithstanding paragraph 2 above, if epiglottitis is suspected, not open and inspect the airway;',
              'if epiglottitis is suspected and oxygen administration is indicated as per the Oxygen Therapy Standard, attempt to minimize agitation;',
              'position the patient sitting or semi-sitting; and',
              'prepare for potential problems, including complete airway obstruction.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-epistaxis',
        title: 'Epistaxis (Non-Traumatic) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with epistaxis that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              'consider potential life/limb/function threats, such as upper airway obstruction;',
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'for estimated blood loss (e.g. hemorrhage duration, rate of flow, presence of clots, quantity of blood-soaked materials at scene, quantity of blood vomited), and',
                'head/neck, for foreign bodies in nares, and headache;',
              ] },
              'attempt to control bleeding; and',
              { text: 'prepare for potential problems, including:', subItems: [
                'airway compromise, and',
                'hypotension.',
              ] },
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-excited-delirium',
        title: 'Excited Delirium Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with excited delirium, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'asphyxia,',
                'cardiopulmonary arrest, and',
                'dysrhythmias;',
              ] },
              'give particular attention to personal safety as per the General Measures Standard;',
              'if the patient is violent or potentially violent, refer to the Violent/Aggressive Patient Standard;',
              'recognize the need for police assistance in conjunction with the Police Notification Standard;',
              'provide patient care based on presenting signs and symptoms as per the Standards;',
              'recognize the potential need for advanced patient care as per the ALS PCS; and',
              'prepare for potential problems, including rapid deterioration.',
            ],
          },
        ],
        guidelines: [
          'Excited delirium is a state of impaired thinking and violent struggling induced by a variety of causes such as drug abuse, severe alcohol intoxication, and/or acute psychosis. These patients are at risk of sudden death. Symptoms of excited delirium include:',
          'Impaired thought processes, e.g. disorientation, acute paranoia, panic, or hallucinations',
          'Unexpected physical strength',
          'Significantly decreased sensitivity to pain',
          'Sweating, fever, heat intolerance, or, dry/hot skin with no sweating despite extreme agitation',
          'Sudden tranquility after frenzied activity',
        ]
      },
      {
        id: 'bls-extremity-pain',
        title: 'Extremity Pain (Non-Traumatic) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with extremity pain that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'acute spinal nerve root(s) compression,',
                'possible occult fracture,',
                'soft tissue and joint infections, and',
                'vascular occlusion (e.g. peripheral vessel, intra-abdominal vessel, intra- thoracic vessel);',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'the affected extremity compared with the unaffected extremity, with respect to,',
                { text: 'distal pulses,', subItems: [
                  'circulation, sensation, and movement,',
                  'skin colour, temperature, and condition, and',
                  'swelling, deformity, and tenderness; and',
                ] },
              ] },
              'attempt to keep movement to the affected extremity to a minimum and protect from further injury.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-fever',
        title: 'Fever Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a fever (known fever >38.5°C or chief complaint of fever), the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'overdose,',
                'sepsis,',
                'meningitis, and',
                'heat-related illness;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'lungs, for adventitious sounds through auscultation,',
                'skin, for,',
                { text: 'jaundice', subItems: [
                  'rash, and',
                  'signs of dehydration,',
                ] },
                'head/neck, for,',
                { text: 'photophobia,', subItems: [
                  'scleral jaundice,',
                  'stiff neck, and',
                  'headache,',
                ] },
                'abdomen, as per the Abdominal Pain (Non-Traumatic) Standard; and',
                'temperature',
              ] },
              'remove excess layers of clothing if required to promote passive cooling;',
              'not actively cool the patient, and',
              'prepare for potential problems, including seizures, if the patient is a febrile child or an adult in whom serious disorders are suspected (e.g. meningitis).',
            ],
          },
        ],
        guidelines: [
          'Consideration of sepsis is typically evidenced by all of the following:',
          'Presence of fever: >38.5°C',
          'Possible infection suspected, e.g. pneumonia, urinary tract infection, abdominal pain or distension, meningitis, cellulitis, septic arthritis, infected wound',
          { heading: 'Presence of any one of:', items: [
            'SBP <90',
            'Respiratory rate ≥22 breaths/minute, or intubated for respiratory support',
            'Acute confusion or reduced level of consciousness',
          ] },
          'If sepsis is suspected, report findings to receiving facility.',
        ]
      },
      {
        id: 'bls-headache',
        title: 'Headache (Non-Traumatic) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a headache that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'intracranial/intracerebral events (e.g. hemorrhage, thrombosis, tumour),',
                'central nervous system or other systemic infection,',
                'severe hypertension, and',
                'toxic event/exposure (e.g. carbon monoxide poisoning);',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'head/neck, for pupillary size, equality, and reactivity,',
                'central nervous system, for,',
                { text: 'abnormal motor function (e.g. hand grip strength, arm/leg movement/drift), and', subItems: [
                  'sensory loss; and',
                ] },
              ] },
              'prepare for potential problems, including seizures.',
            ],
          },
        ],
        guidelines: [
          'The following signs and symptoms can indicate a serious underlying disorder or cause:',
          'Sudden onset of severe headache with no previous medical history of headache',
          'Recent onset headache (days, weeks) with sudden worsening',
          'Change in pattern of usual headaches',
          { heading: 'Any of the above accompanied by one or more of the following:', items: [
            'Altered mental status',
            'Decrease in level of consciousness',
            'Neurologic deficits',
            'Obvious nuchal rigidity and fever or other symptoms of infection',
            'Pupillary abnormalities (inequality, sluggish/absent light reactivity)',
            'Visual disturbances',
          ] },
        ]
      },
      {
        id: 'bls-heat-illness',
        title: 'Heat-Related Illness Standard',
        sections: [
          {
            preamble: 'In situations involving a patient experiencing a heat-related illness, the paramedic shall:',
            items: [
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'heat stroke, and',
                'hypovolemic shock;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'central nervous system,',
                'mouth, for state of hydration,',
                'skin, for temperature, colour, condition, state of hydration,',
                'extremities, for circulation, sensation, and movement, and',
                'temperature;',
              ] },
              'move the patient to a cooler environment;',
              'remove heavy or excess layers of clothing;',
              'if available at scene or from bystanders, provide water or electrolyte-containing fluids in small quantities if the patient is conscious, cooperative, able to understand directions and is not nauseated or vomiting;',
              { text: 'if working assessment indicates heat exhaustion,', subItems: [
                'move the patient to the ambulance, and',
                'remove as much clothing as possible; and',
              ] },
              { text: 'if working assessment indicates heat stroke,', subItems: [
                'provide patient care as per paragraph 6 above,',
                'withhold oral fluids,',
                'cover the patient with wet sheets, and',
                'apply cold packs to the axillae, groin, neck and head.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Consider various heat-related illnesses in the setting of hot and/or humid outdoor or indoor conditions with chief complaint(s), presenting problems of:',
          'Heat syncope',
          'Heat cramps: severe cramping of large muscle groups',
          'Heat exhaustion: mild alterations in mental status, and non-specific complaints (headache, giddiness, nausea, vomiting, malaise), with excessive sweating in healthy adults; or hot, dry skin in the elderly',
          'Heat stroke: severely altered mental status, coma, seizures, hyperthermia ≥40°C',
          'Overdose of tricyclic anti-depressants, antihistamines and β-blockers, as well as cocaine, Ecstasy or amphetamine abuse may also lead to heat stroke.',
          'Monitor the patient to determine if cooling procedures should be discontinued, e.g. skin temperature feels normal to touch, generalized shivering develops, the patient\'s level of consciousness normalizes.',
        ]
      },
      {
        id: 'bls-hematemesis',
        title: 'Hematemesis/Hematochezia Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with hematemesis and/or frank rectal bleeding ("hematochezia"), the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'esophageal varices, and',
                'gastrointestinal disease;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'chest, if hemorrhage is oral, as per the Chest Pain (Non-Traumatic) Standard, and',
                'abdomen, as per the Abdominal Pain (Non-Traumatic) Standard;',
              ] },
              'estimate degree of blood loss (e.g. duration of hemorrhage, rate of flow, presence of clots, quantity of blood-soaked or blood-filled materials); and',
              'elicit further information regarding hemorrhage (e.g. type: coffee-grounds emesis, melena, hematochezia, etc.).',
            ],
          },
        ],
        guidelines: [
          'If hemoptysis is suspected, attempt to ascertain the origin. Lung tumours and other lung diseases are common causes of hemoptysis.',
        ]
      },
      {
        id: 'bls-nausea-vomiting',
        title: 'Nausea/Vomiting Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with nausea and/or vomiting, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'acute coronary syndrome/acute myocardial infarction (e.g. STEMI),',
                'anaphylaxis,',
                'increased intracranial pressure,',
                'toxicological emergencies,',
                'bowel obstructions,',
                'infection,',
                'acute pancreatitis,',
                'intra-abdominal emergencies, and',
                'uremia;',
              ] },
              'perform, at a minimum, a secondary survey to assess abdomen, as per Abdominal Pain (Non-Traumatic) Standard; and',
              'prepare for potential problems, including airway compromise.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-respiratory-failure',
        title: 'Respiratory Failure Standard',
        sections: [
          {
            preamble: 'In situations involving a patient in respiratory failure, the paramedic shall:',
            items: [
              'ventilate the patient as per current Heart and Stroke Foundation of Canada Guidelines;',
              'observe chest rise and auscultate lung fields to assess adequacy of ventilation (ventilation just sufficient to observe chest rise is adequate);',
              'minimize interruptions to ventilations; and',
              'continue assisted ventilations until patient\'s spontaneous respirations are adequate.',
            ],
          },
        ],
        guidelines: [
          'If using ETCO₂ monitoring, attempt to maintain ETCO₂ values of 35-45 mmHg unless indicated otherwise in the Standards. For COPD or asthma patients who have an initial ETCO₂ of >50 mmHg, attempt to maintain ETCO₂ between 50-60 mmHg.',
        ]
      },
      {
        id: 'bls-seizure',
        title: 'Seizure Standard',
        sections: [
          {
            preamble: 'In situations involving a patient in seizure (or post-ictal), the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats and/or underlying disorders, such as,', subItems: [
                'intracranial event,',
                'hypoglycemia,',
                'in pregnant patients or recent post-partum patients, eclampsia,',
                'in patients ≥50 years of age with new onset or recurrent seizures,',
                { text: 'brain tumour or other intracranial event (e.g. hemorrhage, thrombosis),', subItems: [
                  'cardiac dysrhythmias,',
                  'cardiovascular disease,',
                  'cerebrovascular disease, and',
                ] },
                'severe hypertension,',
                'in neonates,',
                { text: 'traumatic delivery,', subItems: [
                  'congenital disorders,',
                  'prematurity, and',
                  'hypoglycemia,',
                ] },
                'in young children febrile convulsions associated with infection,',
                'infection (e.g. central nervous system, meningitis),',
                'alcohol withdrawal (including delirium tremens)',
                'drug ingestion/withdrawal, and',
                'known seizure disorder;',
              ] },
              { text: 'if patient is in active seizure,', subItems: [
                'attempt to position the patient in the recovery position,',
                'attempt to protect the patient from injury, and',
                'observe for,',
                { text: 'eye deviation,', subItems: [
                  'incontinence,',
                  'parts of body affected, and',
                  'type of seizure (e.g. full body, focal);',
                ] },
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'for seizure-related occurrences, such as,',
                { text: 'bleeding from the mouth,', subItems: [
                  'incontinence,',
                  'secondary injuries resulting from the seizure, and',
                  'tongue injury; and',
                ] },
              ] },
              { text: 'prepare for potential problems, including,', subItems: [
                'airway compromise,',
                'recurrent seizures, and',
                'post-ictal combativeness or agitation.',
              ] },
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-shortness-of-breath',
        title: 'Shortness of Breath Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with shortness of breath, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'acute respiratory disorders, including,',
                { text: 'partial airway obstruction,', subItems: [
                  'asthma,',
                  'anaphylaxis,',
                  'aspiration,',
                ] },
                { text: 'inhalation of toxic gases or smoke,', subItems: [
                  'pneumothorax,',
                  'COPD, and',
                  'respiratory infections,',
                ] },
                'acute cardiovascular disorders, including,',
                { text: 'acute coronary syndrome/acute myocardial infarction (e.g. STEMI),', subItems: [
                  'congestive heart failure,',
                  'pulmonary edema, and',
                  'pulmonary embolism, and',
                ] },
                'other causes, including,',
                { text: 'cerebrovascular accident,', subItems: [
                  'toxicological effects, and',
                  'metabolic acidosis;',
                ] },
              ] },
              'assume that all hyperventilation is due to an underlying disorder;',
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'chest, as per Chest Pain (Non-Traumatic) Standard,',
                'head/neck, for',
                { text: 'cyanosis,', subItems: [
                  'nasal flaring,',
                  'excessive drooling,',
                  'tracheal deviation, and',
                ] },
                'jugular vein distension, and',
                'extremities, for',
                { text: 'cyanosis, and', subItems: [
                  'edema;',
                ] },
              ] },
              'if the patient is on home oxygen, elicit history regarding changes in use;',
              'position the patient in sitting or semi-sitting position; and',
              'ventilate the patient if patient is apneic or respirations are inadequate in accordance with the Respiratory Failure Standard.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-syncope',
        title: 'Syncope/Dizziness/Vertigo Standard',
        sections: [
          {
            preamble: 'In situations involving a patient who has had a syncopal episode, is dizzy, and/or is experiencing vertigo, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'hypoglycemia,',
                'cardiac dysrhythmias,',
                'CVA/Transient Ischemic Attack,',
                'hypovolemia,',
                'toxicological effects,',
                'heat-related illness,',
                'anemia,',
                'renal failure, and',
                'sepsis;',
              ] },
              'position the patient supine, or in the recovery position; and',
              { text: 'prepare for potential problems, including,', subItems: [
                'cardiac dysrhythmias,',
                'hypotension,',
                'seizures, and',
                'decreased level of consciousness.',
              ] },
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-toxicological',
        title: 'Toxicological Emergency Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a toxicological emergency (e.g. overdose, poisoning, and/or drug ingestion), the paramedic shall:',
            items: [
              'attempt to identify/determine agent(s), quantity, time and route of administration (absorption, inhalation, ingestion or injection);',
              'in cases in which the agent(s) is believed to be a prescription medication, attempt to identify date of prescription and compliance or appropriateness of remainder of prescription amount;',
              'if the patient is unconscious or level of consciousness decreased, refer to the Altered Level of Consciousness Standard; and',
              { text: 'prepare for potential problems, including,', subItems: [
                'cardiac arrest,',
                'airway obstruction,',
                'respiratory arrest,',
                'respiratory distress,',
                'altered or changing level of consciousness,',
                'sudden violent behaviour,',
                'hyperthermia,',
                'seizures, and',
                'emesis.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Where available, attempt to refer to a compound or substance\'s Material Safety Data Sheet',
          'Attempts to refer to poison control resources should be made in consultation with the BHP and not delay patient care/transport',
          'Assume carbon monoxide poisoning in setting of exposure to a fuel burning device (e.g. automobile engine exhaust, heating devices) in an enclosed area where the patient, or multiple patients, exhibit the following symptoms/signs without other obvious cause:',
          'Altered mental status',
          'Cardiac dysrhythmias',
          'Emesis',
          'Headache',
          'Light-headedness',
          'Nausea',
          'Seizures',
          'Syncope',
          'Weakness',
          'VSA',
        ]
      },
      {
        id: 'bls-vaginal-bleeding',
        title: 'Vaginal Bleeding Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with vaginal bleeding, the paramedic shall:',
            items: [
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'in post-menopausal women, tumours,',
                'first trimester complications, including,',
                { text: 'spontaneous abortion,', subItems: [
                  'ectopic pregnancy, and',
                  'gestational trophoblastic disease, and',
                ] },
                'second and third trimester complications, including,',
                { text: 'spontaneous abortion,', subItems: [
                  'placental abruption,',
                  'placenta previa, and',
                  'ruptured uterus;',
                ] },
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'abdomen, as per Abdominal Pain (Non-Traumatic) Standard, and',
                'if the patient is pregnant,',
                { text: 'note uterine height and palpate for contractions, and', subItems: [
                  'note fetal movements;',
                ] },
              ] },
              { text: 'if the patient is pregnant, attempt to determine,', subItems: [
                'if bleeding is painless or associated with abdominal pain/cramping, and',
                'number of prior episodes and causes, if known;',
              ] },
              { text: 'assess bleeding characteristics; attempt to determine,', subItems: [
                'blood loss,',
                'fetal parts,',
                'other tissues, and',
                'presence of clots;',
              ] },
              { text: 'if bleeding is profuse,', subItems: [
                'place (or have the patient place) an abdominal pad under the perineum and replace pads as required, and',
                'document number of pads used on the Ambulance Call Report; and',
              ] },
              'prepare for expected problems, including, shock, if bleeding is profuse.',
            ],
          },
        ],
        guidelines: [
          'Refer to the Sexual Assault (Reported) Standard if vaginal bleeding is suspected to be due to assault.',
          'To assist with estimating blood loss, a soaked normal sized pad or tampon can hold approximately five mL of blood. Normal blood loss during menstruation is 10-35 mL.',
        ]
      },
      {
        id: 'bls-visual-disturbance',
        title: 'Visual Disturbance Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with acute visual disturbances (including generalized eye pain) that is believed to be of a non-traumatic origin, the paramedic shall:',
            items: [
              { text: 'consider threats to life/limb/function, such as,', subItems: [
                'intracranial, intracerebral or retinal hemorrhage/thrombosis, and',
                'acute glaucoma;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'eyes, for,',
                { text: 'pupillary size, equality and reactivity,', subItems: [
                  'abnormal movements,',
                  'positioning,',
                  'redness,',
                ] },
                { text: 'swelling,', subItems: [
                  'tearing, and',
                  'presence of contact lenses,',
                ] },
                'eye-lids, for ptosis, and',
                'vision, for',
                { text: 'distortion/diplopia,', subItems: [
                  'loss, and',
                  'visual acuity; and',
                ] },
              ] },
              { text: 'prepare for potential problems, including,', subItems: [
                'alterations in level of consciousness,',
                'neurological deficits, and',
                'emesis.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Consider patching the patient\'s eyes for patient comfort and to minimize movement.',
        ]
      },
    ]
  },

  'bls-trauma': {
    lead: 'Trauma-focused standards emphasizing life threats, mechanism, and destination strategy.',
    sectionIntro: 'Specific standards in Section 3 – Trauma Standards have been developed on the basis of the type of injury.\n\nParamedics should be aware of a patient\'s potential to deteriorate and prepare accordingly. Particular attention should be paid to the potential for problems related to concurrent conditions, compromises to airway, breathing or circulation, neurovascular compromise, seizures, shock, alterations in mental status and/or emesis.\n\nWhen providing care as per Section 3 – Trauma Standards, a paramedic shall ensure that the patient simultaneously receives care in accordance with the ALS PCS.',
    standards: [
      {
        id: 'bls-general-trauma',
        title: 'General Trauma Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a traumatic injury, the paramedic shall:',
            items: [
              'if indicated by severity of patient injury or mechanism of injury, advise the patient to remain still;',
              'perform SMR if indicated by the Spinal Motion Restriction (SMR) Standard, prior to extrication;',
              { text: 'perform extrication if it is safe to do so and,', subItems: [
                'scene survey identifies condition(s) which may immediately endanger the patient, or',
                'primary survey identifies condition(s) requiring immediate interventions which cannot be performed inside the area in which the patient is located;',
              ] },
              'perform a rapid trauma survey immediately after completion of the primary survey, unless indicated otherwise in the Standards;',
              'attempt to estimate blood loss (i.e. hemorrhage duration, rate of flow, presence of clots, quantity of blood-soaked materials, quantity of blood vomited);',
              { text: 'specific to impaled objects, make no attempt to remove; stabilize the object as found using layers of bulky dressings/bandages, unless otherwise specified by the Standards, or the object is,', subItems: [
                'compromising the airway, or',
                'interfering with CPR in a cardiac arrest patient after attempts to change hand position have been made;',
              ] },
              'if the stabilized impaled object will not fit into the ambulance, attempt to shorten the object or request assistance from other allied emergency services;',
              { text: 'assess the injury site, when appropriate, and,', subItems: [
                'assess for:',
                { text: 'contusions/colour/cyanosis/contamination,', subItems: [
                  'lacerations,',
                  'abrasions/asymmetrical motion/abdominal breathing (diaphragmatic),',
                  'penetrations/punctures/protruding objects or organs,',
                ] },
                { text: 'swelling/sucking wounds/subcutaneous emphysema, and', subItems: [
                  'distension/deformity/dried blood/diaphoresis, and',
                ] },
                'palpate for,',
                { text: 'tenderness,', subItems: [
                  'instability,',
                  'crepitus,',
                  'swelling/subcutaneous emphysema, and',
                ] },
                'deformity;',
              ] },
              'for obvious or suspected major/multiple trauma, perform a complete secondary survey of all body systems (including auscultation);',
              { text: 'if history, mechanism of injury and scene observations indicate an isolated injury, assess at a minimum,', subItems: [
                'the injury site/body system, and',
                'other body parts/systems likely to be injured by considering potentially associated life/limb/function threats (as indicated by the Standards and otherwise) as well as possible secondary injuries sustained; and',
              ] },
              'remove any clothing or jewelry that may compromise the injury site.',
            ],
          },
        ],
        guidelines: [
          { heading: 'Splinting', items: [
            'If the injury site is dressed or splinted before paramedic arrival, use judgement when deciding to remove the dressing or splint. If the site is correctly managed as per the Standards, leave the dressing or splint as found.',
            'Splinting priorities are:',
            'Spine (neck, thoraco-lumbar, head)',
            'Pelvis',
            'Femurs',
            'Lower legs',
            'Upper limbs',
          ] },
          { heading: 'Trauma and the Pregnant Patient', items: [
            'In pregnant patients, trauma is most often associated with domestic violence.',
            'In pregnant patients, signs of shock may not be obvious until shock is well advanced.',
            'Hemorrhagic shock and associated fetal hypoxemia are the major causes of trauma related maternal death and fetal death respectively.',
            'A pregnant patient\'s enlarged uterus is more susceptible to injury and hemorrhage.',
            'Blunt trauma may result in premature labour, spontaneous abortion, placental abruption, ruptured diaphragm, liver, spleen, or uterine rupture.',
            'Placental abruption and subsequent stillbirth can occur within hours of even minor blunt trauma if acceleration/deceleration forces are involved; these patients may have no evidence of abdominal trauma on examination; maintain a high index of suspicion for occult internal injury.',
            'For blunt trauma to the abdomen, observe for abdominal/uterine enlargement.',
          ] },
        ]
      },
      {
        id: 'bls-amputation',
        title: 'Amputation/Avulsion Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a complete or partial amputation or avulsion, the paramedic shall:',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'hemorrhagic shock,',
                'loss of limb, and',
                'loss of function;',
              ] },
              { text: 'if patient has a partial amputation or avulsion,', subItems: [
                'assess the injury site for circulation, sensation and movement, and',
                'assess distal pulses, circulation, sensation and movement;',
              ] },
              { text: 'with respect to the injury site,', subItems: [
                'control hemorrhage as per the Soft Tissue Injury Standard,',
                'cleanse wound of gross surface contamination,',
                'if partial amputation or avulsion, place remaining tissue or skin bridge in as near-normal anatomical position as possible,',
                'if complete amputation, cover the stump with a moist, sterile pressure dressing, followed by a dry dressing, while taking care not to constrict or twist remaining tissue,',
                'immobilize affected extremity, and',
                'if possible, elevate; and',
              ] },
              { text: 'with respect to the amputated/avulsed part,', subItems: [
                'if located prior to ambulance transport,',
                { text: 'preserve all amputated tissue,', subItems: [
                  'if the part is grossly contaminated, gently rinse with saline,',
                  'wrap or cover the exposed end with moist, sterile dressing, and',
                  'place the part in a suitable container/plastic (water-tight if possible) bag and immerse in cold water, if available, or',
                ] },
                'if not able to locate part prior to ambulance transport,',
                { text: 'attempt to engage others at scene (e.g. allied agencies, bystanders) to look for the amputated/avulsed part and advise them to have it transported to receiving facility if found, and', subItems: [
                  'not delay transport.',
                ] },
              ] },
            ],
          },
        ],
        guidelines: [
          'Recall that any patient with an amputation proximal to wrist or ankle should be evaluated under the Field Trauma Triage Standard.',
        ]
      },
      {
        id: 'bls-blunt-penetrating',
        title: 'Blunt/Penetrating Injury Standard',
        children: [
          {
            id: 'bls-blunt-abdomen',
            title: 'Abdominal/Pelvic Injury',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'rupture, perforation, laceration, or hemorrhage of organs and/or vessels in the abdomen and potentially in the thorax or pelvis, and',
                'spinal cord injury,',
              ] },
              { text: 'if the patient has evisceration of intestines,', subItems: [
                'make no attempt to replace intestines back into the abdomen, and',
                'cover eviscerated intestines using moist, sterile large, bulky dressings; and',
              ] },
              { text: 'if the patient has a pelvic fracture,', subItems: [
                'attempt to stabilize the clinically unstable pelvis with a circumferential sheet wrap or a commercial device,',
                'secure the patient to a spinal board or adjustable break-away stretcher,',
                'avoid placing spinal immobilization or stretcher straps directly over the pelvic area, and',
                'secure and immobilize lower limbs to prevent additional pelvic injury.',
              ] },
            ],
            guidelines: []
          },
          {
            id: 'bls-bite',
            title: 'Bite Injury',
            items: [
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'injuries to underlying organs, vessels, bone, and',
                'specific to snake bites,',
                { text: 'anaphylaxis,', subItems: [
                  'shock,',
                  'central nervous system toxicity, and',
                  'local tissue necrosis;',
                ] },
              ] },
              { text: 'attempt to determine,', subItems: [
                'source of bite and owner, if applicable, and',
                'immunization and communicable disease status of patient and bite source;',
              ] },
              'if patient is stable, irrigate bites for up to five minutes; and',
              { text: 'if envenomation is known or suspected,', subItems: [
                'position the patient supine,',
                'immobilize the bite area at or slightly below heart level, and',
                'not apply cold packs.',
              ] },
            ],
            guidelines: [
              'Recognize the potential for bacterial contaminations or disease transmission (e.g. rabies, Hepatitis B, HIV) through bites.',
            ]
          },
          {
            id: 'bls-blunt-chest',
            title: 'Chest Injury',
            items: [
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'tension pneumothorax,',
                'hemothorax,',
                'cardiac tamponade,',
                'myocardial contusion,',
                'pulmonary contusion,',
                'spinal cord injury, and',
                'flail chest;',
              ] },
              'auscultate the patient\'s lungs for air entry and adventitious sounds;',
              { text: 'if the patient has a penetrating chest injury,', subItems: [
                'assess for,',
                { text: 'entry and exit wounds,', subItems: [
                  'tracheal deviation,',
                  'jugular vein distension, and',
                  'airway and/or vascular penetration (e.g. frothy/foamy hemoptysis sucking wounds);',
                ] },
              ] },
              { text: 'if the patient has an open or sucking chest wound,', subItems: [
                'seal wound with a commercial occlusive dressing with one way valve; if not possible, utilize an occlusive dressing taped on three sides only,',
                'apply dressing large enough to cover entire wound and several centimetres beyond the edges of the wound,',
                'monitor for development of tension pneumothorax, and',
                'if tension pneumothorax becomes obvious or suspected (i.e. rapid deterioration in cardiorespiratory status), release occlusive dressing and/or replace;',
              ] },
              'for patients who have a suspected pneumothorax and require ventilations, ventilate with a lower tidal volume and rate of delivery to prevent exacerbation of increasing intrathoracic pressure;',
              'if the patient is conscious and SMR is not indicated as per the Spinal Motion Restriction (SMR) Standard, position the patient sitting or semi-sitting;',
              { text: 'if the patient has a chest injury, prepare for potential problems, including,', subItems: [
                'tension pneumothorax,',
                'cardiac tamponade,',
                'cardiac dysrhythmias, and',
                'hemoptysis.',
              ] },
            ],
            guidelines: []
          },
          {
            id: 'bls-blunt-eye',
            title: 'Eye Injury',
            items: [
              'assume threats to vision;',
              'assess patient as per the Head Injury subsection below;',
              'assess eye as per Visual Disturbance Standard;',
              'notwithstanding paragraph 3 above, leave eyelids shut if swollen shut;',
              'if active bleeding, control bleeding using the minimum pressure required;',
              'if obvious or suspected rupture or puncture of the globe avoid manipulation, palpation, irrigation, direct pressure, and application of cold packs;',
              'cover the eye with a dressing;',
              'if injury/pain is severe in the affected eye, cover both eyes;',
              { text: 'notwithstanding paragraphs 7 and 8 above, if the eye is extruded (avulsed),', subItems: [
                'make no attempt to replace it inside the socket, and',
                'cover the eye with a moist, sterile dressing and protect/stabilize as if an impaled object;',
              ] },
              'advise the patient to keep eye movement to a minimum; and',
              'transport the patient supine, with head elevated approximately 30 degrees.',
            ],
            guidelines: []
          },
          {
            id: 'bls-face-nose',
            title: 'Face/Nose Injury',
            items: [
              'consider potential concurrent head, C-spine injuries;',
              'assess as per the Head Injury subsection below;',
              'if nose injury is obvious or suspected, assess the patient as per the Epistaxis (Non-traumatic) Standard;',
              'apply a cold pack to the injury site;',
              'if the patient is conscious and SMR is not indicated as per the Spinal Motion Restriction (SMR) Standard, position the patient semi-sitting and leaning forward to assist draining and encourage the patient to expectorate blood, as required;',
              'if the patient is on a spinal board or adjustable break-away stretcher, elevate the head 30 degrees; and',
              { text: 'prepare for potential problems, including,', subItems: [
                'airway obstruction if severe injury and/or massive or uncontrolled oral hemorrhage, and',
                'epistaxis.',
              ] },
            ],
            guidelines: [
              'If the patient is alert and stable, replace a completely intact, avulsed tooth in the socket and have the patient bite down to stabilize',
              'If the tooth cannot be replaced, place it in saline or milk',
            ]
          },
          {
            id: 'bls-blunt-head',
            title: 'Head Injury',
            items: [
              { text: 'consider potential life/limb/function threats, such as,', subItems: [
                'intracranial and/or intracerebral hemorrhage,',
                'neck/spine injuries,',
                'facial/skull fractures, and',
                'concussion;',
              ] },
              { text: 'observe for,', subItems: [
                'fluid from ears/nose, e.g. cerebrospinal fluid,',
                'mastoid bruising,',
                'abnormal posturing,',
                'periorbital ecchymosis,',
                'agitation or fluctuating behaviour,',
                'urinary/fecal incontinence, and',
                'emesis;',
              ] },
              { text: 'ventilate the patient if patient is apneic or respirations are inadequate,', subItems: [
                { text: 'if ETCO₂ monitoring is available,', subItems: [
                  'attempt to maintain ETCO₂ values of 35-45 mmHg,',
                  { text: 'notwithstanding paragraph 3(a)(i) above, if signs of cerebral herniation are present after measures to address hypoxemia and hypotension, hyperventilate the patient to attempt to maintain ETCO₂ values of 30-35 mmHg. Signs of cerebral herniation include a deteriorating GCS <9 with any of the following:', subItems: [
                    'dilated and unreactive pupils,',
                    'asymmetric pupillary response, or',
                    'a motor response that shows either unilateral or bilateral decorticate or decerebrate posturing, or',
                  ] },
                ] },
                { text: 'if ETCO₂ monitoring is unavailable, and measures to address hypoxemia and hypotension have been taken, and the patient shows signs of cerebral herniation as per paragraph 3(a)(ii) above, hyperventilate the patient as follows:', subItems: [
                  'Adult: approximately 20 breaths per minute,',
                  'Child: approximately 25 breaths per minute,',
                  'Infant <1 year old: approximately 30 breaths per minute.',
                ] },
              ] },
              'if protruding brain tissue is present, cover with non-adherent material (e.g. moist, sterile dressing; plastic wrap);',
              'if cerebrospinal fluid leak is suspected, apply a loose, sterile dressing over the source opening;',
              'if the patient is conscious and SMR is not indicated as per the Spinal Motion Restriction (SMR) Standard, position the patient sitting or semi-sitting;',
              'if the patient is on a spinal board or adjustable break-away stretcher, elevate the head 30 degrees; and',
              { text: 'prepare for potential problems, including,', subItems: [
                'respiratory distress/arrest,',
                'seizures,',
                'decreasing level of consciousness, and',
                'agitation or combativeness.',
              ] },
            ],
            guidelines: [
              'Patients with suspected concussions require transport for further assessment.',
            ]
          },
          {
            id: 'bls-blunt-spine',
            title: 'Neck/Back Injury',
            items: [
              'if the patient has a penetrating neck injury, assume vascular and airway lacerations/tears;',
              'auscultate the patient\'s lungs for decreased air entry and adventitious sounds;',
              { text: 'observe for,', subItems: [
                'diaphragmatic breathing,',
                'neurological deficits,',
                'priapism, and',
                'urinary/fecal incontinence/retention;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'for airway and/or vascular penetration (e.g. frothy/foamy hemoptysis),',
                'lungs, for decreased air entry and adventitious sounds through auscultation,',
                'head/neck, for, jugular vein distension; and tracheal deviation, and',
                'chest, for subcutaneous emphysema; and',
              ] },
              { text: 'if the patient has a penetrating wound,', subItems: [
                'assess for entry and exit wounds,',
                'apply pressure lateral to, but not directly over the airway, and',
                'apply occlusive dressings to wounds; use non-circumferential bandaging.',
              ] },
            ],
            guidelines: [
              'The attending paramedic should sit within the patient\'s view when possible, so the patient does not attempt to turn his/her head.',
            ]
          },
        ]
      },
      {
        id: 'bls-burns',
        title: 'Burns (Thermal) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a thermal burn, the paramedic shall:',
            items: [
              'if the patient is in a smoke/fume filled environment, request assistance from fire personnel and ensure that the patient is moved as quickly as possible to a fresh air zone when safe to do so;',
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'airway burns,',
                'asphyxia (smoke inhalation),',
                'carbon monoxide/cyanide poisoning, and',
                'shock;',
              ] },
              { text: 'attempt to determine,', subItems: [
                'source of burn,',
                'if burn due to fire,',
                { text: 'whether the fire occurred in an enclosed space, and', subItems: [
                  'whether the patient was unconscious or lost consciousness during exposure to fire/fumes/smoke;',
                ] },
              ] },
              'stop the burning process;',
              'when attempting to remove clothing from injury site, cut around clothing that is adherent to skin;',
              { text: 'perform, at a minimum, a secondary survey burn assessments, as follows:', subItems: [
                'estimate severity to include,',
                { text: 'area burned (e.g. location, circumferential),', subItems: [
                  'burn depth (degree), and',
                  'percentage of body surface area burned,',
                ] },
              ] },
              'for burn sites estimated to involve <15% of body surface area, cool burns and limit cooling to <30 minutes to prevent hypothermia;',
              'cover all 1st degree burns with moist sterile dressing and then cover with dry sheet or blanket;',
              'cover all 2nd degree burns estimated to involve <15% of body surface area with moist, sterile dressing, and dry sheet or blanket;',
              'cover all 2nd degree burns estimated to involve ≥15% of body surface area with dry, sterile dressing or sheet;',
              'if remoistening of the dressing is required to continue to cool the burn, remove the dry sheet or blanket and remoisten the previously applied sterile dressing;',
              'if shivering or hypotension develops, discontinue cooling efforts;',
              'cover all 3rd degree burns with dry, sterile dressing or sheet;',
              'if dressing digits, dress digits individually;',
              'leave blisters intact;',
              'keep the patient warm; and',
              { text: 'prepare for expected problems, including,', subItems: [
                'airway obstruction,',
                'if airway burns,',
                { text: 'bronchospasm, and', subItems: [
                  'orolingual/laryngeal edema,',
                ] },
                'respiratory distress/arrest, and',
                'agitation or combativeness.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Utilize the Rule of Nines to estimate percentage of body surface burned (or the Modified Rule of Nines for pediatrics)',
          'assess distal neurovascular status in burned extremities,',
          'assess for signs of smoke inhalation and upper airway injury,',
          'Signs of smoke inhalation and upper airway injury include decreased air entry, burns to lips or mouth, carbon particles in saliva or sputum, cough, drooling,',
          'stridor or hoarseness, facial burns, burned or singed nasal hair or eyebrows, or shortness of breath, shallow respirations, audible wheezes, or tachypnea.',
          'if burns involve an eye, assess eye as per Visual Disturbance Standard; and',
          'notwithstanding paragraph 6(d) above, if burns involve an eye and eye is swollen shut, leave eye shut;',
          'If administering oxygen as per the Oxygen Therapy Standard, in case of facial burns, gauze pads may be placed under the edges of the oxygen mask to decrease pain and irritation',
          'Carbon Monoxide (CO) poisoning and cyanide toxicity are potential concerns for any incident involving combustible materials. Paramedics should administer high concentration oxygen to known or suspected cases as per the Oxygen Therapy Standard.',
        ]
      },
      {
        id: 'bls-cold-injury',
        title: 'Cold Injury Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a cold injury, the paramedic shall:',
            items: [
              'remove the patient from the cold as soon as it is safe to do so after completing the primary survey; if the patient is trapped, prevent additional heat loss (e.g. cover with a blanket or put a blanket between the patient and ground);',
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'severe hypothermia,',
                'severe frostbite, and',
                'underlying disorders/precipitating factors (e.g. alcohol/drug ingestion, hypoglycemia, trauma);',
              ] },
              { text: 'attempt to determine,', subItems: [
                'duration of exposure, and',
                'type of exposure;',
              ] },
              { text: 'with respect to secondary survey,', subItems: [
                'only expose areas that are being examined; cover the area as soon as assessment is completed,',
                'if hypothermia is known or suspected, attempt to determine the severity of hypothermia, and',
                'if frostbite is known or suspected, attempt to determine the severity of frostbite (e.g. mild blanching of skin [frostnip]; skin waxy/white, supple [superficial frostbite]; skin cold, hard and wooden [deep frostbite]);',
              ] },
              'attempt to remove wet or constrictive clothing and jewelry; if clothing or jewelry is frozen to the skin, leave until thawing occurs;',
              { text: 'for mild to moderate hypothermia, (i.e. if shivering is present),', subItems: [
                'wrap the patient\'s body/affected parts in a blanket or foil rescue blanket, and',
                'provide external re-warming, as available (e.g. hot packs, hot water bottles) to axillae, groin, neck and head;',
              ] },
              { text: 'for severe hypothermia (i.e. no shivering present, unconscious patient with cold, stiff limbs, slow/absent pulse and respirations and no other signs of "obvious" death),', subItems: [
                'wrap the patient\'s body/affected parts in a blanket or foil rescue blanket, and',
                'when suction is required, do not perform vigorous suctioning or airway manipulation as it may trigger ventricular fibrillation; and',
              ] },
              { text: 'for frostbite,', subItems: [
                'wrap the patient\'s body/affected parts in a blanket or foil rescue blanket, cover and protect the part,',
                'not rub or massage the skin,',
                'leave blisters intact, and',
                'if dressing digits, dress digits separately.',
              ] },
            ],
          },
        ],
        guidelines: [
          'For patients with known or suspected hypothermia, pulse and respirations checks should be performed for up to ten seconds.',
          'The presence or absence of shivering is an important indicator of severity of hypothermia. If shivering is minimal or absent and level of consciousness is decreased or mental status is markedly altered, assume core temperature is below 32oC.',
          'SpO₂ reading may be unobtainable or inaccurate due to poor/reduced peripheral circulation in the cold extremities.',
        ]
      },
      {
        id: 'bls-electrocution',
        title: 'Electrocution/Electrical Injury Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with an electrical injury, the paramedic shall:',
            items: [
              'make no attempt to touch a potential energized source or a patient who is still in contact with a potential energized source;',
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'cardiopulmonary arrest,',
                'dysrhythmias,',
                'extremity neurovascular compromise,',
                'multiple and/or severe trauma,',
                'seizures, and',
                'significant internal tissue damage;',
              ] },
              { text: 'attempt to determine,', subItems: [
                'type of current, and',
                'voltage;',
              ] },
              { text: 'assess for signs of significant electrical injury, including,', subItems: [
                'burns,',
                'cold/mottled/pulseless extremities,',
                'dysrhythmias,',
                'entry/exit wounds,',
                'muscle spasms,',
                'neurologic impairment, and',
                'shallow/irregular respirations;',
              ] },
              're-assess distal neurovascular status in the affected extremity approximately every 10 minutes if status was compromised on initial assessment; and',
              { text: 'prepare for potential problems, including,', subItems: [
                'dysrhythmias, and',
                'extremity neurovascular compromise.',
              ] },
            ],
          },
        ],
        guidelines: [
          'If there are multiple patients as a result of a lightning strike, focus efforts on those who are VSA, due to his/her high potential for resuscitation.',
        ]
      },
      {
        id: 'bls-extremity-injury',
        title: 'Extremity Injury Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with an extremity injury, the paramedic shall:',
            items: [
              { text: 'splint injured extremities, as follows:', subItems: [
                'assess distal circulation, sensation, and movement before and after splinting,',
                'splint joint injuries as found,',
                'notwithstanding paragraph 1(b) above, if the distal pulse is absent or the fracture is severely angulated, apply gentle traction; if resistance or severe pain is encountered, splint as found,',
                'if open or closed femur fractures, splint with traction splint unless limb is partially amputated,',
                'if extremity injury affects a joint, immobilize above and below the injury site,',
                'if adequate circulation/sensation is absent after splinting and re- manipulation is possible, gently re-manipulate the extremity to restore neurovascular status,',
                'if it is practical to do so, elevate the affected extremity, and',
                'consider application of a cold pack over the affected extremity;',
              ] },
              { text: 'in cases of open fractures,', subItems: [
                'irrigate with saline or sterile water if gross contamination, and',
                'cover ends with moist, sterile dressings and/or padding; and',
              ] },
              're-assess distal neurovascular status in the affected extremity approximately every 10 minutes if status was compromised on initial assessment.',
            ],
          },
        ],
        guidelines: [
          'With respect to children: if splints do not fit, splint body parts together (e.g. arm-to-trunk, leg-to-leg) and pad in-between.',
          'With respect to fractured femur or tibia: Stabilize by securing it to the uninjured leg prior to transfer to a spinal board or adjustable break-away stretcher when utilized. If log-rolling, log roll onto the uninjured side, if possible.',
        ]
      },
      {
        id: 'bls-foreign-bodies',
        title: 'Foreign Bodies (Eye/Ear/Nose) Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with a foreign body in his/her eye, ear or nose, the paramedic shall:',
            items: [
              'advise the patient not to attempt removal of the foreign body or discontinue attempts;',
              'inspect the affected area for visible signs of foreign body, injury, bleeding and discharge;',
              { text: 'if the foreign body is in the eye,', subItems: [
                'assess eye as per the Eye Injury subsection in the Blunt/Penetrating Injury Standard, and',
                'if penetration of the globe is not suspected, flush the affected eye;',
              ] },
              { text: 'if the foreign body is in the ear,', subItems: [
                'consider the potential for a perforated ear drum if a blunt/penetrating object was inserted, and',
                'leave the object in place and support/cover; and',
              ] },
              'if the foreign body is in the nose, leave the object in place.',
            ],
          },
        ],
        guidelines: [
          'For foreign body on the surface of the eye, attempt manual removal if the object is not on the cornea and is visible, accessible and easily removed, e.g. using a wet cotton-tipped swab or gauze.',
        ]
      },
      {
        id: 'bls-hazmat',
        title: 'Hazardous Materials Injury Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with exposure to a hazardous material, the paramedic shall:',
            items: [
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'if chemical in eye, vision loss,',
                'burns, and',
                'systemic toxicity secondary to chemical absorption through the skin;',
              ] },
              'attempt to determine the type and concentration of hazardous material, and duration of exposure;',
              'attempt to remove any contaminated clothing or jewelry;',
              'attempt decontamination prior to departing scene;',
              { text: 'if chemical injury to the eye,', subItems: [
                'assess the eye as per the Visual Disturbance Standard, and',
                'advise patient to remove contact lens if lens is readily removable;',
              ] },
              'if chemical injury to extremity, assess distal neurovascular status in affected extremity;',
              'brush off or manually remove solid, powdered hazardous materials;',
              'attempt to follow first aid and decontamination procedures outlined in the Transport Canada Emergency Response Guidebook;',
              'irrigate exposure site using large volumes of cool, not cold water;',
              'notwithstanding paragraph 9 above, not irrigate if chemical known to be water-reactive;',
              'if irrigating, contain rinse water, if possible;',
              'if an alkali burn is known or suspected, irrigate for a minimum of 20 minutes at scene if patient is stable, and attempt to continue irrigation en route;',
              'for a known acid burn, irrigate for a minimum of 10 minutes at scene if patient is stable;',
              'for unknown chemical exposure, irrigate for a minimum of 20 minutes at scene if patient is stable;',
              { text: 'with respect to eye irrigation,', subItems: [
                'attempt to utilize eye wash station/equipment if available at scene,',
                'advise patient not to rub eye(s),',
                'position the patient with his/her affected side down if one eye is affected or supine if both eyes are affected,',
                'manually open eyelids if required, and',
                'attempt to irrigate away from tear duct(s);',
              ] },
              'provide burn care as per the Burns (Thermal) Standard;',
              'if solid particles remain stuck to the skin after irrigation is complete, attempt manual removal and then cover affected areas with wet dressing and/or towels;',
              'in conjunction with the Reporting of Patient Care to Receiving Facility Standard, notify the receiving facility of the hazardous material exposure and associated decontamination efforts; and',
              'if gross contamination of ambulance or self, decontaminate immediately after call completion.',
            ],
            notes: [
              'Note: Specific Personal Protective Equipment (PPE) may be required when exposed to hazardous materials. Consult CANUTEC and other resources, as appropriate.',
            ],
          },
        ],
        guidelines: [
          'When attempting to determine the type and concentration of the hazardous material, use resources:',
          'Allied emergency services',
          'Bystanders',
          'CANUTEC Resources: CANUTEC Emergency Line Transport Canada Emergency Response Guidebook',
          'Dangerous goods placard or product code number',
          'Material Safety Data Sheet',
          'Poison Control Centre',
        ]
      },
      {
        id: 'bls-soft-tissue',
        title: 'Soft Tissue Injuries Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with soft tissue injuries, the paramedic shall:',
            items: [
              'consider underlying injuries to deep structures (e.g. nerves, vessels, bones);',
              { text: 'control wound hemorrhage on the following anatomical basis,', subItems: [
                { text: 'if the wound is located on an extremity,', subItems: [
                  'apply well-aimed, direct digital pressure at the site of bleeding;',
                  'apply a tourniquet; if tourniquet fails to stop bleeding completely or cannot be used for any reason then apply a second tourniquet, and/or',
                  'pack the wound with hemostatic dressing if appropriate and available or standard gauze if contraindicated or unavailable, maintain pressure and secure with a pressure dressing;',
                ] },
                { text: 'if the wound is located in a junctional location (e.g. head, shoulders, armpit, neck, pelvis, groin),', subItems: [
                  'apply well-aimed, direct digital pressure at the site of bleeding;',
                  'pack the wound with a hemostatic dressing if appropriate and available or standard gauze if contraindicated or unavailable, maintain pressure and secure with a pressure dressing;',
                ] },
                { text: 'if the wound is located in the hollow spaces of the skull, chest or abdomen,', subItems: [
                  'apply manual pressure with a flat palm and a hemostatic dressing where available and appropriate or standard gauze if cannot use hemostatic dressing,',
                  'do not pack dressings of any kind into the hollow spaces of the skull, chest or abdomen,',
                  'do not insert fingers into the hollow space of the skull, chest or abdomen;',
                ] },
              ] },
              'attempt removal of large surface contaminants; leave embedded objects in place;',
              'in the stable patient, cleanse injury surfaces using saline or sterile water;',
              'during injury care, manually stabilize any impaled objects if object not yet stabilized;',
              'cover protruding tissue/organs with non-adherent materials (e.g. moist, sterile dressings or plastic wrap);',
              'dress and bandage open wounds, prior to splint application, if applicable;',
              'if dressing digits, dress digits individually; leave tips of fingers/toes uncovered to allow observations of neurovascular status unless otherwise indicated by the Standards; and',
              're-assess and monitor distal neurovascular status after dressing, bandaging, and/or splinting is completed; loosen bandages to restore neurovascular status.',
            ],
          },
        ],
        guidelines: [
          { heading: 'Application of well-aimed direct pressure', items: [
            'Expose the wound cavity',
            'Attempt to visualize the source of bleeding inside the wound cavity',
            'Clear away blood, debris to better visualize source',
            'Be firm and aggressive in applying pressure; be prepared for local tissue destruction as a result of applying pressure and packing',
            'Apply pressure as accurately, directly, firmly and with as small a surface area as possible',
          ] },
          { heading: 'Use of a Tourniquet', items: [
            'Tourniquets work best when placed over large muscle mass (e.g. thigh, upper arm muscles)',
            'Tourniquets work poorly when placed on joints (e.g. knee, elbow) or twinned long bones (e.g. radius/ulna, tibia/fibula)',
            'If a tourniquet is applied to stop uncontrollable extremity hemorrhage, it should not be removed in the pre-hospital setting',
            'The time of tourniquet application must be documented and communicated to the receiving facility at transfer of care',
            'In situations such as multi-casualty incidents (MCI), the time of tourniquet application must be listed on the patient and tourniquet',
            'Do not cover the tourniquet once in place',
            'If a single tourniquet fails, a second may be used. If a second fails, move immediately to use of pressure and hemostatic dressings.',
          ] },
          { heading: 'Wound Packing', items: [
            'Maintain pressure on bleeding site continuously while packing junctional or extremity wounds',
            'Ensure wound cavity is completely filled with densely packed dressing material.',
            'Do not remove dressings; once wound is packed, do not apply subsequent dressings on top.',
          ] },
        ]
      },
      {
        id: 'bls-submersion',
        title: 'Submersion Injury Standard',
        sections: [
          {
            preamble: 'In situations involving a submersion injury (including scuba-diving related disorders), the paramedic shall:',
            items: [
              'request appropriate personnel to carry out rescue operations, if required;',
              'unless authorized, make no attempt to participate in water or other types of rescue operations;',
              { text: 'consider life/limb/function threats, such as,', subItems: [
                'asphyxia,',
                'aspiration,',
                'hypothermia,',
                'pulmonary edema,',
                'underlying disorders which may have precipitated events (e.g. drug or alcohol consumption, hypoglycemia, cardiac dysrhythmias, trauma [spinal/head injury]), and',
                'specific to scuba-diving related disorders,',
                { text: 'barotrauma (ears, sinuses, pneumothorax),', subItems: [
                  'decompression sickness, and',
                  'arterial gas embolism;',
                ] },
              ] },
              { text: 'attempt to determine,', subItems: [
                'duration of submersion,',
                'if water contains known or obvious chemicals, pollutants or other debris, and',
                'water temperature; and',
              ] },
              { text: 'if scuba-diving related,', subItems: [
                { text: 'attempt to determine,', subItems: [
                  'number, depth and duration of dives,',
                  'rate of ascent, and',
                  'when symptoms occurred (e.g. underwater, upon surfacing or within minutes thereof [possible gas embolus], more than 10 minutes after surfacing [possible decompression sickness]);',
                ] },
                'where air embolism is suspected and the patient is on a spinal board or adjustable break-away stretcher, not elevate the head 30 degrees if level of consciousness is decreased, and',
                'prepare for tension pneumothorax.',
              ] },
            ],
          },
        ],
        guidelines: [
          'With regards to arterial gas embolisms, left-sided positioning has not been clearly shown to offer advantages to impede movement of embolism to the head but is recommended for other reasons, e.g. reduction of aspiration risk.',
        ]
      },
    ]
  },

  'bls-obstetrical': {
    lead: 'Obstetrical and neonatal standards requiring early risk recognition and destination planning.',
    standards: [
      {
        id: 'bls-neonate',
        title: 'Neonate Standard',
        sections: [
          {
            preamble: 'In situations involving a neonatal patient, the paramedic shall:',
            items: [
              'be aware that the mother, in addition to the neonatal patient, may require care;',
              { text: 'during the primary survey,', subItems: [
                'be aware of problems arising due to neonate anatomy and physiology, and',
                'determine if the neonatal patient,',
                { text: 'is term gestation,', subItems: [
                  'has good tone, and',
                  'has unlaboured breathing;',
                ] },
              ] },
              'if the patient does not meet the criteria listed in paragraph 2(b) above, recognize the potential need for neonatal resuscitation in conjunction with the ALS PCS;',
              { text: 'attempt to determine,', subItems: [
                'a brief history of the pregnancy (e.g. length of gestation, number of pregnancies, number of births),',
                'details surrounding labour (e.g. duration),',
                'details regarding delivery (e.g. whether delivery was precipitous, complications),',
                'who delivered the neonatal patient,',
                'the neonatal patient\'s colour, breathing and level of activity since delivery, and',
                'any clinical care the neonatal patient has received since delivery; and',
              ] },
              { text: 'if the neonatal patient has just been delivered (regardless of the paramedic\'s participation in the delivery),', subItems: [
                'reassess the mother, if required,',
                'wipe the nose and mouth of neonatal patient, if required,',
                'clamp and cut umbilical cord, if not yet done, as per the ALS PCS,',
                'position the neonatal patient supine on a firm surface and with his/her neck slightly extended (to establish a patent airway),',
              ] },
            ],
          },
        ],
        guidelines: [
          'A small towel roll, such as a face cloth, may be placed beneath the neonatal patient\'s shoulders to facilitate head positioning; be cautious not to hyperextend the neonatal patient\'s neck.',
          'record time of delivery (or approximate),',
          'tag/tape the neonatal patient\'s arm with the time of delivery and the mother\'s name, if time and patient conditions permit,',
          'if the neonatal patient does not require neonatal resuscitation,',
          'prior to transport, attempt to place the neonatal patient skin to skin on the mother\'s chest or abdomen (to facilitate temperature regulation), and advise the mother she may nurse if she wishes, and',
          'swaddle the neonatal patient with a blanket,',
          'recognize a neonatal patient\'s inefficiency at regulating body temperature and maintain a normal temperature by covering/re-covering the neonatal patient during care;',
          'take an Apgar score at one and five minutes post-delivery, if possible; and',
          'in conjunction with the Load and Go Patient Standard, initiate rapid transport if five minute Apgar score is less than seven.',
        ]
      },
      {
        id: 'bls-pregnancy',
        title: 'Pregnancy Standard',
        sections: [
          {
            preamble: 'In situations involving a pregnant patient, the paramedic shall:',
            items: [
              { text: 'consider life/limb/function threats to both the mother and fetus, such as,', subItems: [
                'pre-eclampsia/eclampsia,',
                'prolapsed umbilical cord,',
                'first trimester complications, including,',
                { text: 'spontaneous abortion,', subItems: [
                  'ectopic pregnancy, and',
                  'gestational trophoblastic disease, and',
                ] },
                'second and third trimester complications, including,',
                { text: 'spontaneous abortion,', subItems: [
                  'placental abruption,',
                  'placenta previa, and',
                  'ruptured uterus;',
                ] },
              ] },
              'give priority to maternal assessment and care;',
              'during the primary survey be aware of problems arising due to anatomic and physiologic changes of pregnancy;',
              { text: 'attempt to determine,', subItems: [
                'due date (or approximate),',
                'problems with the present pregnancy (e.g. infection, bleeding, diabetes, blood pressure, pre-eclampsia),',
                'presence of,',
                { text: 'abdominal pain/contractions, and', subItems: [
                  'vaginal bleeding/fluid discharge,',
                ] },
                'if contractions are present, the timing and intensity thereof,',
                'if vaginal bleeding/fluid discharge is present severity thereof,',
                'pregnancy related history, including,',
                { text: 'number of previous pregnancies,', subItems: [
                  'number of deliveries,',
                  'latest ultrasound findings,',
                  'history of complications from past pregnancies, and',
                ] },
                'duration of labour from past pregnancies;',
              ] },
              { text: 'perform, at a minimum, a secondary survey to assess,', subItems: [
                'abdomen, as per Abdominal Pain (Non-Traumatic) Standard, for pregnant patients who present with,',
                { text: 'a history indicative of a motor vehicle collision,', subItems: [
                  'abdominal pain, contractions, vaginal bleeding, or cord prolapse,',
                  'acceleration/deceleration injuries,',
                  'blunt trauma involving the truncal area (regardless of whether there are specific complaints),',
                ] },
                { text: 'fall injuries,', subItems: [
                  'headache, blurred vision, nausea, or swelling,',
                  'malaise, weakness, dizziness, light-headedness, seizure, or shortness of breath, and/or',
                  'penetrating trauma to the chest/abdomen,',
                ] },
                'concurrent with the assessments as per paragraph 5(a) above, when palpating the abdomen of a patient beyond 20 weeks of gestation,',
                { text: 'note uterine height and palpate for contractions, and', subItems: [
                  'note fetal movements,',
                ] },
              ] },
              'note timing and intensity of contractions, if present;',
              { text: 'observe for palpable fetal parts/movement, and', subItems: [
                'don sterile gloves prior to inspection and examination of the perineum;',
              ] },
              'manage labour and delivery as per the ALS PCS;',
              'transport the patient in the left-lateral position;',
              'notwithstanding paragraph 7 above, if the patient is on a spinal board or adjustable break-away stretcher, tilt 30 degrees to the left; and',
              'in conjunction with the Reporting of Patient Care to Receiving Facility Standard, notify the receiving facility of status of the patient and neonate, if applicable.',
            ],
          },
        ],
        guidelines: [
          'Pre-eclampsia should be assumed for patients beyond 20 weeks of gestation with a blood pressure ≥140/90 (severe pre-eclampsia = diastolic BP ≥110), with:',
          'generalized edema (e.g. face, legs), or',
          'non-specific complaints of headache, nausea, abdominal pain with or without vomiting, blurred vision, fatigue, generalized swelling or rapid weight gain.',
          'Due date = Last normal menstrual period – 3 months + 7 days',
          'With respect to uterine height:',
          'Uterus at the umbilicus = 20 weeks of gestational size',
          'Uterus at the costal margins = 36 weeks of gestational size',
          'observe for contractions, as follows:',
        ]
      },
    ]
  },

};
