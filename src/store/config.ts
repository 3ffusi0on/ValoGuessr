import { ref, watch } from "vue";
import { getCookie, setCookie } from "../utils/cookies";

const hardMode = ref(getCookie("hardMode") === "true");
const soundsEnabled = ref(getCookie("soundsEnabled") !== "false");

watch(hardMode, (newValue) => {
  setCookie("hardMode", newValue.toString());
});

watch(soundsEnabled, (newValue) => {
  setCookie("soundsEnabled", newValue.toString());
});

export function useConfig() {
  return {
    hardMode,
    soundsEnabled,
  };
}