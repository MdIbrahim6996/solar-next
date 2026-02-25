import { Section } from "@/app/components/Section";
import { BRAND_NAME } from "@/app/utils/constants";
import Link from "next/link";

export const metadata = {
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: `Learn how ${BRAND_NAME} collects, uses, and protects your personal information when using our website and services.`,
};
export default function PrivacyNoticePage() {
    return (
        <main className="bg-white">
            <section className="mx-auto max-w-6xl px-6 py-12 text-gray-800 font-inter">
                <h1 className="text-2xl mt-20 md:text-5xl font-raleway text-brand-deep-navy font font-semibold mb-6">
                    Privacy Notice
                </h1>

                {/* About */}
                <div className="space-y-4 leading-relaxed">
                    <div>
                        <h2 className="font-semibold text-brand-deep-navy/90 text-lg">
                            About this Privacy Notice
                        </h2>

                        <p className="font-semibold text-brand-deep-navy/90 text-lg">
                            Changes to data protection rules – GDPR effective
                            May 25th 2018
                        </p>
                    </div>

                    <p>
                        Data protection rules are being tightened up and this
                        affects everyone. You need to be aware of and agree to
                        our privacy policy when dealing with personal
                        information that we process.
                    </p>

                    <p>
                        We know how important it is for you to understand how we
                        use your data. This Privacy Policy sets out how and why
                        we collect, store, process and share your personal data.
                        We will always be transparent with you about what we do
                        with your personal data.
                    </p>

                    <p>
                        This Policy also tells you what your rights are in
                        relation to the personal data you give to us. If you
                        have any questions about this Privacy Policy or your
                        rights under it please contact:
                    </p>

                    {/* Contact block */}
                    <div className="space-y-1">
                        <p>
                            <strong>Address:</strong> Green Park Arlington 5
                            Exeter Park Road Bournemouth BH2 5BD
                        </p>
                        <p>
                            <strong>Telephone:</strong> 0800 068 3387
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:info@no1home.co.uk"
                                className="text-lime-600 hover:underline"
                            >
                                info@no1home.co.uk
                            </a>
                        </p>
                    </div>
                </div>

                {/* What we need */}
                <Section title="What we need">
                    <p>
                        No1 Home Emergency is a data ‘Controller’. We will
                        collect basic personal data about you which does not
                        include any special types of information or location
                        based information.
                    </p>
                    <p>
                        This can however include name, address, email address,
                        date of birth, landline/mobile telephone numbers, your
                        purchase activity, your credit or debit card information
                        or other payment information, and information you give
                        us when speaking to our customer services team, when you
                        engage with our social media platform (for example by
                        tagging us in a post on Facebook).
                    </p>
                    <p>
                        All of this data is held electronically as we phase out
                        paper records.
                    </p>
                </Section>

                {/* Why we need it */}
                <Section title="Why we need it">
                    <p>
                        We need this information in order to fulfil a quotation,
                        contract and analyse the services which we provide. We
                        will not collect any personal data from you we do not
                        need in order to provide services to you.
                    </p>
                </Section>

                {/* What we do with it */}
                <Section title="What we do with it">
                    <p>
                        All personal data is processed by our staff in the UK
                        however for the purposes of IT hosting and maintenance
                        this information is located on servers within the
                        Europe.
                    </p>

                    <p>
                        We have a Data Protection regime in place to oversee the
                        effective and secure processing of your personal data
                        and have implemented various strategies, controls,
                        policies and measures to keep your data secure.
                    </p>

                    <p>
                        We protect your data by using encryption techniques and
                        use other safeguards such as firewalls and password
                        protection.
                    </p>

                    <p>
                        We will use your personal data to provide you with the
                        information, products and services requested or
                        purchased from us, and to communicate with you regarding
                        those products and services.
                    </p>

                    <p>
                        We may also use your personal data to measure how
                        satisfied our customers are and provide customer service
                        including troubleshooting.
                    </p>

                    <p>
                        We rely on our contractual arrangements or legitimate
                        interests as a business to process your personal data,
                        always ensuring that the balance between our interests
                        and your rights is maintained.
                    </p>

                    <p>
                        We will only pass your personal information to third
                        parties where necessary to fulfil obligations under your
                        contract with us or where required by law.
                    </p>

                    <p>
                        If you would like information on how we use cookies,
                        please see our{" "}
                        <a
                            href="/cookie-policy"
                            className="text-lime-600 hover:underline"
                        >
                            Cookie Policy
                        </a>
                        .
                    </p>
                </Section>

                {/* Retention */}
                <Section title="How long we keep it">
                    <p>
                        We retain all personal information for the duration of
                        your contract and for up to 6 years from the end date as
                        required under current legislation. After this time it
                        will be deleted, all paper records are securely
                        destroyed. Information we use for marketing purposes
                        will be kept with us until you notify us that you no
                        longer wish to receive this information.
                    </p>
                </Section>

                {/* Rights */}
                <Section title="What are your rights?">
                    <p>
                        You have a number of rights relating to your personal
                        information which you can find in the Guidance from the
                        UK Information Commissioner’s Office (ICO):
                    </p>

                    <a
                        href="https://ico.org.uk/for-the-public"
                        target="_blank"
                        className="block text-lime-600 hover:underline"
                    >
                        https://ico.org.uk/for-the-public
                    </a>

                    <p>
                        If at any point you believe the information we process
                        on you is incorrect, you can request to see this
                        information and even have it corrected or deleted. If
                        you wish to raise a complaint on how we have handled
                        your personal data, you can contact our Customer Service
                        Team who will log your complaint so that the matter can
                        be investigated for you. If you wish to opt out of
                        any/all marketing activity or would like to speak to us
                        in relation to any of your rights please contact our
                        Customer Service Team.
                    </p>
                    <p>
                        You can contact our Customer Service Team on{" "}
                        <span className="hover:underline text-brand-dark-lime cursor-pointer">
                            0800 068 3387
                        </span>
                        .
                    </p>
                    <p>
                        If you are not satisfied with our response or believe we
                        are processing your personal data otherwise in
                        accordance with the law you can complain to the
                        Information Commissioner’s Office (ICO) via their
                        website https://ico.org.uk/concerns or by calling 030
                        123 1113
                    </p>
                </Section>

                {/* Changes */}
                <Section title="Changes to this Privacy Notice">
                    <p>
                        We may update this Privacy Policy from time to time. If
                        we make any significant changes we will let you know but
                        please regularly check this policy to ensure you are
                        aware of the most updated version.
                    </p>
                    <p>
                        This Privacy Policy was last updated on{" "}
                        <strong>8th September 2020</strong>.
                    </p>
                </Section>

                {/* Cookies */}
                <Section title="Cookies">
                    <p>
                        We work in conjunction with a marketing partner Force24
                        to sometimes email promotional information and/or
                        contractual information. Accessing promotional
                        information and contractual information is often done
                        via the Force24 Platform. Cookies are used on this
                        Platform to monitor visitors and the type of material
                        accessed. For more information please see our{" "}
                        <Link
                            href="/cookie-policy"
                            className="text-lime-600 hover:underline"
                        >
                            Cookie Policy
                        </Link>
                        .
                    </p>
                </Section>
            </section>
        </main>
    );
}
