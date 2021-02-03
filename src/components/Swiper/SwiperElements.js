import styled from "styled-components";

export const SwiperContainer = styled.div`
  ${'' /* z-index:-1; */}
  ${'' /* opacity: ${({ page }) => (page ? "1" : "0")}; */}
  ${'' /* position: ${({ page }) => (page ? "absolute" : "relative")};
  top: ${({ page }) => (page ? "-1000px" : "")};
  left: ${({ page }) => (page ? "-100px" : "")};
  width:  ${({ page }) => (page ? "0px" : "")}; */}
  ${'' /* transition: all 800 ms;  */}
  overflow:hidden;
  

`;

export const ImgWrap = styled.div`
  margin: 0px auto;

`;

export const Img = styled.img`
  width: 100%;
  ${'' /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */}
  @media screen and (max-width: 568px) {
    ${'' /* aspect-ratio:12/9; */}
    height: 250px;
  }
`;

export const ImgSubtitle = styled.div`
  color: rgb(120,120,120);
  position: absolute;
  right: 3%;
  bottom: 5%;
  white-space: nowrap;

`;

export const NavBack = styled.div`
  ${'' /* display: none;
  &:hover{
    display:"";
  } */}
`;

export const NavForward = styled.div`
${'' /* display: none;
  &:hover{
    display:"";
  } */}
`;