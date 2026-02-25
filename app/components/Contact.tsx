"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { useUserCity } from "../hooks/useUserCity";

const Contact = ({ initialCity }: { initialCity: string }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phone, setPhone] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [previouslyInstalled, setPreviouslyInstalled] = useState(false);
    const [installerName, setInstallerName] = useState("");
    const [installYear, setInstallYear] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    const { city } = useUserCity(initialCity);

    const today = useMemo(() => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const localDate = new Date(now.getTime() - offset * 60 * 1000);
        return localDate.toISOString().split("T")[0];
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const submitter = (e.nativeEvent as SubmitEvent)
            .submitter as HTMLButtonElement;
        const subject = submitter?.value;

        const formattedSubject =
            subject.charAt(0).toUpperCase() + subject.slice(1);

        const payload = {
            fullName,
            email,
            phone,
            postcode,
            preferredDate,
            previouslyInstalled,
            installerName: previouslyInstalled ? installerName : "",
            installYear: previouslyInstalled ? installYear : "",
            notes,
            city, // already in your component
            company: "", // honeypot (spam protection)
            subject,
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setLoading(false);
        console.log("Form submitted with payload:", payload);

        if (res.ok) {
            alert(`${formattedSubject} sent successfully!`);
        } else {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    }

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
                            Mon - Fri 9:00 AM to 5:00 PM
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
            <div className="text-brand-light-lime h-scree bg-emerald-900 p-4 py-20 shadow-sm md:rounded-xl md:p-8">
                <h3 className="font-raleway mb-2 text-2xl font-semibold md:text-3xl">
                    Book Your Solar MOT in {city}.
                </h3>
                <p className="font-inter mb-8 text-sm md:text-base">
                    Clean + 25-point health check, report & certificate, then
                    choose a monthly plan.
                </p>

                <form
                    className="space-y-6"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label htmlFor="name" className="text-sm">
                                Full Name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="name"
                                required={true}
                                onChange={(e) => setFullName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPostcode(e.target.value)}
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
                                onChange={(e) => setPhone(e.target.value)}
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
                                min={today}
                                onChange={(e) =>
                                    setPreferredDate(e.target.value)
                                }
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
                                    onChange={(e) =>
                                        setInstallerName(e.target.value)
                                    }
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
                                    max={new Date().getFullYear()}
                                    maxLength={4}
                                    step="1"
                                    placeholder="Enter year"
                                    id="installDate"
                                    onChange={(e) =>
                                        setInstallYear(e.target.value)
                                    }
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
                            onChange={(e) => setNotes(e.target.value)}
                            className="border-brand-light-lime font-inter w-full border-b bg-transparent text-sm focus:outline-none md:text-base"
                        />
                    </div>
                    {loading && (
                        <p className="text-center text-lg font-semibold">
                            Sending...
                        </p>
                    )}
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <button
                            aria-label="Book Solar MOT"
                            type="submit"
                            name="subject"
                            value="booking"
                            className="cursor-pointer bg-brand-light-lime hover:bg-brand-highlight text-brand-navy font-inter w-full rounded-md py-3 font-semibold transition-colors"
                        >
                            Book Solar MOT
                        </button>
                        <button
                            aria-label="Get a Plan Quote"
                            type="submit"
                            name="subject"
                            value="enquiry"
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
