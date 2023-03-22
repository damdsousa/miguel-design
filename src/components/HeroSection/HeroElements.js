import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const HeroContainer = styled.div`
  cursor : ${({elements}) => elements.about ? "url(left_white_arrow.png), auto" : "initial"}; 
  position: absolute;
  z-index: -1;
  left: ${() => (isMobile ? "50%" : "0vw")};
  margin-left: ${() => (isMobile ? "-50%" : "inherit")};
  top: ${() => (isMobileOnly ? "0vh" : isTablet ? "0vh": "0vh")};   //13% for tablet, 24% half size desktop, 7% minimum
  align-items: center;
`;



export const HeroActive = styled.div``;
