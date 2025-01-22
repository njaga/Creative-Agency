import type { Equipment } from '~/types/equipment'

export const defaultEquipments: Equipment[] = [
  {
    title: 'Postes de Travail Pro',
    description: 'Stations de travail haute performance pour entreprises, optimisées pour la productivité et la fiabilité',
    image: '/images/equipment/workstation.png',
    link: '/materiel/postes-travail',
    category: 'Ordinateurs',
    features: [
      'Processeurs Intel Core i7/i9 ou AMD Ryzen Pro',
      'Mémoire DDR5 jusqu\'à 128 Go',
      'Cartes graphiques NVIDIA RTX Pro',
      'Support sur site J+1'
    ],
    tag: 'Best-seller',
    linkText: 'Découvrir nos postes de travail'
  },
  {
    title: 'Infrastructure Serveur',
    description: 'Serveurs professionnels pour PME et grandes entreprises, conçus pour la performance et la disponibilité',
    image: '/images/equipment/server.png',
    link: '/materiel/serveurs',
    category: 'Serveurs',
    features: [
      'Processeurs Intel Xeon Scalable',
      'Configurations RAID personnalisables',
      'Solutions de virtualisation',
      'Garantie 24/7 avec intervention 4h'
    ],
    tag: 'Premium',
    linkText: 'Explorer nos serveurs'
  },
  {
    title: 'Sécurité & Protection',
    description: 'Solutions de sécurité complètes pour protéger vos données et votre infrastructure informatique',
    image: '/images/equipment/security.png',
    link: '/materiel/securite',
    category: 'Sécurité',
    features: [
      'Pare-feu nouvelle génération (NGFW)',
      'Protection contre les ransomwares',
      'Système de détection d\'intrusion (IDS/IPS)',
      'Chiffrement des données'
    ],
    tag: 'Sécurité+',
    linkText: 'Sécuriser votre entreprise'
  }
] 