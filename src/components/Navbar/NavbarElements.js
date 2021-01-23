import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  /*margin-top: -80px;*/
  display: flex;

  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 27vw 65vw;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 960px) {
    grid-template-columns: 50% 50%;
  }
`;
export const NavLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavLogoItem = styled(LinkR)`
  & #aboutLink {
    color: ${({ page }) => (page ? "#fff" : "#707070")};
  }

  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
  white-space: nowrap;
  .disable-link {
    pointer-events: none;
    color: #707070;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 520px) {
    display: ${({ mobile }) => (mobile ? "" : "none")};
   
  }
`;

export const NavMobilePlus = styled(LinkR)`
  display: ${({ mobile }) => (mobile ? "" : "none")};
  position: absolute;
  right: 0;
  margin-right: 30px;
  @media screen and (max-width: 521px) {
    margin-right: 20px;
  }
  @media screen and (min-width: 521px) {
    display: none;
  }
`;
export const NavMobileMinus = styled(LinkR)`
  display: ${({ mobile }) => (mobile ? "none" : "grid")};
  margin-left: 20px;
  @media screen and (min-width: 521px) {
    display: none;
  }
`;
export const NavSlide = styled.div`
  display: grid;
  grid-template-columns: 65px 65px auto;
  text-align: center;

  @media screen and (max-width: 1024px) {
    justify-content: end;
    grid-template-columns: 65px 65px;
    margin-right: 30px;
  }

  @media screen and (max-width: 768px) {
    ${"" /* margin-right:20px; */}
  }
  @media screen and (max-width: 520px) {
    display: ${({ mobile }) => (mobile ? "none" : "")};
  }
`;

export const NavItem = styled.div`
  list-style-type: none;
  height: 80px;
  
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

  .disable-link {
    pointer-events: none;
    color: #707070;
  }

  
`;
