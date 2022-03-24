import { IconeStyled, RodapeStyled } from "./style";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Rodape() {
    return (
        <RodapeStyled>
            Desenvolvido por Tiago Enriquez Tachy --- 
            <a href="https://github.com/tiagoenriquez/">
                <IconeStyled
                    src={github}
                    alt='Imagem não encontrada'
                />
            </a>
            <a href="https://www.linkedin.com/in/tiago-enriquez-tachy-0623a631/">
                <IconeStyled
                    src={linkedin}
                    alt='Imagem não encontrada'
                />
            </a>
        </RodapeStyled>
    );
}

export default Rodape;