import { useRef } from 'react'
import { CarouselList } from '../constant/constant'
import { animate, motion, useAnimationFrame, useMotionValue } from 'framer-motion'


const duplicatedList = [...CarouselList, ...CarouselList, ...CarouselList, ...CarouselList]

const Carousel = () => {
    const x = useMotionValue(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastTime = useRef(0)

    useAnimationFrame((t, delta) => {
        lastTime.current += delta

        if (lastTime.current >= 5000) {
            lastTime.current = 0

            const current = x.get()
            const newX = current - 100

            if (containerRef.current) {
                const totalWidth = containerRef.current.scrollWidth / 2
                if (Math.abs(newX) >= totalWidth) {
                    animate(x, 0, { duration: 1.5, ease: "easeInOut" })
                } else {
                    animate(x, newX, { duration: 1.5, ease: "easeInOut" })
                }
            }
        }
    })
    return (
        <div className="overflow-hidden mt-20 w-full h-48 relative ">
            <motion.div
                ref={containerRef}
                className="flex cursor-grab active:cursor-grabbing gap-10 "
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -duplicatedList.length * 256 + window.innerWidth, right: 50 }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {duplicatedList.map((item, i) => (
                    <img
                        key={i}
                        src={item.image}
                        alt={`carousel-${i}`}
                        className="w-44 h-36 sm:w-52 sm:h-40 md:w-64 md:h-48 object-cover flex-shrink-0 rounded-xl"
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Carousel