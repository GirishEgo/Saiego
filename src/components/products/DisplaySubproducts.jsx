import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Control from "../../Data/Control";
import Product from "../../Data/Products";
import LazyImage from "../LazyImage";
import "./DisplaySubproducts.css";

const DisplaySubproducts = () => {
  const { productId } = useParams();
  const [productCards, setProductCards] = useState([]);

  useEffect(() => {
    const extractAllProductIds = (items) => {
      let ids = [];
      for (const item of items) {
        if (item.id) ids.push(item.id);
        if (item.subProduct || item.subProducts) {
          const nested = extractAllProductIds(
            item.subProduct || item.subProducts
          );
          ids = ids.concat(nested);
        }
      }
      return ids;
    };

    const loadImagesAndProducts = async () => {
      const matchedCategory = Control.find((cat) => cat.id === productId);
      if (!matchedCategory) return;

      const productIds = extractAllProductIds([matchedCategory]);

      const matchedProducts = await Promise.all(
        productIds.map(async (id) => {
          const product = Product.find((p) => p.id === id);
          if (!product) return null;

          if (product.subProduct && Array.isArray(product.subProduct)) {
            const updatedSubProducts = await Promise.all(
              product.subProduct.map(async (sub) => {
                const resolvedImg = sub.productImg
                  ? await sub.productImg()
                  : null;
                return {
                  ...sub,
                  resolvedImg,
                };
              })
            );
            return {
              ...product,
              subProduct: updatedSubProducts,
            };
          }

          return product;
        })
      );

      setProductCards(matchedProducts.filter(Boolean));
    };

    loadImagesAndProducts();
  }, [productId]);

  

  return (
    <div className="product-wrapper">
      {productCards.length === 0 ? (
        <p>No products available</p>
      ) : (
        <>
          <h2 className="category-title">{productCards[0]?.name}</h2>
          <div className="product-group">
            {productCards.map(
              (p, idx) =>
                p.subProduct &&
                p.subProduct.map((subP, i) => (
                  <Link
                    to={`/Products/${p.id}/${subP.id}`}
                    key={`${idx}-${i}`}
                    className="product-card"
                  >
                    {subP.resolvedImg && (
                      <LazyImage
                        src={subP.resolvedImg}
                        alt={subP.title || "Product"}
                        className="product-image"
                      />
                    )}
                    <h3>{subP.title}</h3>
                    <p>{subP.description}</p>
                  </Link>
                ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DisplaySubproducts;
