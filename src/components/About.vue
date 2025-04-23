<script>
export default {
  name: 'About',
}
</script>

<template>
  <section
    id="about"
    class="flex scroll-mt-23 justify-center bg-white px-5 py-10 transition-colors duration-500 md:scroll-mt-15 md:px-6 md:py-20 lg:px-30 dark:bg-gray-900"
  >
    <div class="w-full max-w-7xl justify-center lg:flex">
      <img
        src="@/assets/profile.jpg"
        alt="Profile Picture"
        class="mx-auto mb-5 block h-50 rounded-full duration-500 ease-in-out md:mb-10 md:h-70 lg:mx-0 lg:mr-20 lg:mb-0 dark:hidden"
      />
      <img
        src="@/assets/profile-dark.jpg"
        alt="Dark Profile Picture"
        class="mx-auto mb-5 hidden h-50 rounded-full duration-500 ease-in-out md:mb-10 md:h-70 lg:mx-0 lg:mr-20 lg:mb-0 dark:block"
      />
      <div class="my-auto text-center">
        <h3 class="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">About Me</h3>
        <p
          class="text-justify leading-relaxed text-slate-600 md:mx-auto md:max-w-3xl dark:text-slate-300"
        >
          I am a Full Stack Developer in training at EBAC, with a solid background in mechanical
          engineering and process analysis. Throughout my career, I have developed an analytical,
          results-oriented profile, combined with a quick learning ability and ease in working with
          multidisciplinary teams.
        </p>
        <p
          class="mx-auto max-w-3xl pt-5 text-justify leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Currently, I am transitioning to the technology field, where I have been building
          responsive websites, landing pages, and interactive tools. My initial focus is to work as
          a front-end developer, using technologies such as TypeScript, React, and other modern web
          development tools.
        </p>
      </div>
    </div>
  </section>
</template>
