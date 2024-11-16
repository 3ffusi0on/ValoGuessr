<template>
  <div class="relative aspect-video rounded-xl overflow-hidden shadow-xl">
    <img
      :src="randomImage?.url"
      alt="Location to guess"
      class="w-full h-full object-contain"
    />
    <div
      v-if="revealed"
      class="absolute inset-0 bg-black/50 flex items-center justify-center"
    >
      <div
        class="bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-xs text-center"
      >
        <h3 class="text-xl font-bold">{{ map.name }}</h3>
        <p class="text-sm opacity-80">{{ map.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Map, MapImageData } from "../data/maps";

const props = defineProps<{
  map: Map;
  revealed: boolean;
}>();

const randomImage = ref<MapImageData | null>(null);

const pickRandomImage = () => {
  const images = props.map.images;
  randomImage.value = images[Math.floor(Math.random() * images.length)];
};

watch(() => props.map, pickRandomImage, { immediate: true });
</script>
