import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import { CallProvider } from "./context/CallContext";

import Loader from "./components/Loader";
import AppContent from "./AppContent";

const App = () => {
  return (
    <LoaderProvider>
      <div class="floating-balls">
        <div class="ball ball1"></div>
        <div class="ball ball2"></div>
        <div class="ball ball3"></div>
      </div>
      {/* ✅ Global Loader */}
      <CallProvider>
        <Loader />
        <Navbar />
        <AppContent />
      </CallProvider>
      {/* <Footer /> */}
    </LoaderProvider>
  );
};

export default App;
