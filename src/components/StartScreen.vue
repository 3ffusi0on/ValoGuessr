<template>
  <div class="max-w-2xl mx-auto text-center space-y-20 p-8">
    <div class="flex items-center justify-center gap-3">
      <MapPin class="w-10 h-10 text-red-500 animate-bounce" />
      <h1
        class="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-title"
      >
        ValorantGuessr
      </h1>
    </div>

    <div class="space-y-8 animate-fade-in">
      <p class="text-xl text-gray-300">
        Test your Valorant map knowledge in this exciting guessing game!
      </p>
      <h2 class="text-2xl font-bold text-gray-300">Features</h2>
      <ul class="text-gray-400 space-y-2">
        <li class="flex items-center gap-2 justify-center">
          <Trophy class="w-5 h-5 text-yellow-500" />
          <span>Identify the map based on a screenshot</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <ShieldAlert class="w-5 h-5 text-red-500" />
          <span>Hard mode: No hints and timeout</span>
        </li>
      </ul>
    </div>

    <div class="space-y-8 animate-fade-in-delayed">
      <h2 class="text-2xl font-bold text-gray-300">Upcoming Features</h2>
      <ul class="text-gray-400 space-y-2">
        <li class="flex items-center gap-2 justify-center">
          <MapPin class="w-5 h-5 text-blue-500" />
          <span>Find a location on the map</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <Users class="w-5 h-5 text-purple-500" />
          <span>Versus mode with your friends</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <Flag class="w-5 h-5 text-green-500" />
          <span>Daily or Unlimited rounds</span>
        </li>
        <li class="flex items-center gap-2 justify-center">
          <Image class="w-5 h-5 text-orange-500" />
          <span>Suggest your own screenshots</span>
        </li>
      </ul>
    </div>

    <div class="flex justify-center gap-4">
      <button
        @click="startFindMapGame"
        class="w-64 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-105 animate-pulse relative overflow-hidden group"
      >
        <span class="relative z-10">Find The Map</span>
        <div
          class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"
        ></div>
      </button>

      <button
        @click="startFindCoordinatesGame"
        class="w-64 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-105 animate-pulse relative overflow-hidden group"
      >
        <span class="relative z-10">Find the Coordinate</span>
        <div
          class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"
        ></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MapPin,
  Trophy,
  Flag,
  ShieldAlert,
  Users,
  Image,
} from "lucide-vue-next";

const emit = defineEmits<{
  (e: "startFindMap"): void;
  (e: "startFindCoordinates"): void;
}>();

const startFindMapGame = () => {
  const button = document.querySelector("button");
  button?.classList.add("scale-150", "opacity-0");
  setTimeout(() => {
    emit("startFindMap");
  }, 500);
};

const startFindCoordinatesGame = () => {
  const button = document.querySelector("button");
  button?.classList.add("scale-150", "opacity-0");
  setTimeout(() => {
    emit("startFindCoordinates");
  }, 500);
};
</script>

<style scoped>
.animate-title {
  animation: title-appear 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

.animate-fade-in-delayed {
  animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) 1s both;
}

@keyframes title-appear {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
