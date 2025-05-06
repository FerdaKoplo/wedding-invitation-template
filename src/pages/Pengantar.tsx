import { PengantarList } from '../constant/constant'
import { motion } from 'framer-motion'

const Pengantar = () => {
    return (
        <div className='px-4 lg:px-32'>
            <div className='flex gap-5 flex-col justify-center items-center'>
                <motion.h1 initial={{opacity:0, y:-100}}  whileInView={{opacity:1, y:0}} transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} className='text-2xl lg:text-3xl font-medium text-center'>Assalamualaikum wr. wb.</motion.h1>
                <motion.p initial={{opacity:0, scale:0}}  whileInView={{opacity:1, scale:1}} transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} className='sm:w-[70%] lg:w-[67%] text-center text-sm lg:text-base'>
                    Dengan Memohon Rahmat Dan Ridho Allah SWT Yang Telah Menciptakan Makhluk-Nya Secara Berpasang-Pasangan
                    Kami Bermaksud Menyelenggarakan Pernikahan Putra-putri Kami
                </motion.p>
            </div>
            <div className='flex min-h-screen justify-center mt-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center justify-center'>
                    {PengantarList.map((item, i) => (
                        <div key={i}>
                            <div className='flex flex-col'>
                                <motion.img initial={{opacity:0, scale:0}}  whileInView={{opacity:1, scale:1}} transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} custom={i * 1.2} src={item.image} className='border-8 border-pink-800 rounded-full w-40 sm:w-64 md:w-80 lg:w-96 mx-auto' alt="" />
                                <div className='flex flex-col justify-center items-center gap-3'>
                                    <motion.h1 initial={{opacity:0, y:-50}}  whileInView={{opacity:1, y:0}} transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} className='text-2xl lg:text-4xl mt-5'>{item.name}</motion.h1>
                                    <div className='w-full border border-black ' />
                                    <motion.p initial={{opacity:0, y:100}}  whileInView={{opacity:1, y:0}} transition={{ duration: 1.9, ease: [0.16, 1, 0.4, 1] }} viewport={{once:true}} className='text-sm lg:text-base'>{item.description}</motion.p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pengantar