import React from "react";
import AboutSection from "../AboutSection";
import SwiperSection from "../Swiper";
import { HeroContainer, HeroBlank, HeroActive } from "./HeroElements";
const HeroSection = ({ page, setPage, setSwiper, swiper }) => {
  return (
    <HeroContainer>
      <HeroBlank></HeroBlank>
      <HeroActive>
        <AboutSection page={page} setPage={setPage} />
        <SwiperSection swiper={swiper} page={page} />
      </HeroActive>
    </HeroContainer>
  );
};
export default HeroSection;
