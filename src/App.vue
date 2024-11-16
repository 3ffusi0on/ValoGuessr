<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden"
  >
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// No script needed
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: scale(1.1) translateY(-10px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}
</style>
