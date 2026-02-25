"use client";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CookieFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="flex flex-col gap-2 mt-10">
            <div className="space-y-1 text-left">
                <div
                    className={`overflow-hidden border border-brand-deep-navy/70 rounded-lg bg-white transition-all duration-300 ${
                        openIndex === 1 ? "py-6" : "py-4"
                    }`}
                >
                    <div
                        onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                        className="flex w-full cursor-pointer items-center justify-between gap-2 px-6 text-left"
                    >
                        <h3 className="font-raleway text-brand-navy text-base font-semibold md:text-lg">
                            Information about Cookies
                        </h3>
                        <div className="bg-brand-light-lime flex min-h-6 min-w-6 items-center justify-center rounded-full text-emerald-900">
                            {openIndex === 1 ? (
                                <Minus size={16} />
                            ) : (
                                <Plus size={16} />
                            )}
                        </div>
                    </div>

                    {/* Answer */}
                    <div
                        className={`flex flex-col md:flex-row gap-5 w-full overflow-hidden px-6 transition-all duration-300 ${
                            openIndex === 1 ? "mt-3 max-h-96" : "max-h-0"
                        }`}
                    >
                        <div className="font-inter space-y-2 text-brand-navy w-full text-sm leading-5 md:text-base">
                            <p>
                                Comprehensive information on how to block or
                                erase cookies on a wide variety of desktop
                                browsers:{" "}
                                <Link
                                    href="http://www.aboutcookies.org"
                                    className="text-brand-dark-lime hover:underline"
                                >
                                    http://www.aboutcookies.org
                                </Link>
                            </p>

                            <p>
                                Useful information about cookies can be found
                                at:{" "}
                                <Link
                                    href="http://www.aboutcookies.org"
                                    className="text-brand-dark-lime hover:underline"
                                >
                                    http://www.aboutcookies.org
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-1 text-left">
                <div
                    className={`overflow-hidden border border-brand-deep-navy/70 rounded-lg bg-white transition-all duration-300 ${
                        openIndex === 2 ? "py-6" : "py-4"
                    }`}
                >
                    <div
                        onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                        className="flex w-full cursor-pointer items-center justify-between gap-2 px-6 text-left"
                    >
                        <h3 className="font-raleway text-brand-navy text-base font-semibold md:text-lg">
                            Internet Advertising Bureau
                        </h3>
                        <div className="bg-brand-light-lime flex min-h-6 min-w-6 items-center justify-center rounded-full text-emerald-900">
                            {openIndex === 2 ? (
                                <Minus size={16} />
                            ) : (
                                <Plus size={16} />
                            )}
                        </div>
                    </div>

                    {/* Answer */}
                    <div
                        className={`flex flex-col md:flex-row gap-5 w-full overflow-hidden px-6 transition-all duration-300 ${
                            openIndex === 2 ? "mt-3 max-h-96" : "max-h-0"
                        }`}
                    >
                        <p className="font-inter space-y-2 text-brand-navy w-full text-sm leading-5 md:text-base">
                            A guide to behavioural advertising and online
                            privacy has been produced by the internet
                            advertising industry which can be found at:{" "}
                            <Link
                                href=" http://www.youronlinechoices.eu"
                                className="text-brand-dark-lime hover:underline"
                            >
                                http://www.youronlinechoices.eu
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-1 text-left">
                <div
                    className={`overflow-hidden border border-brand-deep-navy/70 rounded-lg bg-white transition-all duration-300 ${
                        openIndex === 3 ? "py-6" : "py-4"
                    }`}
                >
                    <div
                        onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                        className="flex w-full cursor-pointer items-center justify-between gap-3 px-6 text-left"
                    >
                        <h3 className="font-raleway text-brand-navy text-base font-semibold md:text-lg">
                            International Chamber of Commerce United Kingdom
                        </h3>
                        <div className="bg-brand-light-lime flex min-h-6 min-w-6 items-center justify-center rounded-full text-emerald-900">
                            {openIndex === 3 ? (
                                <Minus size={16} />
                            ) : (
                                <Plus size={16} />
                            )}
                        </div>
                    </div>

                    {/* Answer */}
                    <div
                        className={`flex flex-col md:flex-row gap-5 w-full overflow-hidden px-6 transition-all duration-300 ${
                            openIndex === 3 ? "mt-3 max-h-96" : "max-h-0"
                        }`}
                    >
                        <p className="font-inter space-y-2 text-brand-navy w-full text-sm leading-5 md:text-base">
                            Information on the ICC (UK) cookie guide can be
                            found on the ICC website section: :{" "}
                            <Link
                                href="http://www.international-chamber.co.uk/our-expertise/digitaleconomy"
                                className="text-brand-dark-lime hover:underline"
                            >
                                http://www.international-chamber.co.uk/our-expertise/digitaleconomy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieFaq;
