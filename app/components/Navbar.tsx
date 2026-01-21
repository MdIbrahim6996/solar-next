"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/constants";
import CTAButton from "./CTAButton";
import Link from "next/link";

const mobileLinks = [
    "Home",
    "About",
    "Benefits",
    "Pricing",
    "Installation",
    "Testimonial",
    "ROI",
    "FAQs",
    "Contact",
];

const MobileNavButton = ({
    title,
    handleCLoseMenu,
}: {
    title: string;
    handleCLoseMenu: () => void;
}) => {
    return (
        <span className="cursor-pointer capitalize" onClick={handleCLoseMenu}>
            {title}
        </span>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    useGSAP(() => {
        gsap.from("nav", {
            y: -100,
            duration: 1,
        });
        gsap.from(".links span", {
            y: 100,
            delay: 0.5,
            stagger: 0.1,
        });
    });
    useGSAP(() => {
        if (open) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in",
            });
        }
    }, [open]);

    return (
        <>
            <nav className="fixed w-screen h-16 z-100 top-0 overflow-hidden">
                <div
                    className="flex items-center justify-between md:px-4 px-2 bg-brand-charcoal/15 backdrop-blur-sm
             text-brand-light-bg m-2 mx-2 md:mr-5 rounded-md py-2"
                >
                    <Link href="#hero" className="w-16 md:w-40 md:h-10">
                        <img
                            src="/solarcare-logo.svg"
                            className="h-full w-full object-"
                            alt=""
                        />
                    </Link>
                    <div className="links md:flex gap-5 justify-center translate-x-10 font-spaceGrotesk hidden">
                        <Link href="/" className="cursor-pointer">
                            Home
                        </Link>
                        <Link href="#services" className="cursor-pointer">
                            Services
                        </Link>
                        <Link href="#pricing" className="cursor-pointer">
                            Plans
                        </Link>
                        <Link href="#contact" className="cursor-pointer">
                            Contact
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <CTAButton />
                    </div>

                    {/* <div
                        onClick={() => scrollToSection("contact")}
                        className="hidden md:flex items-center h-full"
                    >
                        <button
                            aria-label="Book Solar MOT"
                            className="gap-2 cursor-pointer bg-brand-lime text-sm font-medium text-brand-midnight font-spaceGrotesk px-5 py-2 rounded-md"
                        >
                            Book Solar MOT
                        </button>
                        <button
                            aria-hidden="true"
                            className="bg-brand-lime cursor-pointer text-brand-midnight h-full px-5 py-2 rounded-md"
                        >
                            <ArrowUpRight size={20} />
                        </button>
                    </div> */}
                    <div className="md:hidden">
                        <button
                            aria-label="Close Button"
                            onClick={() => setOpen(!open)}
                            className="bg-brand-lime text-brand-midnight px-3 py-2 rounded-md"
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
            <div
                ref={menuRef}
                className=" fixed w-4/4 h-screen bg-brand-midnight text-brand-light-bg 
                    p-8 pt-2 z-1000 font-spaceGrotesk shadow-xl translate-x-full"
            >
                <div className="mb-20 mt-3">
                    <button
                        aria-label="Close"
                        onClick={() => setOpen(!open)}
                        className="bg-brand-lime text-brand-midnight px-3 py-2 rounded-md"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 text-lg">
                    {mobileLinks.map((link) => (
                        <MobileNavButton
                            key={link}
                            title={link}
                            handleCLoseMenu={() => {
                                setOpen(false);
                                scrollToSection(link.toLowerCase());
                            }}
                        />
                    ))}
                </div>
                {/* 
                <div className="mt-10 flex flex-coap-4">
                    <button
                        aria-label="Get A Free Quote"
                        className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md font-medium"
                    >
                        Get A Free Quote
                    </button>
                    <button
                        aria-hidden="true"
                        className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md flex items-center justify-center"
                    >
                        <ArrowUpRight size={22} />
                    </button>
                </div> */}
                <CTAButton />
            </div>
        </>
    );
};

export default Navbar;
