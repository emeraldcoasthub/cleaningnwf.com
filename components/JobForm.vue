<template>
  <div class="job-form">
    <h3 class="title is-4 has-text-centered">Job Description</h3>
      <ul class="has-text-centered">
        <li>Monday - Friday, hours are approximately 8am - 2pm, no nights or weekends.</li>
        <li>Year round employment.</li>
        <li>Solo and Team cleaning, 2-3 person teams.</li>
        <li>$15 during training. $20 - $27 after training.</li>
        <li>Must have a valid drivers license &amp; reliable, insured automobile.</li>
        <li>Non-smoking workplace.</li>
        <li>Must have high energy and able able to lift 50 lbs.</li>
        <li>Reliable and serious need only apply.</li>
        <li>All fields are mandantory unless marked <em>optional</em>.</li>
        <li>Please fill all applicable blanks below when submitting your application.</li>
      </ul>
      <div class="columns is-centered inputs" id="form">
        <div class="column is-12 has-text-centered">
          <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBNFJVJSyflF_XcBvz8tJO_4qIRoa6EL5AfuA6gyEge6gPYQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> -->
          <a target="new" href="https://docs.google.com/forms/d/e/1FAIpQLSfBNFJVJSyflF_XcBvz8tJO_4qIRoa6EL5AfuA6gyEge6gPYQ/viewform" class="button is-primary is-large">View application</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "JobForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      license: "",
      vehicle: "",
      vehicleSafe: "",
      vehicleMake: "",
      vehicleYear: "",
      insurance: "",
      insuranceCompany: "",
      insurancePolicy: "",
      legal: "",
      fiftyPounds: "",
      old: "",
      startDate: "",
      hoursAvailible: "",
      jobCategories: "",
      job1: {
        previousEmployer: "",
        dates: "",
        managerName: "",
        managerPhone: "",
        reasonLeft: ""
      },
      job2: {
        previousEmployer: "",
        dates: "",
        managerName: "",
        managerPhone: "",
        reasonLeft: ""
      },
      school: {
        highSchoolName: "",
        gradeCompleted: "",
        college: "",
        major: ""
      },
      reference1: {
        name: "",
        phone: ""
      },
      reference2: {
        name: "",
        phone: ""
      },
      reference3: {
        name: "",
        phone: ""
      },
      convictedFelon: "",
      convictedExplain: "",
      bonded: "",
      licenseSuspended: "",
      licenseExplain: "",
      agreement1: "",
      agreement2: "",
      agreement3: "",
      signed: "",
      currentDate: ""
    };
  },
  methods: {
    handleSubmit() {
      alert(`
      Your name: ${this.firstName} ${this.lastName}
      \nYour email: ${this.email}
      `);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.job-form {
  padding: 2em 1em;
}
.inputs {
  margin-top: 1.5em;
}
</style>
