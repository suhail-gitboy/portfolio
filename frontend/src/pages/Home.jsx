import React, { useEffect, useState, lazy } from 'react'
import Header from '../components/Header'
import SectionBio from '../components/SectionBio'
import { useLocation } from 'react-router'

const GridDetails = lazy(() => import('../components/GridDetails'))
const Myprojects = lazy(() => import('../components/Myprojects'))
const Mystack = lazy(() => import('../components/Mystack'))
const WorkExperience = lazy(() => import('../components/Work'))
import { SiMinutemailer } from "react-icons/si";
import Watiprovide from '../components/Watiprovide'
import AImodal from '../components/AImodal'
import { AnimatePresence } from 'motion/react'
import BeamManualDemo from '../components/Techavatars'
import { TextAnimate } from '../ui/UI'
const Home = () => {

  const [Almodal, Setaimodal] = useState(false
  )
  const [timer, Settime] = useState(true)
  const { pathname } = useLocation()


  useEffect(() => {
    setTimeout(() => {
      Settime(false)

    }, 1000);

  }, [])
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className='bg-black'>
      <Header />
      <div className="pt-45">

        <div className="flex justify-center items-center">

          <TextAnimate
            as="p"
            by="word"
            delay={0.2}
            className="text-white text-2xl mt-2"
          >
            The Ecosystem I Work In
          </TextAnimate>


        </div>
        <BeamManualDemo />
      </div>
      <GridDetails />
      <Myprojects />
      <Mystack />
      <WorkExperience />
      <Watiprovide />

      <div className="fixed z-50 right-4 bottom-6 ">
        <div onClick={() => Setaimodal(!Almodal)} className="flex items-center  rounded-full py-2 px-2 bg-linear-to-br text-sm text-white from-blue-600 to-rose-600 font-sans  shadow-3xl shadow-violet-600">

          <p
            className={`
        overflow-hidden whitespace-nowrap
        transition-all duration-900 ease-in-out
        ${timer == true ? "max-w-sm opacity-100" : "max-w-0 opacity-0"}
        
         font-sans
      `}
          >
            Ask about me
          </p>

          <SiMinutemailer onClick={() => Setaimodal(!Almodal)} className={`text-xl md:text-3xl  duration-700 transition-all ${Almodal == true ? "rotate-360" : "rotate-0"} `} />
        </div>
      </div>
      <AnimatePresence>


        {
          Almodal && <AImodal Setaimodal={Setaimodal} />
        }
      </AnimatePresence>
    </div>
  )
}

export default Home
