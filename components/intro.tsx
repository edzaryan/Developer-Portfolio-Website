"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";


export default function Intro() {
    const { ref, inView } = useInView({ threshold: 0.75 });
    const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            ref={ref}
            id="home"
            className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative mt-10">
                    <motion.h1
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.2}}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                            alt="Ricardo portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="w-24 h-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </motion.h1>
                    <motion.span
                         className="absolute bottom-0 right-0 text-2xl"
                         initial={{opacity: 0, scale: 0}}
                         animate={{opacity: 1, scale: 1}}
                         transition={{
                             type: "spring",
                             stiffness: 125,
                             delay: 0.1,
                             duration: 0.7
                         }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p
                className="mb-10 mt-4 px-4 text-2xs font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
            >
                <span className="font-bold">Hello, I'm Edgar.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with {" "}
                <span className="font-bold">8 years</span> of experience. I enjoy building
                <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.p>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
                        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                    hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15]
                    hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>
                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15]
                    hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
                    href="https://github.com"
                    target="_blank"
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}