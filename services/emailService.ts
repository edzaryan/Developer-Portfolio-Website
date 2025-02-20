import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({ email, message }: { email: string; message: string }) {
    try {
        await resend.emails.send({
            from: "Portfolio Contact <yeghiazaryanedgar93@gmail.com>",
            to: email,
            subject: "Message from Developer Portfolio Website",
            replyTo: "yeghiazaryanedgar93@gmail.com",
            react: React.createElement(ContactFormEmail, {
                message: message,
                email: email,
            }),
        })
        console.log("Email sent successfully!")
    } catch (error) {
        console.error("Failed to send email:", error)
        throw new Error("Failed to send email")
    }
}
