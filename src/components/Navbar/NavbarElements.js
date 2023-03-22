import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { isMobileOnly } from "react-device-detect";

export const Nav = styled.nav`
  color: ${({elements, index}) => ( elements.about || (index === 40 && isMobile))  ? "#ffffff":  "inherit"};
  height: 10vh;
  display: flex;
  top: 0;
  margin-right: 3vw;
  margin-left: 3vw;
  height: ${() => (isMobile ? "60px" : "70px")};
`;

export const NavbarContainer = styled.div`
  color: inherit; 
  display: inline-grid;
  grid-template-columns: 27vw 65.9vw;
  align-items: center;
  margin-bottom:0px;
  height: ${() => (isMobile ? "45px" : "80px")};

  @media screen and (max-width: 960px) {
    grid-template-columns: 32vw 59.9vw;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 36vw 55.9vw;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 40vw 51.7vw;
  }
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: 94vw;
  }
`;

export const NavLogoContainer = styled.div`
color: inherit; 
  justify-self: start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavSlide = styled.div`
color: inherit; 
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 575px) {
    display: none;
  } 
  }
`;

export const NavLogoItem = styled.a`
&:hover{
  color:rgb(120, 120, 120)};
} 
color: inherit; 
  white-space: nowrap;
  cursor: pointer;
  margin-right: 25px;
  text-decoration: none;
  @media screen and (max-width: 575px) {
    margin-right: 20px;
  }
`;

export const LogoItem = styled.div`
color: inherit; 
display: ${() => (isMobileOnly ? "none" : "")};
  margin-left: 5px;
  margin-right: 5px;
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    display:none;
  }
`;

export const MobileItem = styled.div`
color: inherit; 
  position: absolute;
  right: 3vw;
  margin-right: 8px;
  @media screen and (min-width: 575px) {
    display: none;
  }
`;

export const NavMobilePlus = styled.img`
  cursor: pointer;
  width: 13.5px;
  padding: 8px;
  margin: -8px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NavMobileMinus = styled.img`
  cursor: pointer;
  width: 13.5px;
  display: ${({ mobile }) => (mobile ? "none" : "")};
`;

export const NavItem = styled.div`
color: inherit; 
  list-style-type: none;
  height: 80px;
  text-decoration: none;
  height: 100%;
  @media screen and (max-width: 1200px) {
    visibility: hidden;
  }
`;

export const NavLinks = styled.a`
  color: ${({index}) => index===40 ? "#ffffff" : "inherit"};
  &:hover{
    color:rgb(120, 120, 120)};
  } 
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
 }
`;
