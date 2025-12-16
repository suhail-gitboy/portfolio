import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SectionBio from '../components/SectionBio'
import GridDetails from '../components/GridDetails'
import Myprojects from '../components/Myprojects'
import { useLocation } from 'react-router'
import Mystack from '../components/Mystack'
import WorkExperience from '../components/Work'
import { SiMinutemailer } from "react-icons/si";
import Watiprovide from '../components/Watiprovide'
import AImodal from '../components/AImodal'
import { AnimatePresence } from 'motion/react'
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
      <SectionBio Setaimodal={Setaimodal} />
      <GridDetails />
      <Myprojects />
      <Mystack />
      <WorkExperience />
      <Watiprovide />

      <div className="fixed z-50 right-4 bottom-6 ">
        <div onClick={() => Setaimodal(!Almodal)} className="flex items-center  rounded-full py-2 px-2 bg-white text-black font-sans  shadow-3xl shadow-violet-600">

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

          <SiMinutemailer onClick={() => Setaimodal(!Almodal)} className={`text-3xl  duration-700 transition-all ${Almodal == true ? "rotate-360" : "rotate-0"} `} />
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
