export function sortear(elementos, categorias, grupos) {
    let categoriasOrdenadas = ordenarCategorias(categorias);
    let elementosOrdenados = sortearElementos(elementos, categoriasOrdenadas);
    console.log(elementosOrdenados);
    let gruposSorteados = sortearGrupos(grupos);
    return agruparElementos(elementosOrdenados, gruposSorteados);
}

function ordenarCategorias(categorias) {
    let categoriasOrdenadas = categorias.sort(function(a, b) {
        if (a.ocorrencias > b.ocorrencias) {
            return -1;
        } else if (a.ocorrencias < b.ocorrencias) {
            return 1;
        } else {
            return 0;
        }
    });
    return categoriasOrdenadas;
}

function sortearElementos(elementos, categorias) {
    let elementosOrdenados = [];
    categorias.forEach((categoria) => {
        let elementosCategoria = [];
        elementos.forEach((elemento) => {
            if (elemento.categoria === categoria.nome) {
                elementosCategoria.push(elemento);
            }
        });
        let elementosCategoriaSorteados = [];
        elementosCategoria.forEach(() => {
            let indiceSorteado = Math.floor(Math.random() * elementosCategoria.length);
            let elementoSorteado = elementosCategoria[indiceSorteado];
            elementosCategoriaSorteados.push(elementoSorteado);
            elementosCategoria = elementosCategoria.filter((elemento) => elemento !== elementoSorteado);
        });
        elementosCategoriaSorteados.forEach((elemento) => {
            elementosOrdenados.push(elemento);
        });
    });
    return elementosOrdenados;
}

function sortearGrupos(grupos) {
    let gruposSorteados = [];
    for (let i = 0; i < grupos; i++) {
        let indiceSorteado;
        while (indiceSorteado === undefined || gruposSorteados.includes(indiceSorteado)) {
            indiceSorteado = Math.floor(Math.random() * grupos + 1);
        }
        gruposSorteados.push(indiceSorteado);
    }
    return gruposSorteados;
}

function agruparElementos(elementos, grupos) {
    let elementosAgrupados = [];
    elementos.forEach((elemento, indice) => {
        let grupo = indice % grupos.length;
        elemento.grupo = grupos[grupo];
        elementosAgrupados.push(elemento);
    });
    return elementosAgrupados;
}