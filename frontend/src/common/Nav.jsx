import React from 'react'
import ButtonsCard from '../ui/Tailwind-button'
import BorderMagicButton from '../ui/Tailwind-button'
import { FloatingDockDemo } from '../components/Navfloatingbut'

import { cn } from "../lib/utils";


const Nav = () => {
  return (
    <div className='py-6 px-5 md:px-30 bg-transparent absolute top-0 w-full text-white z-50'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl text-gray-300'>AM.</h1>
        <div className='w-fit h-fit hidden md:flex'>
            <FloatingDockDemo/>
        </div>
       <div className='flex justify-between items-center space-x-6'>
        <div className='flex text-xs items-center '>
          <p className='w-3 h-3 rounded-full bg-green-500 mr-2'></p>
          web devloper Intern
        </div>
         <BorderMagicButton/> 
     

       </div>
      </div>
    </div>
  )
}

export default Nav
