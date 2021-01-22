import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
const Home = () => {
  const [page, setPage] = useState(false);
  const [swiper, setSwiper] = useState(null);
//   const toggle = () => {
//     setIsInvisible(!isVisible);
//   };

  return (
    <>
      <Navbar
        setPage={setPage} swiper={swiper} setSwiper={setSwiper}
      />
      <HeroSection
        page={page} setPage={setPage} swiper={swiper} setSwiper={setSwiper}
      />
    </>
  );
};

export default Home;
