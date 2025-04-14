import { Router } from 'express'
import dotenv from 'dotenv'
import { fetchPinnedRepos } from '../services/githubService.js'

dotenv.config()
const router = Router()

router.get('/', async (req, res) => {
  try {
    const repos = await fetchPinnedRepos()
    res.json(repos)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pinned repos' })
  }
})

export default router
