<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/80 z-50 h-screen"
  >
    <transition-group name="countdown">
      <div
        v-if="currentNumber"
        :key="currentNumber"
        class="absolute text-8xl md:text-9xl font-bold text-white"
      >
        {{ currentNumber }}
      </div>
      <div
        v-if="currentNumber === 'GO!'"
        :key="'go'"
        class="absolute text-8xl md:text-9xl font-bold text-green-500"
      >
        {{ currentNumber }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { playSound } from "../utils/audio";

const emit = defineEmits<{
  (e: "complete"): void;
}>();

const currentNumber = ref<string | number>(3);
const countdownSound = new Audio("/assets/sounds/countdown-beep.mp3");
const startSound = new Audio("/assets/sounds/game-start.mp3");

let countdown: ReturnType<typeof setInterval>;

onMounted(() => {
  playSound(countdownSound);

  countdown = setInterval(() => {
    if (currentNumber.value === 1) {
      currentNumber.value = "GO!";
      playSound(startSound);
      clearInterval(countdown);

      setTimeout(() => {
        emit("complete");
      }, 1000);
    } else if (currentNumber.value === "GO!") {
      clearInterval(countdown);
    } else {
      currentNumber.value = Number(currentNumber.value) - 1;
      playSound(countdownSound);
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(countdown);
  countdownSound.pause();
  startSound.pause();
});
</script>

<style scoped>
.countdown-enter-active,
.countdown-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.countdown-enter-from {
  opacity: 0;
  transform: scale(2);
}

.countdown-leave-to {
  opacity: 0;
  transform: scale(0);
}

.countdown-enter-to,
.countdown-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
