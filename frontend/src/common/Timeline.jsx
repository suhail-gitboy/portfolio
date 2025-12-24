import React from "react";
import { Timeline } from "../ui/Timeline";

export function TimelineDemo() {
    // const data = [
    //     {
    //         title: "2024",
    //         content: (
    //             <div>
    //                 <p
    //                     className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //                     Built and launched Aceternity UI and Aceternity UI Pro from scratch
    //                 </p>
    //                 <div className="grid grid-cols-2 gap-4">
    //                     <img
    //                         src="https://assets.aceternity.com/templates/startup-1.webp"
    //                         alt="startup template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/templates/startup-2.webp"
    //                         alt="startup template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/templates/startup-3.webp"
    //                         alt="startup template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/templates/startup-4.webp"
    //                         alt="startup template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                 </div>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Early 2023",
    //         content: (
    //             <div>
    //                 <p
    //                     className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //                     I usually run out of copy, but when I see content this big, I try to
    //                     integrate lorem ipsum.
    //                 </p>
    //                 <p
    //                     className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //                     Lorem ipsum is for people who are too lazy to write copy. But we are
    //                     not. Here are some more example of beautiful designs I built.
    //                 </p>
    //                 <div className="grid grid-cols-2 gap-4">
    //                     <img
    //                         src="https://assets.aceternity.com/pro/hero-sections.png"
    //                         alt="hero template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/features-section.png"
    //                         alt="feature template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/pro/bento-grids.png"
    //                         alt="bento template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/cards.png"
    //                         alt="cards template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                 </div>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Changelog",
    //         content: (
    //             <div>
    //                 <p
    //                     className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //                     Deployed 5 new components on Aceternity today
    //                 </p>
    //                 <div className="mb-8">
    //                     <div
    //                         className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //                         ✅ Card grid component
    //                     </div>
    //                     <div
    //                         className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //                         ✅ Startup template Aceternity
    //                     </div>
    //                     <div
    //                         className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //                         ✅ Random file upload lol
    //                     </div>
    //                     <div
    //                         className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //                         ✅ Himesh Reshammiya Music CD
    //                     </div>
    //                     <div
    //                         className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //                         ✅ Salman Bhai Fan Club registrations open
    //                     </div>
    //                 </div>
    //                 <div className="grid grid-cols-2 gap-4">
    //                     <img
    //                         src="https://assets.aceternity.com/pro/hero-sections.png"
    //                         alt="hero template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/features-section.png"
    //                         alt="feature template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/pro/bento-grids.png"
    //                         alt="bento template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                     <img
    //                         src="https://assets.aceternity.com/cards.png"
    //                         alt="cards template"
    //                         width={500}
    //                         height={500}
    //                         className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //                 </div>
    //             </div>
    //         ),
    //     },
    // ];
    const data = [
        {
            title: "Early 2023 – Computer Science & Web Basics",
            content: (
                <div>
                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        I completed my Bachelor of Computer Science from Bangalore North University
                        (2023–2025). I began my journey with HTML, CSS, and JavaScript, learning how
                        websites work from the ground up.
                    </p>

                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        Initially, layout building, responsive design, and CSS positioning were
                        challenging. Over time, I developed confidence by practicing real UI layouts
                        and understanding browser behavior.
                    </p>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/IMG_4993 3.jpg"
                            className="rounded-lg object-cover h-72 w-full"
                            alt="HTML CSS practice"
                        />
                        <img
                            src="/IMG_4673 2.jpg"
                            className="rounded-lg object-cover h-72 w-full"
                            alt="Web basics"
                        />
                    </div>
                </div>
            ),
        },

        {
            title: "Mid 2023 – Frontend Development with React",
            content: (
                <div>
                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        I transitioned into React and learned component-based architecture, hooks,
                        routing, and reusable UI patterns. I focused on writing clean, maintainable
                        frontend code.
                    </p>

                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        I worked extensively with forms, validations, API integrations, lazy loading,
                        and state management to build interactive and responsive applications.
                    </p>

                    {/* Images */}
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="/IMG_7162.jpg"
                            className="rounded-lg object-cover h-72 w-full"
                            alt="React code"
                        />
                        <img
                            src="/IMG_7164.jpg"
                            className="rounded-lg object-cover h-72 w-full"
                            alt="React UI"
                        />
                        <img
                            src="/public/IMG_7165.jpg"
                            className="rounded-lg object-cover h-72 w-full"
                            alt="Frontend components"
                        />
                    </div>
                </div>
            ),
        },

        {
            title: "Late 2024 – Backend & MERN Stack Development",
            content: (
                <div>
                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        To become a complete full-stack developer, I started learning Node.js,
                        Express.js, and MongoDB. I focused on backend architecture, REST APIs, and
                        database design.
                    </p>

                    <ul className="mb-6 list-disc ml-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                        <li className="fontsans">JWT authentication & authorization</li>
                        <li className="fontsans">Mongoose schemas, relations & indexing</li>
                        <li className="fontsans">Error handling & middleware</li>
                        <li className="fontsans">Frontend–backend API integration</li>
                    </ul>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                            className="rounded-lg object-cover h-32 w-full"
                            alt="Backend development"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6"
                            className="rounded-lg object-cover h-32 w-full"
                            alt="MongoDB database"
                        />
                    </div>
                </div>
            ),
        },

        {
            title: "2025 – Real Projects, Internship & Advanced Skills",
            content: (
                <div>
                    <p className="mb-6 font-sans text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                        In 2025, I joined Luminar Technolab as an intern, where I worked on real-world
                        MERN stack projects following professional development practices.
                    </p>

                    <ul className="mb-6 list-disc ml-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                        <li className="fontsans">Complete MERN applications (Auth, CRUD, chat, dashboards)</li>
                        <li className="fontsans">Role-based access & file uploads</li>
                        <li className="fontsans">Axios instances, API optimization</li>
                        <li className="fontsans">Learning TypeScript & basic system design</li>
                    </ul>

                    {/* Images */}
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
                            className="rounded-lg object-cover h-32 w-full"
                            alt="Project work"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            className="rounded-lg object-cover h-32 w-full"
                            alt="Team collaboration"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                            className="rounded-lg object-cover h-32 w-full"
                            alt="Professional development"
                        />
                    </div>
                </div>
            ),
        },
    ];




    return (
        <div className="relative w-full pb-100 overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
