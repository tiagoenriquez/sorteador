import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento({ adicionarElemento, adicionarCategoria, elemento, categoria }) {

    const MAIS = 2, MENOS = 3;

    return (
        <ElementoStyled>
            <CampoTexto 
                etiqueta={'Elemento'}
                funcao={adicionarElemento}
                valor={elemento}
            />
            <CampoTexto
                etiqueta={'Categoria'}
                funcao={adicionarCategoria}
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
            />
        </ElementoStyled>
    );
}

export default Elemento;