<template>
  <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover">
      <div v-if="tag" class="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
        {{ tag }}
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      
      <ul class="space-y-2 mb-6">
        <li 
          v-for="feature in features" 
          :key="feature"
          class="flex items-center text-sm text-gray-600"
        >
          <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
          {{ feature }}
        </li>
      </ul>
      
      <NuxtLink 
        :to="link"
        class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        En savoir plus
        <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-1" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  link: string
  features: string[]
  tag?: string
}>()
</script> 