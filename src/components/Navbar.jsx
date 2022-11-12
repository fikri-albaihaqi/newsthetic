import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="shadow-md">
      {/* <h1 className='p-4 text-5xl text-primary text-center font-mulish font-black'>Newsthetic</h1> */}
      <img src={logo} alt="" className='m-auto w-[320px] p-4' />
      <div className='flex justify-between border-t py-4 px-40 font-bold'>
        <a href="" className='hover:underline'>Home</a>
        <a href="" className='hover:underline'>Terpopuler</a>
        <a href="" className='hover:underline'>Olahraga</a>
        <a href="" className='hover:underline'>Otomotif</a>
        <a href="" className='hover:underline'>Gaya Hidup</a>
        <a href="" className='hover:underline'>Ekonomi</a>
        <a href="" className='hover:underline'>Dunia</a>
        <a href="" className='hover:underline'>Kesehatan</a>
        <a href="" className='hover:underline'>Teknologi</a>
      </div>
    </nav>
  )
}

export default Navbar