<template>
  <div class="mb-32">
    <h2 class="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-16">
      Notre Équipe
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(member, index) in team" 
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="index * 100"
        class="group"
      >
        <div class="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div class="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-center text-gray-900 mb-2">{{ member.name }}</h3>
          <p class="text-blue-600 text-center font-medium mb-4">{{ member.role }}</p>
          <p class="text-gray-600 text-center">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const team = ref([
  {
    name: 'Arame Gueye',
    role: 'Fondatrice & CEO',
    description: 'Experte en transformation digitale avec plus de 10 ans d\'expérience.',
    image: '/images/team/avatar.png'
  },
  {
    name: 'Ndiaga Ndiaye',
    role: 'Directeur Technique',
    description: 'Architecte logiciel spécialisé en solutions web et mobiles.',
    image: '/images/team/avatar.png'
  },
  {
    name: 'Moussa Sy',
    role: 'Responsable Marketing',
    description: 'Stratège marketing digital avec une expertise en growth hacking.',
    image: '/images/team/avatar.png'
  }
])
</script> 