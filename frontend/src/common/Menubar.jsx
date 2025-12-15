import { AnimatePresence, easeIn, motion, setStyle } from "motion/react";
import StaggeredMenu from "../reactbit/Staggeredmenu";
import { Link, NavLink } from "react-router";
import { useState } from "react";



const Menubar = ({ Setisnavopen }) => {

  const MenuItem = ({ to, label, delay }) => (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: delay, ease: "easeIn" }}
          className={`group relative text-3xl tracking-widest transition-all duration-500 hover:-rotate-10
          ${isActive ? "text-white" : "text-neutral-500 hover:text-white"}
        `}
        >
          {label}
          <p
            className={`absolute bottom-1/2 h-1 bg-violet-600 transition-all duration-700
            ${isActive ? "w-20" : "w-0"}
          `}
          />
        </motion.li>
      )}
    </NavLink>
  );

  const [active, SetActive] = useState(1)
  return (

    <div className="p-6 fixed inset-y-0 w-full">
      <p
        onClick={() => Setisnavopen(false)}
        className="cursor-pointer pb-20 text-gray-400 hover:text-white"
      >
        close
      </p>

      <AnimatePresence>
        <ul className="flex flex-col space-y-3">
          <MenuItem to="/" label="Home" delay={0.2} />
          <MenuItem to="/projects" label="Projects" delay={0.3} />
          <MenuItem to="/about" label="About" delay={0.4} />
          <MenuItem to="/experience" label="Experience" delay={0.5} />
          <MenuItem to="/community" label="Community" delay={0.6} />
        </ul>
      </AnimatePresence>
    </div>
  )
}

export default Menubar;