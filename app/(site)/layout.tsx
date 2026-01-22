import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { headers } from "next/headers";

async function getUserCity() {
    const headersList = await headers();
    return headersList.get("x-vercel-ip-city") || "City";
}

export async function generateMetadata(): Promise<Metadata> {
    const city = await getUserCity();

    return {
        title: `Solar Maintenance in ${city} | Solar MOT & Monthly Plans`,
        description: `Premium solar maintenance for homeowners in ${city}. Start with a Solar MOT: clean + 25-point check, report & certificate. Then choose a monthly plan. Book today.`,
    };
}

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
