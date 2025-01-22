<template>
  <section class="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- En-tête amélioré -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Équipez Votre Entreprise
          </span>
          <!-- Élément décoratif -->
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Matériel professionnel de qualité, installation et maintenance incluses
        </p>
      </div>
      
      <!-- Grille de matériel améliorée -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <div 
          v-for="(item, index) in props.equipments"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        >
          <!-- Badge amélioré -->
          <span 
            v-if="item.tag" 
            class="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg z-10"
          >
            {{ item.tag }}
          </span>

          <!-- Container d'image amélioré -->
          <div class="relative h-56 bg-gradient-to-br from-blue-50 to-gray-50 p-4 overflow-hidden">
            <!-- Cercle décoratif -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
            </div>
            
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
            >
          </div>

          <!-- Contenu amélioré -->
          <div class="p-6 sm:p-8">
            <h3 class="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ item.description }}</p>
            
            <!-- Features améliorées -->
            <ul class="space-y-3 mb-8">
              <li 
                v-for="feature in item.features" 
                :key="feature"
                class="flex items-start text-sm sm:text-base text-gray-600 group/feature"
              >
                <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 group-hover/feature:bg-blue-200 transition-colors">
                  <Icon 
                    name="heroicons:check" 
                    class="w-3 h-3 text-blue-600"
                  />
                </div>
                <span class="group-hover/feature:text-gray-900 transition-colors">{{ feature }}</span>
              </li>
            </ul>

            <!-- Lien amélioré -->
            <NuxtLink 
              :to="item.link"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
            >
              <span class="relative">
                {{ item.linkText || 'Découvrir les solutions' }}
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
              </span>
              <Icon 
                name="heroicons:arrow-right" 
                class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="mt-20 relative overflow-hidden">
        <!-- Fond avec dégradé et blobs -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
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
            <h3 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              Services Inclus avec Votre Matériel
            </h3>
            <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <!-- Grille de services -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div 
              v-for="(service, index) in servicesList" 
              :key="service.title"
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
                    <Icon :name="service.icon" class="w-8 h-8" />
                  </div>
                </div>

                <!-- Contenu -->
                <h4 class="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {{ service.title }}
                </h4>
                <p class="text-blue-100 group-hover:text-white transition-colors">
                  {{ service.description }}
                </p>

                <!-- Points décoratifs -->
                <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl group-hover:opacity-75 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-16">
        <BaseButton to="/materiel" variant="primary" icon="heroicons:arrow-right">
          Explorer notre catalogue
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Equipment, Service } from '~/types/equipment'
import { defaultEquipments } from '~/data/equipments'
import SectionHeader from '~/components/ui/SectionHeader.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

// Définition des props avec valeur par défaut
const props = withDefaults(defineProps<{
  equipments?: Equipment[]
}>(), {
  equipments: () => defaultEquipments
})

// Services définis localement avec ref
const servicesList = ref<Service[]>([
  {
    title: 'Installation Professionnelle',
    description: 'Configuration sur site et mise en service par nos experts certifiés',
    icon: 'heroicons:wrench'
  },
  {
    title: 'Maintenance Préventive',
    description: 'Suivi régulier et mises à jour pour prévenir les pannes',
    icon: 'heroicons:shield-check'
  },
  {
    title: 'Support Technique',
    description: 'Assistance rapide sur site ou à distance 6j/7',
    icon: 'heroicons:phone'
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