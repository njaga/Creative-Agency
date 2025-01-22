<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Design & Création"
      description="Solutions créatives pour une identité visuelle impactante"
      image="/images/design-og.jpg"
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
            Solutions Design Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Design & Création
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Solutions créatives pour une identité visuelle impactante
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
              href="#why-design"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi le design ? -->
    <section id="why-design" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi investir dans le design ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Un design professionnel est essentiel pour se démarquer et créer un impact durable
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
               class="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
              <Icon :name="service.icon" class="w-6 h-6"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" 
                  class="flex items-center text-gray-600">
                <Icon name="heroicons:check" class="w-5 h-5 text-blue-600 mr-2" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Outils -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Nos Outils</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Les meilleurs outils pour des créations professionnelles
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div v-for="tool in tools" :key="tool.name" 
               class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <img :src="tool.icon" :alt="tool.name" class="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
            <h3 class="font-semibold text-gray-900">{{ tool.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Processus -->
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
            +221 77 342 22 48
          </a>
        </div>
      </div>
    </section>
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
.bg-dots-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
