export default {
  app: {
    head: {
      title: "cleaningnwf",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Cleaning NWF" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  plugins: ["@/plugins/buefy.js"],
  modules: [
    // Add Nuxt 3 modules here
  ],
  build: {
    // Add build customizations if needed
  },
  nitro: {
    preset: "netlify-static"
  }
};
