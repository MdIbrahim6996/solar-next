"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import useCity from "../hooks/useCity";

const Contact = () => {
    const [previouslyInstalled, setPreviouslyInstalled] = useState(false);
    // const [selected, setSelected] = useState("");
    const city = useCity() ?? "Kolkata";

    return (
        <section
            id="contact"
            className="relative mx-auto grid max-w-7xl items-start gap-12 py-2 md:py-20 md:grid-cols-2 md:px-12"
        >
            {/* LEFT — Contact Info */}
            <div className="text-brand-deep-navy md:sticky top-20 mt-2 mb-5 space-y-4 px-4 md:space-y-8">
                {/* Chat */}
                <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6" />

                    <div>
                        <h4 className="font-raleway text-lg font-semibold">
                            Chat With Us
                        </h4>
                        <p className="font-inter text-sm">
                            Our friendly team is here to help.
                        </p>
                        <a
                            href="mailto:Info@no1home.co.uk"
                            className="font-inter mt-1 block font-medium hover:underline"
                        >
                            Info@no1home.co.uk
                        </a>
                    </div>
                </div>

                {/* Visit */}
                <div className="text-brand-deep-navy flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6" />
                    <div>
                        <h4 className="font-raleway text-lg font-semibold">
                            Visit Us
                        </h4>
                        <p className="font-inter text-sm text-[--color-brand-slate]">
                            Come say hello at our office HQ
                        </p>
                        <p className="font-inter mt-1 font-medium">
                            Green Park Arlington, <br /> 5 Exexter Park Road,
                            <br /> Bournemouth BH2 5BD
                        </p>
                    </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 text-[--color-brand-navy]" />
                    <div>
                        <h4 className="font-raleway text-lg font-semibold text-[--color-brand-navy]">
                            Call Us
                        </h4>
                        <p className="font-inter text-sm text-[--color-brand-slate]">
                            Mon - Fri 8:00 AM to 9:00 PM
                        </p>
                        <a
                            href="tel:1234567890"
                            className="font-inter mt-1 block font-medium text-[--color-brand-navy]"
                        >
                            0800 068 3387
                        </a>
                    </div>
                </div>
            </div>

            {/* RIGHT — Form */}
            <div className="text-brand-light-lime max-h-screen bg-emerald-900 p-4 py-20 shadow-sm md:rounded-xl md:p-8">
                <h3 className="font-raleway mb-2 text-2xl font-semibold md:text-3xl">
                    Book Your Solar MOT in {city}.
                </h3>
                <p className="font-inter mb-8 text-sm md:text-base">
                    Clean + 25-point health check, report & certificate, then
                    choose a monthly plan.
                </p>

                <form className="space-y-6" autoComplete="off">
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label htmlFor="name" className="text-sm">
                                Full Name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="name"
                                required={true}
                                className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="email" className="text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-4">
                        <div className="flex-1">
                            <label htmlFor="post" className="text-sm">
                                Post Code <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="post"
                                maxLength={8}
                                required={true}
                                className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="phone number" className="text-sm">
                                Phone Number <sup>*</sup>
                            </label>
                            <input
                                type="tel"
                                maxLength={10}
                                minLength={10}
                                id="phone number"
                                required={true}
                                className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="date" className="text-sm">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>Was your system installed by a different company?</p>
                        <div className="text-brand-light-bg flex w-fit items-center gap-3">
                            <span>No</span>

                            <button
                                type="button"
                                role="switch"
                                aria-checked={previouslyInstalled}
                                aria-labelledby="installed-label"
                                aria-label="Previously installed by another company"
                                onClick={() =>
                                    setPreviouslyInstalled(!previouslyInstalled)
                                }
                                className={`cursor-pointer relative inline-flex h-4 w-10 items-center rounded-full transition-colors duration-300 ${
                                    previouslyInstalled
                                        ? "bg-brand-light-lime/70"
                                        : "bg-brand-light-lime"
                                }`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`cursor-pointer inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                                        previouslyInstalled
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                    }`}
                                />
                            </button>
                            <span>Yes</span>
                        </div>
                    </div>

                    {previouslyInstalled === true ? (
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="installerName"
                                    className="text-sm"
                                >
                                    Installer Name
                                </label>
                                <input
                                    type="text"
                                    id="installerName"
                                    className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="installDate"
                                    className="text-sm"
                                >
                                    Install Date
                                </label>
                                <input
                                    type="number"
                                    min={1900}
                                    max={2099}
                                    maxLength={4}
                                    step="1"
                                    placeholder="Enter year"
                                    id="installDate"
                                    className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                                />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div>
                        <label htmlFor="notes" className="text-sm">
                            Notes
                        </label>
                        <textarea
                            rows={2}
                            id="notes"
                            className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            aria-label="Book Solar MOT"
                            type="submit"
                            className="cursor-pointer bg-brand-light-lime hover:bg-brand-highlight text-brand-navy font-inter w-full rounded-md py-3 font-semibold transition-colors"
                        >
                            Book Solar MOT
                        </button>
                        <button
                            aria-label="Get a Plan Quote"
                            type="button"
                            className="cursor-pointer border-brand-light-lime text-brand-light-lime hover:bg-brand-highlight font-inter w-full rounded-md border py-3 font-semibold transition-colors"
                        >
                            Get Plan Quote
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
