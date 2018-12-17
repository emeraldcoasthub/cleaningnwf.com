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
// @ is an alias to /src
import JobForm from "@/components/JobForm.vue";

export default {
  name: "jobs",
  components: {
    JobForm
  }
};
</script>

<style>
.header {
  margin-top: 2em;
}
</style>
