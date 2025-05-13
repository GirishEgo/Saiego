import React, { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader";
import Carousel from "../components/Hero/Carousel";
import HomepaeCard from "../components/Homepage/HomepaeCard";
import Certifiat from "../components/certificats/Certifiat";
import HomeAboutSection from "../components/Homepage/HomeAboutSection";
import Marquee from "../components/Marquee/Marquee";

const Home = () => {

  return (
    <div>
      <Carousel />
      <Marquee/>
      {/* <h1>{data.title}</h1>
      <p>{data.body}</p> */}
      <HomepaeCard />
      <Certifiat />
      <HomeAboutSection/>
    </div>
  );
};

export default Home;
