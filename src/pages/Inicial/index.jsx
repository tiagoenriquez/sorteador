import { Container, Seletor, Titulo } from "../../components";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import { InicialStyled } from "./styled";

function Inicial({ 
    valor, 
    categorias, 
    elementos, 
    obterElementoNovo, 
    obterCategoriaNova, 
    adicionarElementoNovo, 
    elementoNovo, 
    categoriaNova, 
    selecionarCategoria, 
    removerElemento, 
    obterQuantidade,
    quantidade,
    sortear 
}) {

    const NORMAL = 1;

    return (
        <InicialStyled>
            <Titulo valor={'Sorteador'} />
            <Seletor
                valor={valor}
                categorias={categorias}
                funcao={selecionarCategoria}
            />
            <Container
                elementos={elementos}
                obterElementoNovo={obterElementoNovo}
                obterCategoriaNova={obterCategoriaNova}
                adicionarElementoNovo={adicionarElementoNovo}
                elementoNovo={elementoNovo}
                categoriaNova={categoriaNova}
                removerElemento={removerElemento}
            />
            <CampoTexto
                etiqueta={'Quantidade'}
                funcao={obterQuantidade}
                valor={quantidade}
            />
            <Botao
                perfil={NORMAL}
                etiqueta='Sortear'
                informacao={'Manda os elementos para sorteio e redireciona para a página de resultado do sorteio.'}
                funcao={sortear}
            />
        </InicialStyled>
    );
}

export default Inicial;