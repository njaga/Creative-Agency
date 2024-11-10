<template>
  <div class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
          Nos Solutions Digitales
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Des services sur mesure pour répondre à tous vos besoins en transformation digitale
        </p>
      </div>

      <!-- Grille de services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in servicesList" 
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="group"
        >
          <div class="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
            <!-- En-tête -->
            <div class="mb-6">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon 
                  :name="service.icon" 
                  class="w-8 h-8 text-blue-600"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">{{ service.title }}</h3>
              <p class="text-gray-600 mt-2">{{ service.description }}</p>
            </div>

            <!-- Caractéristiques -->
            <ul class="space-y-3 mb-6 flex-grow">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <Icon 
                  name="heroicons:check-circle" 
                  class="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Prix et CTA -->
            <div class="mt-auto space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm text-gray-500">À partir de</div>
                  <div class="text-xl font-bold text-blue-600">{{ service.startingPrice }} FCFA</div>
                </div>
                <div class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {{ service.duration || 'Sur mesure' }}
                </div>
              </div>
              <BaseButton
                :to="service.link"
                variant="outline"
                icon="heroicons:arrow-right"
                class="w-full"
              >
                En savoir plus
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const servicesList = computed(() => [
  {
    title: 'Création de sites web',
    description: 'Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies.',
    icon: 'heroicons:code-bracket',
    features: [
      'Site responsive',
      'Optimisation SEO',
      'Interface administration',
      'Hébergement sécurisé'
    ],
    startingPrice: '500 000',
    duration: '4-8 semaines',
    link: '/services/web'
  },
  {
    title: 'Applications métiers',
    description: 'Solutions logicielles personnalisées pour optimiser vos processus métiers.',
    icon: 'heroicons:computer-desktop',
    features: [
      'Analyse des besoins',
      'Développement sur mesure',
      'Formation utilisateurs',
      'Support technique'
    ],
    startingPrice: '1 500 000',
    duration: '2-4 mois',
    link: '/services/business-apps'
  },
  {
    title: 'Marketing digital',
    description: 'Stratégies marketing pour augmenter votre visibilité en ligne et attirer plus de clients.',
    icon: 'heroicons:sparkles',
    features: [
      'Stratégie digitale',
      'Gestion réseaux sociaux',
      'Campagnes publicitaires',
      'Analyse des résultats'
    ],
    startingPrice: '300 000',
    duration: 'Mensuel',
    link: '/services/marketing'
  },
  {
    title: 'Matériel informatique',
    description: 'Fourniture et installation de matériel informatique professionnel.',
    icon: 'heroicons:shopping-cart',
    features: [
      'Audit du parc',
      'Conseil personnalisé',
      'Installation sur site',
      'Maintenance'
    ],
    startingPrice: '200 000',
    duration: 'Sur devis',
    link: '/services/hardware'
  },
  {
    title: 'Développement mobile',
    description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
    icon: 'heroicons:device-phone-mobile',
    features: [
      'Apps iOS & Android',
      'Design moderne',
      'Performance optimale',
      'Mises à jour régulières'
    ],
    startingPrice: '2 000 000',
    duration: '3-6 mois',
    link: '/services/mobile'
  },
  {
    title: 'Design UI/UX',
    description: 'Interfaces utilisateur modernes et expériences utilisateur optimisées.',
    icon: 'heroicons:swatch',
    features: [
      'Design sur mesure',
      'Prototypage',
      'Tests utilisateurs',
      'Guidelines'
    ],
    startingPrice: '400 000',
    duration: '2-4 semaines',
    link: '/services/design'
  }
])
</script> 