import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento({ obterElemento, obterCategoria, adicionarElemento, elemento, categoria, removerElemento, classeBotao, foco }) {

    const MAIS = 2, MENOS = 3;

    return (
        <ElementoStyled>
            <CampoTexto 
                etiqueta={'Elemento'}
                funcao={obterElemento}
                valor={elemento}
                foco={foco}
            />
            <CampoTexto
                etiqueta={'Categoria'}
                funcao={obterCategoria}
                valor={categoria}
            />
            <Botao
                perfil={MAIS}
                etiqueta={'+'}
                informacao={'Adiciona o elemento na lista para ser sorteado e mais um campo para edição de elemento.'}
                funcao={adicionarElemento}
            />
            <Botao
                perfil={MENOS}
                etiqueta={'-'}
                informacao={'Remove o elemento da lista de elementos a serem sorteados.'}
                funcao={removerElemento}
                classeBotao={classeBotao}
            />
        </ElementoStyled>
    );
}

export default Elemento;