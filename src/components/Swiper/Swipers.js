// import Swiper core and required components
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";

import { Swiper} from "swiper/react";
import { createSlides } from "./actions";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// import {slideImages} from "./Data";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

export const FullSwiper = ({ setSwiper, swiper, start, numberOfSlides }) => {
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
      autoplay={{ delay: "2500", disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {createSlides(0, 29)}
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
};

export const GraphicSwiper = ({ setSwiper, swiper, start, numberOfSlides }) => {
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
      autoplay={{ delay: "2500", disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {createSlides(7, 29)}
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
};

export const ProductSwiper = ({ setSwiper, swiper, start, numberOfSlides }) => {
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
      autoplay={{ delay: "2500", disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {createSlides(0, 7)}
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
};
