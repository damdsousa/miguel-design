import React from "react";
import { SwiperSlide } from "swiper/react";
import { ImgWrap, Img, ImgSubtitle } from "./SwiperElements";
import { isMobileOnly, isTablet } from "react-device-detect";
import "react-lazy-load-image-component/src/effects/blur.css";

import { subtitles } from "./Data.js";

export function CreateSlides(start, numberOfSlides, fontColor) {
  const slideImages = [];
  if (isMobileOnly) {
    for (let i = start; i < numberOfSlides; i += 1) {
      slideImages[i] = {
        id: "slide" + (i + 1),
        img: require(`../../assets/images/mobile/miguel-lopes-${1 + i}.jpg`)
          .default,
        alt: "slide" + (i + 1),
      };
    }
  } else if (isTablet) {
    for (let i = start; i < numberOfSlides; i += 1) {
      slideImages[i] = {
        id: "slide" + (i + 1),
        img: require(`../../assets/images/tablet/miguel-lopes-${1 + i}.jpg`)
          .default,
        alt: "slide" + (i + 1),
      };
    }
  } else {
    for (let i = start; i < numberOfSlides; i += 1) {
      slideImages[i] = {
        id: "slide" + (i + 1),
        img: require(`../../assets/images/desktop/miguel-lopes-${1 + i}.jpg`).default,
        alt: "slide" + (i + 1),
      };
    }
  }

  const slides = [];
  for (let i = start; i < numberOfSlides; i += 1) {
    slides.push(
      <SwiperSlide  key={slideImages[i].id}>
        <ImgWrap>
          <Img src={slideImages[i].img}  alt={slideImages[i].alt}/>
        </ImgWrap>
        {/* <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        <ImgSubtitle  fontColor={fontColor}  className="subtitle">{subtitles[i]}</ImgSubtitle>
      </SwiperSlide>
    );
  }
  return slides;
}
