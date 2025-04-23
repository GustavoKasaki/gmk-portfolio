<script>
import { ref, onMounted } from 'vue'
import DotLoader from './DotLoader.vue'

export default {
  name: 'Relevant Projects',
  components: {
    DotLoader,
  },
  setup() {
    const repos = ref([])
    let isLoading = ref(true)

    const fetchRepos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/repos`)
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
    class="flex scroll-mt-23 justify-center bg-gray-100 px-5 py-10 text-center transition-colors duration-500 md:scroll-mt-0 md:px-6 md:py-20 lg:px-20 dark:bg-gray-800"
  >
    <div class="w-full max-w-7xl">
      <h3 class="mb-8 text-2xl font-semibold text-blue-600 dark:text-blue-400">
        Relevant Projects
      </h3>
      <div v-if="isLoading" class="p-20 text-center text-slate-500 dark:text-slate-300">
        <DotLoader />
      </div>
      <div v-else-if="repos.length == 0" class="text-center text-slate-500 dark:text-slate-300">
        Failed fetching repositories
      </div>
      <div v-else class="grid h-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="flex transform flex-col rounded border border-gray-200 bg-white p-4 shadow transition-all duration-500 hover:scale-105 dark:border-gray-600 dark:bg-gray-700"
        >
          <h4 class="text-md mb-2 font-semibold">{{ repo.description }}</h4>
          <img
            :src="repo.previewImage"
            alt="Preview"
            class="mb-3 w-full border-1 border-gray-300 shadow-md"
          />
          <div id="columns" class="mt-auto flex h-auto flex-grow">
            <div id="1st-column" class="w-2/3 pr-2">
              <h5>Technologies used:</h5>
              <div class="mt-3 flex flex-wrap justify-center gap-2">
                <i
                  v-for="fw in repo.frameworks"
                  :key="fw.name"
                  :class="fw.icon"
                  class="text-4xl"
                  :title="fw.name"
                />
                <i
                  v-for="lang in repo.languages"
                  :key="lang.name"
                  :class="lang.icon"
                  class="text-4xl"
                  :title="lang.name"
                />
              </div>
            </div>
            <div id="2nd-column" class="flex w-1/3 flex-col items-center justify-center gap-2">
              <button
                class="w-full cursor-pointer rounded border border-blue-600 py-2 text-blue-600 transition-transform duration-500 ease-in-out hover:bg-blue-200 active:scale-85 md:transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-600 dark:hover:text-blue-100"
              >
                <a :href="repo.url"> View on GitHub </a>
              </button>
              <button
                class="w-full cursor-pointer rounded border border-blue-600 py-2 text-blue-600 transition-transform duration-500 ease-in-out hover:bg-blue-200 active:scale-85 md:transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-600 dark:hover:text-blue-100"
              >
                <a :href="repo.homepageUrl"> View demo </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
