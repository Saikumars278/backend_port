import React from "react";
import "../style/PosterDesign.css";
import { motion } from "framer-motion";

import poster2 from "../images/image2.jpg";
import poster3 from "../images/image12.jpg";
import poster4 from "../images/image3.png";
import poster5 from "../images/image4.png";
import poster6 from "../images/image5.png";
import poster7 from "../images/image6.png";
import poster8 from "../images/image7.jpg";
import poster9 from "../images/image8.jpg";
import poster10 from "../images/image9.png";
import poster11 from "../images/image10.jpg";
import poster12 from "../images/image11.png";
import poster13 from "../images/image13.png";
import poster15 from "../images/image15.jpg";
import poster16 from "../images/image16.png";

const posters = [
  { id: 2, img: poster2, title: "Brand Campaign", category: "Branding" },
  { id: 3, img: poster3, title: "Event Poster", category: "Events" },
  { id: 4, img: poster4, title: "Product Launch", category: "Product" },
  { id: 5, img: poster5, title: "Social Media", category: "Digital" },
  { id: 6, img: poster6, title: "Festival Poster", category: "Events" },
  { id: 7, img: poster7, title: "Music Festival", category: "Entertainment" },
  { id: 8, img: poster8, title: "Tech Conference", category: "Technology" },
  { id: 9, img: poster9, title: "Art Exhibition", category: "Art" },
  { id: 10, img: poster10, title: "Sports Event", category: "Sports" },
  { id: 11, img: poster11, title: "Food Festival", category: "Food" },
  { id: 12, img: poster12, title: "Fashion Show", category: "Fashion" },
  { id: 13, img: poster13, title: "Movie Premiere", category: "Entertainment" },
  { id: 15, img: poster15, title: "Startup Event", category: "Business" },
  { id: 16, img: poster16, title: "Creative Poster", category: "Design" },
];

const PosterDesign = () => {
  return (
    <section className="poster-section" id="posters">
      <div className="poster-container">
        <h2>
          Creative <span>Poster Gallery</span>
        </h2>

        <p className="poster-description">
          A premium collection of modern creative posters designed for brands,
          campaigns, and events.
        </p>

        <div className="poster-grid">
          {posters.map((poster) => (
            <motion.div
              className="poster-card"
              key={poster.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img src={poster.img} alt={poster.title} />
              <div className="poster-overlay">
                <span>{poster.category}</span>
                <h3>{poster.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterDesign;