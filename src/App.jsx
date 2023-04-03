import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero } from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative bg-teal-500'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
