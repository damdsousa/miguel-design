import React from "react";


import { Description, AboutLink, AboutContainer } from "./AboutElements";
const AboutSection = ({setPage, page, swiper}) => {
  return (
    <AboutContainer page={page}>
      <Description>
        Graduated in ESAD.cr currently living in Lisbon, Portugal
      </Description>
      <Description>
        His work ranges from installation/urban requalification to
        graescriptionhic and product design. Miguel also participated in several
        exhibitions including experimentadesign 2013, ParisDesignWeek with
        MeetMyProject, he collaborated with architecture studio Paratelier with
        projects connected between spatial and product design. His work appeared
        on reputable on and offline magazines like ICON, Domus, Minimalissimo,
        Defringe, Gessato, Thisispaper, Opumo, Gooood, Leibal and Lovark.
      </Description>
      <p></p>
      <a
        href="https://www.instagram.com/miguelmlopes/"
        target="_blank"
        rel="noreferrer"
      >
        @miguellopes
      </a>
      <a href="tel:351-913-700-157">T:+351 913 700 157</a>
      <a href="mailto:miguel@miguellopes.info">miguel@miguellopes.info</a>
      <AboutLink  onClick={() => {setPage(false)}}>&lt;</AboutLink>
    </AboutContainer>
  );
};

export default AboutSection;
