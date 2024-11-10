<template>
  <div class="relative overflow-hidden">
    <AppHead
      title="À Propos de Nous"
      description="Découvrez l'histoire et les valeurs de notre entreprise, qui nous aident à fournir des solutions sur mesure pour vos besoins en transformation digitale."
      image="/images/about-og.jpg"
    />
    <HeroSection />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <HistorySection />
      <ValuesSection />
      <ServicesSection />
      
      <!-- CTA Final -->
      <div class="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 relative overflow-hidden mb-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
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
              href="tel:+221XXXXXXXX"
              class="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl 
                     border-2 border-white/20 hover:border-white/40
                     transform hover:scale-105 transition-all duration-300 group"
            >
              <Icon 
                name="heroicons:phone" 
                class="w-5 h-5 mr-3"
              />
              +221 XX XXX XX XX
            </a>
          </div>
        </div>
      </div>
      <!-- Equipe
       <TeamSection /> 
       -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '~/components/about/HeroSection.vue'
import HistorySection from '~/components/about/HistorySection.vue'
import ServicesSection from '~/components/about/ServicesSection.vue'
import ValuesSection from '~/components/about/ValuesSection.vue'
import TeamSection from '~/components/about/TeamSection.vue'
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>
