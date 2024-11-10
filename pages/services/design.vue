<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Design UI/UX</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Des interfaces modernes et intuitives pour une expérience utilisateur optimale
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
        >
          <h2 class="text-2xl font-bold text-blue-600 mb-4">Notre Approche Design</h2>
          <p class="text-gray-600 mb-4">
            Nous créons des interfaces utilisateur intuitives et esthétiques qui répondent 
            aux besoins de vos utilisateurs tout en respectant votre identité de marque.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Design centré utilisateur
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Interfaces responsives
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Tests utilisateurs
            </li>
            <li class="flex items-center text-gray-600">
              <CheckIcon class="w-5 h-5 text-yellow-500 mr-2" />
              Prototypage interactif
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
            src="/services/design-illustration.svg" 
            alt="Design UI/UX" 
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
  ColorSwatchIcon,
  CursorClickIcon,
  DeviceTabletIcon
} from '@heroicons/vue/outline'

const features = [
  {
    title: 'Design d\'Interface',
    description: 'Création d\'interfaces modernes et esthétiques adaptées à votre marque.',
    icon: ColorSwatchIcon
  },
  {
    title: 'Expérience Utilisateur',
    description: 'Optimisation des parcours utilisateurs pour une meilleure conversion.',
    icon: CursorClickIcon
  },
  {
    title: 'Design Responsive',
    description: 'Interfaces adaptatives pour tous les appareils et tailles d\'écran.',
    icon: DeviceTabletIcon
  }
]
</script>
