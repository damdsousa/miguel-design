import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const HeroContainer = styled.div`
  cursor : ${({elements}) => elements.about ? "url(left_white_arrow.png), auto" : "initial"}; 

  position: absolute;
  z-index: -1;
  left: ${() => (isMobile ? "50%" : "0vw")};
  margin-left: ${() => (isMobile ? "-50%" : "inherit")};
  top: ${() => (isMobileOnly ? "0vh" : isTablet ? "0vh": "0vh")};   //13% for tablet, 24% half size desktop, 7% minimum
  // margin-top: ${() => (isMobile ? "0%" : "-inherit")};
  
 
  // width: 100vw;
  // height:100vh;
  // height: calc((var(--vh, 1vh) * 100));
  align-items: center;

  

  

  // left: ${() => (isMobile ? "50%" : "25vw")};
  // margin-left: ${() => (isMobile ? "-50%" : "-50vw")};
  // top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "32vw")};   //13% for tablet
  // margin-top: ${() => (isMobile ? "0%" : "-50vw")};

  ${'' /* grid-template-rows: auto; */}
  ${'' /* height : ${({elements}) => elements.about ? "80vh" : ""};  */}

  // @media screen and (max-height: 500px) {
  //   height : ${({elements}) => elements.about ? "60vh" : ""}; 
  // }

  // @media screen and (max-width: 2000px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "50%")}; 
  // }

  // @media screen and (max-width: 1900px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "48%")}; 
  // }

  // @media screen and (max-width: 1800px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "44%")}; 
  // }

  // @media screen and (max-width: 1700px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "42%")}; 
  // }

  // @media screen and (max-width: 1600px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "38%")}; 
  // }

  // @media screen and (max-width: 1500px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "36%")}; 
  // }

  // @media screen and (max-width: 1400px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "34%")}; 
  // }

  // @media screen and (max-width: 1300px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "30%")}; 
  // }

  // @media screen and (max-width: 1200px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "24%")}; 
  // }

  // @media screen and (max-width: 1050px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "24%")}; 
  // }

  // @media screen and (max-width: 960px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "22%")}; 
  // }

  // @media screen and (max-width: 800px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "17%")}; 
  // }

  // @media screen and (max-width: 700px) {
  //   top: ${() => (isMobileOnly ? "-4%" : isTablet ? "-11%": "12%")}; 
  // }
  
  
  
  
  // @media screen and (max-width: 575px) {
  //   top: ${() => (isMobileOnly ? "-17%" : isTablet ? "-11%": "7%")}; 
  // }
  // @media screen and (max-width: 1080px) {
  //   grid-template-columns: 100%;
  //   height:initial;
  // }
  ${'' /* padding-bottom: 500px; */}
`;



export const HeroActive = styled.div``;
