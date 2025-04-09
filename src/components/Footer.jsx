import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          style={styles.footer}
        >
          <p style={styles.text}>
            © {new Date().getFullYear()} Saiego. All rights reserved.
          </p>
        </motion.footer>
      )}
    </AnimatePresence>
  );
};

const styles = {
  footer: {
    backgroundColor: "#577D73", // Dark Green
    color: "#E5D0CF", // Soft Pink
    textAlign: "center",
    padding: "15px",
    // width: "100%",
    fontFamily: "'Poppins', sans-serif",
    zIndex: "100",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
    // Removed `position: fixed` so it appears only when scrolled to bottom
  },
  text: {
    margin: 0,
    fontSize: "1rem",
  },
};

export default Footer;
