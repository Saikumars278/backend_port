import React from "react";
import "../style/Contact.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="contact-card" variants={fadeUp}>

        <div className="contact-left">
          <h2>Get In <span>Touch</span></h2>

          <p>
            Available for freelance projects and product collaborations.
            Let’s create impactful digital experiences.
          </p>

          <div className="contact-info">
            <p><FaPhoneAlt /> 7339648438</p>
            <p><FaEnvelope /> jasminesoundariya05@gmail.com</p>
          </div>

          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/jasmine-soundariya-s-385782273"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://wa.me/917339648438"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>

      </motion.div>
    </motion.section>
  );
};

export default Contact;