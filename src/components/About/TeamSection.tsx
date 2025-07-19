import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../../utils/data";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
const TeamSection = () => {
    return (
        <section className="py-16 bg-white">
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
                        Meet Our <span className="text-[#BF9320]">Team</span>
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
                        Our team of experienced professionals is dedicated to
                        providing exceptional service and expert guidance in all
                        your real estate endeavors.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden group"
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
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#BF9320] mb-4">
                                    {member.position}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TeamSection;
