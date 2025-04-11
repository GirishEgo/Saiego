import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Products from "../../Data/Products";
import LazyImage from "../LazyImage";
import "./csss2.css";
import Loader from "../Loader";

const ProductDetails = () => {
  const { productId, subProductId } = useParams(); // ✅ Get both category & subProduct ID
  const [subProduct, setSubProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
// console.log("Products Data:", Products);
// console.log("ProductId:", productId, "SubProductId:", subProductId);
// console.log("erroe",error);


  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // ✅ Find the correct product category
        const selectedProduct = Products.find(
          (product) => String(product.id) === String(productId)
        );

        if (!selectedProduct) {
          throw new Error(`No product category found with ID: ${productId}`);
        }

        // ✅ Find the correct subProduct
        const selectedSubProduct = selectedProduct.subProduct.find(
          (sub) => String(sub.id) === String(subProductId)
        );
        console.log(selectedSubProduct);
        

        if (!selectedSubProduct) {
          throw new Error(`No subProduct found with ID: ${subProductId}`);
        }

        // ✅ Load main image
        const productImg = await selectedSubProduct.productImg();

        // ✅ Load other images
        const otherImages = await Promise.all(
          selectedSubProduct.otherImages.map(async (group) => {
            const loadedImages = await Promise.all(
              group.images.map((img) => img().catch(() => null))
            );
            return {
              heading: group.heading,
              images: loadedImages.filter((img) => img !== null),
            };
          })
        );

        // ✅ Set state with selected subProduct
        setSubProduct({
          ...selectedSubProduct,
          productImg,
          otherImages,
        });
      } catch (err) {
        setError(err.message);
        console.log(error);
        
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [productId, subProductId]);

  if (loading)
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  if (error) return <div className="error">{error}</div>;
  if (!subProduct) return <div className="error">Product not found.</div>;

  return (
    <div className="product-details">
      {/* ✅ Heading and Models */}
      <div className="header-section">
        <h1 className="product-title">{subProduct.title}</h1>
        <p className="product-subtitle">{subProduct.application || ""}</p>
        {subProduct.models?.length > 0 && (
          <div className="models">
            {subProduct.models.map((model, index) => (
              <span key={index} className="model">
                {model}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Main Image */}
      <div className="product-content">
        {subProduct.productImg ? (
          <div className="image-wrapper">
            <LazyImage
              src={subProduct.productImg}
              alt={subProduct.title}
              className="product-main-image"
            />
          </div>
        ) : (
          <div className="placeholder">No Image Available</div>
        )}

        {/* ✅ Right Side Data */}
        <div className="product-info">
          {subProduct.description && (
            <div className="product-section">
              <h2>Description</h2>
              <p className="product-description">{subProduct.description}</p>
            </div>
          )}

          {subProduct.features?.length > 0 && (
            <div className="product-section">
              <h2>{subProduct.featuresH || "Features"}</h2>
              <ul>
                {subProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {subProduct.workingDetails?.length > 0 && (
            <div className="product-section">
              <h2>{subProduct.workingH || "Working Principle"}</h2>
              <ul>
                {subProduct.workingDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {subProduct.constrution?.length > 0 && (
            <div className="product-section">
              <h2>{subProduct.construtionH || "Construction"}</h2>
              <ul>
                {subProduct.constrution.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {subProduct.intended?.length > 0 && (
            <div className="product-section">
              <h2>{subProduct.intended || "Construction"}</h2>
              <ul>
                {subProduct.uses.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {subProduct.tests?.length > 0 && (
            <div className="product-section">
              <h2>ALSO AVAILABLE</h2>
              <ul>
                {subProduct.tests.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {subProduct.recommendation && (
            <div className="product-section">
              <h2>Recommendation</h2>
              <p>{subProduct.recommendation}</p>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Other Images */}
      {subProduct.otherImages?.length > 0 && (
        <div className="other-images">
          <h2 class="section-heading">Technical Specification</h2>
          <div className="otherimages-container">
            {subProduct.otherImages.map((group, groupIndex) => (
              <div key={groupIndex} className="image-group">
                <h3 className="group-heading">{group.heading}</h3>
                <div className="group-images masonry-layout">
                  {group.images.map((img, index) => (
                    <div onClick={() => setActiveImage(img)}  >
                      <LazyImage
                        key={index}
                        src={img}
                        alt={`${group.heading} - ${index + 1}`}
                        className="gallery-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Image Overlay */}
      {activeImage && (
        <div className="image-overlay active">
          <img src={activeImage} alt="Expanded view" className="large-image" />
          <button className="close-button" onClick={() => setActiveImage(null)}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
