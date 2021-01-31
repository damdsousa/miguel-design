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
  grid-template-columns: 30vw 65vw;
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
  &:hover {
    text-decoration: underline;
    color: #fff;
  }

  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 520px) {
    display: ${({ mobile }) => (mobile ? "" : "none")};
  }
`;

export const LogoItem = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  white-space: nowrap;
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 520px) {
    display: ${({ mobile }) => (mobile ? "" : "none")};
  }
`;
export const MobileItem = styled.div`

`
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

  
  @media screen and (max-width: 520px) {
    display: ${({ mobile }) => (mobile ? "none" : "")};
  }
`;

export const NavItem = styled.div`
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  list-style-type: none;
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    visibility:hidden;
  }

  @media screen and (max-width: 768px) {
    margin-right: 30px;
  }
`;

export const NavLinks = styled.a`
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  margin-right: 4vw;
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    text-decoration: underline;
    color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  }
  .disable-link {
    pointer-events: none;
    color: #707070;
  }

  @media screen and (max-width: 1024px) {
    justify-content: end;
    grid-template-columns: 65px 65px;
    margin-right: 30px;
  }
`;
