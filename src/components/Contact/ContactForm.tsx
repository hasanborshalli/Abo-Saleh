import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mgvzvjpz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormState({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred while sending your message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {isSubmitted ? (
                <motion.div
                    className="text-center py-8"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <div className="flex justify-center mb-4">
                        <CheckCircleIcon size={64} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. We'll get back
                        to you shortly.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#BF9320] hover:bg-[#DFC578] text-white px-6 py-3 rounded transition-colors duration-300"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#BF9320] focus:border-[#BF9320] outline-none"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#BF9320] focus:border-[#BF9320] outline-none"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#BF9320] focus:border-[#BF9320] outline-none"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                required
                                placeholder="Enter subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#BF9320] focus:border-[#BF9320] outline-none"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#BF9320] focus:border-[#BF9320] outline-none"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-[#BF9320] hover:bg-[#DFC578] text-white px-6 py-3 rounded transition-colors duration-300 flex items-center justify-center ${
                                isSubmitting
                                    ? "opacity-70 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
export default ContactForm;
