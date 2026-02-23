import React from "react";
import "../style/Hero.css";
import { motion } from "framer-motion";
import profile from "../images/profile.png";   // ✅ Import your image

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <motion.span
            className="tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ✨ Available for Design Projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Designing <span>Unique</span><br />
            User Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Hi, I'm Jasmine Soundariya. I design clean, user-focused interfaces
            that turn ideas into beautiful, functional digital products.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="#work" className="btn-fill">View Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
        >
          <motion.div
            className="glass-card"
            whileHover={{ y: -10, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profile}   // ✅ Your uploaded image
              alt="Jasmine Soundariya"
              loading="lazy"
            />
            <h3>UI / UX Designer</h3>
            <p>Crafting the future of web design</p>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;