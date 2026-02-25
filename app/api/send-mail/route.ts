import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { fullName, email, phone, message } = body;

        // 🛡️ Basic honeypot spam protection
        if (body.company) {
            return NextResponse.json(
                { error: "Spam detected" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>", // change after domain verification
            // to: ["Info@no1home.co.uk"],
            to: ["mdibrahimhaf6996@gmail.com"],
            subject: `New enquiry from ${fullName}`,
            replyTo: email,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
