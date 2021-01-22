import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogoItem,
  NavLogoContainer,
  NavSlide,
  NavItem,
  NavLinks,
} from "./NavbarElements";



const Navbar = ({setPage, setSwiper}) => {
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
          
            <NavLogoItem onClick={() => setPage(true)}>Miguel Lopes</NavLogoItem>
            <NavLogoItem id="portfolioLink">Designer</NavLogoItem>
          </NavLogoContainer>

          <NavSlide>

            <NavItem>
              <NavLinks id="productsLink" onClick={() => setSwiper("product")} >Product/</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="graphicsLink" onClick={() => setSwiper("graphic")} >Graphic</NavLinks>
            </NavItem> 
            
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
