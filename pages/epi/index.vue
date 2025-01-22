<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Équipements de Protection Individuelle"
      description="Découvrez notre gamme complète d'EPI : protection oculaire, auditive, respiratoire et plus encore."
      image="/epi-og.jpg"
    />
    <!-- Hero Section -->
    <section class="py-24 relative">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-2">
          <h1 class="text-5xl font-bold mb-6 relative inline-block">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Catalogue EPI
            </span>
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions de protection professionnelles, conseil et formation inclus
          </p>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="flex flex-wrap gap-4 justify-center">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="selectedCategory === category 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Grille d'équipements -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="equipment in filteredEquipments"
          :key="equipment.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <EquipmentCard v-bind="equipment" />
        </div>
      </div>
    </div>

    <!-- Section Services -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 relative overflow-hidden">
      <!-- Blobs animés -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-6">Nos Services Inclus</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div class="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 text-yellow-400">
                <Icon :name="service.icon" class="w-8 h-8" />
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">{{ service.title }}</h3>
            <p class="text-blue-100 group-hover:text-white transition-colors">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-6">Besoin d'un Devis Personnalisé ?</h2>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous conseiller et vous proposer les meilleures solutions adaptées à vos besoins.
          </p>
          <div class="flex items-center justify-center">
            <MaterialButton 
              to="/devis" 
              variant="yellow" 
              size="lg"
              icon="heroicons:document-text"
            >
              Demander un devis
            </MaterialButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MaterialButton from '~/components/ui/MaterialButton.vue'
import EquipmentCard from '~/components/cards/EquipmentCard.vue'

// Interfaces
interface Equipment {
  title: string
  description: string
  image: string
  link: string
  category: string
  features: string[]
  tag?: string
}

interface Service {
  title: string
  description: string
  icon: string
}

// Catégories
const categories = [
  'Tous',
  'Protection Tête',
  'Protection Yeux',
  'Protection Respiratoire',
  'Protection Mains',
  'Protection Corps',
  'Protection Pieds'
]
const selectedCategory = ref<string>('Tous')

// Liste des équipements
const equipments = ref<Equipment[]>([
  {
    title: 'Casques de Chantier',
    description: 'Protection de la tête aux normes EN 397',
    image: '/epi/casque.avif',
    link: '/epi/protection-tete',
    category: 'Protection Tête',
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
    image: '/epi/lunettes.avif',
    link: '/epi/protection-yeux',
    category: 'Protection Yeux',
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
    image: '/epi/masque.avif',
    link: '/epi/protection-respiratoire',
    category: 'Protection Respiratoire',
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
    image: '/epi/gants.avif',
    link: '/epi/protection-mains',
    category: 'Protection Mains',
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
    image: '/epi/gilet.avif',
    link: '/epi/protection-corps',
    category: 'Protection Corps',
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
    image: '/epi/chaussures.avif',
    link: '/epi/protection-pieds',
    category: 'Protection Pieds',
    features: [
      'Embout composite',
      'Semelle anti-perforation',
      'Imperméables',
      'Ultra confortables'
    ],
    tag: 'Premium'
  }
])

// Services inclus
const services = ref<Service[]>([
  {
    title: 'Conseil Personnalisé',
    description: 'Évaluation de vos besoins et recommandations adaptées',
    icon: 'heroicons:clipboard-document-check'
  },
  {
    title: 'Formation EPI',
    description: 'Formation à l\'utilisation et à l\'entretien des équipements',
    icon: 'heroicons:academic-cap'
  },
  {
    title: 'Suivi & Maintenance',
    description: 'Contrôle régulier et renouvellement des équipements',
    icon: 'heroicons:arrow-path'
  }
])

// Filtrage des équipements
const filteredEquipments = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return equipments.value
  }
  return equipments.value.filter(item => item.category === selectedCategory.value)
})
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