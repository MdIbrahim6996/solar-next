import dynamic from "next/dynamic";
import { Metadata } from "next";
import Hero from "../components/Hero";
import Features from "../components/Features";


const Pricing = dynamic(() => import("../components/Pricing"), {
    loading: () => null,
});

const Benefits = dynamic(() => import("../components/Benefits"), {
    loading: () => null,
});

const MaintenancePlan = dynamic(() => import("../components/MaintenancePlan"), {
    loading: () => null,
});

const TrustedBrands = dynamic(() => import("../components/TrustedBrands"), {
    loading: () => null,
});

const About = dynamic(() => import("../components/About"), {
    loading: () => null,
});

const Testimonial = dynamic(() => import("../components/Testimonial"), {
    loading: () => null,
});

const FAQs = dynamic(() => import("../components/FAQs"), {
    loading: () => null,
});
const Contact = dynamic(() => import("../components/Contact"), {
    loading: () => null,
});

export const metadata: Metadata = {
    title: "Solar Panel Maintenance in the UK | Solar MOT & Service Plans",
    description:
        "Premium solar panel maintenance for UK homeowners. Our certified Solar MOT includes cleaning, a 25-point system check, performance report, and ongoing service plans.",
};

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Pricing />
            <Benefits />
            {/* | TO-DO */}
            <MaintenancePlan />
            <TrustedBrands />
            <About />
            <Testimonial />
            <FAQs />
            <Contact />
        </>
    );
};

export default Home;
