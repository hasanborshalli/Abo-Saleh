import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutPreview from "../components/Home/AboutPreview";
import FeaturedWork from "../components/Home/FeaturedWork";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Abo Saleh Real Estate - Premium Properties</title>
                <meta
                    name="description"
                    content="Discover exceptional real estate opportunities with Abo Saleh Real Estate, your trusted partner in finding the perfect property."
                />
            </Helmet>
            <div className="min-h-screen">
                <HeroSection />
                <FeaturedWork />
                <AboutPreview />
            </div>
        </>
    );
};
export default Home;
