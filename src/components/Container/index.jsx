import Elemento from "../Elemento";
import { ContainerStyled } from "./style";

function Container({ elementos, obterElementoNovo, obterCategoriaNova, adicionarElementoNovo, elementoNovo, categoriaNova, removerElemento }) {

    return (
        <ContainerStyled>
            {
                elementos.map((elemento) => 
                    <Elemento
                        key={elemento.chave}
                        elemento={elemento.nome}
                        categoria={elemento.categoria}
                        removerElemento={removerElemento}
                        classeBotao={elemento.chave}
                    />
                )
            }
            <Elemento
                obterElemento={obterElementoNovo}
                obterCategoria={obterCategoriaNova}
                adicionarElemento={adicionarElementoNovo}
                elemento={elementoNovo}
                categoria={categoriaNova}
            />
        </ContainerStyled>
    );
}

export default Container;