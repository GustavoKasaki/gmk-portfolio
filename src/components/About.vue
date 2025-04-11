<script>
export default {
  name: 'About',
}
</script>

<template>
  <section
    id="about"
    class="flex justify-center bg-white px-30 py-30 transition-colors duration-500 dark:bg-gray-900"
  >
    <img
      src="@/assets/profile.jpg"
      alt="Profile Picture"
      class="mx-auto block h-70 rounded-full duration-500 ease-in-out dark:hidden"
    />
    <img
      src="@/assets/profile-dark.jpg"
      alt="Dark Profile Picture"
      class="mx-auto hidden h-70 rounded-full duration-500 ease-in-out dark:block"
    />
    <div class="my-auto">
      <h3 class="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">About Me</h3>
      <p class="mx-auto max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
        I'm a front-end developer with a background in mechanical engineering. Passionate about
        building accessible, responsive, and user-centered applications. I love turning complex
        problems into elegant and performant web solutions.
      </p>
    </div>
  </section>
</template>
