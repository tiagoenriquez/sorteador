import { Container, Seletor, Titulo } from "../../components";
import Botao from "../../components/Botao";
import { InicialStyled } from "./styled";

function Inicial({ valor, categorias, elementos }) {

    return (
        <InicialStyled>
            <Titulo valor={'Sorteador'} />
            <Seletor
                valor={valor}
                categorias={categorias}
            />
            <Container elementos={elementos} />
            <Botao
                grande={true}
                etiqueta='Sortear'
            />
        </InicialStyled>
    );
}

export default Inicial;