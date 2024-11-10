<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Développement Mobile</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Applications mobiles performantes et intuitives pour iOS et Android
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <img
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          src="/services/mobile-development.svg"
          alt="Développement Mobile"
          class="w-full rounded-lg shadow-lg"
        />
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
        >
          <h2 class="text-2xl font-bold text-blue-600 mb-4">Notre Expertise Mobile</h2>
          <ul class="space-y-4">
            <li v-for="(item, index) in expertise" :key="index" class="flex items-start">
              <CheckIcon class="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" />
              <span class="text-gray-600">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-blue-600 mb-6 text-center">Nos Services Mobile</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="index * 200"
            class="text-center"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import {
  DevicePhoneMobileIcon,
  CloudIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const expertise = [
  'Applications iOS natives (Swift)',
  'Applications Android natives (Kotlin)',
  'Applications cross-platform (React Native, Flutter)',
  'Applications PWA',
  'Intégration avec les API REST',
  'Tests et déploiement sur les stores'
]

const features = [
  {
    title: 'Applications Natives',
    description: 'Applications performantes et optimisées pour chaque plateforme.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Solutions Cloud',
    description: 'Intégration avec des services cloud pour plus de flexibilité.',
    icon: CloudIcon
  },
  {
    title: 'UX Mobile',
    description: 'Expérience utilisateur optimisée pour les appareils mobiles.',
    icon: SparklesIcon
  }
]
</script>

<style scoped>
.bg-blue-600 {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}

.text-blue-600 {
  color: #2563eb;
}

.text-yellow-400 {
  color: #fbbf24;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.text-gray-600 {
  color: #4b5563;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
