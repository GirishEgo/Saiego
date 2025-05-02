import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLoader } from "./context/LoaderContext";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import DisplaySubproducts from "./components/products/DisplaySubproducts";
import Allproducts from "./pages/Products"
import SEO from "./components/SEO/SEO";
// import useSeoInfo from "./components/hooks/useSeoInfo";
import { getSEODataByPath } from "./components/SEO/getSEOData";
import { seoPagesData } from "./components/SEO/seoPagesData";
import Erroe404 from "./pages/404/Erroe404";

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

  const seoInfo = getSEODataByPath(seoPagesData, location.pathname); // 👈 dynamic SEO info
  
  
  const hideFooterRoutes = [
    "/resources/heat-calculator",
    "/resources/catalogue-download",
    "/error404", // Add this line for the 404 page
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
      <SEO
        title={seoInfo.title || "Default Title"}
        description={seoInfo.description || "No description available."}
        keywords={seoInfo.keywords || "default, keywords"}
        siteName={seoInfo.siteName || "Your Site Name"}
        // image={subProduct.productImg}
        product={seoInfo.product}
        faqs={seoInfo.faqs}
        // breadcrumb={breadcrumb}
      />
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
          <Route path="/products" element={<Allproducts />} />
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

          {/* This route renders the 404 page */}
          <Route path="/error404" element={<Erroe404/>} />

          {/* Catch-all route: redirects unmatched URLs to /error404 */}
          <Route path="*" element={<Navigate to="/error404" />} />
        </Routes>
      </Suspense>
      {!loading && showFooter && <FooterWrapper />}
    </>
  );
};

export default AppContent;
