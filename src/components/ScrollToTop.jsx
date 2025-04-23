// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { loading } = useLoader();

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [pathname, loading]);

  return null;
};

export default ScrollToTop;
