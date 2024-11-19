<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 overflow-hidden">
      <div class="grid-background"></div>
    </div>
    <Navigation />
    <div class="pt-24">
      <StartScreen @start="startGame" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import StartScreen from "../components/StartScreen.vue";
import Navigation from "../components/Navigation.vue";

const router = useRouter();

const startGame = () => {
  router.push("/game");
};
</script>

<style scoped>
.grid-background {
  position: fixed;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(45deg);
  animation: grid-move 15s linear infinite;
  pointer-events: none;
}

.dark .grid-background {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

@keyframes grid-move {
  0% {
    transform: perspective(500px) rotateX(45deg) translateY(0);
  }
  100% {
    transform: perspective(500px) rotateX(45deg) translateY(50px);
  }
}
</style>
