<template>
  <div class="min-h-screen bg-white">
    <div>
    <AppHead />
  </div>
    <!-- Navigation fixe et modernisée -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
          <!-- Logo et nom -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center space-x-3 group">
              <img class="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
                   src="/logo.svg" 
                   alt="ABI Logo" />
              <span class="text-2xl font-bold text-blue-900">
                ABI
              </span>
            </NuxtLink>
          </div>

          <!-- Menu principal - Desktop -->
          <div class="hidden lg:flex items-center space-x-2">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="relative px-5 py-2 group overflow-hidden rounded-lg"
            >
              <span class="relative z-10 text-blue-900 font-medium group-hover:text-white transition-colors duration-300">
                {{ link.text }}
              </span>
              <div
                class="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </NuxtLink>

            <!-- Bouton Devis -->
            <NuxtLink
              to="/devis"
              class="ml-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg 
                     shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                     transform hover:scale-105 transition-all duration-300"
            >
              Demander un devis
            </NuxtLink>
          </div>

          <!-- Bouton menu mobile -->
          <div class="flex items-center lg:hidden">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="inline-flex items-center justify-center p-3 rounded-lg text-blue-900 hover:bg-blue-50 transition-all duration-200"
            >
              <span class="sr-only">Ouvrir le menu</span>
              <Bars3Icon v-if="!isMobileMenuOpen" class="h-7 w-7" />
              <XMarkIcon v-else class="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      <!-- Menu mobile avec animation -->
      <div 
        v-show="isMobileMenuOpen" 
        class="lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg"
      >
        <div class="px-4 py-3 space-y-2 max-w-7xl mx-auto">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-3 text-base font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200"
            @click="isMobileMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
          
          <!-- Bouton Devis Mobile -->
          <NuxtLink
            to="/devis"
            class="block px-4 py-3 mt-4 text-center bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            @click="isMobileMenuOpen = false"
          >
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Espaceur pour compenser le menu fixe -->
    <div class="h-24"></div>

    <main>
      <slot />
    </main>

    <!-- Remplacer la section footer -->
    <footer class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <!-- Motif de fond amélioré -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-yellow-400/5"></div>
      </div>
      
      <!-- Blobs décoratifs améliorés -->
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <!-- Logo et Description modernisés -->
          <div class="md:col-span-2 space-y-8">
            <div class="flex items-center space-x-4 group">
              <div class="relative">
                <div class="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-colors duration-500"></div>
                <img class="h-14 w-auto relative transform group-hover:scale-110 transition-transform duration-500" 
                     src="/logo.svg" 
                     alt="ABI Logo" />
              </div>
              <span class="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ABI
              </span>
            </div>
            <p class="text-blue-100 max-w-md text-lg leading-relaxed">
              Arame Business Informatique - Votre partenaire digital de confiance pour la transformation numérique de votre entreprise.
            </p>
          </div>

          <!-- Navigation Rapide modernisée -->
          <div>
            <h3 class="text-lg font-semibold text-yellow-400 mb-8 relative inline-block">
              Navigation
              <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400/50 rounded-full"></span>
            </h3>
            <ul class="space-y-5">
              <li v-for="link in links" :key="link.to">
                <NuxtLink 
                  :to="link.to"
                  class="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group text-lg"
                >
                  <span class="w-2 h-2 rounded-full bg-yellow-400 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150"></span>
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact modernisé -->
          <div>
            <h3 class="text-lg font-semibold text-yellow-400 mb-8 relative inline-block">
              Contact
              <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400/50 rounded-full"></span>
            </h3>
            <div class="space-y-6">
              <a 
                href="mailto:contact@abi.com"
                class="flex items-center text-blue-100 hover:text-white transition-colors duration-300 group"
              >
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700/50 to-blue-600/50 flex items-center justify-center mr-4 group-hover:from-blue-600/50 group-hover:to-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
                  <EnvelopeIcon class="h-5 w-5" />
                </div>
                <span class="text-lg">contact@abi.com</span>
              </a>
              <a 
                href="tel:+221XXXXXXXX"
                class="flex items-center text-blue-100 hover:text-white transition-colors duration-300 group"
              >
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700/50 to-blue-600/50 flex items-center justify-center mr-4 group-hover:from-blue-600/50 group-hover:to-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
                  <PhoneIcon class="h-5 w-5" />
                </div>
                <span class="text-lg">+221 XX XXX XX XX</span>
              </a>
              <div class="flex items-center text-blue-100 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700/50 to-blue-600/50 flex items-center justify-center mr-4">
                  <MapPinIcon class="h-5 w-5" />
                </div>
                <span class="text-lg">Dakar, Sénégal</span>
              </div>
            </div>

            <!-- Réseaux sociaux modernisés -->
            <div class="mt-10">
              <div class="flex space-x-5">
                <a 
                  v-for="(social, index) in socials" 
                  :key="index"
                  :href="social.link" 
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700/50 to-blue-600/50 flex items-center justify-center hover:from-blue-600/50 hover:to-blue-500/50 transition-all duration-300 transform hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon 
                    :name="social.icon" 
                    class="h-6 w-6 text-blue-100 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Séparateur modernisé -->
        <div class="mt-20 pt-8 border-t border-blue-700/50">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-sm text-blue-200">
              &copy; {{ new Date().getFullYear() }} ABI. Tous droits réservés.
            </p>
            <a 
              href="https://ndiagandiaye.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-sm text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
            >
              Développé par 
              <span class="font-medium ml-2 relative">
                Ndiaga Ndiaye
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

const isMobileMenuOpen = ref(false)

const links = [
  { to: '/', text: 'Accueil' },
  { to: '/services', text: 'Services' },
  { to: '/about', text: 'À propos' },
  { to: '/contact', text: 'Contact' },
]

const socials = [
  { icon: 'mdi:facebook', link: '#' },
  { icon: 'mdi:linkedin', link: '#' },
  { icon: 'mdi:instagram', link: '#' },
  { icon: 'ri:tiktok-fill', link: '#' },
  { icon: 'mdi:twitter', link: '#' }
]
</script>

<style scoped>
.router-link-active:not([to="/devis"]) {
  background-color: rgb(239 246 255); /* bg-blue-50 */
  color: rgb(30 58 138); /* text-blue-900 */
  font-weight: 600; /* font-semibold */
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, #ffffff 0.5px, transparent 0.5px);
  background-size: 24px 24px;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 10s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

