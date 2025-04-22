import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import App from './App.jsx'
// import { LoaderProvider } from './context/LoaderContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <LoaderProvider> */}
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    {/* </LoaderProvider> */}
  </StrictMode>
);
