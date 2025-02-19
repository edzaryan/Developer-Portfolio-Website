"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { FaPaperPlane } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"


export default function Contact() {
    const { ref } = useSectionInView("Contact")
    const [error, setError] = useState<string | null>(null)


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        const email = data.email as string
        const message = data.message as string

        if (email.length > 100) {
            setError("Email must not exceed 100 characters.")
            return
        }

        if (message.length > 500) {
            setError("Message must not exceed 500 characters.")
            return
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to send email")
            }

            console.log("Email sent successfully!")
        } catch (error) {
            console.error("Failed to send email:", error)
            setError("Failed to send email. Please try again later.")
        }
    }

    return (
        <>
            <motion.div
                id="contact"
                ref={ref}
                className="mb-28 w-[min(100%,38rem)]"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
                viewport={{once: true}}
            >
                <SectionHeading>Contact me</SectionHeading>
                <div className="text-gray-700 text-center">
                    Please contact me directly at <a className="underline" href="mailto:edzaryan@gmail.com">edzaryan@gmail.com</a> or through the form below.
                </div>
                <form className="mt-10 flex gap-4 flex-col">
                    <input
                        className="h-14 px-4 rounded-lg borderBlack"
                        type="email"
                        name="email"
                        required
                        maxLength={50}
                        placeholder="Your email"
                    />
                    <textarea
                        className="h-48 px-4 rounded-lg borderBlack p-4 resize-none"
                        placeholder="Your message"
                        name="message"
                        required
                        maxLength={500}
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="group flex items-center justify-center gap-2 w-[8rem] h-[3rem] bg-gray-900 text-white rounded-full hover:bg-gray-700"
                        >
                            Submit{" "}
                            <FaPaperPlane
                                className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
                        </button>
                    </div>
                </form>
            </motion.div>
        </>
    )
}
