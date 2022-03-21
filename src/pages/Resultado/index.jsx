import { Grupos, Titulo } from "../../components";
import Botao from "../../components/Botao";
import { ResultadoStyled } from "./styled";

function Resultado({elementos, resetar}) {

    const titulos = [
        {
            chave: 1,
            nome: 'Nome'
        }, {
            chave: 2,
            nome: 'Categoria'
        }
    ];

    return (
        <ResultadoStyled>
            <Titulo valor={'Resultado do Sorteio'} />
            <Grupos
                titulos={titulos}
                elementos={elementos}
            />
            <Botao            
                etiqueta={'Voltar à página inicial'}
                funcao={resetar}
                informacao={'Retorna à página incial com os dados de origem.'}
                perfil={1}
            />
        </ResultadoStyled>
    );
}

export default Resultado;