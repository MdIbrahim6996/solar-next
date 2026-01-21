import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
    quote: string;
    author: string;
    role: string;
};

const testimonials: Testimonial[] = [
    {
        quote: "Bill dropped after the Solar MOT — upgraded to Plus.",
        author: "James Turner",
        role: "Homeowner",
    },
    {
        quote: "Installer vanished; they fixed two faults fast.",
        author: "Clarke Houston",
        role: "Customer",
    },
    {
        quote: "The team handled everything smoothly.",
        author: "Sophia Adams",
        role: "Client",
    },
    {
        quote: "Professional and consistent support!",
        author: "Michael Lee",
        role: "Buyer",
    },
    {
        quote: "Amazing attention to detail.",
        author: "Sarah Kim",
        role: "Customer",
    },
];

export default function TestimonialSlider() {
    const visibleCount = 3; // number of visible cards
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // Clone for infinite loop
    const slides = [
        ...testimonials.slice(-visibleCount),
        ...testimonials,
        ...testimonials.slice(0, visibleCount),
    ];

    const [index, setIndex] = useState<number>(visibleCount);
    const [transition, setTransition] = useState<boolean>(true);

    // Auto slide
    useEffect(() => {
        const id = setInterval(() => {
            setTransition(true);
            setIndex((i) => i + 1);
        }, 5000);

        return () => clearInterval(id);
    }, []);

    // Handle infinite reset
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleEnd = () => {
            if (index === slides.length - visibleCount) {
                setTransition(false);
                setIndex(visibleCount);
            }

            if (index === 0) {
                setTransition(false);
                setIndex(testimonials.length);
            }
        };

        slider.addEventListener("transitionend", handleEnd);
        return () => slider.removeEventListener("transitionend", handleEnd);
    }, [index, slides.length]);

    return (
        <div className="h-full w-full max-w-6xl overflow-hidden py-12">
            {/* Track */}
            <div
                ref={sliderRef}
                className={`flex h-full ${
                    transition ? "transition-transform duration-500" : ""
                }`}
                style={{
                    transform: `translateX(-${(index * 100) / visibleCount}%)`,
                }}
            >
                {slides.map((t, i) => (
                    <div
                        key={i}
                        className=" px-2 h-full"
                        style={{
                            minWidth: `${100 / visibleCount}%`, // ⭐ FIX: ensures 3 cards visible
                        }}
                    >
                        <TestimonialCard
                            quote={t.quote}
                            author={t.author}
                            role={t.role}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
