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
`;

export const ImgWrap = styled.div`
  margin: 0px auto;
`;

export const Img = styled.img`
  width: 100%;
  ${'' /* @media screen and (max-width: 575px) {
    height:60vw;
  } */}
 

`;

export const ImgSubtitle = styled.div`
  color: rgb(120, 120, 120);
  position: absolute;
  right: 3%;
  bottom: 5%;
  white-space: nowrap;
  @media screen and (max-width: 575px) {
    font-size: 11px;
  }
`;
