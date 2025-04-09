import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Control from "../../Data/Control";
import ProductCard from "../products/ProductCard";
import "./HomepaeCard.css";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HomepaeCard = () => {
  const [resolvedCards, setResolvedCards] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        Control.map(async (Cp) => {
          let resolvedImg = null;
          try {
            resolvedImg = Cp.catImg ? await Cp.catImg() : null;
          } catch (error) {
            console.error("Error loading image for", Cp.id, error);
          }

          return {
            ...Cp,
            resolvedImg,
          };
        })
      );

      setResolvedCards(loaded);
    };

    loadImages();
  }, []);

  return (
    <motion.div
      className="homepage-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="cardsContainer" variants={containerVariants}>
        {resolvedCards.map((Cp) => (
          <motion.div key={Cp.id} variants={itemVariants}>
            <ProductCard
              to={`/Products/${Cp.id}`}
              img={Cp.resolvedImg}
              title={Cp.name}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomepaeCard;
