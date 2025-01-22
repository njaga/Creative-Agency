<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Applications Métier"
      description="Des solutions sur mesure pour optimiser vos processus métier"
      image="/images/business-apps-og.jpg"
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
            Solutions Métier Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Optimisez vos processus métier
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Des solutions sur mesure pour digitaliser et automatiser vos processus d'entreprise.
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
              href="#why-apps"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi une application métier ? -->
    <section id="why-apps" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi digitaliser vos processus ?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            La transformation digitale est devenue un enjeu majeur pour la compétitivité des entreprises
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(raison, index) in raisonsApps" :key="index"
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

const raisonsApps = [
  {
    icon: 'heroicons:clock',
    title: 'Gain de temps',
    description: 'Automatisez vos tâches répétitives et libérez du temps pour vos activités à valeur ajoutée.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Productivité accrue',
    description: 'Optimisez vos processus et augmentez l\'efficacité de vos équipes.'
  },
  {
    icon: 'heroicons:document-check',
    title: 'Réduction des erreurs',
    description: 'Minimisez les erreurs humaines grâce à l\'automatisation des processus.'
  },
  {
    icon: 'heroicons:presentation-chart-line',
    title: 'Meilleur pilotage',
    description: 'Disposez d\'indicateurs précis pour prendre les bonnes décisions.'
  },
  {
    icon: 'heroicons:users',
    title: 'Collaboration facilitée',
    description: 'Améliorez la communication et le partage d\'information entre les équipes.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Sécurité renforcée',
    description: 'Protégez vos données sensibles avec des solutions sécurisées.'
  }
]

const avantages = [
  {
    icon: 'heroicons:code-bracket-square',
    title: 'Expertise technique',
    description: 'Notre équipe maîtrise les dernières technologies pour des solutions robustes et évolutives.'
  },
  {
    icon: 'heroicons:light-bulb',
    title: 'Approche sur mesure',
    description: 'Nous développons des solutions parfaitement adaptées à vos processus métier.'
  },
  {
    icon: 'heroicons:clock',
    title: 'Accompagnement complet',
    description: 'De l\'analyse des besoins à la formation des utilisateurs.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Qualité garantie',
    description: 'Tests rigoureux et maintenance continue de vos applications.'
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
