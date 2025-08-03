import React from "react";
import { motion } from "framer-motion";
import {
    TrophyIcon,
    BuildingIcon,
    UserCheckIcon,
    HeartHandshakeIcon,
} from "lucide-react";
const AboutSection = () => {
    const values = [
        {
            icon: <TrophyIcon size={32} className="text-[#f7c59f]" />,
            title: "Excellence",
            description:
                "We strive for excellence in every aspect of our service, setting the highest standards in the real estate industry.",
        },
        {
            icon: <BuildingIcon size={32} className="text-[#f7c59f]" />,
            title: "Expertise",
            description:
                "Our team brings deep market knowledge and professional expertise to help clients make informed real estate decisions.",
        },
        {
            icon: <UserCheckIcon size={32} className="text-[#f7c59f]" />,
            title: "Integrity",
            description:
                "We conduct our business with unwavering integrity, transparency, and ethical standards that clients can trust.",
        },
        {
            icon: <HeartHandshakeIcon size={32} className="text-[#f7c59f]" />,
            title: "Client Focus",
            description:
                "We prioritize our clients' needs and goals, delivering personalized solutions and exceptional service.",
        },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        About <span className="text-[#f7c59f]">Abo Saleh</span>{" "}
                        Real Estate
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-lg"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                    >
                        Founded in 2008, Abo Saleh Real Estate has grown to
                        become a leading name in the real estate market, known
                        for our commitment to excellence and client
                        satisfaction.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Our Story
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Abo Saleh Real Estate was founded with a vision to
                            transform the real estate experience through
                            exceptional service and industry expertise. What
                            began as a small agency has grown into a respected
                            name in the property market.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Over the years, we've helped hundreds of clients
                            find their perfect homes, make sound investment
                            decisions, and navigate the complex real estate
                            landscape with confidence.
                        </p>
                        <p className="text-gray-600">
                            Today, we continue to build on our legacy of
                            excellence, combining traditional values with
                            innovative approaches to meet the evolving needs of
                            our diverse clientele.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative"
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
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                                alt="Abo Saleh Real Estate Office"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#f7c59f] rounded-lg -z-10"></div>
                    </motion.div>
                </div>
                <div className="mb-16">
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * index,
                                }}
                            >
                                <div className="flex justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;
