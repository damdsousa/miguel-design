import React, { useState } from "react";
import AboutSection from "../AboutSection";
import SwiperSection from "../Swiper";

import { HeroContainer, HeroBlank, HeroActive } from "./HeroElements";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { isMobile } from "react-device-detect";

const HeroSection = ({
  elements,
  setElements,
  mobile,
  setMobile,
  swiper,
  setSwiper,
  slideIndex,
  setSlideIndex,
  leftHover,
  setLeftHover,
  rightHover,
  setRightHover,
  signal,
  setSignal,
  isLoading,
  setLoading,
}) => {
  // const [isLoading, setLoading] = useState(true);
  return (
    <HeroContainer
      elements={elements}
      onClick={() => {
        console.log(elements);
        if (!isMobile && elements.about) {
          let index = 0;
          if (index === elements.index) {
            index = 1;
          }
          setElements({
            swiper: !elements.swiper,
            about: !elements.about,
            index: index,
          });
          setMobile(!mobile);
          mobile ? setSignal(1) : setSignal(2);
          if (elements.swiper) {
            setSlideIndex(swiper.activeIndex);
          }
        }
      }}
    >
      
      <HeroActive>
        <TransitionGroup component={null}>
          {elements.swiper && (
            <CSSTransition
              key={elements.id}
              timeout={{ enter: 200, exit: 200 }}
              classNames="aboutM"
            >
              <SwiperSection
                setLoading={setLoading}
                isLoading={isLoading}
                elements={elements}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                setSwiper={setSwiper}
                swiper={swiper}
                leftHover={leftHover}
                setLeftHover={setLeftHover}
                rightHover={rightHover}
                setRightHover={setRightHover}
              />
            </CSSTransition>
          )}

          {elements.about && (
            <CSSTransition
              key={elements.id}
              timeout={{ enter: 200, exit: 200 }}
              classNames="aboutM"
            >
              <AboutSection
                elements={elements}
                setElements={setElements}
                mobile={mobile}
                setMobile={setMobile}
                signal={signal}
                setSignal={setSignal}
                swiper={swiper}
                setSlideIndex={setSlideIndex}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeroActive>
    </HeroContainer>
  );
};
export default HeroSection;
