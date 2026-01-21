import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-10 text-brand-light-lime font-raleway md:mx-2 rounded-md bg-emerald-900">
            <div className="flex flex-col md:flex-row md:gap-20 gap-6 md:px-20 p-5 md:py-20">
                <div className="md:w-[40%]">
                    <div className="overflow-hidden rounded-md bg-slate-100 p-3">
                        <img
                            src="/solarcare-logo.svg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="font-raleway mt-5 text-justify">
                        <div className="font-inter space-y-1 md:text-sm text-center leading-4.5 font-medium">
                            <p>No1 Solar Care is subsidiary of No1 Home Ltd.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl font-semibold underline underline-offset-3">
                        Navigation
                    </p>
                    <ul className="mt-4 capitalize">
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium">Home</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium">Services</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium">Plans</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium">Contact</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl font-semibold underline underline-offset-3">
                        Quick Links
                    </p>
                    <ul className="mt-4 capitalize">
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium whitespace-nowrap">
                                Policy Document
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium whitespace-nowrap">
                                Privacy Policy
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium whitespace-nowrap">
                                Cookie Policy
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                            <p className="font-medium whitespace-nowrap">
                                Vulnerable Persons Policy
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl font-semibold whitespace-nowrap underline underline-offset-3">
                        Contact Us
                    </p>
                    <ul className="mt-4 space-y-1 capitalize">
                        <li className="-space-y-1">
                            <div className="flex items-center gap-2">
                                <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                                <p className="font-medium">Email</p>
                            </div>
                            <p className="hover:underline text-brand-light-lime/90 font-inter ml-4 text-sm font-medium lowercase">
                                Info@no1home.co.uk
                            </p>
                        </li>
                        <li className="-space-y-1">
                            <div className="flex items-center gap-2">
                                <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                                <p className="font-medium">Office</p>
                            </div>
                            <p className="text-brand-light-lime/90 font-inter ml-4 text-sm font-medium">
                                Green Park Arlington, 5 Exexter Park Road,
                                Bournemouth BH2 5BD
                            </p>
                        </li>
                        <li className="-space-y-1">
                            <div className="flex items-center gap-2">
                                <p className="bg-brand-light-lime h-2 w-2 rounded-full"></p>
                                <p className="font-medium">Phone</p>
                            </div>
                            <p className="text-brand-light-lime/90 font-inter ml-4 text-sm font-medium lowercase">
                                0800 068 3387
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="md:w-[30%] pt-3">
                    <div>
                        <div className="grid grid-cols-3 gap-1">
                            <div className="rounded-md bg-white p-1">
                                <img
                                    src="/mastercard_logo.png"
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="rounded-md bg-white">
                                <img
                                    src="/visa_logo.png"
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="flex w-full items-center rounded-md bg-white">
                                <img
                                    src="/direct_debit.png"
                                    className="object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-2 rounded-md bg-white p-2">
                            <img
                                src="/checkatrade.png"
                                className="h-full w-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-[60%] mx-auto">
                        <p className="mt-2 whitespace-nowrap w-fit md:w-full mx-auto text-xl font-medium underline underline-offset-3">
                            Follow Us:
                        </p>
                        <div className="mt-1 flex items-center md:space-x-1 justify-between text-2xl">
                            <FaFacebook className="cursor-pointer" />
                            <FaXTwitter className="cursor-pointer" />
                            <FaLinkedin className="cursor-pointer" />
                            <FaWhatsapp className="cursor-pointer" />
                            <FaInstagram className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-montserrat bg-brand-light-lime text-brand-deep-navy flex flex-col md:flex-row gap-3 justify-between md:px-20 px-5 py-3">
                <div className="divide-brand-navy/70 flex space-x-3 divide-x-2 w-fit md:w-full mx-auto text-xs md:text-sm font-medium">
                    <p className="pr-3">Policy Document</p>
                    <p className="pr-3">Cookie Policy</p>
                    <p className="pr-3">Privacy Policy</p>
                </div>
                <div>
                    <p className="text-xs md:text-sm text-center md:text-left font-medium md:whitespace-nowrap">
                        © 2025 No. 1 Home Solar Care. Site by{" "}
                        <a
                            href="https://www.firstwebstudio.com/"
                            className="underline"
                        >
                            First Web Studio
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
