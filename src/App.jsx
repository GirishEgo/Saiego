import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ProductDetails from "./components/products/ProductDetails";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Resources = lazy(() => import("./pages/Resources"));

const AppContent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        {/* Dynamic Product Route */}
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <AppContent />
      <Footer />
    </>
  );
};

export default App;
