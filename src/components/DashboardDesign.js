import React from "react";
import "../style/DashboardDesign.css";
import { motion } from "framer-motion";

const DashboardDesign = () => {
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
      className="dash"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={fadeInUp}>Web Dashboard Design</motion.h2>

      <motion.p className="dash-desc" variants={fadeInUp}>
        I design modern dashboards focusing on usability,
        data clarity, and smooth user flow.
      </motion.p>

      <motion.div
        className="dash-grid"
        variants={containerVariants}
      >
        <motion.div className="dash-card" variants={fadeInUp}>
          <h3>Admin Panel</h3>
          <p>User management, analytics & controls</p>
        </motion.div>

        <motion.div className="dash-card" variants={fadeInUp}>
          <h3>Student Dashboard</h3>
          <p>Progress tracking & course overview</p>
        </motion.div>

        <motion.div className="dash-card" variants={fadeInUp}>
          <h3>Analytics UI</h3>
          <p>Charts, stats & data visualization</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default DashboardDesign;
