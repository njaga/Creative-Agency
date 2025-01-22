<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Création de Sites Web"
      description="Des solutions web modernes et performantes pour votre présence en ligne"
      image="/images/web-og.jpg"
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
            Solutions Web Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Donnez vie à vos projets web
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Créez votre présence en ligne avec des solutions web modernes, 
            performantes et adaptées à vos besoins.
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
              href="#why-web"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi un site web ? -->
    <section id="why-web" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi avoir un site web en 2024 ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Dans un monde de plus en plus connecté, votre présence en ligne est devenue indispensable
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(raison, index) in raisonsWeb" :key="index"
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
            Notre expertise et notre approche font la différence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(avantage, index) in avantages" :key="index"
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
              src="/services/web-development.svg"
              alt="Développement Web"
              class="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="mb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform -rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-12 text-center">Notre Processus</h2>
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

      <!-- Technologies Section -->
      <section class="mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">Technologies Utilisées</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Nous utilisons les technologies les plus modernes et performantes pour garantir la qualité de nos solutions
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" 
               class="p-6 bg-white/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img :src="tech.logo" :alt="tech.name" class="h-12 mx-auto mb-4">
            <h3 class="text-center font-semibold text-gray-800">{{ tech.name }}</h3>
            <p class="text-center text-sm text-gray-600">{{ tech.description }}</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-8 text-center">Questions Fréquentes</h2>
            <div class="space-y-6">
              <div v-for="(item, index) in faq" :key="index" 
                   class="border-b border-gray-200 pb-6 last:border-0">
                <button @click="item.isOpen = !item.isOpen"
                        class="w-full text-left flex justify-between items-center">
                  <h3 class="text-lg font-semibold text-gray-900">{{ item.question }}</h3>
                  <Icon :name="item.isOpen ? 'heroicons:minus' : 'heroicons:plus'" 
                        class="w-5 h-5 text-blue-600"/>
                </button>
                <p v-show="item.isOpen" 
                   class="mt-4 text-gray-600">
                  {{ item.reponse }}
                </p>
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
            Prêt à Démarrer Votre Projet Web ?
          </h2>
          <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl 
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Nous contacter
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
  'heroicons:device-phone-mobile',
  'heroicons:rocket-launch',
  'heroicons:shopping-cart',
  'heroicons:magnifying-glass',
  'heroicons:arrow-trending-up',
  'heroicons:wrench'
]

const expertise = [
  {
    title: 'Sites Web Responsifs',
    description: 'Interfaces adaptatives pour tous les appareils'
  },
  {
    title: 'Applications Web Progressives',
    description: 'Expérience native-like sur le web'
  },
  {
    title: 'E-commerce',
    description: 'Solutions de vente en ligne complètes'
  },
  {
    title: 'Optimisation SEO',
    description: 'Visibilité maximale sur les moteurs de recherche'
  },
  {
    title: 'Performance Optimisée',
    description: 'Temps de chargement ultra-rapides'
  },
  {
    title: 'Support Continu',
    description: 'Maintenance et évolutions régulières'
  }
]

const process = [
  {
    title: 'Analyse des Besoins',
    description: 'Étude approfondie de vos objectifs et exigences pour une solution sur mesure.'
  },
  {
    title: 'Design & Développement',
    description: 'Création d\'interfaces modernes et développement avec les dernières technologies.'
  },
  {
    title: 'Tests & Déploiement',
    description: 'Validation qualité rigoureuse et mise en production sécurisée.'
  }
]

const technologies = [
  {
    name: 'Vue.js',
    logo: '/logos/vuejs.svg',
    description: 'Framework JavaScript progressif'
  },
  {
    name: 'Nuxt.js',
    logo: '/logos/nuxt.svg',
    description: 'Framework Vue.js pour applications universelles'
  },
  {
    name: 'TailwindCSS',
    logo: '/logos/tailwind.svg',
    description: 'Framework CSS utilitaire'
  },
  {
    name: 'Node.js',
    logo: '/logos/nodejs.svg',
    description: 'Runtime JavaScript côté serveur'
  }
]

const faq = ref([
  {
    question: 'Combien de temps faut-il pour créer un site web ?',
    reponse: 'La durée varie selon la complexité du projet, généralement entre 4 et 12 semaines.',
    isOpen: false
  },
  {
    question: 'Proposez-vous un service de maintenance ?',
    reponse: 'Oui, nous offrons des services de maintenance et de support continu.',
    isOpen: false
  },
  {
    question: 'Mon site sera-t-il optimisé pour mobile ?',
    reponse: 'Absolument, tous nos sites sont responsifs et optimisés pour tous les appareils.',
    isOpen: false
  }
])


const raisonsWeb = [
  {
    icon: 'heroicons:globe-alt',
    title: 'Visibilité 24/7',
    description: 'Soyez accessible à vos clients potentiels à tout moment, partout dans le monde.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Crédibilité professionnelle',
    description: '93% des décisions d\'achat commencent par une recherche en ligne.'
  },
  {
    icon: 'heroicons:users',
    title: 'Élargissez votre audience',
    description: 'Touchez de nouveaux clients et marchés sans limites géographiques.'
  },
  {
    icon: 'heroicons:presentation-chart-line',
    title: 'Marketing ciblé',
    description: 'Analysez et optimisez vos campagnes marketing avec précision.'
  },
  {
    icon: 'heroicons:currency-dollar',
    title: 'Coût-efficacité',
    description: 'Un investissement rentable comparé aux méthodes marketing traditionnelles.'
  },
  {
    icon: 'heroicons:chat-bubble-left-right',
    title: 'Communication directe',
    description: 'Interagissez facilement avec vos clients et récoltez leurs retours.'
  }
]

const avantages = [
  {
    icon: 'heroicons:code-bracket-square',
    title: 'Expertise technique',
    description: 'Notre équipe maîtrise les dernières technologies web pour des solutions performantes et évolutives.'
  },
  {
    icon: 'heroicons:light-bulb',
    title: 'Approche sur mesure',
    description: 'Chaque projet est unique. Nous créons des solutions adaptées à vos besoins spécifiques.'
  },
  {
    icon: 'heroicons:clock',
    title: 'Respect des délais',
    description: 'Nous nous engageons sur des délais précis et les respectons rigoureusement.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Qualité garantie',
    description: 'Tests approfondis et optimisations pour une qualité irréprochable.'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}

.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
