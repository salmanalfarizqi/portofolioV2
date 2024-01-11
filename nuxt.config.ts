// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/supabase',
    'nuxt-icon'
  ],
  css: ['~/assets/style/main.css'],
  supabase:{
    redirect:false
  },
})
