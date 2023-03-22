import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";

export const Section = styled.div`
  visibility: ${({ load }) => (load ? "hidden" : "visible")};
  opacity: ${({ load }) => (load ? "0" : "1")};
  transition: visibility 1.8s, opacity 1.8s;
  color: ${({fontColor, index }) => fontColor==="white" || (isMobileOnly  && index === 11) ? "#ffffff" : "#000000"};
  `