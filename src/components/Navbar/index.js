import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogoItem,
  NavLogoContainer,
  NavSlide,
  NavItem,
  NavLinks,
  NavMobilePlus,
  NavMobileMinus,
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
                if (mobile) {
                  setElements({ swiper: false, about: true, id: 1 });
                  setSlideIndex(swiper.activeIndex);
                  setMobile(false);
                }
              }}
            >
              Miguel Lopes
            </NavLogoItem>
            <LogoItem mobile={mobile} page={elements.about}>
              Designer
            </LogoItem>
            <MobileItem page={elements.about}>
              <NavMobileMinus
                mobile={mobile}
                onClick={() => {
                  setMobile(true);
                  setElements({ swiper: true, about: false, id: 0 });
                }}
              >
                -
              </NavMobileMinus>
            </MobileItem>
            <MobileItem>
              <NavMobilePlus
                mobile={mobile}
                onClick={() => {
                  setMobile(false);
                  setElements({ swiper: false, about: true, id: 1 });
                  setSlideIndex(swiper.activeIndex);
                }}
              >
                +
              </NavMobilePlus>
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
