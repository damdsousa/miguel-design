import React from "react";
import { Slant as Hamburger } from 'hamburger-react';
import { isMobile } from "react-device-detect";


import {
  Nav,
  NavbarContainer,
  NavLogoItem,
  NavLogoContainer,
  NavSlide,
  NavItem,
  NavLinks,
  LogoItem,
  MobileItem,
} from "./NavbarElements";

const Navbar = ({
  mobile,
  setMobile,
  elements,
  setElements,
  setSlideIndex,
  swiper,
  signal,
  setSignal,
  fontColor,
  index,
  setIndex
}) => {
  
  return (
    <>
      <Nav fontColor={fontColor} elements={elements} index={index}>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogoItem
              id="aboutLink"
              mobile={mobile}
              page={elements.about}
              fontColor={fontColor}
              elements={elements}
              index={index}
              onClick={() => {
                if(!isMobile){
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
              Miguel Lopes
            </NavLogoItem>
            <LogoItem mobile={mobile} page={elements.about}>
              Designer
            </LogoItem>
            <MobileItem page={elements.about}>
              <Hamburger
                onToggle={toggled => {
                  mobile ? setSignal(1) : setSignal(2);
                  setMobile(!mobile);
                  let index = 0;
                  if (index === elements.index) {
                    index = 1;
                  }
                  setElements({
                    swiper: !elements.swiper,
                    about: !elements.about,
                    index: index,
                  });

                  if (mobile) {
                    setSlideIndex(swiper.activeIndex);
                  }
                }
                }
                direction = "right"
                size={25}
                
                />
            </MobileItem>
          </NavLogoContainer>

          <NavSlide mobile={mobile}>
            <NavItem page={elements.about}></NavItem>
            <NavLinks
              index={index}
              fontColor={fontColor}
              elements={elements}
              href="mailto:miguel@miguellopes.info"
            >
              Email
            </NavLinks>
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
