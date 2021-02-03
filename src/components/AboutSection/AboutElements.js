import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { animated } from "react-spring";

export const AboutContainer = styled.div`
  margin-top: 50px;
  width: 92%;
  max-width: 720px;
  display: grid;
  position: absolute;
  margin-left: 8px;
  left: 30vw;
  top: 20%;

  ${"" /* position:relative; */}
  ${
    "" /* opacity: ${({ page }) => (page ? "1" : "0")};
  position: ${({ page }) => (page ? "relative" : "absolute")};
  top: ${({ page }) => (page ? "" : "-1000px")};
  left: ${({ page }) => (page ? "" : "-100px")}; */
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 960px) {
    left: 8px;
    margin-left: 4vw;
    margin-right: 4vw;
    width: 90%;
  }
  @media screen and (max-width: 560px) {
    margin-top: 20px;
    margin-left: 4vw;
    width: 87%;
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

export const MailLink = styled.a`
  @media screen and (min-width: 521px) {
    display: none;
  }
`;
