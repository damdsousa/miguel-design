import React, { useEffect, useState, useRef } from "react";
import SwiperCore, {
  Navigation,
  Autoplay,
  Parallax,
  EffectFade,
} from "swiper";
import { SwiperContainer } from "./SwiperElements";
import { Swiper } from "swiper/react";
import { createSlides } from "./actions";
import { isMobile } from "react-device-detect";


// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// import "swiper/components/lazy/lazy.scss";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Parallax, EffectFade]);

const SwiperSection = ({ elements, swiper, setSwiper, slideIndex }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hidden, setHidden] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    addEventListeners();
    console.log("position mouse " + position.x + " " + position.y);
    console.log("hidden" + hidden);

    return () => removeEventListeners();
  });

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (inputRef.current) {
      let referencePosition = inputRef.current.getBoundingClientRect();
      let middle =
        referencePosition.left +
        (referencePosition.right - referencePosition.left) / 2;

      if (
        e.clientY > referencePosition.top &&
        e.clientY < referencePosition.bottom
      ) {
        if (e.clientX > referencePosition.left && e.clientX < middle) {
          setHidden(1);
        } else if (e.clientX > middle && e.clientX < referencePosition.right) {
          setHidden(2);
        } else {
          setHidden(0);
        }
      } else {
        setHidden(0);
      }
    }
  };

  return (
    <SwiperContainer
      cursor={hidden}
      page={elements.swiper}
      ref={inputRef}
      onClick={() => {
        if (hidden === 2) {
          swiper.slideNext(400);
        } else if (hidden === 1) {
          swiper.slidePrev(400);
        }
      }}
    >
      
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        parallax={true}
        // lazy= {{loadOnTransitionStart: false}}
        // preloadImages={false}
        // onSlideChange={() => {
        //   console.log(slideIndex);
        //   console.log(swiper);
        // }}
        initialSlide={slideIndex}
        onSwiper={(swiper) => {
          // console.log(swiper);

          slideIndex = swiper.activeIndex;
          setSwiper(swiper);
        }}
        effect="fade"
        speed={400}
        autoplay={{ delay: "2500", disableOnInteraction: false }}
      >
        {createSlides(0, 32, isMobile)}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSection;
