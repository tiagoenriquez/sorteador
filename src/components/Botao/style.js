import styled from "styled-components";

export const BotaoNormalStyled = styled.button`
  height: ${(props) => props.theme.altura.principal};
  width: 192px;
  margin: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: ${(props) => props.theme.cores.principal};
  color: white;
  : hover {
    background-color: ${(props) => props.theme.cores.escuro};
  }
`;

export const BotaoMaisStyled = styled.button`
  height: ${(props) => props.theme.altura.principal};
  width: 48px;
  margin: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: ${(props) => props.theme.cores.principal};
  color: white;
  : hover {
    background-color: ${(props) => props.theme.cores.escuro};
  }
`;

export const BotaoMenosStyled = styled.button`
  height: ${(props) => props.theme.altura.principal};
  width: 48px;
  margin: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: ${(props) => props.theme.cores.perigo};
  color: white;
  : hover {
    background-color: ${(props) => props.theme.cores.perigoEscuro};
  }
`;