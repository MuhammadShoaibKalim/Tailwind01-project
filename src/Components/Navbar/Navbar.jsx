import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({sidebar, setSidebar}) => {
  return (
    <div>
        <div className="container py-2 absolute top-0 left-0 right-0 z-20">
            <div className='flex justify-between items-center  text-white'>
                <h1 className='text-4xl font-bold text-white uppercase '>
                    Straw <span className='font-normal'>Berries</span>
                </h1>
                <ul className='md:flex space-x-14 text-xl text-white hidden'>
                    <li>Home </li>
                    <li>Where to find</li>
                    <li>contact</li>
                </ul>
                <div  onClick={()=>setSidebar(!sidebar)}>
                    <GiHamburgerMenu className='text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
