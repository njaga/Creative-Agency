<template>
  <div class="relative py-24 overflow-hidden">
    <AppHead
      title="Demande de Devis"
      description="Décrivez votre projet et recevez une estimation sous 48h"
      image="/images/devis-og.jpg"
    />
    <!-- Fond décoratif -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10">
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Demande de Devis
          </span>
        </h1>
        <p class="text-lg text-gray-600">
          Décrivez votre projet et recevez une estimation sous 48h
        </p>
      </div>

      <!-- Formulaire -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        class="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Informations personnelles -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
              <div class="relative">
                <Icon name="heroicons:user" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  v-model="form.name"
                  class="pl-10 w-full h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div class="relative">
                <Icon name="heroicons:envelope" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  v-model="form.email"
                  class="pl-10 w-full h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
              <div class="relative">
                <Icon name="heroicons:phone" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  v-model="form.phone"
                  class="pl-10 w-full h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
              <div class="relative">
                <Icon name="heroicons:briefcase" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  v-model="form.projectType"
                  class="pl-10 w-full h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="materiel">Matériel informatique</option>
                  <option value="logiciel">Logiciel sur mesure</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Budget estimé</label>
            <div class="relative">
              <Icon name="heroicons:banknotes" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                v-model="form.budget"
                class="pl-10 w-full h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                required
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="small">< 3 000 000 FCFA</option>
                <option value="medium">3 000 000 - 10 000 000 FCFA</option>
                <option value="large">10 000 000 - 30 000 000 FCFA</option>
                <option value="xlarge">> 30 000 000 FCFA</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Description du projet</label>
            <div class="relative">
              <Icon name="heroicons:document-text" class="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                v-model="form.description"
                rows="5"
                class="pl-10 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-shadow"
                required
                placeholder="Décrivez votre projet en détail..."
              ></textarea>
            </div>
          </div>

          <!-- Messages d'erreur/succès -->
          <div v-if="error" class="p-4 bg-red-50 text-red-600 rounded-xl">
            {{ error }}
          </div>

          <div v-if="success" class="p-4 bg-green-50 text-green-600 rounded-xl">
            Votre demande de devis a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </div>

          <SubmitButton
            variant="primary"
            icon="heroicons:paper-airplane"
            class="w-full h-12"
            :disabled="loading"
          >
            {{ loading ? 'Envoi en cours...' : 'Envoyer la demande' }}
          </SubmitButton>
        </form>
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
  phone: '',
  projectType: '',
  budget: '',
  description: ''
})

const loading = ref(false)
const error = ref('')
const success = ref(false)

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = false

    const response = await fetch('http://localhost:3001/api/devis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || 'Une erreur est survenue')
    }

    form.value = {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      description: ''
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
