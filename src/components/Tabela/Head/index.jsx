import { CelulaStyled } from "../style";
import { HeadStyled } from "./style";

function Head({ titulos }) {
    return(
        <HeadStyled>
            <tr>
                {
                    titulos.map((titulo) => 
                        <CelulaStyled key={titulo.chave} >
                            <b>{titulo.nome}</b>
                        </CelulaStyled>
                    )
                }
            </tr>
        </HeadStyled>
    );
}

export default Head;