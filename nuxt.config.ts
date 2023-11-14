import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Jockey One": true,
      "DM Sans": true,
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
});
