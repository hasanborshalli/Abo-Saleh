import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
const ContactInfo = () => {
    const contactDetails = [
        {
            icon: <MapPinIcon size={24} className="text-[#BF9320]" />,
            title: "First Location",
            details:
                "Baabda, Bamkin, Al Nazha Street, Nasser Building, 1st Floor",
        },
        {
            icon: <MapPinIcon size={24} className="text-[#BF9320]" />,
            title: "Second Location",
            details:
                "Nabatieh, Main Street, Hikayat Building, 1st Floor, Drahma",
        },
        {
            icon: <PhoneIcon size={24} className="text-[#BF9320]" />,
            title: "Phone Number",
            details: "+961 71 999 219",
        },
        {
            icon: <PhoneIcon size={24} className="text-[#BF9320]" />,
            title: "Phone Number",
            details: "+961 76 818 028",
        },
        {
            icon: <MailIcon size={24} className="text-[#BF9320]" />,
            title: "Email Address",
            details: "abousalehgeneraltrading@gmail.com",
        },
        {
            icon: <ClockIcon size={24} className="text-[#BF9320]" />,
            title: "Working Hours",
            details: "Mon - Sat: 10:00 AM - 5:00 PM",
        },
    ];
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
                {contactDetails.map((item, index) => (
                    <div key={index} className="flex">
                        <div className="mr-4 mt-1">{item.icon}</div>
                        <div>
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-600">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/abousaleh.ME/"
                        className="bg-gray-100 hover:bg-[#BF9320] hover:text-white text-gray-600 p-3 rounded-full transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/abousaleh.me?igsh=MWp2Z2N6NWx6aXJoNg%3D%3D"
                        className="bg-gray-100 hover:bg-[#BF9320] hover:text-white text-gray-600 p-3 rounded-full transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.tiktok.com/@abousalehco?_t=ZS-8yJj5nttxWC&_r=1"
                        className="bg-gray-100 hover:bg-[#BF9320] hover:text-white text-gray-600 p-3 rounded-full transition-colors duration-300"
                        aria-label="TikTok"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                        >
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ContactInfo;
