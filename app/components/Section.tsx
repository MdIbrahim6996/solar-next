type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
    return (
        <section className="mt-10 space-y-3 leading-relaxed">
            <h2 className="text-xl font-semibold text-brand-deep-navy/90">
                {title}
            </h2>
            {children}
        </section>
    );
}
