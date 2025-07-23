import React from "react";
import { Link } from "react-router-dom";
import {
    MapPinIcon,
    PhoneIcon,
    MailIcon,
    FacebookIcon,
    InstagramIcon,
} from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="Abo Saleh Real Estate"
                            className="h-14 md:h-16 w-auto object-contain mb-4"
                        />
                        <p className="text-gray-300 mb-4">
                            Premium real estate solutions for discerning
                            clients. Your trusted partner in finding exceptional
                            properties.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/abousaleh.ME/?ref=_xav_ig_profile_page_web"
                                className="text-gray-300 hover:text-[#DFC578] transition-colors"
                            >
                                <FacebookIcon size={20} />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/abousaleh.me?igsh=MWp2Z2N6NWx6aXJoNg%3D%3D"
                                className="text-gray-300 hover:text-[#DFC578] transition-colors"
                            >
                                <InstagramIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-[#DFC578] transition-colors"
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
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#DFC578]">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-[#DFC578] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-[#DFC578] transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/our-work"
                                    className="text-gray-300 hover:text-[#DFC578] transition-colors"
                                >
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-[#DFC578] transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#DFC578]">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPinIcon
                                    size={20}
                                    className="mr-2 text-[#DFC578] flex-shrink-0 mt-1"
                                />
                                <span className="text-gray-300">
                                    Baabda, Bamkin, Al Nazha Street, Nasser
                                    Building, 1st Floor
                                </span>
                            </li>
                            <li className="flex items-start">
                                <MapPinIcon
                                    size={20}
                                    className="mr-2 text-[#DFC578] flex-shrink-0 mt-1"
                                />
                                <span className="text-gray-300">
                                    Nabatieh, Main Street, Hikayat Building, 1st
                                    Floor, Drahma
                                </span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon
                                    size={20}
                                    className="mr-2 text-[#DFC578]"
                                />
                                <span className="text-gray-300">
                                    +961 71 999 219
                                </span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon
                                    size={20}
                                    className="mr-2 text-[#DFC578]"
                                />
                                <span className="text-gray-300">
                                    +961 76 818 028
                                </span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon
                                    size={20}
                                    className="mr-2 text-[#DFC578]"
                                />
                                <span className="text-gray-300">
                                    info@abusalehrealestate.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Abo Saleh Real Estate.
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p
                    className="text-[0.8rem]"
                    style={{
                        direction: "ltr",
                        unicodeBidi: "isolate",
                    }}
                >
                    Powered By{" "}
                    <a target="_blank" href="https://brndnglb.com">
                        <span
                            style={{
                                fontFamily: "Archivo Black",
                                color: "white",
                            }}
                            className="text-[1rem]"
                        >
                            Brndng
                        </span>
                        <span
                            className="text-[1.5rem]"
                            style={{
                                fontFamily: "Archivo Black",
                                color: "#FF914D",
                            }}
                        >
                            .
                        </span>
                    </a>
                </p>
            </div>
        </footer>
    );
};
export default Footer;
