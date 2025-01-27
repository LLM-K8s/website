// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: false }
})