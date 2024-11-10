<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Fond avec motif et dégradé -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
    </div>
    
    <!-- Blobs décoratifs -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contenu gauche -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          class="space-y-8"
        >
          <div class="space-y-4">
            <h2 class="text-4xl sm:text-5xl font-bold relative inline-block">
              <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Transformez Vos Processus Métier
              </span>
              <!-- Élément décoratif -->
              <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
            </h2>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(benefit, index) in benefits" 
              :key="benefit.title"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="index * 100" 
              class="group relative"
            >
              <!-- Carte avec effet de verre -->
              <div class="relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <!-- Effet de brillance -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="flex gap-6 relative">
                  <!-- Icône avec cercle -->
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon 
                        :name="benefit.icon" 
                        class="w-6 h-6 text-blue-600"
                      />
                    </div>
                  </div>
                  
                  <!-- Texte -->
                  <div>
                    <h3 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {{ benefit.title }}
                    </h3>
                    <p class="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {{ benefit.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image avec animations -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="relative group"
        >
          <!-- Cercles décoratifs animés -->
          <div class="absolute inset-0">
            <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div class="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          </div>

          <!-- Container d'image avec effet -->
          <div class="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50">
            <img 
              src="/digital-transformation.svg" 
              alt="Transformation digitale" 
              class="w-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>

<script setup lang="ts">
defineProps<{
  benefits: Array<{
    title: string
    description: string
    icon: string
  }>
}>()
</script>
