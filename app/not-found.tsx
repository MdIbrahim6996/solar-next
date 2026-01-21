import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen bg-brand-light-bg relative overflow-hidden text-brand-midnight">
            <section className="h-full flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-[180px] leading-none font-extrabold bg-linear-to-b from-brand-dark-olive to-brand-dark-lime/70 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-4xl font-bold mt-6 text-brand-dark/85">
                    WE CAN’T <br /> FIND THIS PAGE
                </h2>

                <p className="max-w-md mt-4 text-sm text-brand-dark">
                    It looks like the page you’re looking for doesn’t exist or
                    might have been moved. Don’t worry, let’s get you back on
                    track!
                </p>

                <button className="mt-8 cursor-pointer bg-brand-dark-lime text-brand-light-bg px-8 py-3 rounded-full font-semibold">
                    <Link href="/">Back to Home</Link>
                </button>
            </section>
        </main>
    );
}
