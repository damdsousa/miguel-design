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


`;
export const NavLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavLogoItem = styled(LinkR)`
  cursor: pointer;
  margin-left: 25px;
  margin-right:25px;
  text-decoration: none;
  white-space: nowrap;
  .disable-link {
  pointer-events: none;
  color: #707070
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavSlide = styled.ul`
  
  display: grid;
  grid-template-columns: 65px 65px auto;
  text-align: center;
  

  ${'' /* @media screen and (max-width: 768px) {
    display: none;
  } */}
`;

export const NavItem = styled.li`
  list-style-type:none;
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
  color: #707070
  }
`;
