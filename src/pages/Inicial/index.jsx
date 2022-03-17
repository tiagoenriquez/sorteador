import { Elemento, Seletor, Titulo } from "../../components";
import { InicialStyled } from "./styled";

function Inicial({ valor, categorias }) {

    return (
        <InicialStyled>
            <Titulo valor={'Sorteador'} />
            <Seletor
                valor={valor}
                categorias={categorias}
            />
            <Elemento />
        </InicialStyled>
    );
}

export default Inicial;