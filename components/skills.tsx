"use client"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}


export default function Skills() {
    const { ref } = useSectionInView("Skills")

    return (
        <>
            <div
                id="skills"
                ref={ref}
                className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            >
                <SectionHeading>My skills</SectionHeading>
                <div className="flex flex-wrap justify-center gap-2 text-gray-800">
                    {
                        skillsData.map(skill => (
                            <motion.div
                                key={skill}
                                className="bg-white borderBlack rounded-lg px-6 py-3"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                animate="animate"
                                whileInView="animate"
                                viewport={{
                                    once: true
                                }}
                                custom={skill}
                            >
                                {skill}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}