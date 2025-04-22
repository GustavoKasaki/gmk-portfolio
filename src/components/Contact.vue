<script>
export default {
  name: 'ContactForm',
}
</script>

<template>
  <section
    id="contact"
    class="flex justify-center bg-gray-100 px-6 py-20 text-center transition-colors duration-500 dark:bg-gray-800"
  >
    <div class="w-full max-w-7xl">
      <h3 class="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">Let’s Connect!</h3>
      <div class="flex justify-center gap-8 text-5xl text-gray-700 dark:text-gray-200">
        <a
          href="mailto:gmkasaki@gmail.com"
          target="_blank"
          rel="noopener"
          class="transition-transform hover:scale-130"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a
          href="https://github.com/GustavoKasaki"
          target="_blank"
          rel="noopener"
          class="transition-transform hover:scale-130"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://linkedin.com/in/GustavoKasaki"
          target="_blank"
          rel="noopener"
          class="transition-transform hover:scale-130"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
  </section>
</template>
