import { MdArrowForwardIos } from "react-icons/md"
import { InfiniteMovingCardsDemo } from "../Subcompoenets/Infiniteslide"
import { InfiniteMovingCards } from "../ui/Infinitemove"
import { CardSpotlight } from "../ui/Cardsportlight"
import { IconMessage } from "@tabler/icons-react"

import Globedata from "../Subcompoenets/Globedata"


const GridDetails=()=>{
    return(
<div className='py-10 bg-black relative w-full h-auto pb-10 '>
<div className="md:grid md:grid-cols-6 gap-2 text-white h-auto p-3 px-5 md:px-16 lg:px-20">
    {/* left */}
    <div className="col-span-2 bg-neutral-900 h-auto overflow-hidden  p-3 border mb-2 md:mb-0 border-white/10 rounded-md ">
<div className="h-auto w-full p-2">
<h1 className="text-xl mb-1 text-neutral-600">Ai Assistand Developer</h1>
<h1 className="text-md text-gray-200 font-sans">the enthusiastic mindset to build unique projects. </h1>

<div className="mt-10">
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>ameer.suhail init</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>role:fullstack web developer</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>Focus:crafting scalable,modern Web apps</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex flex-col md:flex-row md:items-center "><MdArrowForwardIos className="mr-1"/>Status:available <p className="font-sans mx-1 text-blue-600">for</p>freelance & Full time
    </p>
</div>
<div className="mt-4 w-full flex justify-center items-center h-50 relative overflow-hidden">
 <img src="/docker-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-1" />
  <img src="/js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-2" />
  <img src="/github-142-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-3" />
  <img src="/reactjs-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-4" />
  <img src="/vite.svg" className="w-9 h-9 float-xy float-delay-5" />
  <img src="/tailwind-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-6" />
  <img src="/node-js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-7" />

</div>

<div className="w-full h-70">

</div>
</div>
    </div>

    <div className="col-span-4 flex flex-col gap-2 ">
         <div className="  md:grid grid-cols-2 space-y-2 md:space-y-0 gap-2 ">

            {/* first */}
                    <div className=" bg-neutral-900 w-full overflow-hidden   p-3 border border-white/10 rounded-md  gap-2">
 <CardSpotlight className="h-96 w-full flex flex-col  ">
     <h1 className="text-md text-blue-500 mb-2 z-40">Connect instantly i respond Faster</h1>
      <img src="../../public/IMG_3595.jpg
       " alt="" className="w-2/3  h-40 rounded-md z-40" />
      <div className="text-neutral-200 mt-4 relative z-20">
       
        <p className=" text-sm mt-1 text-gray-500">
         Dm for more:
        </p>
      </div>
      <div className=" mt-7  z-20 font-sans text-gray-300">
      <p className="text-md">91+ 7736777917</p>
      <a href="mailto:yourname@gmail.com" className="flex items-center p-2 px-3 rounded-md mt-2 bg-neutral-800 w-fit"><IconMessage className="mr-1 text-md"/> suhailgti12@gmail.com</a>
    
    
      </div>
    </CardSpotlight>
    </div>     
    {/* second */}
       <div className=" bg-neutral-900 p-3 border border-white/10 rounded-md gap-2 relative overflow-hidden">
       <h1 className="text-lg font-sans text-white/40 font-semibold md:mt-10 lg:mt-0">Remote</h1>
       <h1 className="text-lg mt-2  text-white font-sans font-semibold mb-4">Region:<span className="text-gray-400 text-md font-extralight font-sans">india (Flexible to gulf time Zones)</span></h1>
<Globedata/>
    </div>

    </div>
    {/* bottomright */}
     <div className=" bg-neutral-900 p-3 border border-white/10 rounded-md">
<InfiniteMovingCardsDemo/>
    </div>

    </div>

</div>
</div>
    )
}
export default GridDetails