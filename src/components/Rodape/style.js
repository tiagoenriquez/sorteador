import styled from "styled-components";

export const RodapeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 20px 20px;
  font-family: ${(props) => props.theme.familiaFonte.principal};
  font-size: ${(props) => props.theme.tamanhoFonte.principal};
  color: ${(props) => props.theme.cores.principal};
`;

export const IconeStyled = styled.img`
  height: 30px;
  width: 30px;
  margin: ${(props) => props.theme.margens.principal};
`;