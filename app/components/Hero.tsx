"use client";
import useCity from "../hooks/useCity";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Calculator = dynamic(() => import("./Calculator"), { ssr: false });

const services = [
    "Local technicians",
    "MCS certified",
    "Electrical testing",
    "Warranty records",
    "24/7 assistance",
    "Fully Insured",
];

const Hero = () => {
    const city = useCity() || "your area";

    return (
        <section
            id="home"
            className="relative flex h-screen flex-col justify-end overflow-hidden px-4 pb-20 md:m-1.5 md:rounded-lg md:px-10 md:pb-10"
        >
            {/* <picture className="absolute inset-0 h-screen w-full overflow-hidden">
                <source srcSet="/hero-mobile.webp" media="(max-width: 768px)" />
                <img
                    src="/hero-desktop.webp"
                    alt=""
                    className="hero_image h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </picture> */}

            <Image
                src="/hero-desktop.webp"
                alt="Solar maintenance services"
                fill
                fetchPriority="high"
                sizes="(max-width: 480px) 100vw,
                       (max-width: 768px) 100vw,
                       (max-width: 1200px) 1200px,
                       1200px"
                className="object-cover"
            />
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 hidden bg-linear-to-b from-black/15 via-black/45 via-55% to-black/90 md:block" />
            <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.15)] via-[rgba(0,0,0,0.85)] via-65% to-[rgba(0,0,0,0.9)] md:hidden" />

            {/* Content */}
            <div className="relative flex h-screen justify-between">
                <div className="flex h-full flex-col justify-end md:w-3xl">
                    <h1 className="font-raleway text-brand-light-bg text-4xl leading-10 font-semibold md:text-6xl md:leading-16">
                        Solar Maintenance for Homeowners in{" "}
                        <span className="capitalize">{city}</span>
                    </h1>
                    <p className="hidden md:block font-inter text-brand-lime mt-4 text-base leading-4.5 md:text-lg md:leading-5.5">
                        More output • Fewer surprises • Nationwide coverage
                    </p>
                    <p className="md:hidden font-inter text-brand-lime mt-4 text-base leading-4.5 md:text-lg md:leading-5.5">
                        More output • Fewer surprises • <br />
                        Nationwide coverage
                    </p>
                    <p className="mt-4 md:mt-1 font-inter text-brand-lime max-w-3xl text-base leading-4.5 tracking-tight md:leading-5.5">
                        Start with a Solar MOT | Clean your system | 25-point
                        health check | Report & electrical certificate.
                    </p>

                    <div className="mt-6 flex items-center gap-2 md:mt-7">
                        <Link
                            href="#contact"
                            className="border-brand-lime bg-brand-lime text-brand-midnight font-spaceGrotesk cursor-pointer gap-2 rounded-md border px-5 py-2 text-sm font-medium"
                        >
                            Book Solar MOT
                        </Link>
                        <Link
                            href="#plans"
                            className="border-brand-lime text-brand-lime font-spaceGrotesk cursor-pointer gap-2 rounded-md border px-5 py-2 text-sm font-medium"
                        >
                            View Plans
                        </Link>
                    </div>

                    <div className="font-inter text-brand-lime mt-4 grid grid-cols-2 md:grid-cols-3 md:text-lg">
                        {services.map((service) => (
                            <div
                                key={service}
                                className="flex items-center gap-1"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
                                </svg>
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block relative top-17 w-[20rem] h-[calc(100dvh-6rem)]">
                    <Calculator />
                </div>
            </div>

            {/* <div className="absolute top-40 -right-18 w-fit rotate-90 gap-2 md:hidden">
                <button
                    onClick={() => setCalcOpen(true)}
                    className="cursor-pointer bg-brand-lime text-brand-deep-navy font-spaceGrotesk rounded-b-md px-6 py-1 text-sm font-semibold"
                >
                    Calculate Savings
                </button>
            </div> */}

            {/* {calcOpen && (
        <div className="absolute top-0 left-0 z-100 md:hidden">
          <Calculator handleClose={() => setCalcOpen(false)} />
        </div>
      )}
      <div className="absolute top-20 right-4 hidden w-fit gap-2 md:block">
        <Calculator />
      </div> */}
        </section>
    );
};

export default Hero;
