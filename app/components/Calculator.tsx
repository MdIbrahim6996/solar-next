"use client";

import Link from "next/link";
import { useState } from "react";

export default function Calculator({
    handleClose,
}: {
    handleClose?: () => void;
}) {
    const [size, setSize] = useState(4);
    const [showAdvanced, setShowAdvanced] = useState(true);
    const [price, setPrice] = useState(0.3);
    const [uplift, setUplift] = useState(20);

    const YIELD_PER_KW = 850;

    const nf = new Intl.NumberFormat("en-GB", {
        maximumFractionDigits: 0,
    });

    const cf = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    const base = size * YIELD_PER_KW;
    const extra = base * (uplift / 100);
    const saving = extra * price;

    return (
        <div className="scrollbar-hide bg-brand-charcoal/20 font-spaceGrotesk overflow-y-scrol flex h-full max-w-screen flex-col justify-between rounded-md border border-black/10 p-3 shadow-xl backdrop-blur-md">
            <div>
                <button
                    onClick={handleClose}
                    className="bg-brand-lime text-brand-deep-navy mb-5 w-fit rounded-full p-1 px-6 font-semibold md:hidden"
                >
                    Close X
                </button>
                <h2 className="text-brand-lime mb-1 text-xl leading-5 font-semibold">
                    How much could maintenance save you each year?
                </h2>

                <p className="text-gray-60 text-brand-light-bg mb-4 text-xs">
                    We use UK norms: 850 kWh/kW/yr baseline, +20% boost from
                    maintenance, and £0.30/kWh.
                </p>

                {/* Slider */}
                <div>
                    <div className="text-brand-light-lime flex justify-between font-semibold">
                        <span>System size</span>
                        <span>{size} kW</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.5"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="accent-brand-navy mt-3 w-full border-none outline-none focus:ring-0 focus:outline-none"
                    />
                </div>

                <div className="scrollbar-hide max-h-[45dvh] overflow-y-scroll">
                    {/* Advanced Toggle */}
                    <div
                        className="text-brand-lime mt-3 cursor-pointer text-sm underline"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                    >
                        Advanced settings
                    </div>

                    {/* Advanced Box */}
                    {showAdvanced ? (
                        <div className="mt-3 space-y-3">
                            <div>
                                <label className="text-brand-light-bg font-medium">
                                    Unit price (p/kWh)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                    className="border-brand-light-lime/20 mt-1 w-full rounded-lg border p-2 text-lime-100 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-brand-light-bg font-medium">
                                    Expected uplift (%)
                                </label>
                                <input
                                    type="number"
                                    step="1"
                                    max={100}
                                    value={uplift}
                                    onChange={(e) =>
                                        setUplift(Number(e.target.value))
                                    }
                                    className="border-brand-light-lime/20 mt-1 w-full rounded-lg border p-2 text-lime-100 outline-none"
                                />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="mt-2 text-brand-light-bg grid grid-cols-2 gap-1">
                        <div className="border-brand-light-lime/20 col-span-2 rounded-lg border p-1.5 text-center">
                            <div className="text-lg font-semibold capitalize">
                                saving per year
                            </div>
                            <div className="text-brand-lime text-2xl font-extrabold">
                                {cf.format(saving)}
                            </div>
                        </div>
                        <div className="border-brand-light-lime/20 rounded-lg border p-3">
                            <div className="text-sm leading-4">
                                Baseline production
                            </div>
                            <div className="text-brand-lime text-lg font-extrabold">
                                {nf.format(base)} kWh/yr
                            </div>
                        </div>

                        <div className="border-brand-light-lime/20 rounded-lg border p-3">
                            <div className="text-sm">
                                Extra energy (+{uplift}%)
                            </div>
                            <div className="text-brand-lime text-lg font-extrabold">
                                +{nf.format(extra)} kWh/yr
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-2 flex flex-col justify-between">
                <div className="sticky bottom-3 mt-5 w-full">
                    <Link href="#contact">
                        <button className="cursor-pointer bg-brand-navy text-brand-light-bg mt-3 w-full rounded-lg py-3 font-bold">
                            Get my free solar health check
                        </button>
                    </Link>

                    <div className="text-brand-light-bg mt-2 text-xs">
                        Assumptions: 850 kWh/kW/yr; uplift varies; price varies.
                        Actual results depend on your roof.
                    </div>
                </div>
            </div>
        </div>
    );
}
