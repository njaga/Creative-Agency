<template>
  <div class="relative py-24 overflow-hidden">
    <AppHead
      title="Contactez-nous"
      description="Contactez-nous pour toute question ou demande d'information."
      image="/images/contact-og.jpeg"
    />
    <!-- Fond décoratif -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10">
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h1 class="text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Contactez-nous
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Notre équipe est à votre écoute pour vous accompagner dans vos projets
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulaire -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
          class="relative"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-1 opacity-10"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <div>
                <label class="block text-base font-medium text-gray-700 mb-3">Nom complet</label>
                <div class="relative">
                  <Icon 
                    name="heroicons:user" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" 
                  />
                  <input
                    type="text"
                    v-model="form.name"
                    class="pl-12 w-full h-14 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow text-base"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-base font-medium text-gray-700 mb-3">Email</label>
                <div class="relative">
                  <Icon 
                    name="heroicons:envelope" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" 
                  />
                  <input
                    type="email"
                    v-model="form.email"
                    class="pl-12 w-full h-14 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-base font-medium text-gray-700 mb-3">Message</label>
                <div class="relative">
                  <Icon 
                    name="heroicons:chat-bubble-left-ellipsis" 
                    class="absolute left-4 top-4 w-6 h-6 text-gray-400" 
                  />
                  <textarea
                    v-model="form.message"
                    rows="5"
                    class="pl-12 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow text-base"
                    required
                  ></textarea>
                </div>
              </div>

              <!-- Messages d'erreur/succès -->
              <div v-if="error" class="p-4 bg-red-50 text-red-600 rounded-xl">
                {{ error }}
              </div>

              <div v-if="success" class="p-4 bg-green-50 text-green-600 rounded-xl">
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>

              <SubmitButton
                variant="primary"
                icon="heroicons:paper-airplane"
                class="w-full h-14 text-lg"
                :disabled="loading"
              >
                {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
              </SubmitButton>
            </form>
          </div>
        </div>

        <!-- Informations de contact -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="400"
          class="lg:pl-12"
        >
          <!-- Carte avec effet de verre -->
          <div class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <!-- Blobs animés -->
            <div class="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
            <div class="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            <div class="relative space-y-8">
              <!-- Coordonnées -->
              <div>
                <h2 class="text-2xl font-bold mb-6 text-yellow-400">Nos Coordonnées</h2>
                <div class="space-y-6">
                  <a href="#" class="flex items-center group">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Icon name="heroicons:map-pin" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <span class="group-hover:text-yellow-400 transition-colors">Adresse, Ville, Pays</span>
                  </a>
                  
                  <a href="tel:+221XXXXXXXX" class="flex items-center group">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Icon name="heroicons:phone" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <span class="group-hover:text-yellow-400 transition-colors">+221 XX XXX XX XX</span>
                  </a>
                  
                  <a href="mailto:contact@abi.com" class="flex items-center group">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                      <Icon name="heroicons:envelope" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <span class="group-hover:text-yellow-400 transition-colors">contact@abi.com</span>
                  </a>
                </div>
              </div>

              <!-- Horaires -->
              <div>
                <h2 class="text-2xl font-bold mb-6 text-yellow-400">Horaires d'ouverture</h2>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                      <Icon name="heroicons:clock" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p class="font-medium">Lundi - Vendredi</p>
                      <p class="text-blue-100">9h - 18h</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                      <Icon name="heroicons:clock" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p class="font-medium">Samedi</p>
                      <p class="text-blue-100">9h - 13h</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center opacity-75">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                      <Icon name="heroicons:clock" class="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p class="font-medium">Dimanche</p>
                      <p class="text-blue-100">Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SubmitButton from '~/components/ui/SubmitButton.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const error = ref('')
const success = ref(false)

const config = useRuntimeConfig()
const baseURL = config.public.apiBase

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = false

    const { data, error: apiError } = await useFetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (apiError.value) {
      throw new Error(apiError.value.message || 'Une erreur est survenue')
    }

    if (!data.value?.success) {
      throw new Error(data.value?.error || 'Une erreur est survenue')
    }

    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      message: ''
    }
    
    success.value = true
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
