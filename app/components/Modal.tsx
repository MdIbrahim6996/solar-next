import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../utils/constants";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const solarPvMotChecklist = [
    {
        section: "Solar Panels",
        items: [
            "No cracks or damage",
            "No discoloration",
            "Clean condition",
            "No new shading",
        ],
    },
    {
        section: "DC Electrical",
        items: [
            "DC cables secure",
            "No UV damage",
            "Connectors intact",
            "DC isolators working",
        ],
    },
    {
        section: "Inverter & AC",
        items: [
            "Inverter secure",
            "No fault codes",
            "AC isolator functional",
            "RCD protection present",
        ],
    },
    {
        section: "Earthing & Safety",
        items: [
            "Earthing verified",
            "Bonding present",
            "Warning labels visible",
        ],
    },
    {
        section: "Performance",
        items: [
            "System generating",
            "Output matches expected",
            "Monitoring reviewed",
        ],
    },
    {
        section: "Battery (if fitted)",
        items: [
            "Battery condition good",
            "No swelling",
            "Normal temperature",
            "BMS operating",
        ],
    },
    {
        section: "Outcome",
        items: ["PASS", "PASS with observations", "FAIL – action required"],
    },
    // {
    //     section: "System Information",
    //     items: [
    //         "Site address",
    //         "Inspection date",
    //         "System size (kWp)",
    //         "Inverter model",
    //         "Battery installed (Y/N)",
    //     ],
    // },
    // {
    //     section: "Roof & Mounting",
    //     items: [
    //         "Roof condition good",
    //         "Mounting secure",
    //         "No water ingress",
    //         "No corrosion",
    //         "Panels aligned",
    //     ],
    // },
];

export default function Modal({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-50 flex justify-center bg-black/40">
            {/* Modal Box */}
            <div className="text-brand-light-lime relative mt-[10%] h-fit w-full max-w-5xl rounded-lg bg-emerald-900 p-6 shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-brand-deep-navy font-spaceGrotesk bg-brand-lime absolute top-3 right-3 cursor-pointer rounded-full px-10 py-1 text-sm font-semibold"
                >
                    Close
                </button>
                <div className="mb-10">
                    <p className="font-montserrat text-4xl mt-4 font-semibold">
                        25 Points Checklist
                    </p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5 gap-y-10 text-left">
                    {solarPvMotChecklist.map((section) => (
                        <div className="">
                            <p className="text-xl font-medium">
                                {section.section}
                            </p>
                            {section.items.map((item) => (
                                <p key={item} className="text-left">
                                    &bull; {item}
                                </p>
                            ))}
                        </div>
                    ))}

                    <div>
                        <div
                            onClick={() => {
                                scrollToSection("contact");
                                onClose();
                            }}
                            className="hidden h-full items-center md:flex"
                        >
                            <button className="bg-brand-lime text-brand-midnight font-spaceGrotesk cursor-pointer gap-2 rounded-md px-5 py-2 text-sm font-medium">
                                Book Solar MOT
                            </button>
                            <button className="bg-brand-lime text-brand-midnight h-ful cursor-pointer rounded-md px-5 py-2">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
