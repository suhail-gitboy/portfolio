import { Github, Linkedin, Mail, Instagram, InstagramIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import Nav from "../common/Nav";
import { motion } from "motion/react";
import { TimelineDemo } from "../common/Timeline";
import { useEffect, useState } from "react";

export default function AboutSection() {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="bg-black">
      <Nav />
      <section className="min-h-screen pt-40 bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.5, x: -40 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8 }} className="flex  md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-60" />
              <img
                src="/bio.jpeg"
                alt="Profile"
                className="relative w-80 md:w-170 h-80 object-cover rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 flex flex-col justify-center items-center md:items-start">
            <p className="text-sm uppercase tracking-widest text-gray-400 font-sans">More about me</p>

            <h1 className="text-4xl md:text-5xl font-bold">
              Hi there! I'm <span className="bg-linear-to-r from-blue-500 via-blue-600 to-purple-700 bg-clip-text text-transparent">Ameer Suhail</span>
            </h1>

            <p className="text-gray-300 font-sans leading-relaxed">
              I’m a MERN stack developer who  building modern, scalable web applications
              and experimenting with new technologies. I focus on writing clean code and
              creating user-friendly experiences that actually solve problems.
            </p>

            <p className="text-gray-400 leading-relaxed font-sans">
              My routine is simple — start coding, hit errors, debug, step outside with a cup
              of tea, come back, fix it, and repeat. I stay updated with industry trends,
              explore things like RAG and AI integrations, and continuously level up my skills.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a className="hover:text-purple-500 transition" href="https://www.linkedin.com/in/ameer-suhail-78aa40303/">
                <Linkedin />
              </a>
              <a href="https://github.com/" className="hover:text-purple-500 transition" >
                <Github />
              </a>
              <a className="hover:text-purple-500 transition" href="#">
                <Mail />
              </a>
              <a className="hover:text-purple-500 transition" href="#">
                <InstagramIcon />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="px-6 py-2 rounded-full border border-white/20 hover:border-purple-500 transition">
                View Projects
              </Link>
              <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
                Join Community
              </button>
              <button className="px-6 py-2 rounded-full border border-white/20 hover:border-pink-500 transition">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="pt-20">
        <TimelineDemo />
      </div>
    </div>
  );
}
