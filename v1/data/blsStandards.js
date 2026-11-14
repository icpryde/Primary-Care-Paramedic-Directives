// ── Ontario BLS PCS v3.4 – BLS Standards Verbatim Reference ────────────────
// Content sourced from Ontario BLS Patient Care Standards Version 3.4 (2023).
// For operational decisions, always confirm with the current MOH BLS PCS document.

const BLS_GROUPS = [
  { id: 'bls-general', type: 'bls-group', category: 'bls', title: 'General Standard of Care', fullTitle: 'BLS Standards — General Standard of Care' },
  { id: 'bls-medical', type: 'bls-group', category: 'bls', title: 'Medical Standards', fullTitle: 'BLS Standards — Medical Standards' },
  { id: 'bls-trauma', type: 'bls-group', category: 'bls', title: 'Trauma Standards', fullTitle: 'BLS Standards — Trauma Standards' },
  { id: 'bls-obstetrical', type: 'bls-group', category: 'bls', title: 'Obstetrical Standards', fullTitle: 'BLS Standards — Obstetrical Standards' },
  { id: 'bls-appendix-a', type: 'bls-group', category: 'bls', title: 'Supplemental — Prompt Cards', fullTitle: 'BLS Standards — Appendix A: Supplemental' },
];

const BLS_GROUP_CONTENT = {
  'bls-general': {
    lead: 'High-priority baseline standards frequently used across multiple call types.',
    standards: [
      {
        id: 'bls-paramedic-conduct',
        title: 'Paramedic Conduct Standard',
        sections: [
          {
            heading: 'Paramedic Conduct',
            preamble: 'The paramedic shall:',
            items: [
              'conserve life, alleviate pain and suffering, and promote health;',
              'protect and maintain the patient\'s safety, dignity and privacy;',
              'provide care based on human need with respect for human dignity;',
              'demonstrate empathy and compassion for patients and their families;',
              'provide patient care until it is no longer required or until another appropriately qualified health care professional has accepted responsibility for patient care;',
              'discharge his/her duties with honesty, diligence, efficiency and integrity;',
              'conduct and present oneself in such a manner so as to encourage and merit the respect of the public for members of the paramedic profession;',
              'attempt to establish and maintain good working relationships with other professional colleagues and the public;',
              'assume responsibility for personal and professional development, including quality assurance initiatives such as reporting patient safety incidents;',
              'maintain familiarity with current applicable legislation and practice, and strive to work to the fullest extent of his/her competencies; and',
              'report any incompetent, illegal or unethical conduct by colleagues or other health care professionals to the ambulance service operator and/or base hospital.',
            ],
          },
          {
            heading: 'Paramedic Misconduct',
            preamble: 'The paramedic shall not:',
            items: [
              'practice beyond his/her level of certification;',
              'refuse or neglect to serve persons requiring services that are part of the normal performance of his/her duties;',
              'falsify documentation of any kind;',
              'misrepresent qualifications or credentials;',
              'threaten or use violent behaviour;',
              'take or possess drugs from the ambulance service without authorization;',
              { text: 'disclose Confidential Information to anyone, unless required or permitted by law. "Confidential Information" includes:', subItems: [
                'identifying information about an individual;',
                'personal health information (as defined in the PHIPA), such as a medical record or the name and address of a patient, whether in oral or recorded form (e.g. written, printed, or in electronic form); and',
                'information obtained through one\'s position as a paramedic which is not available to the public in general;',
              ] },
              'have any form of inappropriate sexual contact, relations or impropriety with a patient; or',
              'engage in any other conduct unbecoming of a paramedic.',
            ],
          },
        ],
        guidelines: [
          'If a paramedic is unsure as to whether Confidential Information may be disclosed, the paramedic shall refrain from disclosing the Confidential Information, and shall consult with his or her ambulance service operator for direction.',
        ]
      },
      {
        id: 'bls-general-measures',
        title: 'General Measures Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'on receipt of a call, confirm call information with the CACC/ACS;',
              'use an appropriate route and speed while operating the ambulance, adhere to approved driving and occupant restraint policies and practices, and operate the ambulance and utilize ambulance emergency warning systems in a responsible manner;',
              'on arrival at the scene, perform an assessment of the environment, park the ambulance in a safe place, as close to the point of patient contact as possible, and identify routes of access and egress;',
              'ensure the call environment is safe with no danger to self or others;',
              'if danger exists, or there is uncertainty regarding personal and/or patient safety, request assistance from allied emergency services and maintain communication with CACC/ACS;',
              'bring to the point of initial patient contact all equipment required to establish baseline vital signs and perform defibrillation;',
              'use call and scene information to determine any additional equipment likely to be required to manage the call, and bring to point of initial patient contact;',
              'if there is more than one patient and/or additional resources or assistance is required, make requests to CACC/ACS;',
              'utilize personal protective equipment according to the Patient Care and Transportation Standards, and take appropriate safety measures;',
              'identify and introduce themselves to the patient and others as appropriate;',
              'obtain consent for patient care as per the Heath Care Consent Act, 1996 (Ontario);',
              'use proper, effective communication techniques to establish patient trust;',
              'protect the patient from hazards and exposure to adverse environmental conditions;',
              'for scene responses involving hazardous materials, reference the Transport Canada Emergency Response Guidebook;',
              'ensure safe use and disposal of equipment (e.g. sharps); and',
              'perform hand hygiene as per the Patient Care and Transportation Standards.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-patient-assessment',
        title: 'Patient Assessment Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'assume the existence of serious, potentially life-, limb- and/or function-threatening conditions;',
              'make scene observations relevant to the patient\'s status;',
              'seek medical information tags;',
              'attempt to determine the patient\'s name, sex, age (or approximate), and weight (or approximate);',
              'make reasonable attempts to seek other forms of patient identification, if required;',
              'determine the patient\'s chief complaint;',
              { text: 'immediately on patient contact perform the primary survey by,', subItems: [
                'noting the patient\'s general appearance, degree of distress and CTAS (Arrive Patient) as per the Prehospital CTAS Paramedic Guide,',
                'where applicable, ensure C-spine precautions as indicated by the Spinal Motion Restriction (SMR) Standard,',
                'assessing airway patency, breathing, circulation and level of consciousness and identifying critical findings (i.e. look for and if possible, quickly expose obvious or suspected external hemorrhage and injury sites), and,',
                'upon identifying absent/inadequate airway, breathing, circulation or any other life-threatening concerns, perform critical interventions as per the Patient Management Standard;',
              ] },
              'determine history of present illness or incident (including treatment prior to arrival);',
              'determine the patient\'s symptoms, allergies, past medical history and medications;',
              'determine the patient\'s compliance with prescribed medications;',
              'initiate rapid transport and perform further assessment and management en route, if the paramedic determines that the patients meets the criteria listed in the Load and Go Patient Standard;',
              { text: 'unless the patient requires immediate intervention or meets the Load and Go Patient Standard the paramedic shall establish baseline vital signs, which include:', subItems: [
                'heart rate,',
                'respiration rate,',
                'blood pressure (BP),',
                'Pulse oximetry (SpO₂),',
                'Glasgow Coma Scale (GCS),',
                'pupils, and',
                'skin colour and condition;',
              ] },
              'auscultate the patient\'s lungs for air entry and adventitious sounds (e.g. wheezes, crackles), if the patient is exhibiting signs or symptoms of cardiovascular, respiratory or neurological compromise;',
              'initiate cardiac monitoring, if the patient is exhibiting signs or symptoms of cardiovascular, respiratory or neurological compromise;',
              'perform a secondary survey, as required by patient status or the Standards;',
              'obtain a second set of vital signs;',
              'if the patient is suspected to be febrile or experiencing hyperthermia, obtain the patient\'s temperature;',
              'formulate a working assessment after the primary and secondary survey;',
              'if at any time during a call the paramedic provides a critical intervention, or series of interventions, or a change in patient status occurs, at a minimum reassess the patient\'s airway patency, breathing, circulation, level of consciousness, and consider further patient assessment or management; and',
              { text: 'reassess vital signs relevant to patient condition/status,', subItems: [
                'every 30 minutes at a minimum, and',
                'more frequently, as required by patient condition, changes to patient status, or the Standards.',
              ] },
            ],
          },
        ],
        guidelines: [
          'The following types of calls typically warrant a cardiac monitor:',
          'All vital signs absent (VSA) patients, except those who are obviously dead as per the Deceased Patient Standard',
          'Unconscious or altered level of consciousness',
          'Collapse or syncope',
          'Suspected cardiac ischemia',
          'Moderate to severe shortness of breath',
          'Cerebrovascular accident (CVA)',
          'Overdose',
          'Major or multi-system trauma',
          'Electrocution',
          'Submersion injury',
          'Hypothermia, heat exhaustion or heat illness',
          'Abnormal vital signs as per the ALS PCS',
          'If requested by sending facility staff (for inter-facility transfers)',
        ]
      },
      {
        id: 'bls-patient-management',
        title: 'Patient Management Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'if the patient is vital signs absent (VSA) and meets "obvious death" criteria as per the Deceased Patient Standard, follow the procedures outlined within the Deceased Patient Standard;',
              'if the patient has an MOH Do Not Resuscitate (DNR) Confirmation Form, refer to the Do Not Resuscitate (DNR) Standard;',
              { text: 'perform appropriate critical interventions to establish/improve and maintain airway patency, ventilation and circulation, which include:', subItems: [
                'protecting C-spine if C-spine precautions are indicated by the Spinal Motion Restriction (SMR) Standard,',
                'initiating cardiopulmonary resuscitation (CPR) as per current Heart and Stroke Foundation of Canada Guidelines and as per the Cardiac Arrest Standards, if the patient is VSA (perform appropriate cardiac arrest medical directives as outlined in the ALS PCS),',
                'clearing airway obstructions as per the Airway Obstruction Standard, with attention to suctioning of saliva, blood and vomit where necessary,',
                'ventilating or assisting ventilations as per the Respiratory Failure Standard or Shortness of Breath Standard, and',
                'controlling trauma-related external hemorrhage as per the Soft Tissue Injuries Standard, or as specified in other standards for both trauma and non-trauma related conditions.',
              ] },
              'administer oxygen therapy as per the Oxygen Therapy Standard;',
              'initiate management of other life-, limb- and/or function-threatening conditions as outlined in other sections of the Standards and the ALS PCS;',
              { text: 'position or re-position the patient in order to support, protect, improve and/or promote,', subItems: [
                'C-spine alignment,',
                'airway patency,',
                'breathing,',
                'venous return and perfusion,',
                'extremity injury, and',
                'patient comfort;',
              ] },
              'if the patient is stable, initiate management on-scene for non-critical conditions as outlined in other sections of the Standards;',
              'continually monitor the patient and provide assessment and management as required by the Standards;',
              'give the patient nothing by mouth unless indicated by the Standards or ALS PCS; and',
              'ensure the patient maintains a comfortable temperature, or as required by the Standards.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-patient-transport',
        title: 'Patient Transport Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'determine CTAS level (CTAS Depart Scene) as per Prehospital CTAS Paramedic Guide;',
              'make a decision regarding the appropriate receiving health care facility and initiate transport of the patient as confirmed or directed by an ambulance communications officer (ACO);',
              'if confirmation or direction cannot be obtained from an ACO, transport to the closest or most appropriate hospital capable of providing the medical care apparently required by the patient;',
              'collect and transport all relevant patient medications, record of medications, and any other relevant identification and medical records, as necessary, for review by receiving facility staff;',
              'for inter-facility transfers where the patient\'s current care requirements, or reasonably anticipated care requirements, exceed the paramedic\'s level of certification request that a medically-responsible escort be provided by the sending facility;',
              'for all CTAS 1 and 2 patients move the patient to the stretcher using the most appropriate lift or carry;',
              'for all CTAS 1 and 2 patients transport the patient to and from the ambulance on the stretcher;',
              'for all CTAS 3-5 patients transport the patient to and from the ambulance using the appropriate lift, carry or ambulatory assistance with respect to the situation, the patient\'s clinical condition, or for patient comfort;',
              'in cases of inter-facility transfers transport the patient to and from the ambulance on the stretcher;',
              'ensure the patient, stretcher, equipment, and all occupants are secured inside the ambulance;',
              'attend to the patient at all times;',
              'provide support to an escort or team in the patient compartment, in the event the patient is under the care of a medical escort or a transfer team;',
              'if the patient deteriorates during transport, and survival to the directed receiving facility is questionable, transport the patient to the closest or most appropriate hospital capable of providing the medical care apparently required by the patient. Immediately notify CACC/ACS of any destination change, and notify or ask CACC/ACS to notify the new receiving facility; and',
              'maintain temperature and lighting conditions which are comfortable for the patient in the patient compartment, unless otherwise required by the Standards.',
            ],
          },
        ],
        guidelines: [
          'For inter-facility transfers, obtain the following information and/or transfer documents, when available:',
          'Name of sending physician',
          'Verbal and/or written treatment orders from the sending physician',
          'Transfer paper, e.g. case summary, lab work, x-rays, list of personal effects accompanying the patient, etc.',
          'Name(s) of facility staff and list of equipment accompanying the patient',
          'Name of receiving facility and receiving physician',
        ]
      },
      {
        id: 'bls-patient-refusal-emergency-treatment',
        title: 'Patient Refusal/Emergency Treatment Standard',
        sections: [
          {
            heading: 'Patient With Capacity Refusal',
            items: [
              { text: 'Where a patient requires care and/or transport to a health care facility and the patient or substitute decision maker (SDM) refuses such treatment and/or transport, the paramedic shall:', subItems: [
                'make reasonable efforts to inform the patient or SDM that treatment and/or transport are recommended and explain the possible consequences of such refusal;',
                'confirm that the patient or SDM has capacity utilizing the Aid to Capacity Assessment as per the Ambulance Call Report Completion Manual;',
                'advise the patient or SDM to call 911 again if further concerns arise; and',
                'obtain signatures and complete additional documentation requirements as per the Ontario Documentation Standards and the Ambulance Call Report Completion Manual.',
              ] },
            ],
            notes: [
              'The patient or SDM can refuse to sign the Refusal of Service section of the Ambulance Call Report, as there is no obligation on the patient or SDM to sign the Ambulance Call Report. Should this occur, the paramedic shall document the patient\'s or SDM\'s refusal and reason for failing to provide a signature.',
            ],
          },
          {
            heading: 'Emergency Treatment and Transport of an Incapable Patient Without Consent',
            items: [
              { text: 'The paramedic shall carry out emergency treatment and transport, if:', subItems: [
                'the patient does not have capacity;',
                'the patient is apparently experiencing severe suffering or is at risk, if the treatment is not administered promptly, of sustaining serious bodily harm; and',
                'the delay required to obtain a consent or refusal on the patient\'s behalf will prolong the suffering that the patient is apparently experiencing or will put the patient at risk of sustaining serious bodily harm.',
              ] },
              'The paramedic shall document the circumstances that led to the decision in paragraph 1 above.',
            ],
          },
          {
            heading: 'Emergency Treatment and Transport of a Capable Patient Without Consent',
            items: [
              { text: 'The paramedic shall carry out emergency treatment and transport, if:', subItems: [
                'the patient is apparently experiencing severe suffering or is at risk, if the treatment is not administered promptly, of sustaining serious bodily harm;',
                'the communication required in order for the patient to give or refuse consent cannot take place because of a language barrier or because the patient has a disability that prevents the communication from taking place;',
                'steps that are reasonable in the circumstances have been taken to find a practical means of enabling the communication to take place, but no such means has been found;',
                'the delay required to find a practical means of enabling the communication to take place will prolong the suffering that the patient is apparently experiencing or will put the person at risk of sustaining serious bodily harm; and',
                'there is no reason to believe that the patient does not want the treatment.',
              ] },
              'The paramedic shall document the circumstances that led to the decision in paragraph 1 above.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-reporting-to-receiving-facility',
        title: 'Reporting of Patient Care to Receiving Facility Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              { text: 'transmit a report while en route to the receiving facility for all CTAS 1 and CTAS 2 patients, which includes,', subItems: [
                'unit number identification,',
                'patient age,',
                'patient sex,',
                'CTAS level,',
                'chief complaint,',
                'pertinent history,',
                'pertinent assessment findings,',
                'pertinent management and response to management,',
                'abnormal vital signs, and',
                'estimated time of arrival;',
              ] },
              'confirm that the receiving facility or ACO has acknowledged the report; and',
              'provide additional reports if the patient\'s CTAS changes to a higher acuity.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-patch-to-base-hospital-physician',
        title: 'Patch to Base Hospital Physician Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'initiate a patch as required by the Standards or the ALS PCS;',
              'initiate a patch where there is uncertainty about the appropriateness of a standard or when further direction is desired;',
              { text: 'during the patch,', subItems: [
                'state his/her level of certification,',
                'provide a report which includes the information necessary to convey the patient\'s condition, situation, or circumstance which requires physician input,',
                'provide all other information as requested by the physician, and',
                'confirm direction, authorization and orders given; and',
              ] },
              'document as per the Ontario Ambulance Documentation Standards and the Ambulance Call Report Completion Manual.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-regulated-health-professionals',
        title: 'Regulated Health Professionals Standard',
        sections: [
          {
            preamble: 'In situations involving a patient under the care of a regulated health professional, the paramedic shall:',
            items: [
              'recognize the training and qualifications of the regulated health professional, e.g. physician, nurse, midwife, respiratory therapist;',
              'determine the nature of the request for ambulance services;',
              'obtain confirmation (may be verbal) that the regulated health professional is a registered member of his/her College within Ontario, and that the patient is under his/her care;',
              'upon request, assist the regulated health professional with patient care only to the level in which the paramedic is authorized; and',
              { text: 'in conjunction with the Documentation of Patient Care Standard, document on the Ambulance Call Report,', subItems: [
                'the name of the regulated health professional,',
                'the type of regulated health professional, and',
                'any care provided by the regulated health professional.',
              ] },
            ],
          },
        ],
        guidelines: [
          'Recall paragraph 8 of Paramedic Conduct under the Paramedic Conduct Standard; accordingly, paramedics and regulated health professionals should work cooperatively in making decisions and providing quality patient care.',
        ]
      },
      {
        id: 'bls-transfer-of-care',
        title: 'Transfer of Care (TOC) Standard',
        sections: [
          {
            preamble: 'Upon arrival at the receiving facility, the paramedic shall:',
            items: [
              'liaise with receiving facility staff to determine the patient\'s destination within the receiving facility;',
              'attend to the patient while awaiting receiving facility staff acceptance of the patient;',
              { text: 'provide a verbal report to receiving facility staff, to include,', subItems: [
                'patient name,',
                'patient age,',
                'patient sex,',
                'CTAS (Arrive Destination) as per the Prehospital CTAS Paramedic Guide,',
                'chief complaint,',
                'a concise history of the patient\'s current problem(s) and relevant past medical history,',
                'pertinent assessment findings,',
                'pertinent management performed and responses to management,',
                'vital signs, and',
                'the reason for transfer, for inter-facility transfers;',
              ] },
              'provide a copy of any clinically relevant associated biometric data collected;',
              { text: 'if it appears likely there will be a prolonged delay in accepting the patient,', subItems: [
                'advise CACC/ACS,',
                'advise receiving facility if the patient status deteriorates,',
                'seek further assistance from the ambulance service operator, and/or',
                'for inter-facility transfers, request receiving staff to attempt to contact the sending physician or the patient\'s family physician;',
              ] },
              'transfer the patient, from the stretcher where applicable, to the receiving facility;',
              'transfer any patient medications, record of medications, other relevant identification and medical records, and any other belongings to the receiving facility, if not already done;',
              'consider Transfer of Care complete upon completion of paragraphs 1-7 above and when the patient is no longer dependent on ambulance service resources (excluding equipment that is being left with the patient, e.g. spinal board); and',
              'transfer documentation to the receiving facility as per the Ontario Ambulance Service Documentation Standards.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-documentation-of-patient-care',
        title: 'Documentation of Patient Care Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'complete documentation as per the Ontario Ambulance Documentation Standards and the Ambulance Call Report Completion Manual;',
              'document clinical response to treatment and procedures performed;',
              'document all instances of threatened violence on the Ambulance Call Report; and',
              { text: 'for inter-facility transfers, document,', subItems: [
                'pertinent patient history and care information,',
                'receipt of transfer papers (e.g. case summary, treatment orders, lab work, x-rays, list of personal effects or patient\'s personal belongings), and',
                'name(s) of escort, transport team members and list of equipment accompanying the patient, where applicable.',
              ] },
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-patient-care-equipment-use',
        title: 'Patient Care Equipment Use Standard',
        sections: [
          {
            preamble: 'The paramedic shall:',
            items: [
              'utilize all equipment in the manner in which trained by his/her ambulance service operator and base hospital, and as per manufacturer specifications; and',
              'notify the ambulance service operator of identified equipment problems.',
            ],
          },
        ],
        guidelines: []
      },
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
        id: 'bls-field-trauma-triage',
        title: 'Field Trauma Triage Standard',
        sections: [
          {
            definitions: true,
            heading: 'Definitions',
            preamble: 'For the purposes of the Field Trauma Triage Standard:',
            items: [],
          },
          {
            definitions: true,
            heading: 'Regionally Designated Equivalent Hospital',
            preamble: 'means an appropriately resourced hospital facility as defined by the Regional Trauma Network of Critical Care Services Ontario and included in a local PPS.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Transport Time',
            preamble: 'means the time from scene departure to time of arrival at destination.',
            items: [],
          },
          {
            heading: 'General Directive',
            items: [
              'The paramedic shall follow the procedure below when conducting field triage of patients injured by a traumatic mechanism or who show evidence of trauma.',
              'The paramedic shall also use this standard to assess the clinical criteria (i.e. to determine if the patient meets the clinical criteria) as required by the Air Ambulance Utilization Standard.',
              'The paramedic shall consider using the Trauma Termination of Resuscitation (TOR) contained in the Trauma Cardiac Arrest Medical Directive as per the ALS PCS.',
              'CACC/ACS may authorize the transport once notified of the patient\'s need for re-direct or transport under the Field Trauma Triage Standard.',
            ],
          },
          {
            heading: 'Procedure',
            preamble: 'The paramedic shall:',
            items: [
              { text: 'assess the patient to determine if he/she has one or more of the following physiological criteria (Step 1):', subItems: [
                'Patient does not follow commands,',
                'Systolic blood pressure <90mmHg, or',
                'Respiratory rate <10 or ≥30 breaths per minute or need for ventilatory support (<20 in infant aged <1 year);',
              ] },
              'if the patient meets the physiological criteria listed in paragraph 1 above, AND the land transport time is estimated to be <30 minutes* to a Lead Trauma Hospital (LTH) or regionally designated equivalent hospital, transport the patient directly to the LTH or regionally designated equivalent hospital;',
              { text: 'if the patient does not meet the criteria listed in paragraphs 1 and 2, assess the patient to determine if he/she has one or more of the following anatomical criteria (Step 2):', subItems: [
                'Any penetrating injuries to head, neck, torso and extremities proximal to elbow or knee,',
                'Chest wall instability or deformity (e.g. flail chest),',
                'Two or more proximal long-bone fractures,',
                'Crushed, de-gloved, mangled or pulseless extremity,',
                'Amputation proximal to wrist or ankle,',
                'Pelvic fractures,',
                'Open or depressed skull fracture, or',
                'Paralysis;',
              ] },
              'if the patient meets the anatomical criteria listed in paragraph 3 above and the land transport time is estimated to be <30 minutes* to the LTH or regionally designated equivalent hospital, transport the patient directly to the LTH or regionally designated equivalent hospital;',
              'if unable to secure the patient\'s airway or survival to the LTH or regionally designated equivalent hospital is unlikely, transport the patient to the closest emergency department despite paragraphs 2 and 4 above;',
              { text: 'despite paragraph 5 above, transport the patient directly to an LTH or regionally designated equivalent hospital if the patient has a penetrating trauma to the torso or head/neck, and meets ALL of the following:', subItems: [
                'Vital signs absent yet not subject to TOR described in the General Directive above, and',
                'Land transport to the LTH or regionally designated equivalent hospital is estimated to be <30 minutes*;',
              ] },
              { text: 'if the patient does not meet the physiological or anatomical criteria listed above, use the following criteria to determine if the patient may require other support services at the LTH or regionally designated equivalent hospital as a result of his/her traumatic mechanism of injury (Step 3):', subItems: [
                { text: 'Falls', subItems: [
                  'Adults: falls ≥6 metres (one story is equal to 3 metres)',
                  'Children (age <15): falls ≥3 metres or two to three times the height of the child',
                ] },
                { text: 'High Risk Auto Crash', subItems: [
                  'Intrusion ≥0.3 metres occupant site; ≥0.5 metres any site, including the roof',
                  'Ejection (partial or complete) from automobile',
                  'Death in the same passenger compartment',
                  'Vehicle telemetry data consistent with high risk injury (if available)',
                ] },
                'Pedestrian or bicyclist thrown, run over or struck with significant impact (≥30 km/hr) by an automobile',
                'Motorcycle crash ≥30 km/hr;',
              ] },
              'if the patient meets the mechanism of injury criteria listed in paragraph 7 above, AND the land transport time is estimated to be <30 minutes* to an LTH or regionally designated equivalent hospital, determine the need for patient transport to the LTH or regionally designated equivalent hospital;',
              { text: 'in conjunction with the physiological, anatomical, and mechanism of injury criteria listed above, consider the following special criteria (Step 4):', subItems: [
                { text: 'Age', subItems: [
                  'Risk of injury/death increases after age 55',
                  'SBP <110 may represent shock after age 65',
                ] },
                'Anticoagulation and bleeding disorders',
                { text: 'Burns', subItems: [
                  'With trauma mechanism: triage to LTH',
                ] },
                'Pregnancy ≥20 weeks; and',
              ] },
              'if the patient meets any of the special criteria listed above, AND the land transport time is estimated to be <30 minutes* to an LTH or regionally designated equivalent hospital, determine the need for patient transport to the LTH or regionally designated equivalent hospital.',
            ],
            notes: [
              'The 30 minute transport time may be amended to up to 60 minutes as per an ambulance service PPS, but may not exceed 60 minutes.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-air-ambulance-utilization',
        title: 'Air Ambulance Utilization Standard',
        sections: [
          {
            heading: 'General Directive',
            intro: 'Requests for an on-scene air ambulance response should meet at least one of the bulleted operational criteria PLUS one of the clinical criteria (e.g. known clinical criteria as listed in the Field Trauma Triage Standard or from the bulleted list of medical or obstetrical criteria listed below).',
            items: [],
          },
          {
            heading: 'Procedure',
            preamble: 'The paramedic shall:',
            items: [
              { text: 'assess the scene response to meet one or more of the following operational criteria:', subItems: [
                'The land ambulance is estimated to require more than 30 minutes to reach the scene and the air ambulance can reach the scene quicker.',
                'The land ambulance is estimated to require more than 30 minutes to travel from the scene to the closest appropriate hospital and the air ambulance helicopter can reach the scene and transport the patient to the closest appropriate hospital quicker than the land ambulance.',
                'The estimated response for both land and air is estimated to be greater than 30 minutes, but approximately equal, and the patient needs care which cannot be provided by the responding land ambulance.',
                'There are multiple patients who meet the clinical criteria and the local land ambulance resources are already being fully utilized.',
              ] },
              { text: 'if the scene response meets the requirements of paragraph 1 above, assess the patient to determine if he/she meets one or more of the following clinical criteria:', subItems: [
                'Patients meeting the criteria listed in the Field Trauma Triage Standard.',
                'Patients meeting one or more of the following:',
                { systemLabel: 'Medical:', subItems: [
                  'Shock, especially hypotension with altered mentation (e.g. suspected aortic aneurysm rupture, massive gastrointestinal bleed, severe sepsis, anaphylaxis, cardiogenic shock, etc.)',
                  'Acute stroke with a clearly determined time of onset or last known to be normal <6.0 hours',
                  'Altered level of consciousness (GCS <10)',
                  'Acute respiratory failure or distress',
                  'Suspected STEMI or potentially lethal dysrhythmia',
                  'Resuscitation from respiratory or cardiac arrest',
                  'Status epilepticus',
                  'Unstable airway or partial airway obstruction',
                ] },
                { systemLabel: 'Obstetrical:', subItems: [
                  'Active labour with abnormal presentation (i.e. shoulder, breech or limb)',
                  'Multiple gestation and active labour',
                  'Umbilical cord prolapse',
                  'Significant vaginal bleeding (suspected placental abruption or placenta previa or ectopic pregnancy);',
                ] },
              ] },
              { text: 'in conjunction with the ACO, assess if an on-scene air ambulance helicopter is appropriate, based on:', subItems: [
                'the perceived severity of the reported injuries and without confirmation that the clinical criteria have been met, or',
                'the patient cannot reasonably be reached by land ambulance (e.g. sites without road access such as islands; geographically isolated places, etc.);',
              ] },
              { text: 'if the requirements listed in paragraph 2 or 3 above are met, request an on-scene air ambulance helicopter response:', subItems: [
                'Provide the ACO with the information set out in operational and clinical criteria above. In order for the ACO to determine if an air ambulance response and transport will be quicker than land ambulance, the paramedic will provide the ACO with the estimated time to prepare the patient for transport, identify separately any time required for patient extrication, provide the estimated land ambulance driving time to the closest appropriate hospital and any additional information as required.',
                'The paramedics shall not delay patient transport by waiting for the air ambulance helicopter, unless the air ambulance helicopter can be seen on its final approach to the scene. If the air ambulance helicopter is en route but not on final approach to the scene, and the land paramedics have the patient in his/her ambulance, then the land ambulance will proceed to the closest local hospital with an emergency department. The air ambulance helicopter will proceed to that local hospital and, if appropriate, assist hospital personnel prepare the patient for rapid evacuation.',
                { text: 'While en route to the local hospital, paramedics may rendezvous with the air ambulance helicopter if:', subItems: [
                  'the air ambulance helicopter is able to land along the direct route of the land ambulance; and',
                  'it would result in a significant reduction in transport time to the most appropriate hospital.',
                ] },
              ] },
              'if the call\'s circumstances and patient(s) fail to meet the criteria set out in this standard and an air ambulance helicopter is known to be responding based on the merits of the initial request for ambulance service, contact the CACC/ACS and advise that an on-scene air ambulance helicopter response is not required and why it is not required.',
            ],
          },
        ],
        guidelines: [
          { heading: 'Air Ambulance Helicopter Landing Site Safety and Coordination', items: [
            'Upon confirmation that the air ambulance helicopter is responding, the paramedic shall follow the guidelines set out by the Ornge Aviation Safety Department, which can be found on Ornge\'s "Aircraft Safety" website at: https://www.ornge.ca/aircraft-safety.',
          ] },
          { heading: 'Other Use of Air Ambulance Helicopter', items: [
            'Air ambulance helicopters are not permitted to respond to night calls which require a landing at a site other than night licensed airports, helipads or night approved remote landing sites.',
            'Air ambulance helicopters are not permitted to conduct search and rescue calls.',
            'In cases where a land ambulance can reach the patient(s) and an on-scene response by air ambulance helicopter is appropriate, the ACO will assign a land ambulance and continue the land response until the flight crew requests that the land ambulance be cancelled.',
            'In cases where a land ambulance arrives on-scene prior to the air ambulance helicopter, paramedics shall inform the CACC/ACS as clinical events occur.',
          ] },
        ]
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
        id: 'bls-deceased-patient',
        title: 'Deceased Patient Standard',
        sections: [
          {
            definitions: true,
            heading: 'Definitions',
            preamble: 'For the purposes of the Deceased Patient Standard, the following definitions apply:',
            items: [],
          },
          {
            definitions: true,
            heading: 'Deceased Patient',
            preamble: 'means a patient who is:',
            items: [
              'obviously dead;',
              'the subject of a medical certificate of death, presented to the paramedic crew, in the form that is prescribed by the Vital Statistics Act (Ontario) and that appears on its face to be completed and signed in accordance with that Act;',
              'without vital signs and the subject of an MOH Do Not Resuscitate (DNR) Confirmation Form;',
              'without vital signs and the subject of a Termination of Resuscitation (TOR) Order given by a Base Hospital Physician; or',
              'without vital signs and the subject of a Withhold Resuscitation Order given by a Base Hospital Physician.',
            ],
          },
          {
            definitions: true,
            heading: 'Expected Death',
            preamble: 'means a death that was imminently anticipated generally as a result of a progressive end stage terminal illness.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Obviously Dead',
            preamble: 'means death has occurred if gross signs of death are obvious, including by reason of:',
            items: [
              'decapitation, transection, visible decomposition, putrefaction; or',
              { text: 'absence of vital signs and:', subItems: [
                'a grossly charred body;',
                'an open head or torso wound with gross outpouring of cranial or visceral contents;',
                'gross rigor mortis (i.e. limbs and/or body stiff, posturing of limbs or body); or',
                'dependent lividity (i.e. fixed, non-blanching purple or black discolouration of skin in dependent area of body).',
              ] },
            ],
          },
          {
            definitions: true,
            heading: 'Palliative Care Team',
            preamble: 'means a team of health care professionals who provide palliative care to a terminally ill patient.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Responsible Person',
            preamble: 'means an adult who, in the reasonable belief of the paramedic, is capable to remain with the Deceased Patient and assume responsibility for the Deceased Patient.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Termination of Resuscitation (TOR) Order',
            preamble: 'means an order given by a Base Hospital Physician to a paramedic to stop resuscitation measures.',
            items: [],
          },
          {
            definitions: true,
            heading: 'Unexpected Death',
            preamble: 'means a death that was not imminently anticipated (e.g. traumatic deaths, deaths related to the environment, accidental deaths, and apparently natural deaths that are sudden and unexpected).',
            items: [],
          },
          {
            definitions: true,
            heading: 'Withhold Resuscitation Order',
            preamble: 'means an order given by a Base Hospital Physician to a paramedic to not initiate resuscitation measures.',
            items: [],
          },
          {
            heading: 'Procedure',
            preamble: 'In all cases of death, the paramedic shall:',
            items: [
              'confirm the patient is deceased as per the Definitions above;',
              'ensure that the Deceased Patient is treated with respect and dignity;',
              'consider the needs of family members of the decedent and provide compassion-informed decision-making;',
              'in cases of suspected foul play, follow the directions set out in the Police Notification Standard;',
              'if applicable, follow all directions issued by a coroner or a person appointed by a coroner or to whom a coroner has delegated any powers or authority pursuant to the Coroners Act (Ontario);',
              'if termination of resuscitation occurs in the ambulance en route to a health care facility, advise CACC/ACS to contact the coroner, and continue to the destination unless otherwise directed by CACC/ACS; and',
              'for cases of obvious death, note and document the time at which the paramedic confirms the patient was deceased as per the Standards.',
            ],
          },
          {
            preamble: 'In cases of unexpected death:',
            items: [
              'in the absence of police or a coroner on-scene, the paramedic shall advise CACC/ACS of the death, in which case CACC/ACS shall notify the police or coroner;',
              'if a coroner indicates that he/she will attend at the scene, the paramedic shall remain at the scene until the coroner arrives and assumes custody of the Deceased Patient. If the coroner indicates that he/she will not attend at the scene, the paramedic shall remain on the scene until the arrival of a person appointed by a coroner or to whom a coroner has delegated any powers or authority pursuant to the Coroners Act (Ontario);',
              'notwithstanding paragraph 2 above, if police are present and have secured the scene, the paramedic may depart as soon as documentation has been completed or he/she is assigned to another call; and',
              'where at any time the paramedic has not received any further direction from CACC/ACS, the paramedic shall request that CACC/ACS seek direction from the coroner concerning his/her responsibilities, including whether he/she may leave the scene.',
            ],
          },
          {
            preamble: 'In cases of expected death:',
            items: [
              'the paramedic shall advise CACC/ACS of the death;',
              'the paramedic shall make a request of a Responsible Person, if one is present, to notify the primary care practitioner or a member of the Palliative Care Team (if any) of the patient and request his/her attendance at the scene;',
              'if the Responsible Person is unable to provide the notice in paragraph 2 above, the paramedic shall advise CACC/ACS of the death, in which case CACC/ACS shall attempt to notify the primary care practitioner or member of the Palliative Care Team (if any) of the Deceased Patient, and request his/her attendance at the scene;',
              'if the Deceased Patient\'s primary care practitioner or Palliative Care Team member is contacted and indicates that he/she will attend at the scene, then the paramedic shall remain at the scene until his/her arrival;',
              'notwithstanding paragraph 4 above, if there is a Responsible Person present, and the paramedics reasonably believe that the Responsible Person will remain until the primary care practitioner or Palliative Care Team arrives, then the paramedic may depart as soon as all required documentation has been completed or he/she are assigned to another call. Alternatively, if the police are at the scene and are willing to remain until the arrival of the practitioner or Palliative Care Team member, the paramedic may leave the scene;',
              'if the primary care practitioner or Palliative Care Team member cannot be contacted or if he/she is unable to attend, or there is no Responsible Person on-scene, the paramedic crew shall advise CACC/ACS, in which case CACC/ACS shall notify the police or coroner of the death and that there is no one else at the scene who can take responsibility for the Deceased Patient; and',
              'if requested by the coroner, the paramedic will provide the coroner with the circumstances of the death; the paramedic will either be released from the scene or instructed to remain with the Deceased Patient until the coroner or a person appointed by a coroner or to whom a coroner has delegated any powers or authority pursuant to the Coroners Act (Ontario) or a Responsible Person can attend the scene and assume responsibility for the Deceased Patient.',
            ],
          },
        ],
        guidelines: [
          'Although a death may be viewed as "unexpected" from the perspective of the person reporting the death (paramedic, family members), this does not necessarily imply that the death requires investigation by a coroner under the Coroners Act (Ontario).',
        ]
      },
      {
        id: 'bls-general-pediatric',
        title: 'General Pediatric Standard',
        sections: [
          {
            preamble: 'In situations involving a pediatric patient, the paramedic shall:',
            items: [
              'during the primary survey, be aware of problems arising due to pediatric anatomy and physiology;',
              'be aware that respiratory arrest is the primary cause of pediatric cardiac arrest;',
              'recognize normal vital signs as per the ALS PCS;',
              { text: 'consider assessments for,', subItems: [
                'change in appetite,',
                'change in behaviour/personality,',
                'excessive drooling,',
                'for patients in diapers, decrease in number of wet diapers,',
                'inconsolable crying or screaming,',
                'lethargy,',
                'patient positioning (e.g. tripoding), and',
                'work of breathing;',
              ] },
              'if performing a full secondary survey, conduct from "toe-to-head";',
              'have caregivers present during patient care unless they are interfering with the care; and',
              'for infant patients, assess fontanelles.',
            ],
          },
        ],
        guidelines: [
          'Recall that pediatric CTAS levels and GCS differ from those for adults. Determine CTAS as per the Prehospital CTAS Paramedic Guide.',
          'Pediatric patients can present with atypical signs and symptoms and may deteriorate rapidly. Maintain a high index of suspicion when assessing pediatric patients.',
          'When handling an infant patient, ensure that proper support is provided to the head and neck.',
        ]
      },
      {
        id: 'bls-child-in-need-of-protection',
        title: 'Child in Need of Protection Standard',
        sections: [
          {
            definitions: true,
            heading: 'Definitions',
            preamble: 'For the purposes of the Child in Need of Protection Standard, the following definitions apply:',
            items: [],
          },
          {
            definitions: true,
            heading: 'Child in need of protection',
            preamble: 'means a child who is or who appears to be suffering from abuse and/or neglect. Section 72 of the Child and Family Services Act (Ontario) details circumstances for concern (i.e. physical, sexual, or emotional abuse, neglect, or risk of harm).',
            items: [],
          },
          {
            definitions: true,
            heading: 'Duty to report',
            preamble: 'means the requirement to promptly report any reasonable suspicion that a child is or may be in need of protection directly to a Children\'s Aid Society (CAS).',
            items: [],
          },
          {
            definitions: true,
            heading: 'Reasonable grounds',
            preamble: 'refers to the information that an average person, using normal and honest judgement, would need in order to decide to report.',
            items: [],
          },
          {
            heading: 'General Directive',
            preamble: 'In situations where the paramedic has reasonable grounds to believe that the patient is a child who is or may be in need of protection, the paramedic shall:',
            items: [
              'ensure the patient is not left alone;',
              'request police assistance at the scene when it is believed that the patient is at risk of imminent harm;',
              { text: 'obtain as clear a history of the incident as possible, with no display of personal curiosity. Attempt to determine,', subItems: [
                { text: 'the validity of the history provided. Consider if the patient may be a child in need of protection if,', subItems: [
                  'the story changes frequently or parents\' stories differ,',
                  'the parents are vague about what happened or blame each other,',
                  'the nature of the injury appears to be inconsistent or improbable with the explanation provided,',
                  'the mechanism of injury is obviously beyond the developmental capabilities of the child,',
                  'there has been prolonged, unexplained delay in seeking treatment, or',
                  'there is a history of recurrent injuries;',
                ] },
                'interaction (or lack thereof) between parents/caretakers and between parents and child, e.g. the parents are openly hostile, the child is inappropriately fearful, or the child is avoiding the parents or clinging to one parent and avoiding the other (the child may also paradoxically protect the abusive party, either out of fear of losing a parent or because of verbal threats to keep quiet);',
                'appropriateness of parental/caretaker response to the child\'s injury and/or emotional distress, e.g. lack of concern, lack of physical comforting, anger inappropriately directed towards the child; and',
                'appropriateness of child\'s behaviour relevant to the situation/injury, e.g. inappropriate fear, indifference, lack of emotion;',
              ] },
              'make no accusations; make no comments about your suspicions in front of the parents or bystanders;',
              'transport the child in all cases; and',
              'report suspicions to the receiving hospital and complete the duty to report to the CAS.',
            ],
          },
        ],
        guidelines: [
          { heading: 'The following types of pediatric problems are noteworthy for specific attention when a paramedic is determining if the patient may be a child in need of protection:', items: [
            'Submersion injury',
            'All burns',
            'Accidental ingestions/poisoning',
            'Other types of in-home injuries, e.g. falls',
          ] },
          { heading: 'Scene observations which may prompt consideration that the patient is a child in need of protection include:', items: [
            'Household/siblings dirty, unkempt, and/or in disarray',
            'Evidence of violence, e.g. overturned or broken furniture',
            'Animal/pet abuse',
            'Evidence of substance abuse, e.g. empty liquor bottles, drug paraphernalia',
          ] },
          { heading: 'Physical signs which may prompt consideration that the patient is a child in need of protection include:', items: [
            'Gross or multiple deformities which are incompatible with the incident history, especially in a child under two years of age who is developmentally incapable of sustaining this type of injury',
            'Multiple new and/or old bruises which have not been reported, or which have been reported as all being new',
            'Distinctive marks or burns, e.g. belt, hand imprint, cigarette burns;',
            'Bruises in unusual areas: chest, abdomen, genitals, buttocks',
            'Burns in unusual areas: buttocks, genitals, soles of feet',
            'Signs of long-standing physical neglect, e.g. dirty, malodourous skin, hair and clothing, severe diaper rash, uncut/dirty fingernails',
            'Signs of malnutrition - slack skin folds, extreme pallor, dull/thin hair, dehydration',
            'Signs of "shaking" syndrome - hemorrhages over the whites of the eyes; hand or fingerprints on the neck, upper arms or shoulders; signs of head injury unrelated to the incident history.',
          ] },
          'The duty to report overrides any other provincial statute, including any provisions that would otherwise prohibit someone from making a disclosure (i.e. PHIPA). The failure to report a suspicion in the circumstances set out in the Child and Family Services Act (Ontario) is an offence under that Act.',
          'Paramedics should be aware that the duty to report under the Child and Family Services Act (Ontario) extends to any child he/she encounters in his/her professional duties and is not limited to the person(s) requesting 911 services.',
        ]
      },
      {
        id: 'bls-general-geriatric',
        title: 'General Geriatric Standard',
        sections: [
          {
            preamble: 'In situations involving a geriatric patient, the paramedic shall:',
            items: [
              'assume that all geriatric patients are capable of normal hearing, sight, speech, mobility and mental function unless information is provided to the contrary;',
              'assess living accommodations, living situation, and consider the patient\'s ability to perform activities of daily living;',
              'be aware of patient presentations associated with elder abuse; and',
              { text: 'if elder abuse is suspected,', subItems: [
                'and police not on-scene, offer to contact police; and',
                'alert receiving facility staff.',
              ] },
            ],
          },
        ],
        guidelines: [
          { heading: 'Guideline (paragraph 1)', items: [
            'Geriatric patients can present with atypical signs and symptoms and may have co-morbidities.',
            'Diminished responses to pain, infection, heat/cold may lead the patient and the paramedic to underestimate the severity of the illness/injury.',
            'Geriatric patients are susceptible to skin tearing, abrasions, and bruising; use caution when handling the patient.',
            'Geriatric patients are more likely to experience adverse effects from medication use.',
          ] },
          { heading: 'Guideline (paragraph 2)', items: [
            'Consider referral to local agency resources, when appropriate, e.g. Community Care Access Centre (CCAC), 211.',
            'Activities of daily living include:',
            'Bathing',
            'Dressing',
            'Transferring (e.g. movement and mobility)',
            'Toileting',
            'Eating',
            'If a relative, friend or neighbor is available, they may be able to provide, if necessary, collateral information, such as patient\'s usual level of function and available support.',
          ] },
          { heading: 'Guideline (paragraph 3)', items: [
            'Forms of elder abuse include:',
            'Financial abuse',
            'Psychological abuse',
            'Physical abuse',
            'Sexual abuse',
            'Neglect',
          ] },
        ]
      },
      {
        id: 'bls-mental-health',
        title: 'Mental Health Standard',
        sections: [
          {
            preamble: 'In situations involving a patient with an emotional disturbance (e.g. erratic behaviour), the paramedic shall:',
            items: [
              'consider underlying organic disorders;',
              'give particular attention to personal safety as per the General Measures Standard;',
              { text: 'in cases of patients with known or suspected suicide attempts or self-harm,', subItems: [
                'assume that all attempts are of serious intent, and',
                'ask the patient directly whether they have ideation or intent of suicide or self-harm;',
              ] },
              'in cases in which a patient is being transported without consent, not proceed with transport unless in possession of the appropriate documentation and/or escort (see paragraph 5 below);',
              { text: 'recognize the need for an escort as follows:', subItems: [
                'If a patient is violent or potentially violent, refer to the Violent/Aggressive Patient Standard,',
                'If a patient is in custody under Court or Ontario Review Board Disposition, a Justice of the Peace or hospital\'s officer in charge or delegate will designate the escort;',
              ] },
              { text: 'with respect to use of restraints,', subItems: [
                { text: 'only restrain a patient if,', subItems: [
                  'directed by a physician or police officer,',
                  'an unescorted patient becomes violent en route, or',
                  'use of restraints is required to provide emergency treatment as per the Patient Refusal/Emergency Treatment Standard,',
                ] },
                'only the reasonable and minimum force shall be used to restrain the patient,',
                'where restraints are applied prior to departing a scene under the direction of a physician or police officer, a physician escort (or delegate) or police officer ordering the restraint is required to accompany the patient in the ambulance,',
                'concurrent with paragraph 6(c) above, if a police officer has handcuffed a patient, the paramedic shall not proceed with transport until such a time that the police officer takes the patient into custody and is present in the patient compartment,',
                { text: 'for inter-facility transports,', subItems: [
                  'in cases in which the sending facility is requesting restraints, advise that all restraints must be provided and applied by hospital staff or police prior to transport, and',
                  'in cases in which the patient is restrained, the paramedic shall not proceed with the inter-facility transport unless, 1. the sending physician or sending facility has made a decision that the patient can be transferred safely, either with or without a hospital escort, 2. the patient does not appear to be a safety risk or have the potential to become violent en route, and 3. the paramedic feels comfortable with the decision that the patient does not appear to be a safety risk or who has the potential to become violent en route, and',
                ] },
                { text: 'if the patient is restrained, document the following on the Ambulance Call Report, in conjunction with the requirements outlined in the Documentation of Patient Care Standard:', subItems: [
                  'that the patient was restrained,',
                  'a description of the patient\'s behaviour that required that he/she be restrained or continue to be restrained,',
                  'a description of the means of restraint, including the method of restraint,',
                  'the person (e.g. physician, police officer or paramedic) ordering restraint,',
                  'the position of the patient during restraint, and',
                  'the clinical response to restraint; and',
                ] },
              ] },
              'not transport a patient in the prone position;',
            ],
          },
        ],
        guidelines: [
          { heading: 'Guideline (paragraph 4)', items: [
            'The Mental Health Act (Ontario) has implications in the manner in which a paramedic may deliver care. Recall:',
            'A person who is recommended by a physician for admission to a psychiatric facility as an informal or voluntary patient pursuant to the Mental Health Act (Ontario) may not be transported without consent',
            'The following persons may be transported without consent, subject to the provisions of the Mental Health Act (Ontario) (Note: this list is not exhaustive, please refer to the Mental Health Act for further details):',
            'The subject of an application for assessment signed by a physician under subsection 15(1) or 15(1.1) of the Mental Health Act (Ontario) (Form 1)',
            'The subject of an order for examination signed by a Justice of the Peace under subsection 16(1) of the Mental Health Act (Form 2); and',
            'A person taken into custody by a police officer under subsection 17 of the Mental Health Act (Ontario); and',
            'A patient detained in a psychiatric facility under a certificate of involuntary admission under subsection 20(4) of the Mental Health Act (Ontario) (Form 3) or a certificate of renewal (Form 4).',
          ] },
          { heading: 'Guideline (paragraph 6)', items: [
            'Restrained patients are more susceptible to rapid deterioration. Maintain a high index of suspicion for all restrained patients.',
          ] },
          { heading: 'Guideline (paragraph 7)', items: [
            'When initiating full body restraint, or participating in full body restraint, of a patient:',
            'Attempt to organize the team before attempting restraint.',
            'Prepare all equipment in advance.',
            'Inform the patient of the need to restrain them and explain the procedure.',
            'Immobilize the patient\'s limbs and head in one coordinated effort. Grasp each limb at the main joint and between the main joint and the distal joint, e.g. one hand on the elbow, the other on the forearm.',
            'Place the patient in a supine "spread eagle" position or in the left lateral position.',
            'Restrain extremities as follows:',
            'Secure one arm above the head and the other to the stretcher at waist level, or secure both hands to one side of the stretcher.',
            'Elevate the head of the stretcher to protect the airway and to allow the paramedic greater visibility.',
            'Secure the feet.',
            'Ensure that the limbs are secured to the main frame of the stretcher, not to the stretcher side rails.',
            'If the patient is spitting, consider use of a surgical mask on the patient.',
          ] },
        ]
      },
      {
        id: 'bls-violent-aggressive-patient',
        title: 'Violent/Aggressive Patient Standard',
        sections: [
          {
            preamble: 'In situations involving a violent or aggressive patient, the paramedic shall:',
            items: [
              'consider underlying organic disorders;',
              'give particular attention to personal safety as per the General Measures Standard;',
              'request police assistance on-scene;',
              { text: 'wait for police assistance if,', subItems: [
                'there is an active shooter scenario, or',
                'there is direct evidence of ongoing violence;',
              ] },
              'if electing to delay service as per paragraph 4 above, immediately notify CACC/ACS;',
              { text: 'if the patient is uncooperative, elicit information from others at the scene; attempt to determine,', subItems: [
                'if illness, injury and/or alcohol/drug ingestion has triggered the present behaviour, and',
                'whether there is a past history of violence;',
              ] },
              'be alert for behavioural signs of impending violence;',
              'if confronted, seek a safe egress and attempt to withdraw;',
              'if a safe withdrawal is not feasible, attempt to speak with and calm the patient; and',
              'consider need for restraints as per paragraph 6 of the Mental Health Standard.',
            ],
          },
          {
            preamble: 'In situations involving a patient with an embedded Electronic Control Device (ECD) probe(s), the paramedic shall:',
            items: [
              'remove ECD probe(s);',
            ],
            notes: [
              'Police may require preservation of the probe(s) for evidentiary purposes.',
            ]
          },
        ],
        guidelines: [
          'Consider leaving probe(s) in place and patient transport when ECD probe is embedded above the clavicle, in the nipple, in the genital area or other unusual circumstances.',
        ]
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
        id: 'bls-load-and-go-patient',
        title: 'Load and Go Patient Standard',
        sections: [
          {
            heading: 'General Directive',
            items: [
              { text: 'Subject to paragraph 2 below, the paramedic shall initiate rapid transport:', subItems: [
                'for CTAS 1 patients as per the Prehospital Paramedic CTAS Guide;',
                'for patients who meet bypass protocols as per the Standards (e.g. Field Trauma Triage, Stroke); or',
                { text: 'for obstetrical patients, with:', subItems: [
                  'eclampsia/pre-eclampsia,',
                  'limb presentation,',
                  'multiple births expected,',
                  'premature labour, or',
                  'umbilical cord prolapse.',
                ] },
              ] },
              { text: 'Notwithstanding paragraph 1 above, the following types of patients may require interventions prior to initiation of rapid transport:', subItems: [
                'vital signs absent patients experiencing cardiac arrest in which a TOR is not indicated as per the ALS PCS;',
                'patients with conditions which require immediate, life-saving interventions, which the paramedic can perform; or',
                'obstetrical patients in which delivery appears imminent.',
              ] },
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-police-notification',
        title: 'Police Notification Standard',
        sections: [
          {
            heading: 'General Directive',
            intro: 'Paramedics shall ensure that police are notified in any cases involving unusual or suspicious situations (e.g. sudden death, violence, foul play, accidents involving emergency vehicles).',
            items: [],
          },
        ],
        guidelines: [
          { heading: 'Requesting Police Assistance', items: [
            'Paramedics requesting police assistance will:',
            'Contact his/her CACC/ACS via radio or telephone',
            'State the nature of the request',
            'Indicate the urgency of response and request the estimated time of arrival',
            'Advise of possible hazards',
            'Indicate access routes (where applicable)',
            'Provide police with an update of the situation when they arrive at the scene',
            'The following radio codes should be used to contact police in extenuating circumstances:',
            '10-200 - No immediate danger is evident to patient or paramedic',
            '10-2000 - Immediate danger is evident to patient or paramedic',
            'Emergency button on radio and other communication equipment, when available',
            'The use of police vehicle escorts during transport for the purpose of traffic control is discouraged due to the prevalent danger it presents',
          ] },
          { heading: 'Suspected Foul Play', items: [
            'In cases of suspected foul play, every effort should be made to leave the scene undisturbed and to preserve as much evidence as possible for the police.',
            'The following should be noted:',
            'Once a body is moved it can never be put back in its original position',
            'Careful attention is required whenever something is moved',
            'Whenever possible use the shortest, most direct path to the patient and the same path when leaving the scene',
            'Attempt to preserve the chain of evidence; do not discard linen/clothes after call completion without checking with the receiving facility or investigating officer',
            'The receiving facility staff should also be cautioned regarding the suspected foul play',
          ] },
          { heading: 'Hanging', items: [
            'In cases of hanging, the following special precautions should be taken:',
            'Careful observation should be made of the position of the rope around the patient\'s neck.',
            'The rope should be cut only if it cannot be readily slipped off and in such a way that the knot will be preserved.',
          ] },
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
      {
        id: 'bls-research-trial',
        title: 'Research Trial Standard',
        sections: [
          {
            intro: 'MOH may, at its discretion, approve research trials that include patient care practices that are different from those otherwise set out in the Standards.',
            preamble: 'A paramedic properly enrolled in an approved research trial shall:',
            items: [
              { text: 'determine whether a patient may be treated in accordance with a research trial, only if the following conditions have been met:', subItems: [
                'MOH has approved the patient care practices set out in the research trial as an alternate standard than to those set out in the Standards;',
                { text: 'The research trial has been approved by a Research Ethics Board (REB) that:', subItems: [
                  'abides by and is consistent with the version of the Tri-Council Policy Statement on Ethical Conduct for Research Involving Humans current at the time of submission, and',
                  'meets the requirements for an REB set out in section 15 of O. Reg. 329/04 made under PHIPA, and',
                ] },
                'The research trial has been reviewed and supported in writing by the Ontario Base Hospital Group Medical Advisory Committee;',
              ] },
              'obtain the appropriate patient consent for participation in the research trial; and',
              'provide care in accordance with the approved research trial.',
            ],
          },
        ],
        guidelines: [
          'Recall section 44 of PHIPA, which includes provisions related to personal health information and researchers.',
          'Recall paragraph 11 of the General Measures Standard, which specifies that the paramedic shall also obtain consent for patient care as per the Health Care Consent Act, 1996 (Ontario)',
        ]
      },
    ]
  },

  'bls-medical': {
    lead: 'Medical presentations requiring focused assessment, early risk recognition, and destination planning.',
    sectionIntro: 'Specific standards in Section 2 – Medical Standards have been developed not on the basis of diagnosis, but on the basis of: chief complaint, as stated by the patient/bystanders; presenting problem as indicated by the patient/bystanders; and/or immediately obvious primary survey critical findings, e.g. respiratory failure.\n\nParamedics should be aware of a patient\'s potential to deteriorate and prepare accordingly. Particular attention should be paid to the potential for compromises to airway, breathing or circulation, seizures, and/or emesis.\n\nIn conjunction with history gathering, paramedics shall determine provoking factors, quality, region/radiation/relieving factors, severity, and timing of the chief complaint or presenting problem.\n\nWhen providing patient care as per Section 2 – Medical Standards, a paramedic shall ensure that the patient simultaneously receives care in accordance with the ALS PCS.',
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
                  'notwithstanding paragraph 5(a)(i) above, if signs of cerebral herniation are present after measures to address hypoxemia and hypotension, hyperventilate the patient to attempt to maintain ETCO₂ values of 30-35 mmHg. Signs of cerebral herniation include a deteriorating GCS <9 with any of the following: dilated and unreactive pupils, asymmetric pupillary response, or a motor response that shows either unilateral or bilateral decorticate or decerebrate posturing, or',
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
                  'notwithstanding paragraph 3(a)(i) above, if signs of cerebral herniation are present after measures to address hypoxemia and hypotension, hyperventilate the patient to attempt to maintain ETCO₂ values of 30-35 mmHg. Signs of cerebral herniation include a deteriorating GCS <9 with any of the following: dilated and unreactive pupils, asymmetric pupillary response, or a motor response that shows either unilateral or bilateral decorticate or decerebrate posturing, or',
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


  'bls-appendix-a': {
    lead: 'Appendix A supplemental prompt cards reproduced from the BLS PCS v3.4.',
    sectionIntro: 'Appendix A of the BLS Patient Care Standards contains supplemental paramedic prompt cards. The card text below is reproduced verbatim from BLS PCS v3.4. The FTTG and SMR cards are flowcharts in the original; their decision arrows are written out here as \'YES / NO\' routing lines so they can be read as text. The original one-page visual cards are available under Destination Guidelines and Medical References.',
    standards: [
      {
        id: 'bls-fttg-prompt-card',
        title: 'FTTG Prompt Card',
        sections: [
          {
            heading: 'Paramedic Prompt Card for Field Trauma Triage Standard',
            intro: 'This prompt card provides a quick reference of the Field Trauma Triage Standard contained in the Basic Life Support Patient Care Standards (BLS PCS). Please refer to the BLS PCS for the full standard.',
            preamble: 'Field triage of patients injured by a traumatic mechanism or show evidence of trauma with transport time to LTH or regionally designated equivalent hospital estimated to be <30 minutes*.',
            items: [
              { text: 'ANY physiological criteria met? (Step 1)', subItems: [
                'Patient does not follow commands',
                'SBP <90mmHg',
                'Respiratory Rate <10 or ≥30 breaths per minute or need for ventilatory support (<20 in infant aged <1 year)',
              ] },
              { text: 'ANY anatomical criteria met? (Step 2)', subItems: [
                'Any penetrating injuries to head, neck, torso and extremities proximal to elbow or knee',
                'Chest wall instability or deformity (e.g. flail chest)',
                'Two or more proximal long-bone fractures',
                'Crushed, de-gloved, mangled or pulseless extremity',
                'Amputation proximal to wrist or ankle',
                'Pelvic fractures',
                'Open or depressed skull fracture',
                'Paralysis',
              ] },
              { text: 'ANY mechanism of injury criteria met? (Step 3)', subItems: [
                { text: 'Falls', subItems: [
                  'Adults: falls ≥6 metres (one story is equal to 3 metres)',
                  'Children (age <15): falls ≥3 metres or two to three times the height of the child',
                ] },
                { text: 'High Risk Auto Crash', subItems: [
                  'Intrusion ≥0.3 metres occupant site; ≥0.5 metres any site, including the roof',
                  'Ejection (partial or complete) from automobile',
                  'Death in the same passenger compartment',
                  'Vehicle telemetry data consistent with high risk injury (if available)',
                ] },
                'Pedestrian or bicyclist thrown, run over or struck with significant impact (≥30 km/hr) by an automobile',
                'Motorcycle crash ≥30 km/hr',
              ] },
              { text: 'ANY special criteria met? (Step 4)', subItems: [
                { text: 'Age', subItems: [
                  'Older adults: 1. Risk of injury/death increases after age 55; 2. SBP <110 may represent shock after age 65',
                ] },
                'Anticoagulation and bleeding disorders',
                { text: 'Burns', subItems: [
                  'With trauma mechanism: triage to LTH or regionally designated equivalent hospital',
                ] },
                'Pregnancy ≥20 weeks',
              ] },
            ],
            notes: [
              'Step 1 – YES: Transport directly to LTH or regionally designated equivalent hospital**. NO: proceed to Step 2.',
              'Step 2 – YES: Transport directly to LTH or regionally designated equivalent hospital**. NO: proceed to Step 3.',
              'Step 3 – YES: Determine the need for transport to the LTH; paramedic judgement is required (the paramedic may patch to the base hospital physician). NO: proceed to Step 4.',
              'Step 4 – YES: Determine the need for transport to the LTH; paramedic judgement is required (the paramedic may patch to the base hospital physician).',
              '*The 30 minute transport time may be amended to up to 60 minutes as per an ambulance service PPS, but may not exceed 60 minutes.',
              '**If unable to secure the patient\'s airway or survival to the LTH or regionally designated equivalent hospital is unlikely, transport the patient to the closest ED (unless patient has penetrating trauma to the torso or head/neck). Consider the Trauma TOR as per the ALS PCS.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-smr-prompt-card',
        title: 'SMR Prompt Card',
        sections: [
          {
            heading: 'Paramedic Prompt Card for Spinal Motion Restriction (SMR) Standard',
            intro: 'This prompt card provides a quick reference of the Spinal Motion Restriction (SMR) Standard contained in the Basic Life Support Patient Care Standards (BLS PCS). Please refer to the BLS PCS for the full standard.',
            preamble: 'MOI suggestive of potential spine or spinal cord injury',
            items: [
              { text: 'MOI examples include:', subItems: [
                'Any trauma associated with complaints of neck or back pain',
                'Sports accidents (impaction, falls)',
                'Diving incidents and submersion injuries',
                'Explosions, other types of forceful acceleration/deceleration injuries',
                'Falls (e.g. stairs)',
                'Pedestrians struck',
                'Electrocution',
                'Lightning strikes',
                'Penetrating trauma to the head, neck or torso',
              ] },
              { text: 'ANY risk criteria met?', subItems: [
                'Neck or back pain',
                'Spine tenderness',
                'Neurologic signs or symptoms',
                'Altered level of consciousness',
                'Suspected drug or alcohol intoxication',
                'A distracting painful injury',
                'Anatomic deformity of the spine',
                { text: 'High-energy mechanism of injury:', subItems: [
                  'Fall from elevation greater than 3 feet/5 stairs',
                  'Axial load to the head (e.g. diving accidents)',
                  'MVC high speed (≥100 km/hr), rollover, ejection',
                  'Hit by bus or large truck',
                  'Motorized/ATV recreational vehicles collision',
                  'Bicycle struck or collision',
                ] },
                'Age ≥65 including falls from standing height',
              ] },
              { text: 'Penetrating trauma MOI with ALL penetrating modifiers present?', subItems: [
                'No spine tenderness',
                'No neurologic signs or symptoms',
                'No altered level of consciousness',
                'No evidence of alcohol or drug intoxication',
                'No distracting painful injury',
                'No anatomic deformity of the spine',
              ] },
            ],
            notes: [
              'ANY risk criteria met? – NO: No SMR required. YES: assess Penetrating trauma MOI with ALL penetrating modifiers present?',
              'Penetrating trauma MOI with ALL penetrating modifiers present? – YES: No SMR required. NO: SMR using cervical collar only, while attempting to minimize spinal movement*.',
              '*Backboards may still be indicated for use to minimize spinal movement during extrication.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-stemi-prompt-card',
        title: 'STEMI Prompt Card',
        sections: [
          {
            heading: 'Paramedic Prompt Card for STEMI Hospital Bypass Protocol',
            intro: 'This prompt card provides a quick reference of the STEMI Hospital Bypass Protocol contained in the Basic Life Support Patient Care Standards (BLS PCS). Please refer to the BLS PCS for the full protocol.',
          },
          {
            heading: 'Indications under the STEMI Hospital Bypass Protocol',
            preamble: 'Transport to a PCI centre will be considered for patients who meet ALL of the following:',
            items: [
              '≥18 years of age.',
              'Chest pain or equivalent consistent with cardiac ischemia/myocardial infarction.',
              'Time from onset of current episode of pain <12 hours.',
              { text: '12-lead ECG indicates an acute AMI/STEMI*:', subItems: [
                'At least 2 mm ST-elevation in leads V1-V3 in at least two contiguous leads; AND/OR',
                'At least 1 mm ST-elevation in at least two other anatomically contiguous leads; OR',
                '12-lead ECG computer interpretation of STEMI and paramedic agrees.',
              ] },
            ],
            notes: [
              '*Once activated, continue to follow the STEMI Hospital Bypass Protocol even if the ECG normalizes.',
            ],
          },
          {
            heading: 'Contraindications under the STEMI Hospital Bypass Protocol',
            preamble: 'ANY of the following exclude a patient from being transported under the STEMI Hospital Bypass Protocol:',
            items: [
              'CTAS 1 and the paramedic is unable to secure patient\'s airway or ventilate.',
              '12-lead ECG is consistent with a LBBB, ventricular paced rhythm, or any other STEMI imitator.',
              'Transport to a PCI centre ≥60 minutes from patient contact.**',
              { text: 'Patient is experiencing a complication requiring PCP diversion:**', subItems: [
                'Moderate to severe respiratory distress or use of CPAP.',
                'Hemodynamic instability or symptomatic SBP <90 mmHg at any point.',
                'VSA without ROSC.',
              ] },
              { text: 'Patient is experiencing a complication requiring ACP diversion:**', subItems: [
                'Ventilation inadequate despite assistance.',
                'Hemodynamic instability unresponsive/not amenable to ACP treatment/management.',
                'VSA without ROSC.',
              ] },
            ],
            notes: [
              '**The interventional cardiology program may still permit the transport to the PCI centre.',
              'CACC/ACS will authorize the transport once notified of the patient\'s need for bypass under the STEMI Hospital Bypass Protocol.',
            ],
          },
        ],
        guidelines: []
      },
      {
        id: 'bls-stroke-prompt-card',
        title: 'Stroke Prompt Card',
        sections: [
          {
            heading: 'Paramedic Prompt Card for Acute Stroke Bypass Protocol',
            intro: 'This prompt card provides a quick reference of the Acute Stroke Protocol contained in the Basic Life Support Patient Care Standards (BLS PCS).',
          },
          {
            heading: 'Indications under the Acute Stroke Protocol',
            preamble: 'Redirect or transport to the closest or most appropriate Designated Stroke Centre (DSC)* will be considered for patients who meet BOTH of the following:',
            items: [
              { text: 'Present with a new onset of at least one of the following symptoms suggestive of the onset of an acute stroke:', subItems: [
                'Unilateral arm/leg weakness or drift.',
                'Slurred speech or inappropriate words or mute.',
                'Unilateral facial droop.',
              ] },
              'Can be transported to arrive at a Designated Stroke Centre within 6 hours of a clearly determined time of symptom onset or the time the patient was last seen in a usual state of health.',
            ],
            notes: [
              'Inform the CACC/ACS to aid in the determination of the most appropriate destination.',
              '*A Regional Stroke Centre, District Stroke Centre or Telestroke Centre regardless of EVT capability.',
            ],
          },
          {
            heading: 'Large Vessel Occlusion (LVO) Assessment',
            items: [
              { text: 'Perform a secondary screen for LVO stroke using the Los Angeles Motor Scale (LAMS) for all probable stroke patients presenting within 24 hours of stroke symptom onset.', subItems: [
                'if LAMS is greater than or equal to 4 (≥4), classify the patient as CTAS 2',
                'inform the receiving hospital whether "LVO Clinical Screen is positive or negative" **',
              ] },
            ],
            notes: [
              '** In select regions, LVO Clinical Screen + patients, presenting within 6 hours of stroke symptom onset, may be redirected to the closest EVT centre.',
            ],
          },
          {
            heading: 'Contraindications under the Acute Stroke Protocol',
            preamble: 'ANY of the following exclude a patient from being transported under the Acute Stroke Protocol:',
            items: [
              'CTAS Level 1 and/or uncorrected airway, breathing or circulatory problem.',
              'Symptoms of the stroke resolved prior to paramedic arrival or assessment***.',
              'Blood sugar <3 mmol/L****.',
              'Seizure at onset of symptoms or observed by paramedics.',
              'Glasgow Coma Scale <10.',
              'Terminally ill or palliative care patient.',
              'Duration of out of hospital transport will exceed two hours.',
            ],
            notes: [
              '***Patients whose symptoms improve significantly or resolve during transport will continue to be transported to a Designated Stroke Centre.',
              '****If symptoms persist after correction of blood glucose level, the patient is not contraindicated.',
              'CACC/ACS will authorize the transport once notified of the patient\'s need for redirect or transport under the Acute Stroke Protocol.',
            ],
          },
        ],
        guidelines: []
      },
    ]
  },
};
