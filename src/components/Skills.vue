<script>
export default {
  name: 'Skills',
  setup() {
    const skills = [
      {
        category: 'Languages',
        items: [
          { name: 'HTML', icon: 'devicon-html5-plain colored' },
          { name: 'CSS', icon: 'devicon-css3-plain colored' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
          { name: 'Python', icon: 'devicon-python-plain colored' },
        ],
      },
      {
        category: 'Frameworks & Libraries',
        items: [
          { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
          { name: 'React', icon: 'devicon-react-original colored' },
          { name: 'Redux', icon: 'devicon-redux-original colored' },
          { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        ],
      },
      {
        category: 'Tools & Platforms',
        items: [
          { name: 'Git', icon: 'devicon-git-plain colored' },
          { name: 'GitHub', icon: 'devicon-github-original colored' },
          { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
          { name: 'Vercel', icon: 'devicon-vercel-original colored' },
          { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        ],
      },
    ]

    return { skills }
  },
}
</script>

<template>
  <section
    id="skills"
    class="flex scroll-mt-23 justify-center bg-white px-5 py-10 transition-colors duration-500 md:px-6 md:py-20 lg:px-20 dark:bg-gray-900"
  >
    <div class="w-full max-w-7xl">
      <h3 class="mb-8 text-center text-2xl font-semibold text-blue-600 dark:text-blue-400">
        Skills
      </h3>
      <div class="flex- flex flex-wrap justify-center gap-8">
        <div
          v-for="(group, index) in skills"
          :key="index"
          class="w-full rounded border border-gray-200 bg-white px-2 py-5 shadow transition-all duration-500 md:w-[47%] lg:w-[30%] dark:border-gray-600 dark:bg-gray-700"
        >
          <h4 class="mb-4 text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{ group.category }}
          </h4>
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="skill in group.items"
              :key="skill.name"
              class="flex flex-col items-center text-gray-600 dark:text-gray-300"
            >
              <i :class="skill.icon" class="mb-1 text-3xl" :title="skill.name" />
              <span class="text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
