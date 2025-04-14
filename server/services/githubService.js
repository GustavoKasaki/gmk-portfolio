import axios from 'axios'

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

// verify branch 'main' or 'master'
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
    console.error(`Erro ao buscar default branch de ${repoName}:`, err.message)
    return 'main'
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

        return {
          ...repo,
          previewImage: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${branch}/preview.png`,
        }
      }),
    )

    return reposWithPreview
  } catch (error) {
    console.error('Error fetching repositories:', error.response?.data || error.message)
    throw new Error('Error fetching repositories')
  }
}
