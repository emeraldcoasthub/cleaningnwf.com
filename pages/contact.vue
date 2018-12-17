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
          <form>
            <div class="field">
              <label class="label">Name</label>
              <input class="input" type="text" placeholder="Nikola Tesla">
            </div>

            <div class="field">
              <label class="label">Email</label>
              <input class="input" type="email" placeholder="nikola.tesla@gmail.com">
            </div>

            <div class="field">
              <label class="label">Inquiry type</label>
              <div class="select">
                <select v-model="selected">
                  <option value="select">Select subject</option>
                  <option value="quote">Get a quote</option>
                  <option value="general">General contact</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>

            <div class="field">
              <button class="button is-primary">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Contact us",
      selected: ''
    };
  }
};
</script>

<style>

</style>
