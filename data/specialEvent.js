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
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
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
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
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
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
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
    clinicalConsiderations: [
      'Special Event Medical Directives are for time-limited periods when a mass gathering could strain host community resources. Use only with Regional Base Hospital Program authorization after required training.',
    ],
  },
];
