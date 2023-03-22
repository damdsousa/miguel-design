import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const SwiperContainer = styled.div`
  height:100vh;
  width: 100vw;
  cursor: ${({ cursor, fontColor }) =>
    isMobile
      ? "initial" : cursor === 1 ? fontColor==="white" ? "url(left_white_arrow.png), auto" : "url(left_black_arrow.png), auto"
      : cursor === 2 ? fontColor==="white" ? "url(right_white.png), auto" : "url(right_black_arrow.png), auto"
      : "none"};
    @media screen and (max-width: 1080px) {
  }
`;

export const ImgWrap = styled.div`
  height:100vh;
  width: 100vw;
`;

export const Img = styled.img`  
  width:100%;
  height:100%;
  object-fit:cover;

`;

export const ImgSubtitle = styled.div`
  font-size: 20px;
  color: ${({index}) => index===40 ? "#ffffff" : "inherit"};
  position: absolute;
  right:${() => isMobileOnly ? "7vw" : "4vw"};
  bottom: ${() => isMobileOnly ? "3.6vh" : isTablet ? "3.6vh" : "3.6vh"};
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
`;
