<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="pt-24 flex-grow">
      <StartScreen
        @startFindMap="startFindMapGame"
        @startFindCoordinates="startFindCoordinatesGame"
      />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import StartScreen from "../components/StartScreen.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const router = useRouter();

const startFindMapGame = () => {
  router.push({ name: "GameFindMap" });
};

const startFindCoordinatesGame = () => {
  router.push({ name: "GameFindCoordinates" });
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
