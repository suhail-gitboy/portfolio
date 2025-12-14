import React from 'react'
import { Meteors } from '../ui/Meteor'


const services = [
    {
        title: "Full-Stack Web Apps",
        desc: "Building scalable MERN applications with clean architecture and modern UI.",
        points: ["Dashboards", "SaaS apps", "Role-based access"],
    },
    {
        title: "Backend & APIs",
        desc: "Designing secure and scalable backend systems.",
        points: ["Node.js", "Express", "Auth & APIs"],
    },
    {
        title: "DevOps & Deployment",
        desc: "Production-ready deployments with CI/CD and Docker.",
        points: ["Docker", "CI/CD", "Cloud hosting"],
    },
    {
        title: "AI-Powered Features",
        desc: "Integrating AI agents and RAG systems into web apps.",
        points: ["Chatbots", "RAG", "LLM APIs"],
    },
];

const Watiprovide = () => {
    return (
        <div className='pt-40  pb-30'>
            <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
                <Meteors number={30} />
                <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
                    What i Do
                </span>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 px-4 md:px-10">
                {services.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-600"
                    >
                        {/* Spotlight effect */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />

                        <h3 className="text-lg font-semibold text-white">
                            {item.title}
                        </h3>
                        <p className="font-sans mt-2 text-sm text-zinc-400">
                            {item.desc}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {item.points.map((p, i) => (
                                <li key={i} className="flex font-sans items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Watiprovide
