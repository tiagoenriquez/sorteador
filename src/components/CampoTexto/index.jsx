import { CampoTextoStyled } from "./style";

function CampoTexto({ etiqueta, funcao, valor }) {

    return (
        <CampoTextoStyled
            onChange={funcao}
            placeholder={etiqueta}
            value={valor}
        />
    );
}

export default CampoTexto;