import { SeletorStyled } from "./style";

function Seletor({ valor, categorias, funcao }) {

    return (
        <SeletorStyled value={valor}>
            {
                categorias.map((categoria) => 
                <option 
                    key={categoria.chave}
                    value={categoria.nome}
                    onClick={funcao}
                >
                    {categoria.nome} - {categoria.ocorrencias}
                </option>)
            }
        </SeletorStyled>
    );
}

export default Seletor;