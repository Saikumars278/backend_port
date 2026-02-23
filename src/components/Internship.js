import React from "react";
import "../style/Internship.css";
import { motion } from "framer-motion";

/* ===== Import Local Images ===== */
import work1 from "../images/web1.png";
import work2 from "../images/web2.png";
import work3 from "../images/web3.jpg";

import cert1 from "../images/certificate1.jpg";
import cert2 from "../images/certificate2.png";

const Internship = () => {

  const workImages = [work1, work2, work3];
  const certificates = [cert1, cert2];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.section
      className="intern"
      id="internship"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <motion.h2 variants={fadeUp}>
        Internship
      </motion.h2>

      <motion.div className="intern-box" variants={fadeUp}>
        <p className="role">UI / UX Designing Intern</p>

        <p className="desc">
          Gained hands-on experience in designing user-centric interfaces,
          creating wireframes, and collaborating with developers to bring
          prototypes into real-world applications.
        </p>

        <motion.div className="work-grid" variants={stagger}>
          {workImages.map((img, index) => (
            <motion.div className="work-img" key={index} variants={fadeUp}>
              <img src={img} alt={`Work ${index + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.h2 className="cert-title" variants={fadeUp}>
        Certificates
      </motion.h2>

      <motion.div className="cert-grid" variants={stagger}>
        {certificates.map((cert, index) => (
          <motion.div className="cert-card" key={index} variants={fadeUp}>
            <img src={cert} alt={`Certificate ${index + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  );
};

export default Internship;