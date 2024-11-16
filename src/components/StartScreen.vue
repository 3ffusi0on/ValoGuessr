<template>
  <div class="max-w-2xl mx-auto text-center space-y-8 p-8">
    <div class="flex items-center justify-center gap-3">
      <MapPin class="w-10 h-10 text-red-500" />
      <h1
        class="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
      >
        ValorantGuessr
      </h1>
    </div>

    <div class="space-y-4">
      <p class="text-xl text-gray-300">
        Test your Valorant map knowledge in this exciting guessing game!
      </p>
      <ul class="text-gray-400 space-y-2">
        <li class="flex items-center gap-2 justify-center">
          <Timer class="w-5 h-5 text-blue-500" />
          <span>30 seconds per round</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <Trophy class="w-5 h-5 text-yellow-500" />
          <span>1000 points per correct guess</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <Flag class="w-5 h-5 text-green-500" />
          <span>Unlimited rounds total</span>
        </li>
      </ul>
    </div>

    <button
      @click="$emit('start')"
      class="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity animate-pulse"
    >
      Start Game
    </button>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Timer, Trophy, Flag } from "lucide-vue-next";

defineEmits<{
  (e: "start"): void;
}>();
</script>
