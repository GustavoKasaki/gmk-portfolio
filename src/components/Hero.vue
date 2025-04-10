<script>
export default {
  name: 'Hero',
}
</script>

<template>
  <section class="py-20 px-6 text-center">
    <h2
      class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 transition-all duration-500"
    >
      Transforming ideas into modern web experiences.
    </h2>
    <p
      class="text-slate-500 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto transition-all duration-500"
    >
      Front-end developer with a background in mechanical engineering, focused on creating
      functional and purposeful digital solutions.
    </p>
    <div class="space-x-4">
      <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition">
        View Projects
      </button>
      <button
        class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition"
      >
        Download CV
      </button>
    </div>
  </section>
</template>
