// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";
import { TbHandClick } from "react-icons/tb";

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
    <div style={{ textAlign: "left" }}>
      <img src="/Logo2.png" alt={title} style={{ width: "6rem" }} />
    </div>

    <Link to={to} className="product-link">
      {img && <LazyImage src={img} alt={title} className="product-image" />}
      <h3>{title}</h3>
      <p>
        {description ? (
          <>
            {description.split(" ").slice(0, 20).join(" ")}...
            <span className="read-more"> Read more</span>
          </>
        ) : (
          <span style={{textAlign:"end"}} className="click-here-button">
            <TbHandClick />
          </span>
        )}
      </p>
    </Link>
  </motion.div>
);


export default ProductCard;
