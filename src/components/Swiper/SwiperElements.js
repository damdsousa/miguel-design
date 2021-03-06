import styled from "styled-components";

export const SwiperContainer = styled.div`
  opacity: ${({ page }) => (page ? "0" : "1")};
  ${'' /* display: ${({ page }) => (page ? "none" : "")}; */}
  position: ${({ page }) => (page ? "absolute" : "")};
  top: ${({ page }) => (page ? "-1000px" : "")};
  left: ${({ page }) => (page ? "-100px" : "")};
  width:  ${({ page }) => (page ? "0px" : "")};
  overflow:hidden;
`;

export const ImgWrap = styled.div`
  margin: 0px auto;
`;

export const Img = styled.img`
  width: 90%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  
`;

export const ImgSubtitle = styled.div`
  color: #6a747c;
  position: absolute;
  left: 80%;
  bottom: 7.5%;
  @media screen and (max-width: 520px) {
    left: 70%;
  }
`;
