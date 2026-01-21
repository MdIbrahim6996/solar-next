"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "Does rain clean solar panels?",
        answer: "Rain does not deep clean panels. Proper cleaning requires PV-safe soft brushes and purified water.",
        image: "/clean.webp",
    },
    {
        question: "How often should solar panels be cleaned?",
        answer: "A yearly clean is the baseline. Clean quarterly if your area has pollen, trees, coastal salt, or heavy bird activity.",
        image: "/how-often.webp",
    },
    {
        question: "My installer went bust — can you help?",
        answer: "Yes. We support most solar brands and systems and can onboard you during your maintenance visit (MOT).",
        image: "/bust.webp",
    },
    {
        question: "Do you need scaffolding for cleaning or inspections?",
        answer: "Usually no. We use long-reach tools and safe-access methods to avoid scaffolding in most cases.",
        image: "/scaffold.webp",
    },
    {
        question: "Will cleaning scratch my panels?",
        answer: "No. We avoid pressure washers and only use PV-safe brushes designed to protect the glass surface.",
        image: "/scratch.webp",
    },
    {
        question: "What happens if you find a fault?",
        answer: "We provide photos and repair options. Plus members receive priority support, and Premium includes emergency call-outs.",
        image: "/fault.webp",
    },
    {
        question: "What are the typical repair costs?",
        answer: "Call-out charges are £100–£150. Minor repairs range £150–£300. Inverter replacements typically cost £800–£1,200.",
        image: "/cost.webp",
    },
    {
        question: "Do you handle solar batteries or EV chargers?",
        answer: "Yes. You can request bundle pricing for batteries and EV charging systems.",
        image: "/ev-charger.webp",
    },
    {
        question: "What do I receive after a maintenance visit?",
        answer: "You get photos, a plain-English inspection summary, and an updated maintenance log.",
        image: "/maintenance.webp",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        // <section
        //     id="faqs"
        //     className="px-2 md:px- py-24 text-center"
        // >
        <section id="faqs" className="mx-auto max-w-7xl px-2 py-10 md:px-12">
            {/* Section Header */}
            <div className="text-center">
                {/* <p className="font-inter text-brand-slate text-sm mb-2 uppercase tracking-wide">
                    Trusted By
                </p> */}
                <h2 className="font-raleway text-brand-deep-navy mb-12 text-3xl leading-tight font-semibold md:text-5xl">
                    Any Questions. We Got You.
                </h2>
            </div>

            {/* FAQ List */}
            <div className="md:mx- flex flex-col gap-3 md:flex-row">
                <div className="space-y-1 text-left md:w-3xl">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                                    isOpen ? "py-6" : "py-4"
                                }`}
                            >
                                <div
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full cursor-pointer items-center justify-between gap-2 px-6 text-left"
                                >
                                    <h3 className="font-raleway text-brand-navy text-base font-semibold md:text-lg">
                                        {faq.question}
                                    </h3>
                                    <div className="bg-brand-light-lime flex min-h-6 min-w-6 items-center justify-center rounded-full text-emerald-900">
                                        {isOpen ? (
                                            <Minus size={16} />
                                        ) : (
                                            <Plus size={16} />
                                        )}
                                    </div>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`flex flex-col md:flex-row gap-5 ${
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : ""
                                    } pointer-events-none w-full overflow-hidden px-6 transition-all duration-300 ${
                                        isOpen ? "mt-3 max-h-96" : "max-h-0"
                                    }`}
                                >
                                    <div className="relative bg-brand-lime pointer-events-none h-50 md:w-1/2 overflow-hidden rounded-md">
                                        <Image
                                            src={faq.image}
                                            fill
                                            className="object-center"
                                            alt=""
                                        />
                                    </div>
                                    <p className="font-inter text-brand-navy/80 md:w-1/2 text-sm leading-5 md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="bg-brand-light-lime flex h-fit flex-1 flex-col justify-between rounded-lg p-4 text-emerald-900">
                    <div className="mb-30">
                        <p className="font-raleway mb-5 text-3xl font-medium">
                            Do You have more questions ?
                        </p>
                        <p className="font-inter text-left leading-5 text-emerald-900/90 md:text-lg md:leading-5.5">
                            We’re here to help you with anything pricing,
                            services, timelines. If your question isn’t covered
                            in the FAQs, feel free to reach out directly. We
                            understand you might want clarity before making a
                            decision.Whether it’s about, timelines, costs, or
                            integrations just ask. Our team will personally
                            respond and guide you.
                        </p>
                    </div>
                    <button className="font-inter capitalize text-brand-light-lime mt-2 w-full rounded-lg bg-emerald-900 px-10 py-2 font-medium">
                        shoot a direct mail
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
