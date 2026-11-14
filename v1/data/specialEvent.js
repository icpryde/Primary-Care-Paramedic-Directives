// ALS PCS v5.4 – PCP Auxiliary Medical Directives – SPECIAL EVENT (Section 3)
// Source: Ontario MOH Advanced Life Support PCS

const SPECIAL_EVENT_DIRECTIVES = [
  {
    id: 'se-minor-abrasions',
    title: 'Minor Abrasions',
    fullTitle: 'Minor Abrasions Medical Directive – AUXILIARY – SPECIAL EVENT',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized.',
    indications: [
      'Minor abrasions;',
      'AND',
      'A mass gathering that could potentially strain the resources of the host community',
      'AND',
      'The special event directive has been authorized for use by the Medical Director for a specific mass gathering.',
    ],
    conditions: {
      'Topical antibiotic': {
        age: 'N/A',
        loa: 'Unaltered',
        hr: 'N/A',
        rr: 'N/A',
        sbp: 'N/A',
        other: 'N/A',
      },
    },
    contraindications: {
      'Topical antibiotic': [
        'Allergy or sensitivity to any of the components of the topical antibiotic',
      ],
    },
    treatments: [
      {
        med: 'Topical antibiotic',
        rows: [
          ['Consider topical antibiotic ointment'],
          ['Consider release from care'],
        ],
      },
    ],
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
      'Advise patient that if the problem persists or worsens that they should seek further medical attention.',
    ],
  },
  {
    id: 'se-minor-allergic',
    title: 'Minor Allergic Reaction',
    fullTitle: 'Minor Allergic Reaction Medical Directive – AUXILIARY – SPECIAL EVENT',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized.',
    indications: [
      'Signs consistent with a minor allergic reaction;',
      'AND',
      'A mass gathering that could potentially strain the resources of the host community',
      'AND',
      'The special event directive has been authorized for use by the Medical Director for a specific mass gathering.',
    ],
    conditions: {
      diphenhydrAMINE: {
        age: '≥ 18 years',
        loa: 'Unaltered',
        hr: 'N/A',
        rr: 'N/A',
        sbp: 'Normotension',
        other: 'N/A',
      },
    },
    contraindications: {
      diphenhydrAMINE: [
        'Allergy or sensitivity to diphenhydramine',
        'Antihistamine or sedative use in previous 4 hours',
        'Signs or symptoms of moderate to severe allergic reaction',
        'Signs or symptoms of intoxication',
        'Wheezing',
      ],
    },
    treatments: [
      {
        med: 'diphenhydrAMINE',
        cols: ['Route', 'Dose', 'Max. single dose', 'Dosing interval', 'Max. # of doses'],
        rows: [['PO', '50 mg', '50 mg', 'N/A', '1']],
        note: 'Consider diphenhydrAMINE. Consider release from care.',
      },
    ],
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
      'Advise patient that if the problem persists or worsens that they should seek further medical attention.',
    ],
  },
  {
    id: 'se-msk-pain',
    title: 'Musculoskeletal Pain',
    fullTitle: 'Musculoskeletal Pain Medical Directive – AUXILIARY – SPECIAL EVENT',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized.',
    indications: [
      'Minor musculoskeletal pain;',
      'AND',
      'A mass gathering that could potentially strain the resources of the host community',
      'AND',
      'The special event directive has been authorized for use by the Medical Director for a specific mass gathering.',
    ],
    conditions: {
      acetaminophen: {
        age: '≥ 18 years',
        loa: 'Unaltered',
        hr: 'N/A',
        rr: 'N/A',
        sbp: 'N/A',
        other: 'N/A',
      },
    },
    contraindications: {
      acetaminophen: [
        'Acetaminophen use within previous 4 hours',
        'Allergy or sensitivity to acetaminophen',
        'Signs or symptoms of intoxication',
      ],
    },
    treatments: [
      {
        med: 'acetaminophen',
        cols: ['Route', 'Dose', 'Max. single dose', 'Dosing interval', 'Max. # of doses'],
        rows: [['PO', '960–1000 mg', '960–1000 mg', 'N/A', '1']],
        note: 'Consider acetaminophen. Consider release from care.',
      },
    ],
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
      'Advise patient that if the problem persists or worsens that they should seek further medical attention.',
    ],
  },
  {
    id: 'se-headache',
    title: 'Headache',
    fullTitle: 'Headache Medical Directive – AUXILIARY – SPECIAL EVENT',
    scopeNote: 'A Primary Care Paramedic may provide the treatment prescribed in this auxiliary Medical Directive if authorized.',
    indications: [
      'Uncomplicated headache conforming to the patient’s usual pattern;',
      'AND',
      'A mass gathering that could potentially strain the resources of the host community',
      'AND',
      'The special event directive has been authorized for use by the Medical Director for a specific mass gathering.',
    ],
    conditions: {
      acetaminophen: {
        age: '≥ 18 years',
        loa: 'Unaltered',
        hr: 'N/A',
        rr: 'N/A',
        sbp: 'N/A',
        other: 'N/A',
      },
    },
    contraindications: {
      acetaminophen: [
        'Acetaminophen use within previous 4 hours',
        'Allergy or sensitivity to acetaminophen',
        'Signs or symptoms of intoxication',
      ],
    },
    treatments: [
      {
        med: 'acetaminophen',
        cols: ['Route', 'Dose', 'Max. single dose', 'Dosing interval', 'Max. # of doses'],
        rows: [['PO', '960–1000 mg', '960–1000 mg', 'N/A', '1']],
        note: 'Consider acetaminophen. Consider release from care.',
      },
    ],
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
      'Advise patient that if the problem persists or worsens that they should seek further medical attention.',
    ],
  },
];
