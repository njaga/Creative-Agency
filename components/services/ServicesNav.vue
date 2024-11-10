<template>
  <nav class="flex space-x-4 mb-8">
    <NuxtLink 
      v-for="service in services" 
      :key="service.path"
      :to="service.path"
      class="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      active-class="bg-blue-100 text-blue-600"
    >
      {{ service.name }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const services = [
  { name: 'Tous les services', path: '/services' },
  { name: 'Création Web', path: '/services/web' },
  // Ajoutez d'autres services ici
]
</script>
