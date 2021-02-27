import React from "react";
import AboutSection from "../AboutSection";
import SwiperSection from "../Swiper";
import { HeroContainer, HeroBlank, HeroActive } from "./HeroElements";
import { CSSTransition, TransitionGroup } from "react-transition-group";


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
}) => {
  return (
    <HeroContainer>
      <HeroBlank></HeroBlank>
      <HeroActive>
        <TransitionGroup component={null}>
          {elements.swiper && (
            <CSSTransition
              key={elements.id}
              timeout={{ enter: 1000, exit: 1000 }}
              classNames="aboutM"
            >
              
              <SwiperSection
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
              timeout={{ enter: 1000, exit: 1000 }}
              classNames="aboutM"
            >
              
              <AboutSection
                elements={elements}
                setElements={setElements}
                setMobile={setMobile}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeroActive>
    </HeroContainer>
  );
};
export default HeroSection;
