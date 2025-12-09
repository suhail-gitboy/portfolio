import React from 'react'
import Nav from '../common/Nav'
import Galaxy from '../reactbit/Bg';
import { FlipWords } from '../ui/Flipword';
import GradientText from "../reactbit/Gradient"
import { IoArrowRedoOutline, IoArrowRedoSharp } from "react-icons/io5";
// For a smoother animation, the gradient should start and end with the same color
  import { MdArrowForwardIos } from "react-icons/md";
import { EncryptedText } from '../ui/NewBg';
import { MdAlternateEmail } from "react-icons/md";
import { FaMailchimp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import TextType from  "../ui/Texttype";



const Datas=["UI experience.","Innovations.","Automations.","Productivity."]
const Header = () => {
  const Navigate=useNavigate()
  return (
    <div className='h-screen relative bg-black '>
      <Nav/>
      <div className=' flex justify-center items-center h-full  z-50 pt-40'>
        <div className=" z-50 p-5 md:p-10 flex flex-col items-center">
         <div className="md:px-3 px-1 py-1 flex items-center  rounded-lg  border border-white/10  bg-neutral-800 mb-9" >
          <p className='px-1 rounded-md bg-violet-950 text-white  w-fit mr-2 text-xs '>new</p><p className='font-extralight text-md md:text-lg border-none '><GradientText
olors={[
  "#8B5CF6", // violet (first)
  "#9CA3AF", // gray
  "#FBCFE8", // light rose
  "#9CA3AF", // gray
  "#8B5CF6"  // violet (last)
]}
  animationSpeed={2}
  showBorder={false}
  className="border-none"
>
  projects launched!
</GradientText></p> <MdArrowForwardIos className='text-white/50 ml-2 text-md'/> 
         </div>
        
          <h1 className='text-2xl w-3/5 text-center md:w-auto md:text-start md:text-6xl text-white/80 mb-3'>I make fullstack Apps   with AI <br className='hidden md:block' />to build smarter <i className=' md:text-6xl'>    <FlipWords words={Datas}  /> </i></h1>

          <div className='flex flex-col w-fit space-y-3 p-4rounded-md '>
{/* <p className="mx-auto max-w-lg py-5 text-left">
      <EncryptedText
        text="Ameer suhail,what i have studied,what text stack i know and for more "
        encryptedClassName="text-neutral-500"
        revealedClassName=" text-xl font-light text-gray-400"
        revealDelayMs={30}
      />
    </p> */}
<div className='mb-5 mt-4 flex mx-auto items-center space-x-3 text-white/70'>
<h3 className='text-xl md:text-3xl font-extralight text-center flex items-center space-x-3'><img src="/IMG_4556.jpg" className='w-20 h-20 rounded-full mr-2' alt="" /> Ameer suhail</h3>
  <div><GradientText
  colors = {["#A9A9A9", "#D1D5DB", "#8B5CF6", "#A9A9A9", "#8B5CF6"]}

  animationSpeed={3}
  showBorder={false}
  className="text-xl md:text-3xl"
>
  Fullstack Dev!
</GradientText></div>

</div>

    <div className=' flex mx-auto space-x-3'>
      <button className='flex items-center text-md md:text-xl text-gray-300  border rounded-full px-4 py-2 border-gray-700'>Lets Connect <MdArrowForwardIos className='ml-1'/></button>
      <button onClick={()=>Navigate("/contact")} className='text-gray-400 text-md md:text-lg hover:text-white group transition-colors duration-300 flex items-center'><MdAlternateEmail className='mr-2 text-white group-hover:rotate-180 transition-transform text-lg md:text-3xl duration-300 group-hover:text-violet-600 '/>suhailgti12@gmail.com</button>
    </div>
    
          </div>
        </div>
      </div>
    

<div style={{ position: 'absolute' }} className=" h-full bg-black top-0 left-0 right-0">
<Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={0.4}
    glowIntensity={0.2}
    saturation={0.4}
    hueShift={240}
  />
</div>



    </div>
  )
}

export default Header
