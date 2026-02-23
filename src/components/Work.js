import React from "react";
import "../style/Work.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Nim Technology Website",
    desc: "Designed a modern corporate website UI for Nim Technology with clean layouts and responsive structure.",
    tag: "UI / UX Design"
  },
  {
    id: 2,
    title: "Nim Academy Platform",
    desc: "Created a user-friendly learning platform interface with dashboards and intuitive navigation.",
    tag: "UI / UX Design"
  },
  {
    id: 3,
    title: "Students Portal Dashboard",
    desc: "Designed an interactive portal dashboard with performance tracking and clean data visualization.",
    tag: "UI / UX Design"
  }
];

const Work = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="work" id="work">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        My <span>Work</span>
      </motion.h2>

      <div className="work-grid">
        {projects.map((project) => (
          <motion.div
            className="work-card"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>{project.tag}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Work;