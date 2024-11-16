<template>
  <div>
    <GameHeader
      :score="score"
      :currentRound="currentRound"
      :gameState="gameState"
      :hardMode="hardMode"
      @timeout="handleTimeout"
      @update:hardMode="hardMode = $event"
    />
    <main class="container mx-auto pt-20">
      <GameOver
        v-if="gameState === 'finished'"
        :score="score"
        @reset="resetGame"
      />
      <div v-else class="space-y-4">
        <div class="max-w-4xl mx-auto">
          <MapImage
            :map="maps[currentImage]"
            :revealed="gameState === 'guessed'"
          />
        </div>

        <div class="max-w-4xl mx-auto">
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
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { maps, MapImageData } from "../data/maps";
import GameHeader from "../components/GameHeader.vue";
import MapImage from "../components/MapImage.vue";
import MapSelection from "../components/MapSelection.vue";
import GameOver from "../components/GameOver.vue";
import RoundResult from "../components/RoundResult.vue";

const score = ref(0);
const currentRound = ref(0);
const selectedMap = ref("");
const gameState = ref<"playing" | "guessed" | "finished">("playing");
const currentImage = ref(0);
const hardMode = ref(false);
const randomImage = ref<MapImageData | null>(null);

const getRandomIndex = (arrayLength: number): number => {
  return Math.floor(Math.random() * arrayLength);
};

const startNewRound = () => {
  currentImage.value = getRandomIndex(maps.length);
  randomImage.value =
    maps[currentImage.value].images[
      getRandomIndex(maps[currentImage.value].images.length)
    ];
  gameState.value = "playing";
  selectedMap.value = "";
  currentRound.value++;
};

const handleGuess = (mapName: string) => {
  if (gameState.value !== "playing") return;

  const isCorrect = mapName === maps[currentImage.value].name;
  if (isCorrect) {
    score.value += randomImage.value?.points || 0;
  }
  gameState.value = "guessed";
};

const handleTimeout = () => {
  if (hardMode.value) {
    gameState.value = "guessed";
  }
};

const resetGame = () => {
  gameState.value = "playing";
  score.value = 0;
  currentRound.value = 0;
  startNewRound();
};

onMounted(() => {
  resetGame();
});
</script>
