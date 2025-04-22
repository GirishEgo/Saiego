// FooterWrapper.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // optional for animation
import Footer from "../components/footer/Footer"; // your actual footer component

const FooterWrapper = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Timeout optional – gives a little delay if you want
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isPageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default FooterWrapper;
