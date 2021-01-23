import React from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { FullSwiper, ProductSwiper, GraphicSwiper } from "./Swipers";
import { SwiperContainer } from "./SwiperElements";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

const SwiperSection = ({ page, swiper, setMySwiper }) => {
  return (
    <SwiperContainer page={page}>
      {swiper === "full" && <FullSwiper setMySwiper={setMySwiper}/>}
      {swiper === "product" && <ProductSwiper setMySwiper={setMySwiper}/>}
      {swiper === "graphic" && <GraphicSwiper setMySwiper={setMySwiper}/>}
    </SwiperContainer>
  );
};

export default SwiperSection;
