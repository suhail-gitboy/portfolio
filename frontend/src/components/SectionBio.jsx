import React from 'react'
     import ScrollFloat from '../reactbit/BitTextone';
  import Ribbons from '../ui/Ribbon';
import { SparklesCore } from "../ui/Sparkle";
     import ScrollReveal from '../reactbit/Scroolltwo';
import TextType from '../ui/Texttype';
import { TypewriterEffectSmooth } from "../ui/TYpewriterEffect";
import BorderMagicButton from '../ui/Tailwind-button';
import {cn} from "../lib/utils"
  const words = [
    {
      text: "Skills,",
    },
    {
      text: "Qualifications?",
    },
    {
      text: "Here",
    },
    {
      text: "is My",
    },
    {
      text: "AI agent.",
      className: "text-blue-500  dark:text-blue-500",
    },
  ];

   


const SectionBio = () => {
  return (
    <div className='bg-black h-fit pb-20 text-white relative'>
<div className='absolute top-0 bottom-0 left-0 h-full w-full overflow-hidden z-50'>
  <Ribbons
    baseThickness={20}
    colors={['#7F00FF']}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect={true}
  />

</div>
<div className="pt-10  flex  w-full   justify-center">
 <ScrollFloat
    animationDuration={2}
    ease="back.inOut(2)"
    scrollStart="center bottom+=40%"
    scrollEnd="bottom bottom-=50%"
    stagger={0.03}
    
    textClassName="text-neutral-400 
                   text-6xl text-center"
                   containerClassName=""
  >
    What do you want to know?
  </ScrollFloat>


</div>
{/* 
    <div
      className="mt-20
       w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className="md:text-3xl text-xl mb-2  font-extralight text-center text-white relative z-20">
        Ask my <span className='text-blue-500'>AI-agent</span> For more info!
      </h1>
      <div className="w-[40rem] h-40 relative">
       
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

       
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div> */}
 <div className="relative flex h-[30rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className=" mt-25 flex flex-col  items-center text-xl z-50">

        <div className='flex  justify-between space-x-5'>
  <div>
    
     <div className="   ">
   
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col items-center justify-center md:flex-row space-y-1 md:space-y-0 space-x-0 md:space-x-4">
      <BorderMagicButton/>
     
      </div>
    </div>
  </div>
  <img src="/Ai.webp" className='md:w-70  w-20 h-20 md:h-70 hover:scale-105 transition-all duration-200' alt="" />
</div>
       
      





</div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
    </div>


    </div>
  )
}

export default SectionBio
