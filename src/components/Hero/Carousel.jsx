import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./carousel.css"; // Import the CSS file

const Carousel = () => {
  const images = [
    "/sliders/1.png",
    "/sliders/2.png",
    "/sliders/3.png",
    "/sliders/4.png",
    "/sliders/5.png",
    "/sliders/6.png",
  ];

  // const texts = [
  //   "EXTENSIVE RANGE OF ANTI-CONDENSATION PANEL HEATERS & THERMOSTATS",
  //   "SPACE HEATING & CONTROL SOLUTIONS FOR PANEL BOARDS & SWITCHGEARS",
  //   "CLIMATE CONTROL SOLUTIONS FOR ENCLOSURES, MARSHALLING BOXES & CABINETS",
  // ];

  // const positions = ["top-left", "top-right", "bottom-center"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
          loading="eager"
        />
        {/* <div className={`text-overlay ${positions[currentIndex]}`}>
          {texts[currentIndex]}
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
