// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
  ],

  plugins: [
    '~/plugins/particles.client.ts'
  ],

  build: {
    transpile: ['@tsparticles/vue3', '@tsparticles/engine', '@tsparticles/slim']
  },

  typescript: {
    strict: true,
    typeCheck: true,
    shim: true
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-09',

  app: {
    head: {
      title: 'Votre Entreprise - Solutions Informatiques Professionnelles',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})