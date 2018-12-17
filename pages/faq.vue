<template>
  <div class="faq">
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

    <div class="columns is-centered">
      <div class="column is-two-fifths">
        <article v-bind:key="question" v-for="question in questions" class="message">
          <div class="message-header">
            {{ question.question }}
          </div>
          <div class="message-body">
            {{ question.answer }}
          </div>
        </article>
      </div>
    </div>
    
    
  </div>
</template>

<style>
.faq {
  margin: 0em 2em;
  margin-bottom: 2em;
}
</style>


<script>
export default {
  data() {
    return {
      pageTitle: "Frequently Asked Questions",
      questions: [
        {
          question: "Do you clean on weekends?",
          answer:
            "No, we are not open on weekends. We like our employees to have the weekends off to spend time with their families."
        },
        {
          question: "Do we send the same team members for each visit?",
          answer:
            "Yes, we do a very good job of sending the same team members each visit. Our staff is paid well above average, which allows us to retain quality team members."
        },
        {
          question: "How do you gain access to our home for cleaning?",
          answer:
            "Most customers give us a key to prevent any unintended lockout."
        },
        {
          question: "Do you supply the cleaning products?",
          answer: "Yes we do."
        },
        {
          question: "Do you perform background checks on employees?",
          answer:
            "Yes, criminal background checks and the past three employers are contacted before they are employeed. We also speak to their former, immediate supervisor, if available."
        }
      ]
    };
  }
};
</script>
