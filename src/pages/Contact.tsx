import React, { lazy } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Abo Saleh Real Estate</title>
                <meta
                    name="description"
                    content="Get in touch with Abo Saleh Real Estate for all your property needs. Our team is ready to assist you with any inquiries."
                />
            </Helmet>
            <div className="min-h-screen pt-24 pb-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        className="text-center mb-12"
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
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Contact <span className="text-[#f7c59f]">Us</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have a question or want to learn more about our
                            properties? Get in touch with our team and we'll be
                            happy to assist you.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            className="lg:col-span-2"
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
                            <ContactForm />
                        </motion.div>
                        <motion.div
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
                                delay: 0.4,
                            }}
                        >
                            <ContactInfo />
                        </motion.div>
                    </div>
                    <motion.div
                        className="mt-12"
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
                            delay: 0.6,
                        }}
                    ></motion.div>
                </div>
            </div>
        </>
    );
};
export default Contact;
