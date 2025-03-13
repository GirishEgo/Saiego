import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Product Details</h1>
      <p style={styles.description}>
        You are viewing details for <b>Product {id}</b>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    color: "#577D73",
    backgroundColor: "#E5D0CF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    maxWidth: "600px",
    margin: "50px auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
};

export default ProductDetails;
