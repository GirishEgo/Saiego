import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Control from "../../Data/Control";
import Product from "../../Data/Products";
import LazyImage from "../LazyImage";
import { useLoader } from "../../context/LoaderContext";
import "./DisplaySubproducts.css";
import ProductCard from "./ProductCard";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

// Product card component
// const ProductCard = ({ to, img, title, description }) => (
//   <motion.div
//     className="product-card"
//     variants={itemVariants}
//     initial="hidden"
//     animate="visible"
//   >
//     <Link to={to} className="product-link">
//       {img && <LazyImage src={img} alt={title} className="product-image" />}
//       <h4>{title}</h4>
//       <p>
//         {description?.split(" ").slice(0, 20).join(" ")}...
//         <span className="read-more"> Read more</span>
//       </p>
//     </Link>
//   </motion.div>
// );

const DisplaySubproducts = () => {
  const { productId } = useParams();
  const [finalLayout, setFinalLayout] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const matchedCategory = Control.find((cat) => cat.id === productId);
    if (!matchedCategory) return;

    const findProduct = (id) => {
      for (const cat of Product) {
        if (Array.isArray(cat.subProduct)) {
          const match = cat.subProduct.find((item) => item.id === id);
          if (match) return match;
        }
      }
      return null;
    };

    const processSubProducts = async () => {
      showLoader();
      const updatedCategory = { ...matchedCategory };

      const enrichItem = async (item) => {
        const product = findProduct(item.id);
        let resolvedImg = null;

        if (product?.productImg) {
          try {
            resolvedImg = await product.productImg();
          } catch (err) {
            console.error("Image loading error for", item.id, err);
          }
        }

        return {
          ...item,
          title: item.title || product?.title || "",
          description: product?.description || "",
          resolvedImg,
        };
      };

      if (updatedCategory.subProducts) {
        updatedCategory.subProducts = await Promise.all(
          updatedCategory.subProducts.map(async (subItem) => {
            if (subItem.subProducts) {
              const nested = await Promise.all(
                subItem.subProducts.map(enrichItem)
              );
              return { ...subItem, subProducts: nested };
            }
            return await enrichItem(subItem);
          })
        );
      }

      setFinalLayout(updatedCategory);
      hideLoader();
    };

    processSubProducts();
  }, [productId]);

  if (!finalLayout) return null;

  return (
    <div className="product-wrapper">
      <h1 className="category-title">
        {finalLayout.name || finalLayout.title}
      </h1>

      <motion.div
        className="product-group"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {finalLayout.subProducts?.map((item, idx) =>
            item.subProducts ? (
              <div key={idx} className="subcategory-group">
                <h3 className="subcategory-title">
                  {item.subHeading || item.title}
                </h3>
                <motion.div
                  className="product-group"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.subProducts.map((subP, subix) => (
                    <ProductCard
                      key={subix}
                      to={`/Products/${finalLayout.id}/${subP.id}`}
                      img={subP.resolvedImg}
                      title={subP.title}
                      description={subP.description}
                    />
                  ))}
                </motion.div>
              </div>
            ) : (
              <ProductCard
                key={idx}
                to={`/Products/${finalLayout.id}/${item.id}`}
                img={item.resolvedImg}
                title={item.title}
                description={item.description}
              />
            )
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DisplaySubproducts;
