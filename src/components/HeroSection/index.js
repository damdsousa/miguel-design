import React from "react";
import AboutSection from "../AboutSection";
import SwiperSection from "../Swiper";
import { HeroContainer, HeroBlank, HeroActive } from "./HeroElements";
const HeroSection = ({ page, setPage, setSwiper, swiper }) => {
  return (
    <HeroContainer>
      <HeroBlank></HeroBlank>
      <HeroActive>
      
        {page ? 
        (<AboutSection setPage={setPage}/> ): <SwiperSection swiper={swiper} />
        }
        {/* {page && <AboutSection  setPage={setPage}/>}
        {!page  && <SwiperSection />} */}
      </HeroActive>
    </HeroContainer>
  );
};
export default HeroSection;
