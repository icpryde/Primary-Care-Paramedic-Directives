// ── Ontario ALS PCS v5.4  –  Companion Document Content ────────────────────
// Source: OBHG ALS PCS v5.4 Companion Document (June 2025)
//
// Structure per entry:
//   id           – matches directive id
//   title        – display title
//   category     – matches category id
//   introduction – string
//   essentials   – string
//   interventions– string
//   references   – string[] | null
// ────────────────────────────────────────────────────────────────────────────

const COMPANION = [

  // ════════════════════════════════════════════════════════
  //  AIRWAY / BREATHING
  // ════════════════════════════════════════════════════════

  {
    id: 'bronchoconstriction',
    title: 'Bronchoconstriction',
    category: 'airway',
    introduction: `Bronchoconstriction is a condition in which the bronchial tubes that lead to the lungs swell or contract, leading to constriction of the airways. Bronchoconstriction can be caused by various etiologies including asthma and COPD. Symptoms of bronchoconstriction may include dyspnea, wheezing, coughing, and decreased air entry or silent chest.`,
    essentials: `Paramedics should use caution when ventilating asthmatic patients. The increased ventilatory volume and air trapping can increase the intrathoracic pressure, leading to decreased venous return to the heart as well as disrupting normal lung functioning. To prevent possible complications from this, such as tension pneumothorax, atelectasis or hemodynamic compromise from impaired cardiac output, allow for a longer expiratory phase when ventilating an asthmatic patient.

For COPD or asthma patients in respiratory failure who have an initial EtCO₂ of >50 mmHg, attempt to maintain EtCO₂ between 50–60 mmHg to prevent further respiratory compromise due to hypercapnia and to avoid worsening acidosis.

Dexamethasone, a corticosteroid, primarily reduces inflammation and suppresses immune responses by modulating glucocorticoid receptors.

In patients using anabolic steroids or undergoing hormone replacement therapy, the risks of administering dexamethasone are relatively low because corticosteroids like dexamethasone bind to the glucocorticoid receptor, not the androgen receptor that anabolic steroids target. Corticosteroids and anabolic steroids, though both termed "steroids," act through different mechanisms and have distinct effects on the body. In these situations, dexamethasone is a reasonable option for treatment.`,
    interventions: `The initial treatment for bronchoconstriction will depend on the patient's underlying cause and severity and may include EPINEPHrine (asthmatics only), salbutamol and CPAP (COPD only). Salbutamol should be considered immediately following EPINEPHrine administration for asthmatics.

Dexamethasone is a glucocorticoid medication commonly used to relieve inflammation associated with asthma and COPD exacerbations and may be administered in conjunction with other treatments. Although dexamethasone has no immediate life-saving effects, it may reduce patient morbidity, ICU admissions, and intubation rates, and improve patient's long-term outcome.`,
    references: null,
  },

  {
    id: 'allergic-reaction',
    title: 'Moderate to Severe Allergic Reaction',
    category: 'airway',
    introduction: `An allergic reaction is defined as an inappropriate response of the immune system to a normally harmless substance. The immune response can vary from a mild reaction, with symptoms that are generally localized, such as urticaria or itchy skin; to a more severe response, which can include shortness of breath, facial edema, vomiting, diarrhea, and hypotension.

Anaphylaxis is a life-threatening allergic reaction caused by systemic release of inflammatory mediators that produces widespread capillary permeability, vasodilation and smooth muscle contractility. This reaction typically manifests in multiple body systems, however, there are instances where a single system is primarily and severely affected.`,
    essentials: `In patients experiencing anaphylaxis, the onset of symptoms and respiratory or cardiac arrest can occur within five (5) minutes. EPINEPHrine should be administered as soon as anaphylaxis is recognized to prevent the progression of symptoms. Any delays in the administration of EPINEPHrine are associated with greater mortality.

Patients with a previous history of anaphylaxis and those presenting with flushing, diaphoresis, or dyspnea are more likely to require multiple doses of EPINEPHrine to control symptoms.

Paramedics need to be aware of biphasic anaphylaxis — characterized by an initial reaction that meets criteria for anaphylaxis, followed by an asymptomatic period, and then a subsequent return of symptoms without further exposure to the antigen. The time between resolution of the first reaction and the start of the second can range from 1 hour to up to 48 hours.

H1 antihistamines, such as diphenhydrAMINE, relieve minor symptoms associated with localized allergic reactions. These medications do NOT relieve upper or lower airway edema, hypotension, or shock caused by systemic anaphylaxis. Therefore, diphenhydrAMINE should not be used in the place of EPINEPHrine.

For treatment of bronchospasm not responsive to EPINEPHrine, inhaled bronchodilators such as salbutamol should be administered. Bronchodilators are adjunctive treatments to EPINEPHrine because they do not prevent or relieve mucosal edema in the upper airway.`,
    interventions: `The anterolateral mid-thigh is the preferred site for intramuscular EPINEPHrine administration due to improved absorption.

In some situations, patients may remain severely hypotensive after the administration of EPINEPHrine and should be treated according to the Intravenous and Fluid Therapy Medical Directive.

In the prehospital setting, patients experiencing anaphylaxis should NOT be considered for dexamethasone. There is little evidence that it improves patient outcomes. In the emergency department, other steroids may be administered to treat or prevent rebound anaphylaxis, however dexamethasone is not the steroid of choice.`,
    references: [
      'Campbell, R., Kelso, J., et al. (2023). Anaphylaxis: Emergency Treatment. UpToDate.',
      'Fernandez, James. (2022). Overview of Allergic Reactions. Merck Manuals.',
      'Lieberman, P.L., Kelso, J.M., & Feldweg, A.M. (2023). Biphasic and protracted anaphylaxis. UpToDate.',
      'Golden, D.B.K., et al. "Anaphylaxis: A 2023 Practice Parameter Update." Annals of Allergy, Asthma & Immunology, vol. 132, no. 2, 2024, pp. 124–176.',
    ],
  },

  {
    id: 'croup',
    title: 'Croup Medical Directive',
    category: 'airway',
    introduction: `Croup (laryngotracheobronchitis) is a common respiratory illness in children, typically caused by a viral infection (most commonly parainfluenza virus) that results in inflammation of the larynx, trachea, and bronchi. The characteristic "seal bark" or "brassy" cough, inspiratory stridor, and hoarseness result from subglottic edema. Severity ranges from mild to life-threatening airway obstruction.`,
    essentials: `For severe presentations, EPINEPHrine should be the priority treatment. Dexamethasone can be considered in addition to EPINEPHrine for severe croup. For mild to moderate presentations, only dexamethasone should be considered.

Prior to initiating nebulized EPINEPHrine, moist/cold air may be attempted if available and patient's condition permits.

Croup is occurring more and more frequently in older patients, including adults, and if the indications are met, a patch to a BHP would be required to consider treatment under this medical directive.

When treating with dexamethasone, the contraindication to steroids only applies to systemic steroids (PO, parenteral) and NOT inhaled or topical steroids. Inhaled steroids are very specific to lung tissue and do not contribute to systemic absorption.

If a patient has received systemic steroids in the past 48 hours, an additional dose is unlikely to improve their condition due to its long half-life.`,
    interventions: `Nebulized EPINEPHrine works by reducing subglottic edema through alpha-adrenergic vasoconstriction. Its effects are relatively short-lived (approximately 2 hours), so patients should be monitored for rebound symptoms.

Dexamethasone reduces inflammation via glucocorticoid receptor modulation. The effect takes approximately 30 minutes to onset but lasts 12–24 hours, providing sustained benefit.

If EPINEPHrine is administered, it is recommended to observe the patient for at least 2 hours post-administration to monitor for rebound stridor.`,
    references: null,
  },

  {
    id: 'cpap',
    title: 'Continuous Positive Airway Pressure (CPAP)',
    category: 'airway',
    introduction: `Continuous Positive Airway Pressure (CPAP) is a non-invasive ventilation strategy that delivers continuous positive pressure to the airways during both inspiration and expiration. This constant pressure maintains alveolar recruitment, reduces the work of breathing, improves oxygenation, and decreases venous return to the heart (which reduces preload in cardiogenic pulmonary edema).`,
    essentials: `CPAP is indicated for severe respiratory distress associated with acute pulmonary edema (regardless of origin) or COPD exacerbation. It should be considered as additive therapy – not a replacement – to the Bronchoconstriction or Acute Cardiogenic Pulmonary Edema medical directives.

CPAP may be interrupted momentarily to administer nitroglycerin sublingually. Salbutamol can be administered via the MDI port without interrupting CPAP.

Patient tolerance and cooperation are essential. Monitor closely for deterioration, including vomiting or loss of airway protective reflexes.`,
    interventions: `Begin at 5 cmH₂O PEEP and titrate in 2.5 cmH₂O increments to a maximum of 10 cmH₂O. Titrate FiO₂ to achieve SpO₂ ≥94%.

Reassess patient every 5 minutes for improvement or deterioration. Signs of improvement include decreased respiratory rate, decreased accessory muscle use, improved SpO₂, and patient reports of subjective improvement.

If the patient deteriorates, develops altered LOA, or cannot tolerate the mask, remove CPAP immediately and manage the airway accordingly.`,
    references: null,
  },

  {
    id: 'supraglottic',
    title: 'Supraglottic Airway',
    category: 'airway',
    introduction: `Supraglottic airway (SGA) devices are advanced airway adjuncts that are inserted blindly into the hypopharynx to create a seal around the laryngeal inlet, allowing for ventilation. They are easier and faster to insert than endotracheal tubes and do not require visualization of the vocal cords. Common devices include the LMA (laryngeal mask airway), i-gel, and King LT.`,
    essentials: `Consider withholding the supraglottic airway (SGA) if the patient is actively vomiting due to an increased risk of aspiration. Active vomiting is considered ongoing vomiting where the paramedic is unable to clear the airway. If the patient has vomited and the airway has been cleared successfully, a supraglottic airway may be inserted.

The number of attempts is clearly defined as two (2) total per patient – NOT per provider.

Confirmation of SGA insertion requires ETCO₂ waveform capnography as the primary method. If unavailable, at least two (2) secondary methods must be used. SGA placement should be verified frequently and again at transfer of care.`,
    interventions: `Select the correctly-sized SGA based on patient height/weight per manufacturer guidelines. Lubricate the distal tip and posterior aspect of the tube, avoiding the ventilation aperture.

In the event the patient with an SGA in place sustains a ROSC, the SGA should only be removed if the gag reflex is stimulated or the patient begins to vomit; expect to remove it as the level of awareness improves.`,
    references: null,
  },

  {
    id: 'airway-suctioning',
    title: 'Advanced Airway and Tracheostomy Suctioning & Reinsertion',
    category: 'airway',
    introduction: `Patients with artificial airways (endotracheal tubes, supraglottic airways with gastric ports, or tracheostomy tubes) are unable to effectively clear secretions on their own. Suctioning removes secretions that can obstruct the airway and impair ventilation. Emergency tracheostomy reinsertion may be required when a tracheostomy tube has been accidentally dislodged in a patient who cannot maintain their airway through the mouth/nose.`,
    essentials: `Insert the catheter and apply suction (10 seconds or less) while gently twisting and withdrawing the catheter.

To minimize hypoxia and possible trauma, do not suction more frequently than once per minute.

Exceeding the recommended suction pressures or maximum number can cause injury and swelling to the mucosal tissues of the airway and increases the risk of arrhythmia.

If all suctioning attempts have been made to clear the tracheostomy and the paramedic is unable to oxygenate/ventilate, the tracheostomy is to be considered a foreign body airway obstruction (FBAO). Remove the tracheostomy to gain access to the stoma for oxygenation/PPV.`,
    interventions: `For tracheostomy reinsertion:
• Slightly extend the neck to open the stoma.
• Time insertion with the patient's inhalation phase.
• Gently insert the tube following the natural curvature of the neck; do not force.
• Secure the outer cannula by inflating the cuff with 5–8 cc air (if applicable).

In situations where reinsertion fails, occlude the stoma and attempt standard oral airway maneuvers and ventilation through the mouth and nose.

For laryngectomy patients or when occluding the stoma and ventilating through mouth/nose is unsuccessful, use an appropriately sized mask sealed around the stoma attached to a BVM.

Utilize a family member or caregiver who is on scene and knowledgeable to replace the tracheostomy tube or inner cannula when possible – they will be more experienced and comfortable with the procedure.`,
    references: null,
  },

  // ════════════════════════════════════════════════════════
  //  CARDIAC / CIRCULATION
  // ════════════════════════════════════════════════════════

  {
    id: 'medical-cardiac-arrest',
    title: 'Medical Cardiac Arrest',
    category: 'cardiac',
    introduction: `Medical (non-traumatic) cardiac arrest is a sudden cessation of effective cardiac activity resulting in cessation of circulation. The most common initial rhythms are ventricular fibrillation (VF) and pulseless ventricular tachycardia (pVT), followed by pulseless electrical activity (PEA) and asystole. Early defibrillation and high-quality CPR are the cornerstone interventions.`,
    essentials: `The initial rhythm interpretation/analysis and defibrillation should be performed as soon as possible. Following the initial interpretation, additional rhythm interpretations should occur at two (2) minute intervals with a focus on delivery of high quality chest compressions.

As a general rule, paramedics do NOT count pre-arrival interventions into their patient care. However, in the setting of cardiac arrest where a medical TOR might apply, paramedics should complete a full 20 minutes of resuscitation.

Compressions during the charge cycle should be considered to minimize the peri-shock pause.

When en route using semi-automated rhythm analysis, the ambulance must be stopped to minimize artifact and the risk of inaccurate rhythm analysis.

For a witnessed arrest in the back of the ambulance, paramedics can decide whether to stay and perform three full analyses or provide one analysis and go. The paramedic should provide at minimum one analysis.

Supraglottic Airways (SGA): The sequence for advanced airways is deliberate – based on reduced importance of airway in 2015 AHA guidelines, ease of SGA vs. complexity of ETI, and emphasis on minimally interrupted compressions.`,
    interventions: `If the timing of EPINEPHrine and an antiarrhythmic fall within the same CPR cycle, proceed – ensuring a saline flush between the two medications. IV and IO (and CVAD) routes of administration are preferred over ETT. ETT may be utilized if preferred routes are delayed by more than 5 minutes.

Fluid bolus may be indicated for PEA patients to provide preload. If hypovolemia is suspected, a bolus is also indicated.

Early transport considerations include: pregnancy ≥20 weeks; known reversible cause unable to be addressed on scene. Reversible causes (4 Hs and 4 Ts): Hypovolemia, Hydrogen ion (acidosis), Hyper/Hypokalemia, Hypothermia; Tension pneumothorax, Thrombosis (pulmonary and coronary), Tamponade (cardiac), Toxins.

DSED/VCD: For refractory VF (defined as persistent VF after 3 consecutive shocks). The second defibrillator for DSED will be a paramedic service or fire service defibrillator (if available and agreed to by fire service). If unavailable, Vector Change Defibrillation should be provided. Transport following three doses of DSED or VCD.`,
    references: null,
  },

  {
    id: 'trauma-cardiac-arrest',
    title: 'Trauma Cardiac Arrest',
    category: 'cardiac',
    introduction: `Traumatic cardiac arrest has traditionally been associated with very poor outcomes; however, recent evidence suggests that survival rates can be meaningful, particularly in penetrating trauma (gunshot wounds, stab wounds) where rapid surgical hemorrhage control is the definitive treatment. The key reversible causes in traumatic arrest are hypoxia and tension pneumothorax.`,
    essentials: `The focus in traumatic cardiac arrest is on identifying and treating reversible causes:
1. Hemorrhage control (tourniquets, direct pressure)
2. Airway management and oxygenation
3. Bilateral needle thoracostomy (if authorized) – even without confirmed signs, tension pneumothorax is presumed
4. Fluid resuscitation for hypovolemia

Standard ACLS medications (EPINEPHrine, amiodarone) have limited evidence in traumatic arrest and should not be prioritized over addressing reversible causes.`,
    interventions: `An intravenous fluid bolus may be considered to assist with reversible causes if transport to the ED will not be delayed.

For penetrating trauma arrest, the priority is rapid transport to a capable trauma center where surgical hemorrhage control can be performed. Scene time should be minimized.

For blunt trauma arrest with suspected tension pneumothorax, bilateral needle thoracostomy should be performed as soon as possible.`,
    references: null,
  },

  {
    id: 'newborn-resuscitation',
    title: 'Newborn Resuscitation',
    category: 'cardiac',
    introduction: `While the vast majority of live births are uneventful for both the birthing patient and the newborn, approximately 10% of newborns require some assistance to begin breathing following delivery, and less than 1% require extensive resuscitation to restore cardiorespiratory function. The primary goal of neonatal care at birth is to facilitate the transition from the uterus to the external environment. The most important priority for newborn survival is the establishment of adequate lung inflation and ventilation after birth.`,
    essentials: `While drying, positioning, and stimulating are applicable for all newborns, this medical directive is only applicable to patients under <24 hours of age. Prevention of hypothermia is an important focus for newborn resuscitation. Inflation and ventilation of the lungs are the priority in newly born infants who need support after birth.

Ensure cardiac monitoring is initiated to accurately determine heart rate. Cardiac monitoring provides the most rapid and accurate measurement of the newborn's heart rate at birth and during resuscitation.

Oxygen titration is considered best practice to mitigate the risk of tissue damage caused by over-oxygenation. However, in the prehospital setting, paramedics only have the ability to administer either 100% oxygen or room air during positive pressure ventilation.

SpO₂ targets (pre-ductal, right hand probe):
• 1 minute: 60–65%
• 2 minutes: 65–70%
• 3 minutes: 70–75%
• 4 minutes: 75–80%
• 5 minutes: 80–85%
• 10 minutes: 85–95%`,
    interventions: `Routine suctioning of the airway is NOT required, even when meconium is present, if the newborn is breathing effectively. As newborns are obligate nose breathers, suctioning the mouth and pharynx before the nose may be required if the newborn has poor muscle tone, isn't breathing/crying, and meconium is present.

If ventilations are ineffective, consider 'MR SOPA' before moving to more invasive airway management:
• M – Mask seal (adjust size or seal)
• R – Reposition airway to "sniffing" position
• S – Suction mouth and nose
• O – Open mouth using manual maneuvers
• P – Positive pressure (increase pressure for chest rise)
• A – Alternate Airway (SGA, ETT, etc.)

The concentration and dosing of EPINEPHrine is very specific: ONLY the 1:10,000 (0.1 mg/mL) solution is used during newborn resuscitation, regardless of route. Unlike the adult, the ETT dose is 10× the IV/IO dose.`,
    references: [
      'American Heart Association. (2020). 2020 Handbook of Emergency Cardiovascular Care for Healthcare Providers.',
      'Wyckoff, M.H., et al. (2020). 2020 International Consensus on Cardiopulmonary Resuscitation and Emergency Cardiovascular Care Science. Circulation, 142(16_suppl_1), S185–S221.',
    ],
  },

  {
    id: 'rosc',
    title: 'Return of Spontaneous Circulation (ROSC)',
    category: 'cardiac',
    introduction: `Return of spontaneous circulation (ROSC) represents the resumption of sustained perfusing cardiac activity associated with significant respiratory effort. While achieving ROSC is a significant milestone, the post-cardiac arrest period is associated with unique physiological challenges including myocardial dysfunction, systemic ischemia-reperfusion injury, and the precipitating cause of arrest.`,
    essentials: `Optimizing oxygenation and targeting SpO₂ of 94–98% (avoiding 100%) will provide adequate oxygenation and will minimize vasoconstriction and the development of oxygen free radicals. Despite ideal SpO₂ values, oxygen administration should be continued if the patient remains unstable.

There is insufficient evidence to support the routine use of an antiarrhythmic post ROSC.`,
    interventions: `Post ROSC, the goal is to maintain ventilation at approximately 10 breaths/minute for adults, and titrate to achieve ETCO₂ of 30–40 mmHg. Hyperventilation MUST be avoided. A low ETCO₂ may reflect metabolic acidosis – do not hypoventilate in an attempt to artificially raise a low ETCO₂.

Fluid bolus precedes DOPamine administration. Once started, ensure time is allowed for the fluid intervention to be evaluated prior to initiating DOPamine.

Regardless of the amount of fluid administered prior to ROSC, if chest auscultation is "clear," a 10 mL/kg fluid bolus (max 1,000 mL) may be administered targeting SBP ≥90 mmHg.`,
    references: [
      'Callaway, C.W., et al. (2015). AHA Guidelines for CPR and ECC Part 8: Post–Cardiac Arrest Care. Circulation, 132(18 Suppl 2), S465–482.',
    ],
  },

  {
    id: 'cardiac-ischemia',
    title: 'Cardiac Ischemia',
    category: 'cardiac',
    introduction: `Cardiac ischemia occurs when myocardial oxygen demand exceeds supply, typically due to atherosclerotic plaque rupture and thrombus formation in the coronary arteries. This spectrum includes unstable angina, NSTEMI (non-ST-elevation myocardial infarction), and STEMI (ST-elevation myocardial infarction). Rapid identification and treatment, particularly for STEMI, directly impacts patient outcomes.`,
    essentials: `12-Lead Acquisition: Considering 12-lead ECG acquisition and interpretation for STEMI is now a defined step that precedes nitroglycerin consideration. Manual interpretation is preferred over computer-generated interpretation. The goal is ECG acquisition within the first 10 minutes of patient contact.

In the event the 12-lead ECG identifies an inferior STEMI, a minimum V4R must be completed to rule in or out a right ventricular infarction (RVI) when considering nitroglycerin. These patients are often preload dependent and nitroglycerin may cause significant hypotension.

ASA Administration: ASA has a wide therapeutic index (the effective dose without side effects can be from 80 – 1500 mg). Apply the cardiac ischemia directive as if no care had been rendered prior to your arrival (i.e., administer ASA regardless of prior ASA intake).

CHF and STEMI overlap: Many patients at risk for myocardial infarction also have a history of congestive heart failure (CHF), and it can be difficult to tell which process is driving the presentation. Acute STEMI often causes or exacerbates CHF. Following the Cardiac Ischemia Medical Directive remains appropriate: nitroglycerin is limited to a maximum of 3 doses (0.3 mg or 0.4 mg per dose per the directive) when STEMI is present. That lower cap in STEMI reduces adverse outcomes linked to liberal nitroglycerin use. Continuous positive airway pressure (CPAP) is appropriate when the patient meets criteria in the Continuous Positive Airway Pressure Medical Directive.

Nitroglycerin: The conditions specify "a prior history OR an established IV." IV must be initiated prior to nitroglycerin administration in first-time suspected cardiac ischemia patients. This applies only to PCPs with Autonomous IV Certification.

Phosphodiesterase (PDE-5) inhibitors: These agents (e.g. erectile dysfunction or pulmonary hypertension drugs) block breakdown of cyclic GMP and add to nitroglycerin's vasodilation—risk of profound hypotension. Nitroglycerin is contraindicated if a phosphodiesterase inhibitor was taken within the previous 48 hours (per the Cardiac Ischemia directive). Common examples include sildenafil (Viagra, Revatio), tadalafil (Cialis), vardenafil (Levitra), avanafil, udenafil, and related products; the list is not exhaustive. Take a careful medication and timing history when possible. The ALS PCS Companion Document expands on agents, trade names, and clinical pearls.`,
    interventions: `Morphine is only to be considered following the third dose of nitroglycerin (unless nitroglycerin is contraindicated) and where pain is severe.

If a patient's vital signs fall outside the directive's parameters (e.g., hypotension), the patient can no longer receive that medication even if vital signs return to acceptable ranges – given risk for recurrent decompensation.

In STEMI with confirmed right ventricular involvement (positive V4R): NO nitroglycerin is to be administered.

Nitroglycerin is a symptom relief medication that has not demonstrated changes in patient morbidity or mortality and should be used with caution in patients presenting with tachycardia or SBP close to 100 mmHg.`,
    references: [
      'Ontario Base Hospital Group. (2025). ALS-PCS v5.4 Companion Document (PDF). https://ontariobasehospitalgroup.ca/wp-content/uploads/2025/06/ALS-PCS-v5.4-Companion-Document.pdf',
    ],
  },

  {
    id: 'pulmonary-edema',
    title: 'Acute Cardiogenic Pulmonary Edema',
    category: 'cardiac',
    introduction: `Pulmonary edema is a medical condition characterized by the accumulation of fluid in the lung's alveoli, which impedes oxygen exchange and leads to difficulty breathing. This condition can manifest gradually over several days or suddenly. In the prehospital setting, the most common cause of cardiogenic pulmonary edema is congestive heart failure (CHF), where impaired ventricular function results in the buildup of fluid in the pulmonary and/or systemic circulatory systems.`,
    essentials: `When considering the application of this directive, paramedics should strive to identify the cause and consider differentials: cardiogenic pulmonary edema, asthma, pneumonia, or COPD.

The typical patient presenting with acute cardiogenic pulmonary edema will present with dyspnea, bilateral crackles, hypertension, and other signs of fluid overload. They often have a cardiac history such as CHF, ACS, or dysrhythmia. However, a lack of cardiac history does not preclude a patient from this directive.

Note: Nitroglycerin is NOT indicated for non-cardiogenic pulmonary edema. Non-cardiogenic pulmonary edema can occur as a result of pneumonia, sepsis, ARDS, drug ingestion, toxic inhalation, or near-drowning.

In the early stages of pulmonary edema, symptoms may include respiratory wheezing due to airway edema from increased pulmonary capillary pressure (not bronchospasm). Paramedics are encouraged to use clinical judgment regarding salbutamol.`,
    interventions: `Nitroglycerin administration for acute cardiogenic pulmonary edema is given primarily for peripheral vasodilatory effects to reduce cardiac preload and afterload. The coronary vasodilating properties also help improve blood flow to cardiac tissue.

A 12- or 15-lead ECG acquisition is NOT required for initial nitroglycerin administration in this directive because right ventricular infarctions do not generally present with acute cardiogenic pulmonary edema. Paramedics should acquire and interpret a 12- or 15-lead ECG as soon as possible.

If a STEMI is identified, follow the Cardiac Ischemia directive for nitroglycerin dosing.

A fluid bolus is permitted despite crackles on auscultation in cases where nitroglycerin results in hypotension. Further doses of nitroglycerin should be withheld. Patch for consultation regarding inotropes.

The patient may NOT receive nitroglycerin from BOTH the Cardiac Ischemia AND Acute Cardiogenic Pulmonary Edema directives.`,
    references: null,
  },

  {
    id: 'cardiogenic-shock',
    title: 'Cardiogenic Shock',
    category: 'cardiac',
    introduction: `Cardiogenic shock is normally defined as a state in which the heart has been damaged to such an extent that it is unable to supply enough blood to the organs, tissues and cells of the body, leading to hypoperfusion and commonly hypotension. The most common cause is left ventricular failure following acute MI.`,
    essentials: `The directive specifies that fluid (if applicable) is to be used as a means to reverse hypotension prior to the administration of DOPamine. IO and CVAD have been added as routes for fluid administration.

A contraindication to DOPamine administration is mechanical shock. Examples of mechanical shock include tension pneumothorax, pulmonary embolism, and cardiac tamponade.`,
    interventions: `Notify the receiving hospital staff if the DOPamine drip goes interstitial, as DOPamine can cause tissue necrosis which can be mitigated by a phentolamine injection at the hospital into the affected tissue.

The clinical consideration 'contact BHP if patient is bradycardic' is intended to allow the paramedic to use clinical judgment.`,
    references: null,
  },

  {
    id: 'iv-fluid',
    title: 'Intravenous and Fluid Therapy',
    category: 'cardiac',
    introduction: `Intravenous access is a critical skill in prehospital care that allows paramedics to administer medications and fluids directly into the bloodstream. Fluid therapy is indicated when a patient is hypotensive or at risk of becoming hypotensive, with the goal of restoring adequate circulating volume to maintain perfusion to vital organs.`,
    essentials: `The contraindication of a suspected fracture at the cannulation site may not seem obvious, but a lack of integrity in a bone may jeopardize the integrity of the associated vascular structures and may result in extravasation.

Pulmonary edema is a sign of fluid overload secondary to a fluid bolus. Frequent chest assessments are required.

The Indications state: "Actual or potential need for intravenous medication OR fluid therapy." These indications apply to not only prehospital use but also for in-hospital purposes (e.g., Acute Stroke Protocol, STEMI Bypass Protocol). Initiation for these purposes should NEVER delay transport.

Prior to initiating a fluid bolus, two blood pressures (at least one manual) indicating hypotension are required.

Once a bolus is initiated, a minimum volume of 100 mL in pediatrics and 250 mL in adults may be administered before discontinuing if the patient becomes normotensive.`,
    interventions: `Mandatory patch point: Required before fluid bolus for a patient <12 years suspected of being in ketoacidosis. A physician is needed to carefully control volume to prevent cerebral edema.

For cardiogenic shock and ROSC: maximum NaCl volume is 10 mL/kg or 1,000 mL.

Hypotension in pediatric patients (up to 10 years old): SBP = 70 + (2 × age). Formulas for pediatric normotension/hypotension are used until the calculation meets or exceeds the adult definitions.

External jugular access, while not stated in the directives, remains in the ACP scope of practice and is typically reserved for cardiac arrest.`,
    references: null,
  },

  {
    id: 'traumatic-hemorrhage',
    title: 'Traumatic Hemorrhage',
    category: 'cardiac',
    introduction: `Trauma management involves rapid assessment and treatment of life-threatening injuries at the scene. Priorities should focus on maintaining hemodynamic stability and preventing hypovolemic shock in the prehospital setting.

Paramedics should suspect severe traumatic hemorrhage when there is evidence of severe blood loss (either external or internal) and altered hemodynamics in the presence of a traumatic mechanism of injury.`,
    essentials: `External hemorrhage can often be controlled with direct pressure; however, tranexamic acid (TXA) can be administered to help manage uncontrolled traumatic hemorrhage, whether internal or external.

Tranexamic acid (TXA) is an antifibrinolytic that reversibly inhibits plasminogen activation, thereby stabilizing blood clots and preventing further hemorrhage. Currently, published prehospital research has only demonstrated the efficacy of TXA in adult populations.`,
    interventions: `The preferred route of administration is IV due to its immediate onset, as long as IV initiation does not delay transport. This can be accomplished by adding 1 g of TXA into a 50 mL bag of normal saline or D5W and administering over 5 minutes. If a 50 mL bag is unavailable, push the medication over at least 5 minutes via 10 mL syringe.

The alternate route of administration is IM. TXA should NOT delay transport and should NOT be prioritized over the management of other reversible causes.`,
    references: [
      'Biffi A, et al. Systemic hemostatic agents initiated in trauma patients in the pre-hospital setting: a systematic review. Eur J Trauma Emerg Surg. 2023.',
      'Caroline, Nancy. Nancy Caroline\'s Emergency Care in the Streets: Canadian Edition.',
      '"Tranexamic Acid: Drug Information." UpToDate, 2024.',
    ],
  },

  {
    id: 'tachydysrhythmia',
    title: 'Tachydysrhythmia',
    category: 'cardiac',
    introduction: `Tachydysrhythmias are abnormal cardiac rhythms presenting with a rate over 100 beats per minute (BPM) and can be broadly classified as either narrow complex (QRS duration <120 ms) or wide complex (QRS duration ≥120 ms). Supraventricular tachycardia (SVT) is one type of narrow complex tachycardia originating above the level of the Bundle of His. Patient factors such as age and comorbidities play a significant role in determining which tachydysrhythmia the patient is experiencing.`,
    essentials: `The generic symptoms (chest pain, palpitations, dyspnea, presyncope, syncope, lightheadedness, anxiety) create a long list of differential diagnoses. A thorough history, physical exam, and 12-lead ECG are necessary for accurate identification.

Tachycardia can be a physiologic compensatory mechanism in response to various underlying causes (pain, hypovolemia, fever, hypoxia). In these cases, the underlying cause should be treated and interventions within this directive should NOT be initiated.

A diagnosed history of asthma is NOT a contraindication to adenosine (ACP). The patient must be actively exhibiting signs and symptoms of bronchoconstriction for this to be a contraindication.`,
    interventions: `Valsalva Maneuver: Before initiating, it is best practice to start an IV (if authorized) due to the small risk of hypotension. Both PCPs and ACPs can safely perform a Valsalva or Modified Valsalva for SVT. The standard Valsalva maneuver may be considered when the patient is unable to lie flat.

Modified Valsalva complications: rupture of the round window of the ear, lightheadedness, dizziness/syncope, chest pain, nausea/vomiting. There is a low risk of initiating labour in pregnant patients by performing a Valsalva technique – pregnancy is NOT a contraindication but excludes the patient from Treat & Discharge.

The maximum attempts for Valsalva are two (2) per episode. If the patient converts with a Valsalva and then reverts, this is considered a new episode and additional Valsalva attempts may be given. However, the patient would NOT qualify for Treat and Discharge.`,
    references: [
      'Appelboam, A., et al. (2015). Postural modification to the standard valsalva manoeuvre for emergency treatment of SVT (REVERT): A randomised controlled trial. The Lancet, 386(10005), 1747–1753.',
    ],
  },

  // ════════════════════════════════════════════════════════
  //  LEVEL OF CONSCIOUSNESS / PAIN / NAUSEA
  // ════════════════════════════════════════════════════════

  {
    id: 'hypoglycemia',
    title: 'Hypoglycemia',
    category: 'loc',
    introduction: `Hypoglycemia is defined as a blood glucose level below 4.0 mmol/L. It is most commonly encountered in patients with diabetes mellitus who use insulin or oral hypoglycemic agents, but can occur in other conditions including prolonged fasting, sepsis, and alcohol intoxication. Severe hypoglycemia impairs cerebral function and can result in altered LOA, seizures, and death if untreated.`,
    essentials: `Blood glucometry is performed using the paramedic's supplied device.

Capillary blood sample sites: fingertips and the heel of the foot (for pediatric patients who have not begun to walk). Samples CANNOT be obtained from the flash chamber of an IV catheter – this involves manipulating a medical device for unintended purposes and the sample is not a capillary sample.

It is recommended that the maximum single dose of D10W or D50W be administered gradually over 3 minutes, with a discontinuation in the event the patient attains a level of consciousness where they can safely consume carbohydrates. The goal is to avoid over-treatment and rebound hyperglycemia.

Premixed D10W should be run as a piggyback onto an existing IV line to ensure accurate dose administration.`,
    interventions: `If glucagon was initially administered with no patient improvement and an IV is subsequently established, perform a second glucometry and if the patient remains hypoglycemic, administer dextrose regardless of elapsed time since glucagon administration.

The 15-15 rule for oral carbohydrates: 15 g of simple carbohydrates, then recheck BGL in 15 minutes. By utilizing the 15-15 rule, ingesting only 15 grams helps prevent rebound hyperglycemia. In most patients, 15 g of carbohydrates raises blood glucose by 2.1 mmol/L in approximately 20 minutes.

Examples of 15 g of simple carbohydrates:
• 15 g glucose tabs, paste, or other formulation
• 15 mL water with 3 sugar packets dissolved
• 150 mL of juice or regular soft drink
• 15 mL honey

Preparation of 10% Dextrose Solution: Waste 40 mL of the D50W preload and replace with 40 mL sterile water or saline. This creates a 5 g/50 mL (10%) solution.`,
    references: null,
  },

  {
    id: 'seizure',
    title: 'Seizure',
    category: 'loc',
    introduction: `Seizures are episodes of abnormal, excessive, or synchronous neuronal activity in the brain. Generalized motor (tonic-clonic) seizures involve bilateral motor manifestations and are the indication for treatment under this directive. Causes include epilepsy, hypoglycemia, head trauma, toxicologic causes, febrile illness, metabolic derangements, and others. The first priority is ensuring patient safety and airway management.`,
    essentials: `The indications have been simplified to describe an active generalized motor seizure – implying the classic tonic-clonic presentation (regardless of causation) and therefore excluding partial seizures, petit mal, Jacksonian, etc.

Routes of Administration for Midazolam:
• IV: best route for anti-seizure medication but time required to secure access can be difficult. Administer over 1–2 minutes.
• IO: to be accessed only in the setting of pre-arrest.
• IM: easy access to large muscle groups with excellent blood flow but patient may be difficult to restrain. Consider sharp safety.
• IN: rapid access to circulation with no sharps. Split doses between nares.
• Buccal: good absorptive surface and ease of administration. Consider risk of aspiration.`,
    interventions: `Utilize the route that can be accessed the quickest.

A confirmed history of epilepsy must have been diagnosed by a physician. "New medication" for Treat and Discharge purposes refers to any new anti-seizure medication that is newly prescribed or where a recent dosage change has occurred within the past 30 days.

A "single seizure episode" is defined as a single seizure. A seizure cluster is multiple seizures within a 24-hour period. Patients who experience seizure clusters do NOT qualify for treat and discharge.`,
    references: null,
  },

  {
    id: 'opioid-toxicity',
    title: 'Opioid Toxicity and Withdrawal',
    category: 'loc',
    introduction: `Opioids are a group of natural, synthetic, or semi-synthetic drugs (hydromorphone, fentanyl, heroin, oxycodone, morphine, hydrocodone, meperidine, etc.) that bond with opioid receptors to block pain transmission. Common signs of opioid overdose include miosis (pupillary constriction), hypotension, respiratory depression, hypothermia, and decreased LOC, which potentiate hypoxemia leading to death.

This directive is designed for two scenarios: treatment of acute overdose (naloxone) and treatment of withdrawal symptoms (buprenorphine/naloxone [Suboxone]).`,
    essentials: `The cornerstone of managing opioid overdoses is ensuring effective ventilation, which should be prioritized over medication administration. Continuous monitoring of oxygenation is critical.

Administering naloxone in mixed overdose scenarios can unmask underlying toxidromes, revealing symptoms that were previously suppressed by opioid-induced CNS depression. For example, stimulant toxicity may emerge, potentially leading to seizures, hypertensive crises, or severe agitation.

When buprenorphine/naloxone is misused (intranasal or injectable routes), the naloxone component acts as an opioid antagonist and precipitates withdrawal. These patients require buprenorphine/naloxone per the medical directive.

When managing patients on long-acting opioids (methadone), exercise extreme caution when administering opioid agonists or antagonists. These medications can cause precipitated withdrawal – a sudden and severe form of withdrawal that can be highly distressing and pose significant medical risks.`,
    interventions: `Naloxone: When administering via IV, use a titration approach; gradually deliver small aliquots of the 0.4 mg dose. Consider dilution with normal saline for more controlled titration. The goal is to restore adequate respirations – NOT full opioid reversal (to avoid precipitating acute withdrawal).

The age condition of ≥24 hours for naloxone minimizes the risk of life-threatening opiate withdrawal syndrome in the newborn.

Buprenorphine/naloxone (Suboxone): Utilizing the Clinical Opiate Withdrawal Scale (COWS) ensures patients are properly selected for treatment. A COWS score ≥8 is required to confirm adequate withdrawal severity.`,
    references: [
      'NIDA. (2022). Naloxone DrugFacts.',
      'Hern, H.G., et al. (2022). Prehospital initiation of buprenorphine treatment for opioid use disorder by paramedics. Prehospital Emergency Care, 26(6), 811–817.',
    ],
  },

  {
    id: 'nausea-vomiting',
    title: 'Nausea / Vomiting',
    category: 'loc',
    introduction: `Nausea and vomiting are common prehospital complaints with a wide variety of etiologies including motion sickness, gastroenteritis, medication side effects, head injury, metabolic disorders, and as a symptom of serious illness such as MI or intestinal obstruction. Management focuses on symptom relief while addressing the underlying cause.`,
    essentials: `While the indications list nausea or vomiting, patients presenting with these symptoms do not necessarily require treatment. Clinical judgment applies.

Overdose on antihistamines, anticholinergics, or TCAs are contraindications for the administration of dimenhyDRINATE. For a comprehensive list, refer to the CPS or contact your RBH.

dimenhyDRINATE has negative effects of somnolence and confusion, especially in the elderly. Reference ISMP "Beers List" for guidance on dangerous medications for the elderly population.

The addition of ondansetron allows paramedics to use clinical judgment in medication selection based on the suspected underlying cause of nausea or vomiting:
• dimenhyDRINATE: best for motion sickness, vertigo, upset stomach from food ingestion
• ondansetron: best for nausea caused by drug interactions (chemotherapy, alcohol, cannabis, illicit drugs), head trauma, patients on SSRIs, hyperemesis in pregnancy`,
    interventions: `If dimenhyDRINATE is administered via the IV route, it must be diluted with saline. Based on a supply of 50 mg in 1 mL, either dilution method of 5 mg/mL (diluted with 9 mL NaCl) or 10 mg/mL (diluted with 4 mL NaCl) is acceptable. Do NOT dilute for IM administration.

The contraindication to co-administration of dimenhyDRINATE with diphenhydrAMINE is that the combined effect can lead to anticholinergic side effects and over-sedation.

The rationale for the contraindication of apomorphine use with ondansetron is that it may precipitate profound hypotension.

If a patient has received an antiemetic and has no relief of nausea/vomiting after 30 minutes, the alternative antiemetic may be considered.`,
    references: null,
  },

  {
    id: 'adrenal-crisis',
    title: 'Suspected Adrenal Crisis',
    category: 'loc',
    introduction: `Adrenal insufficiency (Addison's disease) is a condition in which the adrenal glands fail to produce adequate amounts of cortisol and/or aldosterone. Patients with primary adrenal failure generally require little EMS assistance except in cases of physiologic stress, when they can become critically ill and will require the administration of hydrocortisone to prevent adrenal crisis.`,
    essentials: `Examples of stress that may precipitate adrenal crisis include, but are not limited to:
• Hypoglycemia
• Hypotension
• Gastrointestinal issues
• Fractures

If the patient presents with signs and symptoms consistent with the medical directive AND their medication is available, a paramedic may administer 2 mg/kg (up to 100 mg) IM/IV/IO/CVAD of hydrocortisone.

Hydrocortisone is NOT carried by paramedics. Only the patient's own medication may be used.`,
    interventions: `These patients should always be transported to a receiving facility for additional care and follow-up.

Treat any associated hypoglycemia, hypotension, and other conditions per applicable medical directives in addition to administering the patient's hydrocortisone.`,
    references: null,
  },

  {
    id: 'analgesia',
    title: 'Analgesia',
    category: 'loc',
    introduction: `Prompt and efficient pain management is an impactful intervention that paramedics can perform in the pre-hospital setting. Given the wide range of opiate and non-opiate options for analgesia available, paramedics should use clinical discretion in determining the most appropriate medication for each patient.`,
    essentials: `Paramedics are encouraged to use a progressive and multimodal approach to managing pain. Selecting the most appropriate analgesic depends on: patient condition, pain severity, risks/benefits of chosen analgesic, hemodynamic stability, potential for respiratory depression, and call circumstances.

Acetaminophen and ibuprofen should be utilized as first-line analgesia for patients who can tolerate oral medication. Co-administration of acetaminophen and ibuprofen can provide analgesia similar to low-dose opioids without the euphoric effect.

Suspected renal colic patients should routinely be considered for NSAID (ibuprofen or ketorolac) administration because of the anti-inflammatory action and smooth muscle relaxation they provide. NSAIDs reduce the glomerular filtration rate, which reduces renal pelvic pressure and stimulation of stretch receptors. They also reduce local inflammation through the inhibition of prostaglandin production.

Ketorolac should NOT be administered with ibuprofen – both are NSAIDs, and co-administration increases adverse effects.

Active bleeding in this directive is defined as a hemorrhage that cannot be controlled (e.g., hematemesis, GI bleed). External hemorrhages that can be controlled (epistaxis, soft tissue laceration) are NOT considered active bleeds. Menstrual bleeding is NOT a contraindication.`,
    interventions: `IV administration of ketorolac applies only to PCPs authorized for PCP Autonomous IV.`,
    references: null,
  },

  // ════════════════════════════════════════════════════════
  //  PROCEDURAL
  // ════════════════════════════════════════════════════════

  {
    id: 'home-dialysis',
    title: 'Home Dialysis Emergency Disconnect',
    category: 'procedural',
    introduction: `Home dialysis (hemodialysis or peritoneal dialysis) patients are connected to dialysis equipment for several hours during treatment. In emergency situations where the patient requires immediate transport or where the dialysis equipment poses a safety risk, paramedics must be able to safely disconnect the patient from the dialysis machine.`,
    essentials: `While there are several variations of dialysis machines/tubing, the best practice is to disconnect the patient using the materials and instructions that are typically found in the disconnect kit.

In the event instructions are not available, the tubing should be clamped first on the patient side, secondly on the machine side, and finally separated in the middle.

Maintaining aseptic technique throughout the procedure is critical to prevent life-threatening infection.`,
    interventions: `After disconnecting, ensure all access tubing to the patient is secured and covered with tape and a sterile abdominal pad.

For peritoneal dialysis (CAPD/CCPD/APD): clamp the transfer set on the patient side, disconnect the luer lock, and attach a sterile mini cap to protect the patient's access port.`,
    references: null,
  },

  {
    id: 'emergency-childbirth',
    title: 'Emergency Childbirth',
    category: 'procedural',
    introduction: `Emergency childbirth in the prehospital setting requires paramedics to safely assist with delivery, manage common complications, and care for both the mother and newborn. While most deliveries are uncomplicated, paramedics must be prepared for complications including shoulder dystocia, breech presentation, nuchal cord, prolapsed cord, and post-partum hemorrhage.`,
    essentials: `The condition of "Age – Childbearing years" for Delivery, Umbilical Cord Management, and External Uterine Massage refers to the approximate ages of 14–50 years.

Paramedics are NOT authorized to perform internal vaginal exams to determine cervical dilation.

Signs of imminent birth:
• Crowning or other presenting part is visible, OR
• In primips: presenting part visible during and between contractions, maternal urge to push, contractions <2 min apart, OR
• In multips: contractions ≤5 min apart and any other signs of second stage labor present.

Oxytocin has been added for administration immediately after delivery of all fetuses and/or placenta and up to 4 hours post-placenta delivery. Oxytocin dramatically reduces the potential for massive post-partum hemorrhage. Some evidence indicates oxytocin can induce vasoconstriction, potentially exacerbating hypertension.`,
    interventions: `Once the newborn is delivered, the cord should be clamped and cut early ONLY if:
• Multiple gestation is suspected
• Neonatal or maternal resuscitation is required
• Transport considerations arise (after approximately 3 minutes; once cord pulsations have ceased)

External uterine massage should be performed ONLY when the placenta has been delivered and there is excessive bleeding. Continue until bleeding stops. Do NOT pack the vagina to control bleeding.

In circumstances where the paramedic is unable to control excessive bleeding, external bimanual compression should be performed (can be done regardless of whether placenta is delivered).

Shoulder Dystocia – ALARM Maneuvers: You have 8 MINUTES from time of head delivery to complete delivery. The McRoberts Maneuver combined with suprapubic pressure resolves the majority of shoulder dystocia cases.

Prolapsed cord: Position patient knee-chest or exaggerated Sims position. Gently cradle cord and replace into vagina; insert finger(s)/hand into vagina to apply manual digital pressure lifting presenting part off the cord. Maintain manual elevation until transfer of care.`,
    references: null,
  },

  {
    id: 'patellar-dislocation',
    title: 'Lateral Patellar Dislocation',
    category: 'procedural',
    introduction: `Patellar dislocations are most common in younger age groups (12–20 years), with 75% of all first-time patellar dislocations occurring in patients under 25. Lateral patellar dislocations are usually the result of plant-and-twist, non-contact injuries – the powerful contraction of the quadriceps combined with sudden flexion and external rotation of the tibia on the femur.`,
    essentials: `High-velocity trauma can result in severe injuries including knee dislocations, quadriceps tendon ruptures, and patellar fractures. A thorough assessment of the mechanism of injury and clinical findings is essential to distinguish between a lateral patellar dislocation and more serious knee injuries.

If paramedics suspect, based on the mechanism of injury or clinical findings, that the presenting injury is NOT an isolated lateral patellar dislocation, do NOT attempt patellar reduction.`,
    interventions: `Patellar reduction is a relatively quick procedure to perform. While analgesia can be considered pre-reduction, often performing the reduction will reduce the patient's pain score by about 5 points.

If the first attempt is unsuccessful, consider using analgesia, coaching the patient to relax their quadriceps, and adapting a two-person approach to the patellar reduction.

Post-reduction pain analgesia should be considered per the Analgesia Medical Directive.`,
    references: [
      'Physiopedia: "Patellofemoral Instability." physio-pedia.com.',
      'Life in the Fast Lane: "Patellar Dislocation." litfl.com.',
      'YouTube: "Procedure Demonstration." PEMblog, https://youtu.be/57dGvS4JL4k.',
    ],
  },
];
