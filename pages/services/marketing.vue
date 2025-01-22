<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Marketing Digital"
      description="Stratégies digitales innovantes pour booster votre visibilité et votre croissance"
      image="/images/marketing-og.jpg"
    />
    
    <!-- Hero Section Améliorée -->
    <section class="relative min-h-[90vh] flex items-center">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div class="absolute right-0 top-0 w-1/2 h-full">
        <div class="absolute inset-0 bg-dots-pattern opacity-5"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-2xl">
          <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            Solutions Marketing Digitales
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Boostez votre présence digitale
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Des stratégies marketing innovantes pour développer votre visibilité et votre croissance.
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
              href="#why-marketing"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi le marketing digital ? -->
    <section id="why-marketing" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi investir dans le digital ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Le marketing digital est devenu incontournable pour développer votre activité
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
               class="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
              <Icon :name="service.icon" class="w-6 h-6"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir ? -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Notre Expertise Marketing
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une approche complète et professionnelle du marketing digital
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(item, index) in expertise" :key="index"
               class="flex gap-6 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Icon :name="expertiseIcons[index]" class="w-6 h-6"/>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Process Section -->
      <section class="mb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform -rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-12 text-center">Notre Approche</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div v-for="(step, index) in process" :key="index" class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-6">
                  <div class="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <span class="text-2xl font-bold text-blue-600">{{ index + 1 }}</span>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">{{ step.title }}</h3>
                  <p class="text-gray-600 text-center">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 relative overflow-hidden mb-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Prêt à Booster votre Présence Digitale ?
          </h2>
          <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Contactez-nous pour une stratégie marketing personnalisée et efficace.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/devis"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl 
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Demander un devis
              <Icon 
                name="heroicons:arrow-right" 
                class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
            
            <a
              href="tel:+221338673500"
              class="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl 
                     border-2 border-white/20 hover:border-white/40
                     transform hover:scale-105 transition-all duration-300 group"
            >
              <Icon 
                name="heroicons:phone" 
                class="w-5 h-5 mr-3"
              />
              +221 77 342 22 48
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const expertiseIcons = [
  'heroicons:magnifying-glass',
  'heroicons:megaphone',
  'heroicons:envelope',
  'heroicons:chart-bar',
  'heroicons:pencil-square',
  'heroicons:presentation-chart-line'
]

const expertise = [
  {
    title: 'SEO & SEA',
    description: 'Optimisation pour les moteurs de recherche et publicité'
  },
  {
    title: 'Social Media',
    description: 'Gestion et stratégie des réseaux sociaux'
  },
  {
    title: 'Email Marketing',
    description: 'Campagnes d\'emails et newsletters personnalisées'
  },
  {
    title: 'Analytics',
    description: 'Suivi et analyse des performances marketing'
  },
  {
    title: 'Content Marketing',
    description: 'Création de contenu engageant et stratégique'
  },
  {
    title: 'Marketing Strategy',
    description: 'Stratégie digitale globale et consulting'
  }
]

const process = [
  {
    title: 'Audit & Analyse',
    description: 'Analyse approfondie de votre présence digitale et de vos objectifs.'
  },
  {
    title: 'Stratégie & Planning',
    description: 'Élaboration d\'une stratégie personnalisée et d\'un plan d\'action.'
  },
  {
    title: 'Exécution & Optimisation',
    description: 'Mise en œuvre des actions et optimisation continue des performances.'
  }
]

const services = [
  {
    icon: 'heroicons:magnifying-glass',
    title: 'SEO',
    description: 'Optimisation naturelle pour les moteurs de recherche'
  },
  {
    icon: 'heroicons:megaphone',
    title: 'Social Media',
    description: 'Gestion des réseaux sociaux et publicité'
  },
  {
    icon: 'heroicons:envelope',
    title: 'Email Marketing',
    description: 'Campagnes d\'emailing et automation'
  },
  {
    icon: 'heroicons:presentation-chart-line',
    title: 'Google Ads',
    description: 'Campagnes publicitaires Google'
  },
  {
    icon: 'heroicons:pencil-square',
    title: 'Content Marketing',
    description: 'Création de contenu et stratégie éditoriale'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Analytics',
    description: 'Mesure et analyse des performances'
  }
]
</script>

<style scoped>
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
