<template>
  <div class="text-center space-y-4">
    <h3 class="text-2xl font-bold">
      {{
        selectedMap === mapName
          ? "🎉 Correct!"
          : isTimeout
          ? "❌ Timeout!"
          : "❌ Wrong!"
      }}
    </h3>
    <p>The location was in {{ mapName }}</p>
    <button
      @click="$emit('nextRound')"
      class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2 mx-auto"
    >
      Next Round
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedMap: string;
  mapName: string;
  isTimeout?: boolean;
}>();

const emit = defineEmits<{
  (e: "nextRound"): void;
}>();
</script>
