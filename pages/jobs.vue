<template>
  <div class="about">
    <div class="header has-text-centered">
      <h1 class="title">Job Application</h1>
      <h2 class="subtitle">Thank you for your interest in the Home Cleaning Company.
        Please completely fill out the application below to be considered for employment.</h2>
    </div>
    <JobForm/>
  </div>
</template>

<script>
import JobForm from "@/components/JobForm.vue";

export default {
  name: "jobs",
  components: {
    JobForm
  },
  head () {
    return {
      title: "Jobs - Home Cleaning Company in Northwest Florida",
      meta: [
        { hid: 'description', name: 'description', content: 'Apply to work with us today.' }
      ]
    }
  }
};
</script>

<style>
.header {
  margin-top: 2em;
}
</style>
