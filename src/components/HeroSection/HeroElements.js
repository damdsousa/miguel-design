import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: 80px;
  margin-right: 4vw;
  margin-left: 4vw;
  grid-template-columns: 26vw 64.9vw;
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
  
`;


