import React, { useState } from 'react'

import { StickyScroll } from "../ui/Stickyprojects";
import { FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';

// const content = [
//   {
//     title: "Collaborative Editing",
//     url: "https://shopping-cart-pi-ruby.vercel.app/",
//     image: "/Screenshot 2025-12-10 at 7.43.40 PM.png",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Collaborative Editing
//       </div>
//     ),
//     features: [
//       "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
//       "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
//       "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
//       "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
//       "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
//     ], library: [
//       {
//         name: "React",
//         icon: "/reactjs-svgrepo-com.svg"
//       },
//       {
//         name: "Node.js",
//         icon: "/node-js-svgrepo-com.svg"
//       }, {
//         name: "Tailwind.js",
//         icon: "/tailwind-svgrepo-com.svg"
//       },
//       {
//         name: "vite",
//         icon: "/vite.svg"
//       },

//     ]

//   },
//   {
//     title: "Real time changes",
//     url: "https://portfolio-jf7f.vercel.app/",
//     image: "/Screenshot 2025-12-10 at 7.44.27 PM.png",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <img
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//     features: [
//       "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
//       "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
//       "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
//       "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
//       "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
//     ],
//     library: [
//       {
//         name: "React",
//         icon: "/reactjs-svgrepo-com.svg"
//       },
//       {
//         name: "Node.js",
//         icon: "/node-js-svgrepo-com.svg"
//       }, {
//         name: "Tailwind.js",
//         icon: "/tailwind-svgrepo-com.svg"
//       },
//       {
//         name: "vite",
//         icon: "/vite.svg"
//       },

//     ]

//   },
//   {
//     title: "Version control",
//     url: "https://al-resumebuilder.vercel.app/",
//     image: "/Screenshot 2025-12-10 at 7.44.57 PM.png",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
//         Version control
//       </div>
//     ),
//     features: [
//       "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
//       "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
//       "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
//       "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
//       "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
//     ], library: [
//       {
//         name: "React",
//         icon: "/reactjs-svgrepo-com.svg"
//       },
//       {
//         name: "Node.js",
//         icon: "/node-js-svgrepo-com.svg"
//       }, {
//         name: "Tailwind.js",
//         icon: "/tailwind-svgrepo-com.svg"
//       },
//       {
//         name: "vite",
//         icon: "/vite.svg"
//       },

//     ]

//   },
//   {
//     title: "Running out of content",
//     url: "https://lum-task-5.netlify.app/",
//     image: "/Screenshot 2025-12-10 at 7.45.57 PM.png",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Running out of content
//       </div>
//     ),
//     features: [
//       "A smart shopping cart system that auto-updates prices, applies coupons instantly, and saves user carts across devices.",
//       "A hotel booking module that shows real-time room availability, dynamic pricing, and secure reservation confirmation.",
//       "An AI-powered search bar that predicts user intent, suggests results, and learns from previous interactions.",
//       "A user authentication system with OTP login, social sign-in options, and session-based security handling.",
//       "An admin dashboard that tracks analytics, displays traffic insights, and allows real-time content management."
//     ],
//     library: [
//       {
//         name: "React",
//         icon: "/reactjs-svgrepo-com.svg"
//       },
//       {
//         name: "Node.js",
//         icon: "/node-js-svgrepo-com.svg"
//       }, {
//         name: "Tailwind.js",
//         icon: "/tailwind-svgrepo-com.svg"
//       },
//       {
//         name: "vite",
//         icon: "/vite.svg"
//       },

//     ]

//   },
// ];
const content = [
  {
    title: "Full-Stack eCommerce Platform",
    url: "https://shopping-cart-pi-ruby.vercel.app/",
    image: "/Screenshot 2025-12-10 at 7.43.40 PM.png",
    description:
      "A production-ready full-stack eCommerce application featuring a modern React frontend and a secure, scalable backend. Designed to handle real-world shopping flows, payments, and user management.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Full-Stack eCommerce App
      </div>
    ),
    features: [
      "Modern frontend built with React, Tailwind CSS, and Redux for global state management.",
      "Secure backend using Express and MongoDB with authentication and role-based authorization.",
      "Integrated Razorpay for secure online payments and order processing.",
      "Cloudinary integration for optimized product image and media uploads.",
      "Complete shopping flow including cart management, checkout, and order tracking."
    ],
    library: [
      { name: "React", icon: "/reactjs-svgrepo-com.svg" },
      { name: "Redux", icon: "/redux-svgrepo-com.svg" },
      { name: "Node.js", icon: "/node-js-svgrepo-com.svg" },
      { name: "Express.js", icon: "/express-svgrepo-com.svg" },
      { name: "MongoDB", icon: "/mongodb-svgrepo-com.svg" },
      { name: "Tailwind CSS", icon: "/tailwind-svgrepo-com.svg" },
      { name: "Razorpay", icon: "/razorpay-icon.svg" },
      { name: "Cloudinary", icon: "/cloudinary-icon.svg" }
    ]
  },

  {
    title: "AI-Powered Portfolio Website",
    url: "https://portfolio-jf7f.vercel.app/",
    image: "../../public/Screenshot 2025-12-10 at 7.44.27 PM.png",
    description:
      "A personal portfolio showcasing projects and skills, enhanced with a lightweight AI-powered RAG system to deliver intelligent content responses and improved user interaction.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="portfolio demo"
        />
      </div>
    ),
    features: [
      "Frontend built with React and modern UI libraries such as Aceternity UI and React Bits.",
      "Basic AI RAG system to provide contextual and dynamic content responses.",
      "Backend integration for handling intelligent queries and interactions.",
      "Nodemailer integration for contact form and user communication.",
      "Clean, responsive, and animated UI focused on performance and clarity."
    ],
    library: [
      { name: "React", icon: "/reactjs-svgrepo-com.svg" },
      { name: "Node.js", icon: "/node-js-svgrepo-com.svg" },
      { name: "Tailwind.js", icon: "/tailwind-svgrepo-com.svg" },
      { name: "Vite", icon: "/vite.svg" }
    ]
  },

  {
    title: "AI Resume Builder",
    url: "https://al-resumebuilder.vercel.app/",
    image: "/Screenshot 2025-12-10 at 7.44.57 PM.png",
    description:
      "An AI-driven resume builder that helps users generate professional resumes and cover letters using intelligent content summarization and multiple design templates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        AI Resume Builder
      </div>
    ),
    features: [
      "Integrated Google Gemini AI for resume summarization and content generation.",
      "Support for multiple resume templates with dynamic data rendering.",
      "Cover letter generation tailored to user profiles and roles.",
      "JWT-based authentication with secure session handling.",
      "Global state management using React Context and responsive UI with Tailwind CSS."
    ],
    library: [
      { name: "React", icon: "/reactjs-svgrepo-com.svg" },
      { name: "Node.js", icon: "/node-js-svgrepo-com.svg" },
      { name: "Tailwind.js", icon: "/tailwind-svgrepo-com.svg" },
      { name: "Vite", icon: "/vite.svg" }
    ]
  },

  {
    title: "Tailwind UI Landing Page Platform",
    url: "https://lum-task-5.netlify.app/",
    image: "/Screenshot 2025-12-10 at 7.45.57 PM.png",
    description:
      "A Tailwind CSS–based platform focused on building and selling high-conversion landing pages with reusable components and a modern design system.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Tailwind UI Platform
      </div>
    ),
    features: [
      "Pre-built landing page sections optimized for marketing and SaaS products.",
      "Reusable Tailwind UI components with consistent design patterns.",
      "Fully responsive layouts optimized for all screen sizes.",
      "Performance-focused implementation with minimal dependencies.",
      "Designed for startups, product launches, and digital campaigns."
    ],
    library: [
      { name: "React", icon: "/reactjs-svgrepo-com.svg" },
      { name: "Tailwind.js", icon: "/tailwind-svgrepo-com.svg" },
      { name: "Vite", icon: "/vite.svg" }
    ]
  }
];



