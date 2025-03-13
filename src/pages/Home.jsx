import React, { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader";
import Carousel from "../components/Hero/Carousel";

const Home = () => {
  const [data, setData] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader(); // ✅ Show loader when fetching starts

    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        hideLoader(); // ✅ Hide loader when data is ready
      })
      .catch(() => hideLoader());
  }, [showLoader, hideLoader]);

  // ✅ Show loader when data is not available
  if (!data) return <Loader />;

  return (
    <div>
    <Carousel/>
      {/* <h1>{data.title}</h1>
      <p>{data.body}</p> */}
    </div>
  );
};

export default Home;
