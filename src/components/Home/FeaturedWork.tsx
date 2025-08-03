import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
const FeaturedWork = () => {
    // Sample images for the featured work section
    const designImages = [
        {
            id: 1,
            url: "./d4.jpeg",
            alt: "3D rendering of building exterior",
            category: "3D Design",
        },
        {
            id: 2,
            url: "./d5.jpeg",
            alt: "3D model of living room interior",
            category: "3D Design",
        },
    ];
    const constructionImages = [
        {
            id: 3,
            url: "./c1.jpeg",
            alt: "Foundation work at construction site",
            category: "Construction",
        },
        {
            id: 4,
            url: "./c2.jpeg",
            alt: "Steel frame structure during construction",
            category: "Construction",
        },
    ];
    // Combine both types of images
    const featuredImages = [...designImages, ...constructionImages];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
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
                        Featured{" "}
                        <span className="text-[#f7c59f]">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto"
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
                        Explore our current development projects, from
                        architectural design concepts to construction progress.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative rounded-lg overflow-hidden shadow-lg h-64 group"
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
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-[#f7c59f] text-white px-3 py-1 rounded-full text-sm font-medium">
                                {image.category}
                            </div>
                            <img
                                src="./colored-logo.png"
                                alt="Logo"
                                className="absolute bottom-2 left-2 w-12 h-12 object-contain  rounded"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <Link
                        to="/our-work"
                        className="inline-flex items-center bg-[#f7c59f] hover:bg-[#DFC578] text-white px-8 py-3 rounded transition-colors duration-300"
                    >
                        View Our Work
                        <ArrowRightIcon size={18} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default FeaturedWork;
