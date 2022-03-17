import { BotaoNormalStyled } from "./style";
import { BotaoPequenoStyled } from "./style";

function Botao({ grande, etiqueta }) {
    
    if (grande) {
        return (
            <BotaoNormalStyled>{etiqueta}</BotaoNormalStyled>
        );
    } else {
        return (
            <BotaoPequenoStyled>{etiqueta}</BotaoPequenoStyled>
        );
    }

}

export default Botao;