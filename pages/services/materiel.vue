<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Solutions Matérielles"
      description="Équipements professionnels et solutions d'infrastructure IT"
      image="/images/materiel-og.jpg"
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
            Solutions Matérielles Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Équipements & Infrastructure IT
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Des solutions matérielles professionnelles pour optimiser votre infrastructure
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
              href="#why-materiel"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi choisir nos solutions ? -->
    <section id="why-materiel" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir nos solutions ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise complète pour votre infrastructure informatique
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
            Des équipements adaptés à tous vos besoins
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
            Un accompagnement complet pour votre infrastructure
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
    icon: 'heroicons:server',
    title: 'Infrastructure Complète',
    description: 'Solutions matérielles pour tous vos besoins IT'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Fiabilité',
    description: 'Équipements professionnels de marques reconnues'
  },
  {
    icon: 'heroicons:cog',
    title: 'Performance',
    description: 'Matériel optimisé pour vos usages spécifiques'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Évolutivité',
    description: 'Solutions adaptables à votre croissance'
  },
  {
    icon: 'heroicons:currency-euro',
    title: 'Rentabilité',
    description: 'Optimisation des coûts et de la durée de vie'
  },
  {
    icon: 'heroicons:wrench-screwdriver',
    title: 'Support Complet',
    description: 'Maintenance et assistance technique dédiées'
  }
]

const solutions = [
  {
    icon: 'heroicons:computer-desktop',
    title: 'Postes de Travail',
    description: 'PC, stations de travail et écrans professionnels'
  },
  {
    icon: 'heroicons:server',
    title: 'Serveurs',
    description: 'Solutions serveurs pour tous types d\'infrastructures'
  },
  {
    icon: 'heroicons:signal',
    title: 'Réseaux',
    description: 'Équipements réseau et solutions de connectivité'
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Mobilité',
    description: 'Solutions mobiles et travail à distance'
  }
]

const services = [
  {
    icon: 'heroicons:wrench-screwdriver',
    title: 'Installation',
    description: 'Installation et configuration sur site'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Maintenance',
    description: 'Contrats de maintenance préventive et curative'
  },
  {
    icon: 'heroicons:phone',
    title: 'Support',
    description: 'Assistance technique et dépannage'
  }
]
</script>

<style scoped>
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}
</style> 