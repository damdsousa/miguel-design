// import Swiper core and required components
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";

import { Swiper } from "swiper/react";
import { createSlides } from "./actions";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// import {slideImages} from "./Data";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);
function SwiperStd(start, numberOfSlides) {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      parallax={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      effect="fade"
      speed={800}
      autoplay={{ delay: "2500", disableOnInteraction: false }}
      observer={true}
      observeParents={true}
    >
      {createSlides(start, numberOfSlides)}
      <div
        class="swiper-button-prev swiper-button-white"
        id="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        id="button-next"
      ></div>
    </Swiper>
  );
}
export const FullSwiper = () => {
  return SwiperStd(0, 29);
};

export const GraphicSwiper = () => {
  return SwiperStd(7, 29);
};

export const ProductSwiper = () => {
  return SwiperStd(0, 7);
};
