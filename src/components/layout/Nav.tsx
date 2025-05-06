import { motion } from "framer-motion"
import { NavList } from "../../constant/constant"

interface NavProps {
    navlist: Array<{ label: string, key: string }>,
    onNavClick: (sectionKey: string) => void
}

const Nav: React.FC<NavProps> = ({ onNavClick }) => {
    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} className="sticky shadow-lg top-0 bg-white z-50">
            <nav className="px-32 p-10 ">
                <div className="flex justify-center font-medium items-center flex-col gap-6 ">
                    <h1 className="text-xl text-center md:text-2xl lg:text-4xl ">Rodrick & Eleanor</h1>
                    <ul className="hidden lg:flex justify-center text-sm items-center gap-8  ">
                        {NavList.map((i) => (
                            <li >
                                <motion.button whileHover={{ scale: 1.2,  transition: { type: "spring", stiffness: 200 } }} onClick={() => onNavClick(i.key)}>
                                    {i.label}
                                </motion.button>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex md:hidden justify-center text-lg items-center gap-8  ">
                        {NavList.map((i) => (
                            <li >
                                <motion.button whileHover={{ scale: 1.2,  transition: { type: "spring", stiffness: 200 } }} onClick={() => onNavClick(i.key)}>
                                    {i.icon}
                                </motion.button>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </nav>
        </motion.div>
    )
}

export default Nav