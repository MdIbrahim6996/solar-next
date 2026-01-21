"use client";
import { Check } from "lucide-react";
import {
    GiMoebiusTriangle,
    GiCheckeredDiamond,
    GiUpgrade,
    GiAutoRepair,
} from "react-icons/gi";
import { IoMdCube } from "react-icons/io";
import { openGmail } from "../utils/constants";

import { MdOutlineCleaningServices } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import Image from "next/image";

const plans = [
    {
        title: "Standard",
        price: {
            monthly: "£19",
            yearly: "£199",
        },
        subtitle: "Newer Systems.",
        features: [
            "1× visit/yr (clean + visual).",
            "Light electrical checks.",
            "Monthly desk review.",
            "Standard support",
        ],
        button: "Get Started",
        highlight: false,
    },
    {
        title: "Plus",
        price: {
            monthly: "£33",
            yearly: "£349",
        },
        subtitle: "Best for growing families",
        features: [
            "4× visits/yr (clean + inspection).",
            "Full electrical safety test (annual).",
            "24/7 monitoring + weekly summaries.",
            "Priority call-outs.",
            "Full photo report.",
        ],
        button: "Get Started",
        highlight: true,
    },
    {
        title: "Premium",
        price: {
            monthly: "£55",
            yearly: "£599",
        },
        subtitle: "For large homes or businesses",
        features: [
            "Quarterly + on-demand visits (incl. post-storm).",
            "Full electrical testing each visit.",
            "24/7 monitoring + real-time alerts.",
            "24/7 emergency assistance included.",
            "Best pricing on add-ons.",
        ],
        button: "Get Started",
        highlight: false,
    },
];
const Pricing = () => {
    return (
        <section id="pricing" className="my-2 px-2 md:px-2">
            <div className="relative md:h-220 h-520 overflow-hidden rounded-md">
                {/* <img
                    src="/hero-new.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                /> */}
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
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 h-full w-full p-5 py-10">
                    <p className="text-brand-lime font-raleway text-center text-5xl font-semibold capitalize">
                        solar maintenance plans
                    </p>
                    <div className="mx-auto mt-3 grid md:w-3xl grid-cols-2 md:grid-cols-5  gap-2">
                        <div className="bg-brand-light-bg/10 rounded-md p-3 backdrop-blur-sm">
                            <div className="">
                                <MdOutlineCleaningServices
                                    size={40}
                                    className="text-brand-lime/90 font-extralight"
                                />
                            </div>
                            <p className="font-raleway text-brand-light-bg mt-3 text-xl leading-6 font-medium">
                                Panel Cleaning
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 rounded-md p-3 backdrop-blur-sm">
                            <div className="mx-aut w-fit">
                                <GrHostMaintenance
                                    size={40}
                                    className="text-brand-lime/90 font-extralight"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </div>
                            <p className="font-raleway text-brand-light-bg mt-3 text-xl leading-6 font-medium">
                                Routine Maintenace
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 rounded-md p-3 backdrop-blur-sm">
                            <div className="mx-aut w-fit">
                                <TbReportAnalytics
                                    size={45}
                                    className="text-brand-lime/90 font-extralight"
                                />
                            </div>
                            <p className="font-raleway text-brand-light-bg mt-3 text-xl leading-6 font-medium">
                                Performance Reports
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 rounded-md p-3 backdrop-blur-sm">
                            <div className="mx-aut w-fit">
                                <GiUpgrade
                                    size={40}
                                    className="text-brand-lime/90 font-extralight"
                                />
                            </div>
                            <p className="text-cente font-raleway text-brand-light-bg mt-3 text-xl leading-6 font-medium">
                                Upgrade Systems
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 rounded-md p-3 backdrop-blur-sm col-span-2 md:col-span-1">
                            <div className="mx-auto md:mx-0 w-fit">
                                <GiAutoRepair
                                    size={40}
                                    className="text-brand-lime/90 font-extralight"
                                />
                            </div>
                            <p className="text-center md:text-left font-raleway text-brand-light-bg mt-3 text-xl leading-6 font-medium">
                                System Repair
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute md:top-80 top-155 w-full md:px-20 px-2">
                    {/* Pricing Grid */}
                    <div className="grid gap-3 md:grid-cols-3 grid-cols-1">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                                    plan.highlight
                                        ? "text-brand-light-bg bg-emerald-900"
                                        : "bg-brand-light-bg text-brand-navy border border-slate-300"
                                }`}
                            >
                                {plan.highlight && (
                                    <p className="btn font-spaceGrotesk bg-brand-lime text-brand-midnight absolute top-3 right-3 overflow-hidden rounded-full px-4 py-0.5 text-sm font-medium">
                                        Most Popular
                                    </p>
                                )}
                                {/* Header */}
                                <div>
                                    {plan.title === "Standard" && (
                                        <IoMdCube
                                            size={70}
                                            className="mb-1 rotate-0"
                                        />
                                    )}
                                    {plan.title === "Plus" && (
                                        <GiMoebiusTriangle
                                            size={70}
                                            className="rotate-15"
                                        />
                                    )}
                                    {plan.title === "Premium" && (
                                        <GiCheckeredDiamond
                                            size={70}
                                            className="rotate-"
                                        />
                                    )}
                                </div>
                                <h3 className="font-spaceGrotesk mb-2 text-2xl font-semibold uppercase">
                                    {plan.title}
                                </h3>
                                <p className="font-inter mb-6 text-sm opacity-80">
                                    {plan.subtitle}
                                </p>
                                <button
                                    onClick={() => openGmail()}
                                    aria-label={`Get started with the ${plan.title} solar maintenance plan`}
                                    className={`btn font-spaceGrotesk relative mb-8 w-full cursor-pointer overflow-hidden rounded-md py-3 font-semibold transition-all ${
                                        plan.highlight
                                            ? "bg-brand-light-lime text-brand-deep-navy hover:bg-brand-lime"
                                            : "bg-brand-navy text-brand-light-bg hover:bg-[--color-brand-highlight]"
                                    }`}
                                >
                                    {plan.button}
                                </button>

                                {/* Features */}
                                <ul className="w-full space-y-3 text-left text-sm">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <Check
                                                size={16}
                                                className="mt-0.5"
                                            />
                                            <span className="font-inter">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
