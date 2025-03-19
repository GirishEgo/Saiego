import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Products from "../../Data/Products";
import LazyImage from "../LazyImage";
import "./csss2.css";
import Loader from "../Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const selectedProduct = Products.find(
          (item) => String(item.id) === String(id)
        );

        if (!selectedProduct) {
          throw new Error(`No product found with id: ${id}`);
        }

        // Load main product image
        const productImg = await selectedProduct.productImg();

        // Load other images (nested under headings)
        const otherImages = await Promise.all(
          selectedProduct.otherImages.map(async (group) => {
            const loadedImages = await Promise.all(
              group.images.map((img) => img().catch(() => null))
            );
            return {
              heading: group.heading,
              images: loadedImages.filter((img) => img !== null),
            };
          })
        );

        setProduct({
          ...selectedProduct,
          productImg,
          otherImages,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <div className="loader"><Loader/></div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <div className="product-details">
      {/* ✅ Heading and Models */}
      <div className="header-section">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-subtitle">{product.application || ""}</p>
        {product.models?.length > 0 && (
          <div className="models">
            {product.models.map((model, index) => (
              <span key={index} className="model">
                {model}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Main Image */}
      <div className="product-content">
        {product.productImg ? (
          <div className="image-wrapper">
            <LazyImage
              src={product.productImg}
              alt={product.title}
              className="product-main-image"
            />
          </div>
        ) : (
          <div className="placeholder">No Image Available</div>
        )}

        {/* ✅ Right Side Data */}
        <div className="product-info">
          {/* ✅ Description */}
          {product.description && (
            <div className="product-section">
              <h2>Description</h2>
              <p className="product-description">{product.description}</p>
            </div>
          )}

          {/* ✅ Features */}
          {product.features?.length > 0 && (
            <div className="product-section">
              <h2>{product.featuresH || "Features"}</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Working Principle */}
          {product.workingDetails?.length > 0 && (
            <div className="product-section">
              <h2>{product.workingH || "Working Principle"}</h2>
              <ul>
                {product.workingDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Construction */}
          {product.constrution?.length > 0 && (
            <div className="product-section">
              <h2>{product.construtionH || "Construction"}</h2>
              <ul>
                {product.constrution.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Recommendation */}
          {product.recommendation && (
            <div className="product-section">
              <h2>Recommendation</h2>
              <p>{product.recommendation}</p>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Other Images */}
      {product.otherImages?.length > 0 && (
        <div className="other-images">
          <h2>Technical Specification</h2>
          <div className="otherimages-Container">
            {product.otherImages.map((group, groupIndex) => (
              <div key={groupIndex} className="image-group">
                <h3 className="group-heading">{group.heading}</h3>
                <div className="group-images">
                  {group.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${group.heading} - ${index + 1}`}
                      className="gallery-image"
                      onClick={() => setActiveImage(img)}
                    />
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
