import React, { Suspense } from "react";
import "../App.css"; // Make sure the CSS is included

const LazyImageContent = ({ src, alt, className }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return error ? (
    <div className={`img-fallback ${className}`} />
  ) : (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const LazyImage = ({ src, alt, className }) => {
  return (
    <Suspense
      fallback={
        <div className={`img-fallback ${className}`}>
          <div className="img-shimmer" />
        </div>
      }
    >
      <LazyImageContent src={src} alt={alt} className={className} />
    </Suspense>
  );
};

export default LazyImage;
