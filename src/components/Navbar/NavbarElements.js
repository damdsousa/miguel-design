import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  top: 0;
  margin-right: 4vw;
  margin-left: 4vw;

`;

export const NavbarContainer = styled.div`
  display: inline-grid;
  ${"" /* grid-template-columns: 30vw 64.6vw; */}
  grid-template-columns: 26vw 64.9vw;
  ${"" /* justify-items: stretch; */}
  align-items: center;

  height: 80px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 31vw 58.9vw;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 35vw 54.9vw;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 39vw 50.7vw;
  }
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: 92vw;
  }
`;
export const NavLogoContainer = styled.div`
  justify-self: start;
  display: flex;
  justify-content: flex-start;
  align-items:center;
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
    color: ${({ page }) => (page ? "#fff" : "rgb(120, 120, 120)")};
    cursor: ${({ page }) => (page ? "initial" : "")};
  }
  white-space: nowrap;
  cursor: pointer;
  margin-right: 25px;
  text-decoration: none;
  white-space: nowrap;
`;

export const LogoItem = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  white-space: nowrap;
  color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")};

  @media screen and (max-width: 768px) {
  }
`;
export const MobileItem = styled.div`
  font-size: 25px;
  ${'' /* color: ${({ page }) => (page ? "rgb(120, 120, 120)" : "#fff")}; */}
  position: absolute;
  right: 4vw;
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
