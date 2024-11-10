import { defineNuxtRouteMiddleware, useState } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const loading = useState('loading', () => false)
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 500)
  }
})