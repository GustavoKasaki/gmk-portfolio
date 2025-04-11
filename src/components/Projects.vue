<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Project Name',
          description: 'Brief description of the project and tech stack.',
        },
        {
          id: 2,
          name: 'Project Name',
          description: 'Brief description of the project and tech stack.',
        },
        {
          id: 3,
          name: 'Project Name',
          description: 'Brief description of the project and tech stack.',
        },
      ],
    }
  },
}
</script>

<template>
  <section
    id="projects"
    class="bg-gray-100 px-6 py-40 text-center transition-colors duration-500 dark:bg-gray-800"
  >
    <h3 class="mb-8 text-2xl font-semibold text-blue-600 dark:text-blue-400">Projects</h3>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="transform rounded border border-gray-200 bg-white p-4 shadow transition-all duration-500 hover:scale-105 dark:border-gray-600 dark:bg-gray-700"
      >
        <h4 class="mb-2 text-lg font-semibold">{{ project.name }}</h4>
        <p class="text-sm text-slate-500 dark:text-slate-300">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>
