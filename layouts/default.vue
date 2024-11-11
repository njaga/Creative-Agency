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
    <footer class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-24 pb-12 overflow-hidden">
      <!-- Effets de fond -->
      <div class="absolute inset-0">
        <!-- Motif en pointillés -->
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 40px 40px;"></div>
        <!-- Blobs animés -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400/10 via-orange-400/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section principale -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <!-- Logo et description -->
          <div class="md:col-span-5 space-y-8">
            <div class="flex items-center space-x-4">
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-xl transition-all duration-500 group-hover:from-blue-400/40 group-hover:to-indigo-400/40"></div>
                <img src="/logo.svg" alt="ABI Logo" class="h-16 w-auto relative transform group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <span class="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">ABI</span>
            </div>
            <p class="text-lg text-blue-100/90 leading-relaxed">
              Votre partenaire de confiance pour la transformation numérique. Nous créons des solutions innovantes qui propulsent votre entreprise vers l'avenir.
            </p>
            <!-- Réseaux sociaux -->
            <div class="flex gap-4">
              <a v-for="social in socials" 
                 :key="social.icon" 
                 :href="social.link"
                 class="group relative p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                 target="_blank"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <Icon :name="social.icon" class="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10"/>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="md:col-span-3">
            <h3 class="text-xl font-semibold text-white mb-6">Navigation</h3>
            <ul class="space-y-4">
              <li v-for="link in links" :key="link.to">
                <NuxtLink :to="link.to" class="group flex items-center text-blue-100/80 hover:text-white transition-colors duration-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-yellow-400/60 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="md:col-span-4">
            <h3 class="text-xl font-semibold text-white mb-6">Contact</h3>
            <div class="space-y-6">
              <a href="mailto:contact@aramebusiness.com" class="flex items-center group">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-all duration-300">
                  <EnvelopeIcon class="h-5 w-5 text-yellow-400"/>
                </div>
                <div>
                  <p class="text-sm text-blue-100/70">Email</p>
                  <p class="text-white group-hover:text-yellow-400 transition-colors duration-300">contact@aramebusiness.com</p>
                </div>
              </a>

              <a href="tel:+221XXXXXXXX" class="flex items-center group">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon class="h-5 w-5 text-yellow-400"/>
                </div>
                <div>
                  <p class="text-sm text-blue-100/70">Téléphone</p>
                  <p class="text-white group-hover:text-yellow-400 transition-colors duration-300">+221 78 163 34 19</p>
                </div>
              </a>

              <div class="flex items-center">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-4">
                  <MapPinIcon class="h-5 w-5 text-yellow-400"/>
                </div>
                <div>
                  <p class="text-sm text-blue-100/70">Adresse</p>
                  <p class="text-white">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-20 pt-8 border-t border-white/10">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-blue-100/70">
              &copy; {{ new Date().getFullYear() }} ABI. Tous droits réservés.
            </p>
            <a href="https://ndiagandiaye.com" 
               target="_blank" 
               class="group text-blue-100/70 hover:text-white transition-colors duration-300">
              Développé par 
              <span class="font-medium relative">
                Ndiaga Ndiaye
                <span class="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-yellow-400/60 to-yellow-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
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

