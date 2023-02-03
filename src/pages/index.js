import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import {Section} from "./PageElement";
const Home = () => {
  const [elements, setElements] = useState({
    swiper: true,
    about: false,
    id: 0,
  });
  const [swiper, setSwiper] = useState(null);
  const [mobile, setMobile] = useState(true);
  const [signal, setSignal] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [isLoading, setLoading] = useState(true);


  return (
    <Section load={isLoading}>
      <Navbar
        mobile={mobile}
        setMobile={setMobile}
        elements={elements}
        setElements={setElements}
        swiper={swiper}
        setSlideIndex={setSlideIndex}
        signal={signal}
        setSignal={setSignal}
      />
      <HeroSection
        setLoading={setLoading}
        isLoading={isLoading}
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
        signal={signal}
        setSignal={setSignal}
      />
    </Section>
  );
};

export default Home;
