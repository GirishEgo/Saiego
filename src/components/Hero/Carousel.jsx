


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./carousel.css"; // Import the CSS file
// Image imports
import slid1 from "/sliders/1-min.png";
import slid2 from "/sliders/2-min.png";
import slid3 from "/sliders/3-min.png";
import slid4 from "/sliders/4-min.png";
import slid5 from "/sliders/5-min.png";
import slid6 from "/sliders/6-min.png";

const Carousel = () => {
  const images = [
  
    slid1,
    slid2,
    slid3,
    slid4,
    slid5,
    slid6,
  ];

 

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
       
      </div>
    </div>
  );
};

export default Carousel;
