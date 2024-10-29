<template>
  <span class="font-mono font-semibold">
    {{ String(timeLeft).padStart(2, "0") }}s
  </span>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    isRunning: boolean;
    isPaused: boolean;
    duration?: number;
  }>(),
  {
    duration: 30,
    isPaused: false,
  }
);

const emit = defineEmits<{
  (e: "timeout"): void;
}>();

const timeLeft = ref(props.duration);
let timer: number | undefined;

const startTimer = () => {
  timer = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) {
      clearInterval(timer);
      emit("timeout");
    }
  }, 1000);
};

watch(
  () => props.isRunning,
  (newValue) => {
    if (!newValue) {
      if (timer) clearInterval(timer);
      return;
    }

    timeLeft.value = props.duration;

    if (!props.isPaused) {
      startTimer();
    }
  },
  { immediate: true }
);

watch(
  () => props.isPaused,
  (newValue) => {
    if (newValue && timer) {
      clearInterval(timer);
    } else if (!newValue && props.isRunning) {
      startTimer();
    }
  }
);

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
