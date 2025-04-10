<script>
export default {
  name: 'HeaderComp',
}
</script>

<template>
  <header
    class="bg-white dark:bg-gray-900 shadow-md transition-colors duration-500 sticky top-0 z-50"
  >
    <div class="py-4 px-6 flex justify-between items-center">
      <h1 class="text-xl font-bold text-blue-800 dark:text-blue-400">Gustavo Kasaki</h1>
      <nav class="space-x-4">
        <a href="#about" class="text-slate-700 dark:text-slate-300 hover:underline">About</a>
        <a href="#projects" class="text-slate-700 dark:text-slate-300 hover:underline">Projects</a>
        <a href="#skills" class="text-slate-700 dark:text-slate-300 hover:underline">Skills</a>
        <a href="#contact" class="text-slate-700 dark:text-slate-300 hover:underline">Contact</a>
      </nav>
    </div>
  </header>
</template>
