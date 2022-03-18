import { Container, Seletor, Titulo } from "../../components";
import Botao from "../../components/Botao";
import { InicialStyled } from "./styled";

function Inicial({ valor, categorias, elementos, adicionarElementoNovo, adicionarCategoriaNova, elementoNovo, categoriaNova }) {

    const NORMAL = 1;

    return (
        <InicialStyled>
            <Titulo valor={'Sorteador'} />
            <Seletor
                valor={valor}
                categorias={categorias}
            />
            <Container
                elementos={elementos}
                adicionarElementoNovo={adicionarElementoNovo}
                adicionarCategoriaNova={adicionarCategoriaNova}
                elementoNovo={elementoNovo}
                categoriaNova={categoriaNova}
            />
            <Botao
                perfil={NORMAL}
                etiqueta='Sortear'
                informacao={'Manda os elementos para sorteio e redireciona para a página de resultado do sorteio.'}
            />
        </InicialStyled>
    );
}

export default Inicial;