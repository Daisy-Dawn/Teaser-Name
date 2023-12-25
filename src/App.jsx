import './App.css'
import {Hero, Blog, FAQ, About, Services, Solution, Navbar, Footer} from './components'

function App() {

  return (
    <div className=' bg-black text-white px-20'>
      <Navbar />
      <Hero />
      <Services />
      <Solution />
      <FAQ />
      <About />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
