// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      PUBLIC_KEY: process.env.PUBLIC_KEY,
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
