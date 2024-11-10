<template>
  <div class="mb-32">
    <h2 class="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-16">
      Nos Services
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="service in servicesList" 
        :key="service.title"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="group"
      >
        <div class="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
          <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon 
              :name="service.icon" 
              class="w-8 h-8 text-blue-600"
            />
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <NuxtLink
            :to="service.link"
            class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
          >
            En savoir plus
            <Icon 
              name="heroicons:arrow-right" 
              class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const servicesList = computed(() => [
  {
    title: 'Développement Web',
    description: 'Sites web professionnels, applications web et solutions e-commerce sur mesure.',
    icon: 'heroicons:computer-desktop',
    link: '/services/web'
  },
  {
    title: 'Solutions Digitales',
    description: 'Transformation digitale, automatisation des processus et outils collaboratifs.',
    icon: 'heroicons:cube-transparent',
    link: '/services/digital'
  },
  {
    title: 'Support & Maintenance',
    description: 'Assistance technique, maintenance préventive et évolutive de vos solutions.',
    icon: 'heroicons:wrench-screwdriver',
    link: '/services/support'
  },
  {
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android.',
    icon: 'heroicons:device-phone-mobile',
    link: '/services/mobile'
  },
  {
    title: 'Design UI/UX',
    description: 'Création d\'interfaces utilisateur modernes et d\'expériences utilisateur optimisées.',
    icon: 'heroicons:swatch',
    link: '/services/design'
  },
  {
    title: 'Marketing Digital',
    description: 'Stratégies marketing pour augmenter votre visibilité en ligne et attirer plus de clients.',
    icon: 'heroicons:sparkles',
    link: '/services/marketing'
  }
])
</script> 