import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import SecondSlide from "./components/SecondSlide";
import Work from "./components/Work"
import Internship from "./components/Internship";
// import LogoDesign from "./components/LogoDesign";
import PosterDesign from "./components/PosterDesign";
// import Certificate from "./components/Certificate";
// import DashboardDesign from "./components/DashboardDesign";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <SecondSlide />
        <Work />
        <Internship />
        {/* <LogoDesign /> */}
        <PosterDesign />
        {/* <Certificate /> */}
        {/* <DashboardDesign /> */}
        <Contact />
      </main>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            className="back-to-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bi bi-arrow-up"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
