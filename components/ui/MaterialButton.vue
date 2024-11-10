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

  <a 
    v-else-if="href" 
    :href="href" 
    class="material-button"
    :class="[variantClasses, sizeClasses]"
  >
    <div class="button-content">
      <slot />
      <Icon v-if="icon" :name="icon" class="icon" />
    </div>
    <div class="button-background"></div>
  </a>
</template>

<script setup lang="ts">
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

const variantClasses = computed(() => ({
  'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900': props.variant === 'primary',
  'bg-gray-100 text-gray-800 hover:bg-gray-200': props.variant === 'secondary',
  'border-2 border-blue-600 text-blue-600 hover:bg-blue-50': props.variant === 'outline',
  'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20': props.variant === 'glass',
  'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-800 hover:from-yellow-500 hover:to-yellow-600': props.variant === 'yellow'
}))

const sizeClasses = computed(() => ({
  'text-sm px-4 py-2': props.size === 'sm',
  'px-6 py-3': props.size === 'md',
  'text-lg px-8 py-4': props.size === 'lg'
}))
</script>

<style scoped>
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
  @apply w-5 h-5 transition-transform duration-300;
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