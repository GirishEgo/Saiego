import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import "./HomeAboutSection.css";

const HomeAboutSection = () => {
  const iconRef = useRef();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const handleClick = () => {
    const icon = iconRef.current;
    icon.classList.remove("home-about-icon-clicked");
    void icon.offsetWidth; // Force reflow
    icon.classList.add("home-about-icon-clicked");

    setTimeout(() => {
      icon.classList.remove("home-about-icon-clicked");
    }, 600); // Match animation time
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="home-about-section"
    >
      <div className="home-about-container">
        <div className="home-about-icon-wrapper" onClick={handleClick}>
          <FaInfoCircle className="home-about-icon" ref={iconRef} />
        </div>
        <div className="home-about-content">
          <h2 className="home-about-heading">Know More About Us</h2>
          <p className="home-about-description">
            Established in 1989, Sai Egotherm India is a pioneer in
            manufacturing and exporting thermostats, space heaters, and advanced
            heating control systems. With over 40 years of expertise, we deliver
            India’s most comprehensive range of panel heating and temperature
            control solutions — trusted for reliability, precision, and on-time
            delivery.
          </p>
          <div className="home-about-buttons">
            <button
              className="home-about-btn"
              onClick={() => navigate("/about")}
            >
              Read More
            </button>
            <button
              className="home-about-btn home-about-btn-secondary"
              onClick={() => navigate("/resources/catalogue-download")}
            >
              Resource Catalog
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAboutSection;
