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
} from "./NavbarElements";

const Navbar = ({ mobile, setMobile, page, setPage, setSwiper }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogoItem
              id="aboutLink"
              mobile={mobile}
              page={page}
              onClick={() => setPage(true)}
            >
              Miguel Lopes
            </NavLogoItem>
            <NavLogoItem mobile={mobile} id="portfolioLink">
              Designer
            </NavLogoItem>

            <NavMobileMinus mobile={mobile} onClick={() => setMobile(true)}>
              -
            </NavMobileMinus>
            <NavMobilePlus mobile={mobile} onClick={() => setMobile(false)}>
              +
            </NavMobilePlus>
          </NavLogoContainer>

          <NavSlide mobile={mobile}>
            <NavItem>
              <NavLinks id="productsLink" onClick={() => setSwiper("product")}>
                Product/
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="graphicsLink" onClick={() => setSwiper("graphic")}>
                Graphic
              </NavLinks>
            </NavItem>
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
