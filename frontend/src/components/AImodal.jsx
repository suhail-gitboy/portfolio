import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import { PiTelegramLogoLight } from "react-icons/pi";
import { AinputPost } from '../Services/AllAiservices';
import { IoClose } from "react-icons/io5";
import { EncryptedText } from '../ui/Encrypted';

const AImodal = ({ Setaimodal, aimodal }) => {

    const [userInput, Setuserinput] = useState("")
    const [messages, Setmessages] = useState([])


    const Aidatasubmit = async () => {

        Setmessages([...messages, { type: "user", text: userInput }])
        window.scrollTo()
        try {
            const Response = await AinputPost(userInput)
            console.log(Response)
            Setmessages(prev => [...prev, { type: "ai", text: Response.data.answer }])

            console.log(messages);
        } catch (error) {
            console.log(error);

        }


    }
    const bottomRef = useRef(null)
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);


    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className='fixed top-30 right-10 z-50 '>
            <div className='w-full mx-5 md:w-149  h-120 rounded-xl bg-neutral-800 text-white'>
                <div className='flex rounded-t-md items-center justify-between bg-black p-3'>
                    <div>
                        <img src="/Ai.webp" className='w-8 h-8' alt="" />
                    </div>
                    <p onClick={() => Setaimodal(false)} className='font-sans px-4 py-2 text-xs text-gray-300 hover:text-white'>close</p>
                </div>

                <div className="h-92 p-4  scroll-auto  overflow-auto">
                    <section>
                        <AnimatePresence>
                            {
                                messages.length > 0 ? (



                                    messages.map((data, id) => (
                                        <motion.div initial={{ opacity: 1, x: data.type == "ai" ? -15 : 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} key={id} className={`flex space-y-2 w-full ${data.type == "ai" ? "justify-start" : "justify-end"}`}>
                                            <h3 className={`px-3 text-md font-sans py-3 max-w-3/5 rounded-md mb-2  ${data.type == "ai" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-400"}`}>{data.text}</h3>
                                        </motion.div>

                                    ))



                                ) : (<EncryptedText
                                    text="Ask anything. I’ll do my best to help"
                                    encryptedClassName="text-neutral-500"
                                    revealedClassName="dark:text-white text-black"
                                    revealDelayMs={120}
                                />)
                            }
                        </AnimatePresence>
                    </section>

                </div>
                <div className="flex justify-between items-center shadow-sm shadow-white/20 bg-neutral-700 px-3 mx-3 rounded-lg">
                    <input type="text" value={userInput} onChange={(e) => {
                        Setuserinput(e.target.value)

                    }} placeholder='Message...' className='py-2 w-full font-sans outline-0 ring-0 ' />
                    <div className='flex gap-2 flex-row-reverse'>
                        <button onClick={() => Aidatasubmit()}> <PiTelegramLogoLight className='text-xl hover:text-white text-neutral-400' /></button>
                        <button type='' onClick={() => Setuserinput("")} > <IoClose className='text-xl hover:text-white text-neutral-400' /></button>

                    </div>
                </div>
            </div>
            <div ref={bottomRef} />
        </motion.div>
    )
}

export default AImodal
