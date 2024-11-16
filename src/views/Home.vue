<template>
  <div>
    <StartScreen @start="startGame" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import StartScreen from "../components/StartScreen.vue";

const router = useRouter();

const startGame = () => {
  router.push("/game");
};
</script>
