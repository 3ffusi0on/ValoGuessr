import { ref, watch } from 'vue';
import { getCookie, setCookie } from '../utils/cookies';

const isDark = ref(getCookie('theme') !== 'light');

watch(isDark, (newValue) => {
  setCookie('theme', newValue ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', newValue);
});

// Initialize theme on page load
document.documentElement.classList.toggle('dark', isDark.value);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
}