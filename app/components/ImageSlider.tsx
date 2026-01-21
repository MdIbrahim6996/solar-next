import React, { useRef } from "react";

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    altBefore?: string;
    altAfter?: string;
}

const ImageSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeSrc,
    afterSrc,
    altBefore = "Before image",
    altAfter = "After image",
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (containerRef.current) {
            containerRef.current.style.setProperty("--position", `${value}%`);
        }
    };

    return (
        <main className="relative grid place-items-center">
            {/* <p
                className="absolute top-0 left-0 z-100 p-0.5 px-6 m-2 bg-emerald-900 rounded-full text-brand-light-lime
             font-semibold font-spaceGrotesk"
            >
                Before
            </p> */}
            {/* <p
                className="absolute top-0 right-0 z-100 p-0.5 px-6 m-2 bg-emerald-900 rounded-full text-brand-light-lime
             font-semibold font-spaceGrotesk"
            >
                After
            </p> */}

            <div
                ref={containerRef}
                className="relative overflow-hidden rounded-lg"
                style={{ "--position": "50%" } as React.CSSProperties}
            >
                <div className="relative w-full h-[510px] aspect-square">
                    {/* BEFORE Image */}
                    <img
                        src={beforeSrc}
                        alt={altBefore}
                        className="absolute inset-0 h-full object-cover object-left"
                        style={{
                            width: "var(--position)",
                        }}
                    />
                    <p
                        className="absolute top-0 left-15 p-0.5 px-6 m-2 bg-emerald-900 rounded-full text-brand-light-lime font-semibold font-spaceGrotesk"
                    >
                        Before
                    </p>

                    {/* AFTER Image */}
                    <img
                        src={afterSrc}
                        alt={altAfter}
                        className="w-full h-full object-cover object-left"
                    />
                    <p
                        className="absolute top-0 right-15 --z-1 p-0.5 px-6 m-2 bg-emerald-900 rounded-full text-brand-light-lime
             font-semibold font-spaceGrotesk"
                    >
                        After
                    </p>
                </div>

                {/* Slider Input */}
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={50}
                    aria-label="Percentage of before photo shown"
                    className="absolute z-10 inset-0 w-full h-full cursor-pointer opacity-0"
                    onChange={handleSliderChange}
                />

                {/* Slider Line */}
                <div
                    className="absolute inset-0 w-0.5 h-full bg-white pointer-events-none"
                    style={{
                        left: "var(--position)",
                        transform: "translateX(-50%)",
                    }}
                />
                {/* Slider Button */}
                <div
                    className="absolute bg-white text-black p-2 rounded-full grid place-items-center shadow-lg pointer-events-none"
                    style={{
                        top: "50%",
                        left: "var(--position)",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {/* Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <line
                            x1="128"
                            y1="40"
                            x2="128"
                            y2="216"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                        ></line>
                        <line
                            x1="96"
                            y1="128"
                            x2="16"
                            y2="128"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                        ></line>
                        <polyline
                            points="48 160 16 128 48 96"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                        ></polyline>
                        <line
                            x1="160"
                            y1="128"
                            x2="240"
                            y2="128"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                        ></line>
                        <polyline
                            points="208 96 240 128 208 160"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                        ></polyline>
                    </svg>
                </div>
            </div>
        </main>
    );
};

export default ImageSlider;
