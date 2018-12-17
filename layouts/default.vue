<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar is-teal" role="navigation" aria-label="main navigation">
      <div class="container is-widescreen">
        <div class="navbar-brand">
        <a href="/"><img src="~assets/logo.png" width="auto" height="50"></a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/faq">FAQs</nuxt-link>
          <nuxt-link class="navbar-item" to="/jobs">Jobs</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </div>
    </nav>
    <nuxt/>
  </div>

  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      &copy; {{ new Date().getFullYear() }} Home Cleaning Company. All Rights Reserved. Web design and hosting by <a href="http://picreativemarketing.com">Perfect Imprints</a>.
    </p>
    <a style="color: #2AAFB8" href="https://https://www.facebook.com/homecleaningco">
      <b-icon
        icon="facebook"
        size="is-large">
      </b-icon>
    </a>
  </div>
</footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nuxt-link-exact-active {
  background-color: #377e7f !important;
}
#nav > nav > div > div.navbar-menu > div > a {
  font-size: 1.2em;
  font-weight: bold;
  color: white;
}
.navbar.is-teal {
  background-color: #50b098;
  border-bottom: 12px solid #377e7f;
}
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #377e7f !important;
  color: white;
}
.is-active > .navbar-end > .navbar-item {
  color: white !important;
  text-align: center;
  background-color: #50b098;
}
.footer {
    padding: 3rem 1.5rem 3rem !important;
}
</style>