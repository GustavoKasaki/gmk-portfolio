import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles'
import { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import light from './themes/light'
import dark from './themes/dark'

function App() {
  const [isDark, setIsDark] = useState(false)

  function themeChange() {
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Container>
        <GlobalStyle />
        <Sidebar themeChange={themeChange} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
