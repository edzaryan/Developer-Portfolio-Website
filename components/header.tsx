"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import clsx from "clsx"
import { links } from "@/lib/data"
import { useActiveSectionContext } from "@/context/active-section-context"


export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <>
            <div className="relative z-[999]">
                <motion.div
                    className="fixed p-2 left-1/2 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full"
                    initial={{x: "-50%", y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                >
                    <div
                        className="inline-flex text-[0.9rem] font-medium text-gray-500 gap-3">
                        {
                            links.map(link => (
                                <motion.div
                                    className="h-3/4 flex items-center justify-center relative"
                                    key={link.hash}
                                    initial={{y: -100, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                >
                                    <Link
                                        className={clsx(
                                            "flex w-full items-center justify-center px-5 py-2 hover:text-gray-950 transition",
                                            {"text-gray-950": activeSection === link.name}
                                        )}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeOfLastClick(Date.now())
                                        }}
                                        href={link.hash}
                                    >
                                        {link.name}
                                        {link.name === activeSection && (
                                            <motion.div
                                                className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            >
                                            </motion.div>)}
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </>
    )
}
