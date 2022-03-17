import styled from "styled-components";

export const SeletorStyled = styled.select`
  height: ${(props) => props.theme.altura.principal};
  width: 192px;
  margin: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  placeholder-color: ${(props) => props.theme.cores.claro};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: white;
  color: ${(props) => props.theme.cores.escuro};
`;