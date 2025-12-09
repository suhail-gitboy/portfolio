import React, { useState ,useEffect} from 'react'
import ButtonsCard from '../ui/Tailwind-button'
import BorderMagicButton from '../ui/Tailwind-button'
import { FloatingDockDemo } from '../components/Navfloatingbut'

import { cn } from "../lib/utils";
import { FollowerPointerCard } from '../ui/Tooltip';
import Menubar from './Menubar';


const Nav = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const TitleComponent = ({
  title,
  avatar,
}) => (
  <div className="flex items-center space-x-2">
    <img
      src="/Ai.webp"
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>Currently working as intern</p>
  </div>
);
  return (
    <div className={`pt-4 pb-1 px-5 md:px-20 lg:px-30 ${scrolled?"bg-white/5 backdrop-blur-sm":"bg-transparent"} fixed  text-white top-0 w-full  z-50`}>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl text-gray-300'>AM.</h1>
        <div className='w-fit h-fit hidden md:flex'>
            <FloatingDockDemo/>
        </div>
       <div className='flex justify-between  items-center space-x-6'>
       <div className='relative'>
             <FollowerPointerCard
        title={
          <TitleComponent
            
          />
        }
      >
        <div className='flex text-xs items-center '>
          
          <p className='w-3 h-3 rounded-full bg-green-500 mr-2'></p>
          web devloper Intern
        </div>
      </FollowerPointerCard>
       </div>
        
         <BorderMagicButton/> 
     

       </div>

      </div>


    </div>
  )
}

export default Nav
