// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "@/services/emailService"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log("*** API Route Hit ***");

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { email, message } = req.body

    if (!email || !message) {
        return res.status(400).json({ error: "Missing required fields" })
    }

    if (email.length > 100) {
        return res.status(400).json({ error: "Email must not exceed 100 characters." })
    }

    if (message.length > 500) {
        return res.status(400).json({ error: "Message must not exceed 500 characters." })
    }

    try {
        console.log("Sending email...");
        const result = await sendEmail({ email, message })
        return res.status(200).json(result)
    } catch (error) {
        console.error("Failed to send email:", error)
        return res.status(500).json({
            error: error instanceof Error ? error.message : "An unexpected error occurred.",
        })
    }
}