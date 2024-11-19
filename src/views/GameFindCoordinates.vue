<template>
  <div class="animate-game-enter">
    <Countdown v-if="showCountdown" @complete="startGame" />
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      @timeout="handleTimeout"
      @restart="resetGame"
    />
    <main class="container mx-auto pt-24">
      <transition name="fade" mode="out-in">
        <GameOver
          v-if="gameState === 'finished'"
          :score="score"
          @reset="resetGame"
        />
        <div v-else class="space-y-4">
          <div class="max-w-4xl mx-auto">
            <transition name="fade" mode="out-in"> // TODO </transition>
          </div>

          <div class="max-w-4xl mx-auto">
            <transition name="fade" mode="out-in"> </transition>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { successSound, playSound } from "../utils/audio";
import { maps } from "../data/maps";
import GameHeader from "../components/GameHeader.vue";
import GameOver from "../components/GameOver.vue";
import Countdown from "../components/Countdown.vue";
import { ref } from "vue";
import { useConfig } from "../store/config";

const { hardMode } = useConfig();

const score = ref(0);
const currentRound = ref(1);
const selectedMap = ref("");
const gameState = ref<"countdown" | "playing" | "guessed" | "finished">(
  "countdown"
);
const currentImage = ref(0);
const showCountdown = ref(true);

const startGame = () => {
  showCountdown.value = false;
  gameState.value = "playing";
};

const startNewRound = () => {
  if (currentRound.value >= 5) {
    gameState.value = "finished";
  } else {
    currentRound.value++;
    selectedMap.value = "";
    gameState.value = "playing";
    currentImage.value = Math.floor(Math.random() * maps.length);
  }
};

const handleTimeout = () => {
  if (hardMode.value) {
    gameState.value = "guessed";
  }
};

const resetGame = () => {
  score.value = 0;
  currentRound.value = 1;
  selectedMap.value = "";
  currentImage.value = Math.floor(Math.random() * maps.length);
  showCountdown.value = true;
  gameState.value = "countdown";
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const handleGuess = (x: number, y: number) => {
  if (gameState.value !== "playing") return;

  const correctCoords = maps[currentImage.value].images[0].coordinates;
  if (!correctCoords) return;

  const distance = calculateDistance(x, y, correctCoords.x, correctCoords.y);
  const points = Math.max(0, 100 - distance); // Example scoring system
  score.value += points;
  playSound(successSound);
  gameState.value = "guessed";
};
</script>

<style scoped>
.animate-game-enter {
  animation: game-enter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes game-enter {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
