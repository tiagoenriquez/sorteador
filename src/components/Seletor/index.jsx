import { useState } from "react";
import { ListaOpcoesStyled, OpcaoStyled, OpcoesContainerStyled, SeletorContainerStyled, TituloSeletorStyled } from "./style";

function Seletor({ valor, categorias, funcao }) {

    const [selecionado, setSelecionado] = useState(false);

    function selecionarSeletor(evento) {
        if (evento) {
            setSelecionado(true);
        }
    }

    function selecionarCategoria(evento) {
        if (evento) {
            setSelecionado(false);
            funcao(evento);
        }
    }

    return (
        <SeletorContainerStyled>
            <TituloSeletorStyled onClick={selecionarSeletor}>Selecione uma categoria</TituloSeletorStyled>
            {
                selecionado && 
                    <OpcoesContainerStyled>
                        <ListaOpcoesStyled>
                            <OpcaoStyled onClick={selecionarCategoria}></OpcaoStyled>
                            {
                                categorias.map((categoria) => 
                                    <OpcaoStyled
                                        key={categoria.chave}
                                        value={categoria.nome}
                                        onClick={selecionarCategoria}
                                    >
                                        {categoria.nome}
                                    </OpcaoStyled>
                                )
                            }
                        </ListaOpcoesStyled>
                    </OpcoesContainerStyled>
            }
        </SeletorContainerStyled>
    );
}

export default Seletor;