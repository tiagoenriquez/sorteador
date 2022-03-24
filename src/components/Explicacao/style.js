import styled from "styled-components";

export const CaixaExplicacaoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5em;
  background-color: ${(props) => props.theme.cores.claro};
  margin: ${(props) => props.theme.margens.principal};
  width: 512px;
  padding: 20px 20px 20px 20px;
`;

export const ExplicacaoStyled = styled.p`
  color: black;
  font-family: ${(props) => props.theme.familiaFonte.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
`;