import React, { useEffect, useState } from "react";
import Products from "../../Data/Products"

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // Extract IDs and Titles from the Control array
    const extractIdsAndTitles = (data) => {
      let result = [];

      data.forEach((product) => {
        product.subProduct.forEach((sub) => {
          if (sub.subHeading) {
            sub.subProducts.forEach((nestedSub) => {
              result.push({ id: nestedSub.id, title: nestedSub.title });
            });
          } else {
            result.push({ id: sub.id, title: sub.title });
          }
        });
      });

      return result;
    };

    setProductsList(extractIdsAndTitles(Products));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productsList.map((item) => (
          <li key={item.id}>
            id:{item.id},
             <strong>title:</strong>
            {item.title},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
