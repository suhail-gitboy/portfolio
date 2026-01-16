import { MdArrowForwardIos } from "react-icons/md"
import { InfiniteMovingCardsDemo } from "../Subcompoenets/Infiniteslide"
import { InfiniteMovingCards } from "../ui/Infinitemove"
import { CardSpotlight } from "../ui/Cardsportlight"
import { IconMessage } from "@tabler/icons-react"
import { MdOutlineMailOutline } from "react-icons/md"
import Globedata from "../Subcompoenets/Globedata"
import { useNavigate } from "react-router"

const GridDetails = () => {

    const profile = {
        name: "Ameer Suhail",
        role: "Full-Stack Developer",
        stack: "MERN | AI",
        location: "India · Flexible to Gulf Time Zone",
        phone: "+91 7736777917",
        email: "suhailgti12@gmail.com",
        image: "/IMG_3595.jpg", // replace with your image
    };

    const Navigate = useNavigate()


    return (
        <div className='py-10 bg-black relative w-full h-auto pb-10 '>
            <div className="md:grid md:grid-cols-6 gap-2 text-white h-auto p-3 px-5 md:px-16 lg:px-20">
                {/* left */}
                <div className="col-span-2 bg-neutral-900 h-auto overflow-hidden  p-3 border mb-2 md:mb-0 border-white/10 rounded-md ">
                    <div className="h-fit md:h-auto w-full p-2">
                        <h1 className="text-xl mb-1 text-neutral-600">
                            Full Stack Web Developer <span className="text-blue-600">(MERN / Next.js)</span>
                        </h1>

                        <h1 className="text-md text-gray-200 font-sans">
                            Web developer intern focused on building scalable applications and learning real-world system design.
                        </h1>

                        <div className="mt-10">
                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Name: Suhail Ameer
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Current Role: Web Developer Intern
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Tech Stack: MERN, Next.js, Tailwind CSS, Node.js
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Experience: Built scalable full-stack web applications with authentication, APIs, and dashboards
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Current Focus: Building AI-powered apps using RAG, vector databases, and modern AI models
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Learning Goals: System design, scalable backend architecture, RAG pipelines, and new web technologies
                            </p>

                            <p className="text-gray-400 text-sm mb-1 font-sans flex items-center">
                                <MdArrowForwardIos className="mr-1" />
                                Availability: Open to full-time roles, internships, and freelance opportunities
                            </p>
                        </div>

                        <div className="mt-4 w-full flex justify-center items-center h-50 relative overflow-hidden">
                            <img src="/docker-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-1" />
                            <img src="/js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-2" />
                            <img src="/github-142-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-3" />
                            <img src="/reactjs-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-4" />
                            <img src="/vite.svg" className="w-9 h-9 float-xy float-delay-5" />
                            <img src="/tailwind-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-6" />
                            <img src="/node-js-svgrepo-com.svg" className="w-9 h-9 float-xy float-delay-7" />
                        </div>
                    </div>

                </div>

                <div className="col-span-4 flex flex-col gap-2 ">
                    <div className="  md:grid grid-cols-2 space-y-2 md:space-y-0 gap-2 ">

                        {/* first */}
                        <div className=" bg-neutral-900 w-full overflow-hidden  h-auto  p-3 py-3 border border-white/10 rounded-md  gap-2">
                            <section className="bg-zinc-950 py-3 px-4">
                                <div className="mx-auto max-w-md rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-xl">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                            Let’s Connect · Quick Response
                                        </p>
                                    </div>

                                    {/* Profile */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={profile.image}
                                            alt={profile.name}
                                            className="h-24 w-24 rounded-2xl object-cover ring-2 ring-zinc-800"
                                        />
                                        <div>
                                            <h2 className="text-xl font-sans font-semibold text-white">
                                                {profile.name}
                                            </h2>
                                            <p className="text-sm text-blue-400 font-sans">{profile.role}</p>
                                            <p className="text-xs text-zinc-400 font-sans">{profile.stack}</p>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <p className="mt-4 text-sm font-sans text-zinc-400">
                                        {profile.location}
                                    </p>

                                    {/* Actions */}
                                    <div className="mt-6 space-y-3">
                                        <div className="rounded-xl border font-sans border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white">
                                            📞 {profile.phone}
                                        </div>
                                        <div className="rounded-xl flex items-center font-sans border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white">
                                            <MdOutlineMailOutline className="mr-2" /> {profile.email}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button onClick={() => Navigate("/contact")} className="mt-6 w-full rounded-xl bg-gradient-to-r font-sans from-blue-500 to-blue-800 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                                        reach
                                    </button>
                                </div>
                            </section>

                        </div>
                        {/* second */}
                        <div className=" bg-neutral-900 p-3 border border-white/10 rounded-md gap-2 relative overflow-hidden">
                            <h1 className="text-lg font-sans text-white/40 font-semibold md:mt-10 lg:mt-0">Remote</h1>
                            <h1 className="text-lg mt-2  text-white font-sans font-semibold mb-4">Region:<span className="text-gray-400 text-md font-extralight font-sans">india (Flexible to gulf time Zones)</span></h1>
                            <Globedata />
                        </div>

                    </div>
                    {/* bottomright */}
                    <div className=" bg-neutral-900 p-3 border border-white/10 rounded-md">
                        <InfiniteMovingCardsDemo />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default GridDetails