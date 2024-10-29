<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white"
  >
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      :isPaused="isPaused"
      @timeout="handleTimeout"
    />

    <main class="container mx-auto px-4 py-8">
      <GameOver
        v-if="gameState === 'finished'"
        :score="score"
        @reset="resetGame"
      />
      <div v-else class="space-y-8">
        <div class="flex justify-center items-center">
          <MapImage
            :map="maps[currentImage]"
            :revealed="gameState === 'guessed'"
          />
        </div>

        <div class="max-w-3xl mx-auto">
          <MapSelection
            v-if="gameState === 'playing'"
            :maps="maps"
            v-model:selectedMap="selectedMap"
            @guess="handleGuess"
          />
          <div v-else class="text-center space-y-4">
            <h3 class="text-2xl font-bold">
              {{
                selectedMap === maps[currentImage].name
                  ? "🎉 Correct!"
                  : "❌ Wrong!"
              }}
            </h3>
            <p>The location was in {{ maps[currentImage].name }}</p>
            <button
              @click="startNewRound"
              class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2 mx-auto"
            >
              Next Round
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { maps } from "./data/maps";
import GameHeader from "./components/GameHeader.vue";
import MapImage from "./components/MapImage.vue";
import MapSelection from "./components/MapSelection.vue";
import GameOver from "./components/GameOver.vue";

const score = ref(0);
const currentRound = ref(1);
const selectedMap = ref("");
const gameState = ref<"playing" | "guessed" | "finished">("playing");
const currentImage = ref(0);
const isPaused = ref(false);

const getRandomIndex = (): number => {
  return Math.floor(Math.random() * maps.length);
};

const startNewRound = () => {
  currentImage.value = getRandomIndex();
  gameState.value = "playing";
  selectedMap.value = "";
  currentRound.value++;
  isPaused.value = false;
};

const handleGuess = (mapName: string) => {
  if (gameState.value !== "playing") return;

  const isCorrect = mapName === maps[currentImage.value].name;
  if (isCorrect) {
    score.value += 1000;
  }
  gameState.value = "guessed";
  isPaused.value = true;
};

const handleTimeout = () => {
  gameState.value = "guessed";
};

const resetGame = () => {
  score.value = 0;
  currentRound.value = 1;
  startNewRound();
};

onMounted(() => {
  currentImage.value = getRandomIndex();
});
</script>
