import { NextResponse } from "next/server";

const SHEETS_LINK =
    "https://script.google.com/macros/s/AKfycbzgHTkySRwRmij4hXZw1p5H5XaC4Sb9_wcjLj-ut2GapIVp0avMAYwVoB4HhE9GHD7O/exec";

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();

//         const {
//             fullName,
//             email,
//             phone,
//             postcode,
//             preferredDate,
//             installedByOther,
//             previouslyInstalled,
//             installerName,
//             installYear,
//             notes,
//             city,
//             heading,
//         } = body;

//         // Basic required validation
//         if (!fullName || !phone || !postcode) {
//             return NextResponse.json(
//                 { message: "Missing required fields" },
//                 { status: 400 }
//             );
//         }

//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASS,
//             },
//         });
//         await transporter.sendMail({
//             from: `"No.1 Solar Care" <${process.env.SMTP_USER}>`,
//             to: "tonimahfud9597@gmail.com",
//             replyTo: email,
//             subject: `${heading} – ${city || "Website"}`,
//             html: `
//                 <h2>${heading}</h2>

//                 <table cellpadding="6" cellspacing="0">
//                     <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
//                     <tr><td><strong>Email</strong></td><td>${email}</td></tr>
//                     <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
//                     <tr><td><strong>Postcode</strong></td><td>${postcode}</td></tr>
//                     <tr><td><strong>Preferred Date</strong></td><td>${
//                         preferredDate || "-"
//                     }</td></tr>
//                     <tr><td><strong>Installed by other company</strong></td><td>${
//                         previouslyInstalled ? "Yes" : "No"
//                     }</td></tr>
//                     <tr><td><strong>Installer Name</strong></td><td>${
//                         installerName || "-"
//                     }</td></tr>
//                     <tr><td><strong>Installation Year</strong></td><td>${
//                         installYear || "-"
//                     }</td></tr>
//                     <tr><td><strong>Notes</strong></td><td>${
//                         notes || "-"
//                     }</td></tr>
//                 </table>
//             `,
//         });

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("Email send failed:", error);
//         return NextResponse.json(
//             { message: "Failed to send email" },
//             { status: 500 }
//         );
//     }
// }

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log(body);
        const {
            fullName,
            email,
            phone,
            postcode,
            preferredDate,
            installedByOther,
            previouslyInstalled,
            installerName,
            installYear,
            notes,
            city,
            subject,
        } = body;

        // Basic required validation
        if (!fullName || !phone || !postcode) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }
        //"https://script.google.com/macros/s/AKfycbygaGE9JSDvnKGwYq4Jwur5HO0bFM9l8mEEyYDJ24M9sT_vXPjht9g-x7kgfoGVhBTo/exec",
        //https://script.google.com/macros/s/AKfycbyTgpjkfvvwXerkks05c-BxIN-3UEXNJAFvfogJ5fuPGXQJtvE3Q_JP_YWOhMDWqVnv/exec
        await fetch(SHEETS_LINK, {
            method: "POST",
            body: JSON.stringify({
                fullName,
                email,
                phone,
                postcode,
                preferredDate,
                installedByOther,
                previouslyInstalled,
                installerName,
                installYear,
                notes,
                city,
                subject,
            }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Saving lead failed:", error);
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
}
