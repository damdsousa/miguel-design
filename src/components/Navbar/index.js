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
  MobileItem
} from "./NavbarElements";

const Navbar = ({ mobile, setMobile, elements, setElements, setSwiper }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogoItem
              id="aboutLink"
              mobile={mobile}
              elements={elements}
              onClick={() =>{ setElements({swiper: false, about:true, id:1}); console.log(elements);}}
            >
              Miguel Lopes
            </NavLogoItem>
            <LogoItem mobile={mobile} elements={elements}>
              Designer
            </LogoItem>
            <MobileItem>
            <NavMobileMinus mobile={mobile} onClick={() => setMobile(true)}>
              -
            </NavMobileMinus>
            </MobileItem>
            <MobileItem>
            <NavMobilePlus mobile={mobile} onClick={() => setMobile(false)}>
              +
            </NavMobilePlus>
            </MobileItem>
          </NavLogoContainer>

          <NavSlide mobile={mobile}>
            <NavItem  elements={elements}>
                Product/Graphic
            </NavItem>

              <NavLinks  elements={elements} href="mailto:miguel@miguellopes.info"> miguel@miguellopes.info </NavLinks> 
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
