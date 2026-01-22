import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
    quote: string;
    author: string;
    image: string;
    role: string;
};

const testimonials: Testimonial[] = [
    {
        quote: "Bill dropped after the Solar MOT — upgraded to Plus.",
        author: "James Turner",
        image: "/james turner.png",
        role: "Homeowner",
    },
    {
        quote: "Installer vanished; they fixed two faults fast.",
        author: "Clarke Houston",
        image: "/clarke houston.png",
        role: "Customer",
    },
    {
        quote: "The team handled everything smoothly.",
        author: "Sophia Adams",
        image: "/sophia adams.png",
        role: "Client",
    },
    {
        quote: "Professional and consistent support!",
        author: "Michael Lee",
        image: "/michael lee.png",
        role: "Buyer",
    },
    {
        quote: "Amazing attention to detail.",
        author: "Sarah Kim",
        image: "/sarah kim.png",
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

    const MIN_INDEX = 0;
    const MAX_INDEX = slides.length - visibleCount;

    const safeSetIndex = (next: number) => {
        if (next > MAX_INDEX) return visibleCount;
        if (next < MIN_INDEX) return testimonials.length;
        return next;
    };
    // Auto slide
    useEffect(() => {
        const id = setInterval(() => {
            setTransition(true);
            setIndex((i) => safeSetIndex(i + 1));
        }, 2000);

        return () => clearInterval(id);
    }, []);

    // Handle infinite reset
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleEnd = (e: TransitionEvent) => {
            if (e.target !== slider) return;
            if (index === slides.length - visibleCount) {
                setTransition(false);
                setIndex(visibleCount);
                requestAnimationFrame(() => {
                    setIndex(visibleCount);
                });
            }

            if (index === 0) {
                setTransition(false);
                setIndex(testimonials.length);
                requestAnimationFrame(() => {
                    setIndex(testimonials.length);
                });
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
                            image={t.image}
                            role={t.role}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
