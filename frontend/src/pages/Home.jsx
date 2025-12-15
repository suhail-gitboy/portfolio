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
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className='bg-black'>
      <Header />
      <SectionBio />
      <GridDetails />
      <Myprojects />
      <Mystack />
      <WorkExperience />
      <Watiprovide />

      <div className="fixed right-4 bottom-6 group">
        <div onClick={() => Setaimodal(true)} className="flex items-center  rounded-full py-2 px-2 bg-white text-black font-sans  shadow-3xl shadow-violet-600">

          <p
            className="
        max-w-0 opacity-0 overflow-hidden whitespace-nowrap
        transition-all duration-600 ease-in-out
        group-hover:max-w-xs
        group-hover:opacity-100 font-sans
      "
          >
            Ask about me
          </p>

          <SiMinutemailer className="text-3xl group-hover:rotate-360 duration-700 transition-all " />
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
