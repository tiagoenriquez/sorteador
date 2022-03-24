import { useState } from "react";
import { ListaOpcoesStyled, OpcaoStyled, OpcoesContainerStyled, SeletorContainerStyled, SetaStyled, TituloSeletorStyled } from "./style";
import seta from "../../assets/seta-para-baixo.jpg";

function Seletor({ valor, categorias, funcao }) {

    const [selecionado, setSelecionado] = useState(false);

    function selecionarSeletor(evento) {
        if (evento) {
            if (selecionado) {
                setSelecionado(false);
            } else {
                setSelecionado(true);
            }
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
            <TituloSeletorStyled 
                onClick={selecionarSeletor}
            >
                Selecione uma categoria 
                <SetaStyled
                    src={seta}
                    alt='Imagem não pôde ser carregada'   
                />
                </TituloSeletorStyled>
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