const Myprojects = () => {

  const [open, setOpen] = useState(null)
  return (
    <div id='project' className='pt-5 bg-black'>
      <motion.p initial={{ opacity: 1, y: 13 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='text-2xl md:text-4xl text-neutral-400 text-center py-3'>code meets creativity</motion.p>
      <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className='text-5xl md:text-8xl pb-8 text-center text-white'>Crafted <span className=' bg-linear-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text'>Projects</span></motion.p>
      <div className='px-4 md:px-6 lg:px-10 pt-10'>
        <div className="w-full py-4 ">
          <div className='hidden md:flex'>
            <StickyScroll content={content} />
          </div>
          <AnimatePresence mode='wait'>
            <div className='flex flex-col gap-10 md:hidden'>
              {
                content.map((data, key) => (
                  <motion.div key={key}
                    initial={{ opacity: 0, y: 60, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} className='text-white rounded-b-2xl '>
                    <img src={data.image} loading='lazy' alt="" className='w-full h-75 rounded-t-2xl object-cover' />
                    <div className='py-6 px-4 bg-blue-900/60 rounded-b-2xl '>
                      <h1 className='text-2xl py-2'>{data.title}</h1>
                      <p className='text-gray-400 text-sm font-sans mb-2'>details</p>
                      {/* icons */}
                      <div
                        className="text-sm py-2 font-sans flex flex-row flex-wrap gap-1 space-x-1 p-2 w-full text-slate-300">{
                          data.library.map((data, key) => (
                            <div key={key} className=" border border-white/40 py-2 rounded-full px-4 bg-black flex items-center text-sm pb-2 font-sans ">
                              <img src={data.icon} loading='lazy' className="w-5 h-5 mr-1" alt="" />
                              <p className="text-sm">{data.name}</p>
                            </div>
                          ))

                        }

                      </div>
                      <div className='py-3'>

                      </div>
                      <div className="w-full p-4  text-white rounded-xl">
                        <button
                          onClick={() => key !== open ? setOpen(key) : setOpen(null)}
                          className="text-sm px-4 py-2 bg-white/10 font-sans rounded-md hover:bg-white/20 transition"
                        >
                          {open ? "View Less" : "View More"}
                        </button>

                        <AnimatePresence>
                          {open == key && (
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
                                  data.features.map((datasec, key) => (
                                    <li key={key} className="list-none text-xs pb-3 font-sans "><span className={` mr-1 text-xl`}>+</span> {datasec}</li>
                                  ))

                                }


                              </p>

                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* for acodian */}
                      <a href={data.url} className='w-full font-sans rounded-xl py-2 bg-white/30 flex items-center justify-center hover:bg-white/40'>View project <FaArrowRight className=' ml-2' /></a>
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
