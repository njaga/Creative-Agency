<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Applications Métiers</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Solutions logicielles personnalisées pour optimiser vos processus métiers
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
        >
          <h2 class="text-2xl font-bold text-blue-600 mb-4">Solutions Sur Mesure</h2>
          <p class="text-gray-600 mb-4">
            Nous développons des applications métiers adaptées à vos besoins spécifiques 
            pour améliorer votre productivité et automatiser vos processus.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Analyse des besoins détaillée
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Développement sur mesure
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Intégration avec vos systèmes existants
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Formation et support continu
            </li>
          </ul>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
          class="relative"
        >
          <img 
            src="/services/business-apps-illustration.svg" 
            alt="Applications Métiers" 
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ once: true }"
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="bg-white p-6 rounded-lg shadow-lg"
        >
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <component 
              :is="feature.icon" 
              class="w-6 h-6 text-blue-600"
            />
          </div>
          <h3 class="text-xl font-semibold text-blue-600 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import {
  ChartSquareBarIcon,
  CogIcon,
  DatabaseIcon
} from '@heroicons/vue/outline'

const features = [
  {
    title: 'Gestion d\'entreprise',
    description: 'Solutions ERP et CRM adaptées à votre secteur d\'activité.',
    icon: ChartSquareBarIcon
  },
  {
    title: 'Automatisation',
    description: 'Automatisation des tâches répétitives et des workflows.',
    icon: CogIcon
  },
  {
    title: 'Gestion des données',
    description: 'Stockage sécurisé et analyse avancée de vos données.',
    icon: DatabaseIcon
  }
]
</script>
