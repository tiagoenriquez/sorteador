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
    obterGrupos,
    grupos,
    sortear,
    foco 
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
                foco={foco}
            />
            <CampoTexto
                etiqueta={'Nº de Grupos'}
                funcao={obterGrupos}
                valor={grupos}
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