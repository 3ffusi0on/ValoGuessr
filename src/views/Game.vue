<template>
  <div class="animate-game-enter">
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      :hardMode="hardMode"
      @timeout="handleTimeout"
      @update:hardMode="hardMode = $event"
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
                v-else
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
import { maps } from "../data/maps";
import GameHeader from "../components/GameHeader.vue";
import MapImage from "../components/MapImage.vue";
import MapSelection from "../components/MapSelection.vue";
import GameOver from "../components/GameOver.vue";
import RoundResult from "../components/RoundResult.vue";

const score = ref(0);
const currentRound = ref(1);
const selectedMap = ref("");
const gameState = ref<"playing" | "guessed" | "finished">("playing");
const currentImage = ref(0);
const hardMode = ref(false);

const handleGuess = (mapName: string) => {
  if (gameState.value !== "playing") return;

  const isCorrect = mapName === maps[currentImage.value].name;
  if (isCorrect) {
    const points = maps[currentImage.value].images[0].points;
    score.value += points;
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

const resetGame = () => {
  score.value = 0;
  currentRound.value = 1;
  selectedMap.value = "";
  currentImage.value = Math.floor(Math.random() * maps.length);
  gameState.value = "playing";
};

const handleTimeout = () => {
  if (hardMode.value) {
    gameState.value = "guessed";
  }
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
