<script>
export default {
  name: 'HeaderComp',
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-center bg-white shadow-md transition-colors duration-500 dark:bg-gray-900"
  >
    <div class="flex w-full max-w-7xl items-center justify-between px-6 py-4">
      <h1 class="text-xl font-bold text-blue-800 dark:text-blue-400">Gustavo Kasaki</h1>
      <nav class="space-x-4">
        <a href="#about" class="text-slate-700 hover:underline dark:text-slate-300">About</a>
        <a href="#projects" class="text-slate-700 hover:underline dark:text-slate-300">Projects</a>
        <a href="#skills" class="text-slate-700 hover:underline dark:text-slate-300">Skills</a>
        <a href="#contact" class="text-slate-700 hover:underline dark:text-slate-300">Contact</a>
      </nav>
    </div>
  </header>
</template>
