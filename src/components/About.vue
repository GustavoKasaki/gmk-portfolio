<script>
export default {
  name: 'About',
}
</script>

<template>
  <section
    id="about"
    class="flex justify-center bg-white px-30 py-20 transition-colors duration-500 dark:bg-gray-900"
  >
    <img
      src="@/assets/profile.jpg"
      alt="Profile Picture"
      class="mr-20 block h-70 rounded-full duration-500 ease-in-out dark:hidden"
    />
    <img
      src="@/assets/profile-dark.jpg"
      alt="Dark Profile Picture"
      class="mr-20 hidden h-70 rounded-full duration-500 ease-in-out dark:block"
    />
    <div class="my-auto">
      <h3 class="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">About Me</h3>
      <p class="mx-auto max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
        I am a Full Stack Developer in training at EBAC, with a solid background in mechanical
        engineering and process analysis. Throughout my career, I have developed an analytical,
        results-oriented profile, combined with a quick learning ability and ease in working with
        multidisciplinary teams.
      </p>
      <p class="mx-auto max-w-3xl pt-5 leading-relaxed text-slate-600 dark:text-slate-300">
        Currently, I am transitioning to the technology field, where I have been building responsive
        websites, landing pages, and interactive tools. My initial focus is to work as a front-end
        developer, using technologies such as TypeScript, React, and other modern web development
        tools.
      </p>
    </div>
  </section>
</template>
