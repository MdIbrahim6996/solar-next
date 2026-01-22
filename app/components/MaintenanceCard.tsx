const MaintenanceCard = ({
    itemNo,
    title,
    reftext,
    subtitle,
    standard,
    plus,
    premium,
}: {
    itemNo: number;
    title: string;
    reftext: string | undefined;
    subtitle: string;
    plus: string;
    standard: string;
    premium: string;
}) => {
    const scrollToSection = () => {
        const el = document.getElementById("pricing");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="card text-brand-light-bg font-inter bg-brand-charcoal/15 w-full rounded-md px-5 py-2 text-lg backdrop-blur-sm">
            <p className="font-spaceGrotesk text-brand-light-lim text-5xl font-bold md:text-6xl">
                {itemNo}.
            </p>
            <div className="mt-10">
                <p className="font-raleway text-brand-lime text-2xl leading-8 font-semibold md:text-3xl">
                    {title}
                </p>
                <p className="font-raleway text-brand-light-lime/80 mt-1 leading-5 font-medium md:text-base">
                    {subtitle}
                </p>

                <p className="border-brand-lime font-raleway text-brand-light-bg/80 mt-8 w-fit border-b leading-5 font-medium md:text-base">
                    {reftext ? reftext : "What’s included in each plan:"}
                </p>

                <div className="my-5 space-y-1">
                    {/* <div className="grid grid-cols-2 gap-2"></div> */}
                    <p
                        onClick={() => scrollToSection()}
                        className="font-raleway text-brand-light-bg/80 flex leading-5 font-medium md:text-base"
                    >
                        <span className="w-18 mr-2 text-brand-lime cursor-pointer font-semibold hover:underline">
                            Standard:
                        </span>
                        <span>{standard}</span>
                    </p>
                    <p
                        onClick={() => scrollToSection()}
                        className="font-raleway text-brand-light-bg/80 flex leading-5 font-medium md:text-base"
                    >
                        <span className="w-18 mr-2 text-brand-lime cursor-pointer font-semibold hover:underline">
                            Plus:
                        </span>
                        <span>{plus}</span>
                    </p>
                    <p
                        onClick={() => scrollToSection()}
                        className="font-raleway text-brand-light-bg/80 flex leading-5 font-medium md:text-base"
                    >
                        <span className="w-18 text-brand-lime mr-2 cursor-pointer font-semibold hover:underline">
                            Premium:
                        </span>
                        <span>{premium}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceCard;
