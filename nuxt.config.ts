// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
});
