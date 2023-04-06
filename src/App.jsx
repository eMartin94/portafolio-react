import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, Skills, Experiencie, Projects, About } from './components'
import { useState } from 'react'
import { ThemeProvider } from './utils/ThemeContext'

function App() {
  // const [isDarkMode, setisDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setisDarkMode(!isDarkMode);
  // };

  return (
    <BrowserRouter>
      {/* <ThemeProvider> */}
        <div className={`relative z-0 bg-tertiary`}>
          <div className='bg-gradient-hero bg-cover bg-fixed'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Skills />
          <Experiencie />
          <Projects />
        </div>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  )
}

export default App
