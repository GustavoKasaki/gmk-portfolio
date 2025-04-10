<script setup>
import { computed, watch } from 'vue'
import { useDarkModeStore } from '@/stores/darkmode'

import HeaderComp from '@/components/HeaderComp.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import DarkToggle from '@/components/DarkToggle.vue'

const store = useDarkModeStore()
const darkMode = computed(() => store.darkMode)

watch(
  darkMode,
  (isDark) => {
    document.documentElement.classList.toggle('dark', isDark)
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 font-sans text-slate-800 transition-colors duration-500 dark:bg-gray-900 dark:text-white"
  >
    <HeaderComp />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <footer class="py-6 text-center text-sm text-slate-400 dark:text-slate-500">
      Built with 💻 by Gustavo Massatoshi Kasaki
    </footer>
    <DarkToggle />
  </div>
</template>
