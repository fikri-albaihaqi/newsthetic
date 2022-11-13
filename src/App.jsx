import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-mulish'>
      <Navbar />
      <div className='w-[90vw] m-auto'>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
