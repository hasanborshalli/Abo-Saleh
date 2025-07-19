import React from "react";
import { motion } from "framer-motion";
const ConstructionGallery = () => {
    const constructionImages = [
        {
            id: 1,
            url: "./c1.jpeg",
            alt: "Foundation work at construction site",
        },
        {
            id: 2,
            url: "./c2.jpeg",
            alt: "Steel frame structure during construction",
        },
        {
            id: 3,
            url: "./c3.jpeg",
            alt: "Exterior cladding installation",
        },
        {
            id: 4,
            url: "./c4.jpeg",
            alt: "Interior framing and electrical work",
        },
        {
            id: 5,
            url: "./c5.jpeg",
            alt: "Finishing work in progress",
        },
    ];
    return (
        <section className="py-16 bg-white">
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
                    Construction{" "}
                    <span className="text-[#BF9320]">Progress</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {constructionImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="rounded-lg overflow-hidden shadow-md"
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
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            <img
                                src={image.url}
                                className="w-full h-64 object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ConstructionGallery;
