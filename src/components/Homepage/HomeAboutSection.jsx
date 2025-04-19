import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import "./HomeAboutSection.css";

const HomeAboutSection = () => {
  const iconRef = useRef();

  const handleClick = () => {
    const icon = iconRef.current;
    icon.classList.remove("clicked");
    void icon.offsetWidth; // Force reflow
    icon.classList.add("clicked");

    setTimeout(() => {
      icon.classList.remove("clicked");
    }, 600); // Match animation time
  };

  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="home-about-section"
    >
      <div className="about-container">
        <div className="about-icon-wrapper" onClick={handleClick}>
          <FaInfoCircle className="about-icon" ref={iconRef} />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Know More About Us</h2>
          <p className="about-description">
            Established in 1989, Sai Egotherm India is a pioneer in
            manufacturing and exporting thermostats, space heaters, and advanced
            heating control systems. With over 40 years of expertise, we deliver
            India’s most comprehensive range of panel heating and temperature
            control solutions — trusted for reliability, precision, and on-time
            delivery.
          </p>
          <div className="about-buttons">
            <button className="about-btn" onClick={() => navigate("/about")}>
              Read More
            </button>
            <button
              className="about-btn secondary"
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
