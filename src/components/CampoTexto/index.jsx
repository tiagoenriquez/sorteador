import { CampoTextoStyled } from "./style";

function CampoTexto({ etiqueta }) {
    return (
        <CampoTextoStyled
            placeholder={etiqueta}
        />
    );
}

export default CampoTexto;