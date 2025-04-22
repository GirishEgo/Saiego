import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLoader } from "./context/LoaderContext";
import ProductDetails from "./components/products/ProductDetails";
import DisplaySubproducts from "./components/products/DisplaySubproducts";
import PanelSpaceHeatersCalculator from "./components/ResourcespagesComponents/calculator/PanelSpaceHeatersCalculato";
import CatalogPage from "./components/ResourcespagesComponents/download-catalog/CatalogPage";

// ✅ Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Products"));
const Resources = lazy(() => import("./pages/Resources"));

// ✅ Footer import
import Footer from "./components/footer/Footer"; // adjust path as per your project structure
 
const AppContent = () => {
   const location = useLocation();
   const hideFooterRoutes = ["/resources/catalogue-download"];
   const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  return (
    <Suspense
      fallback={
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/resources" element={<Resources />}>
            <Route
              path="heat-calculator"
              element={<PanelSpaceHeatersCalculator />}
            />
            <Route path="catalogue-download" element={<CatalogPage />} />
          </Route>

          <Route path="/products/:productId" element={<DisplaySubproducts />} />
          <Route
            path="/products/:productId/:subProductId"
            element={<ProductDetails />}
          />
        </Routes>

        {/* ✅ Render Footer below all routes */}
        {shouldShowFooter && <Footer />}
      </>
    </Suspense>
  );
};

export default AppContent;
