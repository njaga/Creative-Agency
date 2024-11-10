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
    pageTransition: false,
    layoutTransition: false,
    head: {
      title: 'ABI Group',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { ssr: true },
    '/materiel': { ssr: true },
    '/contact': { prerender: true },
    '/services/**': { 
      static: true
    }
  },

  runtimeConfig: {
    // Variables privées (côté serveur)
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    
    // Variables publiques (côté client)
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },

  // Configuration nitro pour Vercel
  nitro: {
    preset: 'vercel'
  }
})