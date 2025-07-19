import React from "react";
import { motion } from "framer-motion";
const WorkHeader = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        Current <span className="text-[#BF9320]">Project</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 text-lg mb-8"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                    >
                        Explore our latest development currently under
                        construction. Below you can see the architectural
                        designs and construction progress.
                    </motion.p>
                    <motion.div
                        className="w-20 h-1 bg-[#BF9320] mx-auto"
                        initial={{
                            opacity: 0,
                            scaleX: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scaleX: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                        }}
                    ></motion.div>
                </div>
            </div>
        </section>
    );
};
export default WorkHeader;
