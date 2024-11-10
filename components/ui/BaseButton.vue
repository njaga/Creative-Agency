<template>
  <NuxtLink 
    :to="to"
    :class="[
      'inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200',
      'transform hover:-translate-y-0.5 hover:shadow-lg',
      variantClasses[variant]
    ]"
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  variant: 'primary' | 'secondary' | 'outline'
  icon?: string
}>()

const variantClasses = {
  primary: 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 shadow-md shadow-yellow-400/20',
  secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-md shadow-white/10',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
}
</script> 