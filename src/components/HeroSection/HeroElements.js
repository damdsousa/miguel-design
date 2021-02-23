import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: 80px;
  margin-right: 3vw;
  margin-left: 3vw;
  grid-template-columns: 27vw 65.9vw;
  align-items: center;
  display: grid;
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
  }
  @media screen and (max-width: 575px) {
    margin-top: 5px;
  }
`;

export const HeroBlank = styled.div`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const HeroActive = styled.div``;
