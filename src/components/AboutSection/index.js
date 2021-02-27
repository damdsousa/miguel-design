import React from "react";
import "swiper/components/navigation/navigation.scss";

import { Description, AboutContainer, MailLink } from "./AboutElements";

const AboutSection = ({ setElements, elements, setMobile }) => {
  return (
    <AboutContainer elements={elements}>
      <Description>
        Graduated in ESAD.cr currently living in Lisbon, Portugal.
      </Description>
      <Description>
        His work ranges from installation/urban requalification to graphic and
        product design. Miguel also participated in several exhibitions
        including experimentadesign 2013, ParisDesignWeek with MeetMyProject, he
        collaborated with architecture studio Paratelier with projects connected
        between spatial and product design. His work appeared on reputable on
        and offline magazines like ICON, Domus, Minimalissimo, Defringe,
        Gessato, Thisispaper, Opumo, Gooood, Leibal and Lovark.
      </Description>
      <p></p>
      <a href="tel:351-913-700-157">T:+351 913 700 157</a>
      <a
        href="https://www.instagram.com/miguelmlopes/"
        target="_blank"
        rel="noreferrer"
      >
        @miguellopes
      </a>
      <MailLink id="mail" href="mailto:miguel@miguellopes.info">
        miguel@miguellopes.info
      </MailLink>
      {/* <AboutLink
        onClick={() => {
          setElements({ swiper: true, about: false });
          setMobile(true);
        }}
        className="swiper-button-prev swiper-button-white"
      ></AboutLink> */}
    </AboutContainer>
  );
};

export default AboutSection;
