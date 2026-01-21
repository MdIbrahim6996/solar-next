import { IconType } from "react-icons";

const BenefitCard = ({
    index,
    title,
    icon: Icon,
    desc,
}: {
    index: number;
    title: string;
    icon: IconType;
    desc: string;
}) => {
    return (
        <div
            key={index}
            className="group bg-brand-light-lime/90 flex h-70 flex-col justify-between overflow-hidden rounded-lg md:h-[250px]"
        >
            {/* Content */}
            <div className="m-3 w-fit rounded-md bg-emerald-900 p-3">
                <Icon size={30} className="text-brand-light-lime" />
            </div>
            <div className="text-brand-deep-navy p-3">
                <h3 className="font-spaceGrotesk mb-3 text-lg font-medium md:text-2xl">
                    {title}
                </h3>
                <p className="font-inter text-sm leading-4.5 md:text-base">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;
