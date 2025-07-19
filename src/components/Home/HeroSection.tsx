import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/back.jpg)",
                    backgroundPosition: "center 30%",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative h-full flex items-center">
                <motion.div
                    className="max-w-2xl text-white"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                    >
                        Discover Your{" "}
                        <span className="text-[#DFC578]">Perfect Property</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 text-gray-200"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                        }}
                    >
                        Abo Saleh Real Estate offers premium properties tailored
                        to your unique lifestyle and investment goals.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                        }}
                    >
                        <Link
                            to="/our-work"
                            className="bg-[#BF9320] hover:bg-[#DFC578] text-white px-8 py-3 rounded transition-colors duration-300 flex items-center justify-center"
                        >
                            Check Our Work
                            <ArrowRightIcon size={18} className="ml-2" />
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white hover:border-[#DFC578] hover:text-[#DFC578] text-white px-8 py-3 rounded transition-colors duration-300 flex items-center justify-center"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
export default HeroSection;
