import Countdown from '../components/Countdown'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} className='px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-center gap-16'>
      <div className='flex justify-center gap-8 items-center flex-col'>
        <motion.h1 initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='text-lg lg:text-xl'>
          The Wedding Of
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }} className='flex flex-col font-medium items-center text-pink-800 text-5xl lg:text-7xl'>
          Rodrick<span>&</span><span>Eleanor</span>
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }} className='text-lg lg:text-xl font-medium'>
          Sunday 10 June 2025
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}>
          <Countdown targetDate={new Date("2025-06-11T10:00:00")}></Countdown>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square overflow-hidden rounded-xl"
      >
        <img src="/assets/hero.jpg" alt="" className='w-full h-full object-cover' />
      </motion.div>
    </motion.div>
  )
}

export default Hero