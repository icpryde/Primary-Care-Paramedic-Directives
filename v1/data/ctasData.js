// ── CTAS Prehospital Triage Data ────────────────────────────────────────────
// Source: "Prehospital CTAS Paramedic Guide Version 2.0: Adult"
//         Ontario Ministry of Health
// ────────────────────────────────────────────────────────────────────────────

const CTAS_LEVEL_LABELS = {
  0: 'Obviously Dead',
  1: 'Resuscitation',
  2: 'Emergency',
  3: 'Urgent',
  4: 'Less Urgent',
  5: 'Non-Urgent',
};

const CTAS_HEX_COLORS = {
  0: '#1a1a1a',
  1: '#6B2D8B',
  2: '#D72B2B',
  3: '#E8751A',
  4: '#D4A017',
  5: '#2E8B57',
};

const CTAS_BG_TINTS = {
  0: 'rgba(26, 26, 26, 0.06)',
  1: 'rgba(107, 45, 139, 0.07)',
  2: 'rgba(215, 43, 43, 0.06)',
  3: 'rgba(232, 117, 26, 0.06)',
  4: 'rgba(212, 160, 23, 0.06)',
  5: 'rgba(46, 139, 87, 0.06)',
};

const CTAS_LEVEL_DESCRIPTIONS = {
  0: 'Used for Termination of Resuscitation or Code 5',
  1: 'Threats to life or limb or imminent risk of deterioration',
  2: 'Potential threat to life, limb or function',
  3: 'Potentially progress to a serious problem',
  4: 'Relates to patient age, distress, potential for deterioration or complications',
  5: 'Minor complaints with risk or potential for deterioration',
};

const CTAS_LEVEL_TIMEFRAMES = {
  1: 'Immediate',
  2: '< 15 min',
  3: '< 30 min',
  4: '< 60 min',
  5: '< 120 min',
};

