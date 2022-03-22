import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento({ obterElemento, obterCategoria, elemento, categoria, classeBotao, foco, botao, idElemento, idCategoria }) {

    return (
        <ElementoStyled>
            <CampoTexto 
                etiqueta={'Nome'}
                funcao={obterElemento}
                valor={elemento}
                foco={foco}
                id={idElemento}
            />
            <CampoTexto
                etiqueta={'Categoria'}
                funcao={obterCategoria}
                valor={categoria}
                id={idCategoria}
            />
            <Botao
                perfil={botao.perfil}
                etiqueta={botao.etiqueta}
                informacao={botao.informacao}
                funcao={botao.funcao}
                classeBotao={classeBotao}
            />
        </ElementoStyled>
    );
}

export default Elemento;