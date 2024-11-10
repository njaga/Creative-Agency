<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Fond avec motif et dégradé -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 ">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
    </div>
    
    <!-- Blobs décoratifs -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>

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
                Qui sommes-nous ?
              </span>
              <!-- Élément décoratif -->
              <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
            </h2>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 leading-relaxed text-lg">
              Fondée en 2020, <span class="text-blue-600 font-semibold">ABI (Arame Business Informatique)</span> est une entreprise innovante spécialisée dans les solutions digitales et la transformation numérique des entreprises.
            </p>
            <p class="text-gray-600 leading-relaxed text-lg mt-6">
              Notre mission est d'accompagner les entreprises dans leur évolution technologique en leur fournissant des solutions sur mesure et un support de qualité.
            </p>
          </div>

          <!-- Bouton -->
          <div class="pt-4">
            <NuxtLink
              to="/about"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl 
                     shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                     transform hover:scale-105 transition-all duration-300 group"
            >
              Nous connaître
              <Icon 
                name="heroicons:arrow-right" 
                class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- Image droite -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="relative group"
        >
          <!-- Grille d'images moderne -->
          <div class="grid grid-cols-6 grid-rows-6 gap-4 relative">
            <!-- Image 1 -->
            <div class="col-span-4 row-span-4 relative group/item overflow-hidden rounded-3xl">
              <img 
                src="/images/about/team-meeting.jpg" 
                alt="Réunion d'équipe" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-blue-600/40 mix-blend-multiply group-hover/item:bg-blue-600/30 transition-colors duration-300"></div>
            </div>

            <!-- Image 2 -->
            <div class="col-span-2 row-span-3 col-start-5 relative group/item overflow-hidden rounded-2xl">
              <img 
                src="/images/about/tech-support.jpg" 
                alt="Support technique" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-yellow-500/40 mix-blend-multiply group-hover/item:bg-yellow-500/30 transition-colors duration-300"></div>
            </div>

            <!-- Image 3 -->
            <div class="col-span-2 row-span-3 col-start-5 row-start-4 relative group/item overflow-hidden rounded-2xl">
              <img 
                src="/images/about/digital-services.jpeg" 
                alt="Services digitaux" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-blue-600/40 mix-blend-multiply group-hover/item:bg-blue-600/30 transition-colors duration-300"></div>
            </div>

            <!-- Image 4 -->
            <div class="col-span-3 row-span-2 row-start-5 relative group/item overflow-hidden rounded-2xl">
              <img 
                src="/images/about/equipment.jpg" 
                alt="Équipement informatique" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-yellow-500/40 mix-blend-multiply group-hover/item:bg-yellow-500/30 transition-colors duration-300"></div>
            </div>
          </div>

          <!-- Éléments décoratifs -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
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

.animate-ping-slow {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
