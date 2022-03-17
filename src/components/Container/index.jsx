import Elemento from "../Elemento";
import { ContainerStyled } from "./style";

function Container({ elementos }) {
    return (
        <ContainerStyled>
            {
                elementos.map((elemento) => 
                    <Elemento key={elemento.chave} />
                )
            }
            <Elemento />
        </ContainerStyled>
    );
}

export default Container;