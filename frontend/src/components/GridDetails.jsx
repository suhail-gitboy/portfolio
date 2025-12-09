import { MdArrowForwardIos } from "react-icons/md"
import { InfiniteMovingCardsDemo } from "../Subcompoenets/Infiniteslide"
import { InfiniteMovingCards } from "../ui/Infinitemove"
import { CardSpotlight } from "../ui/Cardsportlight"
import { IconMessage } from "@tabler/icons-react"

const GridDetails=()=>{
    return(
<div className='py-10 bg-black relative w-full h-auto pb-10'>
<div className="md:grid md:grid-cols-6 gap-2 text-white h-auto p-3">
    {/* left */}
    <div className="col-span-2 bg-neutral-900 h-auto  p-3 border mb-2 md:mb-0 border-white/10 rounded-md ">
<div className="h-auto w-full p-2">
<h1 className="text-xl mb-1 text-neutral-600">Ai Assistand Developer</h1>
<h1 className="text-md text-gray-200 font-sans">the enthusiastic mindset to build unique projects. </h1>

<div className="mt-10">
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>ameer.suhail init</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>role:fullstack web developer</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>Focus:crafting scalable,modern Web apps</p>
    <p className="text-gray-400 text-sm mb-1 font-sans flex items-center"><MdArrowForwardIos className="mr-1"/>Status:available <span className="font-sans mx-1 text-blue-600">for</span>freelance & Full time
    </p>
</div>
<div className="mt-4 w-full flex justify-center items-center h-50 relative">
 <img src="/docker-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-1" />
  <img src="/js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-2" />
  <img src="/github-142-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-3" />
  <img src="/reactjs-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-4" />
  <img src="/vite.svg" className="w-9 h-9 float-xy float-delay-5" />
  <img src="/tailwind-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-6" />
  <img src="/node-js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-7" />

</div>
</div>
    </div>

    <div className="col-span-4 flex flex-col gap-2 ">
         <div className="  md:grid grid-cols-2 space-y-2 md:space-y-0 gap-2 ">

            {/* first */}
                    <div className=" bg-neutral-900 w-full   p-3 border border-white/10 rounded-md  gap-2">
 <CardSpotlight className="h-96 w-full flex flex-col  ">
      <img src="
       " alt="" className="w-2/3 h-40" />
      <div className="text-neutral-200 mt-4 relative z-20">
        <h1 className="text-md text-blue-400">Connect instantly i respond Faster</h1>
        <p className=" text-sm mt-1 text-gray-500">
         Dm for more:
        </p>
      </div>
      <div className=" mt-7  z-20 font-sans text-gray-500">
      <p className="text-md">91+ 7736777917</p>
      <p className="flex items-center"><IconMessage className="mr-1 text-md"/> suhailgti12@gmail.com</p>
    
    
      </div>
    </CardSpotlight>
    </div>        <div className=" bg-neutral-900 p-3 border border-white/10 rounded-md gap-2">
gfgfr
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