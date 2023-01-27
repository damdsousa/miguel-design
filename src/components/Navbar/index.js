import React, { useState } from "react";
import Plus from "../../assets/icons/plus.png";
import { Slant as Hamburger } from 'hamburger-react'


import {
  Nav,
  NavbarContainer,
  NavLogoItem,
  NavLogoContainer,
  NavSlide,
  NavItem,
  NavLinks,
  NavMobilePlus,
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
  setSignal
}) => {
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogoItem
              id="aboutLink"
              mobile={mobile}
              page={elements.about}
              onClick={() => {
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
              }}
            >
              Miguel Lopes
            </NavLogoItem>
            

            {/* <MobileItem page={elements.about}>
              <NavMobilePlus
                className={
                  signal === 1
                    ? "rotateIn spinEffect"
                    : signal === 2
                    ? "rotateOut spinEffectOut"
                    : ""
                }
                src={Plus}
                alt="Plus"
                mobile={mobile}
                onClick={() => {
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
                }}
              />
            </MobileItem> */}
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
                // toggled={setSignal(1)} toggle={setSignal(2)}
                direction = "right"
                size={25}
                
                />
            </MobileItem>
          </NavLogoContainer>

          <NavSlide mobile={mobile}>
            <NavItem page={elements.about}>Product/Graphic</NavItem>
            <NavLinks
              page={elements.about}
              href="mailto:miguel@miguellopes.info"
            >
              miguel@miguellopes.info
            </NavLinks>
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
