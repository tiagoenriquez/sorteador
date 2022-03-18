import { CampoTextoStyled } from "./style";

function CampoTexto({ etiqueta, funcao, valor }) {

    return (
        <CampoTextoStyled
            onChange={funcao}
            value={valor}
            placeholder={etiqueta}
        />
    );
}

export default CampoTexto;