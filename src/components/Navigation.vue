<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50 transition-all duration-300',
      { '-translate-y-full': isHidden },
    ]"
  >
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2 cursor-pointer" @click="navigateHome">
        <MapPin class="w-6 h-6 text-red-500" />
        <h1 class="text-2xl font-bold">ValorantGuessr</h1>
      </div>
      <div class="flex items-center gap-4">
        <slot></slot>
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
        >
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>
        <ConfigMenu
          :hardMode="hardMode"
          :soundsEnabled="soundsEnabled"
          @restart="$emit('restart')"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { MapPin, Sun, Moon } from "lucide-vue-next";
import ConfigMenu from "./ConfigMenu.vue";
import { useRouter } from "vue-router";
import { useConfig } from "../store/config";
import { useTheme } from "../store/theme";

const { hardMode, soundsEnabled } = useConfig();
const { isDark, toggleTheme } = useTheme();

const emit = defineEmits<{
  (e: "restart"): void;
}>();

const router = useRouter();
const navigateHome = () => {
  router.push("/");
};

const isHidden = ref(false);
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      isHidden.value = currentScrollY > lastScrollY && currentScrollY > 100;
      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
