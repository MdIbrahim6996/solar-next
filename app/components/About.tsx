"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import Image from "next/image";
import CTAButton from "./CTAButton";

gsap.registerPlugin(SplitText, ScrollTrigger);

const features = [
    "Premium solar maintenance for homeowners — Start with a Solar MOT (£250): clean + 25-point health check, report & certificate",
    "Maximise output, reduce bills — Remove grime, fix small faults, optimise performance",
    "Prevent breakdowns — Proactive inspections and electrical testing catch issues early",
    "Warranty-friendly proof — Photo reports and a maintenance log after every visit",
    "Nationwide cover, local technicians — 24×7 assistance on higher plans",
    "We take over orphaned systems — Even if your original installer has gone",
    "Flexible plans — Standard, Plus, Premium; monthly, quarterly, or annual options",
    "Safe methods — Soft-brush, purified water (no pressure washers); Working-at-Height trained; fully insured",
    "Add-ons as needed — Bird-proofing, lichen removal, gutter clear, battery & EV checks",
];

const About = () => {
    const textRef = useRef(null);

    useGSAP(() => {
        const text = SplitText.create(textRef.current, {
            type: "lines",
            mask: "lines",
        });
        gsap.fromTo(
            text.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 80%",
                },
            }
        );
    });
    return (
        <section
            id="about"
            className="about flex flex-col items-center gap-20 px-2 py-10 md:flex-row md:px-[5%]"
        >
            {/* LEFT CONTENT */}
            <div className="md:w-[50%]">
                <button className="bg-brand-lime text-brand-deep-navy font-spaceGrotesk rounded-md px-5 py-2 text-sm font-medium">
                    Why us ?
                </button>
                <h2 className="font-raleway tracking-tigh text-brand-midnight mt-2 mb-20 text-4xl leading-10 md:mb-18">
                    <p className="mb-8 font-medium">
                        Performance You Feel, Protection You Trust
                    </p>

                    {features.map((service) => (
                        <div key={service} className="my-2 flex gap-1">
                            <div>
                                <MdCheckCircleOutline
                                    className="text-brand-dark-lime"
                                    size={20}
                                />
                            </div>
                            <div>
                                <p className="font-inter font-semibold text-base leading-5">
                                    {service.split("—")[0]}.
                                </p>
                                <p className="font-inter text-base leading-5">
                                    {service.split("—")[1]}.
                                </p>
                            </div>
                        </div>
                    ))}
                </h2>
                <CTAButton />

                {/* <div
                    onClick={() => scrollToSection("contact")}
                    className="text-brand-deep-navy flex h-full items-center"
                >
                    <button
                        aria-label="Book Solar MOT"
                        className="bg-brand-lime font-spaceGrotesk cursor-pointer gap-2 rounded-md px-5 py-2 font-medium"
                    >
                        Book Solar MOT
                    </button>
                    <button
                        aria-hidden="true"
                        className="bg-brand-lime h-full cursor-pointer rounded-md px-5 py-2"
                    >
                        <ArrowUpRight size={23} />
                    </button>
                </div> */}
            </div>
            {/* RIGHT IMAGE GRID */}
            {/* <div className="grid h-full grid-cols-2 gap-2 md:h-180 md:w-[60%]">
                <div className="col-span-2 row-span-2 h-140 overflow-hidden rounded-xl md:col-span-1 md:h-full">
                    <img
                        src="hero-prod.png"
                        alt="Solar panels on home roof"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-70 overflow-hidden rounded-xl md:h-full">
                    <img
                        src="/about1.jpeg"
                        alt="Solar technician installing panels"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-70 overflow-hidden rounded-xl md:h-full">
                    <img
                        src="/about2.jpeg"
                        alt="Modern solar setup on building"
                        className="h-full w-full scale-111 object-cover"
                    />
                </div>
            </div> */}

            <div className="w-screen md:w-1/2 md:hidden">
                <div className="relative h-100 rounded-md overflow-hidden mx-5">
                    <Image
                        fill
                        src="/hero-prod.png"
                        alt="Solar Panel"
                        className="object-cover"
                    />
                </div>
                <div className="flex mx-5 gap-2 mt-2">
                    <div className="relative w-1/2 h-80 rounded-md overflow-hidden">
                        <Image
                            fill
                            src="/about1.jpeg"
                            alt="Solar Panel"
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-1/2 h-80 rounded-md overflow-hidden">
                        <Image
                            fill
                            src="/about2.jpeg"
                            alt="Solar Panel"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden md:grid h-full grid-cols-2 gap-2 md:h-180 md:w-[60%]">
                <div className="relative col-span-2 row-span-2 h-140 overflow-hidden rounded-xl md:col-span-1 md:h-full">
                    <Image
                        src="/hero-prod.png"
                        alt="Solar panels on home roof"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative h-70 overflow-hidden rounded-xl md:h-full">
                    <Image
                        src="/about1.jpeg"
                        alt="Solar technician installing panels"
                        fill
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="object-cover"
                    />
                </div>

                <div className="relative h-70 overflow-hidden rounded-xl md:h-full">
                    <Image
                        src="/about2.jpeg"
                        alt="Modern solar setup on building"
                        fill
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="object-cover scale-110"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
