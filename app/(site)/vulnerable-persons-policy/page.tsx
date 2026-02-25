import { BRAND_NAME } from "@/app/utils/constants";

export const metadata = {
    title: `Vulnerable Persons Policy | ${BRAND_NAME}`,
    description: `Read ${BRAND_NAME} Vulnerable Persons Policy outlining how we identify and support vulnerable customers, ensure ethical service delivery, and follow safeguarding best practices.`,
};

export default function VulnerablePersonsPolicy() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 font-inter">
            <h1 className="text-2xl mt-20 md:text-5xl font-raleway text-brand-deep-navy font font-semibold mb-6">
                Vulnerable Persons Policy
            </h1>

            <div className="space-y-5 text-sm md:text-base leading-relaxed">
                <p>
                    No1 Home believe that to deliver a truly ethical approach in
                    delivering a service that is extremely sensitive the
                    commitment has to permeate throughout all activity as the
                    business as a whole. We believe that the adoption and
                    application of the right policies, standards and approach
                    will deliver an ethical approach in a practical and
                    measureable way.
                </p>

                <p>
                    A vulnerable adult can be anyone over the age of 18, who has
                    a physical or sensory impairment, learning disability or a
                    mental health problem and who may be unable to protect
                    themselves from harm or abuse. Elderly, frail or confused
                    older people are also classed as vulnerable adults.
                </p>

                <p>
                    No1 Home also give full consideration to any mitigating or
                    vulnerable conditions, and seek the advice and approval of
                    our clients before proceeding with any services in the
                    following circumstances:
                </p>

                <ul className="list-disc pl-10 space-y-2">
                    <li>Serious illness/long term sickness</li>
                    <li>
                        Ethnic minorities who cannot understand or speak English
                    </li>
                    <li>Pregnancy or recent birth of a child</li>
                    <li>Recent bereavement</li>
                    <li>Recent unemployment</li>
                    <li>Severe financial difficulties</li>
                    <li>Any other guidelines stipulated by our client</li>
                </ul>

                <p>
                    No1 Home’s process for identifying vulnerable claimant’s is
                    set out in 3 stages:
                </p>

                <ul className="list-disc pl-10 space-y-2">
                    <li>Prior to us processing a service</li>
                    <li>Once we have processed the service</li>
                    <li>Whilst making first contact with the client</li>
                    <li>During an agent visit</li>
                </ul>

                <p>
                    All staff are trained, display a positive attitude and are
                    considerate to customers in financial difficulties,
                    responding sympathetically to their difficulties and
                    encouraging them to obtain guidance from relevant advisory
                    organisations.
                </p>

                <p>
                    Through regular dialogue with customers and advisory bodies
                    we will ensure that staff are kept up to date with any
                    changes in our collection/sign up policy and carry the most
                    up to date contact details for advisory groups within the
                    client’s area.
                </p>

                <p>
                    In accordance with legislation and best practice Premier
                    Legal Assist will establish and maintain effective quality
                    assurance systems for monitoring and reporting Adult
                    safeguarding issues and will share all adult protection
                    information across agencies.
                </p>
            </div>
        </section>
    );
}
