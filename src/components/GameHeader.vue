<template>
  <header class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <MapPin class="w-6 h-6 text-red-500" />
        <h1 class="text-2xl font-bold">ValorantGuessr</h1>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <Trophy class="w-5 h-5 text-yellow-500" />
          <span class="font-semibold">{{ score }}</span>
        </div>
        <div class="flex items-center gap-2">
          <Timer class="w-5 h-5 text-blue-500" />
          <GameTimer
            :isRunning="gameState === 'playing'"
            :round="currentRound"
            @timeout="$emit('timeout')"
          />
        </div>
        <div class="px-3 py-1 bg-slate-700 rounded-full">
          Round {{ currentRound }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { MapPin, Trophy, Timer } from "lucide-vue-next";
import GameTimer from "./GameTimer.vue";

const props = defineProps<{
  score: number;
  currentRound: number;
  gameState: string;
}>();

const emit = defineEmits<{
  (e: "timeout"): void;
}>();
</script>
