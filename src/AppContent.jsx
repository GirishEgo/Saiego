import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLoader } from "./context/LoaderContext";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import DisplaySubproducts from "./components/products/DisplaySubproducts";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const PanelSpaceHeatersCalculator = lazy(() =>
  import(
    "./components/ResourcespagesComponents/calculator/PanelSpaceHeatersCalculato"
  )
);
const CatalogPage = lazy(() =>
  import("./components/ResourcespagesComponents/download-catalog/CatalogPage")
);
// const DisplaySubproducts = lazy(() =>
//   import("")
// );
const ProductDetails = lazy(() =>
  import("./components/products/ProductDetails")
);
const FooterWrapper = lazy(() => import("./components/FooterWrapper"));

const AppContent = () => {
  const location = useLocation();
  const { loading } = useLoader(); // 👈 only used to delay footer
  const [showFooter, setShowFooter] = useState(false);

  const hideFooterRoutes = [
    "/resources/heat-calculator",
    "/resources/catalogue-download",
  ];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  useEffect(() => {
    setShowFooter(false);

    if (shouldShowFooter) {
      const delayFooter = setTimeout(() => {
        if (!loading) {
          setShowFooter(true);
        }
      }, 500);

      return () => clearTimeout(delayFooter);
    }
  }, [location.pathname, loading, shouldShowFooter]);

  return (
    <>
      <ScrollToTop />
      <Loader />

      <Suspense
        fallback={
          <div className="loader-overlay">
            <div className="loader" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<DisplaySubproducts />} />
          <Route
            path="/products/:productId/:subProductId"
            element={<ProductDetails />}
          />
          <Route path="/resources" element={<Resources />}>
            <Route
              path="heat-calculator"
              element={<PanelSpaceHeatersCalculator />}
            />
            <Route path="catalogue-download" element={<CatalogPage />} />
          </Route>
        </Routes>
      </Suspense>

      {!loading && showFooter && <FooterWrapper />}
    </>
  );
};

export default AppContent;
