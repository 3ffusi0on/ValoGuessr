<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <button
        v-for="map in maps"
        :key="map.name"
        @click="$emit('update:selectedMap', map.name)"
        @dblclick="selectedMap === map.name && $emit('guess', selectedMap)"
        :class="[
          'p-2 rounded-lg transition',
          selectedMap === map.name
            ? 'bg-gray-500 text-white'
            : 'bg-slate-700 hover:bg-slate-600',
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

    <div class="flex justify-center">
      <button
        @click="$emit('guess', selectedMap)"
        :disabled="!selectedMap"
        class="w-full max-w-xs py-3 bg-green-500 hover:bg-green-600 disabled:bg-slate-600 disabled:cursor-not-allowed rounded-lg font-semibold transition"
      >
        Make Guess
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Map } from "../data/maps";

defineProps<{
  maps: Map[];
  selectedMap: string;
}>();

defineEmits<{
  (e: "update:selectedMap", value: string): void;
  (e: "guess", value: string): void;
}>();
</script>
