<template>
  <div class="animate-game-enter flex flex-col min-h-screen">
    <Countdown v-if="showCountdown" @complete="startGame" />
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      :hardMode="hardMode"
      :soundsEnabled="soundsEnabled"
      @timeout="handleTimeout"
      @restart="resetGame"
    />
    <main class="container mx-auto pt-24 flex-grow">
      <transition name="fade" mode="out-in">
        <GameOver
          v-if="gameState === 'finished'"
          :score="score"
          @reset="resetGame"
        />
        <div v-else class="space-y-8">
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <transition name="fade" mode="out-in">
              <div v-if="gameState === 'playing' || gameState === 'guessed'">
                <div class="transition-opacity duration-500">
                  <h3 class="text-xl font-semibold mb-4">
                    Find this location:
                  </h3>
                  <h4 class="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {{ currentMap.name }}
                  </h4>
                  <div class="rounded-xl overflow-hidden shadow-xl">
                    <img
                      :src="currentImageData?.url"
                      alt="Location to find"
                      class="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="gameState === 'playing' || gameState === 'guessed'">
                <div class="transition-opacity duration-500">
                  <h3 class="text-xl font-semibold mb-4">Click on the map:</h3>
                  <h4 class="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {{ currentMap.name }} - Minimap
                  </h4>
                  <div class="space-y-4">
                    <MapPicker :map="currentMap" @select="updateGuess" />
                    <template v-if="gameState === 'playing'">
                      <button
                        @click="handleGuess"
                        :disabled="!currentGuess"
                        class="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition"
                      >
                        Confirm Location
                      </button>
                    </template>
                    <GuessResult
                      v-else-if="gameState === 'guessed' && lastGuess"
                      :distance="lastGuess.distance"
                      :score="lastGuess.points"
                      @nextRound="startNewRound"
                    />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useConfig } from "../store/config";
import { maps } from "../data/maps";
import { successSound, failureSound, playSound } from "../utils/audio";
import GameHeader from "../components/GameHeader.vue";
import GameOver from "../components/GameOver.vue";
import Countdown from "../components/Countdown.vue";
import MapPicker from "../components/MapPicker.vue";
import GuessResult from "../components/GuessResult.vue";
import Footer from "../components/Footer.vue";

const { hardMode, soundsEnabled } = useConfig();

const score = ref(0);
const currentRound = ref(1);
const gameState = ref<"countdown" | "playing" | "guessed" | "finished">(
  "countdown"
);
const currentImage = ref(0);
const showCountdown = ref(true);
const lastGuess = ref<{ distance: number; points: number } | null>(null);
const currentGuess = ref<{ x: number; y: number } | null>(null);
const isImageVisible = ref(false);

const currentMap = computed(() => maps[currentImage.value]);
const currentImageData = computed(() => maps[currentImage.value].images[0]);

const startGame = () => {
  showCountdown.value = false;
  gameState.value = "playing";
  // Show images with a slight delay for a smooth transition
  setTimeout(() => {
    isImageVisible.value = true;
  }, 500);
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const updateGuess = (x: number, y: number) => {
  if (gameState.value !== "playing") return;
  currentGuess.value = { x, y };
};

const handleGuess = () => {
  if (gameState.value !== "playing" || !currentGuess.value) return;

  const correctCoords = currentImageData.value.coordinates;
  const distance = calculateDistance(
    currentGuess.value.x,
    currentGuess.value.y,
    correctCoords.x,
    correctCoords.y
  );

  // Calculate points based on distance (max 100 points when distance is 0)
  const maxDistance = 100; // Maximum distance for scoring
  const points = Math.round(Math.max(0, 100 * (1 - distance / maxDistance)));

  lastGuess.value = { distance, points };
  score.value += points;

  playSound(points >= 50 ? successSound : failureSound);
  gameState.value = "guessed";
};

const startNewRound = () => {
  if (currentRound.value >= 5) {
    gameState.value = "finished";
  } else {
    currentRound.value++;
    lastGuess.value = null;
    currentGuess.value = null;
    isImageVisible.value = false;

    // Pick a new random image
    let newImage;
    do {
      newImage = Math.floor(Math.random() * maps.length);
    } while (newImage === currentImage.value);
    currentImage.value = newImage;

    // Show new images after a short delay
    setTimeout(() => {
      gameState.value = "playing";
      isImageVisible.value = true;
    }, 500);
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
  lastGuess.value = null;
  currentGuess.value = null;
  isImageVisible.value = false;
  currentImage.value = Math.floor(Math.random() * maps.length);
  showCountdown.value = true;
  gameState.value = "countdown";
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
