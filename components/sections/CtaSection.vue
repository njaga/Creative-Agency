<template>
  <section class="py-16 sm:py-24 bg-white relative overflow-hidden">
    <div 
      class="absolute inset-0 bg-blue-100 opacity-50 pattern-dots"
      aria-hidden="true"
    ></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-12 md:p-16 shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Transformer Votre Entreprise ?
            </h2>
            <p class="text-base sm:text-lg text-blue-100 mb-8">
              Nos experts sont là pour vous accompagner dans votre transformation digitale.
              Bénéficiez d'un audit gratuit de vos besoins.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <BaseButton 
                to="/contact" 
                variant="primary"
                class="group"
              >
                Demander un audit gratuit
                <template #icon>
                  <Icon 
                    name="heroicons:arrow-right" 
                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  />
                </template>
              </BaseButton>
              
              <BaseButton 
                to="/about" 
                variant="secondary"
                class="group"
              >
                En savoir plus
                <template #icon>
                  <Icon 
                    name="heroicons:information-circle" 
                    class="w-5 h-5 ml-2 transition-transform group-hover:scale-110"
                  />
                </template>
              </BaseButton>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(stat, index) in stats" 
                :key="stat.label"
                v-motion
                :initial="{ opacity: 0, scale: 0.9 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="index * 100"
                class="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors"
              >
                <div class="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                  {{ stat.value }}{{ stat.suffix }}
                </div>
                <div class="text-sm sm:text-base text-blue-100">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

const stats = [
  { value: '250', label: 'Projets Réussis', suffix: '+' },
  { value: '98', label: 'Satisfaction Client', suffix: '%' },
  { value: '12', label: "Années d'Expertise", suffix: '+' },
  { value: '15', label: 'Experts Passionnés', suffix: '+' }
]
</script>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
