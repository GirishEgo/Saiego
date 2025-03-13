import React, { useEffect } from "react";
import { useLoader } from "../context/LoaderContext";

const ExampleComponent = () => {
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchData = async () => {
      showLoader(); // Show loader when fetching starts
      try {
        // Simulate data fetching delay
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        hideLoader(); // Hide loader after fetching
      }
    };

    fetchData();
  }, []);

  return <div>Data Loaded!</div>;
};

export default ExampleComponent;
