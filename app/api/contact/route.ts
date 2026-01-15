import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json()

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_EMAIL_FROM || !process.env.RESEND_EMAIL_TO) {
      throw new Error("Missing email environment variables")
    }

    await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM,
      to: process.env.RESEND_EMAIL_TO,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      headers: {
        "Reply-To": email,
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    return NextResponse.json(
      { error: (error as Error).message || "Failed to send message" },
      { status: 500 }
    )
  }
}
