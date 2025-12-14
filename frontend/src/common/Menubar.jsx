import { AnimatePresence, easeIn, motion, setStyle } from "motion/react";
import StaggeredMenu from "../reactbit/Staggeredmenu";
import { Link } from "react-router";
import { useState } from "react";



const Menubar = ({ Setisnavopen }) => {


  const [active, SetActive] = useState(1)
  return (

    <div className="p-6 fixed inset-y-0  w-full ">
      <p onClick={() => Setisnavopen(false)} className="cursor-pointer pb-20 text-gray-400 hover:text-white">close</p>
      <AnimatePresence>
        <ul className="flex justify-center items-start flex-col space-y-3">
          <Link to="/" onClick={() => SetActive(1)}> <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: easeIn }} className="text-neutral-500 group relative transition-colors duration-400 hover:text-white text-3xl tracking-widest hover:-rotate-10 transition-all duration-500">Home <p className={`w-0 group-hover:w-20 ${active == 1 && "w-20"} transition-all duration-700  h-1 bg-violet-600 absolute bottom-1/2`}></p></motion.li></Link>
          <Link to="/projects" onClick={() => SetActive(2)}> <motion.li initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: easeIn }} className="text-neutral-500 group relative transition-colors duration-400 hover:text-white text-3xl tracking-widest hover:-rotate-10 transition-all duration-500">projects <p className={`w-0 group-hover:w-20 ${active == 2 && "w-20"} transition-all duration-700  h-1 bg-violet-600 absolute bottom-1/2`}></p></motion.li></Link>
          <Link to="/about" onClick={() => SetActive(3)}> <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease: easeIn }} className="text-neutral-500 group relative transition-colors duration-400 hover:text-white text-3xl tracking-widest hover:-rotate-10 transition-all duration-500">about<p className={`w-0 group-hover:w-20 ${active == 3 && "w-20"} transition-all duration-700  h-1 bg-violet-600 absolute bottom-1/2`}></p></motion.li></Link>
          <Link to="/experience" onClick={() => SetActive(4)}> <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.8, ease: easeIn }} className="text-neutral-500 group relative transition-colors duration-400 hover:text-white text-3xl tracking-widest hover:-rotate-10 transition-all duration-500">Experience <p className={`w-0 group-hover:w-20 ${active == 4 && "w-20"} transition-all duration-700  h-1 bg-violet-600 absolute bottom-1/2`}></p></motion.li></Link>
          <Link to="/community" onClick={() => SetActive(5)}> <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1, ease: easeIn }} className="text-neutral-500 group relative transition-colors duration-400 hover:text-white text-3xl tracking-widest hover:-rotate-10 transition-all duration-500">Community <p className={`w-0 group-hover:w-20 ${active == 5 && "w-20"} transition-all duration-700  h-1 bg-violet-600 absolute bottom-1/2`}></p></motion.li></Link>
        </ul>
      </AnimatePresence>

    </div>
  )
}

export default Menubar;