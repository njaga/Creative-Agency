<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Création de Sites Web</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Des solutions web modernes et performantes pour votre présence en ligne
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <img
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          src="/services/web-development.svg"
          alt="Développement Web"
          class="w-full rounded-lg shadow-lg"
        />
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
        >
          <h2 class="text-2xl font-bold text-blue-600 mb-4">Notre Expertise</h2>
          <ul class="space-y-4">
            <li 
              v-for="(item, index) in expertise" 
              :key="index" 
              class="flex items-start"
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="index * 100"
            >
              <CheckIcon class="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ once: true }"
        class="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 class="text-2xl font-bold text-blue-600 mb-6 text-center">Notre Processus</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in process" 
            :key="index" 
            class="text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="index * 200"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 font-bold">{{ index + 1 }}</span>
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import {
  CodeBracketIcon,
  ShoppingCartIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

const expertise = [
  'Sites web responsifs et modernes',
  'Applications web progressives (PWA)',
  'E-commerce et solutions de paiement',
  'Optimisation SEO',
  'Performance et temps de chargement optimisés',
  'Maintenance et support continu'
]

const process = [
  {
    title: 'Analyse des besoins',
    description: 'Nous étudions vos besoins et objectifs pour proposer la meilleure solution.'
  },
  {
    title: 'Design & Développement',
    description: 'Création d\'une interface moderne et développement avec les meilleures pratiques.'
  },
  {
    title: 'Tests & Déploiement',
    description: 'Tests rigoureux et mise en ligne de votre site web.'
  }
]
</script>
