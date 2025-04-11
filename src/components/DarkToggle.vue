<script setup>
import { computed } from 'vue'
import { useDarkModeStore } from '@/stores/darkmode'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const darkModeStore = useDarkModeStore()
const darkMode = computed(() => darkModeStore.darkMode)
const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode()
}
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="fixed right-6 bottom-6 cursor-pointer rounded-full bg-blue-600 p-3 text-white shadow-lg transition hover:bg-blue-500"
    aria-label="Toggle Dark Mode"
  >
    <Transition name="icon" mode="out-in">
      <component :is="darkMode ? SunIcon : MoonIcon" class="h-6 w-6" />
    </Transition>
  </button>
</template>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: all 0.2s ease-in-out;
}
.icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.75);
}
.icon-enter-to {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.icon-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.75);
}
</style>
