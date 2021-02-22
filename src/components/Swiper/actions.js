import React from "react";
import { SwiperSlide } from "swiper/react";

import { ImgWrap, Img, ImgSubtitle } from "./SwiperElements";

import { subtitles } from "./Data.js";

export function createSlides(start, numberOfSlides, isMobile) {
  const slideImages = [];
  if (isMobile) {
    for (let i = start; i < numberOfSlides; i += 1) {
      slideImages[i] = {
        id: "slide" + (i + 1),
        img: require(`../../assets/images/sizeB/miguel-lopes-${1 + i}.png`)
          .default,
        alt: "slide" + (i + 1),
      };
    }
  } else {
    for (let i = start; i < numberOfSlides; i += 1) {
      slideImages[i] = {
        id: "slide" + (i + 1),
        img: require(`../../assets/images/miguel-lopes-${1 + i}.png`).default,
        alt: "slide" + (i + 1),
      };
    }
  }

  const slides = [];
  for (let i = start; i < numberOfSlides; i += 1) {
    slides.push(
      <SwiperSlide key={slideImages[i].id}>
        <ImgWrap>
          <Img src={slideImages[i].img} alt={slideImages[i].alt} />
        </ImgWrap>
        <ImgSubtitle className="subtitle">{subtitles[i]}</ImgSubtitle>
      </SwiperSlide>
    );
  }
  return slides;
}
