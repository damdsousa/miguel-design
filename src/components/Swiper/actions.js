import React from "react";
import { SwiperSlide } from "swiper/react";

import { ImgWrap, Img, ImgSubtitle } from "./SwiperElements";

import { subtitles } from "./Data.js";

export function createSlides(start, numberOfSlides) {
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
