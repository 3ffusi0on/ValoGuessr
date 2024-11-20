<template>
  <div class="relative aspect-video rounded-xl overflow-hidden shadow-xl">
    <img
      :src="map.minimap"
      alt="Map minimap"
      class="w-full h-full object-contain"
      @click="handleMapClick"
      ref="mapRef"
    />
    <div v-if="selectedPoint" class="absolute w-6 h-6" :style="pinStyle">
      <div
        class="absolute w-6 h-6 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-full"
      >
        <MapPin class="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { MapPin } from "lucide-vue-next";
import type { Map } from "../data/maps";

const props = defineProps<{
  map: Map;
}>();

const emit = defineEmits<{
  (e: "select", x: number, y: number): void;
}>();

const mapRef = ref<HTMLImageElement | null>(null);
const selectedPoint = ref<{ x: number; y: number } | null>(null);

const pinStyle = computed(() => {
  if (!selectedPoint.value) return {};
  return {
    left: `${selectedPoint.value.x}%`,
    top: `${selectedPoint.value.y}%`,
  };
});

watch(
  () => props.map,
  () => {
    selectedPoint.value = null;
  }
);

const handleMapClick = (event: MouseEvent) => {
  if (!mapRef.value) return;

  const rect = mapRef.value.getBoundingClientRect();
  let x = ((event.clientX - rect.left) / rect.width) * 100;
  let y = ((event.clientY - rect.top) / rect.height) * 100;

  // Add a small offset to ensure the position updates
  x += 0.01;
  y += 0.01;

  selectedPoint.value = { x, y };
  emit("select", x, y);
};
</script>
