import Elemento from "../Elemento";
import { ContainerStyled } from "./style";

function Container({ 
    elementos, 
    obterElementoNovo, 
    obterCategoriaNova, 
    adicionarElementoNovo, 
    elementoNovo, 
    categoriaNova, 
    removerElemento, 
    foco,
    alterarElemento,
    alterarCategoria
 }) {

    function obterBotao(carater) {
        if (carater === '+') {
            return {
                perfil: 2,
                etiqueta: '+',
                informacao: 'Adiciona o elemento na lista e um campo para adicão de mais um elemento',
                funcao: adicionarElementoNovo
            };
        } else {
            return {
                perfil: 3,
                etiqueta: '-',
                informacao: 'Remove o elemento da lista',
                funcao: removerElemento
            }
        }
    }

    const MAIS = obterBotao('+');
    const MENOS = obterBotao('-');

    return (
        <ContainerStyled>
            <Elemento
                obterElemento={obterElementoNovo}
                obterCategoria={obterCategoriaNova}
                adicionarElemento={adicionarElementoNovo}
                elemento={elementoNovo}
                categoria={categoriaNova}
                foco={foco}
                botao={MAIS}
                idElemento={'elemento'}
            />
            {
                elementos.map((elemento) => 
                    <Elemento
                        key={elemento.chave}
                        elemento={elemento.nome}
                        categoria={elemento.categoria}
                        removerElemento={removerElemento}
                        classeBotao={elemento.chave}
                        botao={MENOS}
                        obterElemento={alterarElemento}
                        obterCategoria={alterarCategoria}
                        idElemento={`elemento${elemento.chave}`}
                        idCategoria={`categoria${elemento.chave}`}
                    />
                )
            }
        </ContainerStyled>
    );
}

export default Container;