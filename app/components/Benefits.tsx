"use client";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaMoneyBillWheat } from "react-icons/fa6";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import ImageSlider from "./ImageSlider";
import { FaPoundSign } from "react-icons/fa";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import BenefitCard from "./BenefitCard";

const benefits = [
    {
        title: "Maximise Performance",
        description:
            "Dirt, grime and bird mess can cut output by up to 30%. Regular solar panel cleaning and maintenance keeps your system producing the highest possible energy all year round.",
    },
    {
        title: "Reduce Downtime",
        description:
            "Loose wiring, pest damage and hidden faults often go unnoticed. Swift detection and routine solar inspections help spot issues early and prevent costly repairs or system downtime.",
    },
    {
        title: "Increase Solar Panel Lifespan",
        description:
            "Well-maintained panels last significantly longer. Our maintenance service protects your panels, mounting system and electrical components to ensure long-term reliability.",
    },
    {
        title: "Save Money",
        description:
            "An optimised system ensures maximum energy output at a lower cost by improving efficiency, reducing losses, and protecting long-term performance.",
    },
];

const Benefits = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    useGSAP(async () => {
        // Wait until all custom fonts are loaded
        await document.fonts.ready;

        // Force browser to finalize text layout
        gsap.set(subtextRef.current, { opacity: 1 });
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
                yPercent: 100,
            },
            {
                yPercent: 0,
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".benefits",
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
                    trigger: ".benefits",
                    start: "top center",
                },
            }
        );

        // gsap.from(subtextRef.current, {
        //     y: 30,
        //     opacity: 0,
        //     scale: 0.98,
        //     duration: 0.8,
        //     ease: "power3.out",
        //     delay: 0.15,
        //     scrollTrigger: {
        //         trigger: ".benefits",
        //         start: "top 75%",
        //     },
        // });
    });

    return (
        <section
            id="benefits"
            className="benefits bg-emerald-900 px-2 py-20 md:m-2 md:rounded-lg md:px-[5%]"
        >
            {/* Section Heading */}
            <div>
                <h2
                    ref={textRef}
                    className="font-raleway text-brand-light-bg text-3xl font-semibold md:text-5xl"
                >
                    Results You Can See
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter text-brand-light-bg/90 mt-5 md:ml-80 ml-10 md:w-[65%] text-base leading-5.5"
                >
                    At No1 Solar Care, we believe in helping every household
                    achieve long-term savings and energy independence. Discover
                    the benefits that make solar maintenance plan, the smartest
                    investment for modern homeowners.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="mt-20 grid gap-2 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={1}
                        title={benefits[0].title}
                        desc={benefits[0].description}
                        icon={MdOutlineEnergySavingsLeaf}
                    />
                    <BenefitCard
                        index={2}
                        title={benefits[1].title}
                        desc={benefits[1].description}
                        icon={LiaSortAmountDownSolid}
                    />
                </div>
                <div className="h-full w-full overflow-hidden rounded-xl">
                    <ImageSlider
                        beforeSrc={"/before.webp"}
                        afterSrc={"/after.webp"}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={3}
                        title={benefits[2].title}
                        desc={benefits[2].description}
                        icon={FaMoneyBillWheat}
                    />
                    <BenefitCard
                        index={4}
                        title={benefits[3].title}
                        desc={benefits[3].description}
                        icon={FaPoundSign}
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
