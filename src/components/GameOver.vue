<template>
  <div class="text-center space-y-6">
    <h2 class="text-4xl font-bold">Game Over!</h2>
    <p class="text-xl">Final Score: {{ score }}</p>
    <button
      @click="$emit('reset')"
      class="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
    >
      Play Again
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  score: number;
}>();

defineEmits<{
  (e: "reset"): void;
}>();
</script>
