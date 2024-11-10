<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Nos Services</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Des solutions complètes pour accompagner votre transformation digitale
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink :to="service.link" class="block h-full">
            <div class="p-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <component 
                  :is="service.icon" 
                  class="w-6 h-6 text-blue-600"
                />
              </div>
              <h3 class="text-xl font-bold text-blue-600 mb-2">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ service.description }}
              </p>
              <div class="mt-4 flex items-center text-yellow-500 font-medium">
                En savoir plus
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Section Pourquoi nous choisir -->
      <div class="mt-20">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :visible="{ once: true }"
          class="text-center mb-12"
        >
          <h2 class="text-3xl font-bold text-blue-600 mb-4">Pourquoi Nous Choisir ?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Notre expertise et notre engagement font la différence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="index * 100"
            class="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component 
                :is="feature.icon" 
                class="w-8 h-8 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-blue-600 mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :visible="{ once: true }"
        class="mt-20 text-center bg-blue-600 rounded-lg p-12"
      >
        <h2 class="text-3xl font-bold text-white mb-4">Prêt à Démarrer ?</h2>
        <p class="text-white mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-yellow-400 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Contactez-nous
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  ArrowRightIcon 
} from '@heroicons/vue/24/solid'

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SwatchIcon,
  SparklesIcon,
  ShoppingCartIcon,
  BoltIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    title: 'Création de Sites Web',
    description: 'Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies.',
    icon: CodeBracketIcon,
    link: '/services/web'
  },
  {
    title: 'Applications Métiers',
    description: 'Solutions logicielles personnalisées pour optimiser vos processus métiers.',
    icon: ComputerDesktopIcon,
    link: '/services/business-apps'
  },
  {
    title: 'Marketing Digital',
    description: 'Stratégies marketing pour augmenter votre visibilité en ligne et attirer plus de clients.',
    icon: SparklesIcon,
    link: '/services/marketing'
  },
  {
    title: 'Matériel Informatique',
    description: 'Fourniture et installation de matériel informatique professionnel.',
    icon: ShoppingCartIcon,
    link: '/services/hardware'
  },
  {
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
    icon: DevicePhoneMobileIcon,
    link: '/services/mobile'
  },
  {
    title: 'Design UI/UX',
    description: 'Interfaces utilisateur modernes et expériences utilisateur optimisées.',
    icon: SwatchIcon,
    link: '/services/design'
  }
]

const features = [
  {
    title: 'Expertise Technique',
    description: 'Une équipe d\'experts passionnés par les dernières technologies.',
    icon: BoltIcon
  },
  {
    title: 'Accompagnement',
    description: 'Un suivi personnalisé tout au long de votre projet.',
    icon: UserGroupIcon
  },
  {
    title: 'Qualité & Sécurité',
    description: 'Des solutions robustes et sécurisées pour votre tranquillité.',
    icon: ShieldCheckIcon
  }
]
</script>
