import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ElementoStyled } from "./style";

function Elemento({ obterElemento, obterCategoria, elemento, categoria, classeBotao, foco, botao }) {

    return (
        <ElementoStyled>
            <CampoTexto 
                etiqueta={'Nome'}
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