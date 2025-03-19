import "../App.css"
const LazyImage = ({ src, alt }) => {
  // console.log(src);
  
  return <img src={src} alt={alt} loading="lazy" className="product-image" />;
};

export default LazyImage;
