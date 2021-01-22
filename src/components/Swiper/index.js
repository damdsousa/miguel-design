import React from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { FullSwiper, ProductSwiper, GraphicSwiper } from "./Swipers";
import { SwiperContainer } from "./SwiperElements";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

const SwiperSection = ({ swiper }) => {
  return (
    <SwiperContainer>
      {swiper === "full" && <FullSwiper />}
      {swiper === "product" && <ProductSwiper />}
      {swiper === "graphic" && <GraphicSwiper />}
    </SwiperContainer>
  );
};

export default SwiperSection;
