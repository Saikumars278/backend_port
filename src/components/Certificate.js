import React from "react";
import "../style/Certificate.css";
import { motion } from "framer-motion";

import cert1 from "../images/certificate1.jpg";
import cert2 from "../images/certificate2.png";

const certificates = [
  { id: 1, img: cert1, title: "Web Development", issuer: "Coursera" },
  { id: 2, img: cert2, title: "React Masterclass", issuer: "Udemy" },
];

const Certificate = () => {
  return (
    <section className="certificate" id="certificates">
      <div className="certificate-box">
        <h2>
          My <span>Certificates</span>
        </h2>

        <p className="certificate-desc">
          Professional certifications and achievements from leading
          platforms and organizations.
        </p>

        <div className="certificate-grid">
          {certificates.map((cert) => (
            <motion.div
              className="certificate-card"
              key={cert.id}
              whileHover={{ y: -8 }}
            >
              <div className="certificate-image">
                <img src={cert.img} alt={cert.title} />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <span className="certificate-issuer">
                      {cert.issuer}
                    </span>
                    <h3>{cert.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;