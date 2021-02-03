import React from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { SwiperContainer } from "./SwiperElements";
import { Swiper } from "swiper/react";
import { createSlides } from "./actions";
import { NavBack, NavForward } from "./SwiperElements";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

const SwiperSection = ({
  elements,
  swiper,
  setSwiper,
  slideIndex,
  leftHover,
  setLeftHover,
  rightHover,
  setRightHover,
}) => {

  // leaveMouse = () => {
  //   setRightHover=false;
  //   setLeftHover=false;
  // }

  return (
    <SwiperContainer page={elements.swiper} >
      <Swiper
        slidesPerView={1}
        loop={true}
        parallax={true}
        onSlideChange={() => {
          console.log(slideIndex);
          console.log(swiper);
        }}
        initialSlide={slideIndex}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        onSwiper={(swiper) => {
          console.log(swiper);
          slideIndex = swiper.activeIndex;
          setSwiper(swiper);
        }}
        effect="fade"
        speed={800}
        autoplay={{ delay: "2500", disableOnInteraction: false }}
      >
        {createSlides(0, 11)}
        {/* <div
        class="swiper-button-prev swiper-button-white"
        id="button-prev"
      ></div>
      <div
       class="swiper-button-next swiper-button-white"
         id="button-next"
      ></div>  */}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSection;
