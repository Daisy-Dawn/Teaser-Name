import './App.css'
import {Hero, Blog, FAQ, About, Services, Solution, Navbar, Footer} from './components'

function App() {

  return (
    <div className=' bg-black text-white lg:px-20 px-5 '>
      <Navbar />
      <Hero />
      <Services />
      <Solution />
      <FAQ />
      {/* <About /> */}
      <Blog />
      <Footer />
    </div>
  )
}

export default App
