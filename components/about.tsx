"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"


export default function About() {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("About")
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return (
        <>
            <motion.div className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scale-mt-28"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.175}}
                id="about"
                ref={ref}
            >
                <SectionHeading>About me</SectionHeading>
                <div className="mb-3">
                    After graduating with a degree in{" "}
                    <span className="font-medium">Accounting</span>,
                    I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned{" "}
                    <span className="font-medium">full-stack web development</span>.{" "}
                    <span className="italic">My favorite part of programming</span> is the problem-solving aspect.
                    I <span className="underline">love</span> the feeling of finally figuring out a solution
                    to a problem. My code stack is{" "} <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>.
                    I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am
                    currently looking for a{" "}
                    <span className="font-medium">full-time</span> position as a software developer.
                </div>
                <div>
                    <span className="italic">When I'm not coding</span>, I enjoy playing
                    video games, watching movies, and playing with my dog. I also enjoy{" "}
                    <span className="font-medium">learning new things</span>. I am currently learning about{" "}
                    <span className="font-medium">history and philosophy</span>. I'm also learning how to play the
                    guitar.
                </div>
            </motion.div>
        </>
    )
}