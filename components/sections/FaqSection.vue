<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Fond avec motif et dégradé -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
    </div>
    
    <!-- Blobs décoratifs -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- En-tête -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Questions Fréquentes
          </span>
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Trouvez rapidement les réponses à vos questions sur nos services
        </p>
      </div>

      <!-- Liste FAQ -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="index * 100"
            class="relative group"
          >
            <!-- Question -->
            <button 
              @click="toggleFaq(index)"
              class="w-full p-6 text-left bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 
                     hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              :class="{ 'rounded-b-none border-b-0': activeIndex === index }"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-8">
                  {{ item.question }}
                </h3>
                <div 
                  class="w-6 h-6 flex items-center justify-center transform transition-transform duration-300"
                  :class="{ 'rotate-180': activeIndex === index }"
                >
                  <Icon 
                    name="heroicons:chevron-down" 
                    class="w-5 h-5 text-blue-600"
                  />
                </div>
              </div>
            </button>

            <!-- Réponse -->
            <div 
              v-show="activeIndex === index"
              class="relative bg-white/60 backdrop-blur-sm rounded-b-2xl border border-t-0 border-blue-100/50 overflow-hidden"
            >
              <div class="p-6">
                <p class="text-gray-600">{{ item.answer }}</p>
                
                <!-- Lien optionnel -->
                <NuxtLink 
                  v-if="item.link"
                  :to="item.link.url"
                  class="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium group/link"
                >
                  <span class="relative">
                    {{ item.link.text }}
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                  </span>
                  <Icon 
                    name="heroicons:arrow-right" 
                    class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg 
                   shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                   transform hover:scale-105 transition-all duration-300"
          >
            Contactez-nous
            <Icon 
              name="heroicons:arrow-right" 
              class="w-5 h-5 ml-2"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqItems = [
  {
    question: "Quels types de services proposez-vous ?",
    answer: "Nous proposons une gamme complète de services numériques incluant le développement web, les applications métiers, le marketing digital, la fourniture de matériel informatique, le développement mobile et le design UI/UX.",
    link: {
      text: "Découvrir nos services",
      url: "/services"
    }
  },
  {
    question: "Comment se déroule un projet avec ABI ?",
    answer: "Chaque projet débute par une analyse approfondie de vos besoins, suivie d'une proposition détaillée. Nous adoptons une approche agile avec des points réguliers pour assurer une collaboration optimale et des résultats qui correspondent à vos attentes."
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance adaptés à vos besoins, incluant la maintenance préventive, le support technique et les mises à jour régulières de vos solutions."
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "Les délais varient selon la complexité du projet. Nous établissons un planning détaillé dès le début et nous nous engageons à respecter les échéances fixées tout en maintenant un haut niveau de qualité."
  },
  {
    question: "Comment obtenir un devis pour mon projet ?",
    answer: "Vous pouvez facilement obtenir un devis en remplissant notre formulaire en ligne ou en nous contactant directement. Nous vous répondrons sous 24-48h avec une proposition adaptée.",
    link: {
      text: "Demander un devis",
      url: "/devis"
    }
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4B5563 1px, transparent 1px);
  background-size: 30px 30px;
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
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
