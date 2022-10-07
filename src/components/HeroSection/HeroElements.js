import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const HeroContainer = styled.div`
  cursor : ${({elements}) => elements.about ? "url(left-arrow.png), auto" : "initial"}; 

  margin-top: ${({elements}) => (isMobile ? "15px" : "0px")};
  margin-right: 3vw;
  margin-left: 3vw;
  grid-template-columns: 27vw 65.9vw;
  align-items: center;
  display: grid;
  ${'' /* grid-template-rows: auto; */}
  ${'' /* height : ${({elements}) => elements.about ? "80vh" : ""};  */}
  height:80vh;
  @media screen and (max-height: 500px) {
    height : ${({elements}) => elements.about ? "60vh" : ""}; 
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 100%;
    height:initial;
  }
  ${'' /* padding-bottom: 500px; */}
`;

export const HeroBlank = styled.div`
  ${'' /* cursor: ${() => (isMobile ? "none" : "initial")}; */}
  ${'' /* cursor : url(close.png), auto; */}
  @media screen and (max-width: 1080px) {
   display: none;
  }

`;

export const HeroActive = styled.div``;
