export const apiBaseUrl =
    "https://opensheet.elk.sh/1qP1Gs32T4Ho1GKckvnFKVRI1R3PcGfQVYkPehRB0Ytc";

export const BRAND_NAME = "No.1 Solar Care";

export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export const openGmail = (plan: string = "Standard") => {
    const email = "Info@no1home.co.uk";
    const subject = `Enquiry for Solar Maintenance ${plan} Plan`;
    const body = `Hi Team,

                I would like to know more about your Solar Maintenance ${
                    plan.charAt(0).toUpperCase() + plan.slice(1)
                } Plan.

                Could you please share details regarding:
                • What is included in the plan
                • Pricing and duration
                • Next steps to get started

                Looking forward to your response.

                Name:
                Phone:
                Postcode:
                Preferred contact time:

                Thanks,
                [Your Name]
`;

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${encodeURIComponent(
        body
    )}`;

    window.open(url, "_blank"); // opens Gmail compose
};


//https://script.google.com/macros/s/AKfycbwLcYxgRyboe0cle-5Qq5c-fPVGr60DEqd0Cy--gGJwfqqvaNJe9YqVMdcMnl_Hj5qT/exec