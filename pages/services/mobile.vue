<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Développement Mobile"
      description="Applications mobiles natives et cross-platform pour iOS et Android"
      image="/images/mobile-og.jpg"
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
            Solutions Mobiles Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Applications Mobiles Innovantes
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Créez des applications mobiles performantes et intuitives pour iOS et Android.
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
              href="#why-mobile"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi une application mobile ? -->
    <section id="why-mobile" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi créer une application mobile ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Les applications mobiles sont devenues essentielles pour toucher et fidéliser vos utilisateurs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="raison in raisonsMobile" :key="raison.title"
               class="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
              <Icon :name="raison.icon" class="w-6 h-6"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ raison.title }}</h3>
            <p class="text-gray-600">{{ raison.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir ? -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre expertise en développement mobile fait la différence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="avantage in avantages" :key="avantage.title"
               class="flex gap-6 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Icon :name="avantage.icon" class="w-6 h-6"/>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ avantage.title }}</h3>
              <p class="text-gray-600">{{ avantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Les meilleures technologies pour vos applications mobiles
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" 
               class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
            <h3 class="font-semibold text-gray-900">{{ tech.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour des résultats optimaux
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="index" 
               class="relative p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="pt-6 text-center">
              <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
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
            +221 77 342 22 48
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const raisonsMobile = [
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Expérience Utilisateur',
    description: 'Une expérience fluide et intuitive adaptée aux appareils mobiles.'
  },
  {
    icon: 'heroicons:signal',
    title: 'Accessibilité',
    description: 'Accès à vos services partout et à tout moment.'
  },
  {
    icon: 'heroicons:bell',
    title: 'Engagement',
    description: 'Interactions directes avec vos utilisateurs via les notifications.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Performance',
    description: 'Applications optimisées pour des performances natives.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Sécurité',
    description: 'Protection des données et authentification sécurisée.'
  },
  {
    icon: 'heroicons:arrow-trending-up',
    title: 'Innovation',
    description: 'Accès aux dernières fonctionnalités mobiles.'
  }
]

const avantages = [
  {
    icon: 'heroicons:code-bracket-square',
    title: 'Expertise technique',
    description: 'Maîtrise des technologies mobiles natives et cross-platform.'
  },
  {
    icon: 'heroicons:light-bulb',
    title: 'Approche sur mesure',
    description: 'Solutions adaptées à vos besoins spécifiques et votre secteur.'
  },
  {
    icon: 'heroicons:clock',
    title: 'Délais optimisés',
    description: 'Méthodologie agile pour des livraisons rapides et efficaces.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Qualité garantie',
    description: 'Tests rigoureux sur tous les appareils et systèmes.'
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
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
