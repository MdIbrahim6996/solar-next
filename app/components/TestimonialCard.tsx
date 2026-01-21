const TestimonialCard = ({
    quote,
    author,
    role,
}: {
    quote: string;
    author: string;
    role: string;
}) => {
    return (
        <article className="overflow-hidden rounded-lg">
            {/* Quote */}
            <div className="polygon bg-brand-light-lime hover:bg-brand-lime/80 relative h-60 cursor-pointer p-4 pb-12">
                <p className="text-brand-deep-navy leading-5">{quote}</p>{" "}
                <div className="absolute right-3 bottom-15 flex w-fit items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            viewBox="0 0 20 20"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                                fill="#00B67A"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Stars */}

            {/* Avatar + meta */}
            <div className="-mt-7 ml-7 flex items-center gap-2">
                <div
                    // src={"avatar"}
                    // alt={"name"}
                    className="bg-brand-deep-navy h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <span className="text-brand-deep-navy text-[14px] font-semibold">
                        {author}
                    </span>
                    <span className="text-[12px] text-slate-500">{role}</span>
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;
