<template>
  <div class="text-center space-y-4">
    <h3 class="text-2xl font-bold">
      {{
        score >= 80 ? "🎯 Perfect!" : score >= 50 ? "👍 Good!" : "📍 Not quite!"
      }}
    </h3>
    <p>Distance: {{ Math.round(distance) }} units</p>
    <p>Points earned: {{ Math.round(score) }}</p>
    <button
      @click="$emit('nextRound')"
      class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2 mx-auto"
    >
      Next Round
      <ChevronRight class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

defineProps<{
  distance: number;
  score: number;
}>();

defineEmits<{
  (e: "nextRound"): void;
}>();
</script>
