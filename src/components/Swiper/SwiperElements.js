import styled from "styled-components";

export const SwiperContainer = styled.div``;

export const ImgWrap = styled.div`
  margin: 20px auto;
`;

export const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 75%;
    margin: 10px;
  }
`;

export const ImgSubtitle = styled.div`
  color:#6a747c;
  position: absolute;
  left: 80%;
  bottom: 7.5%; 
  
`;

export const ArrowPrev = styled.div`
  position: absolute;
  background: gray;
  top: 50%;
  left: -40px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;

export const ArrowNext = styled.div`
  position: absolute;
  background: gray;
  top: 50%;
  right: -40px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;
