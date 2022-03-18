import styled from "styled-components";

export const InformacaoBotaoStyled = styled.div`
  display: block;
  position: absolute;
  left: 100;
  right: 0;
  margin: auto;
  color: black;
  background-color: ${(props) => props.theme.cores.claro};
`;