import React from "react";
import "../style/About.css";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const About = () => {

  /* ===== Fade Animation Variants ===== */
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="about-section"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div className="about-left" variants={fadeUp}>
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I am a passionate UI / UX Designer focused on crafting modern,
            accessible, and visually engaging digital experiences.
            I transform complex problems into simple and intuitive solutions.
          </p>

          <div className="about-highlight">
            <div>
              <h3>1</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>2</h3>
              <span>Projects Designed</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* Work Experience */}
          <motion.div className="about-card" variants={fadeUp}>
            <div className="icon-box">💼</div>
            <div>
              <h3>Work Experience</h3>
              <p>
                Designed dashboards, admin panels and websites.
                Built wireframes and reusable UI systems in Figma.
                Collaborated with developers to ensure accurate design implementation.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="about-card" variants={fadeUp}>
            <div className="icon-box">🎓</div>
            <div>
              <h3>Education</h3>
              <p>
                UI/UX Design Certification <br />
                B.Com (CA) – 2020–2023
              </p>
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div className="about-card" variants={fadeUp}>
            <div className="icon-box">⚡</div>
            <div>
              <h3>Core Skills</h3>

              <div className="skills">
                <span><FaFigma className="skill-icon" /> Figma</span>
                <span><SiAdobephotoshop className="skill-icon" /> Photoshop</span>
                <span><SiCanva className="skill-icon" /> Canva</span>
                <span><GiArtificialIntelligence className="skill-icon" /> AI Tools</span>
                <span><MdDesignServices className="skill-icon" /> UI/UX</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;