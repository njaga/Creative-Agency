<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Imprimantes à Badges"
      description="Solutions professionnelles d'impression de badges et cartes"
      image="/images/badges-og.jpg"
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
            Solutions d'Impression Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Imprimantes à Badges
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Créez des badges professionnels personnalisés pour tous vos besoins
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
              href="#why-badges"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi une imprimante à badges ? -->
    <section id="why-badges" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi une imprimante à badges ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution professionnelle pour créer vos badges et cartes d'identification
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
            Des imprimantes adaptées à tous vos besoins
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
            Un accompagnement complet pour vos impressions de badges
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
    icon: 'heroicons:identification',
    title: 'Personnalisation',
    description: 'Créez des badges uniques adaptés à votre image de marque'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Sécurité',
    description: 'Options de sécurité avancées contre la contrefaçon'
  },
  {
    icon: 'heroicons:printer',
    title: 'Impression Rapide',
    description: 'Production efficace de badges en grande quantité'
  },
  {
    icon: 'heroicons:photo',
    title: 'Haute Qualité',
    description: 'Impression professionnelle en haute résolution'
  },
  {
    icon: 'heroicons:variable',
    title: 'Polyvalence',
    description: 'Compatible avec différents types de cartes et formats'
  },
  {
    icon: 'heroicons:currency-euro',
    title: 'Rentabilité',
    description: 'Solution économique pour l\'impression en interne'
  }
]

const solutions = [
  {
    icon: 'heroicons:printer',
    title: 'Imprimantes Simple Face',
    description: 'Pour l\'impression basique de badges d\'identification'
  },
  {
    icon: 'heroicons:document-duplicate',
    title: 'Imprimantes Recto-Verso',
    description: 'Impression double face automatique pour plus d\'informations'
  },
  {
    icon: 'heroicons:key',
    title: 'Encodage RFID',
    description: 'Solutions avec encodage de puces RFID intégré'
  },
  {
    icon: 'heroicons:computer-desktop',
    title: 'Logiciels de Design',
    description: 'Outils de conception et gestion de badges intuitifs'
  }
]

const services = [
  {
    icon: 'heroicons:wrench-screwdriver',
    title: 'Installation',
    description: 'Installation et configuration de votre imprimante'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Formation',
    description: 'Formation à l\'utilisation du matériel et des logiciels'
  },
  {
    icon: 'heroicons:shopping-cart',
    title: 'Consommables',
    description: 'Fourniture de rubans, cartes et accessoires'
  }
]
</script>

<style scoped>
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}
</style> 