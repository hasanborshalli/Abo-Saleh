import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Our Work",
            path: "/our-work",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];
    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-[#2a324b] shadow-md py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Abo Saleh Real Estate"
                        className="h-16 md:h-24 w-auto object-contain"
                    />
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-[#f7c59f] ${
                                location.pathname === link.path
                                    ? "text-[#f7c59f]"
                                    : scrolled
                                    ? "text-white"
                                    : "text-black"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#f7c59f] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                    }}
                    className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`py-2 font-medium ${
                                    location.pathname === link.path
                                        ? "text-[#f7c59f]"
                                        : "text-black"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};
export default Navbar;
