import { motion } from "framer-motion"
import { div } from "framer-motion/client"
import { useEffect, useState } from "react"

interface CountdownProps {
    targetDate: Date
}

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
} | null

type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds'

const timeUnits: TimeUnit[] = ['days', 'hours', 'minutes', 'seconds']

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const CalculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date()
        if (difference <= 0) return null
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(CalculateTimeLeft())
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(CalculateTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    if (!timeLeft) {
        return (
            <div className="text-center text-3xl">
                The Wedding Day Has Arrived!
            </div>
        )
    }
    return (
        <div className="w-full flex flex-col items-center justify-center px-4   rounded-2xl  max-w-md mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 * index }}
                        className="bg-white px-4 rounded-xl"
                    >
                        <p className="text-3xl font-bold text-pink-800">{timeLeft[unit]}</p>
                        <p className="text-sm uppercase text-gray-600">{unit}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Countdown