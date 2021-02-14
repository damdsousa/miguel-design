import React, { useEffect, useState, useRef } from "react";
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [swiperPosition, setSwiperPosition] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [hidden, setHidden] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    addEventListeners();
    console.log("position mouse " + position.x + " " + position.y);
    console.log("hidden" + hidden);

    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (swiper ){let refposition = inputRef.current.getBoundingClientRect();
      setSwiperPosition({
        left: refposition.left,
        right: refposition.right,
        top: refposition.top,
        bottom: refposition.bottom,
      });
      let middle = refposition.left + (refposition.right - refposition.left) / 2;
  
      if (e.clientY > refposition.top && e.clientY < refposition.bottom) {
        if (e.clientX > refposition.left && e.clientX < middle) {
          setHidden(1);
        } else if (e.clientX > middle && e.clientX < refposition.right) {
          setHidden(2);
        } else {
          setHidden(0);
        }
      } else {
        setHidden(0);
      }}
    
  };

  return (
    <SwiperContainer
      cursor = {hidden}
      page={elements.swiper}
      ref={inputRef}
      onClick={() => {
        if (hidden === 2) {
          swiper.slideNext(800);
        } else if (hidden === 1) {
          swiper.slidePrev(800);
        }
      }}
    >
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
        {createSlides(0, 24)}
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
