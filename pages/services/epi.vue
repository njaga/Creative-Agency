<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Équipements de Protection Individuelle"
      description="Solutions complètes d'EPI pour la sécurité au travail"
      image="/images/epi-og.jpg"
    />
    
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div class="absolute right-0 top-0 w-1/2 h-full">
        <div class="absolute inset-0 bg-dots-pattern opacity-5"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-2xl">
          <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            Solutions EPI Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Équipements de Protection
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Protection et sécurité optimale pour vos équipes
          </p>
          <div class="flex gap-4">
            <NuxtLink
              to="/contact"
              class="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 
                     transition-all duration-300 inline-flex items-center group"
            >
              Démarrer votre projet
              <Icon 
                name="heroicons:arrow-right" 
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
            <a
              href="#why-epi"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi les EPI ? -->
    <section id="why-epi" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir nos EPI ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Des équipements certifiés pour une protection optimale
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="avantage in avantages" :key="avantage.title"
               class="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
              <Icon :name="avantage.icon" class="w-6 h-6"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ avantage.title }}</h3>
            <p class="text-gray-600">{{ avantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Solutions -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Nos Solutions</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète d'équipements de protection
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="solution in solutions" :key="solution.title"
               class="flex gap-6 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Icon :name="solution.icon" class="w-6 h-6"/>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ solution.title }}</h3>
              <p class="text-gray-600">{{ solution.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Associés -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Services Associés</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour votre sécurité
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" 
               class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Icon :name="service.icon" class="w-6 h-6"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const avantages = [
  {
    icon: 'heroicons:shield-check',
    title: 'Conformité',
    description: 'Équipements conformes aux normes CE et EN en vigueur'
  },
  {
    icon: 'heroicons:user-group',
    title: 'Protection Optimale',
    description: 'Protection maximale pour vos collaborateurs'
  },
  {
    icon: 'heroicons:sparkles',
    title: 'Qualité Premium',
    description: 'Matériaux et finitions de haute qualité'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Performance',
    description: 'Confort et efficacité pour un usage prolongé'
  },
  {
    icon: 'heroicons:cube',
    title: 'Stock Permanent',
    description: 'Disponibilité immédiate des équipements'
  },
  {
    icon: 'heroicons:currency-euro',
    title: 'Prix Compétitifs',
    description: 'Rapport qualité-prix optimal pour votre budget'
  }
]

const solutions = [
  {
    icon: 'heroicons:eye',
    title: 'Protection Oculaire',
    description: 'Lunettes et masques de protection certifiés'
  },
  {
    icon: 'heroicons:hand-raised',
    title: 'Protection des Mains',
    description: 'Gants adaptés à chaque utilisation'
  },
  {
    icon: 'heroicons:speaker-wave',
    title: 'Protection Auditive',
    description: 'Casques et bouchons d\'oreilles professionnels'
  },
  {
    icon: 'heroicons:face-smile',
    title: 'Protection Respiratoire',
    description: 'Masques et équipements respiratoires'
  }
]

const services = [
  {
    icon: 'heroicons:clipboard-document-check',
    title: 'Audit & Conseil',
    description: 'Évaluation de vos besoins en EPI'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Formation',
    description: 'Formation à l\'utilisation des EPI'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Renouvellement',
    description: 'Suivi et renouvellement de vos équipements'
  }
]
</script>

<style scoped>
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}
</style> 