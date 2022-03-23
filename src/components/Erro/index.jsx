import Botao from "../Botao";
import { ErroStyled, EtiquetaErroStyled } from "./style";

function Erro({ mensagem, fechar }) {

    return (
        <ErroStyled>
            <EtiquetaErroStyled>{mensagem}</EtiquetaErroStyled>
            <Botao 
                perfil={2}
                etiqueta={'Ok'}
                funcao={fechar}
            />
        </ErroStyled>
    );
}

export default Erro;