import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const nav = useRef(null)
  const logoRef = useRef(null)
  const searchIcon = useRef(null)
  const mobileNav = useRef(null)
  let showMenu = false

  useEffect(() => {
    const scrollFunction = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.current.classList.add('py-2')
        nav.current.classList.remove('py-4')
        logoRef.current.classList.add('w-[200px]')
        logoRef.current.classList.remove('w-[320px]')
        searchIcon.current.classList.add('top-6')
        searchIcon.current.classList.remove('top-8')
      } else {
        nav.current.classList.add('py-4')
        nav.current.classList.remove('py-2')
        logoRef.current.classList.add('w-[320px]')
        logoRef.current.classList.remove('w-[200px]')
        searchIcon.current.classList.add('top-8')
        searchIcon.current.classList.remove('top-6')
      }
    }

    window.onscroll = function () {
      scrollFunction();
    }
  })

  const toggleMenu = () => {
    showMenu = !showMenu

    if (showMenu) {
      mobileNav.current.classList.remove('hidden')
    } else {
      mobileNav.current.classList.add('hidden')
    }
  }

  return (
    <nav className="fixed bg-white w-screen top-0 shadow-md z-10">
      <div className='flex items-center px-4 border-b'>
        <span onClick={() => toggleMenu()} class="md:hidden material-symbols-outlined font-bold text-2xl cursor-pointer">
          menu
        </span>
        <img ref={logoRef} src={logo} alt="" className='hidden md:block m-auto w-[320px] p-4' />
        <img src={logo} alt="" className='md:hidden m-auto w-[200px] p-4' />
        <Link to='/search'>
          <span ref={searchIcon} className="hidden md:block absolute right-8 top-8 material-symbols-outlined font-bold text-2xl cursor-pointer">
            search
          </span>
          <span className="md:hidden absolute right-4 top-5 material-symbols-outlined font-bold text-2xl cursor-pointer">
            search
          </span>
        </Link>
      </div>
      <div ref={nav} className='hidden md:flex justify-between m-auto py-4 w-1/2 md:w-[70%] font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/category/entertainment' className='hover:underline'>Entertainment</Link>
        <Link to='/category/sports' className='hover:underline'>Olahraga</Link>
        <Link to='/category/business' className='hover:underline'>Bisnis</Link>
        <Link to='/category/science' className='hover:underline'>Sains</Link>
        <Link to='/category/technology' className='hover:underline'>Teknologi</Link>
        <Link to='/category/health' className='hover:underline'>Kesehatan</Link>
      </div>
      <div ref={mobileNav} className='md:hidden transition-opacity hidden fixed flex flex-col py-4 w-screen h-screen font-bold text-xl bg-white'>
        <Link to='/' className='hover:underline p-4'>Home</Link>
        <Link to='/category/entertainment' className='hover:underline p-4'>Entertainment</Link>
        <Link to='/category/sports' className='hover:underline p-4'>Olahraga</Link>
        <Link to='/category/business' className='hover:underline p-4'>Bisnis</Link>
        <Link to='/category/science' className='hover:underline p-4'>Sains</Link>
        <Link to='/category/technology' className='hover:underline p-4'>Teknologi</Link>
        <Link to='/category/health' className='hover:underline p-4'>Kesehatan</Link>
      </div>
    </nav >
  )
}

export default Navbar