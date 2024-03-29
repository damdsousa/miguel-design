import React, { useEffect, useState, useRef } from "react";
import SwiperCore, { Navigation, Autoplay, Parallax, EffectFade } from "swiper";
import { SwiperContainer } from "./SwiperElements";
import { Swiper } from "swiper/react";
import { CreateSlides } from "./actions";

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
  // eslint-disable-next-line
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(0);
  

  const inputRef = useRef();
  const whiteFontIndex = [2,3,4,5,6,7,9,12,14,15,18,22,25,26,37,39,42,44];


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
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        parallax={true}
        updateOnImagesReady={true}
        initialSlide={slideIndex}
        onSwiper={(swiper) => {
          slideIndex = swiper.activeIndex;
          setSwiper(swiper);
        }}
        onImagesReady={(s) => {
          console.log(isLoading);

          s.autoplay.start();
          setLoading(false);
        }}
        onSlideChange={(s)=>{
          setIndex(s.activeIndex)
          if (whiteFontIndex.includes(s.activeIndex)){
            setFontColor("white");
          }
          else {
            setFontColor("black");
          }
        }}
        effect="fade"
        fadeEffect={{crossFade: true}}
        speed={850}
        autoplay={{ delay: 3000, disableOnInteraction: false, waitForTransition: true }}
      >
        {CreateSlides(0, 46, fontColor, index)}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSection;
