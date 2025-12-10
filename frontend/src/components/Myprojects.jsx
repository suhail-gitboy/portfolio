import React from 'react'

import { StickyScroll } from "../ui/Stickyprojects";
 
 
const content = [
  {
    title: "Collaborative Editing",
    url:"https://shopping-cart-pi-ruby.vercel.app/",
    image:"../../public/Screenshot 2025-12-10 at 7.43.40 PM.png",
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
        icon:"../../public/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"../../public/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"../../public/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"../../public/vite.svg"
    },
    
 ]

  },
  {
    title: "Real time changes",
    url:"https://portfolio-jf7f.vercel.app/",
      image:"../../public/Screenshot 2025-12-10 at 7.44.27 PM.png",
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
        icon:"../../public/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"../../public/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"../../public/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"../../public/vite.svg"
    },
    
 ]

  },
  {
    title: "Version control",
    url:"https://al-resumebuilder.vercel.app/",
      image:"../../public/Screenshot 2025-12-10 at 7.44.57 PM.png",
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
        icon:"../../public/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"../../public/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"../../public/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"../../public/vite.svg"
    },
    
 ]

  },
  {
    title: "Running out of content",
    url:"https://lum-task-5.netlify.app/",
      image:"../../public/Screenshot 2025-12-10 at 7.45.57 PM.png",
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
        icon:"../../public/reactjs-svgrepo-com.svg"
    },
    {
        name:"Node.js",
        icon:"../../public/node-js-svgrepo-com.svg"
    },{
        name:"Tailwind.js",
        icon:"../../public/tailwind-svgrepo-com.svg"
    },
    {
        name:"vite",
        icon:"../../public/vite.svg"
    },
    
 ]

  },
];



const Myprojects = () => {
  return (
    <div className='mt-20 bg-black'>
        <p className='text-2xl text-neutral-400 text-center py-3'>code meets creativity</p>
        <p className='text-6xl pb-8 text-center text-white'>Crafted <span className=' bg-linear-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text'>Projects</span></p>
<div className='px-5 md:px-9 lg:px-16 pt-10'>
    <div className="w-full py-4 ">
     <div className='hidden md:flex'>
         <StickyScroll content={content} />
     </div>
    </div>
</div>
      
    </div>
  )
}

export default Myprojects
