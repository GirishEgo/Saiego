import React, { useState, useEffect } from "react";
import "./carousel.css";
import slid1 from "/sliders/1-min.png";
import slid2 from "/sliders/2-min.png";
import slid3 from "/sliders/3-min.png";
import slid4 from "/sliders/4-min.png";
import slid5 from "/sliders/5-min.png";
import slid6 from "/sliders/6-min.png";
import demoSlide from "/sliders/1.png"; // Add a demo fallback image

const Carousel = () => {
  const images = [slid1, slid2, slid3, slid4, slid5, slid6];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => [...prev, index]);
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const isLoaded = loadedImages.includes(currentIndex);

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={isLoaded ? images[currentIndex] : demoSlide}
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${isLoaded ? "loaded" : "loading"}`}
          // loading="eager"
        />
      </div>
    </div>
  );
};

export default Carousel;
