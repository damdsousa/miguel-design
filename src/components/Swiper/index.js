import React, { useEffect, useState, useRef } from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { SwiperContainer } from "./SwiperElements";
import { Swiper } from "swiper/react";
import { CreateSlides } from "./actions";
import { isMobile } from "react-device-detect";

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
  setSlideIndex,
  isLoading,
  setLoading,
  fontColor,
  setFontColor,
  index,
  setIndex
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(0);
  

  const inputRef = useRef();
  const whiteFontIndex = [2,3,4,5,6,7,9,12,14,15,18,22,25,26,37,39,42,44];
  // const whiteFontIndex = [1,2,3,4,5,6,8,11,13,14,17,21,23,25,26,28,29,33,37,39,42,44];


  useEffect(() => {
    addEventListeners();
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
      fontColor={fontColor}
      cursor={hidden}
      page={elements.swiper}
      load={isLoading}
      ref={inputRef}
      onClick={() => {
        if (hidden === 2) {
          swiper.slideNext(1000);
          swiper.autoplay.start();
        } else if (hidden === 1) {
          swiper.slidePrev(1000);
          swiper.autoplay.start();
        }
        
      }}
    >
    
      <Swiper
        // ref={loadRef}
        modules={EffectFade}
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        parallax={true}
        updateOnImagesReady={true}
        initialSlide={slideIndex}
        onSwiper={(swiper) => {
          slideIndex = swiper.activeIndex;
          // setSlideIndex(swiper.activeIndex);

          setSwiper(swiper);
        }}
        onImagesReady={(s) => {
          console.log(isLoading);

          s.autoplay.start();
          s.delay = 3000;
          s.disableOnInteraction = false;
          setLoading(false);
        }}
        onSlideChange={(s)=>{
          setIndex(s.activeIndex)
          console.log("slideindex swiper", s.activeIndex, index);
          setIndex(s.activeIndex)
          // setSlideIndex(s.activeIndex);
          if (whiteFontIndex.includes(s.activeIndex)){
            setFontColor("white");
          }
          else {
            setFontColor("black");
          }
          // console.log(fontColor)
          // console.log(s.activeIndex)
        }}
        effect="fade"
        crossFade={true}
        speed={1000}
        autoplay={true}

        // autoplay={{ delay: "2500", disableOnInteraction: false }}
      >
        {CreateSlides(0, 46, fontColor, index)}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSection;
