import { AnimatePresence, easeIn, motion } from 'motion/react';
import React from 'react'
import { LuBuilding2 } from "react-icons/lu";



const date = new Date()

const data = date.getDate()
const month = date.toLocaleString("default", { month: "long" });
const experiences = [
  {
    company: "Luminar Technolab",
    role: "Mern stack dev intern",
    duration: {
      day: data,
      month: month
    },
    location: "kochi, Kerala",
    description:
      "At Luminar, I'm Learning and building  the core car Fundamentals of Web development, enhancing the skills,by parallely  building web apps, currently am learning express framework in depth.",
    highlights: [
      "Understanding the Fundamentals",
      "Improved coding standards",
      "Experiencing how Devops works",
      "Mastering the Real work flow of software fields",
    ],
    responsibilities: [
      "building the webs apps by upskilling the experience in  frontend and backend  ",
      "Learned how Api works,Statemanagemnet using Redux,Context hook,Protucted routes,and Conditional rendering",
      " Run time error handling,how Backend and frontend communicates using rest api,Web socketio,Authorisation",
      "Authentication,MVC architechure,middlewares",
    ],
    tech: [
      "React js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "Mongodb",
      "TypeScript",
    ],
    cta: "For more",
  },
];

const WorkExperience = () => {
  return (
    <div className='pt-50 flex flex-col items-center'>

      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: easeIn }} className='flex px-4 py-2 rounded-full border border-white/20 items-center font-sans text-white md:text-md text-md w-fit bg-white/10'><LuBuilding2 className='mr-2 text-violet-800' /> Professional Experience</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeIn }} className='py-8  text-5xl md:text-8xl  text-transparent bg-linear-to-l from-white to-neutral-500 bg-clip-text'>Work Experience</motion.h1>


      <div className="pt-10 px-5 md:px-10 pb-20">
        <AnimatePresence>
          {experiences.map((exp, idx) => (
            <motion.div initial={{ opacity: 0, scaleY: 0.7 }} whileInView={{ scaleY: 1, opacity: 1 }} transition={{ duration: 0.6, ease: easeIn }}
              key={idx}
              className="max-w-6xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-10"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl text-white font-sans font-semibold">
                    {exp.company}
                  </h2>
                  <p className="text-violet-400 font-sans font-medium">{exp.role}</p>
                </div>
                <div className="text-sm font-sans text-zinc-400">
                  <p className='font-sans'>{exp.duration.day} {exp.duration.month}</p>
                  <p className='font-sans'>{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-zinc-300 font-sans leading-relaxed">
                {exp.description}
              </p>

              {/* Highlight Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {exp.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl font-sans border  border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold font-sans mb-4">Key Responsibilities</h3>
                <ul className="space-y-3 font-sans text-zinc-300 text-sm list-disc list-inside">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} className='font-sans'>{res}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <h3 className="text-lg font-sans font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full font-sans border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-end">
                <button className="rounded-xl font-sans bg-violet-500 px-5 py-2 text-sm font-medium text-black hover:bg-violet-400 transition">
                  {exp.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default WorkExperience
