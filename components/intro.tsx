"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"


export default function Intro() {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        console.log("Intro useEffect has been called !!!");
        console.log("InView", inView);
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Home")
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return (
        <>
            <div
                className="max-w-[50rem] text-center sm:mb-0 mb-28 scroll-mt-[100rem]"
                ref={ref}
                id="home"
            >
                <div className="flex items-center justify-center">
                    <div className="relative mb-7">
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{type: "tween", duration: 0.2}}
                        >
                            <Image
                                src="/Edgar-Image.jpg"
                                alt="Ricardo portrait"
                                width={200}
                                height={200}
                                quality={95}
                                priority={true}
                                className="w-[147px] h-[147px] rounded-full border-[0.38rem] border-white object-center shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-0 right-0 text-4xl"
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                delay: 0.1
                            }}
                        >
                            👋
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="mb-16 mt-6 px-4 font-medium !leading-[1.5] text-[25px]"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 1}}
                >
                    <span className="font-bold">Hello, I'm Edgar.</span> I'm a{" "}
                    <span className="font-bold">full-stack developer</span> with {" "}
                    <span className="font-bold">2 years</span> of experience. I enjoy building{" "}
                    <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>
                </motion.div>
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.1
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-700 duration-300"
                        onClick={() => {
                            setActiveSection("Contact")
                            setTimeOfLastClick(Date.now())
                        }}
                    >
                        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                    </Link>
                    <a
                        className="group bg-white px-7 py-3 flex items-center hover:text-gray-600 gap-2 rounded-full outline-none
                        cursor-pointer borderBlack"
                        href="/CV.pdf"
                        download
                    >
                        Download CV{" "}
                        <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                    </a>
                    <Link
                        className="bg-white p-4 text-gray-800 hover:text-gray-600 flex items-center gap-2 rounded-full
                        cursor-pointer borderBlack duration-300"
                        href="https://www.linkedin.com/in/edzaryan/"
                        target="_blank"
                    >
                        <BsLinkedin/>
                    </Link>
                    <Link
                        className="bg-white p-4 text-gray-800 hover:text-gray-600 flex items-center gap-2 text-[1.35rem] rounded-full
                        cursor-pointer borderBlack duration-300"
                        href="https://github.com/edzaryan"
                        target="_blank"
                    >
                        <FaGithubSquare/>
                    </Link>
                </motion.div>
            </div>
        </>
    )
}