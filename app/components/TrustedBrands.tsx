import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBrands = () => {
    return (
        <div className="my-20">
            <p className="font-inter text-brand-navy mb-5 text-center text-2xl font-semibold tracking-wide uppercase underline">
                Trusted By Brands
            </p>
            <div className="relative">
                <div className="absolute inset-0 z-2 h-full w-10 bg-linear-to-r from-slate-100 via-slate-100 to-transparent md:w-52" />
                <Marquee speed={200}>
                    <img
                        src="/images/solar-edge.png"
                        width="200"
                        height="25"
                        className="mx-5 grayscale-100"
                        alt="Solar Edge Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/solariboost_logo.png"
                        width="350"
                        height="45"
                        className="mx-3 grayscale-100"
                        alt="Solar I Boost Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/growatt.png"
                        width="200"
                        height="45"
                        className="mx-3 grayscale-100"
                        alt="Growatt Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/energyAce-Logo.png"
                        width="200"
                        height="45"
                        className="mx-20 grayscale-100"
                        alt="Energy Ace Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/solis-logo.webp"
                        width="200"
                        height="45"
                        className="mx-10 grayscale-100"
                        alt="Solis Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/sunsynk-logo.avif"
                        width="250"
                        height="45"
                        className="mx-10 grayscale-100"
                        alt="SunSynk Logo"
                        loading="lazy"
                        decoding="async"
                    />

                    <img
                        src="/images/trinasolar-logo.png"
                        width="250"
                        height="45"
                        className="mx-5 grayscale-100"
                        alt="Trina Solar Logo"
                        loading="lazy"
                        decoding="async"
                    />
                </Marquee>
                <div className="absolute top-0 right-0 z-2 h-full w-10 bg-linear-to-l from-slate-100 via-slate-100 to-transparent md:w-52" />
            </div>
        </div>
    );
};

export default TrustedBrands;
