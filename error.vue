<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
    <div class="text-center">
      <!-- Illustration d'erreur -->
      <div class="mb-8 relative">
        <img 
          :src="`/images/errors/${error?.statusCode || '404'}.svg`" 
          :alt="error?.message || 'Page non trouvée'"
          class="w-64 h-64 mx-auto"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <!-- Message d'erreur -->
      <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        {{ error?.statusCode || '404' }}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        {{ error?.message || 'Page non trouvée' }}
      </h2>
      <p class="text-gray-600 mb-8 max-w-md mx-auto">
        {{ errorMessage }}
      </p>

      <!-- Boutons d'action -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <MaterialButton 
          to="/" 
          variant="primary"
          size="lg"
          icon="heroicons:home"
        >
          Retour à l'accueil
        </MaterialButton>
        
        <MaterialButton 
          to="/contact" 
          variant="outline"
          size="lg"
          icon="heroicons:chat-bubble-left-ellipsis"
        >
          Nous contacter
        </MaterialButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialButton from '~/components/ui/MaterialButton.vue'

// Accès à l'erreur via useError()
const error = useError()

const errorMessage = computed(() => {
  switch (error.value?.statusCode) {
    case 404:
      return "La page que vous recherchez n'existe pas ou a été déplacée."
    case 500:
      return "Une erreur est survenue sur notre serveur. Nos équipes ont été notifiées."
    case 403:
      return "Vous n'avez pas les permissions nécessaires pour accéder à cette page."
    default:
      return "Une erreur inattendue s'est produite. Veuillez réessayer ultérieurement."
  }
})

// Fonction pour effacer l'erreur et retourner à la page précédente
const handleError = () => clearError({ redirect: '/' })
</script> 