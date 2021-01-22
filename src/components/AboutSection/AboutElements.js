import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.aside `
    margin-top: 120px;
    width:100%;
    display:grid;
    max-width: 720px;
    transition-property: left, right;
    transition-duration: 1s, 1s;
    transition-delay: 0s, 1s;
    ${'' /* display: ${({page}) => ({page} ? 'block' : 'none')};   */}
`
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
