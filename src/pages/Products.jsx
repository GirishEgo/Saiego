import Products from "../Data/Products";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

const Product = () => {
  const [resolvedProducts, setResolvedProducts] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const resolved = await Promise.all(
        Products.map(async (pro) => {
          if (!Array.isArray(pro.subProduct)) return pro;

          const subProductWithImg = await Promise.all(
            pro.subProduct.map(async (sub) => {
              const resolvedImg =
                typeof sub.productImg === "function"
                  ? await sub.productImg()
                  : sub.productImg;

              return {
                ...sub,
                resolvedImg,
              };
            })
          );

          return {
            ...pro,
            subProduct: subProductWithImg,
          };
        })
      );

      setResolvedProducts(resolved);
    };

    loadImages();
  }, []);

  if (resolvedProducts.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      {resolvedProducts.map((pro, proi) => (
        <div className="All_products-holder" key={proi}>
          <h1>{pro.name}</h1>

          {Array.isArray(pro.subProduct) && pro.subProduct.length > 0 ? (
            <div className="AllProductdisplay">
              {pro.subProduct.map((alsub, alsubI) => (
                <ProductCard
                  key={alsubI}
                  to={`/products/${pro.id}/${alsub.id}`}
                  img={alsub.resolvedImg}
                  title={alsub.title}
                  description= {alsub.description}
                />
              ))}
            </div>
          ) : (
            <h4>No products</h4>
          )}
        </div>
      ))}
    </div>
  );
};

export default Product;
