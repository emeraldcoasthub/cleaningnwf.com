<template>
  <div class="about">
    <div class="container">
      <section class="hero">
        <div class="hero-body has-text-centered">
          <div class="container">
            <h1 class="title">
              {{ pageTitle }}
            </h1>
          </div>
        </div>
      </section>
    </div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-4">
          <h2 class="title is-3">Contact info</h2>
          <h3 class="subitle is-4">Get a FREE estimate for a home cleaning for the areas
            of Niceville, Valparaiso, Destin, Navarre, and Fort Walton Beach.
          </h3>
          <p><strong>From general cleanings to special cleaning assignments, we can do it.</strong></p>
          <p>The Home Cleaning Company<br/>
          201 Forest Drive<br/>
          Fort Walton Beach, FL 32547<br/>
          850.863.4675
          info@cleaningnwf.com
          </p>
        </div>
        <div class="column is-6">
          <form accept-charset="utf8" action="https://usebasin.com/f/23ffa5d7a05f" method="POST">
            <div class="field">
              <label class="label">Name</label>
              <input name="name" required class="input" id="name" type="text" placeholder="Nikola Tesla">
            </div>

            <div class="field">
              <label class="label">Email</label>
              <input name="email" required class="input" id="email" type="email" placeholder="nikola.tesla@gmail.com">
            </div>

            <div class="field">
              <label class="label">Message</label>
              <textarea name="comment" required class="textarea" id="comment" placeholder="How can we help you?"></textarea>
            </div>

            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>

            <div class="field" style="margin-top: 1em;">
              <button type="submit" class="button is-primary">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Contact Us - Home Cleaning Company in Northwest Florida",
    }
  }
};
</script>

<style>

</style>
