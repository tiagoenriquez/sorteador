import { Container, Seletor, Titulo } from "../../components";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import Erro from "../../components/Erro";
import Explicação from "../../components/Explicacao";
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
    foco,
    resetar,
    alterarElemento,
    alterarCategoria,
    erro,
    fecharErro,
    explicacaoAberta,
    fecharExplicacao
}) {

    const NORMAL = 1;
    const RESET = 4;

    return (
        <InicialStyled>
            <Titulo valor={'Sorteador'} />
            {
                erro.existe &&
                    <Erro 
                        mensagem={erro.mensagem}
                        fechar={fecharErro}
                    />
            }
            {
                explicacaoAberta && 
                    <Explicação 
                        fechar={fecharExplicacao}
                    />
            }
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
                alterarElemento={alterarElemento}
                alterarCategoria={alterarCategoria}
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
            <Botao
                perfil={RESET}
                etiqueta='Resetar'
                funcao={resetar}
            />
        </InicialStyled>
    );
}

export default Inicial;