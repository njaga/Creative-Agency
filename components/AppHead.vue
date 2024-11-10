<template>
  <div v-if="false" />
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ABI Group - Solutions Informatiques Professionnelles',
  description: 'ABI Group propose des solutions informatiques professionnelles au Sénégal : matériel, services, maintenance et support technique.',
  image: '/images/og-image.jpg',
  url: 'htttps://aramebusiness.com'
})

// Configuration des métadonnées
useHead({
  title: props.title,
  titleTemplate: '%s | ABI Group',
  meta: [
    { name: 'description', content: props.description },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: props.url },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: props.url },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image },

    // Autres métadonnées importantes
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#2563EB' }
  ],
  link: [
    // Favicons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
</script>
