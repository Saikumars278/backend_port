import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Menu item animation variants
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.3 }
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Backdrop animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#work", text: "Work" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="nav-container">
        <motion.div
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>JASMINE<span>.</span></h2>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <a href={link.href}>{link.text}</a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="nav-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <motion.div
              className="nav-sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="sidebar-content">
                <div className="sidebar-header">
                  <h3>Menu</h3>
                </div>

                <ul className="sidebar-links">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onClick={() => setMenuOpen(false)}
                    >
                      <a href={link.href}>
                        <span className="link-number">0{i + 1}</span>
                        <span className="link-text">{link.text}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="sidebar-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p>Let's create something amazing together</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
