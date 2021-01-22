// import Swiper core and required components
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { ImgWrap, Img, ImgSubtitle } from "./SwiperElements";
import { subtitles } from "./Data.js";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// import {slideImages} from "./Data";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

export function ProductSwipe (FullSwiper) {
  FullSwiper.update();
  for (let i = 0; i < 7; i += 1) {
    FullSwiper.removeSlides(i);
  }
}

export function GraphicSwipe (FullSwiper){
  FullSwiper.update();
  for (let i = 7; i < 29; i += 1) {
    FullSwiper.removeSlides(i);
  }
}

export const FullSwiper = ({ id, img, alt }) => {
  const slideImages = [];
  for (let i = 0; i < 29; i += 1) {
    slideImages[i] = {
      id: "slide" + (i + 1),
      img: require(`../../assets/images/2020-${69 + i}.png`).default,
      alt: "slide" + (i + 1),
    };
  }

  const slides = [];
  for (let i = 0; i < 29; i += 1) {
    console.log(slideImages[i]);
    slides.push(
      <SwiperSlide key={slideImages[i].id}>
        <ImgWrap>
          <Img src={slideImages[i].img} alt={slideImages[i].alt} />
        </ImgWrap>
        <ImgSubtitle class="subtitle" >{subtitles[i]}</ImgSubtitle>
      </SwiperSlide>
    );
  }

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
      {slides}
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
