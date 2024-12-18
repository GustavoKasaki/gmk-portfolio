import React from 'react'
import GlobalStyle from './styles'
import { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
