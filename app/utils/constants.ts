export const apiBaseUrl =
    "https://opensheet.elk.sh/1qP1Gs32T4Ho1GKckvnFKVRI1R3PcGfQVYkPehRB0Ytc";

export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export const openGmail = () => {
    const email = "support@yourcompany.com";
    const subject = "Solar ROI Enquiry";
    const body = "Hi,%0A%0AI want to know more about your services.";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(url, "_blank"); // opens Gmail compose
};
