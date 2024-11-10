<template>
  <div class="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div class="relative mb-6">
      <img :src="image" :alt="title" class="w-full h-48 object-contain mb-2 group-hover:scale-105 transition-transform duration-300">
      <span v-if="tag" class="absolute top-2 right-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
        {{ tag }}
      </span>
    </div>
    <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <ul v-if="features" class="mb-4 space-y-2">
      <li v-for="feature in features" :key="feature" class="flex items-center text-sm text-gray-600">
        <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
        {{ feature }}
      </li>
    </ul>
    <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
      <NuxtLink :to="link" class="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
        {{ linkText || 'Voir les modèles' }}
        <Icon name="heroicons:arrow-right" class="w-4 h-4" />
      </NuxtLink>
      <span class="text-gray-500 text-sm">{{ badge || 'Installation incluse' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  link: string
  features?: string[]
  tag?: string
  badge?: string
  linkText?: string
}>()
</script> 