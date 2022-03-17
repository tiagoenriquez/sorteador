import { SeletorStyled } from "./style";

function Seletor({ valor, categorias }) {
    return (
        <SeletorStyled value={valor}>
            {
                categorias.map((categoria) => 
                <option 
                    key={categoria.chave}
                    value={categoria.nome}
                >
                    {categoria.nome}
                </option>)
            }
        </SeletorStyled>
    );
}

export default Seletor;