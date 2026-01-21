import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
