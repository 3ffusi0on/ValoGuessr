<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="configMenuDropdown"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-600 focus:ring-2 focus:outline-none focus:ring-slate-500"
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
    </div>
    <div
      id="configMenuDropdown"
      class="z-10 hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <label
          class="flex items-center justify-between space-x-2 px-4 py-2 text-sm text-white"
        >
          <span>Hard Mode</span>
          <input
            type="checkbox"
            :checked="hardMode"
            @change="updateHardMode"
            class="toggle-switch focus:ring-0 focus:ring-offset-1"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  hardMode: boolean;
}>();

const emit = defineEmits<{
  (e: "update:hardMode", value: boolean): void;
}>();

const updateHardMode = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:hardMode", target.checked);
};
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
