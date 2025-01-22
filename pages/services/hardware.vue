<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="Solutions Matérielles"
      description="Équipements professionnels et solutions d'infrastructure IT"
      image="/images/hardware-og.jpg"
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
            Solutions Matérielles Professionnelles
          </span>
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Équipements et Infrastructure IT
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Des solutions matérielles professionnelles pour optimiser votre infrastructure informatique.
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
              href="#why-hardware"
              class="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl 
                     hover:border-blue-300 transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi choisir nos solutions matérielles ? -->
    <section id="why-hardware" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions Matérielles
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Des équipements professionnels adaptés à vos besoins
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

    <!-- Notre Expertise -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Notre Expertise
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise technique pointue à votre service
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

    <!-- Services de Maintenance -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform -rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100/50">
            <h2 class="text-3xl font-bold text-blue-800 mb-12 text-center">Services de Maintenance</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div v-for="(item, index) in maintenance" :key="index" class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-6">
                  <div class="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                    <Icon :name="maintenanceIcons[index]" class="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">{{ item.title }}</h3>
                  <p class="text-gray-600 text-center">{{ item.description }}</p>
                </div>
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
          Besoin d'Équipements Professionnels ?
        </h2>
        <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
          Contactez nos experts pour un conseil personnalisé et un devis adapté à vos besoins.
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
const expertiseIcons = [
  'heroicons:computer-desktop',
  'heroicons:server',
  'heroicons:signal',
  'heroicons:shield-check',
  'heroicons:printer',
  'heroicons:wrench-screwdriver'
]

const expertise = [
  {
    title: 'Postes de Travail',
    description: 'Ordinateurs et périphériques professionnels'
  },
  {
    title: 'Infrastructure Réseau',
    description: 'Solutions serveurs et stockage'
  },
  {
    title: 'Réseaux & Télécoms',
    description: 'Équipements réseau et communication'
  },
  {
    title: 'Sécurité',
    description: 'Solutions de sécurité physique et logique'
  },
  {
    title: 'Impression',
    description: 'Solutions d\'impression professionnelles'
  },
  {
    title: 'Maintenance',
    description: 'Support technique et maintenance préventive'
  }
]

const services = [
  {
    icon: 'heroicons:computer-desktop',
    title: 'Postes de Travail',
    description: 'PC, portables et stations de travail'
  },
  {
    icon: 'heroicons:server',
    title: 'Serveurs',
    description: 'Solutions de serveurs et stockage'
  },
  {
    icon: 'heroicons:signal',
    title: 'Réseaux',
    description: 'Switches, routeurs et points d\'accès'
  },
  {
    icon: 'heroicons:printer',
    title: 'Impression',
    description: 'Imprimantes et multifonctions'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Sécurité',
    description: 'Caméras et contrôle d\'accès'
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Mobilité',
    description: 'Solutions mobiles professionnelles'
  }
]

const maintenanceIcons = [
  'heroicons:wrench-screwdriver',
  'heroicons:clock',
  'heroicons:arrow-path'
]

const maintenance = [
  {
    title: 'Support Technique',
    description: 'Assistance et dépannage sur site ou à distance'
  },
  {
    title: 'Maintenance Préventive',
    description: 'Entretien régulier et mises à jour'
  },
  {
    title: 'Contrats de Service',
    description: 'Solutions de maintenance personnalisées'
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
