import React from "react";
import { motion } from "framer-motion";
const DesignGallery = () => {
    const designImages = [
        {
            id: 1,
            url: "./d1.jpeg",
            alt: "3D rendering of building exterior",
        },
        {
            id: 2,
            url: "./d2.jpeg",
            alt: "3D model of living room interior",
        },
        {
            id: 3,
            url: "./d3.jpeg",
            alt: "Architectural rendering of tower facade",
        },
        {
            id: 4,
            url: "./d4.jpeg",
            alt: "3D model of kitchen design",
        },
        {
            id: 5,
            url: "./d5.jpeg",
            alt: "Architectural rendering of building entrance",
        },
        {
            id: 6,
            url: "./d6.jpeg",
            alt: "3D model of master bedroom",
        },
        {
            id: 7,
            url: "./d7.jpeg",
            alt: "3D rendering of bathroom design",
        },
        {
            id: 8,
            url: "./d8.jpeg",
            alt: "Architectural visualization of building rooftop",
        },
    ];
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
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
                    3D <span className="text-[#BF9320]">Design Renders</span>
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {designImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="rounded-lg overflow-hidden shadow-md"
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                            }}
                        >
                            <img
                                src={image.url}
                                className="w-full h-56 object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default DesignGallery;
