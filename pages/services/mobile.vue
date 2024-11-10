<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Développement Mobile"
      description="Applications mobiles natives et cross-platform pour iOS et Android"
      image="/images/mobile-og.jpg"
    />
    <!-- Hero Section -->
    <section class="py-24 relative">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-20">
          <h1 class="text-5xl font-bold mb-6 relative inline-block">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Applications Mobiles
            </span>
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions mobiles innovantes pour iOS et Android
          </p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Expertise Section -->
      <section class="mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-1 opacity-10"></div>
            <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50">
              <h2 class="text-3xl font-bold text-blue-800 mb-8">Notre Expertise</h2>
              <ul class="space-y-6">
                <li v-for="(item, index) in expertise" :key="index" class="flex items-start group">
                  <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                    <Icon :name="expertiseIcons[index]" class="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="relative">
            <img
              src="/services/mobile-development.svg"
              alt="Développement Mobile"
              class="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Technologies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" 
               class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
            <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
            <h3 class="font-semibold text-gray-900">{{ tech.name }}</h3>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="mb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform -rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-12 text-center">Nos Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="service in services" :key="service.title" class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-6">
                  <div class="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon :name="service.icon" class="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
                  <p class="text-gray-600">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Notre Processus</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="index" class="relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="pt-12 text-center">
              <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 relative overflow-hidden mb-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Prêt à Lancer Votre Projet Mobile ?
          </h2>
          <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
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
              +221 33 867 35 00
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const expertiseIcons = [
  'heroicons:device-phone-mobile',
  'heroicons:device-tablet',
  'heroicons:cube-transparent',
  'heroicons:cloud',
  'heroicons:shield-check',
  'heroicons:chart-bar'
]

const expertise = [
  {
    title: 'iOS Native',
    description: 'Applications natives pour iPhone et iPad'
  },
  {
    title: 'Android Native',
    description: 'Applications natives pour Android'
  },
  {
    title: 'Cross-Platform',
    description: 'Solutions multiplateformes avec React Native'
  },
  {
    title: 'Backend & API',
    description: 'Infrastructure cloud et APIs robustes'
  },
  {
    title: 'Sécurité',
    description: 'Protection des données et authentification'
  },
  {
    title: 'Analytics',
    description: 'Suivi et analyse des performances'
  }
]

const technologies = [
  {
    name: 'iOS / Swift',
    icon: '/services/tech/swift.svg'
  },
  {
    name: 'Android / Kotlin',
    icon: '/services/tech/kotlin.svg'
  },
  {
    name: 'React Native',
    icon: '/services/tech/react-native.svg'
  },
  {
    name: 'Flutter',
    icon: '/services/tech/flutter.svg'
  }
]

const services = [
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Applications Natives',
    description: 'Développement d\'apps iOS et Android natives'
  },
  {
    icon: 'heroicons:cube-transparent',
    title: 'Apps Cross-Platform',
    description: 'Solutions multiplateformes optimisées'
  },
  {
    icon: 'heroicons:wrench-screwdriver',
    title: 'Maintenance & Support',
    description: 'Support continu et mises à jour'
  }
]

const process = [
  {
    title: 'Conception',
    description: 'Design UX/UI et architecture'
  },
  {
    title: 'Développement',
    description: 'Codage et tests unitaires'
  },
  {
    title: 'Tests',
    description: 'Tests qualité et beta testing'
  },
  {
    title: 'Déploiement',
    description: 'Publication et maintenance'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
