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
    duration?: number;
    round?: number;
  }>(),
  {
    duration: 30,
    round: 1,
  }
);

const emit = defineEmits<{
  (e: "timeout"): void;
}>();

const timeLeft = ref(props.duration);
let timer: number | undefined;

watch(
  () => props.round,
  () => {
    timeLeft.value = props.duration;
  }
);

watch(
  () => props.isRunning,
  (newValue) => {
    if (timer) clearInterval(timer);

    if (!newValue) {
      timeLeft.value = props.duration;
      return;
    }

    timer = setInterval(() => {
      timeLeft.value--;
      if (timeLeft.value <= 0) {
        clearInterval(timer);
        emit("timeout");
      }
    }, 1000);
  },
  { immediate: true }
);

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
