<template>
  <div class="relative aspect-video rounded-xl overflow-hidden shadow-xl">
    <img
      :src="map.imageUrl"
      alt="Location to guess"
      class="w-full h-full object-cover"
    />
    <div v-if="revealed" class="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div class="bg-white/10 backdrop-blur-md p-4 rounded-lg">
        <h3 class="text-xl font-bold">{{ map.name }}</h3>
        <p class="text-sm opacity-80">{{ map.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Map } from '../data/maps';

defineProps<{
  map: Map;
  revealed: boolean;
}>();
</script>