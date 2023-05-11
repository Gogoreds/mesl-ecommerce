import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav ] = useState(false)

const handleNav = () =>{
  setNav(!nav)
}

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#6939bb]'>
      <h1 className='w-full text-3xl font-bold text-[#6939bb] flex flex-start'>MESL.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Rescources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>


      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu  size={20} /> :  <AiOutlineClose size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full b-[#6939bb] bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>

        <h1 className='w-full text-3xl font-bold text-[#6939bb]] m-4'>MESL.</h1>

        <li className='p-4 border-b border-[#6939bb]'>Home</li>
        <li className='p-4 border-b border-[#6939bb]'>Company</li>
        <li className='p-4 border-b border-[#6939bb]'>Rescources</li>
        <li className='p-4 border-b border-[#6939bb]'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
 
  )
}

export default Navbar