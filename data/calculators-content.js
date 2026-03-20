// Interactive calculator HTML for Medical Calculators (also used by gcsSelect / gcsReset in app.js)
var GCS_CALCULATOR_HTML = `
      <div class="gcs-total" id="gcs-total">GCS Total: <span id="gcs-score">--</span></div>

      <div class="gcs-section">
        <div class="gcs-section-header">Eye Opening</div>
        <div class="gcs-option" data-group="gcs-eye" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Spontaneous
        </div>
        <div class="gcs-option" data-group="gcs-eye" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> To Voice
        </div>
        <div class="gcs-option" data-group="gcs-eye" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> To Pain
        </div>
        <div class="gcs-option" data-group="gcs-eye" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <div class="gcs-section">
        <div class="gcs-section-header">Verbal Response</div>
        <div class="gcs-option" data-group="gcs-verbal" data-value="5" onclick="gcsSelect(this)">
          <span class="gcs-option-score">5</span> Orientated
        </div>
        <div class="gcs-option" data-group="gcs-verbal" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Confused
        </div>
        <div class="gcs-option" data-group="gcs-verbal" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> Inappropriate words
        </div>
        <div class="gcs-option" data-group="gcs-verbal" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> Incomprehensible sounds
        </div>
        <div class="gcs-option" data-group="gcs-verbal" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <div class="gcs-section">
        <div class="gcs-section-header">Motor Response</div>
        <div class="gcs-option" data-group="gcs-motor" data-value="6" onclick="gcsSelect(this)">
          <span class="gcs-option-score">6</span> Obeys commands
        </div>
        <div class="gcs-option" data-group="gcs-motor" data-value="5" onclick="gcsSelect(this)">
          <span class="gcs-option-score">5</span> Localize (pain)
        </div>
        <div class="gcs-option" data-group="gcs-motor" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Withdraw (pain)
        </div>
        <div class="gcs-option" data-group="gcs-motor" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> Flexion (pain)
        </div>
        <div class="gcs-option" data-group="gcs-motor" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> Extension (pain)
        </div>
        <div class="gcs-option" data-group="gcs-motor" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <button class="gcs-reset-btn" onclick="gcsReset('gcs')">Reset Score</button>
    `;

var PCS_CALCULATOR_HTML = `
      <div class="gcs-total" id="pcs-total">Pediatric Coma Total: <span id="pcs-score">--</span></div>

      <div class="gcs-section">
        <div class="gcs-section-header">Eye Opening</div>
        <div class="gcs-option" data-group="pcs-eye" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Spontaneous
        </div>
        <div class="gcs-option" data-group="pcs-eye" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> To Speech
        </div>
        <div class="gcs-option" data-group="pcs-eye" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> To Pain
        </div>
        <div class="gcs-option" data-group="pcs-eye" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <div class="gcs-section">
        <div class="gcs-section-header">Verbal Response</div>
        <div class="gcs-option" data-group="pcs-verbal" data-value="5" onclick="gcsSelect(this)">
          <span class="gcs-option-score">5</span> Coos or babbles
        </div>
        <div class="gcs-option" data-group="pcs-verbal" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Irritable &amp; constantly cries
        </div>
        <div class="gcs-option" data-group="pcs-verbal" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> Cries to pain
        </div>
        <div class="gcs-option" data-group="pcs-verbal" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> Moans to pain
        </div>
        <div class="gcs-option" data-group="pcs-verbal" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <div class="gcs-section">
        <div class="gcs-section-header">Motor Response</div>
        <div class="gcs-option" data-group="pcs-motor" data-value="6" onclick="gcsSelect(this)">
          <span class="gcs-option-score">6</span> Obeys commands
        </div>
        <div class="gcs-option" data-group="pcs-motor" data-value="5" onclick="gcsSelect(this)">
          <span class="gcs-option-score">5</span> Withdraws from touch
        </div>
        <div class="gcs-option" data-group="pcs-motor" data-value="4" onclick="gcsSelect(this)">
          <span class="gcs-option-score">4</span> Withdraws from pain
        </div>
        <div class="gcs-option" data-group="pcs-motor" data-value="3" onclick="gcsSelect(this)">
          <span class="gcs-option-score">3</span> Flexion to pain
        </div>
        <div class="gcs-option" data-group="pcs-motor" data-value="2" onclick="gcsSelect(this)">
          <span class="gcs-option-score">2</span> Extension to pain
        </div>
        <div class="gcs-option" data-group="pcs-motor" data-value="1" onclick="gcsSelect(this)">
          <span class="gcs-option-score">1</span> None
        </div>
      </div>

      <button class="gcs-reset-btn" onclick="gcsReset('pcs')">Reset Score</button>
    `;