const CTAS_SECTIONS = [
  {
    name: 'Presenting Complaints',
    categories: [
      {
        name: 'Cardiac',
        entries: [
          { description: 'Cardiac arrest', level: 1 },
          { description: 'Pre-arrest', level: 1 },
          { description: 'ROSC', level: 1 },
          { description: 'STEMI', level: 1 },
          { description: 'Chest pain w/ cardiac features w/ signs of shock', level: 1 },
          { description: 'Severe end organ dysfunction to pre-arrest', level: 1 },
          { description: 'Chest pain w/ cardiac features, borderline perfusion', level: 2 },
          { description: 'Chest pain, non-cardiac features – ripping/tearing', level: 2 },
          { description: 'Syncope, new dysrhythmia', level: 2 },
          { description: 'Chest pain, non-cardiac features – acute onset', level: 3 },
        ],
      },
      {
        name: 'Mental Health',
        entries: [
          { description: 'Violent/Homicidal behaviour – imminent harm to self or others, or specific plans', level: 1 },
          { description: 'Bizarre behaviour – uncontrolled', level: 1 },
          { description: 'Depression/Suicidal/Violent behaviour with attempted suicide, clear plan or flight risk', level: 2 },
          { description: 'Hallucinations with acute psychosis', level: 2 },
          { description: 'Severe anxiety/agitation', level: 2 },
          { description: 'Safety/Flight risk', level: 2 },
          { description: 'Depression/Suicidal/Violent behaviour – no plan', level: 3 },
          { description: 'Anxiety moderate', level: 3 },
          { description: 'Depression – no suicidal ideation', level: 4 },
          { description: 'Anxiety mild', level: 4 },
        ],
      },
      {
        name: 'Neurologic',
        entries: [
          { description: 'Active seizure', level: 1 },
          { description: 'Unconscious GCS 3–9', level: 1 },
          { description: 'CVA onset < 6 hrs', level: 2 },
          { description: 'Headache – sudden, severe, worst ever, visual acuity disturbances', level: 2 },
          { description: 'Post-ictal – altered LOA', level: 2 },
          { description: 'Seizure – resolved, normal level of alertness', level: 3 },
          { description: 'CVA onset > 6 hrs or resolved', level: 3 },
          { description: 'Chronic confusion – no change from usual state', level: 4 },
        ],
      },
      {
        name: 'Obstetrics / Gynecology',
        entries: [
          { description: 'Pregnancy ≥ 20 weeks – presenting fetal parts, prolapsed cord', level: 1 },
          { description: 'Vaginal bleeding in the 3rd trimester', level: 1 },
          { description: 'Pregnancy ≥ 20 weeks – active labour (contractions < 2 min), complex hypertension +/- headache, edema or abdo pain', level: 2 },
          { description: 'Post delivery – Mother and infant', level: 2 },
          { description: 'Vaginal bleeding – heavy +/- pregnancy', level: 2 },
          { description: 'Pregnancy ≥ 20 weeks – active labour (contractions ≥ 2 min), leaking amniotic fluid +24 hrs', level: 3 },
          { description: 'Menorrhagia', level: 3 },
          { description: 'Non-pregnant vaginal bleeding – minor/spotting', level: 4 },
        ],
      },
      {
        name: 'Gastrointestinal',
        entries: [
          { description: 'Vomiting blood/rectal bleed – active or large amount', level: 2 },
          { description: 'Vomiting blood – "coffee ground" emesis, small amount', level: 3 },
          { description: 'Rectal bleed – melena, small amount', level: 3 },
          { description: 'Rectal bleed – small amount', level: 4 },
          { description: 'Constipation (mild pain < 4/10)', level: 4 },
          { description: 'Diarrhea – mild, no dehydration', level: 5 },
        ],
      },
      {
        name: 'Respiratory',
        entries: [
          { description: 'Respiratory arrest', level: 1 },
          { description: 'Severe SOB – lethargic or confused, cyanosis, 1–2 word speech, unable to speak', level: 1 },
          { description: 'Complete FBAO', level: 1 },
          { description: 'Moderate SOB – increased work of breathing, clipped sentences, significant stridor but A/W protected', level: 2 },
          { description: 'FBAO with drooling or stridor, hoarseness or dysphagia', level: 2 },
          { description: 'Mild/Moderate tachypnea, SOB on exertion, no obvious increased SOB, full sentences, mild stridor', level: 3 },
          { description: 'FBAO with no distress and difficulty swallowing', level: 3 },
          { description: 'Sore throat/URTI – no respiratory symptoms', level: 5 },
        ],
      },
      {
        name: 'Other',
        entries: [
          { description: 'Dental avulsion', level: 2 },
          { description: 'Epistaxis – uncontrolled', level: 2 },
          { description: 'Eye injury/acute vision loss', level: 2 },
          { description: 'Neck pain – neck stiffness/meningismus', level: 2 },
          { description: 'Sexual assault < 2 hrs', level: 2 },
          { description: 'Sore throat – drooling/stridor, obvious edema/swelling of oropharynx', level: 2 },
          { description: 'UTI symptoms (mild dysuria)', level: 4 },
          { description: 'Dressing change (plus normal vital signs +/- mild pain < 4)', level: 5 },
        ],
      },
      {
        name: 'Trauma',
        entries: [
          { description: 'Amputation of extremity', level: 1 },
          { description: 'Major trauma – severe hemodynamic compromise', level: 1 },
          { description: 'Neurovascular compromise of an extremity', level: 1 },
          { description: 'General trauma – MVC ejection, rollover, extrication time ≥ 20 min, significant intrusion, passenger fatality, impact ≥ 40 km/h unrestrained or impact ≥ 60 km/h restrained', level: 2 },
          { description: 'Motorcycle collision impact ≥ 30 km/hr', level: 2 },
          { description: 'Fall ≥ 6 meters or 2 stories', level: 2 },
          { description: 'Penetrating injury proximal to elbow and knee', level: 2 },
          { description: 'Head/Neck trauma: MVC ejection (partial or complete), unrestrained striking head on windshield; Motorcycle collision; Pedestrian struck; Fall ≥ 1 meter or 5 stairs; Assault – blunt object other than fist/feet; Axial load to head', level: 2 },
          { description: 'Minor contusions, abrasions or lacerations (not requiring closure by any means)', level: 5 },
        ],
      },
      {
        name: 'Environmental',
        entries: [
          { description: 'Burn ≥ 25% BSA', level: 1 },
          { description: 'Chemical burn ≥ 25% BSA', level: 1 },
          { description: 'Hypothermia with severe symptoms', level: 2 },
          { description: 'Frostbite/cold injury – cold pulseless limb', level: 2 },
          { description: 'Chemical exposure to eye(s)', level: 2 },
          { description: 'Major chemical burns to hand(s), feet, groin or face', level: 2 },
          { description: 'Allergic reaction – previous severe reaction', level: 2 },
          { description: 'Burn 5–25% BSA', level: 3 },
          { description: 'Hypothermia with moderate symptoms', level: 3 },
          { description: 'Frostbite/cold injury with blanching of skin', level: 3 },
          { description: 'Burn < 5% BSA', level: 4 },
          { description: 'Hypothermia – mild with normal vital signs', level: 4 },
          { description: 'Laceration/puncture (sutures required)', level: 4 },
          { description: 'Upper extremity injury', level: 4 },
          { description: 'Minor bites (+/- mild pain < 4)', level: 5 },
        ],
      },
    ],
  },
  {
    name: '1st Order Modifiers',
    categories: [
      {
        name: 'Oxygen Saturation',
        entries: [
          { description: '< 90% with severe respiratory distress', level: 1 },
          { description: '< 92% with moderate respiratory distress', level: 2 },
          { description: '92–94% with mild-moderate respiratory distress', level: 3 },
          { description: '≥ 94% with no respiratory distress', level: 4 },
        ],
      },
      {
        name: 'Hemodynamic Stability',
        entries: [
          { description: 'Shock – Evidence of severe end-organ hypoperfusion: marked pallor, cool skin, diaphoresis, weak or thready pulse, hypotension, postural syncope, significant tachycardia or bradycardia, ineffective ventilation or oxygenation, decreased level of consciousness. Could appear flushed, febrile, toxic, as in septic shock.', level: 1 },
          { description: 'Hemodynamic Compromise – Borderline Perfusion: pale, hx diaphoresis, unexplained tachycardia, hx postural hypotension, feeling faint, suspected hypotension.', level: 2 },
          { description: 'Vital signs at the upper and lower ends of normal as they relate to the presenting complaint, especially if they differ from the usual values for the specific patient.', level: 3 },
          { description: 'Normal vital signs', level: 4 },
          { description: 'Deceased patient', level: 0 },
        ],
      },
      {
        name: 'Glasgow Coma Scale',
        entries: [
          { description: 'Unconscious – unable to protect airway, response to pain or loud noise only and without purpose, continuous seizure or progressive deterioration in level of consciousness. GCS 3–9', level: 1 },
          { description: 'Altered level of consciousness – response inappropriate to verbal stimuli, loss of orientation to person, place or time, new impairment of recent memory, altered behaviour. GCS 10–13', level: 2 },
          { description: 'Normal – other modifiers are used to define. GCS 14–15', level: 3 },
        ],
      },
      {
        name: 'Temperature',
        entries: [
          { description: '< 36°C or ≥ 38.5°C – Immuno-compromised: neutropenia, chemotherapy, immune-suppressive drugs (including steroids)', level: 2 },
          { description: 'Appears septic: evidence of infection, SIRS positive (HR ≥ 90, RR ≥ 20 bpm), or evidence of hemodynamic compromise, respiratory distress, decreased level of consciousness', level: 2 },
          { description: 'Appears unwell: < 3 SIRS positive criteria but looks ill (flushed, lethargic, anxious or agitated)', level: 3 },
          { description: 'Appears well: comfortable and in no distress', level: 4 },
        ],
      },
    ],
  },
  {
    name: '2nd Order Modifiers',
    categories: [
      {
        name: 'Pain',
        entries: [
          { description: 'Severe (8–10/10); Location: abdomen; Duration: acute; Cause: trauma', level: 1 },
          { description: 'Severe (8–10/10); Location: central; Duration: acute', level: 2 },
          { description: 'Moderate (4–7/10); Location: central; Duration: acute', level: 3 },
          { description: 'Severe (8–10/10); Location: peripheral; Duration: acute', level: 3 },
          { description: 'Severe (8–10/10); Location: central; Duration: chronic', level: 3 },
          { description: 'Mild (0–3/10); Location: central; Duration: acute', level: 4 },
          { description: 'Moderate (4–7/10); Location: peripheral; Duration: acute', level: 4 },
          { description: 'Moderate (4–7/10); Location: peripheral; Duration: chronic', level: 4 },
          { description: 'Severe (8–10/10); Location: central; Duration: chronic', level: 4 },
          { description: 'Mild (0–3/10); Location: peripheral; Duration: acute or chronic', level: 5 },
          { description: 'Mild (0–3/10); Location: central; Duration: chronic', level: 5 },
        ],
      },
      {
        name: 'Blood Glucose',
        entries: [
          { description: '< 3 mmol/L with confusion, seizure, diaphoresis, behavioural change, acute focal deficits', level: 2 },
          { description: '≥ 18 mmol/L with dyspnea, tachypnea, dehydration, thirst, weakness, polyuria', level: 2 },
          { description: '< 3 mmol/L with no symptoms', level: 3 },
          { description: '≥ 18 mmol/L with no symptoms', level: 3 },
        ],
      },
      {
        name: 'Blood Pressure',
        entries: [
          { description: 'Systolic BP ≥ 220 or diastolic ≥ 130 w/ any other symptoms (e.g. headache, CP, SOB, nausea)', level: 2 },
          { description: 'Systolic ≥ 220 or diastolic ≥ 130 w/ no symptoms', level: 3 },
          { description: 'Systolic BP 200–220 or diastolic 110–130 w/ any other symptoms (e.g. headache, CP, SOB, nausea)', level: 3 },
          { description: 'Systolic BP 200–220 or diastolic 110–130 w/ no symptoms', level: 4 },
        ],
      },
      {
        name: 'Dehydration',
        entries: [
          { description: 'Severe – marked volume loss with classic signs of dehydration and signs and symptoms of shock', level: 1 },
          { description: 'Moderate – dry mucous membranes, tachycardia, plus or minus decreased skin turgor and decreased urine output', level: 2 },
          { description: 'Mild – stable vital signs with complaints of increasing thirst and concentrated urine and a history of decreased fluid intake or increased fluid loss or both', level: 3 },
          { description: 'Potential – no symptoms of dehydration, presenting with fluid loss ongoing or difficulty tolerating oral fluids', level: 4 },
        ],
      },
      {
        name: 'Bleeding',
        entries: [
          { description: 'Congenital bleeding disorders, severe liver failure, or anticoagulant therapy, and bleeding: Head (intracranial) and neck; Chest, abdomen, pelvis, spine; Massive vaginal hemorrhage; Iliopsoas muscle and hip; Extremity muscle compartments; Fractures or dislocations; Deep lacerations; Any uncontrolled bleeding', level: 2 },
          { description: 'Congenital bleeding disorders, severe liver failure, or anticoagulant therapy, and bleeding: Moderate, minor bleeds; Nose (epistaxis); Mouth (including gums); Joints (hemarthroses); Menorrhagia; Abrasions and superficial lacerations', level: 5 },
        ],
      },
      {
        name: 'Mental Health',
        entries: [
          { description: 'Abuse – physical, mental, high emotional stress', level: 3 },
          { description: 'Insomnia – acute', level: 4 },
          { description: 'Insomnia – chronic', level: 5 },
          { description: 'Bizarre behaviour – chronic, non-urgent', level: 5 },
        ],
      },
    ],
  },
];

/**
 * Group all entries across all sections by CTAS level (1–5, skipping 0).
 * Returns { 1: [{categoryName, sectionName, entries}], 2: [...], ... }
 */
function getCtasEntriesByLevel() {
  var result = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (var s = 0; s < CTAS_SECTIONS.length; s++) {
    var section = CTAS_SECTIONS[s];
    for (var c = 0; c < section.categories.length; c++) {
      var category = section.categories[c];
      var byLevel = {};
      for (var e = 0; e < category.entries.length; e++) {
        var entry = category.entries[e];
        if (entry.level === 0) continue;
        if (!byLevel[entry.level]) byLevel[entry.level] = [];
        byLevel[entry.level].push(entry);
      }
      var levels = Object.keys(byLevel);
      for (var li = 0; li < levels.length; li++) {
        var lvl = Number(levels[li]);
        if (result[lvl]) {
          result[lvl].push({
            categoryName: category.name,
            sectionName: section.name,
            entries: byLevel[lvl],
          });
        }
      }
    }
  }
  return result;
}
