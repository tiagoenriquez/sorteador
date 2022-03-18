import {InformacaoBotaoStyled} from './style';

function InformacaoBotao({ informacao, aparecendo }) {
    if (aparecendo) {
        return (
            <InformacaoBotaoStyled>{informacao}</InformacaoBotaoStyled>
        );
    } else {
        return null;
    }
}

export default InformacaoBotao;