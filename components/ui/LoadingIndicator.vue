<template>
  <div v-if="loading" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = useState('loading', () => false)
</script>
