import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const AboutContainer = styled.div`
  ${'' /* cursor : url(left-arrow.png), auto; */}
  margin-top: ${() => (isMobileOnly || isTablet ? "150px" : "150px")};
  ${'' /* padding-bottom: 25%; */}
  ${'' /* padding-right: 10vw; */}
  ${"" /* margin-top: 50px; */}

  color: #fff;
  // display: grid;
  position: absolute;
  // margin-left: 3vw;
  margin-right: 3vw;
  // margin-right: ${() => (isMobile ? "3.6vw" : "3.6vw")};
  // left: 3.6vw;
  top: ${() => (isMobileOnly ? "-3rem" : isTablet ? "-3rem" : "5vh")};
  left: ${() => (isMobileOnly ? "5vw" : isTablet ? "4.5vw" : "3vw")};
  width: ${() => (isMobileOnly ? "70vw" : isTablet ? "80vw" : "37em")};
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
  @media screen and (max-width: 1080px) {
    // left: 8px;
    // margin-left: 3vw;
    // margin-right: 4vw;
    // width: 90%;

  }

  

  // @media screen and (max-width: 560px) {
  //   margin-left: 3vw;
  //   width: 87%;
  // }
`;

export const Description = styled.p`
  margin: 0;
  line-height: 1.3;
`;

export const AboutLink = styled.div`
  margin-top: 25px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  height: 105%;
  left: 0;
  --swiper-navigation-size: 15px;
  &:hover {
    text-decoration: none;
    color: rgb(120, 120, 120);
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const Mail = styled.a`
  display:block;
   @media screen and (min-width: 575px) {
    display: none;
  }
`;

export const IG = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
`;

export const Phone = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
`;