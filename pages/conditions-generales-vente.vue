<template>
    <div class="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- En-tête avec animation -->
            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }" class="text-center mb-16">
                <h1 class="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
                    <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Conditions Générales de Vente
                    </span>
                    <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
                </h1>
            </div>

            <div class="prose prose-blue max-w-none space-y-12">
                <!-- Préambule -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">1. Préambule et Définitions</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:building-office" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <p>
                                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services et ventes conclues par ABI auprès de ses clients professionnels, sans restriction ni réserve.
                                </p>
                                <div>
                                    <p class="font-semibold text-blue-900">Informations société :</p>
                                    <p>ABI (Arame Business Informatique)<br>
                                    SARL au capital de 1 000 000 FCFA<br>
                                    Siège social : Dakar, Sénégal<br>
                                    NINEA : 009152787<br>
                                    RC : SN DKR 2022 B 2784</p>
                                </div>
                                <div class="space-y-2">
                                    <p class="font-semibold text-blue-900">Définitions :</p>
                                    <ul class="space-y-2">
                                        <li><span class="font-medium">Vendeur :</span> ABI SARL</li>
                                        <li><span class="font-medium">Client :</span> Tout professionnel ou personne morale</li>
                                        <li><span class="font-medium">Prestations :</span> Services et produits proposés par ABI</li>
                                        <li><span class="font-medium">Commande :</span> Tout contrat liant le Client au Vendeur</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Services et Produits -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <!-- En-tête de section -->
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
                            Services et Produits
                            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-200/30 rounded-full blur-xl"></div>
                        </h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Découvrez notre gamme complète de services et produits informatiques professionnels
                        </p>
                    </div>

                    <div class="space-y-12">
                        <!-- Services principaux -->
                        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <!-- Développement Web -->
                            <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="relative p-6 space-y-4">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                                            <Icon name="heroicons:globe-alt" class="w-8 h-8 text-blue-600"/>
                                        </div>
                                        <h3 class="text-xl font-bold text-blue-900">Développement Web</h3>
                                    </div>
                                    
                                    <ul class="space-y-3">
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Sites vitrines et e-commerce</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Design responsive</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Optimisation SEO</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Interface administration</span>
                                        </li>
                                    </ul>

                                    <div class="mt-6 pt-6 border-t border-gray-100">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-sm text-blue-600 font-medium">Délai de réalisation</p>
                                                <p class="text-lg font-bold text-blue-900">4-8 semaines</p>
                                            </div>
                                            <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <Icon name="heroicons:arrow-right" class="w-6 h-6 text-blue-600"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Applications métiers -->
                            <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="relative p-6 space-y-4">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                                            <Icon name="heroicons:computer-desktop" class="w-8 h-8 text-indigo-600"/>
                                        </div>
                                        <h3 class="text-xl font-bold text-indigo-900">Applications métiers</h3>
                                    </div>
                                    
                                    <ul class="space-y-3">
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Analyse des besoins</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Développement sur mesure</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Formation utilisateurs</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Support technique</span>
                                        </li>
                                    </ul>

                                    <div class="mt-6 pt-6 border-t border-gray-100">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-sm text-indigo-600 font-medium">Délai de réalisation</p>
                                                <p class="text-lg font-bold text-indigo-900">2-4 mois</p>
                                            </div>
                                            <div class="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                                <Icon name="heroicons:arrow-right" class="w-6 h-6 text-indigo-600"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Marketing Digital -->
                            <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div class="relative p-6 space-y-4">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                                            <Icon name="heroicons:megaphone" class="w-8 h-8 text-purple-600"/>
                                        </div>
                                        <h3 class="text-xl font-bold text-purple-900">Marketing Digital</h3>
                                    </div>
                                    
                                    <ul class="space-y-3">
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Stratégie digitale</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Gestion réseaux sociaux</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Campagnes publicitaires</span>
                                        </li>
                                        <li class="flex items-center gap-3">
                                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"/>
                                            <span class="text-gray-600">Analyse des résultats</span>
                                        </li>
                                    </ul>

                                    <div class="mt-6 pt-6 border-t border-gray-100">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-sm text-purple-600 font-medium">Type de service</p>
                                                <p class="text-lg font-bold text-purple-900">Mensuel</p>
                                            </div>
                                            <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                                                <Icon name="heroicons:arrow-right" class="w-6 h-6 text-purple-600"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Autres services -->
                        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <!-- Développement mobile -->
                            <div class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-green-100 rounded-lg">
                                        <Icon name="heroicons:device-phone-mobile" class="w-6 h-6 text-green-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-green-900">Développement mobile</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Apps iOS & Android</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Design moderne</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Performance optimale</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-green-600">Délai : 3-6 mois</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Design UI/UX -->
                            <div class="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 border border-pink-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-pink-100 rounded-lg">
                                        <Icon name="heroicons:paint-brush" class="w-6 h-6 text-pink-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-pink-900">Design UI/UX</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Design sur mesure</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Prototypage</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Tests utilisateurs</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-pink-600">Délai : 2-4 semaines</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Fourniture de compteuses -->
                            <div class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-amber-100 rounded-lg">
                                        <Icon name="heroicons:calculator" class="w-6 h-6 text-amber-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-amber-900">Compteuses</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Compteuses de billets</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Compteuses de pièces</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Installation et formation</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-amber-600">Sur devis</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Imprimantes à badges -->
                            <div class="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border border-cyan-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-cyan-100 rounded-lg">
                                        <Icon name="heroicons:identification" class="w-6 h-6 text-cyan-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-cyan-900">Imprimantes badges</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Imprimantes haute qualité</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Consommables</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Support technique</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-cyan-600">Sur devis</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Fourniture d'EPI -->
                            <div class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-orange-100 rounded-lg">
                                        <Icon name="heroicons:shield-check" class="w-6 h-6 text-orange-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-orange-900">Équipements EPI</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Équipements certifiés</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Stock permanent</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Livraison rapide</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-orange-600">Sur devis</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Matériel informatique -->
                            <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-gray-100 rounded-lg">
                                        <Icon name="heroicons:computer-desktop" class="w-6 h-6 text-gray-600"/>
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-lg font-semibold text-gray-900">Matériel informatique</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Audit du parc</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Installation sur site</span>
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-500"/>
                                                <span>Maintenance</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-medium text-gray-600">Sur devis</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Prix et Modalités de paiement -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">3. Prix et Modalités de paiement</h2>
                    <div class="space-y-6 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:currency-dollar" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">3.1 Prix</h3>
                                <ul class="space-y-2">
                                    <li>Les prix sont exprimés en FCFA et hors taxes</li>
                                    <li>TVA applicable : 18%</li>
                                    <li>Validité des devis : 30 jours</li>
                                    <li>Révision possible selon variation des coûts</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:credit-card" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">3.2 Modalités de paiement</h3>
                                <ul class="space-y-2">
                                    <li>Acompte : 50% à la commande</li>
                                    <li>Solde : à la livraison ou selon échéancier convenu</li>
                                    <li>Délai de paiement : 30 jours date de facture</li>
                                </ul>
                                <p class="font-medium">Moyens de paiement acceptés :</p>
                                <ul class="space-y-2">
                                    <li>Virement bancaire</li>
                                    <li>Chèque</li>
                                    <li>Wave</li>
                                    <li>Orange Money</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:exclamation-triangle" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">3.3 Retard de paiement</h3>
                                <p>En cas de retard de paiement :</p>
                                <ul class="space-y-2">
                                    <li>Pénalités : 1.5% par mois de retard</li>
                                    <li>Indemnité forfaitaire : 40 000 FCFA</li>
                                    <li>Suspension possible des services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Commande et Exécution -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">4. Commande et Exécution</h2>
                    <div class="space-y-6 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:document-check" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">4.1 Formation du contrat</h3>
                                <ul class="space-y-2">
                                    <li>Devis signé avec mention "Bon pour accord"</li>
                                    <li>Versement de l'acompte</li>
                                    <li>Acceptation des CGV</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:clock" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">4.2 Délais</h3>
                                <p>Les délais sont donnés à titre indicatif. Un retard ne peut donner lieu à :</p>
                                <ul class="space-y-2">
                                    <li>Annulation de la commande</li>
                                    <li>Refus des services</li>
                                    <li>Dommages et intérêts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Garanties et Responsabilités -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">5. Garanties et Responsabilités</h2>
                    <div class="space-y-6 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:shield-check" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">5.1 Garanties</h3>
                                <ul class="space-y-2">
                                    <li>Garantie légale de conformité</li>
                                    <li>Garantie des vices cachés</li>
                                    <li>Garantie matériel : 12 mois minimum</li>
                                    <li>Garantie logiciel : 3 mois après livraison</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:scale" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-blue-800">5.2 Limitations de responsabilité</h3>
                                <p>La responsabilité d'ABI est limitée :</p>
                                <ul class="space-y-2">
                                    <li>Au montant HT de la commande</li>
                                    <li>Aux dommages directs et prévisibles</li>
                                    <li>Exclusion des dommages indirects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Propriété intellectuelle -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">6. Propriété intellectuelle</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <p>Tous les droits de propriété intellectuelle restent la propriété d'ABI jusqu'au paiement complet.</p>
                                <p>Le transfert des droits est conditionné à :</p>
                                <ul class="space-y-2">
                                    <li>Paiement intégral</li>
                                    <li>Signature d'un contrat de cession</li>
                                    <li>Respect des conditions d'utilisation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Loi applicable et juridiction -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">7. Loi applicable et juridiction</h2>
                    <div class="space-y-4 text-gray-600">
                        <div class="flex gap-4 items-start">
                            <Icon name="heroicons:scale" class="w-8 h-8 text-blue-600 flex-shrink-0"/>
                            <div class="space-y-4">
                                <p>Les présentes CGV sont régies par le droit sénégalais.</p>
                                <p>En cas de litige :</p>
                                <ul class="space-y-2">
                                    <li>Recherche d'une solution amiable</li>
                                    <li>Médiation possible</li>
                                    <li>Tribunal de Commerce de Dakar compétent</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 class="text-2xl font-bold text-blue-900 mb-6">8. Contact</h2>
                    <div class="space-y-4">
                        <p class="text-gray-600">Pour toute question concernant nos CGV :</p>
                        <ul class="space-y-3">
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:envelope" class="w-5 h-5 text-blue-600" />
                                <a href="mailto:contact@aramebusiness.com"
                                    class="text-gray-600 hover:text-blue-600 transition-colors">
                                    contact@aramebusiness.com
                                </a>
                            </li>
                            <li class="flex items-center gap-2">
                                <Icon name="heroicons:phone" class="w-5 h-5 text-blue-600" />
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