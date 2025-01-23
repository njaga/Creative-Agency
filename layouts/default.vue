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

    <!-- Footer moderne et compact -->
    <footer class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 overflow-hidden">
      <!-- Effet de fond subtil -->
      <div class="absolute inset-0">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 24px 24px;"></div>
        <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section principale -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Logo et description -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <img src="/logo.svg" alt="ABI Logo" class="h-12 w-auto"/>
              <span class="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">ABI</span>
            </div>
            <p class="text-base text-blue-100/90 leading-relaxed">
              Solutions innovantes pour votre transformation numérique
            </p>
          </div>

          <!-- Contact rapide -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul class="space-y-3 text-base text-blue-100/90">
              <li class="flex items-center gap-3">
                <EnvelopeIcon class="h-5 w-5 text-yellow-400"/>
                <a href="mailto:contact@aramebusiness.com" class="hover:text-white transition-colors">
                  contact@aramebusiness.com
                </a>
              </li>
              <li class="flex items-center gap-3">
                <PhoneIcon class="h-5 w-5 text-yellow-400"/>
                <a href="tel:+221773422248" class="hover:text-white transition-colors">
                  +221 77 342 22 48
                </a>
              </li>
              <li class="flex items-center gap-3">
                <MapPinIcon class="h-5 w-5 text-yellow-400"/>
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Menu</h3>
            <ul class="space-y-3">
              <li v-for="link in links" :key="link.to">
                <NuxtLink :to="link.to" class="text-base text-blue-100/90 hover:text-white transition-colors">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Réseaux sociaux -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Suivez-nous</h3>
            <div class="flex gap-4">
              <a v-for="social in socials" 
                 :key="social.icon" 
                 :href="social.link"
                 class="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                 target="_blank"
              >
                <Icon :name="social.icon" class="w-6 h-6 text-white"/>
              </a>
            </div>
          </div>
        </div>

        <!-- Séparateur -->
        <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <!-- Copyright et liens légaux -->
        <div class="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-blue-100/80">
          <p>&copy; {{ new Date().getFullYear() }} ABI. Tous droits réservés.</p>
          
          <!-- Liens légaux -->
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <NuxtLink v-for="(link, index) in [
              { to: '/mentions-legales', text: 'Mentions légales' },
              { to: '/politique-confidentialite', text: 'Confidentialité' },
              { to: '/conditions-generales-vente', text: 'CGV' },
              { to: '/conditions-generales-utilisation', text: 'CGU' }
            ]" 
            :key="index"
            :to="link.to" 
            class="hover:text-white transition-colors relative group">
              {{ link.text }}
              <span class="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-yellow-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </NuxtLink>
          </div>

          <!-- Signature -->
          <a href="https://kamit.tech" 
             target="_blank" 
             class="group hover:text-white transition-colors">
            Développé par <span class="font-medium">KAMIT</span>
          </a>
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
  { to: '/services', text: 'Nos Services' },
  { to: '/about', text: 'À propos' },
  { to: '/contact', text: 'Contact' },
]

const socials = [
  { icon: 'mdi:facebook', link: '#' },
  { icon: 'mdi:linkedin', link: '#' },
  { icon: 'mdi:instagram', link: '#' },
  { icon: 'ri:tiktok-fill', link: '#' },
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

