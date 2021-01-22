import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: 30px;
  ${'' /* grid-template-columns: 500px 1100px; */}
  grid-template-columns: 27vw 65vw;
  align-items: center;
  display: grid;
  @media screen and (max-width: 960px) {
   
    }
`;

export const HeroBlank = styled.div`

`;

export const HeroActive = styled.div`
  margin-left: 55px;
`;


