import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento() {
    return (
        <ElementoStyled>
            <CampoTexto etiqueta={'Elemento'} />
            <CampoTexto etiqueta={'Categoria'} />
            <Botao grande={false} etiqueta={'+'}/>
            <Botao grande={false} etiqueta={'-'}/>
        </ElementoStyled>
    );
}

export default Elemento;