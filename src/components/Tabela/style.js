import styled from 'styled-components';

export const TabelaStyled = styled.table`
  background: ${(props) => props.theme.cores.principal};
  color: ${(props) => props.theme.cores.escuro};
  font-family: ${(props) => props.theme.familiaFonte.principal};
  margin: ${(props) => props.theme.margens.principal};
`;

export const CelulaStyled = styled.td`
  border: 0;
  height: 40px;
  padding: 0px 10px 0px 10px;
`;