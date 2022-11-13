import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="shadow-md">
      {/* <h1 className='p-4 text-5xl text-primary text-center font-mulish font-black'>Newsthetic</h1> */}
      <div className='border-b'>
        <img src={logo} alt="" className='m-auto w-[320px] p-4' />
      </div>
      <div className='flex justify-between m-auto w-1/2 py-4 font-bold'>
        <a href="" className='hover:underline'>Home</a>
        <a href="" className='hover:underline'>Entertainment</a>
        <a href="" className='hover:underline'>Olahraga</a>
        <a href="" className='hover:underline'>Bisnis</a>
        <a href="" className='hover:underline'>Sains</a>
        <a href="" className='hover:underline'>Teknologi</a>
        <a href="" className='hover:underline'>Kesehatan</a>
      </div>
    </nav>
  )
}

export default Navbar