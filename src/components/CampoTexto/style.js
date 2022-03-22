import styled from "styled-components";

export const CampoTextoStyled = styled.input`
  height: ${(props) => props.theme.altura.principal};
  margin: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  placeholder-color: ${(props) => props.theme.cores.claro};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  color: ${(props) => props.theme.cores.escuro};
  text-align: center;
  border: 1px solid ${(props) => props.theme.cores.principal};
`;