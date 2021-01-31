import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
const Home = () => {
  const [elements, setElements] = useState({
    swiper: true,
    about: false,
    id:0
  });
  const [swiper, setSwiper] = useState("full");
  const [mobile, setMobile] = useState("none");
 
  return (
    <>
      <Navbar
        mobile={mobile}
        setMobile={setMobile}
        elements={elements}
        setElements={setElements}
        swiper={swiper}
        setSwiper={setSwiper}
      />
      <HeroSection
        elements={elements}
        setElements={setElements}
        swiper={swiper}
        setSwiper={setSwiper}
      />
    </>
  );
};

export default Home;
