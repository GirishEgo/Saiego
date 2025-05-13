import React, { useState, useEffect, useMemo } from "react";
import "./carousel.css";
import demoSlide from "/sliders/1.png"; // Fallback image

// Image imports
import slid1 from "/sliders/1-min.png";
import slid2 from "/sliders/2-min.png";
import slid3 from "/sliders/3-min.png";
import slid4 from "/sliders/4-min.png";
import slid5 from "/sliders/5-min.png";
import slid6 from "/sliders/6-min.png";

const Carousel = () => {
  const images = useMemo(() => [slid1, slid2, slid3, slid4, slid5, slid6], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsLoaded(false); // Reset loading flag when image changes
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Preload only current image (more efficient than all)
  useEffect(() => {
    const img = new Image();
    img.src = images[currentIndex];
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [currentIndex, images]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={isLoaded ? images[currentIndex] : demoSlide}
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${isLoaded ? "loaded" : "loading"}`}
          loading="eager"
          // decoding="async"
        />
      </div>
    </div>
  );
};

export default Carousel;
