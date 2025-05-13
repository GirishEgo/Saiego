import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "../components/Hero/Carousel";
import HomepaeCard from "../components/Homepage/HomepaeCard";
import Certifiat from "../components/certificats/Certifiat";
import HomeAboutSection from "../components/Homepage/HomeAboutSection";
import Marquee from "../components/Marquee/Marquee";

const Home = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showMarquee, setShowMarquee] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showCertifiat, setShowCertifiat] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const loadComponents = () => {
      setShowCarousel(true);

      setTimeout(() => setShowMarquee(true), 400);
      setTimeout(() => setShowCards(true), 800);
      setTimeout(() => setShowCertifiat(true), 1200);
      setTimeout(() => setShowAbout(true), 1600);
    };

    if (document.readyState === "complete") {
      loadComponents();
    } else {
      window.addEventListener("load", loadComponents);
      return () => window.removeEventListener("load", loadComponents);
    }
  }, []);

  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      {showCarousel && (
        <motion.div {...fadeInProps}>
          <Carousel />
        </motion.div>
      )}
      {showMarquee && (
        <motion.div {...fadeInProps}>
          <Marquee />
        </motion.div>
      )}
      {showCards && (
        <motion.div {...fadeInProps}>
          <HomepaeCard />
        </motion.div>
      )}
      {showCertifiat && (
        <motion.div {...fadeInProps}>
          <Certifiat />
        </motion.div>
      )}
      {showAbout && (
        <motion.div {...fadeInProps}>
          <HomeAboutSection />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
