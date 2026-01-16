import React from 'react'
import Nav from '../common/Nav'
import Galaxy from '../reactbit/Bg';

import GradientText from "../reactbit/Gradient"
import { IoArrowRedoOutline, IoArrowRedoSharp } from "react-icons/io5";
// For a smoother animation, the gradient should start and end with the same color
import { MdArrowForwardIos } from "react-icons/md";
import { EncryptedText } from '../ui/NewBg';
import { MdAlternateEmail } from "react-icons/md";
import { FaMailchimp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import TextType from "../ui/Texttype";
import { AnimatedTooltip } from '../ui/Tooltiptwo';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram, InstagramIcon } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Ameer suhail",
    designation: "Software developer",
    image:
      "/IMG_4556.jpg",
  }]

const Datas = ["UI experience.", "Innovations.", "Automations.", "Productivity."]
const Header = () => {
  const Navigate = useNavigate()
  return (
    <div className=' md:h-screen relative '>
      <Nav />
      <div className=' flex justify-center items-center  md:h-full bg-black z-30 pt-40'>
        <div className=" z-30 p-5 md:p-10 flex flex-col items-center">
          <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} href='#project' className="md:px-3 px-1 py-1 flex items-center  rounded-lg  border border-white/10  bg-neutral-800 mb-9" >
            <p className='px-1 rounded-md bg-violet-950 text-white  w-fit mr-2 text-xs '>new</p><p className='font-extralight text-md md:text-lg border-none '><GradientText
              olors={[
                "#8B5CF6", // violet (first)
                "#9CA3AF", // gray
                "#FBCFE8", // light rose
                "#9CA3AF", // gray
                "#8B5CF6"  // violet (last)
              ]}
              animationSpeed={2}
              showBorder={false}
              className="border-none"
            >
              visit projects!
            </GradientText></p> <MdArrowForwardIos className='text-white/50 ml-2 text-md' />
          </motion.a>

          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-2xl sm:text-3xl w-3/5 text-center md:w-auto md:text-start md:text-6xl text-white/80 mb-3'>I make fullstack Apps   with AI <br className='hidden md:block' />to build smarter <i className='text-2xl md:text-6xl bg-clip-text md:text-transparent md:bg-linear-to-b  text-violet-600 from-neutral-200  md:to-neutral-700'> User Experience   </i></motion.h1>

          <div className='flex flex-col w-fit mt-10 md:20 p-4 rounded-md '>
            {/* <p className="mx-auto max-w-lg py-5 text-left">
      <EncryptedText
        text="Ameer suhail,what i have studied,what text stack i know and for more "
        encryptedClassName="text-neutral-500"
        revealedClassName=" text-xl font-light text-gray-400"
        revealDelayMs={30}
      />
    </p> */}

            <div className=" flex flex-col
            items-center">
              <div className='mb-3 mt-4 flex mx-auto items-center space-x-3 text-white/70'>
                <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='text-xl md:text-xl font-extralight text-center flex flex-col md:flex-row items-center space-x-3 font-sans'><span className='mr-4 '> <AnimatedTooltip items={people} className="mr-3" /></span> Ameer suhail</motion.h3>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}><GradientText
                  colors={["#A9A9A9", "#D1D5DB", "#8B5CF6", "#A9A9A9", "#8B5CF6"]}

                  animationSpeed={3}
                  showBorder={false}
                  className="hidden md:flex text-xl md:text-xl font-sans"
                >
                  Fullstack Dev!
                </GradientText></motion.div>

              </div>
              <div className="flex items-center gap-4 pb-2 py-2">
                <a className="hover:text-purple-500 text-white transition" href="https://www.linkedin.com/in/ameer-suhail-78aa40303/">
                  <Linkedin />
                </a>
                <a href="https://github.com/" className="hover:text-purple-500 text-white transition" >
                  <Github />
                </a>
                <a className="hover:text-purple-500 transition text-white" href="#">
                  <Mail />
                </a>
                <a className="hover:text-purple-500 text-white transition" href="#">
                  <InstagramIcon />
                </a>
              </div>
            </div>


            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className=' flex mx-auto space-x-3'>
              <button className='flex items-center text-md md:text-xl text-gray-300 font-sans  border rounded-full px-4 py-2 border-gray-700'>Lets Connect <MdArrowForwardIos className='ml-1' /></button>
              <button onClick={() => Navigate("/contact")} className='text-gray-400 text-md md:text-lg hover:text-white group transition-colors duration-300 flex items-center'><MdAlternateEmail className='mr-2 text-white group-hover:rotate-180 transition-transform text-lg md:text-3xl duration-300 group-hover:text-violet-600 ' />suhailgti12@gmail.com</button>
            </motion.div>

          </div>
        </div>
      </div>


      <div style={{ position: 'absolute' }} className=" h-full bg-linear-to-b border border-b rounded rounded-b-4xl from-black to-gray-900  top-0 left-0 right-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.2}
          glowIntensity={0.2}
          saturation={0.2}
          hueShift={240}
        />
      </div>



    </div>
  )
}

export default Header
