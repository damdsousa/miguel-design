import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: 80px;
  grid-template-columns: 27vw 65vw;
  align-items: center;
  display: grid;
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    }
`;

export const HeroBlank = styled.div`
  @media screen and (max-width: 960px) {
   display: none;
  }
`;

export const HeroActive = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;


