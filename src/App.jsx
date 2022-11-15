import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import NewsCategory from './components/NewsCategory'
import Search from './components/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='relative min-h-screen font-mulish'>
        <Navbar />
        <div className='w-[90vw] m-auto'>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<NewsCategory />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
