import axios from 'axios'
import {
  languageIconMap,
  frameworkIconMap,
  filterRelevantDependencies,
} from '../../utils/iconMap.js'

import dotenv from 'dotenv'
dotenv.config()

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = 'GustavoKasaki'

// GraphQL query
const query = `
{
  user(login: "${GITHUB_USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          homepageUrl
          languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
}
`

// Verify branch 'main' or 'master'
const getDefaultBranch = async (repoName) => {
  try {
    const res = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    return res.data.default_branch || 'main'
  } catch (err) {
    console.error(`Error fetching default branch for ${repoName}:`, err.message)
    return 'main'
  }
}

// Fetch package.json in repositories (for frameworks and libraries)
const fetchDependencies = async (repoName, branch) => {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/package.json?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const content = Buffer.from(res.data.content, 'base64').toString('utf-8')
    const json = JSON.parse(content)

    const dependencies = Object.keys(json.dependencies || {})
    const devDependencies = Object.keys(json.devDependencies || {})

    const allDeps = [...dependencies, ...devDependencies]
    const filteredDeps = filterRelevantDependencies(allDeps)

    return filteredDeps
  } catch (err) {
    console.warn(`package.json not found or error fetching in ${repoName}:`, err.message)
    return []
  }
}

export const fetchPinnedRepos = async () => {
  if (!GITHUB_TOKEN) {
    console.error('GITHUB_TOKEN not defined.')
    throw new Error('Missing GitHub token')
  }

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const repos = response.data.data.user.pinnedItems.nodes

    const reposWithPreview = await Promise.all(
      repos.map(async (repo) => {
        const branch = await getDefaultBranch(repo.name)
        const frameworks = await fetchDependencies(repo.name, branch)

        return {
          ...repo,
          previewImage: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${branch}/preview.png`,
          frameworks: frameworks.map((name) => ({
            name,
            icon: frameworkIconMap[name] || 'devicon-devicon-plain',
          })),
        }
      }),
    )

    return reposWithPreview.map((repo) => {
      const languageIcons = repo.languages.nodes.map((lang) => ({
        name: lang.name,
        icon: languageIconMap[lang.name] || 'devicon-devicon-plain',
      }))

      return {
        ...repo,
        languages: languageIcons,
      }
    })
  } catch (error) {
    console.error('Error fetching repositories:', error.response?.data || error.message)
    throw new Error('Error fetching repositories')
  }
}
