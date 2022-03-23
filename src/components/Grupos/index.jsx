import Subtitulo from "../Subtitulo";
import Tabela from "../Tabela";
import { GruposStyled, GrupoStyled } from "./style";

function Grupos({ titulos, elementos }) {

    function obterGrupos(elementos) {
        let grupos = 0;
        elementos.forEach((elemento) => {
            if (elemento.grupo > grupos) {
                grupos = elemento.grupo;
            }
        });
        let listaGrupos = [];
        for (let i = 0; i < grupos; i++) {
            let chave = i + 1;
            listaGrupos.push({
                chave: chave,
                nome: `Grupo ${chave}`,
                elementos: elementos.filter((elemento) => elemento.grupo === chave)
            });
        }
        return listaGrupos;
    }

    const grupos = obterGrupos(elementos);

    return(
        <GruposStyled>
            {
                grupos.map((grupo) => 
                    <GrupoStyled key={grupo.chave}>
                        <Subtitulo valor={grupo.nome} />
                        <Tabela
                            titulos={titulos}
                            elementos={grupo.elementos}
                        />
                    </GrupoStyled>
                )
            }
        </GruposStyled>
    );

}

export default Grupos;