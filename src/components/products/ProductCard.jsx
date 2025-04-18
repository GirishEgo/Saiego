// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProductCard = ({ to, img, title, description }) => (
  <motion.div
    className="product-card"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    <Link to={to} className="product-link">
      {img && <LazyImage src={img} alt={title} className="product-image" />}
      <h4>{title}</h4>
      <p>
        {description ? (
          <>
            {description.split(" ").slice(0, 20).join(" ")}...
            <span className="read-more"> Read more</span>
          </>
        ) : (
          <Link to={to} className="click-here-button">
            Click here
          </Link>
        )}
      </p>
    </Link>
  </motion.div>
);

export default ProductCard;
