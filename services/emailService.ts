import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({ email, message }: { email: string; message: string }) {
    try {
        await resend.emails.send({
            from: "Contact From <yeghiazaryanedgar93@gmail.com>",
            to: email,
            subject: "Message from Developer Portfolio Website",
            replyTo: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                email: email as string
            })
        })
    } catch (error) {
        throw new Error("Failed to send email", error)
    }
}
