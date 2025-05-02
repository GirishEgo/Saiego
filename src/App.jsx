import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import { CallProvider } from "./context/CallContext";
import Loader from "./components/Loader";
import AppContent from "./AppContent";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
     
      <LoaderProvider>
        {/* ✅ Global Loader */}
        <CallProvider>
          <Loader />
          <Navbar />
          <ToastContainer />
          <WhatsAppButton />
          <AppContent />
          {/* <Footer /> */}
        </CallProvider>
      </LoaderProvider>
    </>
  );
};

export default App;
