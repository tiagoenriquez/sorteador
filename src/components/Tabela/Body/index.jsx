import { CelulaStyled } from "../style";
import { BodyStyled } from "./style";

function Body({ elementos }) {
    return(
        <BodyStyled>
            {
                elementos.map((elemento) => 
                        <tr key={elemento.chave}>
                            <CelulaStyled>{elemento.nome}</CelulaStyled>
                            <CelulaStyled>{elemento.categoria}</CelulaStyled>
                        </tr>
                )
            }
        </BodyStyled>
    );
}

export default Body;