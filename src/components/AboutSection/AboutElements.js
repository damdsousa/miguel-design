import styled, { css, keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { animated } from 'react-spring'


export const AboutContainer = styled(animated.div)`
  margin-top: 50px;
  width: 95%;
  max-width: 720px;
  display: grid;
  position:absolute;
  margin-left:27px;
  left:30vw;
  top:20%;

 

  ${'' /* position:relative; */}
  ${'' /* opacity: ${({ page }) => (page ? "1" : "0")};
  position: ${({ page }) => (page ? "relative" : "absolute")};
  top: ${({ page }) => (page ? "" : "-1000px")};
  left: ${({ page }) => (page ? "" : "-100px")}; */}
  @media screen and (max-width: 1200px) {
    width:95%;

  }
  @media screen and (max-width: 960px) {
    left:0;
    margin-left:30px;
    margin-right:auto;
    width:91%;

   
  }
`;
export const Description = styled.p`
  margin: 0;
`;

export const AboutLink = styled(LinkR)`
  margin-top: 25px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  height: 110%;
  left: 0;
  --swiper-navigation-size: 15px;
  
  &.visited {
    color: #fff;
  }
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;
