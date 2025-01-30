import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: ['~/assets/css/main.css'],

  icon: {
    serverBundle: {
      collections: ['mdi', 'uil'],
    },
  },

  modules: [
    '@element-plus/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@formkit/auto-animate',
    '@nuxt/eslint',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})