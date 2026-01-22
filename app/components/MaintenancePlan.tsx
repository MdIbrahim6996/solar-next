"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import MaintenanceCard from "./MaintenanceCard";
import Image from "next/image";
// import { useAutoFetch } from "../../hooks/useAutoFetch";

const installationSteps = [
    {
        id: 1,
        title: "Annual Solar Maintenance Visit",
        subtitle:
            "Every plan starts with a professional solar maintenance session.",
        standard: "Annual panel cleaning.",
        plus: "Cleaning + full electrical safety test.",
        premium:
            "Cleaning + safety test + advanced diagnostics in one complete service.",
    },
    {
        id: 2,
        title: "System Inspection & Diagnostic Checks",
        reftext: "By Plan:",
        subtitle:
            "We inspect your solar system for health, safety and performance.",
        standard: "Virtual system inspection.",
        plus: "Detailed inverter diagnostics.",
        premium: "Full diagnostics + thermal imaging + deep system testing.",
    },
    {
        id: 3,
        title: "Inverter & Output Performance Review",
        reftext: "By Plan:",
        subtitle:
            "Your inverter is checked and your system output is analysed.",
        standard: "Basic inverter check.",
        // plus: "Advanced inverter diagnostics + performance guarantee.",
        plus: "Advanced inverter diagnostics ",
        premium: "Full inverter optimisation + annual efficiency tuning.",
    },
    {
        id: 4,
        title: "Call-Outs & Support Access",
        reftext: "By Plan:",
        subtitle: "Need help? Your response speed depends on your plan.",
        standard: "Standard support.",
        plus: "Priority call-out response.",
        premium: "Unlimited call-outs included (no extra fees).",
    },
    {
        id: 5,
        title: "Reporting & Monitoring",
        reftext: "By Plan:",
        subtitle:
            "Every visit ends with a clear summary of your system’s condition.",
        standard: "Basic output report.",
        plus: "Full technician photo report.",
        premium:
            "Full report + remote monitoring setup + battery health check.",
    },
    {
        id: 6,
        title: "Protection, Guarantees & Annual Review",
        reftext: "By Plan:",
        subtitle: "We keep your system safe and efficient long-term.",
        standard: "Annual report reminder.",
        plus: "System performance guarantee.",
        premium:
            "Parts & labour warranty (up to £X/yr) + extended lifetime guarantee.",
    },
];

const MaintenancePlan = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    // const install = useAutoFetch<any>("/InstallationProcess");

    useGSAP(() => {
        const text = SplitText.create(textRef.current, {
            type: "lines",
            mask: "lines",
        });
        const subtext = SplitText.create(subtextRef.current, {
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
                    trigger: ".install",
                    start: "top 70%",
                },
            }
        );
        gsap.fromTo(
            subtext.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".install",
                    start: "top center",
                },
            }
        );
        gsap.fromTo(
            ".install-grid .card",
            {
                y: "100%",
                opacity: 0,
            },
            {
                y: "0%",
                opacity: 1,
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".install-grid",
                    start: "top 70%",
                },
            }
        );
    });
    return (
        <section
            id="installation"
            className="install relative  overflow-hidden bg-emerald-900 md:mx-2 md:rounded-t-md"
        >
            <Image
                src="/about-1.webp"
                alt="Solar maintenance services"
                fill
                sizes="(max-width: 480px) 100vw,
                       (max-width: 768px) 100vw,
                       (max-width: 1200px) 1200px,
                       1200px"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative px-2 py-20 md:px-[5%]">
                <div>
                    <h2
                        ref={textRef}
                        className="font-raleway text-brand-light-bg text-3xl font-semibold md:text-5xl"
                    >
                        How Our Maintenance Plan Works
                    </h2>
                    <p
                        ref={subtextRef}
                        className="font-inter text-brand-light-bg/90 mt-5 md:ml-80 ml-10 md:w-[65%] text-base leading-5.5"
                    >
                        Our dedicated team of engineers offer end-to-end solar
                        maintenance care and solutions to meet your needs. This
                        is what the process looks like, once you’ve booked a
                        plan
                    </p>
                </div>

                <div className="install-grid mt-20 grid h-full gap-2 md:grid-cols-3 md:gap-3">
                    {installationSteps.map((item) => (
                        <MaintenanceCard
                            key={item.id}
                            itemNo={item.id}
                            title={item.title}
                            reftext={item.reftext}
                            subtitle={item.subtitle}
                            standard={item.standard}
                            plus={item.plus}
                            premium={item.premium}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaintenancePlan;
