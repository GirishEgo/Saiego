import React, { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader";
import Carousel from "../components/Hero/Carousel";
import HomepaeCard from "../components/Homepage/HomepaeCard";
import Certifiat from "../components/certificats/Certifiat";
import HomeAboutSection from "../components/Homepage/HomeAboutSection";
import Marquee from "../components/Marquee/Marquee";

const Home = () => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait a bit to allow React animations to finish (optional)
      setTimeout(() => {
        setPageReady(true);
      }, 300);
    };

    // Listen to full page load (including images/fonts)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
        <div>
          <Carousel />
          <Marquee />
          <HomepaeCard />
          <Certifiat />
          <HomeAboutSection />
        </div>
    </>
  );
};

export default Home;
