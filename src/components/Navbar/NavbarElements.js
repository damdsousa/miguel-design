import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  top: 0;
  margin-right: 3vw;
  margin-left: 3vw;
  @media screen and (max-width: 575px) {
    height: 50px;
  }
`;

export const NavbarContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 27vw 65.9vw;
  align-items: center;
  height: 80px;
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
    height: 30px;
  }
`;

export const NavLogoContainer = styled.div`
  justify-self: start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavSlide = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 575px) {
    display: none;
  } 
  }
`;

export const NavLogoItem = styled.a`
  &:hover {
    ${'' /* color: ${({ page }) => (page ? "#fff" : "rgb(120, 120, 120)")}; */}
    ${'' /* color: rgb(120, 120, 120); */}
    ${'' /* cursor: ${({ page }) => (page ? "initial" : "")}; */}
  }
  white-space: nowrap;
  cursor: pointer;
  margin-right: 25px;
  text-decoration: none;
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    margin-right: 20px;
  }
`;

export const LogoItem = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  white-space: nowrap;
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  @media screen and (max-width: 575px) {
    margin-left: 0px;
  }
`;

export const MobileItem = styled.div`
  font-size: 25px;
  position: absolute;
  right: 3vw;
  margin-right: 8px;
  @media screen and (min-width: 575px) {
    display: none;
  }
`;

export const NavMobilePlus = styled.a`
  display: ${({ mobile }) => (mobile ? "" : "none")};
`;

export const NavMobileMinus = styled.a`
  display: ${({ mobile }) => (mobile ? "none" : "")};
  color: rgb(120, 120, 120);
`;

export const NavItem = styled.div`
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  list-style-type: none;
  height: 80px;
  text-decoration: none;
  height: 100%;
  @media screen and (max-width: 960px) {
    visibility: hidden;
  }
  
`;

export const NavLinks = styled.a`
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};
  }
 }
`;
