<template>
  <section class="py-16 sm:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Créez Votre Site Web Professionnel"
        subtitle="Une présence en ligne qui reflète l'excellence de votre entreprise"
        class="text-white"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-8 sm:mt-16">
        <div class="relative order-2 lg:order-1">
          <img 
            src="/web-design.svg" 
            alt="Web Design" 
            class="w-full max-w-lg mx-auto relative z-10"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent rounded-xl"></div>
          <!-- Éléments décoratifs -->
          <div class="absolute -top-20 -left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div class="space-y-6 sm:space-y-8 order-1 lg:order-2">
          <div 
            v-for="(feature, index) in webFeatures" 
            :key="feature.title"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="index * 100"
            class="flex gap-4 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <Icon :name="feature.icon" class="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-sm sm:text-base text-blue-100">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 sm:mt-16 text-center">
        <BaseButton 
          to="/services/web" 
          variant="primary"
          class="group"
        >
          Découvrir nos services web
          <template #icon>
            <Icon 
              name="heroicons:arrow-right" 
              class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
            />
          </template>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'


const webFeatures = [
  {
    title: 'Design Sur Mesure',
    description: 'Un site web unique qui correspond à votre identité visuelle et vos objectifs',
    icon: 'heroicons:paint-brush'
  },
  {
    title: 'Optimisé Pour Mobile',
    description: 'Une expérience fluide sur tous les appareils, du smartphone au desktop',
    icon: 'heroicons:device-phone-mobile'
  },
  {
    title: 'SEO Intégré',
    description: 'Votre site web optimisé pour les moteurs de recherche dès le lancement',
    icon: 'heroicons:magnifying-glass'
  }
]
</script>
