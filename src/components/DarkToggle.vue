<script setup>
import { computed } from 'vue'
import { useDarkModeStore } from '@/stores/darkMode'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const store = useDarkModeStore()
const darkMode = computed(() => store.darkMode)
const toggleDarkMode = () => store.toggleDarkMode()
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="fixed right-6 bottom-6 rounded-full bg-blue-600 p-3 text-white shadow-lg transition hover:bg-blue-500"
    aria-label="Toggle Dark Mode"
  >
    <component :is="darkMode ? SunIcon : MoonIcon" class="h-6 w-6" />
  </button>
</template>
