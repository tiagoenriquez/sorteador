import Elemento from "../Elemento";
import { ContainerStyled } from "./style";

function Container({ elementos, adicionarElementoNovo, adicionarCategoriaNova, elementoNovo, categoriaNova }) {

    return (
        <ContainerStyled>
            {
                elementos.map((elemento) => 
                    <Elemento
                        key={elemento.chave}
                    />
                )
            }
            <Elemento
                adicionarElemento={adicionarElementoNovo}
                adicionarCategoria={adicionarCategoriaNova}
                elemento={elementoNovo}
                categoria={categoriaNova}
            />
        </ContainerStyled>
    );
}

export default Container;