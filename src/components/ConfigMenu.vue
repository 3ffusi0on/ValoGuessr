<template>
  <div ref="menuRef" class="relative inline-block text-left">
    <button
      type="button"
      @click="toggleDropdown"
      class="inline-flex items-center p-2 text-sm font-medium text-center text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 focus:ring-2 focus:outline-none focus:ring-slate-500 transition-colors duration-300"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 4 15"
      >
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-10 absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <label
            class="flex items-center justify-between space-x-2 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-300"
          >
            <span>Hard Mode</span>
            <input
              type="checkbox"
              :checked="hardMode"
              @change="updateHardMode"
              class="toggle-switch focus:ring-0 focus:ring-offset-1"
            />
          </label>
          <label
            class="flex items-center justify-between space-x-2 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-300"
          >
            <span>Enable Sounds</span>
            <input
              type="checkbox"
              :checked="soundsEnabled"
              @change="updateSoundsEnabled"
              class="toggle-switch focus:ring-0 focus:ring-offset-1"
            />
          </label>
          <button
            @click="handleRestart"
            class="w-full text-left px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-between transition-colors duration-300"
          >
            <span>Restart Game</span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1276_7761)">
                <path
                  d="M19.7285 10.9288C20.4413 13.5978 19.7507 16.5635 17.6569 18.6573C15.1798 21.1344 11.4826 21.6475 8.5 20.1966M18.364 8.05071L17.6569 7.3436C14.5327 4.21941 9.46736 4.21941 6.34316 7.3436C3.42964 10.2571 3.23318 14.8588 5.75376 18M18.364 8.05071H14.1213M18.364 8.05071V3.80807"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1276_7761">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useConfig } from "../store/config";

const { hardMode, soundsEnabled } = useConfig();

const emit = defineEmits<{
  (e: "restart"): void;
}>();

const menuRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const updateHardMode = (event: Event) => {
  const target = event.target as HTMLInputElement;
  hardMode.value = target.checked;
};

const updateSoundsEnabled = (event: Event) => {
  const target = event.target as HTMLInputElement;
  soundsEnabled.value = target.checked;
};

const handleRestart = () => {
  emit("restart");
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<style scoped>
.toggle-switch {
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: #4b5563;
  border-radius: 9999px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-switch:checked {
  background-color: #10b981;
}

.toggle-switch::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #f9fafb;
  border-radius: 9999px;
  transition: transform 0.2s;
}

.toggle-switch:checked::before {
  transform: translateX(20px);
}
</style>
