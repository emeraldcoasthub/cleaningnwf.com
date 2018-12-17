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
    <div class="container body-text">
      <p>Home Cleaning Company is a family-owned business that celebrating our 26th year in business. We are local to the Fort Walton Beach, FL area.
        Our staff is responsible, reliable, and insured. Our goal is to perform a superior cleaning job to your specifications. We specialize in residential cleanings during the week.
        Whether you are looking for a one-time house cleaning or a weekly cleaning, we are here to save you time and keep your home clean.</p>
      <p class="body-text--bottom">
        <a class="normal-links" href="#">We offer <strong>FREE</strong> estimates</a>. Just <nuxt-link class="normal-links" to="/contact">contact us</nuxt-link> or give us a call at 850.863.4675.
      </p>
    </div>

  <div class="container estimate-cta">
    <div class="box">
      <div class="title is-2 has-text-white has-text-centered">Get a free estimate today</div>
      <div class="subtitle is-4 has-text-white has-text-centered">Just fill our the free estimate form to get a free estimate today.</div>
    </div>
  </div>

  <div class="container estimate-cta">
    <div class="columns is-centered">
      <div class="column is-6">
        <QuoteForm/>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import QuoteForm from "@/components/QuoteForm.vue";

export default {
  components: {
    QuoteForm
  },
  data () {
    return {
      pageTitle: "About Us"
    }
  }
};
</script>


<style>
.normal-links {
  color: #377e7f !important;
}
.body-text--bottom {
  padding-top: 1em;
}
.about {
  margin: 0em 2em;
  margin-bottom: 2em;
}
.estimate-cta {
  margin-top: 2em;
}
.box {
  background-color: #02b397 !important;
}
</style>
