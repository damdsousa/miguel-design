import styled, { css, keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

const slideIn = keyframes`
  from{
    left: -90%;
  }
  to {
    left: 0%
  }
`;
const slideOut = keyframes`
  from{
    left: 0%;
  }
  to {
    left: -100%
  }
`;

export const AboutContainer = styled.div`
  position: relative;
  margin-top: 120px;
  width: 100%;
  max-width: 720px;
  display: ${({ page }) => (page ? "grid" : "none")};
  animation: ${({ page }) =>
    page
      ? css`
          ${slideIn} 0.5s linear
        `
      : css`
          ${slideOut} 0.5s linear
        `};
`;
export const Description = styled.p`
  margin: 0;
`;

export const AboutLink = styled(LinkR)`
  margin-top: 25px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.visited {
    color: #fff;
  }
  &.hover {
    color: #a6a6a6;
  }
`;
