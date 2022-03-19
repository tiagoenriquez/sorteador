import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import { useState } from "react";
import { sortear } from "./services/SorteioService";

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [categoriaNova, setCategoriaNova] = useState("");
  const [elementoNovo, setElementoNovo] = useState("");
  const [grupos, setGrupos] = useState(0);
  
  function handleElementoNovo(evento) {
    setElementoNovo(evento.target.value);
  }

  function handleCategoriaNova(evento) {
    setCategoriaNova(evento.target.value);
  }

  function adicionarNovo() {
    setElementoNovo(elementoNovo + " ");
    setCategoriaNova(categoriaNova + " ");
  }

  function incrementarElementos() {
    let novaListaElementos = elementos;
    novaListaElementos.push({chave: elementos.length, nome: elementoNovo, categoria: categoriaNova});
    setElementos(novaListaElementos);
  }

  function atualizarCategorias(todosElementos) {
    let categoriasString = [];
    todosElementos.forEach((elemento) => {
      if (!categoriasString.includes(elemento.categoria)) {
        categoriasString.push(elemento.categoria);
      }
    });
    let categoriasObjeto = [];
    categoriasString.forEach((categoria, indice) => {
      let ocorrencias = 0;
      todosElementos.forEach((elemento) => {
        if (elemento.categoria === categoria) {
          ocorrencias++;
        }
      });
      categoriasObjeto.push({chave: indice, nome: categoria, ocorrencias: ocorrencias});
    });
    setCategorias(categoriasObjeto);
  }

  function limparNovosCampos() {
    setElementoNovo('');
    setCategoriaNova('');
  }

  function adicionarElemento(evento) {
    if (evento) {
      adicionarNovo();
      incrementarElementos();
      atualizarCategorias(elementos);
      limparNovosCampos();
    }
  }

  function selecionarCategoria(evento) {
    if (evento) {
      setCategoriaNova(evento.target.value);
    }
  }

  function removerElemento(evento) {
    if (evento) {
      let todosElementos = elementos.filter((elemento) => elemento.chave !== parseInt(evento.currentTarget.id));
      setElementos(todosElementos);
      atualizarCategorias(todosElementos);
    }
  }

  function handleGrupos(evento) {
    setGrupos(parseInt(evento.target.value));
  }

  function sendSortear() {
    let elementosSorteados = sortear(elementos, categorias, grupos);
    console.log(elementosSorteados);
    setElementos(elementosSorteados);
    setResultado(true);
  }

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? <Resultado elementos={elementos} />
        : 
        <Inicial
          categorias={categorias}
          valor={'-'}
          elementos={elementos}
          obterElementoNovo={handleElementoNovo}
          obterCategoriaNova={handleCategoriaNova}
          adicionarElementoNovo={adicionarElemento}
          elementoNovo={elementoNovo}
          categoriaNova={categoriaNova}
          selecionarCategoria={selecionarCategoria}
          removerElemento={removerElemento}
          grupos={grupos}
          obterGrupos={handleGrupos}
          sortear={sendSortear}
          foco={true}
        />
      }
    </ThemeProvider>
  );
}

export default App;
