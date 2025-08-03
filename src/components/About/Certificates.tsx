import React from "react";
import { motion } from "framer-motion";
import { certificates } from "../../utils/data";
const Certificates = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
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
                        Our{" "}
                        <span className="text-[#f7c59f]">Certifications</span> &
                        Licenses
                    </motion.h2>
                    <motion.p
                        className="text-gray-600"
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
                        Abo Saleh Real Estate maintains the highest professional
                        standards through ongoing education and industry
                        certifications.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    {certificate.title}
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    Issued by: {certificate.issuer}
                                </p>
                                <p className="text-[#f7c59f] font-medium">
                                    Year: {certificate.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certificates;
