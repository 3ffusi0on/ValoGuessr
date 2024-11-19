
import { useConfig } from "../store/config";

const { soundsEnabled } = useConfig();

const successSound = new Audio("/assets/sounds/success.mp3");
const failureSound = new Audio("/assets/sounds/failure.mp3");

const checkAudioSupport = (audio: HTMLAudioElement) => {
  audio.onerror = () => {
    console.error("Failed to load audio:", audio.src);
    audio.pause();
  };
};

const playSound = (sound: HTMLAudioElement) => {
  checkAudioSupport(sound);
  if (soundsEnabled.value) {
    sound.currentTime = 0;
    sound
      .play()
      .catch((error) => console.error("Failed to play sound:", error));
  }
};

export {
  successSound,
  failureSound,
  playSound,
  checkAudioSupport,
};