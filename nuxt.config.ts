// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
    },
  },
  modules: [
    '@nuxtjs/algolia',
    '@nuxtjs/supabase',
  ],
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
    cache: true,
  },
  supabase: {
    // The data is for a test, empty and unused project
    url: 'https://fakwgioyjwqbfdqtcjst.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZha3dnaW95andxYmZkcXRjanN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NzI0NTQsImV4cCI6MTk4OTA0ODQ1NH0.Ni7MtSypBiMQHrPdlGJy1WhmD_dhXrAKOi7CrR6gHBQ',
  },
})
