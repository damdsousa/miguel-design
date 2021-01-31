import React from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { FullSwiper, ProductSwiper, GraphicSwiper } from "./Swipers";
import { SwiperContainer } from "./SwiperElements";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

const SwiperSection = ({ elements, swiper, setMySwiper }) => {
  return (
    <SwiperContainer page={elements.swiper}>
      <FullSwiper />
    </SwiperContainer>
  );
};

export default SwiperSection;
