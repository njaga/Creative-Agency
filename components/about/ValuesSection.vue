<template>
  <div class="mb-32 relative overflow-hidden">
    <!-- Fond avec dégradé et blobs -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl">
      <!-- Blobs animés -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative py-20 px-4">
      <!-- En-tête avec animation -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Nos Valeurs
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
      </div>

      <!-- Grille de valeurs -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(value, index) in valuesList" 
          :key="value.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="index * 200"
          class="group relative"
        >
          <!-- Carte avec effet de verre -->
          <div class="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-500 overflow-hidden">
            <!-- Effet de brillance au survol -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <!-- Icône avec animation -->
            <div class="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 text-yellow-400">
                <Icon :name="value.icon" class="w-8 h-8" />
              </div>
            </div>

            <!-- Contenu -->
            <h3 class="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
              {{ value.title }}
            </h3>
            <p class="text-blue-100 group-hover:text-white transition-colors">
              {{ value.description }}
            </p>

            <!-- Points décoratifs -->
            <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl group-hover:opacity-75 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const valuesList = computed(() => [
  {
    title: 'Innovation',
    description: 'Nous restons à la pointe de la technologie pour offrir les meilleures solutions et garantir votre succès digital.',
    icon: 'heroicons:light-bulb'
  },
  {
    title: 'Collaboration',
    description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.',
    icon: 'heroicons:user-group'
  },
  {
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet, avec un souci constant de la qualité et de la satisfaction client.',
    icon: 'heroicons:sparkles'
  }
])
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>