"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { scrollToSection } from "../utils/constants";
const Modal = dynamic(() => import("./Modal"), { ssr: false });
import { GrCertificate, GrServices } from "react-icons/gr";
import { MdMoveUp } from "react-icons/md";
import { LuMonitorCog } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const subtextContent = [
    "Deep Clean + 25 Point Health Check",
    "Performance Report + Solar MOT Certificate",
    "If Installed by Someone - We Onboard & Take Over",
    "Pay £250 online for the Solar MOT",
    "Your plan then bills monthly by direct debit",
];

const newCards = [
    {
        id: 1,
        title: "Book & Pay|Solar MOT.",
        icon: <FaRegCalendarAlt className="text-brand-deep-navy" size={60} />,
    },
    {
        id: 2,
        title: "Service &|Maintenance",
        icon: <GrServices className="text-brand-deep-navy" size={60} />,
    },
    {
        id: 3,
        title: "Report &|Cetificate",
        icon: <GrCertificate className="text-brand-deep-navy" size={60} />,
    },
    {
        id: 4,
        title: "Pick a|Monthly Plan",
        icon: <MdMoveUp className="text-brand-deep-navy" size={60} />,
    },
    {
        id: 5,
        title: "Fulfilment &|Implementation",
        icon: <LuMonitorCog className="text-brand-deep-navy" size={60} />,
    },
];

const Features = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    const [open, setOpen] = useState(false);

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
            className="install relative mt-1.5 min-h-screen overflow-hidden bg-emerald-900 md:mx-2 md:rounded-md"
        >
            {/* <img
                src="/panel-install.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                alt=""
            /> */}
            <Image
                src="/panel-install.jpg"
                alt="Solar maintenance services"
                fill
                fetchPriority="high"
                sizes="(max-width: 480px) 100vw,
                                   (max-width: 768px) 100vw,
                                   (max-width: 1200px) 1200px,
                                   1200px"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative px-2 py-20 md:px-[5%]">
                <div className="text-brand-lime mb-24 space-y-2 text-center">
                    <h2
                        ref={textRef}
                        className="font-raleway text-3xl font-semibold md:text-5xl"
                    >
                        Start with a Solar MOT.
                    </h2>
                    <div
                        ref={subtextRef}
                        className="mx-auto mt-15 w-fit space-y-1"
                    >
                        {subtextContent.map((text, index) => (
                            <p
                                key={text}
                                className={`font-inter ${
                                    index % 2 !== 0
                                        ? "bg-brand-lime/40"
                                        : "bg-brand-navy/40"
                                } text-brand-light-bg/90 w-fi mx-auto rounded-full px-6 py-1 md:text-lg text-sm backdrop-blur-xl`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="mx-auto mt-6 flex w-fit items-center gap-2 md:mt-7">
                        <Link
                            href="#contact"
                            className="border-brand-lime bg-brand-lime
                            text-brand-midnight font-spaceGrotesk cursor-pointer
                            gap-2 rounded-md border px-5 py-2 text-sm
                            font-medium"
                        >
                            Book Solar MOT
                        </Link>
                        <button
                            onClick={() => setOpen(true)}
                            className="border-brand-lime text-brand-lime font-spaceGrotesk cursor-pointer gap-2 rounded-md border px-2 md:px-5 py-2 text-sm font-medium"
                        >
                            View 25 Points Checklist
                        </button>
                    </div>
                    <Modal isOpen={open} onClose={() => setOpen(false)} />
                </div>

                <div className="install-grid relative grid h-full gap-1 grid-cols-2 md:grid-cols-5 md:gap-6">
                    {newCards.map((item, i) => (
                        <div
                            key={item.id}
                            onClick={
                                item.title === "Pick a Monthly Plan"
                                    ? () => scrollToSection("pricing")
                                    : undefined
                            }
                            className={`${
                                i === 4 ? "col-span-2 md:col-span-1" : ""
                            } bg-brand-lime relative z-2 flex h-40 md:h-50 cursor-pointer flex-col justify-between rounded-md p-3`}
                        >
                            <div className="mx-auto w-fit">{item.icon}</div>
                            <div className="text-xl md:text-2xl leading-5 md:leading-6.5">
                                <p className="text-brand-deep-navy mx-auto flex w-fit items-end text-center  font-medium">
                                    {item.title.split("|")[0]}
                                </p>
                                <p className="text-brand-deep-navy mx-auto flex w-fit items-end text-center  font-medium">
                                    {item.title.split("|")[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-brand-lime absolute top-1/2 z-1 w-full border-b-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Features;
