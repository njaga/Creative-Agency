<template>
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
            Transformons Ensemble
          </span>
          <br />
          <span class="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Votre Avenir Digital
          </span>
        </h1>
        
        <p 
          class="text-xl text-gray-600 mb-12 leading-relaxed"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Depuis 2020, ABI accompagne les entreprises dans leur transformation numérique 
          avec des solutions innovantes et sur mesure.
        </p>

        <div 
          class="flex flex-col sm:flex-row gap-4 justify-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl 
                   shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                   transform hover:scale-105 transition-all duration-300 group"
          >
            Commencer votre projet
            <Icon 
              name="heroicons:arrow-right" 
              class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
            />
          </NuxtLink>
          
          <NuxtLink
            to="/services"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl 
                   border-2 border-blue-100 hover:border-blue-200
                   shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 
                   transform hover:scale-105 transition-all duration-300 group"
          >
            Découvrir nos services
            <Icon 
              name="heroicons:arrow-right" 
              class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
