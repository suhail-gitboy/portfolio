import React from 'react'
import { SparklesCore } from '../ui/Sparkle'
import { AnimatePresence, motion } from 'motion/react'

const Mystack = () => {
    return (
        <div className='pt-40 pb-30'>



            <div>
                <AnimatePresence>
                    <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                        <motion.h1 initial={{ opacity: 0, y: 7 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                            My Techstack
                        </motion.h1>
                        <div className="w-[40rem] h-30 relative">
                            {/* Gradients */}
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                            {/* Core component */}
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={1200}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />

                            {/* Radial Gradient to prevent sharp edges */}
                            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>
            <div className='-mt-10 px-4 flex flex-col justify-center items-center'>
                <AnimatePresence>
                    <div className="grid grid-cols-2 md:flex items-center justify-center gap-2 w-full md:px-10 lg:px-30 ">

                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/html-5-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Html</motion.p>
                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/css-3-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />css</motion.p>
                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/js-svgrepo-com (1).svg" alt="" className='w-6 h-6 mr-1' />Javascript</motion.p>
                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/typescript-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Typescript</motion.p>
                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/reactjs-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />React js</motion.p>
                        <motion.p initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 text-nowrap hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/tailwind-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Tailwind css</motion.p>




                    </div>
                </AnimatePresence>
                <div className="grid grid-cols-2 gap-2 md:flex items-center justify-center flex-wrap py-4 md:gap-6 w-full md:px-6 lg:px-20">
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/framermotion.svg" alt="" className='w-6 h-6 mr-1' />Framer-motion</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/asceratinity ui.jpg" alt="" className='w-6 h-6 mr-1' />Ascertainity-ui</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/node-js-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Node-js</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/express.jpeg" alt="" className='w-6 h-6 mr-1' />Express</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/mongodb-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />MongoDB</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 text-nowrap hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/github-logo-white-stroke-2a6c.png" alt="" className='w-6 h-6 mr-1' />github</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 text-nowrap hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/vercel.jpg" alt="" className='w-6 h-6 mr-1' />Vercel</p>




                </div>
                <div className="grid grid-cols-2 md:flex items-center justify-center gap-2 w-full md:px-10 lg:px-30 ">
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/postman-icon-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />postman</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/npm-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Npm</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/docker-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Docker</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/redux-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Redux </p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/splash-light.png" alt="" className='w-6 h-6 mr-1' />Tanstack</p>
                    <p className='flex items-center justify-center rounded-full py-2 px-3 text-md font-sans hover:scale-102 text-nowrap hover:rotate-5 hover:border-white transition-all duration-300 border text-white/70 border-white/20 '><img src="/material-ui-svgrepo-com.svg" alt="" className='w-6 h-6 mr-1' />Mui</p>




                </div>

            </div>

        </div>
    )
}

export default Mystack
