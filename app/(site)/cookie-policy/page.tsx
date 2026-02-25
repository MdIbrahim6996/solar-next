import CookieFaq from "@/app/components/CookieFaq";
import { Section } from "@/app/components/Section";
import { BRAND_NAME } from "@/app/utils/constants";
import Link from "next/link";

export const metadata = {
    title: `Cookie Policy | ${BRAND_NAME}`,
    description: `This Cookie Policy explains how ${BRAND_NAME} uses cookies to improve your browsing experience.`,
};

export default function CookiePolicyPage() {
    return (
        <main className="bg-white">
            <section className="mx-auto max-w-6xl px-6 py-12 text-gray-800 font-inter">
                {/* Title */}
                <h1 className="text-2xl mt-20 md:text-5xl font-raleway text-brand-deep-navy font font-semibold mb-6">
                    Cookie Policy
                </h1>
                <p className="mb-6 text-xl text-brand-deep-navy/90">
                    We want to improve your experience on our website so we
                    collect cookies
                </p>

                <div className="space-y-6 leading-relaxed">
                    <p>
                        Cookies are small text files that are sent to and stored
                        on your computer, smartphone or other device for
                        accessing the internet, whenever you visit our website.
                        Each cookie is unique to your web browser. It will
                        contain some anonymous information such as a unique
                        identifier and the site name and some digits and
                        numbers. Cookies are specific to the server that created
                        them and cannot be accessed by other servers, which
                        means that they cannot be used to track your movements
                        elsewhere around the web. Please note that passwords and
                        credit card numbers are not stored in cookies. By using
                        our website, you agree that we can place cookies on your
                        device.
                    </p>
                    <p>
                        Most websites visited will use cookies in order to
                        improve your user experience by enabling that website to
                        ‘remember’ you, either for the duration of your visit
                        (using a ‘session cookie’) or for repeat visits (using a
                        ‘persistent cookie’).
                    </p>
                    <p>
                        Most websites use cookies for a variety of reasons, such
                        as to determine preferences, let users navigate between
                        pages efficiently, verify the user and carry out other
                        essential security; these are all termed as
                        ‘non-evasive’.
                    </p>
                    <p>
                        Cookies make the interaction between you and the website
                        faster and easier. If a website doesn’t use cookies,
                        it’ll think you’re a new visitor every time you move to
                        a new page on the site – for example, when you enter
                        your login details and move to another page it won’t
                        recognise you and it won’t be able to keep you logged
                        in.
                    </p>
                    <p>
                        Cookies may be set by the website you are visiting
                        (‘first party cookies’) or they may be set by other
                        websites who run content on the page you’re viewing
                        (‘third party cookies’).
                    </p>
                    <p>
                        We don’t sell the information collected by cookies, nor
                        do we disclose the information to third parties, except
                        where required by law (for example to government bodies
                        and law enforcement agencies).
                    </p>
                    <p>
                        NB. Persistent cookies remain after your browser is
                        closed.
                    </p>
                    You can find more information about cookies at{" "}
                    <Link
                        href="http://www.allaboutcookies.org/"
                        className="text-brand-dark-lime hover:underline"
                    >
                        http://www.allaboutcookies.org/
                    </Link>
                </div>

                {/* Sections */}
                <h2 className="mt-10 mb-5 text-3xl font-semibold text-brand-deep-navy">
                    Different Forms of Cookies.
                </h2>
                <div className="space-y-12">
                    <Section title="Necessary cookies">
                        <p>
                            Necessary cookies let you move around the website
                            and use essential features like secure areas. These
                            cookies don't gather any information about you that
                            could be used for marketing or remembering where
                            you've been on the internet. You can't opt out of
                            necessary cookies and therefore should not continue
                            to use this site or else set up your browser to
                            block cookies from this site (see 'Managing your
                            cookies' below).
                        </p>
                        <p>
                            NB. It's assumed that by using this site you've
                            agreed to accept necessary cookies. If you use the
                            browser to block necessary cookies, it'll prevent
                            the site from functioning as intended.
                        </p>
                    </Section>

                    <Section title="Examples of such cookies are for:">
                        <p>
                            Remembering information you've entered on forms when
                            you navigate to different pages in a single web
                            browser session which identify you as being logged
                            in (if the site has a login area).
                        </p>
                        <p>
                            The use of cookies will not gather information that
                            could be used to advertise products or services to
                            you or for use to target adverts on any other site.
                        </p>
                        <p>
                            The table below explains the cookies we use and why.
                        </p>
                        <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-md border border-brand-deep-navy/50">
                            <table className="w-full text-center">
                                <thead className="text-body bg-brand-lime text-white border-b rounded-base border-brand-deep-navy/50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Cookie
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Purpose
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            More Info
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-semibold text-heading whitespace-nowrap"
                                        >
                                            Website cookie acceptance
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            rtCookiePrivacySetting
                                        </td>
                                        <td className="px-6 py-4">
                                            Functional
                                        </td>
                                        <td className="px-6 py-4">
                                            This cookie is used to record if a
                                            user has accepted the use of cookies
                                            on this website.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-semibold text-heading whitespace-nowrap"
                                        >
                                            Preferred site format
                                        </th>
                                        <td className="px-6 py-4">
                                            rtPreferedSiteFormat
                                        </td>
                                        <td className="px-6 py-4">
                                            Persistent
                                        </td>
                                        <td className="px-6 py-4">
                                            This cookie is used to record which
                                            site format they prefer to review
                                            the website in, e.g. full, tablet or
                                            mobile.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-semibold text-heading whitespace-nowrap"
                                        >
                                            Auto login status
                                        </th>
                                        <td className="px-6 py-4">
                                            rtAutoLogin
                                        </td>
                                        <td className="px-6 py-4">
                                            Persistent
                                        </td>
                                        <td className="px-6 py-4">
                                            This cookie is used to record if a
                                            user has chosen to auto-login on
                                            their return to this site. It
                                            contains a random login code for
                                            this user. It does not contain any
                                            user info or passwords.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-semibold text-heading whitespace-nowrap"
                                        >
                                            Session cookie
                                        </th>
                                        <td className="px-6 py-4">
                                            ASP.NET__SessionId
                                        </td>
                                        <td className="px-6 py-4">
                                            Functional
                                        </td>
                                        <td className="px-6 py-4">
                                            This cookie allows our site to
                                            remember selections you make from
                                            page to page like when you fill out
                                            a form.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-semibold text-heading whitespace-nowrap"
                                        >
                                            Telerik cookies
                                        </th>
                                        <td className="px-6 py-4">
                                            Various (depending on controls used
                                            on this site)
                                        </td>
                                        <td className="px-6 py-4">
                                            Persistent
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies are used by Telerik
                                            page controls to record their state.
                                            e.g. grid configs and editor menu
                                            bar selections
                                        </td>
                                        <td className="px-6 py-4">
                                            Telerik support pages
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                    <Section title="Performance cookies">
                        <p>
                            'Performance' cookies collect information about how
                            you use our website, e.g. which pages you visit, and
                            if you experience any errors. These cookies don't
                            collect any information that could identify you -
                            all the information collected is only used to help
                            us i mprove our website, service to you, understand
                            what interests our users and measure how effective
                            our advertising is.
                        </p>
                        <p>NB. Performance cookies can be blocked.</p>
                    </Section>
                    <Section title="We use 'Performance' cookies to:">
                        <ul className="list-decimal pl-10">
                            <li>
                                Provide statistics on how our website is used
                            </li>
                            <li>
                                See how effective our adverts are (we don't use
                                this information to target adverts to you when
                                you visit other websites).
                            </li>
                            <li>
                                Help us improve the website by measuring any
                                errors that occur
                            </li>
                        </ul>
                    </Section>
                    <Section title="'Performance' cookies will NOT be used to:">
                        <ul className="list-decimal pl-10">
                            <li>
                                Gather information that could be used to
                                advertise products or services to you on other
                                website.
                            </li>
                            <li>Target adverts to you on any other website.</li>
                        </ul>
                    </Section>

                    <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-md border border-brand-deep-navy/50">
                        <table className="w-full">
                            <thead className="bg-brand-lime text-center text-white border-b rounded-base border-brand-deep-navy/50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Cookie
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Duration
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        Purpose
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 font-medium"
                                    >
                                        More Info
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                    >
                                        Google Analytics
                                    </th>
                                    <td className="px-6 py-4">
                                        __utma, <br />
                                        __utmb,
                                        <br />
                                        __utmc,
                                        <br />
                                        __utmz
                                    </td>
                                    <td className="px-6 py-4">2 years</td>
                                    <td className="px-6 py-4">Persistent</td>
                                    <td className="px-6 py-4">
                                        These cookies are used to collect
                                        information about how visitors use our
                                        site. We use the informaiton to compile
                                        reports and to help us improve the site.
                                        The cookies collect information in an
                                        anonymous form, including the number of
                                        visitors to the site, where visitors
                                        have come to the site from and the pages
                                        they visited
                                    </td>
                                    <td className="px-6 py-4">
                                        Google's Privacy Policy
                                    </td>
                                </tr>
                                <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                    >
                                        Google Adwords
                                    </th>
                                    <td className="px-6 py-4">__gcl</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        180 days
                                    </td>
                                    <td className="px-6 py-4">Persistent</td>
                                    <td className="px-6 py-4">
                                        These cookies are used to track
                                        conversions from ads on Google search.
                                    </td>
                                    <td className="px-6 py-4">
                                        Google's Cookie Policy
                                    </td>
                                </tr>
                                <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                    >
                                        Microsoft Bing Ads
                                    </th>
                                    <td className="px-6 py-4">__mscl</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        180 days
                                    </td>
                                    <td className="px-6 py-4">Persistent</td>
                                    <td className="px-6 py-4">
                                        These cookies are used to track
                                        conversions from ads on Microsoft Bing.
                                    </td>
                                    <td className="px-6 py-4">
                                        Microsoft's Cookie Policy
                                    </td>
                                </tr>
                                <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                    >
                                        CDN Cloudflare
                                    </th>
                                    <td className="px-6 py-4">__cfduid</td>
                                    <td className="px-6 py-4">
                                        Until browser closed
                                    </td>
                                    <td className="px-6 py-4">Temporary</td>
                                    <td className="px-6 py-4">
                                        This cookie is used to speed up page
                                        load times, enhance performance and
                                        provide security.
                                    </td>
                                    <td className="px-6 py-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Section title="Targeting and Advertising Cookies">
                        <p>
                            These cookies are typically used by websites to
                            deliver targeted adverts based on browsing habits.
                            These cookies help us deliver advertisements to you
                            which we think might be of interest based on the
                            pages on our website you have visited. These
                            advertisements will be delivered onto certain other
                            websites that you visit
                        </p>
                        <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-md border border-brand-deep-navy/50">
                            <table className="w-full text-center">
                                <thead className="text-body bg-brand-lime text-white border-b rounded-base border-brand-deep-navy/50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Cookie
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Duration
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Purpose
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            More Info
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Facebook
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            _fbp and _fr
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            2 months
                                        </td>
                                        <td className="px-6 py-4">
                                            Persistent
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies analyse the success of
                                            our advertising campaigns on
                                            Facebook. They also collect
                                            information about how you use our
                                            website, such as which pages you go
                                            to, to enable us to show more
                                            relevant messages to you across
                                            Facebook.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Force 24
                                        </th>
                                        <td className="px-6 py-4">
                                            f24_autoId and f24_personId
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            10 years
                                        </td>
                                        <td className="px-6 py-4">
                                            Persistent
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies monitor the browsing
                                            activities our potential or existing
                                            customers use including links clickd
                                            to help us gain a better
                                            understanding of your viewing
                                            activities and areas of interest.
                                            These make your access easier and
                                            manage certain functionality and
                                            technical aspects. Stores user's ID.
                                        </td>
                                        <td className="px-6 py-4">
                                            Force24's Privacy Policy
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                    <Section title="Third Party Cookies">
                        <p>
                            You may notice some cookies that aren't related to
                            our website directly. If you go onto a webpage that
                            contains embedded content, you may be sent cookies
                            from these websites. We don't control the setting of
                            these cookies but you can check these third-party
                            websites for more information about their cookies
                            and how to manage them.
                        </p>
                        <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-md border border-brand-deep-navy/50">
                            <table className="w-full text-center">
                                <thead className="text-body bg-brand-lime text-white border-b rounded-base border-brand-deep-navy/50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Cookie
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            Purpose
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-medium"
                                        >
                                            More Info
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Inspectlet
                                        </th>
                                        <td className="px-6 py-4">
                                            _insp_sid, _insp_ref, _insp_scpt,
                                            _insp_nv, _insp_wid, _insp_identity,
                                            _insp_uid
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Persistent, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies allow us to analyse
                                            the user behaviour to this website
                                            and provide research information to
                                            allow us to improve the customer
                                            experience.
                                        </td>
                                        <td className="px-6 py-4">
                                            Google's Privacy Policy
                                        </td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Tawk.To
                                        </th>
                                        <td className="px-6 py-4">
                                            TawkConnectionTime, Tawk_*,
                                            _tawkuuid
                                        </td>

                                        <td className="px-6 py-4">
                                            Functional, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies allow our LiveChat
                                            functionality to link chat
                                            conversations together to provide a
                                            better service.
                                        </td>
                                        <td className="px-6 py-4">
                                            Tawk.To's Privacy Policy
                                        </td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            DataDome
                                        </th>
                                        <td className="px-6 py-4">Datadome</td>

                                        <td className="px-6 py-4">
                                            Functional, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            This is a security cookie based upon
                                            detecting BOTs and malicious
                                            traffic.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Force24
                                        </th>
                                        <td className="px-6 py-4">
                                            f24_autoId
                                        </td>

                                        <td className="px-6 py-4">
                                            Persistent, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            Force24 will collect information to
                                            monitor your behaviour and if you
                                            are a client, your customers when
                                            they are accessing information
                                            provided by the Force24 Platform.
                                        </td>
                                        <td className="px-6 py-4">
                                            Force24's Privacy Policy
                                        </td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Force24
                                        </th>
                                        <td className="px-6 py-4">
                                            f24_personId
                                        </td>

                                        <td className="px-6 py-4">
                                            Persistent, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            The Platform cookies monitor the
                                            browsing activities our potential
                                            customer uses, including links
                                            clicked. A cookie is activated
                                            through our customers or potential
                                            customers clicking email links and
                                            also the contents of any forms
                                            submitted to us
                                        </td>
                                        <td className="px-6 py-4">
                                            Force24's Privacy Policy
                                        </td>
                                    </tr>
                                    <tr className="border-b border-brand-deep-navy/50 align-text-top text-center divide-x divide-brand-deep-navy/50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                            Paid On Results
                                        </th>
                                        <td className="px-6 py-4">
                                            affiliatenetwork=PaidOnResults
                                        </td>

                                        <td className="px-6 py-4">
                                            Network Cookie, Third Party
                                        </td>
                                        <td className="px-6 py-4">
                                            These cookies track purchases so
                                            sales can be viewed across
                                            independent sites and allow us to
                                            work out which affiliate to credit
                                            for a sale.
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="Managing your cookies">
                        <p>
                            The browsers of most computers, smart phones and
                            other web-enabled devices are typically set up to
                            accept cookies. If you wish to amend your cookie
                            preferences for our website or any other websites,
                            you can do this through your browser settings. Your
                            browser's 'help' function will tell you how to
                            prevent your browser from accepting new cookies, how
                            to have the browser notify you when you receive a
                            new cookie and how to disable cookies altogether.
                            You can also disable or delete similar data used by
                            browser add-ons, such as Flash cookies, by changing
                            the add-on's settings or visiting the website of its
                            manufacturer.
                        </p>
                        <p>
                            Cookies are often used to enable and improve certain
                            functions on our website. If you choose to switch
                            certain cookies off, it's possible that this will
                            affect how our website works.
                        </p>
                    </Section>
                </div>

                {/* FAQ */}
                <CookieFaq />
            </section>
        </main>
    );
}
