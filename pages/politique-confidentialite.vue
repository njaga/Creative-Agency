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
                        Politique de Confidentialité
                    </span>
                    <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
                </h1>
            </div>

            <div class="prose prose-blue max-w-none space-y-12">
                <!-- Section Collecte des informations -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">1. Collecte des informations</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>Nous collectons les informations que vous nous fournissez directement, notamment :</p>
                        <ul class="space-y-2">
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:user" class="w-5 h-5 text-blue-600"/>
                                Nom et prénom
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:envelope" class="w-5 h-5 text-blue-600"/>
                                Adresse email
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:phone" class="w-5 h-5 text-blue-600"/>
                                Numéro de téléphone
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:building-office" class="w-5 h-5 text-blue-600"/>
                                Informations de l'entreprise
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Section Utilisation des informations -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">2. Utilisation des informations</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>Les informations que nous collectons sont utilisées pour :</p>
                        <ul class="space-y-2">
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:document-text" class="w-5 h-5 text-blue-600"/>
                                Répondre à vos demandes de devis
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 text-blue-600"/>
                                Vous contacter concernant nos services
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:arrow-trending-up" class="w-5 h-5 text-blue-600"/>
                                Améliorer nos services
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:envelope-open" class="w-5 h-5 text-blue-600"/>
                                Envoyer des communications marketing (avec votre consentement)
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Section Protection des données -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">3. Protection des données</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:shield-check" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <p>
                                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations
                                personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Section Cookies -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">4. Cookies</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:circle-stack" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <p>
                                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez
                                configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies
                                sont envoyés.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Section Vos droits -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">5. Vos droits</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
                        <ul class="space-y-2">
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:eye" class="w-5 h-5 text-blue-600"/>
                                Droit d'accès
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:pencil-square" class="w-5 h-5 text-blue-600"/>
                                Droit de rectification
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:trash" class="w-5 h-5 text-blue-600"/>
                                Droit à l'effacement
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:lock-closed" class="w-5 h-5 text-blue-600"/>
                                Droit à la limitation du traitement
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:arrow-path" class="w-5 h-5 text-blue-600"/>
                                Droit à la portabilité des données
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Section Contact -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">6. Contact</h2>
                    <div class="space-y-4">
                        <p class="text-gray-600">Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :</p>
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

                <!-- Section Modifications -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">7. Modifications</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:document-arrow-up" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <p>
                                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                                Les modifications prendront effet dès leur publication sur le site.
                            </p>
                        </div>
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
    layout: 'default',
})
</script>
