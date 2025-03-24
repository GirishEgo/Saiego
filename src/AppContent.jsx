import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLoader } from "./context/LoaderContext";
import ProductDetails from "./components/products/ProductDetails";

// ✅ Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Products"));
const Resources = lazy(() => import("./pages/Resources"));

const AppContent = () => {
  return (
    <Suspense
      fallback={
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/products/:id/" element={<Product />} /> */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/products/:productId" element={<Product />} />/
        <Route
          path="/products/:productId/:subProductId"
          element={<ProductDetails />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppContent;
