<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <button
        v-for="map in maps"
        :key="map.name"
        @click="$emit('update:selectedMap', map.name)"
        :class="[
          'p-4 rounded-lg transition',
          selectedMap === map.name
            ? 'bg-red-500 text-white'
            : 'bg-slate-700 hover:bg-slate-600'
        ]"
      >
        <img
          :src="map.thumbnail"
          :alt="map.name"
          class="w-full aspect-video object-cover rounded-md mb-2"
        />
        <span class="font-medium">{{ map.name }}</span>
      </button>
    </div>

    <button
      @click="$emit('guess', selectedMap)"
      :disabled="!selectedMap"
      class="w-full py-3 bg-green-500 hover:bg-green-600 disabled:bg-slate-600 disabled:cursor-not-allowed rounded-lg font-semibold transition"
    >
      Make Guess
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Map } from '../data/maps';

defineProps<{
  maps: Map[];
  selectedMap: string;
}>();

defineEmits<{
  (e: 'update:selectedMap', value: string): void;
  (e: 'guess', value: string): void;
}>();
</script>