import styled from "styled-components";
import { isMobileOnly, isTablet } from "react-device-detect";

export const AboutContainer = styled.div`
  margin-top: ${() => (isMobileOnly || isTablet ? "150px" : "150px")};
  color: #fff;
  position: absolute;
  margin-right: 4vw;
  top: ${() => (isMobileOnly ? "-3rem" : isTablet ? "-3rem" : "5vh")};
  left: ${() => (isMobileOnly ? "5vw" : isTablet ? "4.5vw" : "3vw")};
  width: ${() => (isMobileOnly ? "80vw" : isTablet ? "83vw" : "37em")};
  
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
  &:hover {
    text-decoration: none;
    color: rgb(120, 120, 120);
  }
`;