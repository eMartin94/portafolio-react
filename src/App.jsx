import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero } from './components'
import Skills from './components/Skills'
import Experiencie from './components/Experiencie'
import Projects from './components/Projects'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-tertiary'>
        <div className='bg-gradient-hero bg-cover bg-fixed'>
          <Navbar />
          <Hero />
        </div>
        <Skills />
        <Experiencie />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App
