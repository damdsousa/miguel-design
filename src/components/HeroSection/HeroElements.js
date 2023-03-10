import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const HeroContainer = styled.div`
  cursor : ${({elements}) => elements.about ? "url(left_white_arrow.png), auto" : "initial"}; 

  position: absolute;
  z-index: -1;
  left: ${() => (isMobile ? "50%" : "50%")};
  margin-left: ${() => (isMobile ? "-50%" : "-50%")};
  top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "50%")};   //13% for tablet
  margin-top: ${() => (isMobile ? "0%" : "-30%")};
  
 
  width: 100vw;
  height: 100vh;
  align-items: center;

  // left: ${() => (isMobile ? "50%" : "25vw")};
  // margin-left: ${() => (isMobile ? "-50%" : "-50vw")};
  // top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "32vw")};   //13% for tablet
  // margin-top: ${() => (isMobile ? "0%" : "-50vw")};

  ${'' /* grid-template-rows: auto; */}
  ${'' /* height : ${({elements}) => elements.about ? "80vh" : ""};  */}

  @media screen and (max-height: 500px) {
    height : ${({elements}) => elements.about ? "60vh" : ""}; 
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 100%;
    height:initial;
  }
  ${'' /* padding-bottom: 500px; */}
`;



export const HeroActive = styled.div``;
