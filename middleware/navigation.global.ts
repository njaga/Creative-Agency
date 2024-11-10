import { defineNuxtRouteMiddleware, useState } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    // Force le rechargement des composants
    useState('navigationKey', () => Date.now())
  }
})
