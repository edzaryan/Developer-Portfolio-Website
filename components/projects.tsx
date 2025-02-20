"use client"
import React, { useEffect } from "react"
import Project from "@/components/project"
import SectionHeading from "@/components/section-heading"
import { projectsData } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"


export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        console.log("Projects useEffect has been called !!!");

        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return (
        <>
            <div ref={ref} id="projects" className="scroll-mt-28 mb-28">
                <SectionHeading>My Projects</SectionHeading>
                <div className="flex flex-col gap-4">
                    {
                        projectsData.map((project, index) => (
                            <React.Fragment key={index}>
                                <Project {...project} index={index} />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    )
}