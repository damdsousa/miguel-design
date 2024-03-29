import React from "react";
import "swiper/components/navigation/navigation.scss";

import { Description, AboutContainer, Mail, Phone } from "./AboutElements";

const AboutSection = ({
  setElements,
  elements,
  setMobile,
  mobile,
  signal,
  setSignal,
  swiper,
  setSlideIndex,
}) => {
  const handleClick = event => {
    event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
  }
  return (
    <AboutContainer
      elements={elements}
      
    >
      <Description>
        I'm a Designer specialized in Branding, Visual Identity and Product Design.
      </Description>
      <Description>
        After several years working with product development, I start to work with graphic design,
        most international companies, creating strategies to build timeless brands.

      </Description>
      <p></p>
      <Phone onClick={ handleClick } className="link-about" href="tel:351-913-700-157">
        T:+351 913 700 157
      </Phone>
      <Mail onClick={ handleClick }
        className="link-about" 
        href="mailto:miguel@miguellopes.info">
          miguel@miguellopes.info
        </Mail>
    </AboutContainer>
  );
};

export default AboutSection;
