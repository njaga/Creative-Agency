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
              Applications Métier
            </span>
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour optimiser vos processus métier
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
              src="/services/business-apps-illustration.svg"
              alt="Applications Métier"
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

      <!-- CTA Section -->
      <section class="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 relative overflow-hidden mb-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Prêt à Digitaliser vos Processus Métier ?
          </h2>
          <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
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
  'heroicons:cog-6-tooth',
  'heroicons:chart-bar',
  'heroicons:document-check',
  'heroicons:users',
  'heroicons:cube-transparent',
  'heroicons:arrow-path'
]

const expertise = [
  {
    title: 'Gestion d\'Entreprise',
    description: 'Solutions ERP personnalisées pour gérer vos opérations'
  },
  {
    title: 'Business Intelligence',
    description: 'Tableaux de bord et analyses pour la prise de décision'
  },
  {
    title: 'Gestion Documentaire',
    description: 'Dématérialisation et workflow documentaire'
  },
  {
    title: 'CRM & Service Client',
    description: 'Gestion de la relation client et support'
  },
  {
    title: 'Applications Mobiles',
    description: 'Solutions mobiles pour vos équipes terrain'
  },
  {
    title: 'Intégration & API',
    description: 'Connexion avec vos outils existants'
  }
]

const process = [
  {
    title: 'Analyse des Processus',
    description: 'Étude approfondie de vos processus métier et identification des optimisations possibles.'
  },
  {
    title: 'Conception & Développement',
    description: 'Création d\'une solution sur mesure adaptée à vos besoins spécifiques.'
  },
  {
    title: 'Formation & Déploiement',
    description: 'Accompagnement des utilisateurs et mise en production progressive.'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
