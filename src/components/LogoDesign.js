import React from "react";
import "../style/LogoDesign.css";
import { motion } from "framer-motion";

const logos = [
  { id: 1, img: "/images/logo1.png", name: "Brand Logo" },
  { id: 2, img: "/images/logo2.png", name: "Creative Logo" },
  { id: 3, img: "/images/logo3.png", name: "Startup Logo" },
];

const LogoDesign = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      className="logo"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={fadeInUp}>Logo Design</motion.h2>

      <motion.p className="logo-desc" variants={fadeInUp}>
        I design clean, memorable logos that reflect brand identity
        and communicate purpose effectively.
      </motion.p>

      <motion.div
        className="logo-grid"
        variants={containerVariants}
      >
        {logos.map((logo) => (
          <motion.div className="logo-card" key={logo.id} variants={fadeInUp}>
            <img src={logo.img} alt={logo.name} />
            <h4>{logo.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LogoDesign;
