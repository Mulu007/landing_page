import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-44 max-w-[1240px] mx-auto px-4'>
      <img className="object-cover relative  border border-gray-100 shadow-xl max-w-xl h-auto" src='https://www.waterford.sz/logos/WKUWCSALogo.png'/>

      <ul className='hidden md:flex cursor-pointer '>
        <li className='p-4 '>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

                  {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden ">
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>  
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-slate-300 ease-in-out duration-500 z-10" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#1e40af] m-4 '>WATERFORD KAMHLABA</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
