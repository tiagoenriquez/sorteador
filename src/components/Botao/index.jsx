import { BotaoMaisStyled, BotaoMenosStyled, BotaoNormalMenosStyled, BotaoNormalStyled } from "./style";
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
                    {
                        informacao &&
                        <InformacaoBotao
                            informacao={informacao}
                            aparecendo={mostraInformacao}
                        />
                    }
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
                    {
                        informacao &&
                        <InformacaoBotao
                            informacao={informacao}
                            aparecendo={mostraInformacao}
                        />
                    }
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
                    {
                        informacao &&
                        <InformacaoBotao
                            informacao={informacao}
                            aparecendo={mostraInformacao}
                        />
                    }
                </BotaoMenosStyled>
            );
        case 4:
            return (
                <BotaoNormalMenosStyled
                    onClick={funcao}
                    id={classeBotao}

                >
                    {etiqueta}
                    {
                        informacao &&
                        <InformacaoBotao
                            informacao={informacao}
                            aparecendo={mostraInformacao}
                        />
                    }
                </BotaoNormalMenosStyled>
            );
        default:
            return null;
    }

}

export default Botao;