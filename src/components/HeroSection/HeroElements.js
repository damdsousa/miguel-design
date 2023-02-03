import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const HeroContainer = styled.div`
  cursor : ${({elements}) => elements.about ? "url(left-arrow.png), auto" : "initial"}; 

  position: absolute;
  z-index: -1;
  left: ${() => (isMobile ? "50%" : "50%")};
  margin-left: ${() => (isMobile ? "-50%" : "-50%")};
  top: ${() => (isMobile ? "0%" : "50%")};
  margin-top: ${() => (isMobile ? "0%" : "-30%")};
  
 
  width: 100vw;
  height: 100vh;
  align-items: center;

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
