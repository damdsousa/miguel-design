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
  isLoading,
  setLoading,
  fontColor,
  setFontColor
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(0);

  const inputRef = useRef();
  const redFontIndex = [44];
  const whiteFontIndex = [2,3,4,5,6,7,8,12,14,15,16,18];


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
      cursor={hidden}
      page={elements.swiper}
      load={isLoading}
      ref={inputRef}
      onClick={() => {
        if (hidden === 2) {
          swiper.slideNext(400);
          swiper.autoplay.start();
        } else if (hidden === 1) {
          swiper.slidePrev(400);
          swiper.autoplay.start();
        }
        
      }}
    >
    
      <Swiper
        // ref={loadRef}
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
          s.delay = 2500;
          s.disableOnInteraction = false;
          setLoading(false);
        }}
        onSlideChange={(s)=>{
          
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
        speed={400}
        autoplay={true}

        // autoplay={{ delay: "2500", disableOnInteraction: false }}
      >
        {CreateSlides(0, 46, isMobile , fontColor)}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSection;
