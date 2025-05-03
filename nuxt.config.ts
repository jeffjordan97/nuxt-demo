// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
