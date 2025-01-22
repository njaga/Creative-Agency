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
import { ref, defineComponent } from 'vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import EquipmentSection from '~/components/sections/EquipmentSection.vue'
import DigitalTransformSection from '~/components/sections/DigitalTransformSection.vue'
import WebServicesSection from '~/components/sections/WebServicesSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import EpiSection from '~/components/sections/EpiSection.vue'
// Types
interface Equipment {
  title: string
  description: string
  image: string
  link: string
  features?: string[]
  tag?: string
  badge?: string
  linkText?: string
}

interface Epi {
  title: string
  description: string
  image: string
  link: string
  features: string[]
  tag?: string
}

interface Benefit {
  title: string
  description: string
  icon: string
}

defineComponent({
  name: 'IndexPage',
  components: {
    HeroSection,
    ServicesSection,
    EquipmentSection,
    DigitalTransformSection,
    WebServicesSection,
    CtaSection,
    EpiSection
  }
})

// Données
const equipments = ref<Equipment[]>([
  {
    title: 'Postes de Travail Pro',
    description: 'Ordinateurs fixes et portables haute performance pour professionnels',
    image: '/computers.svg',
    link: '/materiel/ordinateurs',
    features: [
      'Processeurs dernière génération',
      'SSD haute vitesse',
      'Windows 11 Pro préinstallé',
      'Garantie 3 ans sur site'
    ],
    tag: 'Best-seller'
  },
  {
    title: 'Solutions d\'Impression',
    description: 'Imprimantes et multifonctions pour tous volumes',
    image: '/printers.svg',
    link: '/materiel/impression',
    features: [
      'Impression recto-verso',
      'Scan vers email',
      'Gestion des droits',
      'Suivi des coûts'
    ],
    tag: 'Éco-responsable'
  },
  {
    title: 'Réseaux & Sécurité',
    description: 'Infrastructure réseau performante et sécurisée',
    image: '/network.svg',
    link: '/materiel/reseau',
    features: [
      'Switches managés',
      'Pare-feu nouvelle génération',
      'Points d\'accès WiFi 6',
      'VPN sécurisé'
    ],
    tag: 'Sécurité+'
  },
  {
    title: 'Serveurs & Stockage',
    description: 'Solutions de stockage et serveurs professionnels',
    image: '/servers.svg',
    link: '/materiel/serveurs',
    features: [
      'Serveurs rack ou tour',
      'NAS professionnel',
      'Sauvegarde automatisée',
      'Redondance RAID'
    ]
  },
  {
    title: 'Écrans Professionnels',
    description: 'Moniteurs haute résolution pour plus de confort',
    image: '/monitors.svg',
    link: '/materiel/ecrans',
    features: [
      'Dalle IPS',
      'Résolution 4K',
      'Port USB-C',
      'Ergonomique'
    ]
  },
  {
    title: 'Périphériques',
    description: 'Accessoires et périphériques de qualité',
    image: '/peripherals.svg',
    link: '/materiel/peripheriques',
    features: [
      'Claviers mécaniques',
      'Souris ergonomiques',
      'Webcams HD',
      'Casques pro'
    ]
  }
])

const epis = ref<Epi[]>([
  {
    title: 'Casques de Chantier',
    description: 'Protection de la tête aux normes EN 397',
    image: '/epi/casque.avif',
    link: '/epi/protection-tete',
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
    features: [
      'Filtration 94%',
      'Confort optimal',
      'Pliable'
    ],
    tag: 'Nouveau'
  }
])

const digitalBenefits = ref<Benefit[]>([
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