import { motion } from 'motion/react'
import React, { useState } from 'react'
import { PiTelegramLogoLight } from "react-icons/pi";
const AImodal = ({ Setaimodal }) => {

    const [userInput, Setuserinput] = useState("")
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className='fixed top-30 right-10 z-50 '>
            <div className='w-99  h-120 rounded-md bg-neutral-800 text-white'>
                <div className='flex rounded-t-md items-center justify-between bg-white/15 p-3'>
                    <div>
                        <img src="../../public/Ai.webp" className='w-8 h-8' alt="" />
                    </div>
                    <p onClick={() => Setaimodal(false)} className='font-sans text-xs text-gray-300 hover:text-white'>close</p>
                </div>

                <div className="h-92 p-4  scroll-auto  overflow-auto">
                    des

                </div>
                <form className="flex justify-between items-center shadow-sm shadow-white/20 bg-neutral-700 px-3 mx-3 rounded-lg">
                    <input type="text" value={userInput} onChange={(e) => Setuserinput(e.target.value)} placeholder='Message...' className='py-2 w-full font-sans outline-0 ring-0 ' />
                    <button><PiTelegramLogoLight className='text-xl hover:text-white text-neutral-400' /></button>

                </form>
            </div>

        </motion.div>
    )
}

export default AImodal
