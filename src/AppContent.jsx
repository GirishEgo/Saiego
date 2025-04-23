import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLoader } from "./context/LoaderContext";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";
// import FooterWrapper from "./components/FooterWrapper";
import DisplaySubproducts from "./components/products/DisplaySubproducts";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Products"));
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
//   import("./components/products/DisplaySubproducts")
// );
const ProductDetails = lazy(() =>
  import("./components/products/ProductDetails")
);
const FooterWrapper = lazy(() => import("./components/FooterWrapper"));

const AppContent = () => {
  const location = useLocation();
  const { loading } = useLoader();

  // // Optional: Show loader on route change
  // useEffect(() => {
  //   showLoader();
  //   const timeout = setTimeout(() => {
  //     hideLoader();
  //   }, 800); // adjust time depending on transition need

  //   return () => clearTimeout(timeout);
  // }, [location.pathname]);

  const hideFooterRoutes = [
    "/resources/heat-calculator",
    "/resources/catalogue-download",
  ];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  const [showFooter, setShowFooter] = useState(false);

 useEffect(() => {
   setShowFooter(false); // hide immediately on route change

   if (shouldShowFooter) {
     const timer = setTimeout(() => {
       setShowFooter(true);
     }, 1500); // or whatever delay you want

     return () => clearTimeout(timer);
   }
 }, [location.pathname, shouldShowFooter]);

  return (
    <>
      <ScrollToTop />
      <Loader />

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
      </Suspense>

      {/* ✅ Show footer only after loading finishes */}
      {!loading && showFooter && <FooterWrapper />}
    </>
  );
};

export default AppContent;
