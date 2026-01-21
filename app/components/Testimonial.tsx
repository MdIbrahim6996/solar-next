"use client";

import { useGSAP } from "@gsap/react";
import { FaFilePen } from "react-icons/fa6";

const testimonials = [
    {
        quote: "Bill dropped after the Solar MOT — upgraded to Plus.",
        author: "James Turner",
        role: "Homeowner",
    },
    {
        quote: "Installer vanished; they took over and fixed two faults fast.",
        author: "Clarke Houston",
        role: "Customer",
    },
    {
        quote: "Clear photos, clear report, extra kWh we can see.",
        author: "Daniel Hughes",
        role: "Homeowner",
    },
];

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdLibraryBooks, MdWorkHistory } from "react-icons/md";
import TestimonialSlider from "./TestimonialSlider";

gsap.registerPlugin(SplitText);

const Testimonial = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

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

    const visibleCount = 3; // number of visible cards
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // Clone for infinite loop
    const slides = [
        ...testimonials.slice(-visibleCount),
        ...testimonials,
        ...testimonials.slice(0, visibleCount),
    ];

    const [index, setIndex] = useState<number>(visibleCount);
    const [_, setTransition] = useState<boolean>(true);
    // Auto slide
    useEffect(() => {
        const id = setInterval(() => {
            setTransition(true);
            setIndex((i) => i + 1);
        }, 5000);

        return () => clearInterval(id);
    }, []);

    // Handle infinite reset
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleEnd = () => {
            if (index === slides.length - visibleCount) {
                setTransition(false);
                setIndex(visibleCount);
            }

            if (index === 0) {
                setTransition(false);
                setIndex(testimonials.length);
            }
        };

        slider.addEventListener("transitionend", handleEnd);
        return () => slider.removeEventListener("transitionend", handleEnd);
    }, [index, slides.length]);

    return (
        <section
            id="testimonial"
            className="testimonial font-montserrat mt-10 overflow-hidden py-20 md:mx-2 md:rounded-t-md"
        >
            <div className="text-brand-midnight items-start gap-2 md:px-[5%]">
                <h2
                    ref={textRef}
                    className="font-raleway text-3xl font-semibold md:text-5xl"
                >
                    What Homeowners Say
                </h2>
                <div className="font-inter md:ml-auto ml-10 md:w-[80%] pt-5">
                    <p
                        ref={subtextRef}
                        className="font-inter text-justify text-base leading-5.5"
                    >
                        We don’t just take care of the solar panels, we deliver
                        lasting value. Discover how homeowners across the
                        country are saving thousands every year while enjoying
                        cleaner, more reliable energy. These stories are proof
                        that smart investments in solar maintenance lead to
                        brighter, more independent living from their solar PVs.
                    </p>

                    <div className="text-brand-deep-navy mt-10 mr-10 md:ml-auto grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="border-brand-navy w-fit border-l-2 pl-4">
                            <BsStars
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text-3xl md:text-5xl font-medium">
                                4.8/5
                            </p>
                            <p className="font-montserrat mt-2 text-2xl font-medium">
                                Rating
                            </p>
                        </div>
                        <div className="border-brand-navy w-fit border-l-2 pl-4">
                            <FaFilePen
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text-3xl md:text-5xl font-medium">
                                4,200+
                            </p>
                            <p className="font-montserrat text-l mt-2 text-2xl font-medium">
                                Reviews
                            </p>
                        </div>
                        <div className="border-brand-navy w-fit border-l-2 pl-4">
                            <MdLibraryBooks
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text-3xl md:text-5xl font-medium">
                                200+
                            </p>
                            <p className="font-montserrat text-l mt-2 text-2xl font-medium">
                                MOT Booked
                            </p>
                        </div>
                        <div className="border-brand-navy w-fit border-l-2 pl-4">
                            <MdWorkHistory
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text- text-5xl font-medium">
                                10 Yrs+
                            </p>
                            <p className="font-montserrat text-l mt-2 text-2xl font-medium">
                                Experience
                            </p>
                        </div>

                        {/* <div className="w-fit">
                            <p className="text-4xl font-medium">4,500+</p>
                            <p className="font-montserrat text-center text-lg font-medium">
                                Reviews
                            </p>
                        </div>
                        <div className="w-fit">
                            <p className="text-center text-4xl font-medium">
                                10+
                            </p>
                            <p className="font-montserrat text-center text-lg leading-4 font-medium">
                                Years of Industry <br /> Experience
                            </p>
                        </div> */}

                        {/* <div className="font-semibold text-3xl flex items-center gap-">
                    {" "}
                    <svg
                        viewBox="0 0 20 20"
                        className="h-12 w-12"
                        aria-hidden="true"
                    >
                        <path
                            d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                            fill="#00B67A"
                        />
                    </svg>
                    <p>TrustPilot</p>
                </div> */}
                    </div>
                </div>
            </div>

            <div className="mx-2 mt-15 w-fit gap-10 md:mx-auto md:grid-cols-4 md:gap-5">
                <div className="overflow-hidden">
                    <TestimonialSlider />
                </div>
            </div>
            {/* 
            <div className="mx-2 mt-15 grid grid-cols-1 gap-10 md:mx-20 md:grid-cols-4 md:gap-5">
                <div className="">
                    <RiDoubleQuotesR
                        size={80}
                        className="fill-brand-deep-navy stroke-brand-light-lime"
                    />
                    <p className="text-brand-deep-navy mt-20 text-5xl capitalize">
                        What our Customers are saying
                    </p>
                </div>
                <div className="col-span-3 overflow-hidden">
                    <TestimonialSlider />
                </div>
            </div> */}
        </section>
    );
};

export default Testimonial;
