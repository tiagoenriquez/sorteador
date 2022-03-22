import { CampoTextoStyled } from "./style";

function CampoTexto({ etiqueta, funcao, valor, foco, id }) {

    return (
        <CampoTextoStyled
            onChange={funcao}
            placeholder={etiqueta}
            value={valor}
            autoFocus={foco}
            id={id}
        />
    );
}

export default CampoTexto;