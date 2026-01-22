"use client";

import { useGSAP } from "@gsap/react";
import { FaFilePen } from "react-icons/fa6";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { BsStars } from "react-icons/bs";
import { MdLibraryBooks, MdWorkHistory } from "react-icons/md";
import TestimonialSlider from "./TestimonialSlider";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Testimonial = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(
        () => {
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
                        trigger: ".testimonial",
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
                        trigger: ".testimonial",
                        start: "top center",
                    },
                }
            );

            ScrollTrigger.refresh();

            return () => {
                text.revert();
                subtext.revert();
            };
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            id="testimonial"
            className="testimonial font-montserrat mt-10 overflow-hidden py-20 md:mx-2 md:rounded-t-md"
        >
            <div className="text-brand-midnight items-start gap-2 md:px-[5%] mx-2">
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

                    <div className="text-brand-deep-navy mt-10 mr-10 md:ml-auto grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="border-brand-navy/50 w-fit border-l-2 pl-4">
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
                        <div className="border-brand-navy/50 w-fit border-l-2 pl-4">
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
                        <div className="border-brand-navy/50 w-fit border-l-2 pl-4">
                            <MdLibraryBooks
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text-3xl md:text-5xl font-medium">
                                200+
                            </p>
                            <p className="font-montserrat mt-2 text-2xl font-medium">
                                MOT Booked
                            </p>
                        </div>
                        <div className="border-brand-navy/50 w-fit border-l-2 pl-4">
                            <MdWorkHistory
                                size={60}
                                className="text-brand-navy mb-10"
                            />
                            <p className="text-3xl md:text-5xl font-medium">
                                10 Yrs+
                            </p>
                            <p className="font-montserrat mt-2 text-2xl font-medium">
                                Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-2 mt-15 w-fit gap-10 md:mx-auto md:grid-cols-4 md:gap-5">
                <div className="overflow-hidden">
                    <TestimonialSlider />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
