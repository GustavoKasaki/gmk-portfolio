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
        // Add more projects here
      ],
    }
  },
}
</script>

<template>
  <section id="projects" class="py-20 px-6">
    <h3 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">Projects</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white dark:bg-gray-700 shadow p-4 rounded border border-gray-200 dark:border-gray-600 transition-all duration-500 transform hover:scale-105"
      >
        <h4 class="font-semibold text-lg mb-2">{{ project.name }}</h4>
        <p class="text-slate-500 dark:text-slate-300 text-sm">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>
