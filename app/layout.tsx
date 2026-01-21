import type { Metadata } from "next";
import { Inter, Space_Grotesk, Raleway } from "next/font/google";
import "./globals.css";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});
const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Solar Maintenance in Kolkata | Solar MOT & Monthly Plans",
    description:
        "Premium solar maintenance for homeowners in Kolkata. Start with a Solar MOT: clean + 25-point check, report & certificate. Then choose a monthly plan. Book today.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${raleway.variable} ${spaceGrotesk.variable} antialiased bg-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}
