<template>
  <div class="animate-game-enter">
    <Countdown
      v-if="showCountdown"
      @complete="startGame"
      :soundsEnabled="soundsEnabled"
    />
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      :hardMode="hardMode"
      :soundsEnabled="soundsEnabled"
      @timeout="handleTimeout"
      @restart="resetGame"
    />
    <main class="container mx-auto pt-20">
      <transition name="fade" mode="out-in">
        <GameOver
          v-if="gameState === 'finished'"
          :score="score"
          @reset="resetGame"
        />
        <div v-else class="space-y-4">
          <div class="max-w-4xl mx-auto">
            <transition name="fade" mode="out-in">
              <MapImage
                v-if="gameState === 'playing' || gameState === 'guessed'"
                :key="currentImage"
                :map="maps[currentImage]"
                :revealed="gameState === 'guessed'"
              />
            </transition>
          </div>

          <div class="max-w-4xl mx-auto">
            <transition name="fade" mode="out-in">
              <MapSelection
                v-if="gameState === 'playing'"
                :maps="maps"
                :selectedMap="selectedMap"
                @update:selectedMap="selectedMap = $event"
                @guess="handleGuess"
              />
              <RoundResult
                v-else-if="gameState === 'guessed'"
                :selectedMap="selectedMap"
                :mapName="maps[currentImage].name"
                @nextRound="startNewRound"
              />
            </transition>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useConfig } from "../store/config";
import { maps } from "../data/maps";
import GameHeader from "../components/GameHeader.vue";
import MapImage from "../components/MapImage.vue";
import MapSelection from "../components/MapSelection.vue";
import GameOver from "../components/GameOver.vue";
import RoundResult from "../components/RoundResult.vue";
import Countdown from "../components/Countdown.vue";

const { hardMode, soundsEnabled } = useConfig();

const score = ref(0);
const currentRound = ref(1);
const selectedMap = ref("");
const gameState = ref<"countdown" | "playing" | "guessed" | "finished">(
  "countdown"
);
const currentImage = ref(0);
const showCountdown = ref(true);
const successSound = new Audio("/assets/sounds/success.mp3");
const failureSound = new Audio("/assets/sounds/failure.mp3");

const playSound = (sound: HTMLAudioElement) => {
  if (soundsEnabled.value) {
    sound.currentTime = 0;
    sound
      .play()
      .catch((error) => console.error("Failed to play sound:", error));
  }
};

const startGame = () => {
  showCountdown.value = false;
  gameState.value = "playing";
};

const handleGuess = (mapName: string) => {
  if (gameState.value !== "playing") return;

  const isCorrect = mapName === maps[currentImage.value].name;
  if (isCorrect) {
    const points = maps[currentImage.value].images[0].points;
    score.value += points;
    playSound(successSound);
  } else {
    playSound(failureSound);
  }
  gameState.value = "guessed";
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
