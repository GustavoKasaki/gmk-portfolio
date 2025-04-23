<script>
import { VueWriter } from 'vue-writer'

export default {
  name: 'Hero',
  components: { VueWriter },
}
</script>

<template>
  <section
    class="bg-gray-100 px-6 py-30 text-center transition-colors duration-500 dark:bg-gray-800"
  >
    <VueWriter
      :array="['Transforming ideas into modern web experiences.']"
      :iterations="1"
      :typeSpeed="80"
      :caret="cursor"
      class="mb-4 h-30 text-4xl font-bold text-blue-600 transition-all duration-500 md:mx-6 md:h-20 lg:h-auto dark:text-blue-400"
    />
    <p
      class="mx-auto mb-8 max-w-2xl text-lg text-slate-500 transition-all duration-500 dark:text-slate-300"
    >
      Front-end developer with a background in mechanical engineering, focused on creating
      functional and purposeful digital solutions.
    </p>
    <div class="space-x-4">
      <button
        class="cursor-pointer rounded border border-blue-600 px-6 py-2 text-blue-600 transition-transform duration-500 ease-in-out hover:bg-blue-200 active:scale-85 md:transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700"
      >
        <a
          href="https://drive.google.com/file/d/1a7CPaih8AYOwYpJdOYRXEHuDTMJ0IVEq/view?usp=drive_link"
        >
          Download CV
        </a>
      </button>
    </div>
  </section>
</template>

<style>
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: gray;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}
@keyframes blink {
  49% {
    background-color: gray;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
