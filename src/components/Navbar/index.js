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

import {ProductSwipe, GraphicSwipe} from "../Swiper/index" 


const Navbar = ({setPage, swiper, setSwiper}) => {
  
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
              <NavLinks id="productsLink" onClick={() => ProductSwipe(swiper, setSwiper)} >Product/</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks id="graphicsLink" onClick={() => GraphicSwipe(swiper, setSwiper)} >Graphic</NavLinks>
            </NavItem> 
            
          </NavSlide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
