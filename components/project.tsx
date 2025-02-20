"use client"
import React, { useRef } from 'react'
import Image from "next/image"
import { useScroll, motion } from "framer-motion"

type ProjectProps = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    index: number;
}

export default function Project({ title, description, tags, imageUrl, index }: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
                position: "relative"
            }}
            className="group"
        >
            <div
                className={`relative z-10 bg-gray-100 hover:bg-gray-200 max-w-[42rem] borderBlack rounded-lg
                sm:h-[19rem] transition grid ${isEven ? "sm:grid-cols-[7fr_3fr]" : "sm:grid-cols-[3fr_7fr]"} 
                ${isEven ? "grid-cols-[3fr_2fr]" : "grid-cols-[2fr_3fr]"}`}
            >
                <div className={`flex flex-col justify-center gap-5 sm:p-10 p-7 ${isEven ? "order-1" : "order-2"}`}>
                    <div className="text-2xl font-semibold">{title}</div>
                    <div>{description}</div>
                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag, index) => (
                            <div
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                key={index}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`relative overflow-hidden ${isEven ? "order-2" : "order-1"}`}>
                    <Image
                        src={imageUrl}
                        quality={95}
                        alt="Project I worked on"
                        width={400}
                        height={300}
                        className={`absolute top-1/3 ${isEven ? "-right-20" : "-left-20"} rounded-lg shadow-xl transition scale-[1.5]
                        group-hover:scale-[1.3] ${isEven ? "group-hover:-rotate-3 rotate-3" : "group-hover:rotate-3 -rotate-3"} h-[200px]`}
                    />
                </div>
            </div>
        </motion.div>
    )
}
