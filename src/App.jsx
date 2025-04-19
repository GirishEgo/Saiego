import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import { CallProvider } from "./context/CallContext";
import Loader from "./components/Loader";
import AppContent from "./AppContent";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";

const App = () => {
  return (
    <LoaderProvider>
      {/* <div className="floating-balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div> */}
      {/* ✅ Global Loader */}
      <CallProvider>
        <Loader />
        <Navbar />
        <WhatsAppButton/>
        <AppContent />
        <Footer />
      </CallProvider>
    </LoaderProvider>
  );
};

export default App;
