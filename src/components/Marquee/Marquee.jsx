import React from "react";
import { motion } from "framer-motion";
import "./Marquee.css"; // Import CSS for styling

const Marquee = () => {
  return (
    <motion.div
      className="marquee-wrapper"
      initial={{ opacity: 0 }} // Start hidden & move up
      animate={{ opacity: 1 }} // Fade in & slide up
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth transition
    >
      <div className="update-label">Updates</div> {/* Fixed label on left */}
      <div className="marquee-container">
        <div className="marquee">
          Quality Heating , Regulating, & Climate Control
        </div>
      </div>
    </motion.div>
  );
};

export default Marquee;
