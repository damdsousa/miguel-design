import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom'


import AboutSection from "../AboutSection";
import SwiperSection from "../Swiper";
import { HeroContainer, HeroBlank, HeroActive } from "./HeroElements";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const HeroSection = ({ elements, setElements, swiper }) => {

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
              <SwiperSection elements={elements}/>
             </CSSTransition> )} 
          

           {elements.about && (
            <CSSTransition
            
              key={elements.id}
              timeout={{ enter: 1000, exit: 1000 }}
              classNames="aboutM"
            >  
              <AboutSection elements={elements} setElements={setElements} /> 
             </CSSTransition> )} 
          
        </TransitionGroup>
      </HeroActive>
    </HeroContainer>
  );
};
export default HeroSection;
