import { BotaoMaisStyled, BotaoMenosStyled, BotaoNormalStyled } from "./style";
import InformacaoBotao from "../InformacaoBotao";
import { useState } from "react";

function Botao({ perfil, etiqueta, informacao, funcao, classeBotao }) {

    const [mostraInformacao, setMostraInformacao] = useState(false);

    function mostrarInformacao() {
        setMostraInformacao(true);
    }

    function esconderInformacao() {
        setMostraInformacao(false);
    }

    switch (perfil) {
        case 1:
            return (
                <BotaoNormalStyled
                    onMouseOver={mostrarInformacao}
                    onMouseOut={esconderInformacao}
                    onClick={funcao}
                >
                    {etiqueta}
                    <InformacaoBotao
                        informacao={informacao}
                        aparecendo={mostraInformacao}
                    />
                    <InformacaoBotao informacao={informacao} />
                </BotaoNormalStyled>
            );
        case 2:
            return (
                <BotaoMaisStyled
                    onMouseOver={mostrarInformacao}
                    onMouseOut={esconderInformacao}
                    onClick={funcao}
                >
                    {etiqueta}
                    <InformacaoBotao
                        informacao={informacao}
                        aparecendo={mostraInformacao}
                    />
                    <InformacaoBotao informacao={informacao} />
                </BotaoMaisStyled>
            );
        case 3:
            return (
                <BotaoMenosStyled
                    onMouseOver={mostrarInformacao}
                    onMouseOut={esconderInformacao}
                    onClick={funcao}
                    id={classeBotao}

                >
                    {etiqueta}
                    <InformacaoBotao
                        informacao={informacao}
                        aparecendo={mostraInformacao}
                    />
                    <InformacaoBotao informacao={informacao} />
                </BotaoMenosStyled>
            );
        default:
            return null;
    }

}

export default Botao;