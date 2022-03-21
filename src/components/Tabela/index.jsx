import Body from "./Body";
import Head from "./Head";
import { TabelaStyled } from "./style";

function Tabela({ titulos, elementos }) {

    return(
        <TabelaStyled>
            <Head titulos={titulos} />
            <Body elementos={elementos} />
        </TabelaStyled>
    );
}

export default Tabela;