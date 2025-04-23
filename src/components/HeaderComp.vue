<script>
export default {
  name: 'HeaderComp',
}
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-md transition-colors duration-500 md:flex md:justify-center dark:bg-gray-900"
  >
    <div class="w-full max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between">
      <h1 class="mb-2 text-center text-xl font-bold text-blue-800 md:mb-0 dark:text-blue-400">
        <a href="#"> Gustavo Kasaki </a>
      </h1>
      <nav class="flex justify-between md:block md:space-x-4">
        <a
          href="#about"
          class="text-slate-700 transition-transform hover:underline active:scale-85 md:transform dark:text-slate-300"
          >About</a
        >
        <a
          href="#projects"
          class="text-slate-700 transition-transform hover:underline active:scale-85 dark:text-slate-300"
          >Projects</a
        >
        <a
          href="#skills"
          class="text-slate-700 transition-transform hover:underline active:scale-85 dark:text-slate-300"
          >Skills</a
        >
        <a
          href="#contact"
          class="text-slate-700 transition-transform hover:underline active:scale-85 dark:text-slate-300"
          >Contact</a
        >
      </nav>
    </div>
  </header>
</template>
