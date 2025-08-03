import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2Icon } from "lucide-react";
const AboutPreview = () => {
    const features = [
        "20+ years of real estate experience",
        "Professional team of certified agents",
        "Personalized service for every client",
        "Extensive portfolio of premium properties",
    ];
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative"
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                                alt="Abo Saleh Real Estate Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#f7c59f] rounded-lg -z-10"></div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About{" "}
                            <span className="text-[#f7c59f]">Abo Saleh</span>{" "}
                            Real Estate
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Founded with a vision to redefine real estate
                            excellence, Abo Saleh Real Estate has established
                            itself as a premier provider of property solutions
                            in the region. We combine industry expertise with
                            personalized service to deliver exceptional results
                            for our clients.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center"
                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * index,
                                    }}
                                >
                                    <CheckCircle2Icon
                                        size={20}
                                        className="text-[#f7c59f] mr-2"
                                    />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <Link
                            to="/about"
                            className="inline-block bg-[#f7c59f] hover:bg-[#DFC578] text-white px-6 py-3 rounded transition-colors duration-300"
                        >
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default AboutPreview;
