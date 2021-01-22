import React, { useEffect } from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperContainer, ImgWrap, Img, ImgSubtitle } from "./SwiperElements";
import { subtitles } from "./Data.js";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

export function ProductSwipe(swiper, setSwiper) {
  console.log(swiper.slides);
  swiper.reInit();
  swiper.removeSlide([
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
  ]);
  swiper.update();
  // setSwiper(swiper);
}

export function GraphicSwipe(swiper, setSwiper) {
  
  swiper.removeAllSlides();
  swiper.update();
  
  
  
}

function createSlides(start, numberOfSlides) {
  const slideImages = [];
  for (let i = start; i < numberOfSlides; i += 1) {
    slideImages[i] = {
      id: "slide" + (i + 1),
      img: require(`../../assets/images/2020-${69 + i}.png`).default,
      alt: "slide" + (i + 1),
    };
  }

  const slides = [];
  for (let i = start; i < numberOfSlides; i += 1) {
    console.log(slideImages[i]);
    slides.push(
      <SwiperSlide key={slideImages[i].id}>
        <ImgWrap>
          <Img src={slideImages[i].img} alt={slideImages[i].alt} />
        </ImgWrap>
        <ImgSubtitle class="subtitle">{subtitles[i]}</ImgSubtitle>
      </SwiperSlide>
    );
  }
  return slides;
}

const SwiperSection = ({ setSwiper, swiper , start,numberOfSlides}) => {
  useEffect(() => {
    var mySwiper = document.querySelector(".swiper-container").swiper;
    setSwiper(mySwiper);
  }, []);

  const slides = createSlides(start, numberOfSlides);

  return (
    <SwiperContainer>
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
    </SwiperContainer>
  );
};

export default SwiperSection;
