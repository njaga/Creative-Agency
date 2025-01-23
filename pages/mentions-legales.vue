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
                        Mentions Légales
                    </span>
                    <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
                </h1>
            </div>

            <div class="prose prose-blue max-w-none space-y-12">
                <!-- Section Informations légales avec carte moderne -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">1. Informations légales</h2>
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div>
                            <p class="space-y-3">
                                <strong class="text-blue-800 block">Raison sociale :</strong>
                                <span class="text-gray-600">ABI (Arame Business Informatique)</span>
                            </p>
                            <p class="space-y-3 mt-4">
                                <strong class="text-blue-800 block">Forme juridique :</strong>
                                <span class="text-gray-600">SARL</span>
                            </p>
                            <p class="space-y-3 mt-4">
                                <strong class="text-blue-800 block">Capital social :</strong>
                                <span class="text-gray-600">1 000 000 FCFA</span>
                            </p>
                        </div>
                        <div>
                            <p class="space-y-3">
                                <strong class="text-blue-800 block">NINEA :</strong>
                                <span class="text-gray-600">009152787</span>
                            </p>
                            <p class="space-y-3 mt-4">
                                <strong class="text-blue-800 block">RC :</strong>
                                <span class="text-gray-600">SN DKR 2022 B 2784</span>
                            </p>
                            <p class="space-y-3 mt-4">
                                <strong class="text-blue-800 block">Direction :</strong>
                                <span class="text-gray-600">Mme Arame GUEYE</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Section Hébergement -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">2. Hébergement</h2>
                    <p class="text-gray-600">
                        Ce site est hébergé par :<br>
                        <strong class="text-blue-800">o2switch</strong><br>
                        222-224 Boulevard Gustave Flaubert<br>
                        63000 Clermont-Ferrand - France<br>
                        Site web : <a href="https://www.o2switch.fr" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors">www.o2switch.fr</a>
                    </p>
                </div>

                <!-- Section Propriété intellectuelle -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">3. Propriété intellectuelle</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>
                            L'ensemble de ce site relève de la législation sénégalaise et internationale sur le droit d'auteur
                            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                            documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                        <p>
                            Les marques et logos figurant sur le site sont des marques déposées par leurs propriétaires respectifs.
                        </p>
                    </div>
                </div>

                <!-- Section Protection des données -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">4. Protection des données personnelles</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>
                            Conformément à la loi n°2008-12 du 25 janvier 2008 portant sur la protection des données à caractère personnel, ce site a fait l'objet d'une déclaration auprès de la Commission de Protection des Données Personnelles (CDP) du Sénégal.
                        </p>
                        <p>
                            Les utilisateurs disposent d'un droit d'accès, de modification, de rectification et de suppression des données qui les concernent. Pour exercer ces droits, contactez-nous par email : contact@aramebusiness.com
                        </p>
                    </div>
                </div>

                <!-- Section Cookies -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">5. Cookies</h2>
                    <p class="text-gray-600">
                        Le site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre ordinateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lors de leur utilisation.
                    </p>
                </div>

                <!-- Section Liens hypertextes -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">6. Liens hypertextes</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>
                            Le site peut contenir des liens vers d'autres sites. ABI n'est pas responsable du contenu des sites
                            vers lesquels des liens sont établis. La présence de ces liens n'implique pas l'approbation des sites liés ni de leur contenu.
                        </p>
                        <p>
                            La création de liens vers notre site est autorisée sous réserve :
                        </p>
                        <ul class="list-disc pl-6 space-y-2">
                            <li>Que les pages ne soient pas imbriquées à l'intérieur des pages d'un autre site</li>
                            <li>De mentionner la source qui pointera grâce à un lien hypertexte directement sur le contenu visé</li>
                            <li>Que l'information utilisée ne soit pas déformée ou modifiée</li>
                        </ul>
                    </div>
                </div>

                <!-- Section Limitation de responsabilité -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">7. Limitation de responsabilité</h2>
                    <div class="space-y-4 text-gray-600">
                        <p>
                            ABI s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, ABI ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                        </p>
                        <p>
                            En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. ABI ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
                        </p>
                    </div>
                </div>

                <!-- Section Droit applicable -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">8. Droit applicable</h2>
                    <p class="text-gray-600">
                        Les présentes mentions légales sont soumises au droit sénégalais. En cas de litige, les tribunaux sénégalais seront seuls compétents.
                    </p>
                </div>

                <!-- Section Contact -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">9. Contact</h2>
                    <div class="space-y-4">
                        <p class="text-gray-600">Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
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
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:map-pin" class="w-5 h-5 text-blue-600"/>
                                <span class="text-gray-600">Dakar, Sénégal</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Section KAMIT améliorée -->
                <div class="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
                    <h2 class="text-2xl font-bold mb-6">10. Développé par KAMIT</h2>
                    
                    <div class="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
                        <div class="flex items-center gap-4 mb-6">
                            <img src="/logo-kamit-white.png" alt="KAMIT Logo" class="h-12 w-auto"/>
                            <h3 class="text-xl font-bold">KAMIT Digital Solution & Innovation</h3>
                        </div>
                        
                        <p class="text-blue-100 mb-6">
                            Votre partenaire technologique pour tous vos projets numériques. Nous proposons des solutions innovantes et sur mesure pour propulser votre entreprise vers l'avenir.
                        </p>

                        <div class="grid sm:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <h4 class="font-semibold text-yellow-400">Nos Services</h4>
                                <ul class="space-y-2 text-blue-100">
                                    <li>Développement web</li>
                                    <li>Développement mobile</li>
                                    <li>Marketing digital</li>
                                    <li>UI/UX Design</li>
                                    <li>Infogérance informatique</li>
                                    <li>Fourniture d'équipements</li>
                                    <li>Solutions cloud</li>
                                </ul>
                            </div>

                            <div class="space-y-4">
                                <h4 class="font-semibold text-yellow-400">Contact</h4>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-2">
                                        <Icon name="heroicons:envelope" class="w-5 h-5 text-yellow-400"/>
                                        <a href="mailto:hello@kamit.tech" class="text-blue-100 hover:text-white transition-colors">
                                            hello@kamit.tech
                                        </a>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <Icon name="heroicons:phone" class="w-5 h-5 text-yellow-400"/>
                                        <a href="tel:+221761291336" class="text-blue-100 hover:text-white transition-colors">
                                            +221 76 129 13 36
                                        </a>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <Icon name="heroicons:map-pin" class="w-5 h-5 text-yellow-400"/>
                                        <span class="text-blue-100">
                                            Saly Portudal, Mbour, Sénégal
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 pt-6 border-t border-white/10">
                            <a href="https://kamit.tech" 
                                target="_blank" 
                                class="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                                Visitez notre site
                                <Icon name="heroicons:arrow-right" class="w-5 h-5"/>
                            </a>
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
    layout: 'default'
})
</script>