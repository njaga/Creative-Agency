<template>
  <div class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contenu -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          class="space-y-8"
        >
          <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Notre Histoire
          </h2>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-600">
              Fondée en 2020 par Arame Ndiaye, ABI est née d'une vision claire : rendre la transformation digitale accessible aux entreprises sénégalaises. Notre parcours est marqué par l'innovation et l'excellence dans chaque projet.
            </p>
            <p class="text-gray-600">
              En quelques années, nous avons accompagné plus de 50 entreprises dans leur évolution numérique, devenant un acteur majeur du secteur IT au Sénégal.
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0">
                <span class="text-blue-600 font-bold">2020</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Création d'ABI</h3>
                <p class="text-gray-600">Lancement de l'entreprise avec une équipe de 3 personnes</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0">
                <span class="text-blue-600 font-bold">2021</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Expansion</h3>
                <p class="text-gray-600">Ouverture de nouveaux services et croissance de l'équipe</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0">
                <span class="text-blue-600 font-bold">2023</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Leadership</h3>
                <p class="text-gray-600">Reconnaissance comme leader dans la transformation digitale</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="relative group"
        >
          <div class="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50">
            <img 
              src="/images/about/history.jpg" 
              alt="Notre histoire" 
              class="w-full rounded-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Éléments décoratifs -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 