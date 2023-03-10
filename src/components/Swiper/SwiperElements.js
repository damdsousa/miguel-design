import styled from "styled-components";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const SwiperContainer = styled.div`

  overflow: hidden;

  cursor: ${({ cursor, fontColor }) =>
    isMobile
      ? "initial" : cursor === 1 ? fontColor==="white" ? "url(left_white_arrow.png), auto" : "url(left_black_arrow.png), auto"
      : cursor === 2 ? fontColor==="white" ? "url(right_white.png), auto" : "url(right_black_arrow.png), auto"
      : "none"};
    @media screen and (max-width: 1080px) {
    margin-top: 10px;
  }
`;

export const ImgWrap = styled.div`
  position:relative;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  
`;

export const ImgSubtitle = styled.div`
  // color: ${({fontColor}) => fontColor==="white" ? "#ffffff" : "#000000"};
  position: absolute;
  right:${() => isMobileOnly ? "7vw" : "3.6vw"};
  bottom: ${() => isMobileOnly ? "15vh" : isTablet ? "17vh" : "10vh"};
  // bottom: 10vh;
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
`;
