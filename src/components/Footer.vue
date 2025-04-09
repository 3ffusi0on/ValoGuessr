<template>
  <footer
    class="py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 transition-all duration-300 mt-auto"
  >
    <div
      class="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm"
    >
      <div class="mb-2 sm:mb-0">
        <span class="text-slate-600 dark:text-slate-400"
          >© {{ new Date().getFullYear() }} ValorantGuessr</span
        >
      </div>
      <div class="flex items-center gap-4">
        <a
          href="#"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >About</a
        >
        <a
          href="#"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >Privacy</a
        >
        <a
          href="#"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >Terms</a
        >
        <a
          href="https://github.com/3ffusi0on/ValoGuessr"
          target="_blank"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
        >
          <Github class="w-4 h-4" />
          <span>Github</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github } from "lucide-vue-next";
</script>
