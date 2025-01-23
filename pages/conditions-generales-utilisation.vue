<template>
  <div class="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête avec animation -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h1 class="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Conditions Générales d'Utilisation
          </span>
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
        </h1>
      </div>

      <div class="prose prose-blue max-w-none space-y-12">
        <!-- Préambule -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">1. Préambule</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web
                  d'ABI (Arame Business Informatique) accessible à l'adresse www.aramebusiness.com.
                </p>
                <p class="mt-4">
                  En accédant à ce site, vous acceptez sans réserve les présentes conditions d'utilisation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Accès au site -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">2. Accès au site</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:globe-alt" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>L'accès au site est gratuit et ouvert à tous. Cependant :</p>
                <ul class="mt-4 space-y-2">
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:clock" class="w-5 h-5 text-blue-600"/>
                    Le site est accessible 24/7, sauf cas de force majeure ou maintenance
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:device-phone-mobile" class="w-5 h-5 text-blue-600"/>
                    L'utilisateur doit disposer d'une connexion Internet et d'un navigateur récent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Propriété intellectuelle -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">3. Propriété intellectuelle</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>Sont protégés par les droits de propriété intellectuelle :</p>
                <ul class="mt-4 space-y-2">
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:photo" class="w-5 h-5 text-blue-600"/>
                    Les images et photographies
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:document" class="w-5 h-5 text-blue-600"/>
                    Les textes et contenus
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:code-bracket" class="w-5 h-5 text-blue-600"/>
                    Le code source
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:puzzle-piece" class="w-5 h-5 text-blue-600"/>
                    La structure générale du site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Responsabilités -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">4. Responsabilités</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:exclamation-triangle" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>ABI s'efforce d'assurer au mieux :</p>
                <ul class="mt-4 space-y-2">
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:check-circle" class="w-5 h-5 text-blue-600"/>
                    L'exactitude des informations
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:arrow-path" class="w-5 h-5 text-blue-600"/>
                    La mise à jour régulière du site
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="heroicons:lock-closed" class="w-5 h-5 text-blue-600"/>
                    La sécurité du site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Liens hypertextes -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">5. Liens hypertextes</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:link" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>Le site peut contenir des liens vers d'autres sites. ABI n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Protection des données -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">6. Protection des données</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex gap-4 items-start">
              <Icon name="heroicons:lock-closed" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
              <div>
                <p>La collecte et le traitement des données personnelles sont régis par notre Politique de Confidentialité.</p>
                <p class="mt-4">
                  <NuxtLink to="/politique-confidentialite" class="text-blue-600 hover:text-blue-800 transition-colors">
                    Consulter notre politique de confidentialité
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">7. Contact</h2>
          <div class="space-y-4">
            <p class="text-gray-600">Pour toute question concernant ces CGU :</p>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-blue-600"/>
                <a href="mailto:contact@aramebusiness.com" class="text-gray-600 hover:text-blue-600 transition-colors">
                  contact@aramebusiness.com
                </a>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="heroicons:phone" class="w-5 h-5 text-blue-600"/>
                <a href="tel:+221773422248" class="text-gray-600 hover:text-blue-600 transition-colors">
                  +221 77 342 22 48
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-sm text-gray-600 mt-8">
          Dernière mise à jour : {{ new Date().toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 