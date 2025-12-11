import React, { useState } from 'react'

import { StickyScroll } from "../ui/Stickyprojects";
import { FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';

const content = [
  {
    title: "Collaborative Editing",
    url:"https://shopping-cart-pi-ruby.vercel.app/",
    image:"/Screenshot 2025-12-10 at 7.43.40 PM.png",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
    features :[
  "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
  "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
  "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
  "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
  "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
], library:[
    {
        name:"React",
        icon:"/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"/vite.svg"
    },
    
 ]

  },
  {
    title: "Real time changes",
    url:"https://portfolio-jf7f.vercel.app/",
      image:"/Screenshot 2025-12-10 at 7.44.27 PM.png",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
     features :[
  "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
  "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
  "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
  "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
  "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
],
 library:[
    {
        name:"React",
        icon:"/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"/vite.svg"
    },
    
 ]

  },
  {
    title: "Version control",
    url:"https://al-resumebuilder.vercel.app/",
      image:"/Screenshot 2025-12-10 at 7.44.57 PM.png",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
     features :[
  "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
  "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
  "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
  "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
  "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
], library:[
    {
        name:"React",
        icon:"/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"/vite.svg"
    },
    
 ]

  },
  {
    title: "Running out of content",
    url:"https://lum-task-5.netlify.app/",
      image:"/Screenshot 2025-12-10 at 7.45.57 PM.png",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
     features :[
  "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
  "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
  "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
  "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
  "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
],
 library:[
    {
        name:"React",
        icon:"/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"/vite.svg"
    },
    
 ]

  },
];



const Myprojects = () => {

    const [open,setOpen]=useState(null)
  return (
    <div className='pt-20 bg-black'>
        <motion.p initial={{opacity:1 ,y:13 }} whileInView={{opacity:1,y:0}} transition={{duration:0.4}}  className='text-2xl md:text-4xl text-neutral-400 text-center py-3'>code meets creativity</motion.p>
        <motion.p initial={{opacity:0 ,y:18 }} whileInView={{opacity:1,y:0}}  transition={{duration:0.8, delay:0.4}} className='text-5xl md:text-8xl pb-8 text-center text-white'>Crafted <span className=' bg-linear-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text'>Projects</span></motion.p>
<div className='px-4 md:px-6 lg:px-10 pt-10'>
    <div className="w-full py-4 ">
     <div className='hidden md:flex'>
         <StickyScroll content={content} />
     </div>
   <AnimatePresence mode='wait'>
      <div className='flex flex-col gap-10 md:hidden'>
        {
            content.map((data,key)=>(
                <motion.div   key={key}
    initial={{ opacity: 0, y: 60, scale: 0.98 }}
   whileInView={{ opacity: 1, y: 0 ,scale:1}}
viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }} className='text-white rounded-b-2xl '>
            <img src={data.image} alt=""  className='w-full h-75 rounded-t-2xl object-cover' />
            <div className='py-6 px-4 bg-blue-900/60 rounded-b-2xl '>
         <h1 className='text-2xl py-2'>{data.title}</h1>
         <p className='text-gray-400 text-sm font-sans mb-2'>details</p>
         {/* icons */}
                            <div
              className="text-sm py-2 font-sans flex flex-row flex-wrap gap-1 space-x-1 p-2 w-full text-slate-300">{
                    data.library.map((data,key)=>(
                        <div key={key} className=" border border-white/40 py-2 rounded-full px-4 bg-black flex items-center text-sm pb-2 font-sans ">
<img src={data.icon} className="w-5 h-5 mr-1" alt="" />
<p className="text-sm">{data.name}</p>
                        </div>
                    ))

                }
                
              </div>
    <div className='py-3'>
     
    </div>
<div className="w-full p-4  text-white rounded-xl">
      <button
        onClick={() =>key!==open? setOpen(key):setOpen(null)}
        className="text-sm px-4 py-2 bg-white/10 font-sans rounded-md hover:bg-white/20 transition"
      >
        {open ? "View Less" : "View More"}
      </button>

      <AnimatePresence>
        {open==key && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            <p className="py-2 text-sm text-gray-300 font-sans">{data.description}</p>
            <p className="text-white text-xl mb-2 font-sans leading-6">
            keyFeatures:
            {
                    data.features.map((datasec,key)=>(
                        <li key={key} className="list-none text-xs pb-3 font-sans "><span className={` mr-1 text-xl`}>+</span> {datasec}</li>
                    ))

                }
                

            </p>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
          
          {/* for acodian */}
          <a href={data.url} className='w-full font-sans rounded-xl py-2 bg-white/30 flex items-center justify-center hover:bg-white/40'>View project <FaArrowRight className=' ml-2'/></a>
            </div>
        </motion.div>
            ))
        }
     </div>
   </AnimatePresence>
    </div>
</div>
      
    </div>
  )
}

export default Myprojects
