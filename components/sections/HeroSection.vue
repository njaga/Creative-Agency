<template>
  <section class="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pb-16 sm:pb-24 pt-12 sm:pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Solutions IT & 
            <span class="text-yellow-400 block sm:inline">Matériel informatique</span>
          </h1>
          <p class="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Votre partenaire unique pour tous vos besoins informatiques : 
            du matériel à la transformation digitale.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink 
              to="/devis"
              class="bg-yellow-400 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all text-center"
            >
              Demander un devis gratuit
            </NuxtLink>
            <NuxtLink 
              to="/services"
              class="bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-center"
            >
              Découvrir nos services
            </NuxtLink>
          </div>
        </div>
        <div class="hidden lg:block relative">
          <img src="/hero-devices.svg" alt="Matériel informatique" class="floating w-full max-w-xl mx-auto">
          <!-- Ajout d'effets visuels -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* Animation du défilement */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  display: flex;
}

/* Pause au survol */
.animate-scroll:hover {
  animation-play-state: paused;
}

/* Effet sur les logos */
.opacity-80 {
  opacity: 0.8;
}

.hover\:opacity-100:hover {
  opacity: 1;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}
</style>
