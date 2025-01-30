import tailwindcss from '@tailwindcss/vite'
import { presetUno } from 'unocss'

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

  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@formkit/auto-animate',
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],

  unocss: {
    presets: [
      presetUno(),
      // 可添加其他预设如 presetAttributify、presetIcons 等
    ],
    preflight: false,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
