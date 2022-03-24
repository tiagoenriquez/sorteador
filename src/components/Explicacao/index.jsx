import Botao from "../Botao";
import { CaixaExplicacaoStyled, ExplicacaoStyled } from "./style";

function Explicação({ fechar }) {
    return (
        <CaixaExplicacaoStyled>
            <div>
                <ExplicacaoStyled>Bem vindo ao nosso Sorteador!!!</ExplicacaoStyled>
                <ExplicacaoStyled>Esta aplicação é destinada a quem precisa sortear elementos em grupos por categoria.</ExplicacaoStyled>
                <ExplicacaoStyled>Aqui você consegue sortear a quantidade de elementos que você quiser na quantidade de grupos que você quiser, que consegue que as categorias sejam uniformemente distribuídas nos diferentes grupos.</ExplicacaoStyled>
                <ExplicacaoStyled>Só não vale inserir mais de um elemento com o mesmo nome!!!</ExplicacaoStyled>
                <ExplicacaoStyled>Esta aplicação vai sortear os elementos inseridos a partir da segunda linha, que são aqueles que possuem um botão vermelho com sinal negativo.</ExplicacaoStyled>
                <ExplicacaoStyled>Para inserir elemento, clique no mais.</ExplicacaoStyled>
                <ExplicacaoStyled>Para remover elemento da lista, clique no menos.</ExplicacaoStyled>
                <ExplicacaoStyled>Errou a grafia da palavra? Não se preocupe! Você consegue ir até o campo e digitar a palavra novamente para ser sorteada com a grafia certa.</ExplicacaoStyled>
                <ExplicacaoStyled>Se um elemento a ser inserido for de uma categoria já registrada, você consegue selecionar no campo de seleção acima dos campos de digitação.</ExplicacaoStyled>
                <ExplicacaoStyled>Se digitou tudo errado e se perdeu, você pode resetar e começar do zero.</ExplicacaoStyled>
                <ExplicacaoStyled>Se os elementos tirverem sido inseridos e prontos para sorteio, é só clicar no botão sortear que o nosso programa devolve para você a tela com o resultado do sorteio.</ExplicacaoStyled>
                <ExplicacaoStyled>Boa sorte no uso da nossa ferramenta!!!</ExplicacaoStyled>
            </div>
            <Botao 
                funcao={fechar}
                perfil={1}
                etiqueta={'Fechar explicação'}
            />
        </CaixaExplicacaoStyled>
    );
}

export default Explicação;