import styled from "styled-components";

export const Section = styled.div`
visibility: ${({ load }) => (load ? "hidden" : "visible")};
  opacity: ${({ load }) => (load ? "0" : "1")};
  transition: visibility 1.8s, opacity 1.8s;
  `