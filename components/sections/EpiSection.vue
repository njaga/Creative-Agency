<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-blue-600 font-medium">Protection Individuelle</span>
        <h2 class="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Équipements de Protection
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Des solutions complètes pour la sécurité de vos équipes
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="epi in epis"
          :key="epi.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <EquipmentCard v-bind="epi" />
        </div>
      </div>

      <div class="text-center">
        <NuxtLink
          to="/epi"
          class="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 
                 transition-all duration-300 group"
        >
          Voir tout le catalogue EPI
          <Icon 
            name="heroicons:arrow-right" 
            class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// Fonction pour obtenir l'URL de l'image
function getImageUrl(path: string): string {
  try {
    return new URL(`/public${path}`, import.meta.url).href
  } catch (error) {
    console.error('Erreur de chargement d\'image:', error)
    return path
  }
}

interface Epi {
  title: string
  description: string
  image: string
  link: string
  features: string[]
  tag?: string
}

// Exporter les options par défaut
export const defaultEpis: Epi[] = [
  {
    title: 'Casques de Chantier',
    description: 'Protection de la tête aux normes EN 397',
    image: getImageUrl('/epi/casque.avif'),
    link: '/epi/protection-tete',
    features: [
      'Résistance aux chocs',
      'Ajustement facile',
      'Plusieurs coloris',
      'Certification CE'
    ],
    tag: 'Best-seller'
  },
  {
    title: 'Lunettes de Protection',
    description: 'Protection oculaire professionnelle',
    image: getImageUrl('/epi/lunettes.avif'),
    link: '/epi/protection-yeux',
    features: [
      'Anti-rayures',
      'Anti-buée',
      'Protection UV',
      'Ultra légères'
    ]
  },
  {
    title: 'Masques FFP2',
    description: 'Protection respiratoire certifiée',
    image: getImageUrl('/epi/masque.avif'),
    link: '/epi/protection-respiratoire',
    features: [
      'Filtration 94%',
      'Confort optimal',
      'Pliable',
      'Boîte de 20 unités'
    ],
    tag: 'Nouveau'
  },
  {
    title: 'Gants de Travail',
    description: 'Protection des mains polyvalente',
    image: getImageUrl('/epi/gants.avif'),
    link: '/epi/protection-mains',
    features: [
      'Résistance mécanique',
      'Grip renforcé',
      'Respirants',
      'Plusieurs tailles'
    ]
  },
  {
    title: 'Gilets Haute Visibilité',
    description: 'Visibilité optimale EN ISO 20471',
    image: getImageUrl('/epi/gilet.avif'),
    link: '/epi/protection-corps',
    features: [
      'Classe 2',
      'Bandes réfléchissantes',
      'Fermeture velcro',
      'Poches multiples'
    ]
  },
  {
    title: 'Chaussures de Sécurité',
    description: 'Protection des pieds S3 SRC',
    image: getImageUrl('/epi/chaussures.avif'),
    link: '/epi/protection-pieds',
    features: [
      'Embout composite',
      'Semelle anti-perforation',
      'Imperméables',
      'Ultra confortables'
    ],
    tag: 'Premium'
  }
]
</script>

<script setup lang="ts">
import EquipmentCard from '~/components/cards/EquipmentCard.vue'

const props = withDefaults(defineProps<{
  epis?: Epi[]
}>(), {
  epis: () => defaultEpis
})
</script> 