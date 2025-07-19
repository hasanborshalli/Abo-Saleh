import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/About/AboutSection";
import Certificates from "../components/About/Certificates";
import TeamSection from "../components/About/TeamSection";
const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Abo Saleh Real Estate</title>
                <meta
                    name="description"
                    content="Learn about Abo Saleh Real Estate, our history, our team, and our commitment to excellence in the real estate industry."
                />
            </Helmet>
            <div className="pt-20">
                <AboutSection />
                <Certificates />
                <TeamSection />
            </div>
        </>
    );
};
export default About;
