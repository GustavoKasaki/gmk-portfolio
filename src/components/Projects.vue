<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Relevant Projects',
  setup() {
    const repos = ref([])
    let isLoading = ref(true)

    const fetchRepos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/repos')
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        const data = await response.json()
        repos.value = data
          .filter((repo) => !repo.fork) // remove forked repos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // order by recent
      } catch (error) {
        console.error('Error fetching repositories: ', error)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      fetchRepos()
    })

    return {
      repos,
      isLoading,
    }
  },
}
</script>

<template>
  <section
    id="projects"
    class="bg-gray-100 px-20 py-20 text-center transition-colors duration-500 dark:bg-gray-800"
  >
    <h3 class="mb-8 text-2xl font-semibold text-blue-600 dark:text-blue-400">Relevant Projects</h3>
    <div v-if="isLoading" class="text-center text-slate-500 dark:text-slate-300">
      Loading projects...
    </div>
    <div v-else-if="repos.length == 0" class="text-center text-slate-500 dark:text-slate-300">
      Failed fetching repositories
    </div>
    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="transform rounded border border-gray-200 bg-white p-4 shadow transition-all duration-500 hover:scale-105 dark:border-gray-600 dark:bg-gray-700"
      >
        <h4 class="mb-2 text-lg font-semibold">{{ repo.name }}</h4>
        <img :src="repo.previewImage" alt="Preview" class="w-75" />
        <p class="text-sm text-slate-500 dark:text-slate-300">{{ repo.description }}</p>
      </div>
    </div>
  </section>
</template>
