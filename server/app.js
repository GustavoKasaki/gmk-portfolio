import express from 'express'
import cors from 'cors'
import reposRoute from './routes/repos.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use('/api/repos', reposRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
