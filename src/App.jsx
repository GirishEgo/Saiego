import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import Loader from "./components/Loader";
import AppContent from "./AppContent";

const App = () => {
  return (
    <LoaderProvider>
      {/* ✅ Global Loader */}
      <Loader />
      <Navbar />
      <AppContent />
      <Footer />
    </LoaderProvider>
  );
};

export default App;
