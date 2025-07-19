import React from "react";
import { Helmet } from "react-helmet";
import WorkHeader from "../components/Work/WorkHeader";
import ConstructionGallery from "../components/Work/ConstructionGallery";
import DesignGallery from "../components/Work/DesignGallery";
const OurWork = () => {
    return (
        <>
            <Helmet>
                <title>Our Work - Abo Saleh Real Estate</title>
                <meta
                    name="description"
                    content="Explore our portfolio of construction projects and 3D architectural designs showcasing our expertise in real estate development."
                />
            </Helmet>
            <div className="pt-20 bg-white">
                <WorkHeader />
                <ConstructionGallery />
                <DesignGallery />
            </div>
        </>
    );
};
export default OurWork;
