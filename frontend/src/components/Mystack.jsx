import React from 'react'
import { SparklesCore } from '../ui/Sparkle'
import { AnimatePresence, motion } from 'motion/react'

const Mystack = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.06,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 6 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeOut" },
        },
    }

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
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:flex items-center justify-center gap-2 w-full md:px-10 lg:px-30"
                    >
                        {[
                            ["/html-5-svgrepo-com.svg", "HTML"],
                            ["/css-3-svgrepo-com.svg", "CSS"],
                            ["/js-svgrepo-com (1).svg", "JavaScript"],
                            ["/typescript-svgrepo-com.svg", "TypeScript"],
                            ["/reactjs-svgrepo-com.svg", "React"],
                            ["/tailwind-svgrepo-com.svg", "Tailwind CSS"],
                        ].map(([icon, label]) => (
                            <motion.p
                                key={label}
                                variants={item}
                                className="flex items-center justify-center rounded-full py-2 px-3 text-md font-sans
      border text-white/70 border-white/20
      transition-all duration-300 hover:scale-[1.04] hover:border-white"
                            >
                                <img src={icon} className="w-6 h-6 mr-1" />
                                {label}
                            </motion.p>
                        ))}
                    </motion.div>

                </AnimatePresence>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:flex flex-wrap items-center justify-center gap-2 py-4 w-full md:px-6 lg:px-20"
                >
                    {[
                        ["/framermotion.svg", "Framer Motion"],
                        ["/asceratinity ui.jpg", "Ascertainity UI"],
                        ["/node-js-svgrepo-com.svg", "Node.js"],
                        ["/express.jpeg", "Express"],
                        ["/mongodb-svgrepo-com.svg", "MongoDB"],
                        ["/github-logo-white-stroke-2a6c.png", "GitHub"],
                        ["/vercel.jpg", "Vercel"],
                    ].map(([icon, label]) => (
                        <motion.p key={label} variants={item} className="badge flex items-center justify-center rounded-full py-2 px-3 text-md font-sans
      border text-white/70 border-white/20
      transition-all duration-300 hover:scale-[1.04] hover:border-white">
                            <img src={icon} className="w-6 h-6 mr-1" />
                            {label}
                        </motion.p>
                    ))}
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:flex items-center justify-center gap-2 w-full md:px-10 lg:px-30"
                >
                    {[
                        ["/postman-icon-svgrepo-com.svg", "Postman"],
                        ["/npm-svgrepo-com.svg", "NPM"],
                        ["/docker-svgrepo-com.svg", "Docker"],
                        ["/redux-svgrepo-com.svg", "Redux"],
                        ["/splash-light.png", "TanStack"],
                        ["/material-ui-svgrepo-com.svg", "MUI"],
                    ].map(([icon, label]) => (
                        <motion.p key={label} variants={item} className="badge flex items-center justify-center rounded-full py-2 px-3 text-md font-sans
      border text-white/70 border-white/20
      transition-all duration-300 hover:scale-[1.04] hover:border-white">
                            <img src={icon} className="w-6 h-6 mr-1" />
                            {label}
                        </motion.p>
                    ))}
                </motion.div>


            </div>

        </div>
    )
}

export default Mystack
