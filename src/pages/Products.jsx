
import { useNavigate, useParams } from "react-router-dom";
import Products from "../Data/Products";
import Control from "../Data/Control";
const Product = () => {
  const { productId } = useParams();

  

  const Productcategory = Products.find((prod) => prod.id === productId);
  if (!Productcategory) {
    return (
      <div>
        <h1>product catogary not found </h1>
      </div>
    );
  } else {
    console.log("product found", Productcategory);
  }

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/products/${productId}/${id}`);
    // console.log(productId, id);
  };

  return (
    <div>
      {Productcategory.subProduct.map((pro, proi) => (
        <div key={proi}>
          <div
            onClick={() => handleNavigation(pro.id)}
            style={{ cursor: "pointer" }}
          >
            <p>click here - {pro.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
