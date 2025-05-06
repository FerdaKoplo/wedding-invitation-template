import React from 'react'
import { GalleryList } from '../constant/constant'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion'


const Gallery = () => {
  return (
    <div className='px-4 lg:px-32 gap-5 flex flex-col items-center justify-center min-h-screen'>
        <div className='flex font-medium flex-col text-4xl md:text-5xl'>
            <motion.h1 initial={{opacity:0, x:50}} custom={0.5}  whileInView={{opacity:1, x:0}} transition={{ duration: 1.5, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}}>Our</motion.h1>
            <motion.h1 initial={{opacity:0, x:-50}} custom={0.7}  whileInView={{opacity:1, x:0}} transition={{ duration: 1.5, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} className='text-pink-800'>Gallery</motion.h1>
        </div>

        <div className='mt-20 columns-2  md:columns-3 lg:columns-4 gap-5 p-4 '>
            {GalleryList.map((item, i) => (
                <div key={i} className='break-inside-avoid'>
                    <motion.img initial={{opacity:0}} custom={i * 1.8}  whileInView={{opacity:1}} transition={{ duration: 2.5, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} src={item.image} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Gallery