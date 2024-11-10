<template>
  <div class="relative overflow-hidden">
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
              Design & Création
            </span>
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions créatives pour une identité visuelle impactante
          </p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Services Section -->
      <section class="mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" 
               class="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative p-8">
              <div class="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                <Icon :name="service.icon" class="w-7 h-7 text-blue-600" />
              </div>
              <h3 class="text-2xl font-semibold mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6">{{ service.description }}</p>
              <ul class="space-y-3">
                <li v-for="(feature, index) in service.features" :key="index" 
                    class="flex items-center text-gray-600">
                  <Icon name="heroicons:check" class="w-5 h-5 text-blue-600 mr-3" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="mb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform -rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-12 text-center">Notre Processus Créatif</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div v-for="(step, index) in process" :key="index" class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-6">
                  <div class="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <Icon :name="step.icon" class="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">{{ step.title }}</h3>
                  <p class="text-gray-600 text-center">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Section -->
      <section class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Nos Outils</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div v-for="tool in tools" :key="tool.name" 
               class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img :src="tool.icon" :alt="tool.name" 
                 class="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
            <p class="text-center font-medium text-gray-800">{{ tool.name }}</p>
          </div>
        </div>
      </section>

      <!-- Portfolio Preview -->
       <!--
      <section class="mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Nos Réalisations</h2>
          <p class="text-gray-600">Découvrez quelques-uns de nos projets récents</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in portfolio" :key="project.title" 
               class="group relative overflow-hidden rounded-2xl shadow-lg">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-200">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" 
                    class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl 
                           hover:bg-blue-700 transition-colors">
            Voir plus de projets
            <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>
      </section>
      -->

      <!-- CTA Section -->
      <section class="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 relative overflow-hidden mb-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Prêt à Donner Vie à Vos Idées ?
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
const services = [
  {
    icon: 'heroicons:paint-brush',
    title: 'Design Graphique',
    description: 'Création d\'identités visuelles uniques et impactantes',
    features: [
      'Logo et charte graphique',
      'Supports de communication',
      'Illustrations sur mesure',
      'Design d\'emballage'
    ]
  },
  {
    icon: 'heroicons:computer-desktop',
    title: 'Design UI/UX',
    description: 'Interfaces utilisateur intuitives et esthétiques',
    features: [
      'Design d\'interfaces web',
      'Design d\'applications mobiles',
      'Prototypage interactif',
      'Tests utilisateurs'
    ]
  },
  {
    icon: 'heroicons:photo',
    title: 'Design Motion',
    description: 'Animations et contenus visuels dynamiques',
    features: [
      'Motion design',
      'Animations 2D/3D',
      'Vidéos promotionnelles',
      'Effets visuels'
    ]
  }
]

const process = [
  {
    icon: 'heroicons:light-bulb',
    title: 'Découverte',
    description: 'Analyse de vos besoins et objectifs'
  },
  {
    icon: 'heroicons:pencil-square',
    title: 'Conception',
    description: 'Création des premiers concepts'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Itération',
    description: 'Affinage et perfectionnement'
  },
  {
    icon: 'heroicons:check-badge',
    title: 'Finalisation',
    description: 'Livraison des fichiers finaux'
  }
]

const tools = [
  {
    name: 'Figma',
    icon: '/services/tools/figma.svg'
  },
  {
    name: 'Adobe XD',
    icon: '/services/tools/xd.svg'
  },
  {
    name: 'Photoshop',
    icon: '/services/tools/photoshop.svg'
  },
  {
    name: 'Illustrator',
    icon: '/services/tools/illustrator.svg'
  },
  {
    name: 'After Effects',
    icon: '/services/tools/after-effects.svg'
  },
  {
    name: 'Blender',
    icon: '/services/tools/blender.svg'
  }
]

const portfolio = [
  {
    title: 'Refonte E-commerce',
    description: 'Design UI/UX pour une plateforme de vente en ligne',
    image: '/portfolio/ecommerce.jpg'
  },
  {
    title: 'Identité de Marque',
    description: 'Création complète d\'une identité visuelle',
    image: '/portfolio/branding.jpg'
  },
  {
    title: 'Application Mobile',
    description: 'Design d\'interface pour une app de fitness',
    image: '/portfolio/mobile-app.jpg'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
