import styled from "styled-components";

export const SeletorContainerStyled = styled.div`
  width: 192;
  margin: ${(props) => props.theme.margens.principal};
`;

export const TituloSeletorStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.altura.principal};
  width: 192px;
  margin: 0;
  padding: ${(props) => props.theme.margens.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  placeholder-color: ${(props) => props.theme.cores.claro};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: white;
  color: rgb(112, 168, 112);
  border: 1px solid ${(props) => props.theme.cores.principal};
`;

export const OpcoesContainerStyled = styled.div``;

export const ListaOpcoesStyled = styled.ul`
  position: absolute;
  margin: 0;
  padding-left: 0;
`;

export const OpcaoStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.altura.principal};
  width: 192px;
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  background-color: white;
  color: ${(props) => props.theme.cores.escuro};
  border: 1px solid ${(props) => props.theme.cores.principal};
  border-radius: 0px;
  : hover {
    background-color: ${(props) => props.theme.cores.claro};
  }
`;

export const SetaStyled = styled.img`
  height: 10px;
  width: 10px;
`;