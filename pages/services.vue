<template>
  <div class="relative overflow-hidden">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-b from-blue-50 to-white py-32 overflow-hidden">
      <!-- Blobs décoratifs -->
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <h1 
            class="text-5xl sm:text-7xl font-bold mb-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Solutions Digitales
            </span>
            <br />
            <span class="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Sur Mesure
            </span>
          </h1>
          
          <p 
            class="text-xl text-gray-600 mb-12 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200"
          >
            Des solutions innovantes pour accélérer votre transformation digitale 
            et booster votre croissance.
          </p>

          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="400"
          >
            <BaseButton
              to="/contact"
              variant="primary"
              icon="heroicons:arrow-right"
            >
              Démarrer un projet
            </BaseButton>
            
            <BaseButton
              to="#services"
              variant="outline"
              icon="heroicons:arrow-down"
            >
              Découvrir nos services
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Services Grid -->
    <ServicesGrid />
    
    <!-- Why Choose Us -->
    <WhyChooseUs />
  </div>
</template>

<script setup>
import ServicesGrid from '~/components/services/ServicesGrid.vue'
import WhyChooseUs from '~/components/services/WhyChooseUs.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
</script>

<style>
.animate-blob {
  animation: blob 7s infinite;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>