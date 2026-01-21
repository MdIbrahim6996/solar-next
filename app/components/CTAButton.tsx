import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ type = "base" }: { type?: "base" | "sm" | "lg" }) => {
    return (
        <Link
            href="contact"
            className="text-brand-deep-navy flex h-full items-center"
        >
            <span
                aria-label="Book Solar MOT"
                className={`bg-brand-lime text-${type} font-spaceGrotesk cursor-pointer gap-2 rounded-md px-5 py-2 font-medium`}
            >
                Book Solar MOT
            </span>
            <ArrowUpRight className="bg-brand-lime cursor-pointer rounded-md h-10 w-15 p-2.25" />
        </Link>
    );
};

export default CTAButton;
