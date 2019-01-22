<template>
  <div class="home">
    <div class="slide image is-centered">
      <div class="columns is-centered">
        <div class="column is-10">
          <img src="~assets/slide.jpg" alt="Call now for your free estimate: 863-4675. Celebrating 26 years!" />
        </div>
      </div>
    </div>
    <div class="reasons-title columns is-centered">
      <div class="column is-10">
        <h2 class="title is-2 has-text-centered">{{ title }}</h2>
      </div>
    </div>
    <div class="reasons columns is-centered">
      <div v-bind:key="reason" v-for="reason in reasonsLine1" class="column is-3">
        <div class="box">
          <img class="is-pulled-left" :src="reason.icon" />
          <h3 class="title is-4 has-text-white">{{ reason.title }}</h3>
          <p class="subtitle is-5 has-text-white">{{ reason.subtitle }}</p>
          <p class="is-size-5 has-text-white">{{ reason.text }}</p>
        </div>
      </div>
    </div>
    <div class="reasons columns is-centered">
      <div v-bind:key="reason" v-for="reason in reasonsLine2" class="column is-3">
        <div class="box">
          <img class="is-pulled-left" :src="reason.icon" />
          <h3 class="title is-4 has-text-white">{{ reason.title }}</h3>
          <p class="subtitle is-5 has-text-white">{{ reason.subtitle }}</p>
          <p class="is-size-5 has-text-white">{{ reason.text }}</p>
        </div>
      </div>
    </div>
    <div class="reasons columns is-centered">
      <div v-bind:key="reason" v-for="reason in reasonsLine3" class="column is-3">
        <div class="box">
          <img class="is-pulled-left" :src="reason.icon" />
          <h3 class="title is-4 has-text-white">{{ reason.title }}</h3>
          <p class="subtitle is-5 has-text-white">{{ reason.subtitle }}</p>
          <p class="is-size-5 has-text-white">{{ reason.text }}</p>
        </div>
      </div>
    </div>
    <section class="section has-background-white-ter">
      <div class="container">
        <div class="columns is-centered">
          <div class="columm is-6">
            <h2 class="title is-1">Isn't Your Time More Valuable?</h2>
            <h3 class="subtitle is-4">Let us do your cleaning while you enjoy life!</h3>
            <nuxt-link class="button is-large" to="/about">Request your free estimate</nuxt-link>
          </div>
          <div class="columm is-4">
            <p style="margin-top: 1em">"Time" is a commodity most busy people just don't seem to have enough of these days. 
              For many upwardly mobile and dual income families today, the home we've worked so hard 
              to obtain is a time-consuming chore to maintain.</p>
            <p>Home Cleaning Company can give you more time to do these things you need to do and 
              would rather be doing, instead of spending endless hours on mundane housework.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="title is-3 has-text-centered">THE HOME CLEANING COMPANY "A-Z" HOME CLEANING SYSTEM INCLUDES:</h2>
        <div class="columns is-centered">

          <div v-bind:key="include" v-for="include in includes" class="column is-3">
            <div class="box has-text-white has-text-weight-semibold">
              <h3 class="title has-text-white is-3">{{ include.title }}</h3>
              <p>{{ include.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import QuoteForm from '@/components/QuoteForm.vue';

export default {
  components: {
    QuoteForm
  },
  data() {
    return {
      pageTitle: 'Home Cleaning Company - Fort Walton Beach - Destin - Niceville',
      title: "8 Important Reasons Why You Should Let Us Clean Your Home",
      includes: [
        {
          title: 'General Cleaning',
          text: 'Dust, polish or wipe all furnishings, baseboards, window sills, and shelves. Vacuum or mop all floors; carpet or bare.'
        },
        {
          title: 'Kitchen',
          text: 'Clean sink, counter tops, outside of cupboards and drawer fronts, refrigerator, stove, other appliances and floor.'
        },
        {
          title: 'Bathrooms',
          text: 'Clean and disinfect tub, showers, toilets and floor. We also clean and polish sinks, fixtures, vanities and mirrors.'
        },
        {
          title: 'Special Tasks',
          text: 'Ovens, refrigerators, patios, and decks. Change linens. Moving day cleanups as well as spring, and fall cleanings.'
        },
      ],
      reasonsLine1: [
        {
          icon: "./icon1.png",
          title: "Save Time",
          subtitle: "You have better things to do with your time.",
          text: `'I don't have time. I have to clean the house.' Sound familiar? Maybe it's time you joined the millions of American households who have already turned to professional residential cleaning services as a solution to their housework problems.`
        },
        {
          icon: "./icon2.png",
          title: "We Do It Your Way",
          subtitle: "No two households are exactly the same.",
          text: `A Home Cleaning Company specialist first visits your home to determine your specific needs and our 'A-Z' Home Cleaning System is customized to your individual requirements.`
        },
        {
          icon: "./icon3.png",
          title: "We Are Thorough",
          subtitle: "Because we clean in teams.",
          text: `We clean homes in teams because it is more efficient. Our 'A-Z' Home Cleaning System ensures that every job is consistently thorough. We work as a team, so it's easy for us to move a couch when vacuuming or to do other chores an individual housecleaner can't do.`
        }
      ],
      reasonsLine2: [
        {
          icon: "./icon4.png",
          title: "Reliable",
          subtitle: "Our staff is responsible, reliable, and insured.",
          text: `Our house cleaning technicians are thoroughly screened, professionally trained, covered by workers compensation and compensated for results and customer satisfaction.
We are locally owned, operated and licensed. Our staff consists of employees - not unsupervised independent contractors as is the case with many residential cleaning services and your assigned team will show up on time as scheduled, neatly groomed, always uniformed and ready to work.`
        },
        {
          icon: "./icon5.png",
          title: "Superior Equipment",
          subtitle: "We use vastly superior equipment.",
          text: `Conventional vacuum cleaners are largely inefficient, lose cleaning power quickly and exhaust fine particles and dust mites back into the room.
We use the Big Vac, which cleans like ordinary vacuums can't. A technological edge in home cleaning superiority. Its unique patent-pending filtration system traps mold spores, bacteria, pollen, odors, dust mites and fine dust from the recirculating air passing through its exhaust. Clients with allergies, asthma and other respiratory problems especially appreciate this feature.`
        },
        {
          icon: "./icon6.png",
          title: "Safe Products",
          subtitle: "We use only safe, cleaning products.",
          text: `We always bring our proprietary cleaning products every time. The most conscientious and proficient home cleaning technician can't perform any better than the quality of the equipment or cleaning products being used. Each product is approved for safe use based on its effectiveness.`
        }
      ],
      reasonsLine3: [
        {
          icon: "./icon7.png",
          title: "Flexibility",
          subtitle: "We offer flexible scheduling."
        },
        {
          icon: "./icon8.png",
          title: "Affordable",
          subtitle: "We are a great value at an affordable price."
        },
        {
          icon: "./icon9.png",
          title: "FREE ESTIMATES",
          subtitle: "Contact us for a FREE estimate."
        }
      ]
    };
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: 'Let us clean your home. We are professionals.' }
      ]
    }
  },
};
</script>

<style>
.system-includes {
  margin-top: 2em;
}
.slide {
  margin-top: 2em;
}
.reasons-title {
  margin-top: 3em;
}
.reasons {
  margin-left: 1em !important;
  margin-right: 1em !important;
}
.box {
  background-color: #02b397 !important;
}
</style>
