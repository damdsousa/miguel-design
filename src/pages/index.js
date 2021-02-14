import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
const Home = () => {
  const [elements, setElements] = useState({
    swiper: true,
    about: false,
    id:0
  });
  const [swiper, setSwiper] = useState(null);
  const [mobile, setMobile] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <>
      <Navbar
        mobile={mobile}
        setMobile={setMobile}
        elements={elements}
        setElements={setElements}
        swiper={swiper}
        setSlideIndex={setSlideIndex}
      />
      <HeroSection
        elements={elements}
        setElements={setElements}
        setMobile={setMobile}
        swiper={swiper}
        setSwiper={setSwiper}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        leftHover={leftHover}
        setLeftHover={setLeftHover}
        rightHover={rightHover}
        setRightHover={setRightHover}
      />
    </>
  );
};

export default Home;
