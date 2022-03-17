import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento() {
    return (
        <ElementoStyled>
            <CampoTexto etiqueta={'Elemento'} />
            <CampoTexto etiqueta={'Categoria'} />
        </ElementoStyled>
    );
}

export default Elemento;