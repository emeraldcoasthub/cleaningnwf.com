<template>
  <div class="QuoteForm">
    <form accept-charset="utf8" action="https://usebasin.com/f/23ffa5d7a05f" method="POST">
      <div class="field">
        <label class="label">Name</label>
        <input name="name" required class="input" type="text" placeholder="Nikola Tesla">
      </div>

      <div class="field">
        <label class="label">Email</label>
        <input name="email" required class="input" id="email" type="email" placeholder="nikola.tesla@gmail.com">
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <input name="phone" required class="input" type="tel" placeholder="(555) 555-5555">
      </div>

      <div class="field">
        <label class="label">Address</label>
        <input name="address" required class="input" type="text" placeholder="123 Main St., Fort Walton Beach, 32547">
      </div>

      <div class="field">
        <label class="label">City</label>
        <div class="select">
          <select required name="city">
            <option value="niceville">Niceville</option>
            <option value="valpariso">Valparaiso</option>
            <option value="destin">Destin</option>
            <option value="navarre">Navarre</option>
            <option value="fwb">Fort Walton Beach</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label class="label">Type of residence</label>
        <div class="select">
          <select required name="hometype">
            <option value="home">Single Family Home</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label class="label">Square footage</label>
        <input name="squarefoot" class="input" type="number" placeholder="~2000 sq. ft.">
        <p class="help">If you aren't sure, an estimation or just leaving this field blank is okay.</p>
      </div>

      <div class="field">
        <label class="label">Cleaning Frequency</label>
        <div class="select">
          <select required name="frequency">
            <option value="onetime">One-time</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <p class="help">If you select custom, please indicate your needs in the special requests box.</p>
      </div>

      <div class="field">
        <label class="label">Type a good date to meet for an estimate</label>
        <input name="date" class="input" type="text" placeholder="MM/DD/YY">
        <p class="help">We will email or call to confirm.</p>
      </div>

      <div class="field">
        <label class="label">Type a good time to meet for an estimate</label>
        <input name="time" class="input" type="text" placeholder="00:00 AM/PM">
        <p class="help">We will email or call to confirm.</p>
      </div>

      <div class="field">
        <label class="label">Special requests / questions</label>
        <textarea name="special" required class="textarea"></textarea>
      </div>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>

      <div class="field" style="margin-top: 1em;">
        <button type="submit" class="button is-primary">Send message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuoteForm",
  data() {
    return {
    }
  }
};
</script>

<style>
.job-form {
  padding: 2em 1em;
}
</style>
