<template>
  <Header @restart="$emit('restart')">
    <template v-if="gameState !== 'start'">
      <div v-if="hardMode" class="flex items-center gap-2">
        <Timer class="w-5 h-5 text-blue-500" />
        <GameTimer
          :isRunning="gameState === 'playing'"
          :round="currentRound"
          @timeout="$emit('timeout')"
        />
      </div>
      <div class="flex items-center gap-2">
        <Trophy class="w-5 h-5 text-yellow-500" />
        <span class="font-semibold">{{ score }}</span>
      </div>
      <div
        class="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300"
      >
        Round {{ currentRound }}
      </div>
    </template>
  </Header>
</template>

<script setup lang="ts">
import { Trophy, Timer } from "lucide-vue-next";
import GameTimer from "./GameTimer.vue";
import Header from "./Header.vue";
import { useConfig } from "../store/config";

const { hardMode } = useConfig();

defineProps<{
  score: number;
  currentRound: number;
  gameState: string;
}>();

defineEmits<{
  (e: "timeout"): void;
  (e: "restart"): void;
}>();
</script>
