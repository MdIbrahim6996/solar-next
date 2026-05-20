import { MdCheckCircleOutline } from "react-icons/md";
import Image from "next/image";
import CTAButton from "./CTAButton";

const features = [
    "Premium solar maintenance for homeowners — Start with a Solar MOT (£250): clean + 25-point health check, report & certificate",
    "Maximise output, reduce bills — Remove grime, fix small faults, optimise performance",
    "Prevent breakdowns — Proactive inspections and electrical testing catch issues early",
    "Warranty-friendly proof — Photo reports and a maintenance log after every visit",
    "Nationwide cover, local technicians — 24×7 assistance on higher plans",
    "We take over orphaned systems — Even if your original installer has gone",
    "Flexible plans — Standard, Plus, Premium; monthly, quarterly, or annual options",
    "Safe methods — Soft-brush, purified water (no pressure washers); Working-at-Height trained; fully insured",
    "Add-ons as needed — Bird-proofing, lichen removal, gutter clear, battery & EV checks",
];

const About = () => {
    return (
        <section
            id="about"
            className="about flex flex-col items-center gap-20 px-2 py-10 md:flex-row md:px-[5%]"
        >
            {/* LEFT CONTENT */}
            <div className="md:w-[50%]">
                <button className="bg-brand-lime text-brand-deep-navy font-spaceGrotesk rounded-md px-5 py-2 text-sm font-medium">
                    Why us ?
                </button>
                <h2 className="font-raleway tracking-tigh text-brand-midnight mt-2 mb-20 text-4xl leading-10 md:mb-18">
                    <p className="mb-8 font-medium">
                        Performance You Feel,
                        <br /> Protection You Trust
                    </p>

                    {features.map((service) => (
                        <div key={service} className="my-2 flex gap-1">
                            <div>
                                <MdCheckCircleOutline
                                    className="text-brand-dark-lime"
                                    size={20}
                                />
                            </div>
                            <div>
                                <p className="font-inter font-semibold text-base leading-5">
                                    {service.split("—")[0]}.
                                </p>
                                <p className="font-inter text-base leading-5">
                                    {service.split("—")[1]}.
                                </p>
                            </div>
                        </div>
                    ))}
                </h2>
                <CTAButton />
            </div>

            <div className="w-screen md:w-1/2 md:hidden">
                <div className="relative h-100 rounded-md overflow-hidden mx-5">
                    <img
                        src="/images/hero-prod.webp"
                        alt="Solar Panel"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="flex mx-5 gap-2 mt-2">
                    <div className="relative w-1/2 h-80 rounded-md overflow-hidden">
                        <img
                            src="/images/about1.jpeg"
                            alt="Solar Panel"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="relative w-1/2 h-80 rounded-md overflow-hidden">
                        <img
                            src="/images/about2.jpeg"
                            alt="Solar Panel"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden md:grid h-full grid-cols-2 gap-2 md:h-180 md:w-[60%]">
                <div className="relative col-span-2 row-span-2 h-140 overflow-hidden rounded-xl md:col-span-1 md:h-full">
                    <img
                        src="/images/hero-prod.webp"
                        alt="Solar panels on home roof"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="relative h-70 overflow-hidden rounded-xl md:h-full">
                    <img
                        src="/images/about1.jpeg"
                        alt="Solar technician installing panels"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="relative h-70 overflow-hidden rounded-xl md:h-full">
                    <img
                        src="/images/about2.jpeg"
                        alt="Modern solar setup on building"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
