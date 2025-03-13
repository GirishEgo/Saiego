import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

const Carousel = () => {
  const slides = [
    {
      image:
        "https://t3.ftcdn.net/jpg/09/35/11/38/360_F_935113876_ZuJdvJbR8Vgn1lgNgvYk5kMCstzl4IZD.jpg",
      title: "Enhance your space with custom designs",
      description:
        "Transform your environment with our unique and versatile wall solutions.",
    },
    {
      image:
        "https://www.electricalpanelmanufacturers.com/images/banner-two.jpg",
      title: "Elevate your interior style",
      description:
        "Bring your walls to life with cutting-edge designs and textures.",
    },
    {
      image: "https://vijaytransformers.com/images/main-slider/1.jpg",
      title: "Custom designs for modern living",
      description:
        "Crafting personalized wall and ceiling designs to reflect your style.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" }, // 🔥 Slow fade-out
            scale: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {/* Background Image */}
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />

          {/* Overlay */}
          <div className="overlay" />

          {/* Text Overlay */}
          <div className="text-overlay">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="carousel-title"
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="carousel-description"
            >
              {slides[currentIndex].description}
            </motion.p>
            <motion.input
              type="text"
              placeholder="Enter your address, city or ZIP code"
              className="carousel-input"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
