<template>
  <div class="py-24 relative">
    <!-- Fond décoratif -->
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- En-tête -->
      <div class="text-center mb-20">
        <h2 
          class="text-4xl sm:text-5xl font-bold mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Pourquoi Nous Choisir ?
          </span>
        </h2>
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Une expertise reconnue et une approche innovante pour transformer vos idées en réalité
        </p>
      </div>

      <!-- Raisons principales -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div 
          v-for="reason in reasons" 
          :key="reason.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="group relative"
        >
          <!-- Carte avec effet de survol -->
          <div class="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-blue-100/50 relative z-10">
            <!-- Icône flottante -->
            <div class="absolute -top-8 left-8">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Icon 
                  :name="reason.icon" 
                  class="w-8 h-8 text-white"
                />
              </div>
            </div>

            <!-- Contenu -->
            <div class="mt-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ reason.title }}</h3>
              <p class="text-gray-600 mb-6">{{ reason.description }}</p>
              
              <!-- Points clés avec animation -->
              <ul class="space-y-3">
                <li 
                  v-for="point in reason.keyPoints" 
                  :key="point"
                  class="flex items-center text-gray-600 group/item"
                >
                  <span class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 group-hover/item:bg-blue-100 transition-colors">
                    <Icon 
                      name="heroicons:check" 
                      class="w-5 h-5 text-blue-600"
                    />
                  </span>
                  <span class="group-hover/item:text-blue-600 transition-colors">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="stat in stats" 
          :key="stat.value"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="group"
        >
          <div class="p-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
            <div class="relative">
              <div class="text-5xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform">
                {{ stat.value }}
              </div>
              <div class="text-lg font-medium text-blue-900/80">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const reasons = computed(() => [
  {
    title: 'Expertise Reconnue',
    description: 'Plus de 10 ans d\'expérience dans la transformation digitale avec des solutions innovantes.',
    icon: 'heroicons:trophy',
    keyPoints: [
      'Équipe certifiée',
      'Technologies modernes',
      'Projets d\'envergure'
    ]
  },
  {
    title: 'Approche Sur Mesure',
    description: 'Des solutions adaptées à vos besoins spécifiques pour maximiser votre réussite.',
    icon: 'heroicons:puzzle-piece',
    keyPoints: [
      'Analyse approfondie',
      'Solutions personnalisées',
      'Accompagnement dédié'
    ]
  },
  {
    title: 'Support Premium',
    description: 'Un accompagnement continu et réactif pour assurer votre tranquillité.',
    icon: 'heroicons:heart',
    keyPoints: [
      'Support 24/7',
      'Temps de réponse < 2h',
      'Maintenance préventive'
    ]
  }
])

const stats = computed(() => [
  {
    value: '98%',
    label: 'Satisfaction client'
  },
  {
    value: '50+',
    label: 'Projets réussis'
  },
  {
    value: '24/7',
    label: 'Support client'
  }
])
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
