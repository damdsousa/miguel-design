import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const SwiperContainer = styled.div`
  overflow: hidden;

  cursor: ${({ cursor }) =>
    isMobile
      ? "initial"
      : cursor === 1
      ? "url(left-arrow.png), auto"
      : cursor === 2
      ? "url(right-arrow.png), auto"
      : "none"};
    @media screen and (max-width: 1080px) {
    margin-top: 10px;
  }
`;

export const ImgWrap = styled.div`

`;

export const Img = styled.img`
  width: 100%;
  display:block;
  margin: 0 auto;
`;

export const ImgSubtitle = styled.div`
  color: ${({fontColor}) => fontColor==="white" ? "white": fontColor==="red" ? "#bd1218" : "black"};
  position: absolute;
  right: 3.6vw;
  bottom: 15%;
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`;
