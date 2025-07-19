import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
export function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-white">
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/our-work" element={<OurWork />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
