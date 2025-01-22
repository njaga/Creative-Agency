<template>
  <AppHead
    title="Accueil"
    description="Bienvenue sur le site de ABI (Arame Business Informatique), votre partenaire pour la transformation digitale de votre entreprise."
    image="/logo.jpg"
  />
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <EquipmentSection :equipments="equipments" />
    <EpiSection :epis="epis" />
    <DigitalTransformSection :benefits="digitalBenefits" />
    <WebServicesSection />
    <CtaSection />
    <FaqSection />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Equipment, Epi, Service } from '~/types/equipment'
import { defaultEquipments } from '~/data/equipments'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import EquipmentSection from '~/components/sections/EquipmentSection.vue'
import DigitalTransformSection from '~/components/sections/DigitalTransformSection.vue'
import WebServicesSection from '~/components/sections/WebServicesSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import EpiSection from '~/components/sections/EpiSection.vue'

// Utiliser les équipements par défaut
const equipments = ref<Equipment[]>(defaultEquipments)

const epis = ref<Epi[]>([
  {
    title: 'Casques de Chantier',
    description: 'Protection de la tête aux normes EN 397',
    image: '/epi/casque.avif',
    link: '/epi/protection-tete',
    category: 'Protection Tête',
    features: [
      'Résistance aux chocs',
      'Ajustement facile',
      'Certification CE'
    ],
    tag: 'Best-seller'
  },
  {
    title: 'Lunettes de Protection',
    description: 'Protection oculaire professionnelle',
    image: '/epi/lunettes.avif',
    link: '/epi/protection-yeux',
    category: 'Protection Yeux',
    features: [
      'Anti-rayures',
      'Anti-buée',
      'Protection UV'
    ]
  },
  {
    title: 'Masques FFP2',
    description: 'Protection respiratoire certifiée',
    image: '/epi/masque.avif',
    link: '/epi/protection-respiratoire',
    category: 'Protection Respiratoire',
    features: [
      'Filtration 94%',
      'Confort optimal',
      'Pliable'
    ],
    tag: 'Nouveau'
  }
])

const digitalBenefits = ref<Service[]>([
  {
    title: 'Gain de Productivité',
    description: 'Automatisez vos tâches répétitives et concentrez-vous sur l\'essentiel',
    icon: 'heroicons:bolt'
  },
  {
    title: 'Réduction des Coûts',
    description: 'Optimisez vos processus et réduisez vos dépenses opérationnelles',
    icon: 'heroicons:chart-bar'
  },
  {
    title: 'Satisfaction Client',
    description: 'Offrez une meilleure expérience à vos clients grâce au digital',
    icon: 'heroicons:heart'
  }
])

// Exposer les données pour le template
defineExpose({
  equipments,
  epis,
  digitalBenefits
})
</script>