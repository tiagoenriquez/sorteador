import styled from "styled-components";

export const ErroStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;width: 100vw;
  background-color: ${(props) => props.theme.cores.perigo};
`;

export const EtiquetaErroStyled = styled.label`
  font-size: 24px;
  font-family: ${(props) => props.theme.familiaFonte.principal};
  color: white;
  margin: ${(props) => props.theme.margens.principal};
`;