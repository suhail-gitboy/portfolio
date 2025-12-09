import React, { useState ,useEffect} from 'react'
import ButtonsCard from '../ui/Tailwind-button'
import BorderMagicButton from '../ui/Tailwind-button'
import { FloatingDockDemo } from '../components/Navfloatingbut'
import { RiMenu3Fill } from "react-icons/ri";
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
const [isNavopen,Setisnavopen]=useState(false)


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

      <div className={`${isNavopen?"translate-x-0 absolute":"translate-x-full"} z-50 bg-neutral-900 top-0 right-0 md:hidden bottom-0 fixed inset-y-0 h-screen  transition-transform duration-300 w-3/4`}>
        <Menubar/>

      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-gray-300'>AM.</h1>
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
        
         <div className="md:flex hidden"><BorderMagicButton/> </div>
     <div className="flex md:hidden" onClick={()=>Setisnavopen(!isNavopen)}>
      <RiMenu3Fill className='text-2xl'/>
     </div>

       </div>

      </div>


    </div>
  )
}

export default Nav
