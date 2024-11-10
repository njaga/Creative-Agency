<template>
  <section class="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-yellow-50/30 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête amélioré -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Nos Services
          </span>
          <!-- Élément décoratif -->
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Des solutions complètes pour votre transformation digitale
        </p>
      </div>

      <!-- Navigation des services améliorée -->
      <div 
        class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-16 px-2 max-w-3xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <button 
          v-for="(service, index) in services" 
          :key="service.title"
          @click="currentServiceIndex = index"
          class="px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 relative whitespace-nowrap group backdrop-blur-sm"
          :class="[
            currentServiceIndex === index 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 scale-105'
              : 'bg-white/90 text-gray-600 hover:bg-blue-50 hover:scale-105 border border-blue-100/50'
          ]"
        >
          <Icon 
            :name="service.icon" 
            class="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2 transition-transform group-hover:scale-110"
          />
          {{ service.title }}
          <span 
            v-if="currentServiceIndex === index"
            class="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full -translate-x-1/2"
          />
        </button>
      </div>

      <!-- Contenu du service avec design amélioré -->
      <div 
        class="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] bg-gradient-to-br from-white to-blue-50/30 rounded-2xl sm:rounded-3xl border border-blue-100/50 backdrop-blur-sm shadow-xl shadow-blue-100/20"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="400"
      >
        <!-- Éléments décoratifs améliorés -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div class="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100/10 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
        </div>

        <!-- Points décoratifs animés -->
        <div class="hidden sm:block">
          <div class="absolute top-8 left-8 w-2 h-2 rounded-full bg-yellow-400 animate-ping-slow"></div>
          <div class="absolute top-8 left-14 w-2 h-2 rounded-full bg-blue-400 animate-ping-slow delay-500"></div>
          <div class="absolute top-14 left-8 w-2 h-2 rounded-full bg-blue-600 animate-ping-slow delay-1000"></div>
        </div>

        <!-- Contenu avec transitions améliorées -->
        <TransitionGroup 
          name="fade-slide" 
          mode="out-in"
          class="relative h-full"
        >
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            v-show="currentServiceIndex === index"
            class="absolute inset-0 p-6 sm:p-8 lg:p-16 flex items-center"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <!-- Illustration améliorée -->
              <div class="relative order-2 lg:order-1 hidden sm:block">
                <div class="aspect-square max-w-[250px] sm:max-w-md mx-auto relative group">
                  <!-- Cercle décoratif interactif -->
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-yellow-100/50 rounded-full animate-pulse-slow group-hover:from-blue-200/60 group-hover:to-yellow-200/60 transition-all duration-500"></div>
                  
                  <!-- Cercles additionnels -->
                  <div class="absolute inset-4 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full transform transition-all duration-700 group-hover:scale-95"></div>
                  <div class="absolute inset-8 bg-gradient-to-tl from-yellow-200/30 to-transparent rounded-full transform transition-all duration-700 group-hover:rotate-180"></div>
                  
                  <!-- Icône interactive -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      :name="service.icon" 
                      class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-600/90 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    />
                  </div>
                </div>
              </div>

              <!-- Texte avec animations -->
              <div class="order-1 lg:order-2 space-y-6 sm:space-y-8">
                <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent inline-block">
                    {{ service.title }}
                  </span>
                </h3>
                
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {{ service.description }}
                </p>

                <!-- Features modernisées -->
                <div class="space-y-4 sm:space-y-5">
                  <div 
                    v-for="(feature, featureIndex) in service.features" 
                    :key="feature"
                    class="flex items-center gap-4 group"
                    v-motion
                    :initial="{ opacity: 0, x: -20 }"
                    :enter="{ opacity: 1, x: 0 }"
                    :delay="featureIndex * 100"
                  >
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-yellow-200 transition-all duration-300">
                      <Icon 
                        name="heroicons:check" 
                        class="w-5 h-5 text-blue-600"
                      />
                    </div>
                    <span class="text-base sm:text-lg text-gray-700 group-hover:text-gray-900">
                      {{ feature }}
                    </span>
                  </div>
                </div>

                <!-- Bouton repositionné -->
                <div class="pt-6 sm:pt-8">
                  <BaseButton 
                    :to="service.link"
                    variant="primary"
                    class="group w-full sm:w-auto text-base sm:text-lg"
                  >
                    En savoir plus
                    <template #icon>
                      <Icon 
                        name="heroicons:arrow-right" 
                        class="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </template>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import SectionHeader from '~/components/ui/SectionHeader.vue'

const currentServiceIndex = ref(0)

const services = [
  {
    title: 'Création de Sites Web',
    description: 'Des sites web modernes et performants qui reflètent votre identité et propulsent votre présence en ligne vers de nouveaux sommets.',
    icon: 'heroicons:globe-alt',
    link: '/services/web',
    features: [
      'Design sur mesure et responsive',
      'Optimisation SEO intégrée',
      'Performance et sécurité maximales',
      'Maintenance et support inclus'
    ]
  },
  {
    title: 'Applications Métiers',
    description: 'Des solutions logicielles sur mesure qui optimisent vos processus et augmentent la productivité de vos équipes.',
    icon: 'heroicons:computer-desktop',
    link: '/services/applications',
    features: [
      'Analyse approfondie des besoins',
      'Développement agile et itératif',
      'Interface utilisateur intuitive',
      'Formation des équipes incluse'
    ]
  },
  {
    title: 'Marketing Digital',
    description: 'Des stratégies marketing innovantes pour booster votre visibilité en ligne et convertir vos visiteurs en clients fidèles.',
    icon: 'heroicons:chart-bar',
    link: '/services/marketing',
    features: [
      'Stratégie SEO complète',
      'Campagnes publicitaires ciblées',
      'Gestion des réseaux sociaux',
      'Analyse et reporting mensuel'
    ]
  },
  {
    title: 'Matériel Informatique',
    description: 'Équipez votre entreprise avec du matériel professionnel de qualité, installation et maintenance incluses.',
    icon: 'heroicons:server',
    link: '/services/materiel',
    features: [
      'Audit et conseil personnalisé',
      'Installation et configuration',
      'Maintenance préventive',
      'Support technique dédié'
    ]
  },
  {
    title: 'Développement Mobile',
    description: 'Des applications mobiles natives et cross-platform pour iOS et Android qui répondent aux besoins de vos utilisateurs.',
    icon: 'heroicons:device-phone-mobile',
    link: '/services/mobile',
    features: [
      'Applications iOS et Android',
      'Design mobile-first',
      'Performance optimisée',
      'Mises à jour régulières'
    ]
  },
  {
    title: 'Design UI/UX',
    description: 'Créez des expériences utilisateurs exceptionnelles avec des interfaces modernes et intuitives.',
    icon: 'heroicons:paint-brush',
    link: '/services/design',
    features: [
      'Design système complet',
      'Prototypage interactif',
      'Tests utilisateurs',
      'Guidelines et documentation'
    ]
  }
]
</script>

<style scoped>
/* Animations personnalisées */
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-ping-slow {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
