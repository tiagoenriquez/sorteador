import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import { useState } from "react";

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [categoriaNova, setCategoriaNova] = useState("");
  const [elementoNovo, setElementoNovo] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  
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

  function handleQuantidade(evento) {
    setQuantidade(parseInt(evento.target.value));
  }

  function sortear(evento) {
    console.log(evento);
    setResultado(true);
  }

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? <Resultado />
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
          quantidade={quantidade}
          obterQuantidade={handleQuantidade}
          sortear={sortear}
        />
      }
    </ThemeProvider>
  );
}

export default App;
