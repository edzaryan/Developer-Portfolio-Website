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
                    className="fixed top-0 sm:top-6 left-1/2 p-2 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full
                               w-full sm:max-w-max"
                    initial={{ x: "-50%", y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className="inline-flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-4 justify-center text-[0.9rem] font-medium text-gray-500">
                        {
                            links.map(link => (
                                <motion.div
                                    className="relative"
                                    key={link.hash}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        className={clsx(
                                            "flex px-5 py-2 transition",
                                            { "text-gray-950": activeSection === link.name }
                                        )}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeOfLastClick(Date.now())
                                        }}
                                        href={link.hash}
                                    >
                                        {link.name}
                                        {
                                            link.name === activeSection &&
                                            <motion.div
                                                className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                                layoutId="activeSection"
                                            />
                                        }
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
