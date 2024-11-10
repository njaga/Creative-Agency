<template>
  <NuxtLink 
    v-if="to" 
    :to="to"
    class="material-button"
    :class="[variantClasses, sizeClasses]"
  >
    <div class="button-content">
      <slot />
      <Icon v-if="icon" :name="icon" class="icon" />
    </div>
    <div class="button-background"></div>
  </NuxtLink>

  <button 
    v-else
    :href="href"
    class="material-button"
    :class="[variantClasses, sizeClasses]"
    @click="$emit('click')"
  >
    <div class="button-content">
      <slot />
      <Icon v-if="icon" :name="icon" class="icon" />
    </div>
    <div class="button-background"></div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'yellow':
      return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-800 hover:from-yellow-500 hover:to-yellow-600'
    case 'outline':
      return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
    case 'glass':
      return 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
    case 'secondary':
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    default:
      return 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm px-4 py-2'
    case 'lg':
      return 'text-lg px-8 py-4'
    default:
      return 'px-6 py-3'
  }
})

defineEmits(['click'])
</script>

<style scoped lang="postcss">
.material-button {
  @apply relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 overflow-hidden;
}

.button-content {
  @apply relative z-10 flex items-center gap-2;
}

.button-background {
  @apply absolute inset-0 transform transition-transform duration-300;
}

.material-button:hover .button-background {
  @apply scale-105;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  transition-property: transform;
  transition-duration: 300ms;
}

.material-button:hover .icon {
  @apply translate-x-1;
}

/* Effet de brillance au survol */
.material-button::after {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full;
  transition: transform 0.6s ease-in-out;
}

.material-button:hover::after {
  @apply translate-x-full;
}
</style> 