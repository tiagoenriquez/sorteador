import { CampoTextoStyled } from "./style";

function CampoTexto({ etiqueta, funcao, valor, foco }) {

    return (
        <CampoTextoStyled
            onChange={funcao}
            placeholder={etiqueta}
            value={valor}
            autoFocus={foco}
        />
    );
}

export default CampoTexto;