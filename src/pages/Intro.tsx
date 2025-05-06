import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosMailOpen } from "react-icons/io"

const Intro = () => {
    const [searchParams] = useSearchParams()
    const guestName = searchParams.get("to") || "Sarah"

    const navigate = useNavigate()
    const [isLeaving, setIsLeaving] = useState(false)

    const handleOpenInvite = () => {
        setIsLeaving(true)
        setTimeout(() => {
            navigate('/home')
        }, 1000)
    }

    return (
        <AnimatePresence>
            {!isLeaving && (
                <motion.div
                    className="h-screen flex flex-col gap-5 justify-center items-center  text-pink-800"
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5,  ease: [0.16, 1, 0.4, 1]}}
                >
                    <h1 className="text-4xl text-center">The Wedding of<br />Rodrick & Eleanor</h1>
                    <div className="w-full h-1/3" />
                    <h2 className="text-2xl">Kepada yth :</h2>
                    <h2 className="text-5xl font-bold">{guestName}</h2>
                    <h2 className="text-2xl">Di Tempat</h2>
                    <button onClick={handleOpenInvite} className="bg-pink-800 rounded-full px-3 py-1">
                        <div className="flex gap-2 text-white items-center">
                            <IoIosMailOpen />
                            Buka Undangan
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Intro
