import styled from "styled-components";

export const InformacaoBotaoStyled = styled.div`
  display: block;
  position: absolute;
  left: 50;
  right: 50;
  margin: auto;
  color: black;
  height: 40px;
  width: 384px;
  background-color: ${(props) => props.theme.cores.claro};
`;