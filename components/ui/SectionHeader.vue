<template>
  <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
    <p class="text-lg text-gray-600">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script> 