import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import { PiTelegramLogoLight } from "react-icons/pi";
import { AinputPost } from '../Services/AllAiservices';
import { IoClose } from "react-icons/io5";
import { EncryptedText } from '../ui/Encrypted';

import { LoaderOne } from '../ui/Loader';
const AImodal = ({ Setaimodal, aimodal }) => {

    const [userInput, Setuserinput] = useState("")
    const [messages, Setmessages] = useState([])
    const [loading, Setloading] = useState(false)
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const Aidatasubmit = async (text) => {
        Setloading(true)

        Setmessages([...messages, { type: "user", text: text }])
        window.scrollTo()
        Setuserinput("")
        try {
            const Response = await AinputPost(text)

            if (Response.status == 200) {
                Setloading(false)
                Setmessages(prev => [...prev, { type: "ai", text: Response.data.answer }])
            } else {
                Setloading(false)

            }

            console.log(messages);
        } catch (error) {
            Setloading(false)
            console.log(error);
            alert("server is low")

        }


    }
    const bottomRef = useRef(null)



    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className='fixed top-30 right-10 z-50 '>
            <AnimatePresence>
                <div className='w-full mx-5 md:w-149  h-120 rounded-xl bg-neutral-800 text-white'>
                    <div className='flex rounded-t-md items-center justify-between bg-black p-3'>
                        <div>
                            {
                                loading ? <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <motion.img
                                        src="/Ai.webp"
                                        alt="AI"
                                        className="w-8 h-8"
                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    <p className="text-sm text-neutral-400 flex items-center gap-1">
                                        Server is slow
                                        <span className="flex gap-1">
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.4, repeat: Infinity }}
                                            >
                                                .
                                            </motion.span>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                                            >
                                                .
                                            </motion.span>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                                            >
                                                .
                                            </motion.span>
                                        </span>
                                    </p>
                                </motion.div> : <img src="/Ai.webp" className='w-8 h-8' alt="" />
                            }
                        </div>
                        <p onClick={() => Setaimodal(false)} className='font-sans px-4 py-2 text-xs text-gray-300 hover:text-white'>close</p>
                    </div>

                    <div className="h-92 p-4  scroll-auto  overflow-auto">
                        <section>

                            {
                                messages.length > 0 ? (

                                    <>
                                        {messages.map((data, id) => (
                                            <motion.div initial={{ opacity: 1, x: data.type == "ai" ? -15 : 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} key={id} className={`flex space-y-2 w-full ${data.type == "ai" ? "justify-start" : "justify-end"}`}>
                                                <h3 className={`px-3 text-xs md:text-sm font-sans py-3 whitespace-pre-line max-w-3/5 rounded-md mb-2  ${data.type == "ai" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-400"}`}>{data.text}</h3>

                                            </motion.div>

                                        ))}
                                        {loading && <div className='flex justify-start'>
                                            <LoaderOne />
                                        </div>}
                                        <div ref={bottomRef} />
                                    </>





                                ) : (<>
                                    <EncryptedText
                                        text="Ask anything about him. will help unless server down"
                                        encryptedClassName="text-neutral-500"
                                        revealedClassName="text-white"
                                        revealDelayMs={70}
                                    />
                                    <div className='mt-4  w-fit  flex flex-col space-y-2 justify-center'>
                                        <p onClick={() => Aidatasubmit("who is ameer suhail?")} className='rounded-xl bg-linear-to-br from-blue-800 to-purple-600  text-white text-xs font-sans py-2 px-4'>who is ameer suhail?</p>
                                        <p onClick={() => Aidatasubmit("what skills he know?")} className='rounded-xl bg-linear-to-br from-violet-800 to-purple-600 text-white text-xs font-sans py-2 px-4'>what skills he know?</p>
                                    </div>

                                </>)
                            }

                        </section>

                    </div>
                    <div className="flex justify-between items-center shadow-sm shadow-white/20 bg-neutral-700 px-3 mx-3 rounded-lg">
                        <input type="text" value={userInput} onChange={(e) => {
                            Setuserinput(e.target.value)

                        }} placeholder='Message...' className='py-2 w-full font-sans outline-0 ring-0 ' />
                        <div className='flex gap-2 flex-row-reverse'>
                            <button onClick={() => Aidatasubmit(userInput)}> <PiTelegramLogoLight className='text-xl hover:text-white text-neutral-400' /></button>
                            <button type='' onClick={() => Setuserinput("")} > <IoClose className='text-xl hover:text-white text-neutral-400' /></button>

                        </div>
                    </div>
                </div>
                <div ref={bottomRef} />
            </AnimatePresence>
        </motion.div>
    )
}

export default AImodal
